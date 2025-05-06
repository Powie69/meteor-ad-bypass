// ==UserScript==
// @name         Metoer ad bypass
// @source       https://github.com/Powie69/meteor-ad-bypass
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Bypasses the ad page. redirects you to the download page instantly.
// @author       Powie69
// @match        https://meteorclient.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=meteorclient.com
// @grant        none
// ==/UserScript==

!function(){"use strict";function e(){"/"===window.location.pathname&&(document.querySelector('a[href="https://adfoc.us/81926897739205"]').removeAttribute("target"),document.querySelector('a[href="https://adfoc.us/81926897739205"]').href="/api/download",console.log("%cEpic hack successful \uD83D\uDE0E","color: green; font-size: 4.209rem;"),console.log("%chttps://github.com/Powie69/meteor-ad-bypass","font-size: 1.333rem;"))}e(),new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0})}();