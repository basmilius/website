import styles from "./Work.module.scss";

import { memo, PropsWithChildren } from "react";

export default memo(({ children }: PropsWithChildren<{}>) => (
    <div className={styles.workDeck}>
        {children}
    </div>
));
