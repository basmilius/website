import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';
import useUnmounted from './useUnmounted';

type UseRafState<T> = [T, Dispatch<SetStateAction<T>>];
type UseRafStateProps<T> = T | (() => T);

export default function <T>(initialState: UseRafStateProps<T>): UseRafState<T> {
    const frame = useRef(0);
    const [state, setState] = useState(initialState);

    const setRafState = useCallback((value: T | ((prevState: T) => T)) => {
        cancelAnimationFrame(frame.current);

        frame.current = requestAnimationFrame(() => setState(value));
    }, []);

    useUnmounted(() => cancelAnimationFrame(frame.current));

    return [state, setRafState];
}
