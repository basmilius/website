import type { MetaDescriptor } from 'react-router';

export const SITE_URL = 'https://bas.dev';

const SITE_TITLE = 'Bas Milius - Full-Stack Developer';

type SeoOptions = {
    readonly title?: string;
    readonly description: string;
    readonly path: string;
    readonly noIndex?: boolean;
};

export function seo({title, description, path, noIndex = false}: SeoOptions): MetaDescriptor[] {
    const fullTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE;
    const url = `${SITE_URL}${path}`;

    return [
        {title: fullTitle},
        {name: 'description', content: description},
        {name: 'robots', content: noIndex ? 'noindex, follow' : 'index, follow'},
        {tagName: 'link', rel: 'canonical', href: url},
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: 'Bas Milius'},
        {property: 'og:title', content: fullTitle},
        {property: 'og:description', content: description},
        {property: 'og:url', content: url},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:image', content: `${SITE_URL}/og-image.png`},
        {property: 'og:image:width', content: '2400'},
        {property: 'og:image:height', content: '1260'},
        {property: 'og:image:alt', content: 'Bas Milius, Full-Stack Developer'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@basmilius'},
        {name: 'twitter:creator', content: '@basmilius'}
    ];
}
