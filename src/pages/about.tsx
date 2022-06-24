import basSpainImageJpg1x from "../image/me/spain-1x.jpg"
import basSpainImageJpg2x from "../image/me/spain-2x.jpg"
import basSpainImageWebp1x from "../image/me/spain-1x.webp"
import basSpainImageWebp2x from "../image/me/spain-2x.webp"

import { memo } from "react";
import { BMSchooling, BMSkillsAndExperience, BMSocials, BMWorkExperience } from "@/component/content";
import { Head, Link } from "@/component/platform";
import { BMHeader, BMSection, BMTextButton } from "@/component/shell";

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

            <BMTextButton.Stack>
                <BMTextButton
                    tag="a"
                    href="https://github.com/basmilius"
                    target="_blank"
                    label="GitHub Profile"
                    icon="fab github"/>

                <BMTextButton
                    tag="a"
                    href="https://dribbble.com/basmilius"
                    target="_blank"
                    label="Dribbble Profile"
                    icon="fab dribbble"/>

                <BMTextButton.Link
                    href="/contact"
                    label="Contact Me"
                    icon="fas right"/>
            </BMTextButton.Stack>
        </>}>
        <h3>Hi! I'm Bas</h3>
        <p>
            I'm a 26 year-old self-taught developer from The Netherlands. Currently working
            fulltime at <a href="https://tibbaa.com" rel="noopener" target="_blank">Tibbaa</a>, a ticketing solutions provider. Programming started as a hobby
            for me and I managed to create a career out of it. When I have some spare time, I
            really like to try new things that are related to programming.
        </p>
        <p>
            Besides working full time, I also have a few open source projects that can be
            found on <Link href="/work">my work page</Link>. My most recent project is called <Link href="/work/meteocons">Meteocons</Link>, a free-to
            use set of animated weather icons.
        </p>

        <h3>Programming</h3>
        <p>
            I started experimenting with code back in 2008. I tweaked a lot to existing projects
            from other people to see what happened when I changed something. Since then I gained
            a lot of experience and developed my own (code) style. In 2013 I won two gold medals
            for programming.
        </p>
        <p>
            For programming I primarily use the tools of JetBrains, such as PhpStorm and IntelliJ
            Idea, those applications are a perfect fit for me. All of my projects are stored on
            their own GitHub repository and I host everything on my own Debian-based server. I also
            have another beefy Debian-based server for private projects and tools.
        </p>
    </BMSection>

    <BMSkillsAndExperience/>
    <BMWorkExperience/>
    <BMSchooling/>
    <BMSocials/>
</>));
