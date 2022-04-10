import { memo, PropsWithChildren } from "react";

import styles from "./Timeline.module.scss";

interface ItemProps {
    date: string;
    title: string;
}

const Timeline = memo(({children}: PropsWithChildren<{}>) => (
    <div className={styles.timeline}>
        {children}
    </div>
));

const Item = memo(({children, date, title}: PropsWithChildren<ItemProps>) => (
    <div className={styles.timelineItem}>
        <svg className={styles.timelineItemLine} width="60px">
            <line x1={30} x2={30} y1="0" y2="100%" strokeWidth={2} strokeLinecap="round"/>
            <circle cx={30} cy={39} r={18} fill="#fdfeff" strokeWidth={2} strokeLinecap="round"/>
            <circle cx={30} cy={39} r={6}/>
        </svg>
        <div className={styles.timelineItemContent}>
            <h3>{title}</h3>
            <span className={styles.timelineItemDate}>{date}</span>
            {children}
        </div>
    </div>
));

export default Object.assign(Timeline, {
    Item
});
