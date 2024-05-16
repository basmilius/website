import { EffectCallback, useEffect } from 'react';

export default function (effect: EffectCallback): void {
    useEffect(effect, []);
}
