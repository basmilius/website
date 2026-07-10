<template>
    <div class="info-card">
        <InfoItem
            v-for="item in items"
            :key="item.title"
            :item="item"/>
    </div>
</template>

<script
    lang="ts"
    setup>
    import type { InfoItem as InfoItemType } from '~/data/company';

    defineProps<{
        items: readonly InfoItemType[];
    }>();
</script>

<style
    scoped
    lang="scss">
    .info-card {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }

    @media (max-width: 560px) {
        .info-card {
            grid-template-columns: 1fr;
        }
    }
</style>
