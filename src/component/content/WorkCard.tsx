import { memo, ReactNode } from "react";
import { BMTextButton } from "@/component/shell";
import { Link } from "@/component/platform";

import styles from "./Work.module.scss";

import basToolsImage from "../../image/work/blueprint/blueprint-bas-tools.svg";
import ditoGroenloImage from "../../image/work/blueprint/blueprint-dito.svg";
import ervenijhuisImage from "../../image/work/blueprint/blueprint-erve-nijhuis.svg";
import ervetankImage from "../../image/work/blueprint/blueprint-erve-tank.svg";
import flantImage from "../../image/work/blueprint/blueprint-flant.svg";
import fleurNijhuisImage from "../../image/work/blueprint/blueprint-fleur-nijhuis.svg";
import glybeImage from "../../image/work/blueprint/blueprint-glybe.svg";
import isHetPatatImage from "../../image/work/blueprint/blueprint-ishetpatat.svg";
import isHetFrietImage from "../../image/work/blueprint/blueprint-ishetfriet.svg";
import jaimieVosImage from "../../image/work/blueprint/blueprint-jaimie-vos.svg";
import kapsalonLichtenbergImage from "../../image/work/blueprint/blueprint-kapsalon-lichtenberg.svg";
import mandLinkImage from "../../image/work/blueprint/blueprint-mandlink.svg";
import manegeNijhuisImage from "../../image/work/blueprint/blueprint-manege-nijhuis.svg";
import raxosImage from "../../image/work/blueprint/blueprint-raxos.svg";
import startDeTijdImage from "../../image/work/blueprint/blueprint-startdetijd.svg";
import studiovierentwintigImage from "../../image/work/blueprint/blueprint-studiovierentwintig.svg";
import typeWriterImage from "../../image/work/blueprint/blueprint-typewriter.svg";
import visualEffectsImage from "../../image/work/blueprint/blueprint-visual-effects.svg";
import weatherIconsImage from "../../image/work/blueprint/blueprint-meteocons.svg";
import wervincImage from "../../image/work/blueprint/blueprint-wervinc.svg";

interface Props {
    title: string;
    description: string | ReactNode;
    buttonIcon?: string;
    buttonLabel?: string;
    buttonSmall?: boolean;
    buttonUrl?: string;
    comingSoon?: boolean;
    imageUrl?: string;
    visual?: ReactNode;
}

const WorkCard = memo(({title, description, buttonIcon, buttonLabel, buttonSmall, buttonUrl, comingSoon, imageUrl, visual}: Props) => (
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
            <h3>{title}</h3>
            <p>{description}</p>

            {buttonUrl && buttonUrl.startsWith("http") && (
                <BMTextButton
                    tag="a"
                    href={buttonUrl}
                    rel="noopener"
                    target="_blank"
                    className={styles.workCardLink}
                    isSmall={buttonSmall}
                    icon={buttonIcon || "fas right"}
                    label={buttonLabel || "Read more"}/>
            )}

            {buttonUrl && !buttonUrl.startsWith("http") && (
                <Link href={buttonUrl} passHref>
                    <BMTextButton
                        tag="a"
                        className={styles.workCardLink}
                        isSmall={buttonSmall}
                        icon={buttonIcon || "fas right"}
                        label={buttonLabel || "Read more"}/>
                </Link>
            )}
        </div>
    </div>
));

