import type { Config } from '@react-router/dev/config';

export default {
    ssr: false,
    prerender: [
        '/',
        '/work',
        '/work/meteocons',
        '/smarthome',
        '/about',
        '/contact'
    ]
} satisfies Config;
