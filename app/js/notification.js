parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A7zP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;const t={on:function(t,e){return t.split(" ").forEach(t=>this.addEventListener(t,e)),this},off:function(t,e){return t.split(" ").forEach(t=>this.removeEventListener(t,e)),this},attr:function(t,e){return void 0===e?this.getAttribute(t):(null==e?this.removeAttribute(t):this.setAttribute(t,e||""),this)}};function e(e,r=document){let n=e instanceof NodeList||Array.isArray(e)?e:e instanceof HTMLElement||e instanceof SVGElement?[e]:r.querySelectorAll(e);return n.length||(n=[]),Object.assign(Array.from(n).map(e=>Object.assign(e,t)),{on:function(t,e){return this.forEach(r=>r.on(t,e)),this},off:function(t,e){return this.forEach(r=>r.off(t,e)),this},attr:function(t,e){return"string"==typeof t&&void 0===e?this[0].attr(t):("object"==typeof t?this.forEach(e=>Object.entries(t).forEach(([t,r])=>e.attr(t,r))):"string"!=typeof t||!e&&null!=e&&""!=e||this.forEach(r=>r.attr(t,e)),this)}})}
},{}],"L9YT":[function(require,module,exports) {
"use strict";var t=n(require("blingblingjs"));function n(t){return t&&t.__esModule?t:{default:t}}function e(t,n){return c(t)||a(t,n)||r(t,n)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function a(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var i,r,o=[],a=!0,c=!1;try{for(e=e.call(t);!(a=(i=e.next()).done)&&(o.push(i.value),!n||o.length!==n);a=!0);}catch(l){c=!0,r=l}finally{try{a||null==e.return||e.return()}finally{if(c)throw r}}return o}}function c(t){if(Array.isArray(t))return t}var l=(0,t.default)(".js-notification-popup"),u=e(l,1),f=u[0],s=(0,t.default)(".js-notification-toggle"),d=e(s,1),b=d[0],h=(0,t.default)(".js-notification-badge"),g=e(h,1),v=g[0],y="json/notifications.html",p=[],m={hide:"d-none"},j=function(t){localStorage.notifications=t.map(function(t){return t.id})},A=function(t){var n="",e=1;t.forEach(function(i){var r="pb-3 mb-3 border-bottom border-bcolor";t.length===e&&(r=""),n+='<li>\n            <a href="'.concat(i.url,'" class="notification-link d-block ').concat(r,' js-notification-link">').concat(i.title,"</a>\n        </li>"),e+=1}),f.innerHTML=n,p=t},S=function(t){void 0!==localStorage.notifications?t.every(function(t){return localStorage.notifications.includes(t.id)})||v.classList.remove(m.hide):v.classList.remove(m.hide)},k=function(){fetch(y).then(function(t){return t.json()}).then(function(t){A(t),S(t)})},w=function(t){t.target.classList.contains("js-notification-link")&&j(p)},L=function(t){t.preventDefault();var n="true"===b.getAttribute("aria-expanded");b.setAttribute("aria-expanded",!n),f.classList.toggle(m.hide)};b.on("click",L),window.addEventListener("load",k),f.on("click",w);
},{"blingblingjs":"A7zP"}]},{},["L9YT"], null)
//# sourceMappingURL=/notification.js.map