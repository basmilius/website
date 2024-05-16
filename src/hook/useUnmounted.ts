import { useRef } from 'react';
import useEffectOnce from './useEffectOnce';

export default function (onUnmount: () => void): void {
    const ref = useRef(onUnmount);

    useEffectOnce(() => () => ref.current());
}
