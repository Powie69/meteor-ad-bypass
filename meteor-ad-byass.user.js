// ==UserScript==
// @name         Meteor ad bypass
// @source       https://github.com/Powie69/meteor-ad-bypass
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @description  Bypasses the ad page. redirects you to the download page instantly.
// @author       Powie69
// @match        https://meteorclient.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=meteorclient.com
// @run-at       document-end
// @updateURL    https://github.com/Powie69/meteor-ad-bypass/raw/refs/heads/main/meteor-ad-bypass.min.user.js
// @downloadURL  https://github.com/Powie69/meteor-ad-bypass/raw/refs/heads/main/meteor-ad-bypass.min.user.js
// @supportURL   https://github.com/Powie69/meteor-ad-bypass/issues
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function replaceLink() {
        if (window.location.pathname !== "/") return;
        document.querySelector('a[href="https://adfoc.us/81926897739205"]').removeAttribute('target');
        document.querySelector('a[href="https://adfoc.us/81926897739205"]').href = '/api/download';
        console.log('%cEpic hack successful 😎', 'color: green; font-size: 4.209rem;');
        console.log('%chttps://github.com/Powie69/meteor-ad-bypass', 'font-size: 1.333rem;')
    }

    replaceLink();

    new MutationObserver(replaceLink).observe(document.body, { childList: true, subtree: true });
})();