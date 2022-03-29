import { Icon, useClipboard } from "@latte-ui/core";
import { memo } from "react";

import styles from "./Information.module.scss";

export default memo(({icon, title, value}: Props) => {
    const [isCopied, copy] = useClipboard(value, 2000);

    return (
        <button className={`${styles.informationItem} ${isCopied ? styles.informationCopied : ""}`} onClick={copy}>
            <div className={styles.informationItemIconMount}>
                <Icon name={icon} className={styles.informationItemIcon}/>
            </div>

            <div className={styles.informationItemCaption}>
                <div className={styles.informationItemValue}>
                    {value}
                </div>

                <div className={styles.informationItemTitle}>
                    {!isCopied && title}
                    {isCopied && "Copied!"}
                </div>
            </div>
        </button>
    );
});

interface Props {
    icon: string;
    title: string;
    value: string;
}
