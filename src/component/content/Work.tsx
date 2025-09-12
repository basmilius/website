import styles from './Work.module.scss';

import { memo, PropsWithChildren, ReactNode } from 'react';
import TextButton from '../shell/TextButton';

import basToolsImage from "@/asset/image/work/blueprint/blueprint-bas-tools.svg";
import didietNlImage from "@/asset/image/work/blueprint/blueprint-didiet-nl.svg";
import ditoGroenloImage from "@/asset/image/work/blueprint/blueprint-dito.svg";
import ervenijhuisImage from "@/asset/image/work/blueprint/blueprint-erve-nijhuis.svg";
import ervetankImage from "@/asset/image/work/blueprint/blueprint-erve-tank.svg";
import fleurNijhuisImage from "@/asset/image/work/blueprint/blueprint-fleur-nijhuis.svg";
import fluxImage from "@/asset/image/work/blueprint/blueprint-flux.svg";
import glybeImage from "@/asset/image/work/blueprint/blueprint-glybe.svg";
import isHetPatatImage from "@/asset/image/work/blueprint/blueprint-ishetpatat.svg";
import isHetFrietImage from "@/asset/image/work/blueprint/blueprint-ishetfriet.svg";
import jaimieVosImage from "@/asset/image/work/blueprint/blueprint-jaimie-vos.svg";
import kapsalonLichtenbergImage from "@/asset/image/work/blueprint/blueprint-kapsalon-lichtenberg.svg";
import manegeNijhuisImage from "@/asset/image/work/blueprint/blueprint-manege-nijhuis.svg";
import marveldImage from "@/asset/image/work/blueprint/blueprint-marveld.svg";
import passlyImage from "@/asset/image/work/blueprint/blueprint-passly.svg";
import raxosImage from "@/asset/image/work/blueprint/blueprint-raxos.svg";
import startDeTijdImage from "@/asset/image/work/blueprint/blueprint-startdetijd.svg";
import studiovierentwintigImage from "@/asset/image/work/blueprint/blueprint-studiovierentwintig.svg";
import typeWriterImage from "@/asset/image/work/blueprint/blueprint-typewriter.svg";
import visualEffectsImage from "@/asset/image/work/blueprint/blueprint-visual-effects.svg";
import weatherIconsImage from "@/asset/image/work/blueprint/blueprint-meteocons.svg";
import wervincImage from "@/asset/image/work/blueprint/blueprint-wervinc.svg";
import wpistImage from "@/asset/image/work/blueprint/blueprint-wpist.svg";

const Card = ({title, description, buttonIcon, buttonLabel, buttonSmall, buttonUrl, comingSoon, imageUrl, visual}: CardProps) => (
    <div className={styles.workCard}>
        {!visual && !imageUrl && (
            <div className={styles.workCardVisualBlank}/>
        )}

        {!visual && imageUrl && (
            <div className={styles.workCardVisualMount}>
                <img
                    className={styles.workCardVisualImage}
                    src={imageUrl}
                    alt={title}
                    height={394}
                    width={700}
                    loading="lazy"/>

                {comingSoon && (
                    <div className={styles.workCardComingSoon}>Soon</div>
                )}
            </div>
        )}

        {visual}

        <div className={styles.workCardBody}>
            <h3 className={styles.workCardTitle}>{title}</h3>
            <p className={styles.workCardExcerpt}>{description}</p>

            {buttonUrl && buttonUrl.startsWith('http') && (
                <TextButton
                    tag="a"
                    href={buttonUrl}
                    rel="noopener"
                    target="_blank"
                    className={styles.workCardLink}
                    isSmall={buttonSmall}
                    icon={buttonIcon || "fas right"}
                    label={buttonLabel || "Read more"}/>
            )}

            {buttonUrl && !buttonUrl.startsWith('http') && (
                <TextButton.Link
                    className={styles.workCardLink}
                    href={buttonUrl}
                    isSmall={buttonSmall}
                    icon={buttonIcon || "fas right"}
                    label={buttonLabel || "Read more"}/>
            )}
        </div>
    </div>
);

const Deck = ({children}: PropsWithChildren) => (
    <div className={styles.workDeck}>
        {children}
    </div>
);

const Grid = ({children, more, title}: PropsWithChildren<GridProps>) => (
    <div className={more ? styles.workGridMore : styles.workGrid}>
        {title && <h2 className={styles.workGridTitle}>{title}</h2>}
        {children}
    </div>
);

