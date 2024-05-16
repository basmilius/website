import { useEffect } from 'react';
import useDeferredState from './useDeferredState';

type Handlers = { [key: string]: (position: { x: number; y: number; }) => void; };
type WindowScroll = {
    x: number;
    y: number;
};

const handlers: Handlers = {};
let id = 0;

const onScroll = () => {
    const x = Math.round(document.scrollingElement.scrollLeft);
    const y = Math.round(document.scrollingElement.scrollTop);

    for (let index in handlers) {
        handlers[index]({x, y});
    }
};

export default function (): WindowScroll {
    const [state, setState] = useDeferredState<WindowScroll>({
        x: 0,
        y: 0
    });

    useEffect(() => {
        setState({
            x: Math.round(document.scrollingElement.scrollLeft),
            y: Math.round(document.scrollingElement.scrollTop)
        });

        if (Object.values(handlers).length === 0) {
            window.addEventListener('scroll', onScroll, {
                capture: false,
                passive: false
            });
        }

        let _id = ++id;
        handlers[_id] = setState;

        return () => {
            delete handlers[_id];

            if (Object.values(handlers).length === 0) {
                window.removeEventListener('scroll', onScroll);
            }
        };
    }, []);

    return state;
}
