import { Tooltip, useInView, useObserveSticky } from "@latte-ui/core";
import { memo, useMemo, useRef, useState } from "react";
import { Head } from "@/component/platform";
import { BMHeader, BMNavigationTitle, BMSection, BMTextButton } from "@/component/shell";

import styles from "./styles.module.scss";

export default memo(() => {
    const [style, setStyle] = useState<IconStyle>("fill");

    const iconCount = useMemo(() => iconGroups.map(g => g.icons.flat().length).reduce((acc, val) => acc + val, 0), []);

    return (<>
        <Head>
            <title>Meteocons | Bas Milius &mdash; Full-Stack Developer</title>
        </Head>

        <BMNavigationTitle
            title="Meteocons"/>

        <BMHeader
            cards={[
                <img src={`https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg`} alt="Clear day icon from Meteocons" loading="lazy"/>,
                <img src={`https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-rain.svg`} alt="Overcast rain icon from Meteocons" loading="lazy"/>,
                <img src={`https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-snow.svg`} alt="Partly cloudy snow icon from Meteocons" loading="lazy"/>,
                <img src={`https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-sleet.svg`} alt="Partly cloudy sleet at night icon from Meteocons" loading="lazy"/>
            ]}
            title="Meteocons"/>

        <BMSection
            title="Animated Weather Icons"
            subTitle={`A set of ${iconCount} animated icons in different styles. Free to use in any kind of project.`}
            details={(
                <BMTextButton.Stack>
                    <BMTextButton
                        label="View on GitHub"
                        icon="fab github"
                        tag="a"
                        target="_blank"
                        href="https://github.com/basmilius/weather-icons"/>

                    <BMTextButton
                        label="Download"
                        icon="fas down"
                        tag="a"
                        target="_blank"
                        href="https://github.com/basmilius/weather-icons/archive/refs/heads/master.zip"/>
                </BMTextButton.Stack>
            )}>

            <p className="lead">
                These hand crafted icons are designed in Adobe Illustrator and animated to SVG files
                using code and Lottie files using Adobe After Effects. They'll look amazing in your
                own project.
            </p>

            <p>
                The icons are available under a MIT-license, which means that they're free to use and
                you may edit them as you wish. The only requirement is that you should preserve any
                copyright notices in the source files.
            </p>

            <ul>
                <li>
                    High performant Lottie animations are available for every style. These animations are
                    created using the LottieFiles plugin for Adobe After Effects.
                </li>
                <li>
                    Every style includes both animated and static SVG files. The animated SVG files cannot
                    be used on mobile and desktop apps as far as I know. Use the Lottie animations for that.
                </li>
                <li>
                    The monochrome style has various font formats available to use on desktop and on the
                    web. These fonts are not animated.
                </li>
                <li>
                    Static PNG files in various sizes are available. These files are pre-optimized with
                    every publish and are updated with every release.
                </li>
                <li>
                    The icons can be used in video projects. Various transparent video files are available
                    to use and the After Effects source file is also available.
                </li>
            </ul>
        </BMSection>

        {iconGroups.map((group, groupIndex) => (
            <IconSection
                key={groupIndex}
                group={group}
                style={style}
                setStyle={setStyle}/>
        ))}
    </>);
});

const Icon = memo(({icon, style}: { icon: string; style: IconStyle; }) => {
    const ref = useRef();
    const inView = useInView(ref, {initialValue: false, threshold: .25});
    const name = useMemo(() => icon.split("-").map(w => w[0].toUpperCase() + w.substring(1)).join(" "), [icon]);

    return (
        <div ref={ref} className={styles.weatherIcon}>
            {inView && (
                <Tooltip content={name} location="top">
                    <img
                        key={style}
                        className={styles.weatherIconImage}
                        src={`https://bmcdn.nl/assets/weather-icons/v3.0/${style}/svg/${icon}.svg`}
                        alt={icon}
                        loading="lazy"/>
                </Tooltip>
            )}
        </div>
    );
});

const IconSection = memo(({group, style, setStyle}: IconSectionProps & IconStyleSwitcherProps) => (
    <div className={styles.weatherIconSection}>
        <IconSectionHeader
            group={group}
            style={style}
            setStyle={setStyle}/>

        <div className={styles.weatherIconSectionContainer}>
            {group.icons.map((innerGroup, innerGroupIndex) => (
                <div key={innerGroupIndex} className={styles.weatherIconGroup}>

                    {innerGroup.map((icon, iconIndex) => (
                        <Icon
                            key={iconIndex}
                            icon={icon}
                            style={style}/>
                    ))}

                </div>
            ))}
        </div>
    </div>
));

