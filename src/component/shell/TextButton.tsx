import styles from './TextButton.module.scss';

import { Link as LinkComponent } from 'next-view-transitions';
import { AriaAttributes, CSSProperties, ElementType, PropsWithChildren, ReactNode } from 'react';
import classNames from 'classnames';
import useAriaAttributes from '@/hook/useAriaAttributes';
import Icon from './Icon';

const Button = ({className, style, tag: Tag = 'button', buttonType = 'button', download, href, rel, target, label, icon, iconAfter, isDisabled, isSmall, onClick, ...props}: Props) => {
    const ariaAttributes = useAriaAttributes(props, {
        'aria-disabled': isDisabled
    });

    return (
        <Tag
            {...ariaAttributes}
            {...(Tag === 'a' || Tag === LinkComponent ? {download, href, rel, target} : {type: buttonType})}
            className={classNames(
                className,
                isSmall ? styles.textButtonSmall : styles.textButton
            )}
            style={style}
            disabled={isDisabled}
            onClick={onClick}>
            {typeof icon === 'string' && (
                <div className={styles.textButtonIcon}>
                    <Icon name={icon}/>
                </div>
            )}

            <span>{label}</span>

            {typeof iconAfter === 'string' && (
                <div className={styles.textButtonIcon}>
                    <Icon name={iconAfter}/>
                </div>
            )}
        </Tag>
    );
};

const Grid = ({children, className, style}: PropsWithChildren<ContainerProps>) => (
    <div
        className={classNames(styles.textButtonGrid, className)}
        style={style}>
        {children}
    </div>
);

const Group = ({children, alignToBottom, className, style}: PropsWithChildren<GroupProps>) => (
    <div
        className={classNames('tal', alignToBottom ? styles.textButtonGroupAlignToBottom : styles.textButtonGroup, className)}
        style={style}>
        {children}
    </div>
);

const Link = (props: Props) => (
    <Button
        {...props}
        tag={LinkComponent}/>
);

const Stack = ({children, alignToBottom, className, style}: PropsWithChildren<GroupProps>) => (
    <div
        className={classNames('tal', alignToBottom ? styles.textButtonStackAlignToBottom : styles.textButtonStack, className)}
        style={style}>
        {children}
    </div>
);

export default Object.assign(Button, {
    Grid,
    Group,
    Link,
    Stack
});

type Props = AriaAttributes & {
    readonly buttonType?: 'submit' | 'button' | 'reset';
    readonly icon?: string | ReactNode;
    readonly iconAfter?: string | ReactNode;
    readonly isDisabled?: boolean;
    readonly isSmall?: boolean;
    readonly label?: string;
    readonly tag?: ElementType;

    readonly className?: string;
    readonly style?: CSSProperties;

    readonly download?: string;
    readonly href?: string;
    readonly rel?: string;
    readonly target?: string;

    readonly onClick?: ((evt: MouseEvent) => void) | ((evt: MouseEvent) => Promise<void>);
};

type ContainerProps = {
    readonly className?: string;
    readonly style?: CSSProperties;
};

type GroupProps = ContainerProps & {
    readonly alignToBottom?: boolean;
};
