<template>
    <section class="section">
        <div
            v-if="eyebrow"
            class="eyebrow">{{ eyebrow }}</div>
        <h2>{{ title }}</h2>
        <p
            v-if="subtitle"
            class="subtitle">{{ subtitle }}</p>

        <div class="section-body">
            <slot/>
        </div>
    </section>
</template>

<script
    lang="ts"
    setup>
    defineProps<{
        eyebrow?: string;
        title: string;
        subtitle?: string;
    }>();
</script>

<style
    scoped
    lang="scss">
    .eyebrow {
        margin-bottom: 12px;
        font-family: var(--font-mono);
        font-size: 14px;
        color: var(--accent);
    }

    h2 {
        margin: 0;
        font-size: clamp(24px, 3vw, 32px);
        color: var(--text);
    }

    .subtitle {
        max-width: 62ch;
        margin-top: 10px;
        font-size: 16px;
        color: var(--muted);
    }

    .section-body {
        margin-top: 24px;
    }
</style>
