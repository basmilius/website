import { Children, cloneElement, forwardRef, memo, PropsWithChildren, ReactElement, ReactNode, RefObject, useEffect, useMemo, useRef } from "react";
import { LatteSides } from "@latte-ui/core/src/types/prop-types";
import { clamp, off, on, useBoolean, useRect, useWindowScroll, useWindowSize } from "@latte-ui/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { createSlotFill } from "@latte-ui/slot-fill";

const {Fill, Slot} = createSlotFill("bm:tooltip");

export interface TooltipProps {
    content: ReactNode;
    delay?: number;
    isEnabled?: boolean;
    location?: LatteSides;
    offset?: number;
}

const Tooltip = memo(forwardRef<HTMLElement, PropsWithChildren<TooltipProps>>(({children, content, delay = 0, isEnabled = true, location = "bottom", offset = 0}: PropsWithChildren<TooltipProps>, ref: RefObject<any>) => {
    const openerRef = ref || useRef(null);

    const [isOpen, setOpen] = useBoolean();
    const [openerRect, setOpenerRect] = useRect(openerRef);
    const {x, y} = useWindowScroll();

    const child = Children.only(children) as ReactElement;

    const onEnter = () => isEnabled && setOpen(true);
    const onLeave = () => setOpen(false);

    useEffect(() => {
        isOpen && setOpenerRect();
    }, [x, y, isOpen]);

    useEffect(() => {
        on(openerRef.current, "mouseenter", onEnter, {passive: true});
        on(openerRef.current, "mouseleave", onLeave, {passive: true});
        on(openerRef.current, "click", onLeave, {passive: true});

        return () => {
            off(openerRef.current, "mouseenter", onEnter);
            off(openerRef.current, "mouseleave", onLeave);
            off(openerRef.current, "click", onLeave);
        };
    }, []);

    return (<>
        <Fill>
            <AnimatePresence>
                {isOpen && (
                    <Content
                        content={content}
                        delay={delay}
                        location={location}
                        offset={offset}
                        openerRect={openerRect}/>
                )}
            </AnimatePresence>
        </Fill>

        {cloneElement(child, {
            ref: openerRef
        })}
    </>);
}));

const Content = memo(({content, delay, location, offset, openerRect}: any) => {
    const ref = useRef(null);
    const [rect] = useRect(ref);
    const {height, width} = useWindowSize();

    const {x, y, tx, ty} = useMemo(() => {
        let x, y, tx = 0, ty = 0;
        let margin = 9 + offset;

        switch (location) {
            case "top":
                x = (openerRect.left + openerRect.width / 2) - rect.width / 2;
                y = openerRect.top - rect.height - margin;
                ty = 9;
                break;

            case "bottom":
                x = (openerRect.left + openerRect.width / 2) - rect.width / 2;
                y = openerRect.top + openerRect.height + margin;
                ty = -9;
                break;

            case "left":
                x = openerRect.left - rect.width - margin;
                y = (openerRect.top + openerRect.height / 2) - rect.height / 2;
                tx = 9;
                break;

            case "right":
                x = openerRect.left + openerRect.width + margin;
                y = (openerRect.top + openerRect.height / 2) - rect.height / 2;
                tx = -9;
                break;
        }

        x = clamp(x, margin, innerWidth - rect.width - margin);
        y = clamp(y, margin, innerHeight - rect.height - margin);

        return {
            x: Math.floor(x),
            y: Math.floor(y),
            tx,
            ty
        };
    }, [height, width, rect, offset, openerRect, location]);

    return (
        <motion.div
            ref={ref}
            transition={{type: "tween", duration: .18}}
            animate={{opacity: 1, translateX: 0, translateY: 0, transition: {delay: delay / 1000}}}
            exit={{opacity: 0}}
            initial={{opacity: 0, translateX: tx, translateY: ty}}
            style={{x, y}}
            className="tooltip"
            role="tooltip">
            {content}
        </motion.div>
    );
});

const Portal = memo(() => (<Slot/>));

export default Object.assign(Tooltip, {
    Content,
    Portal
});
