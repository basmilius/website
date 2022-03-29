import { memo } from "react";
import { BMSchooling, BMSkillsAndExperience, BMSocials, BMWorkExperience } from "@/component/content";
import { Head, Link } from "@/component/platform";
import { BMHeader, BMSection, BMTextButton } from "@/component/shell";

import basImage from "../image/bas.jpg";

export default memo(() => (<>
    <Head>
        <title>About | Bas Milius &mdash; Full-Stack Developer</title>
    </Head>

    <BMHeader title="About"/>

    <BMSection
        details={<>
            <BMSection.Picture
                src={basImage.src}
                alt="Bas looking at the view in Spain."
                height={basImage.height}
                width={basImage.width}
                loading="lazy"/>

            <BMTextButton.Stack>
                <BMTextButton
                    label="Curriculum Vitae"
                    icon="fas arrow-right-long"/>

                <BMTextButton.Link
                    href="/contact"
                    label="Contact Me"
                    icon="fas arrow-right-long"/>
            </BMTextButton.Stack>
        </>}>
        <h3>Hi! I'm Bas</h3>
        <p>A 26-year old developer from Groenlo, The Netherlands. By day I work as a web/app developer at a local agency, <a href="https://ideemedia.nl" rel="noopener" target="_blank">IdeeMedia</a>. By night I spend most of my time working on open source projects and finding/trying out what's new in tech.</p>
        <p>My most recent project is Meteocons, a free to use set of animated weather icons. Another one of my recent projects is latte-ui, an UI library build for React, you can use it for free in your own projects.</p>

        <h3>Programming</h3>
        <p>I started experimenting with code back in 2008, I tweaked a lot to existing projects from other people to see what happened when I changed something. Since then I gained a lot of experience and developed my own (code) style. In 2013 I won two gold medals for programming.</p>
        <p>For programming I primarily use the tools of JetBrains, such as PhpStorm and IntelliJ Idea, those applications are a perfect fit for me. All of my projects are stored on their own GitHub repository and I host everything on my own Debian-based server. I also have another beefy Debian-based server for private projects and tools.</p>

        <h3>Work</h3>
        <p>At IdeeMedia my primary job is to transform Photoshop files in actual working websites or apps. For websites I created a base framework around WordPress and for our apps I created Latte UI, which is now open source (see Projects).</p>
    </BMSection>

    <BMSkillsAndExperience/>
    <BMWorkExperience/>
    <BMSchooling/>
    <BMSocials/>
</>));
