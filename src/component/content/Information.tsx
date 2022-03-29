import { memo, PropsWithChildren } from "react";

import styles from "./Information.module.scss";

export default memo(({children}: PropsWithChildren<{}>) => (
    <div className={styles.information}>
        {children}
    </div>
));
