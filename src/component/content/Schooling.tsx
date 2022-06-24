import { memo } from "react";
import { BMTimeline } from "@/component/content";
import { BMSection } from "@/component/shell";

export default memo(() => (
    <BMSection
        title="Schooling"
        subTitle="It was a bit rough, but eventually I managed to successfully get my degree!">

        <BMTimeline>
            <BMTimeline.Item
                date="2017 — 2020"
                title="Deltion College">
                <p>
                    Application developer &mdash; After a two year gap I was still motivated to get my degree,
                    so I decided to restart my education at Deltion College. All the effort I put into education
                    was worth it because I managed to get my degree!
                </p>
            </BMTimeline.Item>

            <BMTimeline.Item
                date="2012 — 2015"
                title="Graafschap College">
                <p>
                    Application developer &mdash; I wanted to explore this interest in programming even more. I
                    already had some self-knowledge of programming which made school really easy for me, maybe
                    even a bit too easy… It was also the reason why I quit school for a few years.
                </p>
            </BMTimeline.Item>

            <BMTimeline.Item
                date="2008 — 2012"
                title="Marianum">
                <p>
                    Commerce & administration &mdash; My interest in computers has already been there since I was
                    a kid. I even hacked the schools wifi once. It was very easy for me to choose the subject
                    "Commerce & administration" in middle school. I got to learn a bit about administration.
                </p>
            </BMTimeline.Item>
        </BMTimeline>

    </BMSection>
));
