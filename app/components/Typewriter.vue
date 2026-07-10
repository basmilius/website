<template>
    <span :class="$style.typewriter">
        <span>{{ display }}</span>
        <span
            :class="$style.cursor"
            aria-hidden="true"/>
    </span>
</template>

<script
    lang="ts"
    setup>
    const props = defineProps<{
        words: readonly string[];
    }>();

    // Render the first word in full on the server so there is no empty flash
    // and no hydration mismatch; the animation kicks in on mount.
    const display = ref(props.words[0] ?? '');
    let timer: ReturnType<typeof setTimeout> | undefined;

    function run(): void {
        let wordIndex = 0;
        let charIndex = props.words[0]?.length ?? 0;
        let deleting = true;

        function tick(): void {
            const word = props.words[wordIndex % props.words.length] ?? '';

            if (deleting) {
                charIndex--;
                display.value = word.slice(0, charIndex);

                if (charIndex <= 0) {
                    deleting = false;
                    wordIndex++;
                    timer = setTimeout(tick, 320);
                    return;
                }

                timer = setTimeout(tick, 34);
            } else {
                charIndex++;
                display.value = word.slice(0, charIndex);

                if (charIndex >= word.length) {
                    deleting = true;
                    timer = setTimeout(tick, 1600);
                    return;
                }

                timer = setTimeout(tick, 62);
            }
        }

        timer = setTimeout(tick, 1600);
    }

    onMounted(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!reduced) {
            run();
        }
    });

    onBeforeUnmount(() => {
        if (timer) {
            clearTimeout(timer);
        }
    });
</script>

<style
    module
    scoped
    lang="scss">
    .typewriter {
        display: inline-flex;
        align-items: baseline;
    }

    .cursor {
        display: inline-block;
        width: 0.5em;
        height: 1.05em;
        margin-left: 3px;
        border-radius: 1px;
        background: var(--accent);
        transform: translateY(0.12em);
        animation: blink 1.05s steps(1) infinite;
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .cursor {
            animation: none;
        }
    }
</style>
