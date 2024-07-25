import type { NextConfig } from 'next';
import generateName from 'css-class-generator';

const names = {};

const getLocalIdent = ({resourcePath}: { resourcePath: string; }, _: string, name: string): string => {
    const key = `${resourcePath}::${name}`;

    if (key in names) {
        return names[key];
    }

    return names[key] = generateName(Object.values(names).length);
};

const config: NextConfig = {
    poweredByHeader: false,
    reactStrictMode: true,

    compiler: {
        reactRemoveProperties: true,
        removeConsole: false
    },

    experimental: {
        cssChunking: 'strict',
        reactCompiler: true
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
