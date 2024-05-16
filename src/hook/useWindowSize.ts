import { isBrowser } from 'framer-motion';
import { useEffect } from 'react';
import useDeferredState from './useDeferredState';

type Handlers = { [key: string]: (position: { width: number; height: number; }) => void; };
type WindowSize = {
    width: number;
    height: number;
};

const handlers: Handlers = {};
let id = 0;

const onResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let index in handlers) {
        handlers[index]({width, height});
    }
};

export default function (initialWidth: number = Infinity, initialHeight: number = Infinity): WindowSize {
    const [state, setState] = useDeferredState<WindowSize>({
        width: isBrowser ? window.innerWidth : initialWidth,
        height: isBrowser ? window.innerHeight : initialHeight
    });

    useEffect(() => {
        if (!isBrowser) {
            return;
        }

        if (Object.values(handlers).length === 0) {
            window.addEventListener('resize', onResize, {
                capture: false,
                passive: true
            });
        }

        let _id = ++id;
        handlers[_id] = setState;

        return () => {
            delete handlers[_id];

            if (Object.values(handlers).length === 0) {
                window.removeEventListener('resoze', onResize);
            }
        };
    }, []);

    return state;
}
