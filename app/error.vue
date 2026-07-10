<template>
    <NuxtLayout>
        <div :class="$style.error">
            <PageHead
                eyebrow="// 404"
                title="Something's missing.">
                <p class="lead">The requested page was not found.</p>
                <p>The page you were looking for does not (yet) exist on this website. Did you type the url yourself, please check for errors. If not, please contact me!</p>

                <div :class="$style.actions">
                    <AppButton
                        label="About me"
                        icon="fas right"
                        icon-position="trailing"
                        variant="accent"
                        @click="go('/about')"/>
                    <AppButton
                        label="My work"
                        icon="fas right"
                        icon-position="trailing"
                        @click="go('/work')"/>
                    <AppButton
                        label="Contact"
                        icon="fas right"
                        icon-position="trailing"
                        @click="go('/contact')"/>
                </div>
            </PageHead>

            <WorkGrid
                title="Featured work"
                :ids="featuredWork"/>
        </div>
    </NuxtLayout>
</template>

<script
    lang="ts"
    setup>
    import { featuredWork } from '~/data/work';

    defineProps<{
        error: object;
    }>();

    useHead({title: 'Not found'});

    function go(path: string): void {
        clearError({redirect: path});
    }
</script>

<style
    module
    scoped
    lang="scss">
    .error {
        display: flex;
        flex-direction: column;
        gap: 48px;
    }

    .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 28px;
    }
</style>
