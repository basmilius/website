import { Metadata } from 'next';
import { Work } from '@/component/content';
import { Intro, Row, TextButton } from '@/component/shell';

export const metadata: Metadata = {
    title: 'Not found | Bas Milius — Full-Stack Developer'
};

export default () => (<>
    <Intro title="404"/>

    <Row
        title="Oops"
        subTitle="Something's missing.">
        <h3>The requested page was not found.</h3>
        <p>
            The page you were looking for does not (yet) exist on this website. Did
            you type the url yourself, please check for errors. If not, please
            contact me!
        </p>
        <TextButton.Group>
            <TextButton.Link
                href="/about"
                label="About me"
                icon="fas right"/>

            <TextButton.Link
                href="/work"
                label="My work"
                icon="fas right"/>

            <TextButton.Link
                href="/contact"
                label="Contact"
                icon="fas right"/>
        </TextButton.Group>
    </Row>

    <Work.Grid title="Featured work">
        <Work.OfMe.WeatherIcons/>
        <Work.OfMe.Flux/>
        <Work.OfMe.Passly/>
    </Work.Grid>
</>);
