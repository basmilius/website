const {createHash} = require("crypto");
const generateName = require("css-class-generator");

const names = {};

const sha1 = str => {
    const shasum = createHash("sha1");
    shasum.update(str);

    return shasum.digest("hex").substring(0, 7);
};

const getLocalIdent = ({rootContext, resourcePath}, _, name) => {
    const key = sha1(`${rootContext}//${resourcePath}//${name}`);

    if (key in names) {
        return names[key];
    }

    return names[key] = generateName(parseInt(key, 16));
};

module.exports = () => ({
    poweredByHeader: false,
    reactStrictMode: true,

    pageExtensions: ["tsx"],

    swcMinify: true,

    compiler: {
        reactRemoveProperties: true,
        removeConsole: true
    },

    webpack: (config, {dev, isServer}) => {
        // note(Bas): If preact is up-to-date with react 18, this can be used.
        if (!dev && !isServer) {
            Object.assign(config.resolve.alias, {
                "react/jsx-runtime.js": "preact/compat/jsx-runtime",
                "react": "preact/compat",
                "react-dom": "preact/compat"
            });
        }

        const rules = config.module.rules
            .find(rule => typeof rule.oneOf === 'object')
            .oneOf.filter(rule => Array.isArray(rule.use));

        rules.forEach(rule => rule.use.forEach(moduleLoader => {
            if (!moduleLoader.loader?.includes('css-loader') || moduleLoader.loader?.includes('postcss-loader')) {
                return;
            }

            moduleLoader.options.modules.getLocalIdent = getLocalIdent;
        }));

        return config;
    }
});
