import { Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { siGithub } from 'simple-icons';
import { GITHUB_URL, isInSection, navigation } from '~/data/navigation';
import { useTheme } from '~/lib/theme';
import { BrandIcon } from '../BrandIcon';

export function Rail() {
    const {pathname} = useLocation();
    const [theme, setTheme] = useTheme();

    return (
        <aside className="sticky top-0 hidden h-dvh w-[72px] flex-none flex-col items-center gap-1.5 self-start border-r border-line bg-surface py-[18px] md:flex lg:hidden">
            <Link
                to="/"
                className="mb-3.5">
                <img
                    className="size-[38px]"
                    src="/logo.svg"
                    alt="Bas Milius"/>
            </Link>

            {navigation.map((item) => {
                const active = isInSection(item, pathname);
                const Icon = item.railIcon;

                return (
                    <Link
                        key={item.to}
                        to={item.to}
                        aria-label={item.label}
                        className={`flex h-[54px] w-14 flex-col items-center justify-center gap-1 rounded-[10px] hover:bg-hover hover:text-ink ${active ? 'bg-active text-ink' : 'text-muted'}`}>
                        <Icon
                            size={15}
                            className={active ? 'text-accent-text' : undefined}/>
                        <span className="font-mono text-[10.5px]">{item.short}</span>
                    </Link>
                );
            })}

            <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                className="grid h-11 w-14 place-items-center rounded-[10px] text-muted hover:bg-hover hover:text-ink">
                <BrandIcon brand={siGithub}/>
            </a>

            <button
                type="button"
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="mt-auto grid size-10 cursor-pointer place-items-center rounded-full bg-sunken text-ink">
                {theme === 'dark' ? <Sun size={13}/> : <Moon size={13}/>}
            </button>
        </aside>
    );
}
