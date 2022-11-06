// ==UserScript==
// @name         88kanqiu
// @namespace    http://88kanqiu.fun/
// @version      0.3
// @description  88kanqiu remove ads
// @description:zh-cn hai
// @author       jclhr
// @match        http://www.88kanqiu.tv/*
// @icon         https://greasyfork.org/vite/assets/blacklogo96.e0c2c761.png
// @grant        none
// @license      GPL-3.0-only
// ==/UserScript==

(() => {
    "use strict";
    document.getElementById("sidebar-wechat").remove();
    document.querySelector('.sss-container').remove();
})();
