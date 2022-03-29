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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, autem culpa distinctio eum iure laudantium officia reprehenderit saepe sunt tempora temporibus totam, voluptates. A atque quo ratione recusandae vel!
                </p>
            </BMTimeline.Item>

            <BMTimeline.Item
                date="2016 — Now"
                title="IdeeMedia">
                <p>
                    Full-Stack Developer &mdash; Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, autem culpa distinctio eum iure laudantium officia reprehenderit saepe sunt tempora temporibus totam, voluptates. A atque quo ratione recusandae vel!
                </p>
            </BMTimeline.Item>

            <BMTimeline.Item
                date="2015"
                title="IMTheSolution">
                <p>
                    Internship &mdash; Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur, autem culpa distinctio eum iure laudantium officia reprehenderit saepe sunt tempora temporibus totam, voluptates. A atque quo ratione recusandae vel!
                </p>
            </BMTimeline.Item>
        </BMTimeline>

    </BMSection>
));
