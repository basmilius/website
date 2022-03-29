import { memo, PropsWithChildren } from "react";

import styles from "./Work.module.scss";

export default memo(({children}: PropsWithChildren<{}>) => (
    <div className={styles.workDeck}>
        {children}
    </div>
));
