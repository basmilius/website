import classNames from 'classnames';

import { AriaAttributes, cloneElement, CSSProperties, type ReactElement } from 'react';
import { renderIcon } from '@/logic/font-awesome';

type Props = AriaAttributes & {
    readonly className?: string;
    readonly name: string;
    readonly style?: CSSProperties;
};

export default ({className, style, name}: Props) => {
    const result: ReactElement<Props> = renderIcon(name) as ReactElement<Props>;

    if (!result) {
        return null;
    }

    return cloneElement(result, {
        className: classNames(result.props.className, className),
        style
    });
};
