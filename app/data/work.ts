export type Project = {
    readonly title: string;
    readonly description: string;
    readonly descriptionHtml?: string;
    readonly url: string;
    readonly to?: string;
    readonly label: string;
    readonly icon: string;
    readonly image: string;
};

const image = (name: string): string => `/image/work/${name}`;

export const projects = {
    weatherIcons: {
        title: 'Meteocons',
        description: 'Over 500 unique animated weather icons in four styles.',
        url: 'https://meteocons.com',
        label: 'meteocons.com',
        icon: 'fas up-right',
        image: image('blueprint-meteocons.svg')
    },
    flux: {
        title: 'Flux UI',
        description: 'A Vue 3 UI framework that I use for most of my projects.',
        url: 'https://flux-ui.dev',
        label: 'Website',
        icon: 'fas up-right',
        image: image('blueprint-flux.svg')
    },
    raxos: {
        title: 'Raxos',
        description: 'Custom built building blocks for PHP frameworks.',
        url: 'https://raxos.dev',
        label: 'raxos.dev',
        icon: 'fas up-right',
        image: image('blueprint-raxos.svg')
    },
    typewriter: {
        title: 'TypeWriter',
        description: 'Custom made WordPress framework that I use to create custom themes.',
        url: 'https://github.com/glybe/typewriter',
        label: 'GitHub',
        icon: 'fab github',
        image: image('blueprint-typewriter.svg')
    },
    sparkle: {
        title: 'Sparkle',
        description: 'A set of fun visual effects that can be used on any website.',
        url: 'https://sparkle.graphics',
        label: 'sparkle.graphics',
        icon: 'fas up-right',
        image: image('blueprint-sparkle.svg')
    },
    packages: {
        title: 'Packages',
        description: 'A collection of personal TypeScript packages I use across my Vue projects.',
        url: 'https://packages.bas.dev',
        label: 'packages.bas.dev',
        icon: 'fas up-right',
        image: image('blueprint-packages.svg')
    },
    glybe: {
        title: 'Glybe',
        description: 'Dutch online community for everyone, come chat about everything!',
        url: 'https://glybe.nl',
        label: 'glybe.nl',
        icon: 'fas up-right',
        image: image('blueprint-glybe.svg')
    },
    passly: {
        title: 'Passly',
        description: 'A self-service online ticketing provider for events.',
        url: 'https://passly.nl',
        label: 'passly.nl',
        icon: 'fas up-right',
        image: image('blueprint-passly.svg')
    },
    basTools: {
        title: 'Bas Tools',
        description: 'Plugin that adds a custom theme and a few features to JetBrains IDE\'s',
        url: 'https://plugins.jetbrains.com/plugin/15420-bas-tools',
        label: 'jetbrains.com',
        icon: 'fas up-right',
        image: image('blueprint-bas-tools.svg')
    },
    isHetPatat: {
        title: 'Is het Patat?',
        description: 'Little website that shows if you should be on #TeamPatat.',
        url: 'https://ishetpatat.nl',
        label: 'ishetpatat.nl',
        icon: 'fas up-right',
        image: image('blueprint-ishetpatat.svg')
    },
    isHetFriet: {
        title: 'Is het Friet?',
        description: 'Little website that shows if you should be on #TeamFriet.',
        url: 'https://ishetfriet.nl',
        label: 'ishetfriet.nl',
        icon: 'fas up-right',
        image: image('blueprint-ishetfriet.svg')
    },
    startDeTijd: {
        title: 'Start de Tijd',
        description: 'An online timer and clock that I made in ten minutes :-)',
        url: 'https://startdetijd.nl',
        label: 'startdetijd.nl',
        icon: 'fas up-right',
        image: image('blueprint-startdetijd.svg')
    },
    apple: {
        title: 'Apple TV & HomePod',
        description: 'Control your Apple devices from your Homey.',
        url: 'https://homey.app/a/com.basmilius.apple/',
        label: 'Homey App Store',
        icon: 'fas up-right',
        image: image('com.basmilius.apple.png')
    },
    claude: {
        title: 'Claude',
        description: 'Bring Claude AI by Anthropic into your Homey flows.',
        url: 'https://homey.app/a/com.basmilius.claude/',
        label: 'Homey App Store',
        icon: 'fas up-right',
        image: image('com.basmilius.claude.png')
    },
    flowBits: {
        title: 'FlowBits',
        description: 'Small bits of logic, big difference in your Flows.',
        url: 'https://homey.app/a/com.basmilius.flowbits/',
        label: 'Homey App Store',
        icon: 'fas up-right',
        image: image('com.basmilius.flowbits.png')
    },
    lists: {
        title: 'Lists',
        description: 'Create and manage shopping lists, tasks, and notes-right from your dashboard.',
        url: 'https://homey.app/a/com.basmilius.listri/',
        label: 'Homey App Store',
        icon: 'fas up-right',
        image: image('com.basmilius.listri.png')
    },
    nlAlert: {
        title: 'NLAlert',
        description: 'Get notified when an NL Alert affects your location.',
        url: 'https://homey.app/a/com.basmilius.nlalert/',
        label: 'Homey App Store',
        icon: 'fas up-right',
        image: image('com.basmilius.nlalert.png')
    },
    sajr5: {
        title: 'SAJ R5',
        description: 'Monitor your SAJ R5 solar inverter with real-time energy insights.',
        url: 'https://homey.app/a/com.basmilius.sajr5/',
        label: 'Homey App Store',
        icon: 'fas up-right',
        image: image('com.basmilius.sajr5.png')
    },
    deGrolscheGracht: {
        title: 'De Grolsche Gracht',
        description: 'Discover the best pubs along the Grolsche Gracht',
        url: 'https://degrolschegracht.nl',
        label: 'degrolschegracht.nl',
        icon: 'fas up-right',
        image: image('blueprint-degrolschegracht.svg')
    },
    didietNl: {
        title: 'Didiet.nl',
        description: 'Corporate website for my brother.',
        url: 'https://didiet.nl',
        label: 'didiet.nl',
        icon: 'fas up-right',
        image: image('blueprint-didiet-nl.svg')
    },
    ditoGroenlo: {
        title: 'DITO Groenlo',
        description: 'Fun drama club in my local town, Groenlo.',
        url: 'https://dito-groenlo.nl',
        label: 'dito-groenlo.nl',
        icon: 'fas up-right',
        image: image('blueprint-dito.svg')
    },
    erveNijhuis: {
        title: 'Erve Nijhuis',
        description: 'Modern holiday house in Eibergen.',
        url: 'https://manege-nijhuis.nl/erve-nijhuis',
        label: 'manege-nijhuis.nl',
        icon: 'fas up-right',
        image: image('blueprint-erve-nijhuis.svg')
    },
    erveTank: {
        title: 'Erve Tank',
        description: 'Modern holiday apartment in Eibergen.',
        url: 'https://manege-nijhuis.nl/erve-tank',
        label: 'ervetank.nl',
        icon: 'fas up-right',
        image: image('blueprint-erve-tank.svg')
    },
    fleurNijhuis: {
        title: 'Fleur Nijhuis',
        description: 'Portfolio website built with WordPress and React.',
        url: 'https://fleur.graphics',
        label: 'fleur.graphics',
        icon: 'fas up-right',
        image: image('blueprint-fleur-nijhuis.svg')
    },
    jaimieVos: {
        title: 'Jaimie Vos',
        description: 'Portfolio website built with React and Next.js.',
        url: 'https://jaimie.dev',
        label: 'jaimie.dev',
        icon: 'fas up-right',
        image: image('blueprint-jaimie-vos.svg')
    },
    kapsalonLichtenberg: {
        title: 'Kapsalon Lichtenberg',
        description: 'Hair salon in my local town, Groenlo.',
        url: 'https://kapsalon-lichtenberg.nl',
        label: 'kapsalon-lichtenberg.nl',
        icon: 'fas up-right',
        image: image('blueprint-kapsalon-lichtenberg.svg')
    },
    manegeNijhuis: {
        title: 'Manege Nijhuis',
        description: 'Horse riding school in Eibergen.',
        url: 'https://manege-nijhuis.nl',
        label: 'manege-nijhuis.nl',
        icon: 'fas up-right',
        image: image('blueprint-manege-nijhuis.svg')
    },
    marveld: {
        title: 'Marveld Recreatie',
        description: 'Bungalow park, camping and hotel. Backend applications by me.',
        url: 'https://marveld.nl',
        label: 'marveld.nl',
        icon: 'fas up-right',
        image: image('blueprint-marveld.svg')
    },
    studioVierentwintig: {
        title: 'Studio Vierentwintig',
        description: 'Photo studio in my local town, Groenlo.',
        url: 'https://studiovierentwintig.nl',
        label: 'studiovierentwintig.nl',
        icon: 'fas up-right',
        image: image('blueprint-studiovierentwintig.svg')
    },
    streamWithLien: {
        title: 'Stream with Lien',
        description: 'Home base for a high-energy Dutch Twitch streamer and her Familien.',
        url: 'https://streamwithlien.com',
        label: 'streamwithlien.com',
        icon: 'fas up-right',
        image: image('blueprint-streamwithlien.svg')
    },
    wervinc: {
        title: 'Wervinc.',
        description: 'A custom WordPress theme I made together with Vienna.',
        descriptionHtml: 'A custom WordPress theme I made together with <a href="https://vienna.nu" rel="noopener" target="_blank">Vienna</a>.',
        url: 'https://wervinc.nl',
        label: 'wervinc.nl',
        icon: 'fas up-right',
        image: image('blueprint-wervinc.svg')
    },
    wpist: {
        title: 'WPIST Registration',
        description: 'Custom made registration form for the football tournament.',
        url: 'https://wpist-indoorsoccer.nl',
        label: 'wpist-indoorsoccer.nl',
        icon: 'fas up-right',
        image: image('blueprint-wpist.svg')
    }
} satisfies Record<string, Project>;

