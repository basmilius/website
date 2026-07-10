export function useClipboard(delay: number = 2000) {
    const copied = ref(false);
    let timer: ReturnType<typeof setTimeout> | undefined;

    async function copy(content: string): Promise<void> {
        try {
            await navigator.clipboard.writeText(content);
            copied.value = true;

            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(() => {
                copied.value = false;
            }, delay);
        } catch {
            // Clipboard access can be denied; fail silently.
        }
    }

    onScopeDispose(() => {
        if (timer) {
            clearTimeout(timer);
        }
    });

    return {copied, copy};
}
