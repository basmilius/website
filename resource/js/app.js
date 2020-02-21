/*
 * Copyright (c) 2017 - 2020 - Bas Milius <bas@mili.us>
 *
 * This file is part of the Latte Framework package.
 *
 * For the full copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

import "@bybas/latte-ui/src/scss/app.scss";
import "../scss/app.scss";

import LatteUI from "@bybas/latte-ui";
import Vue from "vue";

Vue.use(LatteUI, {
	emojiEnabled: false
});

new Vue({el: "main#app"});
