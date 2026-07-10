import { createHash } from 'node:crypto';

// Deterministic scoped class names so the server (SSR HTML) and client build
// produce the SAME mangled name. A content-based hash ([hash:base64:x]) differs
// between the two builds, which leaves the SSR markup unstyled until hydration.
function scopedName(name: string, filename: string): string {
    const file = filename.split('?')[0];
    const hash = createHash('sha256').update(`${file}#${name}`).digest('hex').slice(0, 7);
    return process.env.NODE_ENV === 'production' ? `x${hash}` : `${name}_${hash}`;
}

export default defineNuxtConfig({
    compatibilityDate: '2026-07-10',

    devtools: {enabled: true},

    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/seo'
    ],

    site: {
        url: 'https://bas.dev',
        name: 'Bas Milius',
        description: 'Full-Stack Developer from the Netherlands building websites, web apps and backend systems, plus open-source projects like Meteocons and Flux UI.',
        defaultLocale: 'en'
    },

    ogImage: {
        enabled: false
    },

    components: [
        {path: '~/components', pathPrefix: false}
    ],

    ssr: true,

    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover'}
            ],
            link: [
                {rel: 'icon', href: '/favicon.ico', sizes: 'any'},
                {rel: 'preconnect', href: 'https://font.bmcdn.nl', crossorigin: 'anonymous'},
                {rel: 'stylesheet', href: 'https://font.bmcdn.nl/css2?family=space-grotesk-variable|inter-variable|jetbrains-mono'}
            ]
        }
    },

    css: [
        '~/assets/css/index.scss'
    ],

    colorMode: {
        preference: 'system',
        fallback: 'light',
        classSuffix: '',
        storageKey: 'bas-color-mode'
    },

    nitro: {
        preset: 'cloudflare_module',
        cloudflare: {
            deployConfig: true,
            nodeCompat: true
        },
        prerender: {
            crawlLinks: true,
            routes: [
                '/',
                '/about',
                '/work',
                '/work/meteocons',
                '/contact'
            ]
        }
    },

    routeRules: {
        '/projects': {redirect: {to: '/work', statusCode: 301}},
        '/projects/weather-icons': {redirect: {to: '/work/meteocons', statusCode: 301}},
        '/meteocons': {redirect: {to: '/work/meteocons', statusCode: 302}},
        '/module/@bas/website/resource/image/logo.svg': {redirect: {to: 'https://bmcdn.nl/assets/branding/logo.svg', statusCode: 301}}
    },

    runtimeConfig: {
        public: {
            siteUrl: 'https://bas.dev'
        }
    },

    experimental: {
        viewTransition: true
    },

    vite: {
        css: {
            modules: {
                localsConvention: 'camelCaseOnly',
                generateScopedName: scopedName
            }
        }
    },

    typescript: {
        strict: true
    }
});
