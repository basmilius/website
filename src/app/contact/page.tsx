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
            Good to see you are interested in me or one of my projects! If you are looking for a website
            or app, please email me or say hi at one of the social networks listed at the
            bottom. Spam will always be reported.
        </p>

        <p>
            All my open source projects have their own GitHub Repository where you can create issues if
            you find a bug. Explain what happened when the bug occurred and I’ll see what I can do. Please
            do note that I'm not always available due to my daily job.
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
