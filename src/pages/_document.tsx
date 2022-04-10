import { Head, Html, Main, NextScript } from "next/document";

export default function BDocument() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8"/>
                <meta name="author" content="Bas Milius"/>
                <meta name="revisit-after" content="1 day"/>
                <meta name="theme-color" content="#0155ce"/>
                <link rel="preconnect" href="https://font.bmcdn.nl" crossOrigin="anonymous"/>
                <link rel="preload" href="https://font.bmcdn.nl/css2?family=outfit" as="style"/>
                <link rel="stylesheet" href="https://font.bmcdn.nl/css2?family=outfit"/>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    );
}
