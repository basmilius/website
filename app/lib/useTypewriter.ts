import { useEffect, useState } from 'react';

export function useTypewriter(words: readonly string[]): string {
    const [typed, setTyped] = useState(words[0] ?? '');

    useEffect(() => {
        if (words.length === 0 || matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        let wordIndex = 0;
        let length = words[0].length;
        let deleting = true;
        let timeout: ReturnType<typeof setTimeout>;

        const tick = () => {
            const word = words[wordIndex % words.length];

            if (deleting) {
                length--;

                if (length <= 0) {
                    deleting = false;
                    wordIndex++;
                    timeout = setTimeout(tick, 320);
                } else {
                    timeout = setTimeout(tick, 34);
                }
            } else {
                length++;

                if (length >= word.length) {
                    deleting = true;
                    timeout = setTimeout(tick, 1600);
                } else {
                    timeout = setTimeout(tick, 62);
                }
            }

            setTyped(words[wordIndex % words.length].slice(0, Math.max(0, length)));
        };

        timeout = setTimeout(tick, 1600);

        return () => clearTimeout(timeout);
    }, [words]);

    return typed;
}
