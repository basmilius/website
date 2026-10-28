import { FileText, Folder, FolderOpen, House, Mail, Terminal, type LucideIcon } from 'lucide-react';

export type NavItem = {
    readonly to: string;
    readonly label: string;
    readonly short: string;
    readonly shortcut: string;
    readonly railIcon: LucideIcon;
    readonly icon?: LucideIcon;
    readonly glyph?: string;
    readonly folder?: boolean;
};

export const navigation: readonly NavItem[] = [
    {to: '/', label: 'index', short: 'index', shortcut: '1', railIcon: Terminal, glyph: '~/'},
    {to: '/work', label: 'work/', short: 'work/', shortcut: '2', railIcon: Folder, folder: true},
    {to: '/smarthome', label: 'smarthome/', short: 'smart/', shortcut: '3', railIcon: House, folder: true},
    {to: '/about', label: 'about.md', short: 'about', shortcut: '4', railIcon: FileText, icon: FileText},
    {to: '/contact', label: 'contact.md', short: 'contact', shortcut: '5', railIcon: Mail, icon: Mail}
];

const FILES: Readonly<Record<string, string>> = {
    '/work': 'work/',
    '/work/meteocons': 'work/meteocons.md',
    '/smarthome': 'smarthome/',
    '/about': 'about.md',
    '/contact': 'contact.md'
};

export const CV_URL = '/bas-milius-cv.pdf';
export const GITHUB_URL = 'https://github.com/basmilius';

export function filePath(pathname: string): string {
    return `~/${FILES[pathname.replace(/\/$/, '')] ?? ''}`;
}

export function isInSection(item: NavItem, pathname: string): boolean {
    if (item.to === '/') {
        return pathname === '/';
    }

    return pathname === item.to || pathname.startsWith(`${item.to}/`);
}

export function navIcon(item: NavItem, pathname: string): LucideIcon | undefined {
    if (item.folder) {
        return isInSection(item, pathname) ? FolderOpen : Folder;
    }

    return item.icon;
}
