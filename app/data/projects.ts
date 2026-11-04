import type { BlueprintSlug } from './blueprints';

export type ProjectArt =
    | { readonly kind: 'blueprint'; readonly slug: BlueprintSlug }
    | { readonly kind: 'image'; readonly src: string };

export type Project = {
    readonly title: string;
    readonly description: string;
    readonly url: string;
    readonly domain: string;
    readonly art: ProjectArt;
};

export type ProjectGroup = {
    readonly title: string;
    readonly description: string;
    readonly projects: readonly Project[];
};

function project(title: string, description: string, url: string, art: ProjectArt): Project {
    return {
        title,
        description,
        url,
        domain: new URL(url).hostname.replace(/^www\./, ''),
        art
    };
}

function blueprint(slug: BlueprintSlug): ProjectArt {
    return {kind: 'blueprint', slug};
}

function image(file: string): ProjectArt {
    return {kind: 'image', src: `/image/work/${file}`};
}

function alphabetical(list: readonly Project[]): readonly Project[] {
    return [...list].sort((left, right) => left.title.localeCompare(right.title, 'en'));
}

export const projects = {
    meteocons: project('Meteocons', 'Over 500 unique animated weather icons in four styles.', 'https://meteocons.com', blueprint('meteocons')),
    flux: project('Flux UI', 'A Vue 3 UI framework that I use for most of my projects.', 'https://flux-ui.dev', blueprint('flux')),
    raxos: project('Raxos', 'Custom built building blocks for PHP frameworks.', 'https://raxos.dev', blueprint('raxos')),
    sparkle: project('Sparkle', 'A set of fun visual effects that can be used on any website.', 'https://sparkle.graphics', blueprint('sparkle')),
    packages: project('Packages', 'A collection of personal TypeScript packages I use across my Vue projects.', 'https://packages.bas.dev', blueprint('packages')),
    passly: project('Passly', 'A self-service online ticketing provider for events.', 'https://passly.nl', blueprint('passly')),
    isHetPatat: project('Is het Patat?', 'Little website that shows if you should be on #TeamPatat.', 'https://ishetpatat.nl', blueprint('ishetpatat')),
    isHetFriet: project('Is het Friet?', 'Little website that shows if you should be on #TeamFriet.', 'https://ishetfriet.nl', blueprint('ishetfriet')),
    startDeTijd: project('Start de Tijd', 'An online timer and clock that I made in ten minutes :-)', 'https://startdetijd.nl', blueprint('startdetijd')),
    apple: project('Apple TV & HomePod', 'Control your Apple devices from your Homey.', 'https://homey.app/a/com.basmilius.apple/', image('com.basmilius.apple.png')),
    claude: project('Claude', 'Bring Claude AI by Anthropic into your Homey flows.', 'https://homey.app/a/com.basmilius.claude/', image('com.basmilius.claude.png')),
    flowBits: project('FlowBits', 'Small bits of logic, big difference in your Flows.', 'https://homey.app/a/com.basmilius.flowbits/', image('com.basmilius.flowbits.png')),
    lists: project('Lists', 'Create and manage shopping lists, tasks and notes, right from your dashboard.', 'https://homey.app/a/com.basmilius.listri/', image('com.basmilius.listri.png')),
    nlAlert: project('NLAlert', 'Get notified when an NL Alert affects your location.', 'https://homey.app/a/com.basmilius.nlalert/', image('com.basmilius.nlalert.png')),
    sajr5: project('SAJ R5', 'Monitor your SAJ R5 solar inverter with real-time energy insights.', 'https://homey.app/a/com.basmilius.sajr5/', image('com.basmilius.sajr5.png')),
    jev: project('Jev', 'Ask questions in your Homey Flows and branch on the answer, powered by TypeSafe Jev.', 'https://homey.app/a/com.basmilius.jev/', image('com.basmilius.jev.png')),
    changelogs: project('Changelogs', 'Start a Flow with the release notes when an installed Homey app updates.', 'https://homey.app/a/com.basmilius.changelogs/', image('com.basmilius.changelogs.png')),
    appleProtocols: project('Apple Protocols', 'TypeScript implementations of AirPlay 2, RAOP and Companion Link. The engine behind the Apple TV & HomePod app.', 'https://github.com/basmilius/apple-protocols', blueprint('apple-protocols')),
    deGrolscheGracht: project('De Grolsche Gracht', 'Discover the best pubs along the Grolsche Gracht.', 'https://degrolschegracht.nl', blueprint('degrolschegracht')),
    ditoGroenlo: project('DITO Groenlo', 'Fun drama club in my local town, Groenlo.', 'https://dito-groenlo.nl', blueprint('dito')),
    erveNijhuis: project('Erve Nijhuis', 'Modern holiday house in Eibergen.', 'https://manege-nijhuis.nl/erve-nijhuis', blueprint('erve-nijhuis')),
    erveTank: project('Erve Tank', 'Modern holiday apartment in Eibergen.', 'https://manege-nijhuis.nl/erve-tank', blueprint('erve-tank')),
    kapsalonLichtenberg: project('Kapsalon Lichtenberg', 'Hair salon in my local town, Groenlo.', 'https://kapsalon-lichtenberg.nl', blueprint('kapsalon-lichtenberg')),
    manegeNijhuis: project('Manege Nijhuis', 'Horse riding school in Eibergen.', 'https://manege-nijhuis.nl', blueprint('manege-nijhuis')),
    marveld: project('Marveld Recreatie', 'Bungalow park, camping and hotel. Backend applications by me.', 'https://marveld.nl', blueprint('marveld')),
    studioVierentwintig: project('Studio Vierentwintig', 'Photo studio in my local town, Groenlo.', 'https://studiovierentwintig.nl', blueprint('studiovierentwintig')),
    streamWithLien: project('Stream with Lien', 'Home base for a high-energy Dutch Twitch streamer and her Familien.', 'https://streamwithlien.com', blueprint('streamwithlien')),
    wpist: project('WPIST Registration', 'Custom made registration form for the football tournament.', 'https://wpist-indoorsoccer.nl', blueprint('wpist')),
    ruimte: project('Ruimte', 'Space for AI Engineering. An agentic development environment for working with AI agents.', 'https://ruimte.app', blueprint('ruimte')),
    adecore: project('ADE CORE', 'The shared core of agentic development environments: UI, terminal and shell.', 'https://github.com/basmilius/adecore', blueprint('adecore')),
    lsCore: project('Language Server Core', 'Shared foundation for Rust language servers: documents, positions, a parser base and the LSP loop.', 'https://github.com/basmilius/language-server-core', blueprint('ls-core')),
    lsSql: project('SQL Language Server', 'A schema-aware SQL language server in Rust for SQLite, MySQL, MariaDB and PostgreSQL.', 'https://github.com/basmilius/language-server-sql', blueprint('ls-sql')),
    lsPhp: project('PHP Language Server', 'A PHP language server in Rust that speaks LSP over stdio.', 'https://github.com/basmilius/language-server-php', blueprint('ls-php')),
    skills: project('Agent Skills', 'Skills for coding agents: Vue and PHP, GitHub releases and reviews, and writing.', 'https://github.com/basmilius/skills', blueprint('skills'))
} satisfies Record<string, Project>;