export default Object.assign({}, {
    Card,
    Deck,
    Grid,
    OfMe: {
        WeatherIcons: memo(() => (
            <Card
                imageUrl={weatherIconsImage.src}
                title="Meteocons"
                description="A set of handcrafted animated weather icons in various formats."
                buttonLabel="View project"
                buttonSmall
                buttonUrl="/work/meteocons"/>
        )),

        Flux: memo(() => (
            <Card
                imageUrl={fluxImage.src}
                title="Flux"
                description="A Vue 3 UI framework that I use for most of my projects."
                buttonIcon="fas up-right"
                buttonLabel="Website"
                buttonSmall
                buttonUrl="https://flux.bas.dev"/>
        )),

        Raxos: memo(() => (
            <Card
                imageUrl={raxosImage.src}
                title="Raxos"
                description="Custom built building blocks for PHP frameworks."
                buttonIcon="fab github"
                buttonLabel="GitHub"
                buttonSmall
                buttonUrl="https://github.com/basmilius/raxos"/>
        )),

        TypeWriter: memo(() => (
            <Card
                imageUrl={typeWriterImage.src}
                title="TypeWriter"
                description="Custom made WordPress framework that I use to create custom themes."
                buttonIcon="fab github"
                buttonLabel="GitHub"
                buttonSmall
                buttonUrl="https://github.com/glybe/typewriter"/>
        )),

        VisualEffects: memo(() => (
            <Card
                imageUrl={visualEffectsImage.src}
                title="Visual Effects"
                description="A set of fun visual effects that can be used on any website."
                buttonIcon="fab github"
                buttonLabel="GitHub"
                buttonSmall
                buttonUrl="https://github.com/basmilius/visual-effects"/>
        )),

        Glybe: memo(() => (
            <Card
                imageUrl={glybeImage.src}
                title="Glybe"
                description="Dutch online community for everyone, come chat about everything!"
                buttonIcon="fas up-right"
                buttonLabel="glybe.nl"
                buttonSmall
                buttonUrl="https://glybe.nl"/>
        )),

        Passly: memo(() => (
            <Card
                imageUrl={passlyImage.src}
                title="Passly"
                description="A self-service online ticketing provider for events."
                buttonIcon="fas up-right"
                buttonLabel="passly.nl"
                buttonSmall
                buttonUrl="https://passly.nl"/>
        )),

        BasTools: memo(() => (
            <Card
                imageUrl={basToolsImage.src}
                title="Bas Tools"
                description="Plugin that adds a custom theme and a few features to JetBrains IDE's"
                buttonIcon="fas up-right"
                buttonLabel="jetbrains.com"
                buttonSmall
                buttonUrl="https://plugins.jetbrains.com/plugin/15420-bas-tools"/>
        )),

        IsHetPatat: memo(() => (
            <Card
                imageUrl={isHetPatatImage.src}
                title="Is het Patat?"
                description="Little website that shows if you should be on #TeamPatat."
                buttonIcon="fas up-right"
                buttonLabel="ishetpatat.nl"
                buttonSmall
                buttonUrl="https://ishetpatat.nl"/>
        )),

        IsHetFriet: memo(() => (
            <Card
                imageUrl={isHetFrietImage.src}
                title="Is het Friet?"
                description="Little website that shows if you should be on #TeamFriet."
                buttonIcon="fas up-right"
                buttonLabel="ishetfriet.nl"
                buttonSmall
                buttonUrl="https://ishetfriet.nl"/>
        )),

        StartDeTijd: memo(() => (
            <Card
                imageUrl={startDeTijdImage.src}
                title="Start de Tijd"
                description="An online timer and clock that I made in ten minutes :-)"
                buttonIcon="fas up-right"
                buttonLabel="startdetijd.nl"
                buttonSmall
                buttonUrl="https://startdetijd.nl"/>
        ))
    },
    ForOthers: {
        DidietNl: memo(() => (
            <Card
                imageUrl={didietNlImage.src}
                title="Didiet.nl"
                description="Corporate website for my brother."
                buttonIcon="fas up-right"
                buttonLabel="didiet.nl"
                buttonSmall
                buttonUrl="https://didiet.nl"/>
        )),

        DitoGroenlo: memo(() => (
            <Card
                imageUrl={ditoGroenloImage.src}
                title="DITO Groenlo"
                description="Fun drama club in my local town, Groenlo."
                buttonIcon="fas up-right"
                buttonLabel="dito-groenlo.nl"
                buttonSmall
                buttonUrl="https://dito-groenlo.nl"/>
        )),

        ErveNijhuis: memo(() => (
            <Card
                imageUrl={ervenijhuisImage.src}
                title="Erve Nijhuis"
                description="Modern holiday house in Eibergen."
                buttonIcon="fas up-right"
                buttonLabel="manege-nijhuis.nl"
                buttonSmall
                buttonUrl="https://manege-nijhuis.nl/erve-nijhuis"/>
        )),

        ErveTank: memo(() => (
            <Card
                imageUrl={ervetankImage.src}
                title="Erve Tank"
                description="Modern holiday apartment in Eibergen."
                buttonIcon="fas up-right"
                buttonLabel="ervetank.nl"
                buttonSmall
                buttonUrl="https://manege-nijhuis.nl/erve-tank"/>
        )),

        FleurNijhuis: memo(() => (
            <Card
                imageUrl={fleurNijhuisImage.src}
                title="Fleur Nijhuis"
                description="Portfolio website built with WordPress and React."
                buttonIcon="fas up-right"
                buttonLabel="fleur.graphics"
                buttonSmall
                buttonUrl="https://fleur.graphics"/>
        )),

        JaimieVos: memo(() => (
            <Card
                imageUrl={jaimieVosImage.src}
                title="Jaimie Vos"
                description="Portfolio website built with React and Next.js."
                buttonIcon="fas up-right"
                buttonLabel="jaimie.dev"
                buttonSmall
                buttonUrl="https://jaimie.dev"/>
        )),

        KapsalonLichtenberg: memo(() => (
            <Card
                imageUrl={kapsalonLichtenbergImage.src}
                title="Kapsalon Lichtenberg"
                description="Hair salon in my local town, Groenlo."
                buttonIcon="fas up-right"
                buttonLabel="kapsalon-lichtenberg.nl"
                buttonSmall
                buttonUrl="https://kapsalon-lichtenberg.nl"/>
        )),

        ManegeNijhuis: memo(() => (
            <Card
                imageUrl={manegeNijhuisImage.src}
                title="Manege Nijhuis"
                description="Horse riding school in Eibergen."
                buttonIcon="fas up-right"
                buttonLabel="manege-nijhuis.nl"
                buttonSmall
                buttonUrl="https://manege-nijhuis.nl"/>
        )),

        Marveld: memo(() => (
            <Card
                imageUrl={marveldImage.src}
                title="Marveld Recreatie"
                description="Bungalow park, camping and hotel. Backend applications by me."
                buttonIcon="fas up-right"
                buttonLabel="marveld.nl"
                buttonSmall
                buttonUrl="https://marveld.nl"/>
        )),

        StudioVierentwintig: memo(() => (
            <Card
                imageUrl={studiovierentwintigImage.src}
                title="Studio Vierentwintig"
                description="Photo studio in my local town, Groenlo."
                buttonIcon="fas up-right"
                buttonLabel="studiovierentwintig.nl"
                buttonSmall
                buttonUrl="https://studiovierentwintig.nl"/>
        )),

        Wervinc: memo(() => (
            <Card
                imageUrl={wervincImage.src}
                title="Wervinc."
                description={<span>A custom WordPress theme I made together with <a href="https://vienna.nu" rel="noopener" target="_blank">Vienna</a>.</span>}
                buttonIcon="fas up-right"
                buttonLabel="wervinc.nl"
                buttonSmall
                buttonUrl="https://wervinc.nl"/>
        )),

        WPIST: memo(() => (
            <Card
                imageUrl={wpistImage.src}
                title="WPIST Registration"
                description="Custom made registration form for the football tournament."
                buttonIcon="fas up-right"
                buttonLabel="wpist-indoorsoccer.nl"
                buttonSmall
                buttonUrl="https://wpist-indoorsoccer.nl"/>
        ))
    }
});

type CardProps = {
    readonly title: string;
    readonly description: string | ReactNode;
    readonly buttonIcon?: string;
    readonly buttonLabel?: string;
    readonly buttonSmall?: boolean;
    readonly buttonUrl?: string;
    readonly comingSoon?: boolean;
    readonly imageUrl?: string;
    readonly visual?: ReactNode;
};

type GridProps = {
    readonly more?: boolean;
    readonly title?: string;
};
