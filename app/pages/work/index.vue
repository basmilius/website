<template>
    <div :class="$style.work">
        <PageHead
            eyebrow="// ~/work"
            title="Work">
            <p class="lead">A mix of things I've built over the years - for myself, for fun, and for the people and companies I've worked with.</p>
            <p>Some of it is open source, some are apps for the Homey smart home platform, and a lot of it is client work: websites and backend applications for local businesses. Everything below is grouped by what it is.</p>
        </PageHead>

        <div :class="$style.groups">
            <WorkGrid
                v-for="group in workGroups"
                :key="group.title"
                :title="group.title"
                :description="group.description"
                :ids="group.items"/>
        </div>
    </div>
</template>

<script
    lang="ts"
    setup>
    import { workGroups } from '~/data/work';

    useSeoMeta({
        title: 'Work',
        description: 'Selected work by Bas Milius: open-source tools, Homey smart home apps, and websites and backend applications for clients and local businesses.'
    });
</script>

<style
    module
    scoped
    lang="scss">
    .work {
        display: flex;
        flex-direction: column;
        gap: 48px;
    }
</style>
