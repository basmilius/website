import { useWindowScroll } from "@latte-ui/core";
import { RefObject, useEffect, useState } from "react";

interface UseObserveSticky {
    isAfter: boolean;
    isBefore: boolean;
    isSticky: boolean;
}

interface UseObserveStickyOptions {
    threshold?: number;
}

/**
 * Detects when the given element ref is sticky.
 *
 * @param {RefObject<HTMLElement>} ref
 * @param {UseObserveStickyOptions} options
 *
 * @author Bas Milius <bas@mili.us>
 * @since 2.0.0
 */
export function useObserveSticky(ref: RefObject<HTMLElement | null>, options?: UseObserveStickyOptions): UseObserveSticky {
    const {y} = useWindowScroll();
    const [state, setState] = useState<UseObserveSticky>({
        isAfter: false,
        isBefore: false,
        isSticky: false
    });

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const parent = ref.current.parentElement;

        if (!parent) {
            return;
        }

        const {offsetHeight: parentHeight, offsetTop: parentTop} = parent;
        const {marginBottom, top} = window.getComputedStyle(ref.current);

        const startSticky = ref.current.offsetTop - parseInt(top);
        const isBefore = y < startSticky;
        const isAfter = Math.abs(ref.current.offsetTop - (parentTop + parentHeight - ref.current.offsetHeight - parseInt(marginBottom))) < (options?.threshold || 60);
        const isSticky = !isBefore && !isAfter;

        if (state.isAfter !== isAfter || state.isBefore !== isBefore || state.isSticky !== isSticky) {
            setState({isAfter, isBefore, isSticky});
        }
    }, [y, ref]);

    return state;
}