export type ProjectId = keyof typeof projects;

export type WorkGroup = {
    readonly title: string;
    readonly description: string;
    readonly items: readonly ProjectId[];
};

export const homeFeatured: readonly ProjectId[] = [
    'streamWithLien', 'apple', 'flowBits', 'weatherIcons', 'passly', 'manegeNijhuis'
];

export const workGroups: readonly WorkGroup[] = [
    {
        title: 'Open Source',
        description: 'Freely available building blocks, frameworks and icon sets that anyone is welcome to use and contribute to.',
        items: ['weatherIcons', 'raxos', 'flux', 'sparkle', 'packages']
    },
    {
        title: 'For others',
        description: 'Websites and backend applications I built for clients, local businesses and friends.',
        items: [
            'streamWithLien', 'marveld', 'deGrolscheGracht', 'wpist', 'manegeNijhuis',
            'erveNijhuis', 'studioVierentwintig', 'erveTank', 'kapsalonLichtenberg', 'ditoGroenlo'
        ]
    },
    {
        title: 'Apps for Homey',
        description: 'Apps I built for the Homey smart home platform. They add extra devices, integrations and logic to people\'s automation flows.',
        items: ['flowBits', 'apple', 'lists', 'claude', 'sajr5', 'nlAlert']
    },
    {
        title: 'Projects',
        description: 'Personal projects and small tools - some genuinely useful, others just built for fun or to scratch my own itch.',
        items: ['passly', 'isHetPatat', 'isHetFriet', 'startDeTijd']
    }
];

export const featuredWork: readonly ProjectId[] = ['weatherIcons', 'flux', 'passly'];
