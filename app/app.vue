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

    const description = 'I\'m a full stack developer from Groenlo, The Netherlands.';

    const jsonLd = {
        '@context': 'https://schema.org/',
        '@type': 'Person',
        name: 'Bas Milius',
        url: siteUrl,
        image: `${siteUrl}/image/bas.jpg`,
        jobTitle: 'Full-Stack Developer',
        sameAs: [...socials.map(social => social.url), siteUrl]
    };

    useHead({
        titleTemplate: title => title ? `${title} | Bas Milius - Full-Stack Developer` : 'Bas Milius - Full-Stack Developer',
        meta: [
            {name: 'description', content: description},
            {name: 'keywords', content: 'bas milius,basmilius,milius,developer,website,app,latte-ui,raxos,weather icons,latte,meteocons,passly,homey,apple tv,homepod,homepod mini,flowbits'},
            {name: 'author', content: 'Bas Milius'},
            {name: 'robots', content: 'index,follow'},
            {name: 'theme-color', content: '#0064f2'}
        ],
        script: [
            {type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd)}
        ]
    });

    useSeoMeta({
        ogTitle: 'Bas Milius - Full-Stack Developer',
        ogDescription: description,
        ogType: 'website',
        ogUrl: siteUrl,
        ogImage: `${siteUrl}/image/bas.jpg`,
        twitterCard: 'summary_large_image',
        twitterSite: '@basmilius'
    });
</script>
