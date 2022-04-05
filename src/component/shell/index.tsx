import { memo, PropsWithChildren, Suspense } from "react";
import { dynamic } from "@/component/platform";
import { TooltipProps } from "@/component/shell/Tooltip";

export { default as BMContainer } from "./Container";
export { default as BMFooter } from "./Footer";
export { default as BMHeader } from "./Header";
export { default as BMIcon } from "./Icon";
export { default as BMNavigation, BMNavigationTitle } from "./Navigation";
export { default as BMSection } from "./Section";
export { default as BMTextButton } from "./TextButton";

const LazyTooltip = dynamic(() => import("./Tooltip").then(m => m.Tooltip), {ssr: false});

type CompleteTooltipProps = PropsWithChildren<TooltipProps>;

export const BMTooltip = memo((props: CompleteTooltipProps) => (
    <Suspense fallback={<>{props.children}</>}>
        <LazyTooltip {...props} />
    </Suspense>
));
