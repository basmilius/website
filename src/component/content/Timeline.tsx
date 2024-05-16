import styles from './Timeline.module.scss';

import { PropsWithChildren } from 'react';

const Item = ({children, date ,title}: PropsWithChildren<ItemProps>) => (
    <div className={styles.timelineItem}>
        <svg
            className={styles.timelineItemLine}
            width="60px">
            <line
                x1={30}
                x2={30}
                y1="0"
                y2="100%"
                strokeWidth={2}
                strokeLinecap="round"/>

            <circle
                cx={30}
                cy={39}
                r={18}
                fill="#fdfeff"
                strokeWidth={2}
                strokeLinecap="round"/>

            <circle
                cx={30}
                cy={39}
                r={6}/>
        </svg>

        <div className={styles.timelineItemContent}>
            <h3>{title}</h3>
            <span className={styles.timelineItemDate}>{date}</span>
            {children}
        </div>
    </div>
);

const Lane = ({children}: PropsWithChildren) => (
    <div className={styles.timeline}>
        {children}
    </div>
);

export default Object.assign({}, {
    Item,
    Lane
});

type ItemProps = {
    readonly date: string;
    readonly title: string;
};
