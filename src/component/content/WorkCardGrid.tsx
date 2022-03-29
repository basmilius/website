import { memo, PropsWithChildren } from "react";

import styles from "./Work.module.scss";

export default memo(({children, title, more}: PropsWithChildren<Props>) => (
    <div className={more ? styles.workGridMore : styles.workGrid}>
        {title && <h2 className={styles.workGridTitle}>{title}</h2>}
        {children}
    </div>
));

interface Props {
    title?: string;
    more?: boolean;
}
