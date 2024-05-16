'use client';

import logo from '@/asset/image/logo.svg';
import styles from './Navigation.module.scss';

import { usePathname } from 'next/navigation';
import { Link } from 'next-view-transitions';
import { useEffect, useState } from 'react';
import { useDebounced, useMounted, useWindowScroll } from '@/hook';
import Icon from './Icon';

export default () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const {y} = useWindowScroll();
    const isMounted = useMounted();
    const pathname = usePathname();

    const isMobileMenuCanvasVisible = useDebounced(isMobileMenuOpen, 600);
    const isMenuCollapsed = isMounted && y > 0;
    const isTitleVisible = isMounted && y > 320;

    useEffect(() => setMobileMenuOpen(false), [pathname]);

    return (<>
        <a
            className={styles.skipToContent}
            href={'#content'}>
            <Icon name="fas down-to-line"/>
            <span>Skip to content</span>
        </a>

        <header className={isMenuCollapsed ? styles.navigationScrolled : styles.navigation}>
            <nav className={styles.navigationNav}>
                <Toggle onClick={() => setMobileMenuOpen(true)}/>

                <Link
                    className={styles.navigationLogo}
                    href="/">
                    <img
                        className={styles.navigationLogoImage}
                        src={logo.src}
                        alt="Logo"/>
                </Link>

                <div className={styles.navigationVariable}>
                    {isMounted && (
                        <span className={isTitleVisible ? styles.navigationVariableTitleVisible : styles.navigationVariableTitle}>
                            {/* SlotFill.Slot */}
                        </span>
                    )}
                </div>

                <DefaultItem
                    label="Home"
                    url="/"
                    isExact/>

                <DefaultItem
                    label="About"
                    url="/about"
                    isExact/>

                <DefaultItem
                    label="Work"
                    url="/work"
                    notActiveFor={['/work/meteocons']}/>

                <DefaultItem
                    label="Meteocons"
                    url="/work/meteocons"
                    isExact/>

                <DefaultItem
                    label="Contact"
                    url="/contact"
                    isExact/>
            </nav>
        </header>

        <div className={isMobileMenuOpen ? styles.mobileNavigationOpened : styles.mobileNavigationClosed}>
            {(isMobileMenuOpen || isMobileMenuCanvasVisible) && <MobileCanvas/>}

            <MobileToggle onClick={() => setMobileMenuOpen(false)}/>

            <nav className={styles.mobileNavigationNav}>
                <MobileItem
                    label="Home"
                    url="/"
                    isExact/>

                <MobileItem
                    label="About"
                    url="/about"
                    isExact/>

                <MobileItem
                    label="Work"
                    url="/work"
                    notActiveFor={['/work/meteocons']}/>

                <MobileItem
                    label="Meteocons"
                    url="/work/meteocons"
                    isExact/>

                <MobileItem
                    label="Contact"
                    url="/contact"
                    isExact/>
            </nav>
        </div>
    </>);
};

const Item = ({className, classNameActive, isExact, label, notActiveFor, url, onClick}: ItemProps) => {
    const pathname = usePathname();

    const isActive = isExact ? pathname === url : pathname.startsWith(url) && !notActiveFor.includes(pathname);

    return (
        <Link
            className={isActive ? classNameActive : className}
            href={url}
            onClick={() => onClick?.()}>
            {label}
        </Link>
    );
};

const DefaultItem = ({isExact, label, notActiveFor, url, onClick}: Omit<ItemProps, 'className' | 'classNameActive'>) => (
    <Item
        className={styles.defaultNavigationItem}
        classNameActive={styles.defaultNavigationItemActive}
        isExact={isExact}
        label={label}
        notActiveFor={notActiveFor}
        url={url}
        onClick={onClick}/>
);

const MobileItem = ({isExact, label, notActiveFor, url, onClick}: Omit<ItemProps, 'className' | 'classNameActive'>) => (
    <Item
        className={styles.mobileNavigationItem}
        classNameActive={styles.mobileNavigationItemActive}
        isExact={isExact}
        label={label}
        notActiveFor={notActiveFor}
        url={url}
        onClick={onClick}/>
);

const MobileCanvas = () => null;

const MobileToggle = ({onClick}: ToggleProps) => (
    <button
        className={styles.mobileNavigationClose}
        onClick={() => onClick?.()}
        aria-label="Toggle navigation">
        <Icon
            className={styles.mobileNavigationCloseIcon}
            name="fas xmark-large"/>
    </button>
);

const Toggle = ({onClick}: ToggleProps) => (
    <button
        className={styles.navigationToggle}
        onClick={() => onClick?.()}
        aria-label="Toggle navigation">
        <Icon
            className={styles.navigationToggleIcon}
            name="fas bars"/>
    </button>
);

type ItemProps = {
    readonly className: string;
    readonly classNameActive: string;
    readonly isExact?: boolean;
    readonly label: string;
    readonly notActiveFor?: string[];
    readonly url: string;
    readonly onClick?: Function;
};

type ToggleProps = {
    readonly onClick?: Function;
};
