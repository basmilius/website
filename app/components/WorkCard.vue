<template>
    <component
        :is="tag"
        class="card"
        v-bind="bindings">
        <div class="thumb">
            <img
                :src="project.image"
                :alt="project.title"
                width="700"
                height="700"
                loading="lazy"/>
        </div>

        <div class="body">
            <div class="title">{{ project.title }}</div>
            <p
                v-if="project.descriptionHtml"
                class="desc"
                v-html="project.descriptionHtml"/>
            <p
                v-else
                class="desc">{{ project.description }}</p>
        </div>

        <Icon
            :name="project.to ? 'fas right' : 'fas up-right'"
            class="arrow"/>
    </component>
</template>

<script
    lang="ts"
    setup>
    import type { Project } from '~/data/work';

    const props = defineProps<{
        project: Project;
    }>();

    const tag = computed(() => props.project.to ? resolveComponent('NuxtLink') : 'a');

    const bindings = computed(() => props.project.to
        ? {to: props.project.to}
        : {href: props.project.url, target: '_blank', rel: 'noopener'});
</script>

<style
    scoped
    lang="scss">
    .card {
        display: flex;
        gap: 14px;
        align-items: center;
        padding: 14px;
        border: 1px solid var(--line);
        border-radius: var(--radius);
        background: var(--surface);
        box-shadow: var(--shadow);
        transition: border-color 0.15s ease, transform 0.15s ease;

        &:hover {
            border-color: var(--line2);

            .arrow {
                opacity: 1;
                color: var(--accent);
                transform: translate(2px, -2px);
            }
        }
    }

    .thumb {
        position: relative;
        width: 122px;
        flex: none;
        aspect-ratio: 1;
        overflow: hidden;
        border: 1px solid var(--line);
        border-radius: var(--radius-sm);
        background: #ffffff;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
        }
    }

    .body {
        min-width: 0;
        flex: 1;
    }

    .title {
        font-family: var(--font-heading);
        font-weight: 600;
        font-size: 16px;
        color: var(--text);
    }

    .desc {
        margin-top: 6px;
        font-family: var(--font-mono);
        font-size: 14px;
        line-height: 1.5;
        color: var(--muted);

        :deep(a) {
            color: var(--accent);
            text-decoration: underline;
            text-underline-offset: 2px;
        }

        :deep(a:hover) {
            text-decoration: none;
        }
    }

    .arrow {
        flex: none;
        align-self: flex-start;
        color: var(--muted);
        font-size: 16px;
        opacity: 0.25;
        transition: color 0.15s ease, transform 0.15s ease, opacity 0.15s ease;
    }

    @media (max-width: 480px) {
        .thumb {
            width: 92px;
        }
    }
</style>
