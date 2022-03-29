import { useBreakpoints, useInView, useWindowScroll } from "@latte-ui/core";
import { CSSProperties, memo, ReactNode, useEffect, useMemo, useRef } from "react";
import { BlobCanvas } from "@/logic/util/blobs";

import styles from "./Header.module.scss";

export default memo(({cards, isFrontPage, title}: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>();
    const inView = useInView(canvasRef);
    const {isDown, width} = useBreakpoints();
    const {y} = useWindowScroll();

    const isSmallMode = useMemo(() => isDown("md"), [width]);

    useEffect(() => {
        if (!canvasRef.current || !inView) {
            return;
        }

        let blobsCanvas = new BlobCanvas(canvasRef.current, isSmallMode);
        blobsCanvas.start();

        return () => {
            blobsCanvas.stop();
            blobsCanvas.destroy();
        };
    }, [canvasRef, inView, isSmallMode]);

    return (<>
        <header className={`${styles.header} ${isFrontPage ? styles.headerFrontPage : styles.headerDefault} ${cards && cards.length > 0 ? styles.headerHasIcons : ""}`} style={{"--scroll": `${y}px`} as CSSProperties}>
            <canvas ref={canvasRef} className={styles.canvas}/>

            <div className={styles.headerContainer}>
                <h1>{title}</h1>

                {cards && cards.length > 0 && (
                    <div className={`${styles.icons} ${styles.iconsSmall}`}>
                        {cards.map((card, index) => (
                            <div key={index} className={styles.icon}>
                                {card}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </header>

        <div id="content"/>
    </>);
});

interface Props {
    cards?: ReactNode[];
    isFrontPage?: true;
    title: string;
}
