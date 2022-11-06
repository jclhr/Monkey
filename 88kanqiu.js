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
    try{
        document.querySelector('.sitead').remove();
    }
    catch(err){
        txt="本页有一个错误。\n\n";
		txt+="错误描述：" + err.message + "\n\n";
		txt+="点击确定继续。\n\n";
		alert(txt);
		console.log(txt);
    }

})();
