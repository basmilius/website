import { memo } from "react";
import { BMWorkCard, BMWorkCardGrid } from "@/component/content";
import { Head } from "@/component/platform";
import { BMHeader } from "@/component/shell";

export default memo(() => (<>
    <Head>
        <title>Work | Bas Milius &mdash; Full-Stack Developer</title>
    </Head>

    <BMHeader title="Work"/>

    <BMWorkCardGrid title="Featured">
        <BMWorkCard.OfMe.WeatherIcons/>
        <BMWorkCard.OfMe.VisualEffects/>
        <BMWorkCard.OfMe.Glybe/>
    </BMWorkCardGrid>

    <BMWorkCardGrid more title="Projects">
        <BMWorkCard.OfMe.Glybe/>
        <BMWorkCard.OfMe.BasTools/>
        <BMWorkCard.OfMe.IsHetPatat/>
        <BMWorkCard.OfMe.IsHetFriet/>
        <BMWorkCard.OfMe.StartDeTijd/>
        <BMWorkCard.OfMe.Flant/>
        <BMWorkCard.OfMe.MandLink/>
    </BMWorkCardGrid>

    <BMWorkCardGrid more title="Open source">
        <BMWorkCard.OfMe.WeatherIcons/>
        <BMWorkCard.OfMe.Raxos/>
        <BMWorkCard.OfMe.VisualEffects/>
        <BMWorkCard.OfMe.TypeWriter/>
    </BMWorkCardGrid>

    <BMWorkCardGrid more title="For others">
        <BMWorkCard.ForOthers.JaimieVos/>
        <BMWorkCard.ForOthers.FleurNijhuis/>
        <BMWorkCard.ForOthers.StudioVierentwintig/>
        <BMWorkCard.ForOthers.ManegeNijhuis/>
        <BMWorkCard.ForOthers.ErveNijhuis/>
        <BMWorkCard.ForOthers.ErveTank/>
        <BMWorkCard.ForOthers.Wervinc/>
        <BMWorkCard.ForOthers.KapsalonLichtenberg/>
        <BMWorkCard.ForOthers.DitoGroenlo/>
    </BMWorkCardGrid>
</>));
