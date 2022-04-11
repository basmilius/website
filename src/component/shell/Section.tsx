import { ImgHTMLAttributes, memo, PropsWithChildren, ReactNode, useMemo } from "react";

import styles from "./Section.module.scss";

interface Props {
    className?: string;
    isAlternate?: boolean;
    isIndented?: boolean;
    isSmallTitle?: boolean;
    isSticky?: boolean;
    title?: string;
    subTitle?: string;
    details?: ReactNode;
}

interface PictureProps {
    alt: string;
    defaultSrc: string;
    jpg: PicturePropsSource[];
    webp: PicturePropsSource[];
}

interface PicturePropsSource {
    scale: number;
    src: string;
}

type PicturePropsComplete = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & PictureProps;

const Section = memo(({children, className, isAlternate, isIndented, isSmallTitle, isSticky, title, subTitle, details}: PropsWithChildren<Props>) => (
    <section className={`${className ?? ""} ${styles.section} ${isAlternate ? styles.sectionAlternate : ""} ${isIndented ? styles.sectionIndented : ""} ${isSticky ? styles.sectionSticky : ""}`}>
        {(title || subTitle || details) && (
            <div className={styles.sectionDetails}>
                {title && !isSmallTitle && <h2>{title}</h2>}
                {title && isSmallTitle && <h3>{title}</h3>}
                {subTitle && <p>{subTitle}</p>}

                {details}
            </div>
        )}

        <div className={styles.sectionBody}>
            {children}
        </div>
    </section>
));

const _PictureRaw = memo(({className, defaultSrc, jpg, webp, alt, ...props}: PicturePropsComplete & { className: string; }) => {
    const jpgSrcSet = useMemo(() => generateSrcSet(jpg), [jpg]);
    const webpSrcSet = useMemo(() => generateSrcSet(webp), [webp]);

    return (
        <picture className={className} {...props}>
            {webpSrcSet !== "" && <source type="image/webp" srcSet={webpSrcSet}/>}
            {jpgSrcSet !== "" && <source type="image/jpg" srcSet={jpgSrcSet}/>}
            <img alt={alt} src={defaultSrc}/>
        </picture>
    );
});

const CenterizedPicture = memo((props: PicturePropsComplete) => (
    <_PictureRaw
        className={styles.sectionCenterizedPicture}
        {...props}/>
));

const Picture = memo(({...props}: PicturePropsComplete) => (
    <_PictureRaw
        className={styles.sectionPicture}
        {...props}/>
));

export default Object.assign(Section, {
    CenterizedPicture,
    Picture
});

function generateSrcSet(sources: PicturePropsSource[]) {
    return sources.map(source => `${source.src} ${source.scale}x`).join(", ");
}
