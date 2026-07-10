export default defineNuxtConfig({
    compatibilityDate: '2026-07-10',

    devtools: {enabled: true},

    modules: [
        '@nuxt/fonts',
        '@nuxtjs/color-mode'
    ],

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
                {rel: 'icon', href: '/favicon.ico', sizes: 'any'}
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

    fonts: {
        experimental: {
            processCSSVariables: true
        },
        families: [
            {name: 'Space Grotesk', provider: 'google', weights: [400, 500, 600, 700]},
            {name: 'JetBrains Mono', provider: 'google', weights: [400, 500, 700]},
            {name: 'Inter', provider: 'google', weights: [400, 500, 600]}
        ]
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

    typescript: {
        strict: true
    }
});
