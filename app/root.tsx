import { ArrowRight } from 'lucide-react';
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import type { Route } from './+types/root';
import { BODY_CLASS, Eyebrow, PageHeader } from './components/Headings';
import { PillLink } from './components/Links';
import { ProjectGrid } from './components/ProjectGrid';
import { Shell } from './components/shell/Shell';
import { featuredProjects } from './data/projects';
import { socials } from './data/socials';
import { seo, SITE_URL } from './lib/seo';
import { THEME_SCRIPT } from './lib/theme';
import './app.css';

const PERSON = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Bas Milius',
    url: SITE_URL,
    image: `${SITE_URL}/image/bas.jpg`,
    jobTitle: 'Full-Stack Developer',
    description: 'Full-stack developer from Groenlo, the Netherlands.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Groenlo',
        addressCountry: 'NL'
    },
    knowsAbout: ['React', 'TypeScript', 'PHP', 'Rust', 'Node.js', 'Flutter', 'WordPress'],
    sameAs: socials.map((social) => social.url)
};

export const links: Route.LinksFunction = () => [
    {rel: 'icon', href: '/favicon.ico', sizes: 'any'},
    {rel: 'preconnect', href: 'https://font.bmcdn.nl', crossOrigin: 'anonymous'},
    {rel: 'stylesheet', href: 'https://font.bmcdn.nl/css2?family=geist-variable|jetbrains-mono'}
];

export function Layout({children}: { readonly children: React.ReactNode }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning>
            <head>
                <meta charSet="utf-8"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"/>
                <meta
                    name="author"
                    content="Bas Milius"/>
                <meta
                    name="keywords"
                    content="bas milius,basmilius,milius,developer,website,app,raxos,weather icons,meteocons,passly,homey,apple tv,homepod,homepod mini,flowbits,ruimte"/>
                <meta
                    name="theme-color"
                    content="#155dfc"/>
                <script dangerouslySetInnerHTML={{__html: THEME_SCRIPT}}/>
                <Meta/>
                <Links/>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: JSON.stringify(PERSON)}}/>
            </head>
            <body>
                {children}
                <ScrollRestoration/>
                <Scripts/>
            </body>
        </html>
    );
}

export default function App() {
    return (
        <Shell>
            <Outlet/>
        </Shell>
    );
}

export function meta({error}: Route.MetaArgs) {
    if (!error) {
        return [];
    }

    return seo({
        title: 'Not found',
        description: 'The page you\'re looking for doesn\'t exist. Head back to the work, about or contact page.',
        path: '/404',
        noIndex: true
    });
}

export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
    const notFound = isRouteErrorResponse(error) && error.status === 404;

    return (
        <Shell>
            <PageHeader
                eyebrow={<Eyebrow to="/">// {notFound ? '404' : 'error'}</Eyebrow>}
                title={notFound ? 'Something\'s missing.' : 'Something went wrong.'}
                lead={notFound ? 'The requested page was not found.' : 'An unexpected error occurred while loading this page.'}>
                {notFound && (
                    <p className={BODY_CLASS}>The page you were looking for doesn't exist (yet). If you typed the URL yourself, check it for typos. If not, let me know!</p>
                )}

                <div className="mt-7 flex flex-wrap items-center gap-2.5">
                    <PillLink
                        to="/about"
                        variant="primary">
                        About me
                        <ArrowRight size={12}/>
                    </PillLink>
                    <PillLink to="/work">
                        My work
                        <ArrowRight size={12}/>
                    </PillLink>
                    <PillLink to="/contact">
                        Contact
                        <ArrowRight size={12}/>
                    </PillLink>
                </div>
            </PageHeader>

            <section className="mt-18">
                <h2 className="mb-[18px] font-mono text-sm font-medium">Selected work</h2>
                <ProjectGrid projects={featuredProjects}/>
            </section>
        </Shell>
    );
}
