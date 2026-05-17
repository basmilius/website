import { Metadata } from 'next';
import { Information, Socials } from '@/component/content';
import { Intro, Row } from '@/component/shell';

export const metadata: Metadata = {
    title: 'Contact | Bas Milius — Full-Stack Developer'
};

export default () => (<>
    <Intro title="Contact"/>

    <Row
        title="Send a message"
        subTitle="For questions and new projects.">
        <p className="lead">
            Thanks for stopping by. Whether you're planning a website or app, have a question about one of my projects, or just want to get in touch, feel free to reach out using any of the details below.
        </p>

        <p>
            If you've found a bug in one of my open source projects, the fastest way to reach me is by opening an issue on the project's GitHub repository. Describe what you were doing when it broke and I'll take a look when I can.
        </p>
    </Row>

    <Row
        isAlternate
        title="Information"
        subTitle="About my company and more.">
        <Information.Grid>
            <Information.Item
                icon="fas briefcase"
                title="KvK-number"
                value="78355621"/>

            <Information.Item
                icon="fas badge-percent"
                title="BTW-ID"
                value="NL003322759B51"/>

            <Information.Item
                icon="fas at"
                title="E-mail"
                value="bas@mili.us"/>

            <Information.Item
                icon="fas phone"
                title="Phone number"
                value="+31 6 41794692"/>

            <Information.Item
                icon="fas location-dot"
                title="Address"
                value="Het Blik 60, 7141 TK Groenlo, Netherlands"/>
        </Information.Grid>
    </Row>

    <Socials/>
</>);
