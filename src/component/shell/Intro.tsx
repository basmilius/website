'use client';

import styles from './Intro.module.scss';

import { ReactNode, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useWindowSize } from '@/hook';
import { BlobsSimulator } from '@/logic/util/blobs';

type Props = {
    readonly cards?: ReactNode[];
    readonly isFrontPage?: true;
    readonly title: string;
};

export default ({cards, isFrontPage, title}: Props) => {
    if (isFrontPage && cards?.length) {
        throw new Error('<Intro/> component cannot show cards when isFrontPage is used.');
    }

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const inView = useInView(canvasRef);
    const {width} = useWindowSize();

    const isSmallMode = width < 768;

    useEffect(() => {
        if (!canvasRef.current || !inView) {
            return;
        }

        const simulator = new BlobsSimulator(canvasRef.current, isSmallMode);
        simulator.start();

        return () => {
            simulator.stop();
            simulator.destroy();
        };
    }, [canvasRef, inView, isSmallMode]);

    return (<>
        <header className={isFrontPage ? styles.introFrontPage : (cards?.length > 0 ? styles.introCards : styles.introDefault)}>
            <canvas
                ref={canvasRef}
                className={styles.introCanvas}/>

            <div className={styles.introContainer}>
                <h1>{title}</h1>

                {cards && cards.length > 0 && (
                    <div className={styles.introIcons}>
                        {cards.map((card, index) => (
                            <div key={index} className={styles.introIconsItem}>
                                {card}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </header>

        <div id="content"/>
    </>);
};
