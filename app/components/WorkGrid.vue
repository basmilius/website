<template>
    <section class="work-group">
        <div
            v-if="title || $slots.action"
            class="group-head">
            <h2 v-if="title">{{ title }}</h2>
            <span class="line"/>
            <slot name="action"/>
        </div>

        <p
            v-if="description"
            class="group-desc">{{ description }}</p>

        <div class="grid">
            <WorkCard
                v-for="id in ids"
                :key="id"
                :project="projects[id]"/>
        </div>
    </section>
</template>

<script
    lang="ts"
    setup>
    import { projects, type ProjectId } from '~/data/work';

    defineProps<{
        title?: string;
        description?: string;
        ids: readonly ProjectId[];
    }>();
</script>

<style
    scoped
    lang="scss">
    .work-group + .work-group {
        margin-top: 44px;
    }

    .group-head {
        display: flex;
        gap: 12px;
        align-items: center;
        margin-bottom: 16px;

        h2 {
            margin: 0;
            font-family: var(--font-mono);
            font-size: 16px;
            font-weight: 500;
            color: var(--text);
        }
    }

    .group-desc {
        max-width: 68ch;
        margin: -2px 0 18px;
        font-size: 16px;
        line-height: 1.65;
        color: var(--muted);
    }

    .line {
        flex: 1;
        height: 1px;
        background: var(--line);
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }

    @media (max-width: 720px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>
