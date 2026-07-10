<template>
    <NuxtLink
        to="/work/meteocons"
        :class="$style.showcase">
        <div :class="$style.head">
            <div :class="$style.label">
                <span :class="$style.eyebrow">// featured</span>
                <span :class="$style.title">Meteocons</span>
            </div>
            <Icon
                name="fas right"
                :class="$style.arrow"/>
        </div>

        <div :class="$style.icons">
            <img
                v-for="icon in icons"
                :key="icon"
                :class="$style.icon"
                :src="`${base}/${icon}.svg`"
                alt=""
                width="56"
                height="56"
                loading="lazy"/>
        </div>

        <p :class="$style.meta">500+ free animated weather icons, in four styles.</p>
    </NuxtLink>
</template>

<script
    lang="ts"
    setup>
    const base = 'https://cdn.meteocons.com/3.0.0-next.10/svg/fill';
    const icons = [
        'clear-day',
        'partly-cloudy-day',
        'overcast-rain',
        'thunderstorms-day-rain',
        'snow',
        'partly-cloudy-night-sleet'
    ];
</script>

<style
    module
    scoped
    lang="scss">
    .showcase {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 20px 22px 22px;
        border: 1px solid var(--line);
        border-radius: var(--radius);
        background: var(--surface);
        box-shadow: var(--shadow);
        transition: border-color 0.15s ease, transform 0.15s ease;

        &:hover {
            border-color: var(--line2);
            transform: translateY(-3px);
        }
    }

    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .label {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    .eyebrow {
        font-family: var(--font-mono);
        font-size: 13px;
        color: var(--accent);
    }

    .title {
        font-family: var(--font-heading);
        font-weight: 600;
        font-size: 18px;
        color: var(--text);
    }

    .arrow {
        flex: none;
        color: var(--muted);
        font-size: 16px;
        opacity: 0.35;
        transition: color 0.15s ease, transform 0.15s ease, opacity 0.15s ease;
    }

    .showcase:hover .arrow {
        opacity: 1;
        color: var(--accent);
        transform: translateX(3px);
    }

    .icons {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }

    .icon {
        width: 56px;
        height: 56px;
        flex: none;
        transition: transform 0.2s ease;
    }

    .showcase:hover .icon {
        transform: scale(1.06);
    }

    .meta {
        font-family: var(--font-mono);
        font-size: 13px;
        color: var(--muted);
    }

    @media (max-width: 520px) {
        .icon:nth-child(n + 5) {
            display: none;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .showcase,
        .arrow,
        .icon {
            transition: none;
        }

        .showcase:hover {
            transform: none;
        }

        .showcase:hover .icon {
            transform: none;
        }
    }
</style>
