import { ArrowRight } from 'lucide-react';
import type { Project } from '~/data/projects';

type Props = {
    readonly projects: readonly Project[];
};

export function ProjectGrid({projects}: Props) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
                <ProjectCard
                    key={project.url}
                    project={project}/>
            ))}
        </div>
    );
}

function ProjectCard({project}: { readonly project: Project }) {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener"
            className="relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-card transition-[translate,border-color,box-shadow] duration-[320ms] ease-card hover:-translate-y-[3px] hover:border-line-strong hover:shadow-card-hover">
            <div className="aspect-video overflow-hidden border-b border-line bg-sunken">
                <img
                    className="block h-[calc(100%+1px)] w-full object-cover"
                    src={project.image}
                    alt={project.title}
                    loading="lazy"/>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1.5 px-4 pt-4 pb-3.5">
                <span className="text-base font-semibold">{project.title}</span>
                <p className="text-sm leading-[1.55] text-muted">{project.description}</p>
                <span className="mt-auto flex items-center justify-between gap-2 border-t border-line-soft pt-3 font-mono text-xs text-accent-text">
                    {project.domain}
                    <ArrowRight size={12}/>
                </span>
            </div>
        </a>
    );
}
