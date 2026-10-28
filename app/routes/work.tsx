import { BODY_CLASS, Eyebrow, GroupHeading, PageHeader } from '~/components/Headings';
import { ProjectGrid } from '~/components/ProjectGrid';
import { projectGroups, recentProjects } from '~/data/projects';
import { seo } from '~/lib/seo';

export function meta() {
    return seo({
        title: 'Work',
        description: 'Selected work by Bas Milius: open-source tools, language servers, Agent Skills, and websites and backend applications for clients and local businesses.',
        path: '/work'
    });
}

export default function Work() {
    return (
        <>
            <PageHeader
                eyebrow={<Eyebrow to="/work">// ~/work</Eyebrow>}
                title="Work"
                lead="A mix of things I've built over the years. Some for myself or just for fun, others for the people and companies I've worked with.">
                <p className={BODY_CLASS}>Some of it is open source, and a lot of it is client work for local businesses, websites as well as backend applications.</p>
            </PageHeader>

            <section className="mt-12">
                <GroupHeading
                    title="Recent"
                    description="The latest things I've been working on."/>
                <ProjectGrid projects={recentProjects}/>
            </section>

            {projectGroups.map((group) => (
                <section
                    key={group.title}
                    className="mt-9">
                    <GroupHeading
                        title={group.title}
                        count={group.projects.length}
                        description={group.description}/>
                    <ProjectGrid projects={group.projects}/>
                </section>
            ))}
        </>
    );
}
