import { CSSProperties, memo } from "react";
import { BMIcon, BMSection } from "@/component/shell";

import styles from "./SkillsAndExperience.module.scss";

interface SkillProps {
    color: string;
    icon: string;
    label: string;
}

const Skill = memo(({color, icon, label}: SkillProps) => (
    <div className={styles.skill} style={{"--color": color} as CSSProperties}>
        <BMIcon className={styles.skillIcon} name={icon}/>
        <strong>{label}</strong>
    </div>
));

export default memo(() => (
    <BMSection
        isAlternate
        isIndented
        title="Skills & Experience"
        subTitle="Programming languages, frameworks and more that I've worked with.">

        <div className={styles.skillsGrid}>
            <Skill color="189 100% 50%" icon="fab react" label="React"/>
            <Skill color="229 30% 44%" icon="fab php" label="PHP"/>
            <Skill color="102 53% 52%" icon="fab git-alt" label="Git"/>
            <Skill color="211 60% 48%" icon="fab typescript" label="TypeScript"/>
            <Skill color="13 77% 52%" icon="fab html5" label="HTML"/>
            <Skill color="228 78% 52%" icon="fab css3" label="CSS"/>
            <Skill color="53 93% 54%" icon="fab js-square" label="JavaScript"/>
            <Skill color="256 100% 66%" icon="fab kotlin" label="Kotlin"/>
            <Skill color="139 45% 24%" icon="fab node-js" label="Node.js"/>
            <Skill color="153 47% 49%" icon="fab vuejs" label="Vue.js"/>
            <Skill color="197 100% 37%" icon="fab wordpress-simple" label="WordPress"/>
            <Skill color="8 87% 58%" icon="fab swift" label="Swift"/>
            <Skill color="0 100% 49%" icon="fab java" label="Java"/>
            <Skill color="347 100% 43%" icon="fab angular" label="Angular"/>
            <Skill color="262 80% 51%" icon="fab microsoft" label="C# / .NET"/>
        </div>

    </BMSection>
));
