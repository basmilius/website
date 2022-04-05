import { Slot, SlotFillProvider } from "@latte-ui/slot-fill";
import { Head } from "@/component/platform";
import { BMFooter, BMNavigation } from "@/component/shell";
import { initializeFontAwesome } from "@/logic/font-awesome";

import "../css/latte.scss";
import "../css/index.scss";

initializeFontAwesome();

export default function BApp({Component, pageProps}) {
    return (<>
        <Head>
            <meta name="description" content="A 26-year old developer from Groenlo, The Netherlands."/>
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
    </>);
}
