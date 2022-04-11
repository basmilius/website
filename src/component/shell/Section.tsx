import { ImgHTMLAttributes, memo, PropsWithChildren, ReactNode } from "react";

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

const CenterizedPicture = memo(({webpSrc, ...props}: ImgHTMLAttributes<HTMLImageElement> & { webpSrc: string; }) => (
    <picture className={styles.sectionCenterizedPicture} {...props}>
        <source type="image/webp" srcSet={webpSrc}/>
        <source type="image/jpg" srcSet={props.src}/>
        <img alt={props.alt} src={props.src}/>
    </picture>
));

const Picture = memo(({webpSrc, ...props}: ImgHTMLAttributes<HTMLImageElement> & { webpSrc: string; }) => (
    <picture className={styles.sectionPicture} {...props}>
        <source type="image/webp" srcSet={webpSrc}/>
        <source type="image/jpg" srcSet={props.src}/>
        <img alt={props.alt} src={props.src}/>
    </picture>
));

export default Object.assign(Section, {
    CenterizedPicture,
    Picture
});
