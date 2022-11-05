// ==UserScript==
// @name         Remove_Live
// @name:zh-CN   去除B站直播间播放器
// @namespace    https://blog.chrxw.com
// @version      1.1
// @description  去除B站多余的直播播放器（滑稽）
// @description:zh-cn hai
// @author       Chr_
// @include      https://live.bilibili.com/*
// @license      AGPL-3.0
// @icon         https://blog.chrxw.com/favicon.ico
// ==/UserScript==

(() => {
    "use strict";
    //去除播放器的开关
    let VEnable = localStorage.getItem("VEnable") === "true";
    if (VEnable) {
        setTimeout(() => {
            document.getElementById("live-player").remove();
        }, 3000);
    }
    let btnArea = document.querySelector(".right-ctnr");
    let btn = document.createElement("button");
    btn.textContent = VEnable ? "恢复播放器" : "移除播放器";
    btn.addEventListener("click", () => {
        VEnable = !VEnable;
        localStorage.setItem("VEnable", VEnable);
        btn.textContent = VEnable ? "恢复播放器" : "移除播放器";
        if (VEnable) {
            document.getElementById("live-player").remove();
        } else {
            location.reload();
        }
    });
    btnArea.insertBefore(btn, btnArea.children[0]);
})();

// ==UserScript==
// @name                Remove dmhy.org AD
// @name:zh-CN          动漫花园dmhy.org广告去除插件
// @version             1.3
// @description         Remove dmhy.org Annoy AD
// @description:zh-CN   去除动漫花园上的广告
// @author              terry
// @require             https://code.jquery.com/jquery-3.6.0.min.js
// @include             https://*.dmhy.org/*
// @include             http*://dmhy.anoneko.com/*
// @icon                https://share.dmhy.org/images/sitelogo.gif
// @license             MIT
// @run-at              document-body
// @namespace https://greasyfork.org/users/859967
// ==/UserScript==
 
const filters = [
    '[class*="kiwi"]',
    '[href*="taobao"]',
    'a:not([href^="/"]):not([href*="dmhy.org"]):not([href*="magnet"]):not([href*="#"]):not([href*="google"])'
];
 
// Use ADBlock way to block some annoy element
(function removeFilters() {
    var $hiddenStyle = $('<style type="text/css"></style>');
    $($('head')[0]).append($hiddenStyle);
    $hiddenStyle.append(filters + "{display: none !important; visibility: hidden !important;}");
})();
 
// removeBackgroundAd
document.body.removeAttribute("data-href");
document.body.removeAttribute("style");
 
// set background to bar Color
$(document.body).css("background-color", $(".navbar").css("background-color"));
 
(function removeTopAds() {
    var topDiv = document.getElementsByClassName("logoCon")[0];
    var adCount = topDiv.children.length - 1;
 
    while (adCount > 0) {
        topDiv.removeChild(topDiv.lastElementChild);
        adCount--;
    }
})();