const IconSectionHeader = memo(({group, style, setStyle}: IconSectionProps & IconStyleSwitcherProps) => {
    const ref = useRef(null);
    const {isSticky, isAfter} = useObserveSticky(ref, {
        threshold: 30
    });

    return (
        <div ref={ref} className={`${styles.weatherIconSectionHeader} ${isSticky ? styles.weatherIconSectionHeaderSticky : ""} ${isAfter ? styles.weatherIconSectionHeaderStickyAfter : ""}`}>
            <h3>{group.label}</h3>

            <IconStyleSwitcher
                style={style}
                setStyle={setStyle}/>
        </div>
    );
});

const IconStyleSwitcher = memo(({style, setStyle}: IconStyleSwitcherProps) => (
    <nav className={styles.weatherIconSectionStyleSwitcher}>
        {Object.keys(iconStyles).map(key => (
            <Tooltip
                key={key}
                content={iconStyles[key]}
                location="bottom"
                offset={3}>
                <button
                    className={`${styles.weatherIconSectionStyleSwitcherItem} ${style === key ? styles.weatherIconSectionStyleSwitcherItemActive : ""}`}
                    tabIndex={-1}
                    onClick={() => setStyle(key as IconStyle)}>
                    <img
                        height={36}
                        width={36}
                        src={`https://bmcdn.nl/assets/weather-icons/v3.0/${key}/svg-static/clear-day.svg`}
                        alt={iconStyles[key]}
                        loading="lazy"/>
                </button>
            </Tooltip>
        ))}
    </nav>
));

interface IconSectionProps {
    group: IconGroup,
}

interface IconStyleSwitcherProps {
    style: keyof IconStyles;
    setStyle: (style: keyof IconStyles) => void;
}

const iconStyles: IconStyles = {
    fill: "Fill",
    line: "Outline",
    monochrome: "Monochrome",
    cartoon: "Cartoon"
};

