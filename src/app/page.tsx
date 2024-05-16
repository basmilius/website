import { Work } from '@/component/content';
import { Intro, Row, TextButton } from '@/component/shell';

import basSpainImageJpg1x from '@/asset/image/me/spain-1x.jpg';
import basSpainImageJpg2x from '@/asset/image/me/spain-2x.jpg';
import basSpainImageWebp1x from '@/asset/image/me/spain-1x.webp';
import basSpainImageWebp2x from '@/asset/image/me/spain-2x.webp';

export default () => (<>
    <Intro
        isFrontPage
        title="Hi! I'm Bas"/>

    <Row
        details={(
            <Row.CenterizedPicture
                defaultSrc={basSpainImageJpg1x.src}
                jpg={[
                    {scale: 2, src: basSpainImageJpg2x.src},
                    {scale: 1, src: basSpainImageJpg1x.src}
                ]}
                webp={[
                    {scale: 2, src: basSpainImageWebp2x.src},
                    {scale: 1, src: basSpainImageWebp1x.src}
                ]}
                alt="Bas looking at the view in Spain."
                height={basSpainImageJpg1x.height}
                width={basSpainImageJpg1x.width}
                loading="lazy"/>
        )}>
        <h2>Full-Stack<br/>Developer</h2>
        <h3>With a passion for creating websites, apps, and backend applications.</h3>
        <p>

            I enjoy experimenting with new techniques and occasionally tinkering with tools
            like Figma and Docker. As a Full-Stack Developer, I find fulfillment in coding
            for personal projects as well as collaborating on projects for others.
        </p>

        <TextButton.Group>
            <TextButton.Link
                href={'/about'}
                label="About me"
                icon="fas right"/>

            <TextButton.Link
                href={'/contact'}
                label="Contact"
                icon="fas right"/>
        </TextButton.Group>
    </Row>

    <Row
        isAlternate
        isIndented
        title="Latest work"
        subTitle="These are the latest projects that I've worked on. It includes personal work and work that I did for clients."
        details={(
            <TextButton.Stack>
                <TextButton.Link
                    href="/work"
                    label="All work"
                    icon="fas right"/>

                <TextButton
                    tag="a"
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/basmilius"
                    label="Follow on GitHub"
                    icon="fab github"/>
            </TextButton.Stack>
        )}>
        <Work.Deck>
            <Work.OfMe.WeatherIcons/>
            <Work.ForOthers.JaimieVos/>
            <Work.ForOthers.FleurNijhuis/>
            <Work.OfMe.Raxos/>
            <Work.ForOthers.ManegeNijhuis/>
            <Work.ForOthers.StudioVierentwintig/>
        </Work.Deck>
    </Row>
</>);
