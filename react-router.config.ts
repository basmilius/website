import type { Config } from '@react-router/dev/config';

export default {
    ssr: true,
    prerender: [
        '/',
        '/work',
        '/work/meteocons',
        '/smarthome',
        '/about',
        '/contact'
    ]
} satisfies Config;
