import classNames from 'classnames';

import { AriaAttributes, cloneElement, CSSProperties } from 'react';
import { renderIcon } from '@/logic/font-awesome';

type Props = AriaAttributes & {
    readonly className?: string;
    readonly name: string;
    readonly style?: CSSProperties;
};

export default ({className, style, name}: Props) => {
    const result = renderIcon(name);

    if (!result) {
        return null;
    }

    return cloneElement(result, {
        className: classNames(result.props.className, className),
        style
    });
};
