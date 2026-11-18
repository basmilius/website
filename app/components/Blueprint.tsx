import type { CSSProperties } from 'react';
import { type Blueprint as BlueprintData, type BlueprintSlug, blueprintLogoSize, blueprints, blueprintTile } from '~/data/blueprints';

type Props = {
    readonly slug: BlueprintSlug;
    readonly title: string;
};

export function Blueprint({slug, title}: Props) {
    const {width, height, pattern, variant, format = 'svg', bottom}: BlueprintData = blueprints[slug];
    const tile = blueprintTile(slug);
    const mask = `url("${tile}") 0 0 / ${pattern === 'streamwithlien' ? '110px auto' : '69px'} repeat`;
    const logo = `/image/blueprints/${slug}.${format}`;
    const lightLogo = variant === 'light' ? `/image/blueprints/${slug}.light.${format}` : logo;
    const darkLogo = variant === 'dark' ? `/image/blueprints/${slug}.dark.${format}` : logo;

    return (
        <div className="relative aspect-video overflow-hidden bg-sunken">
            <div
                className={pattern === 'streamwithlien'
                    ? 'absolute -inset-[45%] -rotate-14 bg-ink opacity-[.036] dark:opacity-[.041]'
                    : 'absolute -inset-[45%] -rotate-14 bg-ink opacity-[.065] dark:opacity-[.075]'}
                style={{mask, WebkitMask: mask}}/>
            <div className="absolute top-1/2 left-1/2 h-[140px] w-[236px] -translate-1/2 bg-[radial-gradient(closest-side,var(--sunken)_62%,transparent_100%)] dark:h-[84px] dark:w-[142px]"/>
            <span
                className={bottom
                    ? 'absolute bottom-0 left-1/2 h-[76%] -translate-x-1/2'
                    : 'absolute top-1/2 left-1/2 -translate-1/2'}
                style={bottom ? {aspectRatio: `${width} / ${height}`} : logoSize(slug)}>
                <img
                    className="block size-full object-contain dark:hidden"
                    src={lightLogo}
                    alt={title}
                    loading="lazy"/>
                <img
                    className="hidden size-full object-contain dark:block"
                    src={darkLogo}
                    alt={title}
                    loading="lazy"/>
            </span>
        </div>
    );
}

function logoSize(slug: BlueprintSlug): CSSProperties {
    const {width, height} = blueprintLogoSize(slug);

    return {
        width: `${width}%`,
        height: `${height}%`
    };
}
