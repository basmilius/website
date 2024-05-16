import { createHash } from 'node:crypto';
import generateName from 'css-class-generator';

const names = {};

const sha1 = str => {
    const shasum = createHash('sha1');
    shasum.update(str);

    return shasum.digest('hex').substring(0, 7);
};

const getLocalIdent = ({rootContext, resourcePath}, _, name) => {
    const key = sha1(`${rootContext}//${resourcePath}//${name}`);

    if (key in names) {
        return names[key];
    }

    return names[key] = generateName(parseInt(key, 16));
};

/** @type {import('next').NextConfig} */
const config = {
    poweredByHeader: false,
    reactStrictMode: true,

    compiler: {
        reactRemoveProperties: true,
        removeConsole: true
    },

    output: 'export',

    webpack: (config, {}) => {
        const rules = config.module.rules
            .find(rule => typeof rule.oneOf === 'object')
            .oneOf.filter(rule => Array.isArray(rule.use));

        rules.forEach(rule => rule.use.forEach(moduleLoader => {
            if (!moduleLoader.loader?.includes('css-loader') || moduleLoader.loader?.includes('postcss-loader')) {
                return;
            }

            if (!moduleLoader.options.modules) {
                return;
            }

            moduleLoader.options.modules.getLocalIdent = getLocalIdent;
        }));

        return config;
    }
};

export default config;
