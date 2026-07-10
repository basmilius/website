<template>
    <div :class="$style.socials">
        <a
            v-for="social in socials"
            :key="social.label"
            :class="$style.social"
            :href="social.url"
            target="_blank"
            rel="noopener">
            <Icon :name="social.icon"/>
            <span>{{ social.label }}</span>
        </a>
    </div>
</template>

<script
    lang="ts"
    setup>
    import { socials } from '~/data/socials';
</script>

<style
    module
    scoped
    lang="scss">
    .socials {
        display: flex;
        flex-wrap: wrap;
        gap: 9px;
    }

    .social {
        display: inline-flex;
        gap: 8px;
        align-items: center;
        padding: 9px 15px;
        border: 1px solid var(--line);
        border-radius: 99px;
        background: var(--surface);
        color: var(--text);
        font-family: var(--font-mono);
        font-size: 16px;
        transition: border-color 0.15s ease, color 0.15s ease;

        &:hover {
            border-color: var(--accent);
            color: var(--accent);
        }
    }
</style>