const iconGroups: IconGroup[] = [{
    label: "Forecast",
    icons: [[
        "clear-day",
        "clear-night",
        "cloudy",
        "drizzle",
        "fog",
        "hail",
        "haze",
        "rain",
        "sleet",
        "smoke",
        "snow",
        "partly-cloudy-day",
        "partly-cloudy-day-drizzle",
        "partly-cloudy-day-fog",
        "partly-cloudy-day-hail",
        "partly-cloudy-day-haze",
        "partly-cloudy-day-rain",
        "partly-cloudy-day-sleet",
        "partly-cloudy-day-smoke",
        "partly-cloudy-day-snow",
        "partly-cloudy-night",
        "partly-cloudy-night-drizzle",
        "partly-cloudy-night-fog",
        "partly-cloudy-night-hail",
        "partly-cloudy-night-haze",
        "partly-cloudy-night-rain",
        "partly-cloudy-night-sleet",
        "partly-cloudy-night-smoke",
        "partly-cloudy-night-snow",
        "mist",
        "hurricane",
        "tornado",
        "wind",
        "dust",
        "dust-day",
        "dust-night",
        "dust-wind",
        "wind-snow",
        "fog-day",
        "fog-night",
        "haze-day",
        "haze-night",
        "cloud-down",
        "cloud-up",
        "sun-hot"
    ], [
        "overcast",
        "overcast-day",
        "overcast-night",
        "overcast-drizzle",
        "overcast-day-drizzle",
        "overcast-night-drizzle",
        "overcast-fog",
        "overcast-day-fog",
        "overcast-night-fog",
        "overcast-hail",
        "overcast-day-hail",
        "overcast-night-hail",
        "overcast-haze",
        "overcast-day-haze",
        "overcast-night-haze",
        "overcast-rain",
        "overcast-day-rain",
        "overcast-night-rain",
        "overcast-sleet",
        "overcast-day-sleet",
        "overcast-night-sleet",
        "overcast-smoke",
        "overcast-day-smoke",
        "overcast-night-smoke",
        "overcast-snow",
        "overcast-day-snow",
        "overcast-night-snow"
    ], [
        "extreme",
        "extreme-day",
        "extreme-night",
        "extreme-drizzle",
        "extreme-day-drizzle",
        "extreme-night-drizzle",
        "extreme-fog",
        "extreme-day-fog",
        "extreme-night-fog",
        "extreme-hail",
        "extreme-day-hail",
        "extreme-night-hail",
        "extreme-haze",
        "extreme-day-haze",
        "extreme-night-haze",
        "extreme-rain",
        "extreme-day-rain",
        "extreme-night-rain",
        "extreme-sleet",
        "extreme-day-sleet",
        "extreme-night-sleet",
        "extreme-smoke",
        "extreme-day-smoke",
        "extreme-night-smoke",
        "extreme-snow",
        "extreme-day-snow",
        "extreme-night-snow"
    ], [
        "thunderstorms",
        "thunderstorms-day",
        "thunderstorms-night",
        "thunderstorms-rain",
        "thunderstorms-day-rain",
        "thunderstorms-night-rain",
        "thunderstorms-snow",
        "thunderstorms-day-snow",
        "thunderstorms-night-snow",
        "thunderstorms-overcast",
        "thunderstorms-day-overcast",
        "thunderstorms-night-overcast",
        "thunderstorms-overcast-rain",
        "thunderstorms-day-overcast-rain",
        "thunderstorms-night-overcast-rain",
        "thunderstorms-overcast-snow",
        "thunderstorms-day-overcast-snow",
        "thunderstorms-night-overcast-snow",
        "thunderstorms-extreme",
        "thunderstorms-day-extreme",
        "thunderstorms-night-extreme",
        "thunderstorms-extreme-rain",
        "thunderstorms-day-extreme-rain",
        "thunderstorms-night-extreme-rain",
        "thunderstorms-extreme-snow",
        "thunderstorms-day-extreme-snow",
        "thunderstorms-night-extreme-snow"
    ]]
}, {
    label: "Astronomical",
    icons: [[
        "horizon",
        "sunrise",
        "sunset",
        "moonrise",
        "moonset",
        "falling-stars",
        "solar-eclipse",
        "starry-night"
    ]]
}, {
    label: "Moon Phases",
    icons: [[
        "moon-new",
        "moon-waxing-crescent",
        "moon-first-quarter",
        "moon-waxing-gibbous",
        "moon-full",
        "moon-waning-gibbous",
        "moon-last-quarter",
        "moon-waning-crescent"
    ]]
}, {
    label: "Thermometer",
    icons: [[
        "thermometer",
        "thermometer-colder",
        "thermometer-warmer",
        "thermometer-celsius",
        "thermometer-fahrenheit",
        "thermometer-glass",
        "thermometer-glass-celsius",
        "thermometer-glass-fahrenheit",
        "thermometer-mercury",
        "thermometer-mercury-cold",
        "thermometer-sun",
        "thermometer-moon",
        "thermometer-snow",
        "thermometer-water"
    ]]
}, {
    label: "Miscellaneous",
    icons: [[
        "barometer",
        "compass",
        "windsock",
        "windsock-weak",
        "humidity",
        "raindrop-measure",
        "thermometer-raindrop",
        "tide-high",
        "tide-low",
        "pressure-high",
        "pressure-low",
        "pressure-high-alt",
        "pressure-low-alt",
        "celsius",
        "fahrenheit",
        "not-available",
        "snowman",
        "glove",
        "beanie",
        "rainbow",
        "rainbow-clear",
        "umbrella",
        "umbrella-wind",
        "umbrella-wind-alt",
        "wind-offshore",
        "wind-onshore"
    ]]
}, {
    label: "Particles",
    icons: [[
        "lightning-bolt",
        "raindrop",
        "raindrops",
        "snowflake",
        "star",
        "smoke-particles"
    ]]
}, {
    label: "Pollen",
    icons: [[
        "pollen",
        "pollen-flower",
        "pollen-grass",
        "pollen-tree"
    ]]
}, {
    label: "Beaufort Wind Scale",
    icons: [[
        "wind-beaufort-0",
        "wind-beaufort-1",
        "wind-beaufort-2",
        "wind-beaufort-3",
        "wind-beaufort-4",
        "wind-beaufort-5",
        "wind-beaufort-6",
        "wind-beaufort-7",
        "wind-beaufort-8",
        "wind-beaufort-9",
        "wind-beaufort-10",
        "wind-beaufort-11",
        "wind-beaufort-12"
    ]]
}, {
    label: "UV Index",
    icons: [[
        "uv-index",
        "uv-index-1",
        "uv-index-2",
        "uv-index-3",
        "uv-index-4",
        "uv-index-5",
        "uv-index-6",
        "uv-index-7",
        "uv-index-8",
        "uv-index-9",
        "uv-index-10",
        "uv-index-11"
    ]]
}, {
    label: "Time",
    icons: [[
        "time-night",
        "time-late-night",
        "time-morning",
        "time-late-morning",
        "time-afternoon",
        "time-late-afternoon",
        "time-evening",
        "time-late-evening"
    ]]
}, {
    label: "Alarm",
    icons: [[
        "code-green",
        "code-yellow",
        "code-orange",
        "code-red",
        "alert-avalanche-danger",
        "alert-falling-rocks",
        "wind-alert",
        "flag-gale-warning",
        "flag-small-craft-advisory",
        "flag-storm-warning",
        "flag-hurricane-warning"
    ]]
}];

interface IconGroup {
    readonly label: string;
    readonly icons: string[][];
}

type IconStyle = "fill" | "monochrome" | "line" | "cartoon";
type IconStyles = { [key in IconStyle]: string; };
