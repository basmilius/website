import { LatteClassStyle } from "@latte-ui/core/src/types/prop-types";
import { useClasses } from "@latte-ui/hooks";
import { AriaAttributes, cloneElement, forwardRef, memo } from "react";
import { renderIcon } from "@/logic/font-awesome";

export interface IconProps extends AriaAttributes, LatteClassStyle {
    name: string;
}

export default memo(forwardRef<HTMLElement, IconProps>(({ className, style, name }, ref) => {
    const result = renderIcon(ref, name);

    if (!result) {
        useClasses();
        return null;
    }

    return cloneElement(result, {
        className: useClasses(result.props.className, className),
        style: style
    });
}));
