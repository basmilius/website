<template>
    <a
        :class="$style.card"
        :href="project.url"
        target="_blank"
        rel="noopener">
        <div :class="$style.thumb">
            <img
                :src="project.image"
                :alt="project.title"
                width="720"
                height="420"
                loading="lazy"/>
        </div>

        <div :class="$style.body">
            <div :class="$style.head">
                <div :class="$style.title">{{ project.title }}</div>
                <Icon
                    name="fas up-right"
                    :class="$style.arrow"/>
            </div>
            <p
                v-if="project.descriptionHtml"
                :class="$style.desc"
                v-html="project.descriptionHtml"/>
            <p
                v-else
                :class="$style.desc">{{ project.description }}</p>
            <div :class="$style.domain">{{ domain }}</div>
        </div>
    </a>
</template>

<script
    lang="ts"
    setup>
    import type { Project } from '~/data/work';

    const props = defineProps<{
        project: Project;
    }>();

    const domain = computed(() => {
        try {
            return new URL(props.project.url).hostname.replace(/^www\./, '');
        } catch {
            return '';
        }
    });
</script>

<style
    module
    scoped
    lang="scss">
    .card {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid var(--line);
        border-radius: var(--radius);
        background: var(--surface);
        box-shadow: var(--shadow);
        transition: border-color 0.15s ease, transform 0.15s ease;

        &:hover {
            border-color: var(--line2);
            transform: translateY(-3px);

            .arrow {
                opacity: 1;
                color: var(--accent);
                transform: translate(2px, -2px);
            }
        }
    }

    .thumb {
        position: relative;
        width: 100%;
        aspect-ratio: 12 / 7;
        overflow: hidden;
        border-bottom: 1px solid var(--line);
        background: #ffffff;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    .body {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 14px 16px 16px;
    }

    .head {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
    }

    .title {
        font-family: var(--font-heading);
        font-weight: 600;
        font-size: 16px;
        color: var(--text);
    }

    .arrow {
        flex: none;
        color: var(--muted);
        font-size: 16px;
        opacity: 0.25;
        transition: color 0.15s ease, transform 0.15s ease, opacity 0.15s ease;
    }

    .domain {
        margin-top: auto;
        padding-top: 12px;
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--accent);
    }

    .desc {
        margin-top: 8px;
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
</style>
