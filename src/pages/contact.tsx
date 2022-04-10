import { memo } from "react";
import { BMInformation, BMInformationItem, BMSocials } from "@/component/content";
import { Head } from "@/component/platform";
import { BMHeader, BMSection } from "@/component/shell";

export default memo(() => (<>
    <Head>
        <title>Contact | Bas Milius &mdash; Full-Stack Developer</title>
    </Head>

    <BMHeader title="Contact"/>

    <BMSection title="Send a message" subTitle="For questions and new projects.">
        <p className="lead">
            Good to see you are interested in me or one of my projects! If you are looking for a website
            or app please email me or say hi at one of the social networks listed at the
            bottom. Spam will always be reported.
        </p>
        <p>
            All my open source projects have their own GitHub Repository where you can create issues if
            you find a bug. Explain what happened when the bug occurred and I’ll see what I can do. Please
            do note that I'm not always available due to my daily job.
        </p>
    </BMSection>

    <BMSection title="Information" subTitle="About my company and more." isAlternate>
        <BMInformation>
            <BMInformationItem
                icon="fas briefcase"
                title="KvK-number"
                value="78355621"/>

            <BMInformationItem
                icon="fas badge-percent"
                title="BTW-ID"
                value="NL003322759B51"/>

            <BMInformationItem
                icon="fas at"
                title="E-mail"
                value="bas@mili.us"/>

            <BMInformationItem
                icon="fas phone"
                title="Phone number"
                value="+31 6 41794692"/>

            <BMInformationItem
                icon="fas location-dot"
                title="Address"
                value="Van Limburg Styrumstraat 47, 7141 KX Groenlo, Netherlands"/>
        </BMInformation>
    </BMSection>

    <BMSocials/>
</>));
