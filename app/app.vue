<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>

<script
    lang="ts"
    setup>
    import { socials } from '~/data/socials';

    const config = useRuntimeConfig();
    const siteUrl = config.public.siteUrl;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Bas Milius',
        url: siteUrl,
        image: `${siteUrl}/image/bas.jpg`,
        jobTitle: 'Full-Stack Developer',
        description: 'Full-stack developer from Groenlo, the Netherlands.',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Groenlo',
            addressCountry: 'NL'
        },
        knowsAbout: ['Vue.js', 'Nuxt', 'TypeScript', 'PHP', 'Node.js', 'Flutter', 'WordPress'],
        sameAs: socials.map(social => social.url)
    };

    useHead({
        titleTemplate: title => title ? `${title} | Bas Milius - Full-Stack Developer` : 'Bas Milius - Full-Stack Developer',
        meta: [
            {name: 'keywords', content: 'bas milius,basmilius,milius,developer,website,app,raxos,weather icons,meteocons,passly,homey,apple tv,homepod,homepod mini,flowbits'},
            {name: 'author', content: 'Bas Milius'},
            {name: 'theme-color', content: '#0064f2'}
        ],
        script: [
            {type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd)}
        ]
    });

    useSeoMeta({
        ogImage: `${siteUrl}/og-image.png`,
        ogImageWidth: 2400,
        ogImageHeight: 1260,
        ogImageAlt: 'Bas Milius — Full-Stack Developer',
        ogLocale: 'en_US',
        twitterCard: 'summary_large_image',
        twitterSite: '@basmilius',
        twitterCreator: '@basmilius'
    });
</script>
