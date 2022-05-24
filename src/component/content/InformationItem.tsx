import styles from "./Information.module.scss";

import { useClipboard } from "@latte-ui/hooks";
import { memo } from "react";
import { BMIcon } from "@/component/shell";

export default memo(({ icon, title, value }: Props) => {
    const [ isCopied, copy ] = useClipboard(value, 2000);

    return (
        <button className={`${styles.informationItem} ${isCopied ? styles.informationCopied : ""}`} onClick={copy}>
            <div className={styles.informationItemIconMount}>
                <BMIcon name={icon} className={styles.informationItemIcon}/>
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
