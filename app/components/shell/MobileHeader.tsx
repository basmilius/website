import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { filePath } from '~/data/navigation';

type Props = {
    readonly onOpenMenu: () => void;
};

export function MobileHeader({onOpenMenu}: Props) {
    const {pathname} = useLocation();

    return (
        <header className="sticky top-0 z-30 flex h-[60px] items-center gap-3 border-b border-line bg-surface/86 px-4 backdrop-blur-lg md:hidden">
            <Link
                to="/"
                className="flex min-w-0 items-center gap-2.5">
                <img
                    className="size-8 flex-none"
                    src="/logo.svg"
                    alt="Bas Milius"/>
                <span className="flex min-w-0 flex-col">
                    <span className="text-[15px] leading-[1.2] font-semibold">Bas Milius</span>
                    <span className="truncate font-mono text-xs leading-[1.3] text-accent-text">{filePath(pathname)}</span>
                </span>
            </Link>

            <button
                type="button"
                aria-label="Open menu"
                onClick={onOpenMenu}
                className="ml-auto grid size-11 cursor-pointer place-items-center rounded-full bg-surface text-ink shadow-raised">
                <Menu size={18}/>
            </button>
        </header>
    );
}
