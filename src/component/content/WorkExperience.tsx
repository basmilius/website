import { memo } from "react";
import { BMTimeline } from "@/component/content";
import { BMSection } from "@/component/shell";

export default memo(() => (
    <BMSection
        title="Work experience"
        subTitle="A few things that I've done to gain work experience in my field.">

        <BMTimeline>
            <BMTimeline.Item
                date="2020 — Now"
                title="Self-employed">
                <p>
                    In 2020 I started my own company. I got more and more questions about making small websites
                    for acquaintances or collaborating on projects with others. With my company I am not actively
                    looking for new customers, but if someone knocks on the door for a website, app or simple
                    design, I am always happy to help.
                </p>
            </BMTimeline.Item>

            <BMTimeline.Item
                date="2016 — Now"
                title="IdeeMedia">
                <p>
                    Full-Stack Developer &mdash; My career as a developer really started at IdeeMedia. I work on
                    a lot of projects here. From small websites for local companies to large order systems for
                    the Marveld holiday park in Groenlo. I also do some server management here and make sure
                    everything runs smoothly online.
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
