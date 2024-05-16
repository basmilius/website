import { AriaAttributes } from 'react';

export default function (props: AriaAttributes, defaults?: AriaAttributes): AriaAttributes {
    const attrs: AriaAttributes = defaults || {};

    for (let attr in props) {
        if (!attr.startsWith('aria-')) {
            continue;
        }

        attrs[attr] = props[attr];
    }

    return attrs;
}
