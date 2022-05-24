import styles from "./Information.module.scss";

import { memo, PropsWithChildren } from "react";

export default memo(({ children }: PropsWithChildren<{}>) => (
    <div className={styles.information}>
        {children}
    </div>
));
