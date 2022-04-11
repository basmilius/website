import { memo } from "react";
import { BMSchooling, BMSkillsAndExperience, BMSocials, BMWorkExperience } from "@/component/content";
import { Head } from "@/component/platform";
import { BMHeader, BMSection, BMTextButton } from "@/component/shell";

import basSpainImageJpg1x from "../image/me/spain-1x.jpg"
import basSpainImageJpg2x from "../image/me/spain-2x.jpg"
import basSpainImageWebp1x from "../image/me/spain-1x.webp"
import basSpainImageWebp2x from "../image/me/spain-2x.webp"

export default memo(() => (<>
    <Head>
        <title>About | Bas Milius &mdash; Full-Stack Developer</title>
    </Head>

    <BMHeader title="About"/>

    <BMSection
        title="Bas Milius"
        details={<>
            <BMSection.Picture
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

            <BMTextButton.Stack>
                <BMTextButton
                    label="Curriculum Vitae"
                    icon="fas up-right"/>

                <BMTextButton.Link
                    href="/contact"
                    label="Contact Me"
                    icon="fas right"/>
            </BMTextButton.Stack>
        </>}>
        <h3>Hi! I'm Bas</h3>
        <p>A 26-year old developer from Groenlo, The Netherlands. By day I work as a Full-Stack Developer at a local agency, <a href="https://ideemedia.nl" rel="noopener" target="_blank">IdeeMedia</a>. By night I spend most of my time working on open source projects and finding/trying out what's new in tech.</p>
        <p>My most recent project is Meteocons, a free to use set of animated weather icons. Another one of my recent projects is latte-ui, an UI library built for React, you can use it for free in your own projects.</p>

        <h3>Programming</h3>
        <p>I started experimenting with code back in 2008, I tweaked a lot to existing projects from other people to see what happened when I changed something. Since then I gained a lot of experience and developed my own (code) style. In 2013 I won two gold medals for programming.</p>
        <p>For programming I primarily use the tools of JetBrains, such as PhpStorm and IntelliJ Idea, those applications are a perfect fit for me. All of my projects are stored on their own GitHub repository and I host everything on my own Debian-based server. I also have another beefy Debian-based server for private projects and tools.</p>

        <h3>Work</h3>
        <p>At IdeeMedia my primary job is to transform Photoshop files in actual working websites or apps. For websites I created a base framework around WordPress and for our apps I use Flutter. At IdeeMedia I also create what I'd like to call "Portals", these are intranet-like dashboads for custom features.</p>
    </BMSection>

    <BMSkillsAndExperience/>
    <BMWorkExperience/>
    <BMSchooling/>
    <BMSocials/>
</>));
