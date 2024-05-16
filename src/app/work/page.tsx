import { Metadata } from 'next';
import { Work } from '@/component/content';
import { Intro } from '@/component/shell';

export const metadata: Metadata = {
    title: 'Work | Bas Milius — Full-Stack Developer'
};

export default () => (<>
    <Intro title="Work"/>

    <Work.Grid title="Featured">
        <Work.OfMe.WeatherIcons/>
        <Work.OfMe.Flux/>
        <Work.OfMe.VisualEffects/>
    </Work.Grid>

    <Work.Grid
        more
        title="Open Source">
        <Work.OfMe.WeatherIcons/>
        <Work.OfMe.Raxos/>
        <Work.OfMe.Flux/>
        <Work.OfMe.VisualEffects/>
        <Work.OfMe.TypeWriter/>
    </Work.Grid>

    <Work.Grid
        more
        title="Projects">
        <Work.OfMe.Glybe/>
        <Work.OfMe.BasTools/>
        <Work.OfMe.IsHetPatat/>
        <Work.OfMe.IsHetFriet/>
        <Work.OfMe.StartDeTijd/>
    </Work.Grid>

    <Work.Grid
        more
        title="For others">
        <Work.ForOthers.JaimieVos/>
        <Work.ForOthers.FleurNijhuis/>
        <Work.ForOthers.Marveld/>
        <Work.ForOthers.StudioVierentwintig/>
        <Work.ForOthers.ManegeNijhuis/>
        <Work.ForOthers.ErveNijhuis/>
        <Work.ForOthers.ErveTank/>
        <Work.ForOthers.KapsalonLichtenberg/>
        <Work.ForOthers.DitoGroenlo/>
        <Work.ForOthers.DidietNl/>
    </Work.Grid>
</>);
