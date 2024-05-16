import { Metadata } from 'next';
import { Intro, Row, TextButton } from '@/component/shell';
import { IconSection } from './components';
import { iconCount, iconGroups } from './icons';
import Context from './context';

export const metadata: Metadata = {
    title: 'Meteocons | Bas Milius — Full-Stack Developer'
};

export default () => (<>
    <Intro
        cards={[
            <img
                src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
                alt="Clear day icon from Meteocons"
                loading="lazy"/>,
            <img
                src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-rain.svg"
                alt="Overcast rain icon from Meteocons"
                loading="lazy"/>,
            <img
                src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-snow.svg"
                alt="Partly cloudy snow icon from Meteocons"
                loading="lazy"/>,
            <img
                src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-sleet.svg"
                alt="Partly cloudy sleet at night icon from Meteocons"
                loading="lazy"/>
        ]}
        title="Meteocons"/>

    <Row
        title="Animated Weather Icons"
        subTitle={`A set of ${iconCount} animated icons in different styles. Free to use in any kind of project.`}
        details={(
            <TextButton.Stack>
                <TextButton
                    label="View on GitHub"
                    icon="fab github"
                    tag="a"
                    target="_blank"
                    href="https://github.com/basmilius/weather-icons"/>

                <TextButton
                    label="Download"
                    icon="fas down"
                    tag="a"
                    target="_blank"
                    href="https://github.com/basmilius/weather-icons/archive/refs/heads/master.zip"/>

                <TextButton
                    label="Download (Pre-release)"
                    icon="fas down"
                    tag="a"
                    target="_blank"
                    href="https://github.com/basmilius/weather-icons/archive/refs/heads/dev.zip"/>
            </TextButton.Stack>
        )}>

        <p className="lead">
            These hand-crafted icons are designed in Adobe Illustrator and animated to SVG files
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
                High performant Lottie animations are available for every style. These animations were
                created using the LottieFiles plugin for Adobe After Effects.
            </li>

            <li>
                Every style includes both animated and static SVG files. The animated SVG files cannot
                be used on mobile and desktop apps as far as I know. Use the Lottie animations for that.
            </li>

            <li>
                Monochrome style has various font formats available to use on desktop and on the
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
    </Row>

    <Context>
        {iconGroups.map((group, groupIndex) => (
            <IconSection
                key={groupIndex}
                group={group}/>
        ))}
    </Context>
</>);
