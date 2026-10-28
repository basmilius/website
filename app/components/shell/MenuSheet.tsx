import { ArrowDown, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { siGithub } from 'simple-icons';
import { CV_URL, GITHUB_URL, navIcon, navigation } from '~/data/navigation';
import { useTheme } from '~/lib/theme';
import { BrandIcon } from '../BrandIcon';

type Props = {
    readonly open: boolean;
    readonly onClose: () => void;
};

export function MenuSheet({open, onClose}: Props) {
    const {pathname} = useLocation();
    const [theme, setTheme] = useTheme();

    return (
        <div className="md:hidden">
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}/>

            <div
                inert={!open}
                className={`fixed inset-x-2 bottom-2 z-50 rounded-[20px] border border-line bg-surface px-2.5 pt-2 pb-3.5 shadow-float transition-transform duration-[280ms] ease-site ${open ? 'translate-y-0' : 'translate-y-[calc(100%+16px)]'}`}>
                <div className="mx-auto mt-1 mb-2.5 h-1 w-9 rounded-full bg-line-strong"/>

                <nav className="flex flex-col gap-0.5">
                    {navigation.map((item) => {
                        const active = pathname === item.to;
                        const Icon = navIcon(item, pathname);
                        const iconColor = active ? 'text-accent-text' : (item.folder ? 'text-folder' : 'text-faint');

                        return (
                            <Link
                                key={item.to}
                                to={item.to}
                                onClick={onClose}
                                className={`flex h-12 items-center gap-3 rounded-xl px-3 font-mono text-[15px] ${active ? 'bg-active text-ink' : 'text-muted'}`}>
                                <span className={`grid w-5 place-items-center text-sm ${iconColor}`}>
                                    {Icon ? <Icon size={15}/> : item.glyph}
                                </span>
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-3 flex items-center gap-2 border-t border-line-soft pt-3">
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener"
                        className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-sunken font-mono text-[13px]">
                        <BrandIcon brand={siGithub}/>
                        github
                    </a>
                    <a
                        href={CV_URL}
                        target="_blank"
                        rel="noopener"
                        className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-sunken font-mono text-[13px]">
                        <ArrowDown size={14}/>
                        cv.pdf
                    </a>
                    <button
                        type="button"
                        aria-label="Toggle theme"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="grid size-11 cursor-pointer place-items-center rounded-xl bg-sunken">
                        {theme === 'dark' ? <Sun size={14}/> : <Moon size={14}/>}
                    </button>
                </div>
            </div>
        </div>
    );
}
