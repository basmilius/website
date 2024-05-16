'use client';

import styles from './Information.module.scss';

import { Icon } from '@/component/shell';
import { useClipboard } from '@/hook';

export default ({icon, title, value}: Props) => {
    const [didCopy, copy] = useClipboard(value, 2000);

    return (
        <button
            className={didCopy ? styles.informationItemCopied : styles.informationItem}
            onClick={copy}>
            <div className={styles.informationItemIconMount}>
                <Icon
                    name={icon}
                    className={styles.informationItemIcon}/>
            </div>

            <div className={styles.informationItemCaption}>
                <div className={styles.informationItemValue}>
                    {value}
                </div>

                <div className={styles.informationItemTitle}>
                    {!didCopy && title}
                    {didCopy && 'Copied!'}
                </div>
            </div>
        </button>
    );
};

type Props = {
    readonly icon: string;
    readonly title: string;
    readonly value: string;
};
