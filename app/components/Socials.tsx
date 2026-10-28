import { socials } from '~/data/socials';
import { BrandIcon } from './BrandIcon';
import { SectionHeading } from './Headings';

type Props = {
    readonly className?: string;
};

export function Socials({className}: Props) {
    return (
        <section className={className}>
            <SectionHeading
                eyebrow="// socials"
                title="Socials"
                description="Where you can find even more."/>

            <div className="mt-5 flex flex-wrap gap-2">
                {socials.map((social) => (
                    <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener me"
                        className="inline-flex h-10 items-center gap-[9px] rounded-full border border-line bg-surface px-4 font-mono text-sm transition-all duration-150 hover:border-accent hover:text-accent-text">
                        <BrandIcon brand={social.brand}/>
                        {social.label}
                    </a>
                ))}
            </div>
        </section>
    );
}
