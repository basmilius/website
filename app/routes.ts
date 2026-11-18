import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
    index('routes/home.tsx'),
    route('work', 'routes/work.tsx'),
    route('work/meteocons', 'routes/meteocons.tsx'),
    route('smarthome', 'routes/smarthome.tsx'),
    route('about', 'routes/about.tsx'),
    route('contact', 'routes/contact.tsx')
] satisfies RouteConfig;
