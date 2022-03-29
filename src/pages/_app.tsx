import { LatteUi, LatteUiContext } from "@latte-ui/core";
import { Head } from "@/component/platform";
import { BMFooter, BMNavigation } from "@/component/shell";
import { initializeFontAwesome, renderIcon } from "@/logic/font-awesome";

import "../css/latte.scss";
import "../css/index.scss";

initializeFontAwesome();

const latteUiConfig = LatteUiContext.withDefaults({
    emoji: {
        baseUrl: "https://bmcdn.nl/assets/joypixels/v6.6",
        fileName: "/svg/%s.svg"
    },
    icon: {
        named: {
            angleLeft: "fas angle-left",
            anglesLeft: "fas angles-left",
            angleRight: "fas angle-right",
            anglesRight: "fas angles-right",
            calendar: "fas calendar"
        },
        renderer: renderIcon
    }
});

export default function BApp({Component, pageProps}) {
    return (<>
        <Head>
            <meta name="description" content="A 25-year old developer from Groenlo, The Netherlands."/>
            <meta name="keywords" content="bas milius,basmilius,milius,developer,website,app,latte-ui,raxos,weather icons,latte,meteocons"/>
            <meta name="robots" content="index,follow" key="robots"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"/>

            <title>Bas</title>
        </Head>

        <LatteUi {...latteUiConfig}>
            <BMNavigation/>

            <Component {...pageProps}/>

            <BMFooter/>
        </LatteUi>
    </>);
}
