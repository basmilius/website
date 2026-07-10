<template>
    <ol :class="$style.timeline">
        <li
            v-for="entry in entries"
            :key="entry.title + entry.date"
            :class="$style.item">
            <span :class="$style.dot"/>
            <div :class="$style.date">{{ entry.date }}</div>
            <h3 :class="$style.title">{{ entry.title }}</h3>
            <p :class="$style.body">{{ entry.body }}</p>
        </li>
    </ol>
</template>

<script
    lang="ts"
    setup>
    import type { TimelineEntry } from '~/data/experience';

    defineProps<{
        entries: readonly TimelineEntry[];
    }>();
</script>

<style
    module
    scoped
    lang="scss">
    .timeline {
        margin: 0;
    }

    .item {
        position: relative;
        padding: 0 0 26px 26px;
        border-left: 1px solid var(--line);

        &:last-child {
            padding-bottom: 0;
        }
    }

    .dot {
        position: absolute;
        top: 7px;
        left: -5px;
        width: 9px;
        height: 9px;
        border: 2px solid var(--bg);
        border-radius: 99px;
        background: var(--accent);
    }

    .date {
        font-family: var(--font-mono);
        font-size: 16px;
        color: var(--accent);
    }

    .title {
        margin: 6px 0 0;
        font-size: 17px;
        color: var(--text);
    }

    .body {
        max-width: 64ch;
        margin-top: 6px;
        font-size: 16px;
        line-height: 1.7;
        color: var(--muted);
    }
</style>
