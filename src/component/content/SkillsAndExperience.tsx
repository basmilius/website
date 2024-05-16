import styles from './SkillsAndExperience.module.scss';

import { CSSProperties, PropsWithChildren } from 'react';
import { Icon, Row } from '@/component/shell';

const Grid = ({children}: PropsWithChildren) => (
    <Row
        isAlternate
        isIndented
        title="Skills & Experience"
        subTitle="Programming languages, frameworks and more that I've worked with.">
        <div className={styles.skills}>
            {children}
        </div>
    </Row>
);

const Item = ({color, icon, label}: SkillProps) => (
    <div
        className={styles.skill}
        style={{
            '--color': color
        } as CSSProperties}>
        <Icon
            className={styles.skillIcon}
            name={icon}/>

        <strong>{label}</strong>
    </div>
);

const Standard = () => (<>
    <Item
        color="189 100% 50%"
        icon="fab react"
        label="React"/>

    <Item
        color="229 30% 44%"
        icon="fab php"
        label="PHP"/>

    <Item
        color="217 68% 49%"
        icon="fab flutter"
        label="Flutter"/>

    <Item
        color="10 80% 55%"
        icon="fab git-alt"
        label="Git"/>

    <Item
        color="211 60% 48%"
        icon="fab typescript"
        label="TypeScript"/>

    <Item
        color="13 77% 52%"
        icon="fab html5"
        label="HTML"/>

    <Item
        color="228 78% 52%"
        icon="fab css3"
        label="CSS"/>

    <Item
        color="53 93% 54%"
        icon="fab js"
        label="JavaScript"/>

    <Item
        color="256 100% 66%"
        icon="fab kotlin"
        label="Kotlin"/>

    <Item
        color="139 45% 24%"
        icon="fab node-js"
        label="Node.js"/>

    <Item
        color="153 47% 49%"
        icon="fab vuejs"
        label="Vue.js"/>

    <Item
        color="197 100% 37%"
        icon="fab wordpress-simple"
        label="WordPress"/>

    <Item
        color="8 87% 58%"
        icon="fab swift"
        label="Swift"/>

    <Item
        color="0 100% 49%"
        icon="fab java"
        label="Java"/>

    <Item
        color="262 80% 51%"
        icon="fab microsoft"
        label="C# / .NET"/>
</>);

export default Object.assign({}, {
    Grid,
    Item,
    Standard
});

type SkillProps = {
    readonly color: string;
    readonly icon: string;
    readonly label: string;
};
