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
            <line x1={30} x2={30} y1="3px" y2="100%" strokeWidth={6} strokeLinecap="round" strokeDasharray="0, 14.6"/>
            <circle cx={30} cy={40.5} r={22} fill="#fdfeff" strokeWidth={6} strokeLinecap="round" strokeDasharray="0, 13.8" strokeDashoffset={7}/>
            <circle cx={30} cy={40.5} r={9}/>
        </svg>
        <div className={styles.timelineItemContent}>
            <h4>{title}</h4>
            <span className={styles.timelineItemDate}>{date}</span>
            {children}
        </div>
    </div>
));

export default Object.assign(Timeline, {
    Item
});
