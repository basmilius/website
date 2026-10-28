import { createRequestHandler } from 'react-router';

type Redirect = {
    readonly to: string;
    readonly status: 301 | 302;
};

const REDIRECTS: Readonly<Record<string, Redirect>> = {
    '/projects': {to: '/work', status: 301},
    '/projects/weather-icons': {to: '/work/meteocons', status: 301},
    '/meteocons': {to: '/work/meteocons', status: 302},
    '/module/@bas/website/resource/image/logo.svg': {to: 'https://bmcdn.nl/assets/branding/logo.svg', status: 301}
};

const requestHandler = createRequestHandler(
    () => import('virtual:react-router/server-build'),
    import.meta.env.MODE
);

export default {
    async fetch(request) {
        const url = new URL(request.url);
        const redirect = REDIRECTS[url.pathname];

        if (redirect) {
            return Response.redirect(new URL(redirect.to, url).toString(), redirect.status);
        }

        return requestHandler(request);
    }
} satisfies ExportedHandler<Env>;
