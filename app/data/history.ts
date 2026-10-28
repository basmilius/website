export type HistoryEntry = {
    readonly date: string;
    readonly title: string;
    readonly body: string;
};

export const experience: readonly HistoryEntry[] = [
    {
        date: 'June 2020 - Now',
        title: 'Self-employed',
        body: 'In 2020 I started my own company, after more and more people asked me to build a small website or work on a project together. I\'m not actively looking for new customers, but if someone knocks on the door for a website, app or simple design, I\'m happy to help.'
    },
    {
        date: 'August 2024 - Now',
        title: 'Axilium',
        body: 'As a Senior Full-Stack Developer I work on Solvidi, a platform used in education here in the Netherlands.'
    },
    {
        date: 'June 2022 - June 2024',
        title: 'WeAreFancee / Tibbaa',
        body: 'As a Senior Full-Stack Engineer I worked on an organizer dashboard and an app. The dashboard ran on Vue with Vite, and I built the Flutter app from scratch. Unfortunately, the company went bankrupt.'
    },
    {
        date: 'June 2016 - June 2022',
        title: 'IdeeMedia',
        body: 'This is where my career as a Full-Stack Developer really started. I worked on lots of projects, from small websites for local companies to large order systems for the Marveld holiday park in Groenlo. I also managed the servers and built a new hosting platform from scratch.'
    },
    {
        date: '2015',
        title: 'IMTheSolution',
        body: 'An internship during my time at Graafschap College. I learned to work with Xamarin, among other things, and found out that mobile app development does interest me. Just not with Xamarin.'
    }
];

export const schooling: readonly HistoryEntry[] = [
    {
        date: '2017 - 2020',
        title: 'Deltion College',
        body: 'After a two-year gap I still wanted my degree, so I restarted the application developer program at Deltion College. All the effort paid off, and I got it!'
    },
    {
        date: '2012 - 2015',
        title: 'Graafschap College',
        body: 'I studied application development because I wanted to dig deeper into programming. I had already taught myself a lot, which made school easy for me. Maybe a bit too easy, because it\'s also why I quit school for a few years.'
    },
    {
        date: '2008 - 2012',
        title: 'Marianum',
        body: 'I\'ve been into computers since I was a kid, and I even hacked the school\'s wifi once. In middle school I picked Commerce & administration, an easy choice for me, and learned a bit about administration.'
    }
];
