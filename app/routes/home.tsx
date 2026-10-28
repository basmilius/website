import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { siGithub } from 'simple-icons';
import { BrandIcon } from '~/components/BrandIcon';
import { BODY_CLASS, Eyebrow, PageHeader } from '~/components/Headings';
import { PillLink } from '~/components/Links';
import { ProjectGrid } from '~/components/ProjectGrid';
import { GITHUB_URL } from '~/data/navigation';
import { featuredProjects } from '~/data/projects';
import { seo } from '~/lib/seo';
import { useTypewriter } from '~/lib/useTypewriter';

const PURSUITS = ['building websites', 'crafting web apps', 'shipping open source', 'designing weather icons', 'automating smart homes'];

export function meta() {
    return seo({
        description: 'Bas Milius is a full-stack developer from the Netherlands. I build websites, apps and backend systems, and open-source projects like Ruimte, Meteocons and Flux UI.',
        path: '/'
    });
}

export default function Home() {
    return (
        <>
            <PageHeader
                eyebrow={<Eyebrow to="/">// ~/</Eyebrow>}
                title="Bas Milius"
                lead="Full-Stack Developer with a passion for creating websites, apps, and backend applications."
                leadWidth="max-w-[44ch]">
                <p className={BODY_CLASS}>I enjoy experimenting with new techniques and occasionally tinkering with tools like Figma and Docker. As a Full-Stack Developer, I find fulfillment in coding for personal projects as well as collaborating on projects for others.</p>

                <Whoami/>

                <div className="mt-7 flex flex-wrap items-center gap-2.5">
                    <PillLink
                        to="/about"
                        variant="primary">
                        About me
                        <ArrowRight size={12}/>
                    </PillLink>
                    <PillLink to="/contact">
                        Contact
                        <ArrowRight size={12}/>
                    </PillLink>
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex h-11 items-center gap-2 px-2 font-mono text-sm text-muted hover:text-ink">
                        <BrandIcon brand={siGithub}/>
                        Follow on GitHub
                    </a>
                </div>
            </PageHeader>

            <section className="mt-18">
                <div className="mb-[18px] flex items-center gap-3.5">
                    <h2 className="font-mono text-sm font-medium">Selected work</h2>
                    <span className="h-px flex-1 bg-line"/>
                    <Link
                        to="/work"
                        className="flex items-center gap-2 font-mono text-sm text-muted hover:text-ink">
                        view all
                        <ArrowRight size={11}/>
                    </Link>
                </div>

                <ProjectGrid projects={featuredProjects}/>
            </section>
        </>
    );
}

function Whoami() {
    const typed = useTypewriter(PURSUITS);

    const prompt = (
        <>
            <span className="text-[#4ade80]">bas</span>
            <span className="text-[#6b6b76]">@</span>
            <span className="text-[#60a5fa]">groenlo</span>
            {' '}
            <span className="text-[#6b6b76]">~ $</span>
        </>
    );

    return (
        <div className="mt-7 max-w-[600px] overflow-hidden rounded-xl border border-white/7 bg-term text-[#d6d6de] shadow-float">
            <div className="flex h-9 items-center justify-between border-b border-white/7 px-3.5 font-mono text-xs text-[#6b6b76]">
                <span>zsh - ~/bas.dev</span>
                <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-[#4ade80]"/>
                    online
                </span>
            </div>
            <div className="px-[18px] pt-4 pb-[18px] font-mono text-[14.5px] leading-[1.85]">
                <div>{prompt} whoami</div>
                <div className="text-[#ececf1]">Bas Milius, full-stack developer</div>
                <div className="mt-1.5">{prompt} echo $CURRENTLY</div>
                <div className="flex items-baseline text-[#ececf1]">
                    <span className="mr-[.6em] text-[#fbbf24]">&gt;</span>
                    <span>{typed}</span>
                    <span className="ml-0.5 inline-block h-[1.1em] w-[.55em] translate-y-[.18em] animate-blink bg-accent"/>
                </div>
            </div>
        </div>
    );
}
