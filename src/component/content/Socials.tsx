import { memo } from "react";
import { BMSection, BMTextButton } from "@/component/shell";

export default memo(() => (
    <BMSection
        title="Socials"
        subTitle="Where you can find even more.">
        <p className="lead">
            Follow me on one of the social media platforms below if you want. Occasionally I'll post designs, work
            and releases. For a more daily and raw look, add me on Snapchat!
        </p>

        <BMTextButton.Grid>
            <BMTextButton
                tag="a"
                rel="noopener"
                target="_blank"
                href="https://github.com/basmilius"
                label="GitHub"
                icon="fab github"/>

            <BMTextButton
                tag="a"
                rel="noopener"
                target="_blank"
                href="https://twitter.com/basmilius"
                label="Twitter"
                icon="fab twitter"/>

            <BMTextButton
                tag="a"
                rel="noopener"
                target="_blank"
                href="https://linkedin.com/in/basmilius"
                label="LinkedIn"
                icon="fab linkedin"/>

            <BMTextButton
                tag="a"
                rel="noopener"
                target="_blank"
                href="https://dribbble.com/basmilius"
                label="Dribbble"
                icon="fab dribbble"/>

            <BMTextButton
                tag="a"
                rel="noopener"
                target="_blank"
                href="https://snapchat.com/add/basmilius/"
                label="Snapchat"
                icon="fab snapchat"/>

            <BMTextButton
                tag="a"
                rel="noopener"
                target="_blank"
                href="https://instagram.com/basmilius/"
                label="Instagram"
                icon="fab instagram"/>

            <BMTextButton
                tag="a"
                rel="noopener"
                target="_blank"
                href="https://facebook.com/basmilius"
                label="Facebook"
                icon="fab facebook"/>
        </BMTextButton.Grid>
    </BMSection>
));
