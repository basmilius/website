<template>
    <div :class="$style.layout">
        <aside :class="$style.sidebar">
            <ProfilePanel/>
        </aside>

        <header :class="$style.mobilebar">
            <NuxtLink
                to="/"
                :class="$style.mbrand">
                <img
                    :class="$style.mlogo"
                    src="/logo.svg"
                    alt="Bas Milius"
                    width="32"
                    height="32"/>
                <span :class="$style.mname">Bas Milius</span>
            </NuxtLink>

            <button
                type="button"
                :class="$style.hamburger"
                aria-label="Open menu"
                :aria-expanded="open"
                @click="open = true">
                <Icon name="fas bars"/>
            </button>
        </header>

        <div
            :class="[$style.backdrop, {[$style.show]: open}]"
            @click="close"/>

        <aside
            :class="[$style.drawer, {[$style.open]: open}]"
            aria-label="Menu">
            <button
                type="button"
                :class="$style.drawerClose"
                aria-label="Close menu"
                @click="close">
                <Icon name="fas xmark-large"/>
            </button>

            <ProfilePanel/>
        </aside>

        <main :class="$style.main">
            <div :class="$style.content">
                <slot/>
            </div>
        </main>
    </div>
</template>

<script
    lang="ts"
    setup>
    const open = ref(false);
    const route = useRoute();

    function close(): void {
        open.value = false;
    }

    watch(() => route.fullPath, close);

    watch(open, value => {
        if (import.meta.client) {
            document.documentElement.style.overflow = value ? 'hidden' : '';
        }
    });

    function onKeydown(event: KeyboardEvent): void {
        if (event.key === 'Escape') {
            close();
        }
    }

    onMounted(() => window.addEventListener('keydown', onKeydown));

    onBeforeUnmount(() => {
        window.removeEventListener('keydown', onKeydown);

        if (import.meta.client) {
            document.documentElement.style.overflow = '';
        }
    });
</script>

<style
    module
    scoped
    lang="scss">
    .layout {
        display: flex;
        min-height: 100dvh;
        max-width: 1280px;
        margin: 0 auto;
    }

    .sidebar {
        position: sticky;
        top: 0;
        z-index: 20;
        align-self: flex-start;
        height: 100dvh;
        width: var(--sidebar-width);
        flex: none;
        border-right: 1px solid var(--line);
    }

    .main {
        flex: 1;
        min-width: 0;
        padding: 48px 44px 90px;
    }

    .content {
        max-width: 880px;
    }

    .mobilebar,
    .backdrop,
    .drawer {
        display: none;
    }

    @media (max-width: 900px) {
        .layout {
            display: block;
        }

        .sidebar {
            display: none;
        }

        .main {
            padding: 32px 22px 80px;
        }

        .content {
            max-width: none;
        }

        .mobilebar {
            position: sticky;
            top: 0;
            z-index: 30;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 20px;
            border-bottom: 1px solid var(--line);
            background: var(--bg);
        }

        .mbrand {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .mlogo {
            width: 32px;
            height: 32px;
            border-radius: 9px;
        }

        .mname {
            font-family: var(--font-heading);
            font-weight: 700;
            font-size: 16px;
            color: var(--text);
        }

        .hamburger {
            display: grid;
            place-items: center;
            width: 40px;
            height: 40px;
            border: 1px solid var(--line);
            border-radius: 9px;
            color: var(--text);
            font-size: 16px;
        }

        .backdrop {
            position: fixed;
            inset: 0;
            z-index: 40;
            display: block;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s ease;
        }

        .backdrop.show {
            opacity: 1;
            pointer-events: auto;
        }

        .drawer {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            z-index: 50;
            display: block;
            width: 300px;
            max-width: 84vw;
            overflow-y: auto;
            border-right: 1px solid var(--line);
            background: var(--bg);
            transform: translateX(-100%);
            transition: transform 0.24s ease;
        }

        .drawer.open {
            transform: translateX(0);
        }

        .drawer-close {
            position: absolute;
            top: 16px;
            right: 14px;
            z-index: 2;
            display: grid;
            place-items: center;
            width: 34px;
            height: 34px;
            border: 1px solid var(--line);
            border-radius: 8px;
            color: var(--muted);
            font-size: 16px;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .drawer {
            transition: none;
        }
    }
</style>
