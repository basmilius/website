import styles from './Information.module.scss';

import { PropsWithChildren } from 'react';
import InformationItem from './InformationItem';

export const Grid = ({children}: PropsWithChildren) => (
    <div className={styles.informationGrid}>
        {children}
    </div>
);

export const Item = InformationItem;

export default Object.assign({}, {
    Grid,
    Item
});
