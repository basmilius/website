import { memo } from "react";
import { BMTimeline } from "@/component/content";
import { BMSection } from "@/component/shell";

export default memo(() => (
    <BMSection
        title="Work experience"
        subTitle="A few things that I've done to gain work experience in my field.">

        <BMTimeline>
            <BMTimeline.Item
                date="June 2020 — Now"
                title="Self-employed">
                <p>
                    In 2020 I started my own company. I got more and more questions about making small websites
                    for acquaintances or collaborating on projects with others. With my company I am not actively
                    looking for new customers, but if someone knocks on the door for a website, app or simple
                    design, I am always happy to help.
                </p>
            </BMTimeline.Item>

            <BMTimeline.Item
                date="June 2022 — Now"
                title="Tibbaa / Fancee Software">
                <p>
                    Senior Full-Stack Engineer &mdash; My main tasks are working on an organizer dashboard and
                    an app. The dashboard is created with Vue and uses Vite as build tool, our app is created
                    using Flutter. I created the Flutter app from scratch.
                </p>
            </BMTimeline.Item>

            <BMTimeline.Item
                date="June 2016 — June 2022"
                title="IdeeMedia">
                <p>
                    Full-Stack Developer &mdash; My career as a developer really started at IdeeMedia. I worked
                    on lots of projects here. From small websites for local companies to large order systems for
                    the Marveld holiday park in Groenlo. I also did server management here and created a new
                    hosting platform from scratch.
                </p>
            </BMTimeline.Item>

            <BMTimeline.Item
                date="2015"
                title="IMTheSolution">
                <p>
                    Internship &mdash; During the period that I went to school at Graafschap College, I did an
                    internship at IMTheSolution. Here I learned to work with Xamarin, among other things, and
                    I found out that mobile app development does interest me, but not with Xamarin.
                </p>
            </BMTimeline.Item>
        </BMTimeline>

    </BMSection>
));
