import { useEffect, useRef, useState } from 'react';

const RESET_AFTER = 1600;

export function useClipboard(): readonly [string | null, (key: string, value: string) => void] {
    const [copied, setCopied] = useState<string | null>(null);
    const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

    useEffect(() => () => clearTimeout(timeout.current), []);

    const copy = (key: string, value: string) => {
        navigator.clipboard?.writeText(value).catch(() => {});
        setCopied(key);
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => setCopied(null), RESET_AFTER);
    };

    return [copied, copy];
}
