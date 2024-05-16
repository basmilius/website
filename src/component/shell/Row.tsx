import styles from './Row.module.scss';

import { ImgHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import classNames from 'classnames';

const Row = ({children, className, isAlternate, isIndented, isSmallTitle, isSticky, title, subTitle, details}: PropsWithChildren<Props>) => (
    <section className={classNames(className, styles.row, isAlternate ? styles.rowAlternate : null, isIndented ? styles.rowIndented : null, isSticky ? styles.rowSticky : null)}>
        {(title || subTitle || details) && (
            <div className={styles.rowDetails}>
                {title && !isSmallTitle && <h2>{title}</h2>}
                {title && isSmallTitle && <h3>{title}</h3>}
                {subTitle && <p>{subTitle}</p>}

                {details}
            </div>
        )}

        <div className={styles.rowBody}>
            {children}
        </div>
    </section>
);

const CenterizedPicture = (props: PicturePropsComplete) => (
    <RawPicture
        className={styles.rowCenterizedPicture}
        {...props}/>
);

const Picture = (props: PicturePropsComplete) => (
    <RawPicture
        className={styles.rowPicture}
        {...props}/>
);

const RawPicture = ({className, defaultSrc, jpg, webp, alt, ...props}: PicturePropsComplete & { className: string; }) => {
    const jpgSourceSet = composeSourceSet(jpg);
    const webpSourceSet = composeSourceSet(webp);

    return (
        <picture className={className} {...props}>
            {webpSourceSet !== '' && (
                <source
                    type="image/webp"
                    srcSet={webpSourceSet}/>
            )}

            {jpgSourceSet !== '' && (
                <source
                    type="image/jpg"
                    srcSet={jpgSourceSet}/>
            )}

            <img
                src={defaultSrc}
                alt={alt}
                height={props.height}
                width={props.width}/>
        </picture>
    );
};

export default Object.assign(Row, {
    CenterizedPicture,
    Picture
});

type Props = {
    readonly className?: string;
    readonly isAlternate?: boolean;
    readonly isIndented?: boolean;
    readonly isSmallTitle?: boolean;
    readonly isSticky?: boolean;
    readonly title?: string;
    readonly subTitle?: string;
    readonly details?: ReactNode;
};

type PictureProps = {
    readonly alt: string;
    readonly defaultSrc: string;
    readonly jpg: PicturePropsSource[];
    readonly webp: PicturePropsSource[];
};

type PicturePropsSource = {
    readonly scale: number;
    readonly src: string;
};

type PicturePropsComplete = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & PictureProps;

function composeSourceSet(sources: PicturePropsSource[]): string {
    return sources.map(({scale, src}) => `${src} ${scale}x`).join(',');
}
