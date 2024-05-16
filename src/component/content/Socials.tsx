import { Row, TextButton } from '@/component/shell';

export default () => (
    <Row
        title="Socials"
        subTitle="Where you can find even more.">
        <p>
            Follow me on one of the social media platforms below if you want. Occasionally I'll post designs, work,
            and releases. For a more daily and raw look, add me on Snapchat!
        </p>

        <TextButton.Grid>
            <TextButton
                tag="a"
                rel="noopener"
                target="_blank"
                href="https://github.com/basmilius"
                label="GitHub"
                icon="fab github"/>

            <TextButton
                tag="a"
                rel="noopener"
                target="_blank"
                href="https://twitter.com/basmilius"
                label="Twitter"
                icon="fab twitter"/>

            <TextButton
                tag="a"
                rel="noopener"
                target="_blank"
                href="https://linkedin.com/in/basmilius"
                label="LinkedIn"
                icon="fab linkedin"/>

            <TextButton
                tag="a"
                rel="noopener"
                target="_blank"
                href="https://dribbble.com/basmilius"
                label="Dribbble"
                icon="fab dribbble"/>

            <TextButton
                tag="a"
                rel="noopener"
                target="_blank"
                href="https://snapchat.com/add/basmilius/"
                label="Snapchat"
                icon="fab snapchat"/>

            <TextButton
                tag="a"
                rel="noopener"
                target="_blank"
                href="https://instagram.com/basmilius/"
                label="Instagram"
                icon="fab instagram"/>

            <TextButton
                tag="a"
                rel="noopener"
                target="_blank"
                href="https://facebook.com/basmilius"
                label="Facebook"
                icon="fab facebook"/>
        </TextButton.Grid>
    </Row>
);
