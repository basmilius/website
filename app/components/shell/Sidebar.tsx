import { ArrowDown, ArrowUpRight, FileDown, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { siGithub } from 'simple-icons';
import { CV_URL, GITHUB_URL, navIcon, navigation } from '~/data/navigation';
import { useTheme, type Theme } from '~/lib/theme';
import { BrandIcon } from '../BrandIcon';

export function Sidebar() {
    const {pathname} = useLocation();

    return (
        <aside className="sticky top-0 isolate hidden h-dvh w-[280px] flex-none flex-col self-start overflow-hidden border-r border-line bg-surface lg:flex">
            <div className="px-5 pt-14">
                <Link
                    to="/"
                    className="flex items-center gap-3">
                    <img
                        className="size-[42px] flex-none"
                        src="/logo.svg"
                        alt="Bas Milius"/>
                    <span className="flex flex-col gap-0.5">
                        <span className="text-lg leading-[1.15] font-semibold">Bas Milius</span>
                        <span className="font-mono text-[12.5px] text-accent-text">full-stack developer</span>
                    </span>
                </Link>
                <p className="mt-4 text-[13.5px] leading-[1.6] text-muted">Full-stack developer from the Netherlands, building open-source tools, smart home integrations, and the occasional product.</p>
            </div>

            <nav className="mt-5 flex flex-col gap-px px-2.5">
                {navigation.map((item) => {
                    const active = pathname === item.to;
                    const Icon = navIcon(item, pathname);
                    const iconColor = active ? 'text-accent-text' : (item.folder ? 'text-folder' : 'text-faint');

                    return (
                        <Link
                            key={item.to}
                            to={item.to}
                            className={`flex h-[34px] items-center gap-2.5 rounded-[7px] px-2 font-mono text-sm transition-colors duration-[120ms] hover:bg-hover hover:text-ink ${active ? 'bg-active text-ink' : 'text-muted'}`}>
                            <span className={`grid w-[18px] flex-none place-items-center text-[13px] ${iconColor}`}>
                                {Icon ? <Icon size={14}/> : item.glyph}
                            </span>
                            <span className="min-w-0 flex-1 truncate">{item.label}</span>
                            <kbd className="grid h-[18px] min-w-[18px] place-items-center rounded-[5px] border border-line font-sans text-[11px] text-faint">{item.shortcut}</kbd>
                        </Link>
                    );
                })}
            </nav>

            <div className="mx-5 my-3 h-px bg-line-soft"/>

            <nav className="flex flex-col gap-px px-2.5">
                <ExternalLink
                    href={GITHUB_URL}
                    label="github"
                    icon={<BrandIcon
                        brand={siGithub}
                        className="size-3.5"/>}
                    trail={<ArrowUpRight size={12}/>}/>
                <ExternalLink
                    href={CV_URL}
                    label="cv.pdf"
                    icon={<FileDown size={14}/>}
                    trail={<ArrowDown size={12}/>}/>
            </nav>

            <div className="mt-auto flex items-center justify-between gap-3 border-t border-line-soft px-5 pt-4 pb-5">
                <span className="flex items-center gap-2 font-mono text-xs text-muted">
                    <span className="size-[7px] animate-beacon rounded-full bg-green"/>
                    Groenlo, NL
                </span>
                <ThemeSwitch/>
            </div>
        </aside>
    );
}

function ExternalLink({href, label, icon, trail}: { readonly href: string; readonly label: string; readonly icon: React.ReactNode; readonly trail: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener"
            className="flex h-[34px] items-center gap-2.5 rounded-[7px] px-2 font-mono text-sm text-muted hover:bg-hover hover:text-ink">
            <span className="grid w-[18px] place-items-center">{icon}</span>
            <span className="flex-1">{label}</span>
            <span className="text-faint">{trail}</span>
        </a>
    );
}

function ThemeSwitch() {
    const [theme, setTheme] = useTheme();

    const option = (value: Theme, label: string, icon: React.ReactNode) => (
        <button
            type="button"
            aria-label={label}
            aria-pressed={theme === value}
            onClick={() => setTheme(value)}
            className={`grid h-[26px] w-[30px] cursor-pointer place-items-center rounded-full transition-all duration-[180ms] ease-site ${theme === value ? 'bg-surface text-ink shadow-raised' : 'text-muted'}`}>
            {icon}
        </button>
    );

    return (
        <div className="flex gap-0.5 rounded-full bg-sunken p-[3px]">
            {option('light', 'Light mode', <Sun size={12}/>)}
            {option('dark', 'Dark mode', <Moon size={12}/>)}
        </div>
    );
}
