import "../css/latte.scss";
import "../css/index.scss";
import basImage from "../image/bas.jpg";

import { Slot, SlotFillProvider } from "@latte-ui/slot-fill";
import { Head } from "@/component/platform";
import { BMFooter, BMNavigation } from "@/component/shell";
import { initializeFontAwesome } from "@/logic/font-awesome";

initializeFontAwesome();

export default function BApp({ Component, pageProps }) {
    return (<>
        <Head>
            <meta name="description" content="A 28-year-old full stack developer from Groenlo, The Netherlands."/>
            <meta name="keywords" content="bas milius,basmilius,milius,developer,website,app,latte-ui,raxos,weather icons,latte,meteocons"/>
            <meta name="robots" content="index,follow" key="robots"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"/>

            <title>Bas</title>
        </Head>

        <SlotFillProvider>
            <Slot name="bm:tooltips"/>

            <BMNavigation/>
            <Component {...pageProps}/>
            <BMFooter/>
        </SlotFillProvider>

        <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `
            {
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
            }
        `
        }}></script>
    </>);
}
