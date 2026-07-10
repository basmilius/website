export type TimelineEntry = {
    readonly date: string;
    readonly title: string;
    readonly body: string;
};

export const experience: readonly TimelineEntry[] = [
    {
        date: 'June 2020 - now',
        title: 'Self-employed',
        body: 'Back in 2020, I started my own company. After receiving more and more questions about making small websites for acquaintances or collaborating on projects with others. With my company I am not actively looking for new customers, but if someone knocks on the door for a website, app or simple design, I am always happy to help.'
    },
    {
        date: 'August 2024 - Now',
        title: 'Axilium',
        body: 'Senior Full-Stack Developer - Currently working on a project called Solvidi, which is used in the education system here in The Netherlands.'
    },
    {
        date: 'June 2022 - June 2024',
        title: 'WeAreFancee / Tibbaa',
        body: 'Senior Full-Stack Engineer - My main tasks involved working on an organizer dashboard and an app. The dashboard was created with Vue and used Vite as a build tool. Our app was developed using Flutter, which I built from scratch. Unfortunately, the company went bankrupt.'
    },
    {
        date: 'June 2016 - June 2022',
        title: 'IdeeMedia',
        body: 'Full-Stack Developer - My career as a developer really started at IdeeMedia. I worked on lots of projects here. From small websites for local companies to large order systems for the Marveld holiday park in Groenlo. I also did server management here and created a new hosting platform from scratch.'
    },
    {
        date: '2015',
        title: 'IMTheSolution',
        body: 'Internship - During the period that I went to school at Graafschap College, I did an internship at IMTheSolution. Here I learned to work with Xamarin, among other things, and I found out that mobile app development does interest me, but not with Xamarin.'
    }
];
