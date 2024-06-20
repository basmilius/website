import { Row } from '@/component/shell';
import Timeline from './Timeline';

export default () => (
    <Row
        title="Work experience"
        subTitle="A few things that I've done to gain work experience in my field.">
        <Timeline.Lane>
            <Timeline.Item
                date="June 2020 — now"
                title="Self-employed">
                <p>
                    Back in 2020, I started my own company. After receiving more and more questions about making
                    small websites for acquaintances or collaborating on projects with others. With my company I
                    am not actively looking for new customers, but if someone knocks on the door for a website,
                    app or simple design, I am always happy to help.
                </p>
            </Timeline.Item>

            <Timeline.Item
                date="June 2022 — June 2024"
                title="WeAreFancee / Tibbaa">
                <p>
                    Senior Full-Stack Engineer &mdash; My main tasks involved working on an organizer dashboard
                    and an app. The dashboard was created with Vue and used Vite as a build tool. Our app was
                    developed using Flutter, which I built from scratch. Unfortunately, the company went bankrupt.
                </p>
            </Timeline.Item>

            <Timeline.Item
                date="June 2016 — June 2022"
                title="IdeeMedia">
                <p>
                    Full-Stack Developer &mdash; My career as a developer really started at IdeeMedia. I worked
                    on lots of projects here. From small websites for local companies to large order systems for
                    the Marveld holiday park in Groenlo. I also did server management here and created a new
                    hosting platform from scratch.
                </p>
            </Timeline.Item>

            <Timeline.Item
                date="2015"
                title="IMTheSolution">
                <p>
                    Internship &mdash; During the period that I went to school at Graafschap College, I did an
                    internship at IMTheSolution. Here I learned to work with Xamarin, among other things, and
                    I found out that mobile app development does interest me, but not with Xamarin.
                </p>
            </Timeline.Item>
        </Timeline.Lane>
    </Row>
);
