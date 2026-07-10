<template>
    <div :class="$style.profile">
        <NuxtLink
            to="/"
            :class="$style.brand">
            <img
                :class="$style.logo"
                src="/logo.svg"
                alt="Bas Milius"
                width="48"
                height="48"/>

            <span :class="$style.identity">
                <span :class="$style.name">Bas Milius</span>
                <span :class="$style.role">full-stack developer</span>
            </span>
        </NuxtLink>

        <p :class="$style.meta">Full-stack developer from the Netherlands, building open-source tools, smart home integrations, and the occasional product.</p>

        <div :class="$style.divider"/>

        <NavTree/>

        <span :class="$style.spacer"/>

        <ThemeToggle :class="$style.toggle"/>
    </div>
</template>

<script
    lang="ts"
    setup>
</script>

<style
    module
    scoped
    lang="scss">
    .profile {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 28px 22px;
    }

    .brand {
        display: flex;
        gap: 12px;
        align-items: center;
        margin-bottom: 16px;
    }

    .logo {
        width: 48px;
        height: 48px;
        flex: none;
        border-radius: 12px;
    }

    .identity {
        display: flex;
        flex-direction: column;
        gap: 1px;
    }

    .name {
        font-family: var(--font-heading);
        font-weight: 700;
        font-size: 20px;
        color: var(--text);
    }

    .role {
        font-family: var(--font-mono);
        font-size: 14px;
        color: var(--accent);
    }

    .meta {
        margin-top: 10px;
        font-family: var(--font-mono);
        font-size: 14px;
        line-height: 1.7;
        color: var(--muted);
    }

    .divider {
        height: 1px;
        margin: 20px 0;
        background: var(--line);
    }

    .spacer {
        flex: 1;
    }

    .toggle {
        margin-bottom: 0;
    }
</style>
