import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { navigation } from '~/data/navigation';
import { MenuSheet } from './MenuSheet';
import { MobileHeader } from './MobileHeader';
import { Rail } from './Rail';
import { Sidebar } from './Sidebar';

type Props = {
    readonly children: React.ReactNode;
};

export function Shell({children}: Props) {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.metaKey || e.ctrlKey || e.altKey || (e.target instanceof HTMLElement && e.target.closest('input, textarea, [contenteditable]'))) {
                return;
            }

            if (e.key === 'Escape') {
                setMenuOpen(false);

                return;
            }

            const item = navigation.find((entry) => entry.shortcut === e.key);

            if (item) {
                navigate(item.to);
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => window.removeEventListener('keydown', onKeyDown);
    }, [navigate]);

    return (
        <>
            <MobileHeader onOpenMenu={() => setMenuOpen(true)}/>

            <div className="mx-auto flex min-h-dvh max-w-[1440px]">
                <Sidebar/>
                <Rail/>

                <div className="flex min-w-0 flex-1 flex-col">
                    <main className="flex-1 px-5 pt-8 pb-18 md:px-10 md:pt-11 md:pb-22 lg:px-14 lg:pt-14 lg:pb-24">
                        <div
                            key={pathname}
                            className="max-w-[1080px] animate-rise">
                            {children}
                        </div>
                    </main>
                </div>
            </div>

            <MenuSheet
                open={menuOpen}
                onClose={() => setMenuOpen(false)}/>
        </>
    );
}
