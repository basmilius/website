import { useSyncExternalStore } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'bas-color-mode';
const listeners = new Set<() => void>();

// Runs before the first paint, so a stored or system dark preference never flashes light.
export const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}})()`;

function subscribe(listener: () => void): () => void {
    listeners.add(listener);

    return () => listeners.delete(listener);
}

function getSnapshot(): Theme {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function getServerSnapshot(): Theme {
    return 'light';
}

function setTheme(theme: Theme): void {
    document.documentElement.classList.toggle('dark', theme === 'dark');

    try {
        localStorage.setItem(STORAGE_KEY, theme);
    } catch {
        // Private mode can refuse storage; the theme still applies to this page.
    }

    listeners.forEach((listener) => listener());
}

export function useTheme(): readonly [Theme, (theme: Theme) => void] {
    const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    return [theme, setTheme];
}
