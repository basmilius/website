<template>
    <header class="page-head">
        <div class="eyebrow">{{ eyebrow }}</div>
        <h1>{{ title }}</h1>
        <slot/>
    </header>
</template>

<script
    lang="ts"
    setup>
    defineProps<{
        eyebrow: string;
        title: string;
    }>();
</script>

<style
    scoped
    lang="scss">
    .page-head {
        margin-bottom: 8px;
    }

    .eyebrow {
        margin-bottom: 14px;
        font-family: var(--font-mono);
        font-size: 16px;
        color: var(--accent);
    }

    h1 {
        margin: 0;
        font-size: clamp(34px, 4vw, 52px);
        line-height: 1.04;
        color: var(--text);
    }

    :slotted(p) {
        max-width: 60ch;
        margin-top: 18px;
        font-size: 16px;
        line-height: 1.7;
        color: var(--muted);
    }

    :slotted(p.lead) {
        font-size: 18px;
        font-weight: 500;
        color: var(--text);
    }
</style>
