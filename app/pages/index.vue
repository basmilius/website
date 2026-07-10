<template>
    <div :class="$style.home">
        <PageHead
            eyebrow="// ~/index"
            title="Bas Milius">
            <p class="lead">Full-Stack Developer with a passion for creating websites, apps, and backend applications.</p>
            <p>I enjoy experimenting with new techniques and occasionally tinkering with tools like Figma and Docker. As a Full-Stack Developer, I find fulfillment in coding for personal projects as well as collaborating on projects for others.</p>

            <div :class="$style.tags">
                <span
                    v-for="tag in tags"
                    :key="tag"
                    :class="$style.tag">{{ tag }}</span>
            </div>

            <div :class="$style.actions">
                <AppButton
                    to="/about"
                    label="About me"
                    icon="fas right"
                    icon-position="trailing"
                    variant="accent"/>
                <AppButton
                    to="/contact"
                    label="Contact"
                    icon="fas right"
                    icon-position="trailing"/>
                <AppButton
                    href="https://github.com/basmilius"
                    label="Follow on GitHub"
                    icon="fab github"
                    variant="text"
                    small/>
            </div>
        </PageHead>

        <WorkGrid
            title="Selected work"
            :ids="homeFeatured">
            <template #action>
                <AppButton
                    to="/work"
                    label="view all"
                    icon="fas right"
                    icon-position="trailing"
                    variant="text"
                    small/>
            </template>
        </WorkGrid>
    </div>
</template>

<script
    lang="ts"
    setup>
    import { homeFeatured } from '~/data/work';

    const tags = ['TypeScript', 'Vue 3 · React', 'PHP · Node', 'Docker · Figma'];

    useSeoMeta({
        description: 'Bas Milius is a full-stack developer from the Netherlands. I build websites, apps and backend systems, and open-source projects like Meteocons and Flux UI.'
    });
</script>

<style
    module
    scoped
    lang="scss">
    .home {
        display: flex;
        flex-direction: column;
        gap: 56px;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 26px;
    }

    .tag {
        padding: 6px 11px;
        border: 1px solid var(--line);
        border-radius: 7px;
        font-family: var(--font-mono);
        font-size: 16px;
        color: var(--muted);
    }

    .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        margin-top: 28px;
    }
</style>
