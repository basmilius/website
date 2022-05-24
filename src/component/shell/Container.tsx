import styles from "./Container.module.scss";

import { memo, PropsWithChildren } from "react";

export default memo(({ children, className = "" }: PropsWithChildren<{ className?: string; }>) => (
    <div className={`${styles.container} ${className}`}>
        {children}
    </div>
));
