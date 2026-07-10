<template>
    <div class="about">
        <header class="about-head">
            <div class="about-headtext">
                <PageHead
                    eyebrow="// ~/about"
                    title="Hi! I'm Bas">
                    <p class="lead">Full-Stack developer from The Netherlands, building websites, apps and backend applications - for myself and for others.</p>
                </PageHead>
            </div>

            <picture class="portrait">
                <source
                    srcset="/image/me/spain-1x.webp 1x, /image/me/spain-2x.webp 2x"
                    type="image/webp"/>
                <img
                    src="/image/me/spain-2x.jpg"
                    srcset="/image/me/spain-1x.jpg 1x, /image/me/spain-2x.jpg 2x"
                    alt="Bas looking at the view in Spain."
                    width="150"
                    height="150"/>
            </picture>
        </header>

        <div class="prose">
            <p>
                I'm a self-taught developer from The Netherlands. Currently working fulltime at
                <a
                    href="https://www.axilium.com/"
                    rel="noopener"
                    target="_blank">Axilium</a>. Programming started as a hobby for me and I managed
                to create a career out of it. When I have some spare time, I really like to try new
                things that are related to programming.
            </p>
            <p>
                Besides working full time, I also have a few open source projects that can be found on
                <NuxtLink to="/work">my work page</NuxtLink>. My most recent project is called
                <a
                    href="https://meteocons.com"
                    rel="noopener"
                    target="_blank">Meteocons</a>, a free-to-use set of animated weather icons.
            </p>

            <h3>Programming</h3>
            <p>
                I started experimenting with code back in 2008. I tweaked a lot to existing projects
                from other people to see what happened when I changed something. Since then I gained a
                lot of experience and developed my own (code) style. In 2013 I won two gold medals for
                programming.
            </p>
            <p>
                For programming I primarily use the tools of JetBrains, such as PhpStorm and IntelliJ
                Idea; those applications are a perfect fit for me. All of my projects are stored on
                their own GitHub repository and I host everything on my own Debian-based server. I also
                have another beefy Debian-based server for private projects and tools.
            </p>

            <h3>Working with AI</h3>
            <p>
                Lately I've been leaning into AI-assisted development - tools like Claude Code help me
                move faster on complex projects. Reverse-engineering Apple's media protocols for my
                Homey app, for instance, went a lot quicker with AI helping me iterate through the
                protocol layer. I still care about writing code that's well put together; AI just helps
                me get there faster.
            </p>
        </div>

        <div class="actions">
            <AppButton
                href="https://github.com/basmilius"
                label="GitHub"
                icon="fab github"/>
            <AppButton
                href="/bas-milius-cv.pdf"
                download="Bas Milius CV 2024.pdf"
                label="Download CV"
                icon="fas down"/>
        </div>

        <SectionBlock
            eyebrow="## skills"
            title="Skills & Experience"
            subtitle="Programming languages, frameworks and more that I've worked with.">
            <SkillsGrid/>
        </SectionBlock>

        <SectionBlock
            eyebrow="## work"
            title="Work experience"
            subtitle="A few things that I've done to gain work experience in my field.">
            <Timeline :entries="experience"/>
        </SectionBlock>

        <SectionBlock
            eyebrow="## schooling"
            title="Schooling"
            subtitle="It was a bit rough, but eventually I managed to successfully get my degree!">
            <Timeline :entries="schooling"/>
        </SectionBlock>

        <SectionBlock
            eyebrow="// socials"
            title="Socials"
            subtitle="Where you can find even more.">
            <Socials/>
        </SectionBlock>
    </div>
</template>

<script
    lang="ts"
    setup>
    import { experience } from '~/data/experience';
    import { schooling } from '~/data/schooling';

    useHead({title: 'About'});
</script>

<style
    scoped
    lang="scss">
    .about {
        display: flex;
        flex-direction: column;
        gap: 44px;
    }

    .about-head {
        display: flex;
        gap: 32px;
        align-items: center;
        justify-content: space-between;
    }

    .about-headtext {
        min-width: 0;
    }

    .portrait {
        flex: none;

        img {
            width: 140px;
            height: 140px;
            border-radius: 22px;
            object-fit: cover;
            border: 1px solid var(--line);
            box-shadow: var(--shadow);
        }
    }

    @media (max-width: 680px) {
        .about-head {
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
        }

        .portrait {
            order: -1;
        }
    }

    .prose {
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 70ch;

        p {
            font-size: 16px;
            line-height: 1.8;
            color: var(--muted);
        }

        a {
            color: var(--accent);
            text-decoration: underline;
            text-underline-offset: 2px;

            &:hover {
                text-decoration: none;
            }
        }

        h3 {
            margin-top: 16px;
            font-size: 20px;
            color: var(--text);
        }
    }

    .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
</style>
