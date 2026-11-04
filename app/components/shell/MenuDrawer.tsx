import { SidebarContent } from './Sidebar';

type Props = {
    readonly open: boolean;
    readonly onClose: () => void;
};

export function MenuDrawer({open, onClose}: Props) {
    return (
        <div className="md:hidden">
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}/>

            <aside
                inert={!open}
                className={`fixed inset-y-0 left-0 z-50 flex w-[280px] max-w-[85vw] flex-col overflow-y-auto border-r border-line bg-surface shadow-float transition-transform duration-[280ms] ease-site ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <SidebarContent onNavigate={onClose}/>
            </aside>
        </div>
    );
}
