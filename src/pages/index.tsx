import { memo } from "react";
import { Head } from "@/component/platform";
import { BMWorkCard, BMWorkCardDeck } from "@/component/content";
import { BMHeader, BMSection, BMTextButton } from "@/component/shell";

import basImage from "../image/bas.jpg";

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
                src={basImage.src}
                alt="Bas looking at the view in Spain."
                height={basImage.height}
                width={basImage.width}
                loading="lazy"/>
        }>
        <h2>Full-Stack<br/>Developer</h2>

        <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at cum cumque deleniti doloremque
            est exercitationem harum illo iusto labore nesciunt nobis, officiis omnis placeat quasi quidem
            sapiente ullam voluptates!
        </p>

        <p>
            Cumque, delectus incidunt laudantium libero magni rerum sapiente similique? Eum inventore
            laboriosam molestiae officiis omnis quia quisquam repellat repudiandae! Delectus deserunt error
            placeat totam voluptas. Fugit molestiae possimus quaerat vel!
        </p>

        <BMTextButton.Group>
            <BMTextButton.Link
                href={"/about"}
                label="About me"
                icon="fas arrow-right-long"/>

            <BMTextButton.Link
                href={"/contact"}
                label="Contact"
                icon="fas arrow-right-long"/>
        </BMTextButton.Group>
    </BMSection>

    <BMSection
        isAlternate
        isIndented
        title="Latest work"
        subTitle="These are the latest projects that I've worked on. It includes personal work and work that I did for clients."
        details={(
            <BMTextButton.Stack alignToBottom>
                <BMTextButton.Link
                    href="/work"
                    label="All work"
                    icon="fas arrow-right-long"/>

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
        </BMWorkCardDeck>
    </BMSection>
</>));