export default Object.assign(WorkCard, {
    OfMe: {
        WeatherIcons: memo(() => (
            <WorkCard
                imageUrl={weatherIconsImage.src}
                title="Meteocons"
                description="A set of handcrafted animated weather icons in various formats."
                buttonLabel="View project"
                buttonSmall
                buttonUrl="/work/meteocons"/>
        )),

        Raxos: memo(() => (
            <WorkCard
                imageUrl={raxosImage.src}
                title="Raxos"
                description="Custom made building blocks for PHP frameworks."
                buttonIcon="fab github"
                buttonLabel="GitHub"
                buttonSmall
                buttonUrl="https://github.com/basmilius/raxos"/>
        )),

        TypeWriter: memo(() => (
            <WorkCard
                imageUrl={typeWriterImage.src}
                title="TypeWriter"
                description="Custom made WordPress framework that I use to create custom themes."
                buttonIcon="fab github"
                buttonLabel="GitHub"
                buttonSmall
                buttonUrl="https://github.com/glybe/typewriter"/>
        )),

        VisualEffects: memo(() => (
            <WorkCard
                imageUrl={visualEffectsImage.src}
                title="Visual Effects"
                description="A set of fun visual effects that can be used on any website."
                buttonIcon="fab github"
                buttonLabel="GitHub"
                buttonSmall
                buttonUrl="https://github.com/basmilius/visual-effects"/>
        )),

        Glybe: memo(() => (
            <WorkCard
                imageUrl={glybeImage.src}
                title="Glybe"
                description="Dutch online community for everyone, come chat about everything!"
                buttonIcon="fas up-right"
                buttonLabel="glybe.nl"
                buttonSmall
                buttonUrl="https://glybe.nl"/>
        )),

        BasTools: memo(() => (
            <WorkCard
                imageUrl={basToolsImage.src}
                title="Bas Tools"
                description="Plugin that adds a custom theme and a few features to JetBrains IDE's"
                buttonIcon="fas up-right"
                buttonLabel="jetbrains.com"
                buttonSmall
                buttonUrl="https://plugins.jetbrains.com/plugin/15420-bas-tools"/>
        )),

        Flant: memo(() => (
            <WorkCard
                imageUrl={flantImage.src}
                title="Flant.nl"
                description="Not yet available, it's coming soon though!"
                buttonIcon="fas up-right"
                buttonLabel="flant.nl"
                buttonSmall
                buttonUrl="https://flant.nl"
                comingSoon/>
        )),

        IsHetPatat: memo(() => (
            <WorkCard
                imageUrl={isHetPatatImage.src}
                title="Is het Patat?"
                description="Little website that shows if you should be on #TeamPatat."
                buttonIcon="fas up-right"
                buttonLabel="ishetpatat.nl"
                buttonSmall
                buttonUrl="https://ishetpatat.nl"/>
        )),

        IsHetFriet: memo(() => (
            <WorkCard
                imageUrl={isHetFrietImage.src}
                title="Is het Friet?"
                description="Little website that shows if you should be on #TeamFriet."
                buttonIcon="fas up-right"
                buttonLabel="ishetfriet.nl"
                buttonSmall
                buttonUrl="https://ishetfriet.nl"/>
        )),

        StartDeTijd: memo(() => (
            <WorkCard
                imageUrl={startDeTijdImage.src}
                title="Start de Tijd"
                description="An online timer and clock that I made in ten minutes :-)"
                buttonIcon="fas up-right"
                buttonLabel="startdetijd.nl"
                buttonSmall
                buttonUrl="https://startdetijd.nl"/>
        )),

        MandLink: memo(() => (
            <WorkCard
                imageUrl={mandLinkImage.src}
                title="Mand.link"
                description="Free to use url shortener. Create as many short urls as you'd like!"
                buttonIcon="fas up-right"
                buttonLabel="mand.link"
                buttonSmall
                buttonUrl="https://mand.link"
                comingSoon/>
        ))
    },
    ForOthers: {
        DitoGroenlo: memo(() => (
            <WorkCard
                imageUrl={ditoGroenloImage.src}
                title="DITO Groenlo"
                description="Fun drama club in my local town, Groenlo."
                buttonIcon="fas up-right"
                buttonLabel="dito-groenlo.nl"
                buttonSmall
                buttonUrl="https://dito-groenlo.nl"/>
        )),

        ErveNijhuis: memo(() => (
            <WorkCard
                imageUrl={ervenijhuisImage.src}
                title="Erve Nijhuis"
                description="Modern holiday house in Eibergen."
                buttonIcon="fas up-right"
                buttonLabel="manege-nijhuis.nl"
                buttonSmall
                buttonUrl="https://manege-nijhuis.nl/erve-nijhuis"/>
        )),

        ErveTank: memo(() => (
            <WorkCard
                imageUrl={ervetankImage.src}
                title="Erve Tank"
                description="Modern holiday apartment in Eibergen."
                buttonIcon="fas up-right"
                buttonLabel="ervetank.nl"
                buttonSmall
                buttonUrl="https://manege-nijhuis.nl/erve-tank"/>
        )),

        FleurNijhuis: memo(() => (
            <WorkCard
                imageUrl={fleurNijhuisImage.src}
                title="Fleur Nijhuis"
                description="Portfolio website built with WordPress and React."
                buttonIcon="fas up-right"
                buttonLabel="fleur.graphics"
                buttonSmall
                buttonUrl="https://fleur.graphics"/>
        )),

        JaimieVos: memo(() => (
            <WorkCard
                imageUrl={jaimieVosImage.src}
                title="Jaimie Vos"
                description="Portfolio website built with React and Next.js."
                buttonIcon="fas up-right"
                buttonLabel="jaimie.dev"
                buttonSmall
                buttonUrl="https://jaimie.dev"/>
        )),

        KapsalonLichtenberg: memo(() => (
            <WorkCard
                imageUrl={kapsalonLichtenbergImage.src}
                title="Kapsalon Lichtenberg"
                description="Hair salon in my local town, Groenlo."
                buttonIcon="fas up-right"
                buttonLabel="kapsalon-lichtenberg.nl"
                buttonSmall
                buttonUrl="https://kapsalon-lichtenberg.nl"/>
        )),

        ManegeNijhuis: memo(() => (
            <WorkCard
                imageUrl={manegeNijhuisImage.src}
                title="Manage Nijhuis"
                description="Horse riding school in Eibergen."
                buttonIcon="fas up-right"
                buttonLabel="manege-nijhuis.nl"
                buttonSmall
                buttonUrl="https://manege-nijhuis.nl"/>
        )),

        StudioVierentwintig: memo(() => (
            <WorkCard
                imageUrl={studiovierentwintigImage.src}
                title="Studio Vierentwintig"
                description="Photo studio in my local town, Groenlo."
                buttonIcon="fas up-right"
                buttonLabel="studiovierentwintig.nl"
                buttonSmall
                buttonUrl="https://studiovierentwintig.nl"/>
        )),

        Wervinc: memo(() => (
            <WorkCard
                imageUrl={wervincImage.src}
                title="Wervinc."
                description={<span>A custom WordPress theme I made together with <a href="https://vienna.nu" rel="noopener" target="_blank">Vienna</a>.</span>}
                buttonIcon="fas up-right"
                buttonLabel="wervinc.nl"
                buttonSmall
                buttonUrl="https://wervinc.nl"/>
        ))
    }
});
