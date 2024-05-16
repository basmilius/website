'use client';

import type { IconStyle } from './icons';
import { createContext, PropsWithChildren, useState } from 'react';

type IconStyleContext = {
    readonly style: IconStyle;
    readonly setStyle: (style: IconStyle) => void;
};

export const IconStyleContext = createContext<IconStyleContext>({
    style: 'fill',
    setStyle: () => void 0
});

export default ({children}: PropsWithChildren) => {
    const [style, setStyle] = useState<IconStyle>('fill');

    return (
        <IconStyleContext.Provider value={{style, setStyle}}>
            {children}
        </IconStyleContext.Provider>
    );
};
