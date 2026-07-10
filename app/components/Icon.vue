<template>
    <svg
        v-if="icon"
        class="icon"
        :viewBox.attr="icon.viewBox"
        role="img"
        aria-hidden="true"
        focusable="false"
        v-html="icon.inner"/>
</template>

<script
    lang="ts"
    setup>
    import { renderIcon } from '~/utils/icons';

    const props = defineProps<{
        name: string;
    }>();

    const icon = computed(() => renderIcon(props.name));
</script>

<style
    scoped
    lang="scss">
    .icon {
        display: inline-block;
        width: 1em;
        height: 1em;
        fill: currentColor;
        vertical-align: -0.125em;
    }
</style>
