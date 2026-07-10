<template>
    <ClientOnly>
        <div
            :class="$style.toggle"
            :data-mode="mode">
            <span :class="$style.thumb"/>

            <button
                type="button"
                aria-label="Light mode"
                :class="{[$style.active]: mode === 'light'}"
                @click="set('light')">
                <Icon name="fas sun"/>
            </button>

            <button
                type="button"
                aria-label="Dark mode"
                :class="{[$style.active]: mode === 'dark'}"
                @click="set('dark')">
                <Icon name="fas moon"/>
            </button>
        </div>

        <template #fallback>
            <div
                :class="$style.toggle"
                data-mode="light">
                <span :class="$style.thumb"/>
                <button type="button"><Icon name="fas sun"/></button>
                <button type="button"><Icon name="fas moon"/></button>
            </div>
        </template>
    </ClientOnly>
</template>

<script
    lang="ts"
    setup>
    const colorMode = useColorMode();
    const mode = computed(() => colorMode.value);

    function set(value: 'light' | 'dark'): void {
        colorMode.preference = value;
    }
</script>

<style
    module
    scoped
    lang="scss">
    .toggle {
        position: relative;
        display: inline-flex;
        align-self: flex-start;
        width: max-content;
        padding: 3px;
        border: 1px solid var(--line);
        border-radius: 99px;
        background: var(--surface);
    }

    .thumb {
        position: absolute;
        top: 3px;
        left: 3px;
        width: 30px;
        height: 30px;
        border-radius: 99px;
        background: var(--accent);
        transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .toggle[data-mode="dark"] .thumb {
        transform: translateX(30px);
    }

    button {
        position: relative;
        z-index: 1;
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 99px;
        color: var(--muted);
        font-size: 14px;
        transition: color 0.2s ease;

        &.active {
            color: var(--on-accent);
        }

        &:not(.active):hover {
            color: var(--text);
        }
    }
</style>
