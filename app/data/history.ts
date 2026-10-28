export type HistoryEntry = {
    readonly date: string;
    readonly title: string;
    readonly body: string;
};

export const experience: readonly HistoryEntry[] = [
    {
        date: 'June 2020 - Now',
        title: 'Self-employed',
        body: 'Back in 2020, I started my own company, after receiving more and more questions about making small websites for acquaintances or collaborating on projects with others. With my company I am not actively looking for new customers, but if someone knocks on the door for a website, app or simple design, I am always happy to help.'
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

export const schooling: readonly HistoryEntry[] = [
    {
        date: '2017 - 2020',
        title: 'Deltion College',
        body: 'Application developer - After a two year gap I was still motivated to get my degree, so I decided to restart my education at Deltion College. All the effort I put into education was worth it because I managed to get my degree!'
    },
    {
        date: '2012 - 2015',
        title: 'Graafschap College',
        body: 'Application developer - I wanted to explore this interest in programming even more. I already had some self-knowledge of programming which made school really easy for me, maybe even a bit too easy… It was also the reason why I quit school for a few years.'
    },
    {
        date: '2008 - 2012',
        title: 'Marianum',
        body: 'Commerce & administration - My interest in computers has already been there since I was a kid. I even hacked the schools wifi once. It was very easy for me to choose the subject "Commerce & administration" in middle school. I got to learn a bit about administration.'
    }
];
