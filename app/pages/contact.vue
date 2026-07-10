<template>
    <div :class="$style.contact">
        <PageHead
            eyebrow="// ~/contact"
            title="Send a message">
            <p class="lead">Thanks for stopping by. Whether you're planning a website or app, have a question about one of my projects, or just want to get in touch, feel free to reach out using any of the details below.</p>
            <p>If you've found a bug in one of my open source projects, the fastest way to reach me is by opening an issue on the project's GitHub repository. Describe what you were doing when it broke and I'll take a look when I can.</p>
        </PageHead>

        <SectionBlock
            eyebrow="// information"
            title="Information"
            subtitle="About my company and more. Tap any detail to copy it.">
            <InfoCard :items="companyInfo"/>
        </SectionBlock>

        <SectionBlock
            eyebrow="// socials"
            title="Socials"
            subtitle="Where you can find even more.">
            <Socials/>
        </SectionBlock>
    </div>
</template>

<script
    lang="ts"
    setup>
    import { companyInfo } from '~/data/company';

    useSeoMeta({
        title: 'Contact',
        description: 'Get in touch with Bas Milius about a website, app or backend project. Company details, e-mail, phone and socials. Tap any detail to copy it.'
    });
</script>

<style
    module
    scoped
    lang="scss">
    .contact {
        display: flex;
        flex-direction: column;
        gap: 44px;
    }
</style>
