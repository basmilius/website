<template>
    <section :class="$style.now">
        <div :class="$style.eyebrow">// now</div>

        <div :class="$style.lines">
            <p>
                Senior Full-Stack Developer at
                <a
                    href="https://www.axilium.com/"
                    rel="noopener"
                    target="_blank">Axilium</a>.
            </p>
            <p>Building Solvidi, a platform used in Dutch education.</p>
        </div>

        <div :class="$style.status">
            <span :class="$style.dot"/>
            Open to the occasional freelance project
        </div>
    </section>
</template>

<script
    lang="ts"
    setup>
</script>

<style
    module
    scoped
    lang="scss">
    .now {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 20px 22px;
        border: 1px solid var(--line);
        border-radius: var(--radius);
        background: var(--surface);
        box-shadow: var(--shadow);
    }

    .eyebrow {
        font-family: var(--font-mono);
        font-size: 13px;
        color: var(--accent);
    }

    .lines {
        display: flex;
        flex-direction: column;
        gap: 4px;

        p {
            font-size: 16px;
            line-height: 1.6;
            color: var(--text);
        }

        a {
            color: var(--accent);
            text-decoration: underline;
            text-underline-offset: 2px;

            &:hover {
                text-decoration: none;
            }
        }
    }

    .status {
        display: flex;
        align-items: center;
        gap: 9px;
        margin-top: 2px;
        font-family: var(--font-mono);
        font-size: 13px;
        color: var(--muted);
    }

    .dot {
        position: relative;
        width: 8px;
        height: 8px;
        flex: none;
        border-radius: 99px;
        background: #22c55e;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: inherit;
            animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
    }

    @keyframes ping {
        75%,
        100% {
            transform: scale(2.6);
            opacity: 0;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .dot::after {
            animation: none;
        }
    }
</style>
