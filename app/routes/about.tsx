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
        description: 'A few things that I\'ve done to gain work experience in my field.',
        entries: experience
    },
    school: {
        label: 'schooling',
        title: 'Schooling',
        description: 'It was a bit rough, but eventually I managed to successfully get my degree!',
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
                    <p className={`${LEAD_CLASS} max-w-[44ch]`}>Full-Stack developer from The Netherlands, building websites, apps and backend applications - for myself and for others.</p>
                </div>
                <img
                    className="size-[148px] flex-none rounded-3xl border border-line bg-sunken object-cover"
                    src="/image/bas.jpg"
                    alt="Bas Milius"/>
            </header>

            <div className="mt-9 flex max-w-[68ch] flex-col gap-4 text-base leading-[1.8] text-muted">
                <p>I'm a self-taught developer from The Netherlands. Currently working fulltime at <TextLink to="https://www.axilium.com/">Axilium</TextLink>. Programming started as a hobby for me and I managed to create a career out of it. When I have some spare time, I really like to try new things that are related to programming.</p>
                <p>Besides working full time, I also have a few open source projects that can be found on <TextLink to="/work">my work page</TextLink>. My most recent project is called <TextLink to="/work/meteocons">Meteocons</TextLink>, a free-to-use set of animated weather icons.</p>
                <h3 className={SUBHEADING_CLASS}>Programming</h3>
                <p>I started experimenting with code back in 2008. I tweaked a lot to existing projects from other people to see what happened when I changed something. Since then I gained a lot of experience and developed my own (code) style. In 2013 I won two gold medals for programming.</p>
                <p>For programming I primarily use the tools of JetBrains, such as PhpStorm and IntelliJ Idea; those applications are a perfect fit for me. All of my projects are stored on their own GitHub repository and I host everything on my own Debian-based server. I also have another beefy Debian-based server for private projects and tools.</p>
                <h3 className={SUBHEADING_CLASS}>Working with AI</h3>
                <p>Lately I've been leaning into AI-assisted development - tools like Claude Code help me move faster on complex projects. Reverse-engineering Apple's media protocols for my Homey app, for instance, went a lot quicker with AI helping me iterate through the protocol layer. I still care about writing code that's well put together; AI just helps me get there faster.</p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5">
                <PillLink to={GITHUB_URL}>
                    <BrandIcon brand={siGithub}/>
                    GitHub
                </PillLink>
                <PillLink
                    to={CV_URL}
                    variant="primary">
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
                    <h2 className={H2_CLASS}>Building my own environment for AI</h2>
                    <div className="mt-3.5 flex flex-col gap-3.5 text-base leading-[1.75] text-muted">
                        <p>To work with AI agents the way I want to, I built <TextLink to="https://ruimte.app">Ruimte</TextLink>, an agentic development environment. Terminals, chats and agents, browsers, devices, files and databases sit side by side in views I switch between from a sidebar. Sessions keep running on my machine, so closing the window never loses an agent's work.</p>
                        <p>The shared UI, terminal and shell live in <TextLink to="https://github.com/basmilius/adecore">ADE CORE</TextLink>, and the editor is backed by language servers I write in Rust, for PHP and SQL. The conventions I give my agents are published as <TextLink to="https://github.com/basmilius/skills">Agent Skills</TextLink>.</p>
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
                        className="grid grid-cols-1 gap-x-7 gap-y-1.5 pb-7 md:grid-cols-[180px_minmax(0,1fr)]">
                        <div className="pt-0.5">
                            <span className="inline-block rounded-full bg-accent-soft px-[9px] py-[3px] font-mono text-xs whitespace-nowrap text-accent-text">{entry.date}</span>
                        </div>
                        <div className="relative border-l border-line pl-[22px]">
                            <span className="absolute top-[7px] -left-[5px] size-[9px] rounded-full bg-accent shadow-[0_0_0_3px_var(--surface)]"/>
                            <h3 className="text-lg font-semibold">{entry.title}</h3>
                            <p className="mt-1.5 max-w-[62ch] text-[15px] leading-[1.7] text-muted">{entry.body}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