export const featuredProjects: readonly Project[] = [
    projects.ruimte,
    projects.streamWithLien,
    projects.apple,
    projects.adecore,
    projects.meteocons,
    projects.flowBits
];

export const recentProjects: readonly Project[] = [
    projects.ruimte,
    projects.streamWithLien,
    projects.meteocons
];

export const projectGroups: readonly ProjectGroup[] = [
    {
        title: 'Open Source',
        description: 'Freely available building blocks, frameworks and icon sets that anyone is welcome to use and contribute to.',
        projects: alphabetical([projects.adecore, projects.appleProtocols, projects.skills, projects.lsCore, projects.lsSql, projects.lsPhp, projects.meteocons, projects.raxos, projects.flux, projects.sparkle, projects.packages])
    },
    {
        title: 'For others',
        description: 'Websites and backend applications I built for clients, local businesses and friends.',
        projects: alphabetical([projects.streamWithLien, projects.marveld, projects.deGrolscheGracht, projects.wpist, projects.manegeNijhuis, projects.erveNijhuis, projects.studioVierentwintig, projects.erveTank, projects.kapsalonLichtenberg, projects.ditoGroenlo])
    },
    {
        title: 'Projects',
        description: 'Personal projects and small tools. Some are useful, others I built for fun or to scratch my own itch.',
        projects: alphabetical([projects.ruimte, projects.passly, projects.isHetPatat, projects.isHetFriet, projects.startDeTijd])
    }
];

export const homeyApps = alphabetical([
    projects.apple,
    projects.flowBits,
    projects.claude,
    projects.lists,
    projects.jev,
    projects.changelogs,
    projects.sajr5,
    projects.nlAlert
]);
