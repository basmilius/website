<template>
    <div class="meteocons">
        <PageHead
            eyebrow="// ~/work/meteocons"
            title="Animated Weather Icons">
            <p class="lead">Over 500 unique animated weather icons. Free and open source.</p>
        </PageHead>

        <div class="previews">
            <div
                v-for="preview in previews"
                :key="preview.src"
                class="preview">
                <img
                    :src="preview.src"
                    :alt="preview.alt"
                    loading="lazy"/>
            </div>
        </div>

        <div class="prose">
            <p>
                Meteocons is a collection of weather icons that feel alive. Every icon is meticulously
                designed in Figma and available in four styles: fill, flat, line and monochrome. They
                come as animated SVG and Lottie JSON, ready to use in any project.
            </p>
            <p>
                Meteocons now has its own website!
                <a
                    href="https://meteocons.com"
                    rel="noopener"
                    target="_blank">meteocons.com</a> is the new home for browsing all icons, reading
                the documentation and getting started. Install the icons via npm with
                <code>@meteocons/svg</code> or <code>@meteocons/lottie</code>, or grab them directly
                from the GitHub repository.
            </p>
            <p>
                The icons work with React, Vue, Svelte, Angular, iOS, Android - any platform that
                renders SVG or Lottie. They are available under a MIT-license, which means they're
                free to use and modify.
            </p>
        </div>

        <div class="actions">
            <AppButton
                href="https://meteocons.com"
                label="Visit meteocons.com"
                icon="fas up-right"
                icon-position="trailing"
                variant="accent"/>
            <AppButton
                href="https://github.com/basmilius/meteocons"
                label="View on GitHub"
                icon="fab github"/>
        </div>
    </div>
</template>

<script
    lang="ts"
    setup>
    useHead({title: 'Meteocons'});

    const base = 'https://cdn.meteocons.com/3.0.0-next.10/svg/fill';
    const previews = [
        {src: `${base}/clear-day.svg`, alt: 'Clear day icon from Meteocons'},
        {src: `${base}/overcast-rain.svg`, alt: 'Overcast rain icon from Meteocons'},
        {src: `${base}/partly-cloudy-day-snow.svg`, alt: 'Partly cloudy snow icon from Meteocons'},
        {src: `${base}/partly-cloudy-night-sleet.svg`, alt: 'Partly cloudy sleet at night icon from Meteocons'}
    ];
</script>

<style
    scoped
    lang="scss">
    .meteocons {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .previews {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
    }

    .preview {
        display: grid;
        place-items: center;
        aspect-ratio: 1;
        padding: 12px;
        border: 1px solid var(--line);
        border-radius: var(--radius);
        background: var(--surface);
        box-shadow: var(--shadow);

        img {
            width: 100%;
            height: 100%;
        }
    }

    .prose {
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 68ch;

        p {
            font-size: 16px;
            line-height: 1.75;
            color: var(--muted);
        }

        a {
            color: var(--accent);
            text-decoration: underline;
            text-underline-offset: 2px;

            &:hover {
                text-decoration: none;
            }
        }
    }

    .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    @media (max-width: 620px) {
        .previews {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
