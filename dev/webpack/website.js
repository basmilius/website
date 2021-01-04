/*
 * Copyright (c) 2017 - 2020 - Bas Milius <bas@mili.us>
 *
 * This file is part of the Latte Framework package.
 *
 * For the full copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

const base = require("../../../../../dev/webpack/webpack.config");
const {merge} = require("webpack-merge");
const {resolve} = require("path");
const {sync} = require("glob-all");

const purgeCSSPlugin = require("purgecss-webpack-plugin");

module.exports = merge(base, {
    entry: {
        "website": "./resource/js/app.js"
    },
    externals: {
        moment: "moment",
        vue: "Vue"
    },
    output: {
        path: resolve(__dirname, "../../dist"),
        publicPath: "/dist/",
        filename: "[name].js"
    },
    plugins: [
        new purgeCSSPlugin({
            paths: sync([
                "./**/*.twig",
                "./**/*.html",
                "./**/*.php"
            ]),
            whitelistPatterns: [
                /(ripple)/,
                /is-*/
            ]
        })
    ]
});
