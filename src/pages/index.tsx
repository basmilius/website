import basSpainImageJpg1x from "../image/me/spain-1x.jpg"
import basSpainImageJpg2x from "../image/me/spain-2x.jpg"
import basSpainImageWebp1x from "../image/me/spain-1x.webp"
import basSpainImageWebp2x from "../image/me/spain-2x.webp"

import { memo } from "react";
import { Head } from "@/component/platform";
import { BMWorkCard, BMWorkCardDeck } from "@/component/content";
import { BMHeader, BMSection, BMTextButton } from "@/component/shell";

export default memo(() => (<>
    <Head>
        <title>Bas Milius &mdash; Full-Stack Developer</title>
    </Head>

    <BMHeader
        isFrontPage
        title="Hi! I'm Bas"/>

    <BMSection
        details={
            <BMSection.CenterizedPicture
                defaultSrc={basSpainImageJpg1x.src}
                jpg={[
                    { scale: 2, src: basSpainImageJpg2x.src },
                    { scale: 1, src: basSpainImageJpg1x.src }
                ]}
                webp={[
                    { scale: 2, src: basSpainImageWebp2x.src },
                    { scale: 1, src: basSpainImageWebp1x.src }
                ]}
                alt="Bas looking at the view in Spain."
                height={basSpainImageJpg1x.height}
                width={basSpainImageJpg1x.width}
                loading="lazy"/>
        }>
        <h2>Full-Stack<br/>Developer</h2>
        <h3>With a passion for creating websites, apps and backend applications.</h3>
        <p>
            Likes to experiment with new techniques and to mess around in programs like
            Adobe XD and Adobe After Effects every now and then. As a Full-Stack Developer
            I enjoy programming on my own projects and on projects for others.
        </p>

        <BMTextButton.Group>
            <BMTextButton.Link
                href={"/about"}
                label="About me"
                icon="fas right"/>

            <BMTextButton.Link
                href={"/contact"}
                label="Contact"
                icon="fas right"/>
        </BMTextButton.Group>
    </BMSection>

    <BMSection
        isAlternate
        isIndented
        title="Latest work"
        subTitle="These are the latest projects that I've worked on. It includes personal work and work that I did for clients."
        details={(
            <BMTextButton.Stack>
                <BMTextButton.Link
                    href="/work"
                    label="All work"
                    icon="fas right"/>

                <BMTextButton
                    tag="a"
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/basmilius"
                    label="Follow on GitHub"
                    icon="fab github"/>
            </BMTextButton.Stack>
        )}>
        <BMWorkCardDeck>
            <BMWorkCard.OfMe.WeatherIcons/>
            <BMWorkCard.ForOthers.JaimieVos/>
            <BMWorkCard.ForOthers.FleurNijhuis/>
            <BMWorkCard.OfMe.Flant/>
            <BMWorkCard.ForOthers.ManegeNijhuis/>
            <BMWorkCard.ForOthers.StudioVierentwintig/>
        </BMWorkCardDeck>
    </BMSection>
</>));
