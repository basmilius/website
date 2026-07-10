export type NavItem = {
    readonly label: string;
    readonly glyph?: string;
    readonly icon?: string;
    readonly to?: string;
    readonly href?: string;
};

export const navigation: readonly NavItem[] = [
    {label: 'index', glyph: '~/', to: '/'},
    {label: 'work/', icon: 'fas folder', to: '/work'},
    {label: 'about.md', icon: 'fas file-lines', to: '/about'},
    {label: 'contact.md', icon: 'fas envelope', to: '/contact'},
    {label: 'github', icon: 'fab github', href: 'https://github.com/basmilius'}
];
