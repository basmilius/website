import { useEffect, useState } from 'react';

type UseClipboard = [boolean, () => void];

export default function (content: string, delay: number = 1000): UseClipboard {
    const [didCopy, setDidCopy] = useState(false);

    useEffect(() => {
        if (!didCopy) {
            return;
        }

        const timer = setTimeout(() => setDidCopy(false), delay);

        return () => clearTimeout(timer);
    }, [didCopy, delay]);

    return [
        didCopy,
        async () => {
            await navigator.clipboard.writeText(content);
            setDidCopy(true);
        }
    ];
}
