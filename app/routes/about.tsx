import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { siGithub } from 'simple-icons';
import { BrandIcon } from '~/components/BrandIcon';
import { Eyebrow, H1_CLASS, H2_CLASS, LEAD_CLASS, SectionEyebrow } from '~/components/Headings';
import { PillLink, TextLink } from '~/components/Links';
import { Socials } from '~/components/Socials';
import { experience, schooling } from '~/data/history';
import { CV_URL, GITHUB_URL } from '~/data/navigation';
import { skills } from '~/data/skills';
import { seo } from '~/lib/seo';

type HistoryTab = 'work' | 'school';

const HISTORY = {
    work: {
        label: 'work',
        title: 'Work experience',
        description: 'The places where I gained my experience as a developer.',
        entries: experience
    },
    school: {
        label: 'schooling',
        title: 'Schooling',
        description: 'It was a bit rough, but I got my degree in the end!',
        entries: schooling
    }
} as const;

const SUBHEADING_CLASS = 'mt-3.5 text-[21px] font-semibold text-ink';

export function meta() {
    return seo({
        title: 'About',
        description: 'Self-taught full-stack developer from the Netherlands. My story, the tools I use, how I work with AI and Ruimte, my skills and my work experience.',
        path: '/about'
    });
}

export default function About() {
    return (
        <>
            <header className="flex flex-wrap-reverse items-center justify-between gap-x-10 gap-y-6">
                <div className="min-w-0 flex-[1_1_380px]">
                    <Eyebrow to="/about">// ~/about</Eyebrow>
                    <h1 className={H1_CLASS}>Hi! I'm Bas</h1>
                    <p className={`${LEAD_CLASS} max-w-[44ch]`}>Full-stack developer from the Netherlands. I build websites, apps and backend applications, for myself and for others.</p>
                </div>
                <img
                    className="size-[148px] flex-none rounded-3xl border border-line bg-sunken object-cover"
                    src="/image/bas.jpg"
                    alt="Bas Milius"/>
            </header>

            <div className="mt-9 flex max-w-[68ch] flex-col gap-4 text-base leading-[1.8] text-muted">
                <p>I'm a self-taught developer from the Netherlands, and I work full-time at <TextLink to="https://www.axilium.com/">Axilium</TextLink>. Programming started as a hobby and turned into a career. In my spare time I still like to try new things in programming.</p>
                <p>Next to my job I work on projects of my own, many of them open source, which you can find on <TextLink to="/work">my work page</TextLink>. The biggest one right now is <TextLink to="https://ruimte.app">Ruimte</TextLink>, a workspace for coding with AI agents. Another is <TextLink to="https://meteocons.com">Meteocons</TextLink>, a free set of animated weather icons.</p>
                <h3 className={SUBHEADING_CLASS}>Programming</h3>
                <p>I started experimenting with code in 2008, mostly by tweaking other people's projects to see what happened when I changed something. Since then I've built up a lot of experience and a style of my own. In 2013 I won two gold medals for programming.</p>
                <p>I write most of my code in JetBrains IDEs like PhpStorm and IntelliJ IDEA. Every project has its own GitHub repository, and I host everything on my own Debian server. A second, beefier Debian server runs my private projects and tools.</p>
                <h3 className={SUBHEADING_CLASS}>Working with AI</h3>
                <p>Lately I lean on AI a lot. Tools like Claude Code help me move faster on complex projects. Reverse-engineering Apple's media protocols for my Homey app went a lot quicker with an agent iterating through the protocol layer with me. I still care about code that's well put together. AI just gets me there sooner.</p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5">
                <PillLink
                    to={GITHUB_URL}
                    variant="primary">
                    <BrandIcon brand={siGithub}/>
                    GitHub
                </PillLink>
                <PillLink to={CV_URL}>
                    <ArrowDown size={14}/>
                    Download CV
                </PillLink>
            </div>

            <Ruimte/>
            <SkillWall/>
            <History/>
            <Socials className="mt-12"/>
        </>
    );
}

