import type { Metadata, Viewport } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import type { PropsWithChildren } from 'react';
import { Footer, Navigation } from '@/component/shell';

import '@/asset/css/index.scss';
import basImage from '@/asset/image/bas.jpg';

export const metadata: Metadata = {
    title: 'Bas Milius — Full-Stack Developer',
    description: 'A 29-year-old full stack developer from Groenlo, The Netherlands.',
    keywords: 'bas milius,basmilius,milius,developer,website,app,latte-ui,raxos,weather icons,latte,meteocons',
    authors: [{name: 'Bas Milius', url: 'https://bas.dev'}],
    robots: 'index,follow'
};

export const viewport: Viewport = {
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#0155ce',
    viewportFit: 'cover',
    width: 'device-width'
};

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <ViewTransitions>
            <html lang="en">
            <head>
                <link
                    rel="preconnect"
                    href="https://font.bmcdn.nl"
                    crossOrigin="anonymous"/>

                <link
                    rel="preload"
                    href="https://font.bmcdn.nl/css2?family=outfit-variable"
                    as="style"/>

                <link
                    rel="stylesheet"
                    href="https://font.bmcdn.nl/css2?family=outfit-variable"/>
            </head>
            <body>
            <Navigation/>
            {children}
            <Footer/>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                "@context": "https://schema.org/",
                "@type": "Person",
                "name": "Bas Milius",
                "url": "https://bas.dev",
                "image": "${basImage.src}",
                "sameAs": [
                    "https://github.com/basmilius",
                    "https://twitter.com/basmilius",
                    "https://linkedin.com/in/basmilius",
                    "https://dribbble.com/basmilius",
                    "https://snapchat.com/add/basmilius/",
                    "https://instagram.com/basmilius/",
                    "https://facebook.com/basmilius",
                    "https://bas.dev"
                ],
                "jobTitle": "Full-Stack Developer"
            }`
                }}></script>
            </body>
            </html>
        </ViewTransitions>
    );
}
