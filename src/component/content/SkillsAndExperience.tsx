import { Icon } from "@latte-ui/core";
import { CSSProperties, memo } from "react";
import { BMSection } from "@/component/shell";

import styles from "./SkillsAndExperience.module.scss";

export default memo(() => (
    <BMSection
        isAlternate
        isIndented
        title="Skills & Experience"
        subTitle="Programming languages, frameworks and more that I've worked with.">

        <div className={styles.skillsGrid}>
            <div className={styles.skill} style={{"--color": "189 100% 50%"} as CSSProperties}>
                <Icon className={styles.skillIcon} name="fab react"/>
                <strong>React</strong>
            </div>

            <div className={styles.skill} style={{"--color": "229 30% 44%"} as CSSProperties}>
                <Icon className={styles.skillIcon} name="fab php"/>
                <strong>PHP</strong>
            </div>

            <div className={styles.skill} style={{"--color": "102 53% 52%"} as CSSProperties}>
                <Icon className={styles.skillIcon} name="fab git-alt"/>
                <strong>Git</strong>
            </div>

            <div className={styles.skill} style={{"--color": "211 60% 48%"} as CSSProperties}>
                <Icon className={styles.skillIcon} name="fab typescript"/>
                <strong>TypeScript</strong>
            </div>

            <div className={styles.skill} style={{"--color": "13 77% 52%"} as CSSProperties}>
                <Icon className={styles.skillIcon} name="fab html5"/>
                <strong>HTML</strong>
            </div>

            <div className={styles.skill} style={{"--color": "228 78% 52%"} as CSSProperties}>
                <Icon className={styles.skillIcon} name="fab css3"/>
                <strong>CSS</strong>
            </div>

            <div className={styles.skill} style={{"--color": "53 93% 54%"} as CSSProperties}>
                <Icon className={styles.skillIcon} name="fab js-square"/>
                <strong>JavaScript</strong>
            </div>

            <div className={styles.skill} style={{"--color": "256 100% 66%"} as CSSProperties}>
                <Icon className={styles.skillIcon} name="fab kotlin"/>
                <strong>Kotlin</strong>
            </div>

            <div className={styles.skill} style={{"--color": "139 45% 24%"} as CSSProperties}>
                <Icon className={styles.skillIcon} name="fab node-js"/>
                <strong>Node.js</strong>
            </div>

            <div className={styles.skill} style={{"--color": "153 47% 49%"} as CSSProperties}>
                <Icon className={styles.skillIcon} name="fab vuejs"/>
                <strong>Vue.js</strong>
            </div>

            <div className={styles.skill} style={{"--color": "197 100% 37%"} as CSSProperties}>
                <Icon className={styles.skillIcon} name="fab wordpress-simple"/>
                <strong>WordPress</strong>
            </div>

            <div className={styles.skill} style={{"--color": "8 87% 58%"} as CSSProperties}>
                <Icon className={styles.skillIcon} name="fab swift"/>
                <strong>Swift</strong>
            </div>

            <div className={styles.skill} style={{"--color": "0 100% 49%"} as CSSProperties}>
                <Icon className={styles.skillIcon} name="fab java"/>
                <strong>Java</strong>
            </div>

            <div className={styles.skill} style={{"--color": "347 100% 43%"} as CSSProperties}>
                <Icon className={styles.skillIcon} name="fab angular"/>
                <strong>Angular</strong>
            </div>

            <div className={styles.skill} style={{"--color": "262 80% 51%"} as CSSProperties}>
                <Icon className={styles.skillIcon} name="fas code"/>
                <strong>C# / .NET</strong>
            </div>
        </div>

    </BMSection>
));
