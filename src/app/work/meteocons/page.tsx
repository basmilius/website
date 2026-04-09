import { Metadata } from 'next';
import { Intro, Row, TextButton } from '@/component/shell';

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
        subTitle="Over 475 hand-crafted animated weather icons. Free and open source."
        details={(
            <TextButton.Stack>
                <TextButton
                    label="Visit meteocons.com"
                    icon="fas up-right"
                    tag="a"
                    target="_blank"
                    href="https://meteocons.com"/>

                <TextButton
                    label="View on GitHub"
                    icon="fab github"
                    tag="a"
                    target="_blank"
                    href="https://github.com/basmilius/meteocons"/>
            </TextButton.Stack>
        )}>

        <p className="lead">
            Meteocons is a collection of weather icons that feel alive. Every icon is meticulously
            designed in Figma and available in four styles: fill, flat, line and
            monochrome. They come as animated SVG and Lottie JSON, ready to use in any project.
        </p>

        <p>
            Meteocons now has its own
            website! <a href="https://meteocons.com" rel="noopener" target="_blank">meteocons.com</a> is
            the new home for browsing all icons, reading the documentation and getting started. Install
            the icons via npm with <code>@meteocons/svg</code> or <code>@meteocons/lottie</code>, or
            grab them directly from the GitHub repository.
        </p>

        <p>
            The icons work with React, Vue, Svelte, Angular, iOS, Android — any platform that
            renders SVG or Lottie. They are available under a MIT-license, which means they're
            free to use and modify.
        </p>
    </Row>
</>);
