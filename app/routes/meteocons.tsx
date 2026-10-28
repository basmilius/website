import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { Link } from 'react-router';
import { siGithub } from 'simple-icons';
import { BrandIcon } from '~/components/BrandIcon';
import { PageHeader } from '~/components/Headings';
import { Code, PillLink, TextLink } from '~/components/Links';
import { seo } from '~/lib/seo';
import { useClipboard } from '~/lib/useClipboard';

const ICON_BASE = 'https://unpkg.com/@meteocons/svg/fill';

const PREVIEWS = [
    {name: 'clear-day', alt: 'Clear day icon from Meteocons'},
    {name: 'overcast-rain', alt: 'Overcast rain icon from Meteocons'},
    {name: 'partly-cloudy-day-snow', alt: 'Partly cloudy snow icon from Meteocons'},
    {name: 'partly-cloudy-night-sleet', alt: 'Partly cloudy sleet at night icon from Meteocons'}
];

const PACKAGES = ['@meteocons/svg', '@meteocons/lottie'];

export function meta() {
    return seo({
        title: 'Meteocons',
        description: 'Meteocons: 500+ free, open-source animated weather icons in four styles, as SVG and Lottie, ready for React, Vue, Svelte, iOS, Android and any platform.',
        path: '/work/meteocons'
    });
}

export default function Meteocons() {
    const [copied, copy] = useClipboard();

    return (
        <>
            <PageHeader
                eyebrow={(
                    <div className="flex items-center gap-2 font-mono text-sm">
                        <Link
                            to="/work"
                            className="text-muted hover:text-ink">
                            // ~/work
                        </Link>
                        <span className="text-faint">/</span>
                        <span className="text-accent-text">meteocons</span>
                    </div>
                )}
                title="Animated Weather Icons"
                lead="Over 500 unique animated weather icons. Free and open source."
                leadWidth=""/>

            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {PREVIEWS.map((preview) => (
                    <figure
                        key={preview.name}
                        className="flex flex-col overflow-hidden rounded-[14px] border border-line bg-surface transition-[translate,box-shadow] duration-[180ms] ease-site hover:-translate-y-0.5 hover:shadow-float">
                        <div className="aspect-square p-[14%]">
                            <img
                                className="size-full"
                                src={`${ICON_BASE}/${preview.name}.svg`}
                                alt={preview.alt}/>
                        </div>
                        <figcaption className="truncate border-t border-line-soft px-3 py-[9px] font-mono text-xs text-muted">{preview.name}.svg</figcaption>
                    </figure>
                ))}
            </div>

            <div className="mt-9 flex max-w-[66ch] flex-col gap-4 text-base leading-[1.75] text-muted">
                <p>Meteocons is a set of animated weather icons. I designed every icon in Figma, in four styles: fill, flat, line and monochrome. They come as animated SVG and as Lottie JSON.</p>
                <p>Meteocons has its own website now. On <TextLink to="https://meteocons.com">meteocons.com</TextLink> you can browse all icons and read the documentation. Install the icons from npm with <Code>@meteocons/svg</Code> or <Code>@meteocons/lottie</Code>, or grab them from the GitHub repository.</p>
                <p>The icons work on any platform that renders SVG or Lottie, such as React, Vue, Svelte, Angular, iOS and Android. They're MIT-licensed, so you're free to use and modify them.</p>
            </div>

            <div className="mt-7 max-w-[600px] overflow-hidden rounded-xl border border-white/7 bg-term text-[#d6d6de]">
                <div className="flex h-9 items-center border-b border-white/7 pr-2 pl-3.5 font-mono text-xs text-[#6b6b76]">install</div>
                {PACKAGES.map((pkg) => {
                    const isCopied = copied === pkg;

                    return (
                        <div
                            key={pkg}
                            className="flex items-center gap-3 py-2.5 pr-2 pl-4 font-mono text-sm">
                            <span className="min-w-0 flex-1 wrap-anywhere">
                                <span className="text-[#6b6b76]">$</span> npm i <span className="text-[#e88bb5]">{pkg}</span>
                            </span>
                            <button
                                type="button"
                                onClick={() => copy(pkg, `npm i ${pkg}`)}
                                className={`flex h-7 flex-none cursor-pointer items-center gap-1.5 rounded-md bg-white/6 px-2.5 text-xs hover:bg-white/12 ${isCopied ? 'text-[#4ade80]' : 'text-[#9a9aa6]'}`}>
                                {isCopied ? <Check size={12}/> : <Copy size={12}/>}
                                {isCopied ? 'copied' : 'copy'}
                            </button>
                        </div>
                    );
                })}
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5">
                <PillLink
                    to="https://meteocons.com"
                    variant="primary">
                    Visit meteocons.com
                    <ArrowUpRight size={12}/>
                </PillLink>
                <PillLink to="https://github.com/basmilius/meteocons">
                    <BrandIcon brand={siGithub}/>
                    View on GitHub
                </PillLink>
            </div>
        </>
    );
}
