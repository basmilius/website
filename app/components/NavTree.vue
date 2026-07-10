<template>
    <nav class="nav">
        <template
            v-for="item in navigation"
            :key="item.label">
            <NuxtLink
                v-if="item.to"
                :to="item.to"
                class="nav-item"
                :class="{active: isActive(item)}">
                <span class="glyph">
                    <Icon
                        v-if="item.icon"
                        :name="item.icon"/>
                    <template v-else>{{ item.glyph }}</template>
                </span>
                <span>{{ item.label }}</span>
            </NuxtLink>

            <a
                v-else
                :href="item.href"
                target="_blank"
                rel="noopener"
                class="nav-item">
                <span class="glyph">
                    <Icon
                        v-if="item.icon"
                        :name="item.icon"/>
                    <template v-else>{{ item.glyph }}</template>
                </span>
                <span>{{ item.label }}</span>
            </a>
        </template>
    </nav>
</template>

<script
    lang="ts"
    setup>
    import { navigation, type NavItem } from '~/data/navigation';

    const route = useRoute();

    function isActive(item: NavItem): boolean {
        if (!item.to) {
            return false;
        }

        if (item.to === '/') {
            return route.path === '/';
        }

        return route.path === item.to || route.path.startsWith(`${item.to}/`);
    }
</script>

<style
    scoped
    lang="scss">
    .nav {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .nav-item {
        display: flex;
        gap: 10px;
        align-items: center;
        width: 100%;
        padding: 8px 10px;
        border-radius: 8px;
        color: var(--muted);
        font-family: var(--font-mono);
        font-size: 16px;
        transition: background-color 0.15s ease, color 0.15s ease;

        &:hover {
            background: var(--hover);
            color: var(--text);
        }

        &.active {
            background: var(--hover);
            color: var(--text);
        }
    }

    .glyph {
        display: grid;
        place-items: center;
        width: 20px;
        height: 20px;
        flex: none;
        color: var(--muted);
        font-size: 16px;
    }

    .nav-item.active .glyph {
        color: var(--accent);
    }
</style>
