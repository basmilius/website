import { memo } from "react";
import { BMWorkCard, BMWorkCardGrid } from "@/component/content";
import { Head, Link } from "@/component/platform";
import { BMHeader, BMSection, BMTextButton } from "@/component/shell";

export default memo(() => (<>
    <Head>
        <title>Not found &ndash; Bas Milius &mdash; Full-Stack Developer</title>
    </Head>

    <BMHeader title="404"/>

    <BMSection title="Oops" subTitle="Something's missing">
        <h3>The requested page was not found.</h3>
        <p>
            The page you were looking for does not (yet) exist on this website. Did
            you type the url yourself, please check for errors. If not, please
            contact me!
        </p>
        <BMTextButton.Group>
            <BMTextButton
                href="/about"
                label="About me"
                icon="fas arrow-right-long"/>

            <BMTextButton
                href="/work"
                label="My work"
                icon="fas arrow-right-long"/>

            <BMTextButton
                href="/contact"
                label="Contact"
                icon="fas arrow-right-long"/>
        </BMTextButton.Group>
    </BMSection>

    <BMWorkCardGrid title="Featured work">
        <BMWorkCard.OfMe.WeatherIcons/>
        <BMWorkCard.OfMe.VisualEffects/>
        <BMWorkCard.OfMe.TypeWriter/>
    </BMWorkCardGrid>
</>));
