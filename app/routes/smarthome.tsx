import { CloudSun, Lightbulb, MapPin, Zap } from 'lucide-react';
import { Eyebrow, GroupHeading, H2_CLASS, PageHeader, SectionEyebrow } from '~/components/Headings';
import { ProjectGrid } from '~/components/ProjectGrid';
import { homeyApps } from '~/data/projects';
import { seo } from '~/lib/seo';

const FEATURES = [
    {icon: Lightbulb, text: 'Control lights, blinds, media, climate and other devices.'},
    {icon: MapPin, text: 'Indicators and readings at their real place in the house.'},
    {icon: Zap, text: 'Energy, Insights, lists, weather and quick actions.'},
    {icon: CloudSun, text: 'Daylight, clouds and rain, and a camera that opens up the house per floor.'}
];

const STACK = ['Blender', 'Swift 6', 'Metal', 'RealityKit', 'TypeScript', 'WeatherKit', 'Homey Local API'];

export function meta() {
    return seo({
        title: 'Smart home',
        description: 'The smart home side of Bas Milius: Thuis, a 3D dashboard of our house, and apps for the Homey platform like Apple TV & HomePod, FlowBits and Claude.',
        path: '/smarthome'
    });
}

export default function Smarthome() {
    return (
        <>
            <PageHeader
                eyebrow={<Eyebrow to="/smarthome">// ~/smarthome</Eyebrow>}
                title="Smart home"
                lead="Our house runs on a Homey Pro. Most of what I build for it starts as something I want at home, and a lot of it ends up in the Homey App Store."/>

            <section className="mt-12">
                <SectionEyebrow>## thuis</SectionEyebrow>
                <h2 className={`mt-2.5 ${H2_CLASS}`}>A 3D dashboard of our house</h2>

                <figure className="mt-5 overflow-hidden rounded-2xl border border-line bg-sunken shadow-card">
                    <img
                        className="block aspect-[1600/1117] w-full object-cover"
                        src="/image/work/homey-3d.jpg"
                        alt="Thuis, the 3D dashboard of our house running on an iPad Pro"/>
                    <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-line bg-surface px-4 py-3 font-mono text-[12.5px] text-muted">
                        <span>Thuis on an iPad Pro, mounted on the wall</span>
                        <span className="text-faint">private project</span>
                    </figcaption>
                </figure>

                <div className="mt-7 grid grid-cols-1 gap-x-12 gap-y-6 min-[1100px]:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
                    <div className="flex flex-col gap-3.5 text-base leading-[1.75] text-muted">
                        <p><strong className="font-semibold text-ink">Thuis</strong> is a 3D dashboard of our house, connected to Homey. It runs as a native app on an iPad Pro mounted on the wall.</p>
                        <p>The house, the garden and the furniture are modeled in Blender and exported as GLB files. A TypeScript data model holds the measured house, where everything stands and which Homey device belongs where. A small iOS scanner app collects photos and measurements as reference for the models.</p>
                        <p>The style is deliberately a diorama. Material, light, soft shadows and ambient occlusion make the shape readable without chasing photorealism.</p>
                    </div>

                    <div>
                        <div className="font-mono text-xs text-faint">WHAT IT DOES</div>
                        <ul className="mt-3 flex flex-col">
                            {FEATURES.map(({icon: Icon, text}) => (
                                <li
                                    key={text}
                                    className="flex gap-3 border-b border-line-soft py-[11px] text-[15px] leading-[1.55]">
                                    <Icon
                                        size={15}
                                        className="mt-[3px] w-[18px] flex-none text-accent-text"/>
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                            {STACK.map((tech) => (
                                <span
                                    key={tech}
                                    className="inline-flex h-7 items-center rounded-full bg-sunken px-2.5 font-mono text-xs text-muted">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-16">
                <GroupHeading
                    title="Apps for Homey"
                    count={homeyApps.length}
                    description="Apps I built for the Homey smart home platform. They add extra devices, integrations and logic to people's automation flows."/>
                <ProjectGrid projects={homeyApps}/>
            </section>
        </>
    );
}
