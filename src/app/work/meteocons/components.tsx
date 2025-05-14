'use client';

import styles from './styles.module.scss';

import { useInView } from 'framer-motion';
import { useContext, useMemo, useRef } from 'react';
import { useObserveSticky } from '@/hook';
import { IconGroup, IconStyle, iconStyles } from './icons';
import { IconStyleContext } from './context';

export const Icon = ({icon}: { icon: string; }) => {
    const {style} = useContext(IconStyleContext);
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, {amount: 'some'});

    const name = icon
        .split('-')
        .map(w => w[0].toUpperCase() + w.substring(1))
        .join(' ');

    return (
        <div
            ref={ref}
            className={styles.weatherIcon}
            aria-label={`Icon: ${name}`}>
            {inView && (
                <img
                    key={style}
                    className={styles.weatherIconImage}
                    src={`https://bmcdn.nl/assets/weather-icons/v3.0/${style}/svg/${icon}.svg`}
                    alt={icon}
                    loading="lazy"/>
            )}
        </div>
    );
};

export const IconSection = ({group}: IconSectionProps) => (
    <div className={styles.weatherIconSection}>
        <IconSectionHeader group={group}/>

        <div className={styles.weatherIconSectionContainer}>
            {group.icons.map((innerGroup, innerGroupIndex) => (
                <div
                    key={innerGroupIndex}
                    className={styles.weatherIconGroup}>
                    {innerGroup.map((icon, iconIndex) => (
                        <Icon
                            key={iconIndex}
                            icon={icon}/>
                    ))}
                </div>
            ))}
        </div>
    </div>
);

export const IconSectionHeader = ({group}: IconSectionProps) => {
    const ref = useRef(null);
    const {isSticky, isAfter} = useObserveSticky(ref, {
        threshold: 30
    });

    const className = useMemo(() => {
        if (isAfter) {
            return styles.weatherIconSectionHeaderStickyAfter;
        }

        if (isSticky) {
            return styles.weatherIconSectionHeaderSticky;
        }

        return styles.weatherIconSectionHeaderDefault;
    }, [isSticky, isAfter, ref]);

    return (
        <div
            ref={ref}
            className={className}>
            <h3>{group.label}</h3>

            <IconStyleSwitcher/>
        </div>
    );
};

export const IconStyleSwitcher = () => {
    const {style, setStyle} = useContext(IconStyleContext);

    return (
        <nav className={styles.weatherIconSectionStyleSwitcher}>
            {Object.keys(iconStyles).map(key => (
                <button
                    key={key}
                    className={`${styles.weatherIconSectionStyleSwitcherItem} ${style === key ? styles.weatherIconSectionStyleSwitcherItemActive : ''}`}
                    tabIndex={-1}
                    onClick={() => setStyle(key as IconStyle)}>
                    <img
                        height={36}
                        width={36}
                        src={`https://bmcdn.nl/assets/weather-icons/v3.0/${key}/svg-static/clear-day.svg`}
                        alt={iconStyles[key]}
                        loading="lazy"/>
                </button>
            ))}
        </nav>
    );
};

interface IconSectionProps {
    group: IconGroup,
}
