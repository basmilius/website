import { memo } from "react";

import styles from "./Footer.module.scss";

export default memo(() => (
    <footer className={styles.footer}>
        Copyright &copy; 2021 &bull; KvK: 78355621 &bull; BTW: NL003322759B51
    </footer>
));