function Ruimte() {
    return (
        <section className="mt-18">
            <SectionEyebrow>## ruimte</SectionEyebrow>
            <div className="mt-2.5 grid grid-cols-1 items-center gap-x-10 gap-y-7 min-[1100px]:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
                <div>
                    <h2 className={H2_CLASS}>Space for AI engineering</h2>
                    <div className="mt-3.5 flex flex-col gap-3.5 text-base leading-[1.75] text-muted">
                        <p>At some point I had more coding agents running than I could keep track of, each in its own terminal tab, and I kept missing the one that was waiting on me. So I built the workspace I wanted and called it <TextLink to="https://ruimte.app">Ruimte</TextLink>.</p>
                        <p>My agents, terminals and browsers now sit side by side, and a chat shows the moment an agent needs me, even on my phone. I build almost everything in it these days, Ruimte itself included. Its building blocks are open source as <TextLink to="https://adecore.dev">ADE CORE</TextLink>.</p>
                    </div>
                    <div className="mt-[22px] flex flex-wrap gap-2.5">
                        <PillLink
                            to="https://ruimte.app"
                            variant="primary">
                            Visit ruimte.app
                            <ArrowUpRight size={13}/>
                        </PillLink>
                        <PillLink to="https://github.com/basmilius/ruimte">
                            <BrandIcon brand={siGithub}/>
                            View on GitHub
                        </PillLink>
                    </div>
                </div>
                <a
                    href="https://ruimte.app"
                    target="_blank"
                    rel="noopener"
                    className="block overflow-hidden rounded-[14px] border border-line shadow-card transition-[translate,box-shadow] duration-[320ms] ease-card hover:-translate-y-[3px] hover:shadow-card-hover">
                    <img
                        className="block aspect-[12/7] w-full bg-sunken object-cover"
                        src="/image/work/blueprint-ruimte.svg"
                        alt="Ruimte"
                        loading="lazy"/>
                </a>
            </div>
        </section>
    );
}

function SkillWall() {
    return (
        <section className="mt-18">
            <SectionEyebrow>## skills</SectionEyebrow>
            <div className="mt-2.5 flex flex-wrap items-end justify-between gap-3">
                <div>
                    <h2 className={H2_CLASS}>Skills &amp; Experience</h2>
                    <p className="mt-2 text-base text-muted">Programming languages, frameworks and more that I've worked with.</p>
                </div>
                <span className="font-mono text-[13px] text-faint">{skills.length} skills</span>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-2 md:grid-cols-7 xl:grid-cols-10">
                {skills.map((skill) => (
                    <div
                        key={skill.label}
                        className="flex aspect-square flex-col items-center justify-center gap-2.5 rounded-[14px] bg-sunken">
                        <BrandIcon
                            brand={skill.brand}
                            className="size-6 text-ink md:size-7"/>
                        <span className="text-center font-mono text-[10.5px] leading-[1.2] text-muted md:text-[11.5px]">{skill.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

function History() {
    const [tab, setTab] = useState<HistoryTab>('work');
    const current = HISTORY[tab];

    return (
        <section className="mt-18">
            <SectionEyebrow>## history</SectionEyebrow>
            <div className="mt-2.5 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h2 className={H2_CLASS}>{current.title}</h2>
                    <p className="mt-2 text-base text-muted">{current.description}</p>
                </div>
                <div className="flex gap-0.5 rounded-[10px] bg-sunken p-[3px]">
                    {(Object.keys(HISTORY) as HistoryTab[]).map((key) => (
                        <button
                            key={key}
                            type="button"
                            aria-pressed={tab === key}
                            onClick={() => setTab(key)}
                            className={`h-8 cursor-pointer rounded-[7px] px-3.5 font-mono text-[13px] transition-all duration-[180ms] ease-site ${tab === key ? 'bg-surface text-ink shadow-raised' : 'text-muted'}`}>
                            {HISTORY[key].label}
                        </button>
                    ))}
                </div>
            </div>
            <ol className="mt-7">
                {current.entries.map((entry) => (
                    <li
                        key={entry.title}
                        className="group grid grid-cols-1 gap-x-7 md:grid-cols-[180px_minmax(0,1fr)]">
                        <div className="border-l border-line pb-1.5 pl-[22px] md:border-0 md:pt-[3px] md:pb-0 md:pl-0 md:text-right">
                            <span className="inline-block rounded-full bg-accent-soft px-[9px] py-[3px] font-mono text-xs whitespace-nowrap text-accent-text">{entry.date}</span>
                        </div>
                        <div className="relative border-l border-line pb-7 pl-[22px] group-last:pb-0">
                            <span className="absolute top-[9.5px] -left-[5px] size-[9px] rounded-full bg-accent shadow-[0_0_0_3px_var(--surface)]"/>
                            <h3 className="text-lg font-semibold">{entry.title}</h3>
                            <p className="mt-1.5 max-w-[62ch] text-[15px] leading-[1.7] text-muted">{entry.body}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
