import { Icon, useAriaAttributes, useClasses } from "@latte-ui/core";
import { ButtonProps } from "@latte-ui/core/src/component/button/Button";
import { LatteClassStyle } from "@latte-ui/core/src/types/prop-types";
import { ElementType, forwardRef, memo, PropsWithChildren } from "react";
import { Link as LinkComponent } from "@/component/platform";

import styles from "./TextButton.module.scss";

interface Props {
    isSmall?: boolean;
}

interface GroupProps {
    alignToBottom?: boolean;
}

const Button = memo(forwardRef<HTMLElement, ButtonProps & Props>(({className, style, tag = "button", buttonType = "button", href, rel, target, label, icon, iconAfter, isDisabled, isSmall, onClick, ...props}, ref) => {
    const Tag = tag as ElementType;

    const ariaAttributes = useAriaAttributes(props, {
        "aria-disabled": isDisabled
    });

    const classes = useClasses(
        className,
        styles.textButton,
        isSmall ? styles.textButtonSmall : null
    );

    return (
        <Tag
            ref={ref}
            {...ariaAttributes}
            {...(tag === "a" ? {href, rel, target} : {})}
            type={buttonType}
            className={classes}
            style={style}
            disabled={isDisabled}
            onClick={onClick}>

            {typeof icon === "string" && (
                <div className={styles.textButtonIcon}>
                    <Icon name={icon}/>
                </div>
            )}

            <span>{label}</span>

            {typeof iconAfter === "string" && (
                <div className={styles.textButtonIcon}>
                    <Icon name={iconAfter}/>
                </div>
            )}

        </Tag>
    );
}));

const Grid = memo(({children, className, style}: PropsWithChildren<LatteClassStyle>) => (
    <div className={`${styles.textButtonGrid} ${className || ""}`} style={style}>
        {children}
    </div>
));

const Group = memo(({children, alignToBottom, className, style}: PropsWithChildren<LatteClassStyle & GroupProps>) => (
    <div className={`${alignToBottom ? styles.textButtonGroupAlignToBottom : styles.textButtonGroup} ${className || ""}`} style={style}>
        {children}
    </div>
));

const Link = memo((props: ButtonProps & Props) => (
    <LinkComponent href={props.href} passHref>
        <Button {...props} tag="a"/>
    </LinkComponent>
));

const Stack = memo(({children, alignToBottom, className, style}: PropsWithChildren<LatteClassStyle & GroupProps>) => (
    <div className={`${alignToBottom ? styles.textButtonStackAlignToBottom : styles.textButtonStack} ${className || ""}`} style={style}>
        {children}
    </div>
));

export default Object.assign(Button, {
    Grid,
    Group,
    Link,
    Stack
});
