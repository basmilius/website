import { useInView, useWindowSize } from "@latte-ui/hooks";
import { memo, ReactNode, useEffect, useMemo, useRef } from "react";
import { BlobsSimulator } from "@/logic/util/blobs";

import styles from "./Header.module.scss";

export default memo(({cards, isFrontPage, title}: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>();
    const inView = useInView(canvasRef);
    const {width} = useWindowSize();

    const isSmallMode = useMemo(() => width < 768, [width]);

    useEffect(() => {
        if (!canvasRef.current || !inView) {
            return;
        }

        let simulator = new BlobsSimulator(canvasRef.current, isSmallMode);
        simulator.start();

        return () => {
            simulator.stop();
            simulator.destroy();
        };
    }, [canvasRef, inView, isSmallMode]);

    return (<>
        <header className={`${styles.header} ${isFrontPage ? styles.headerFrontPage : styles.headerDefault} ${cards && cards.length > 0 ? styles.headerHasIcons : ""}`}>
            <canvas ref={canvasRef} className={styles.canvas}/>

            <div className={styles.headerContainer}>
                <h1>{title}</h1>

                {cards && cards.length > 0 && (
                    <div className={styles.icons}>
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
