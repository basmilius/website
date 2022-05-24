import styles from "./Footer.module.scss";

import { memo } from "react";

export default memo(() => (
    <footer className={styles.footer}>
        Copyright &copy; 2008&ndash;2022 &bull; KvK: 78355621 &bull; BTW: NL003322759B51
    </footer>
));
