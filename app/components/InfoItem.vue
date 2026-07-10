<template>
    <button
        type="button"
        class="info-item"
        :class="{copied}"
        @click="copy(item.value)">
        <span class="icon-mount">
            <Icon :name="item.icon"/>
        </span>

        <span class="caption">
            <span class="value">{{ item.value }}</span>
            <span class="label">{{ copied ? 'Copied!' : item.title }}</span>
        </span>
    </button>
</template>

<script
    lang="ts"
    setup>
    import type { InfoItem } from '~/data/company';

    defineProps<{
        item: InfoItem;
    }>();

    const {copied, copy} = useClipboard();
</script>

<style
    scoped
    lang="scss">
    .info-item {
        display: flex;
        gap: 14px;
        align-items: center;
        width: 100%;
        padding: 16px 18px;
        border: 1px solid var(--line);
        border-radius: var(--radius);
        background: var(--surface);
        box-shadow: var(--shadow);
        text-align: left;
        transition: border-color 0.15s ease, background-color 0.15s ease;

        &:hover {
            border-color: var(--line2);
            background: var(--hover);
        }
    }

    .icon-mount {
        display: grid;
        place-items: center;
        width: 38px;
        height: 38px;
        flex: none;
        border: 1px solid var(--line);
        border-radius: 10px;
        color: var(--accent);
        font-size: 16px;
    }

    .caption {
        display: flex;
        flex-direction: column;
        gap: 3px;
        min-width: 0;
    }

    .value {
        font-family: var(--font-heading);
        font-weight: 600;
        font-size: 16px;
        color: var(--text);
        overflow-wrap: anywhere;
    }

    .label {
        font-family: var(--font-mono);
        font-size: 16px;
        color: var(--muted);
    }

    .copied .label {
        color: var(--accent);
    }
</style>
