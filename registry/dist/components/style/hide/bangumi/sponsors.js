!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["style/hide/bangumi/sponsors"]=e():t["style/hide/bangumi/sponsors"]=e()}(self,(function(){return function(){var t,e,n={85:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,"#sponsor_module, #paybar_module {\n  display: none !important;\n}",""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var u=this[i][0];null!=u&&(r[u]=!0)}for(var c=0;c<t.length;c++){var f=[].concat(t[c]);o&&r[f[0]]||(n&&(f[2]?f[2]="".concat(n," and ").concat(f[2]):f[2]=n),e.push(f))}},e}},346:function(t,e,n){var o=n(85);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var u={};t=t||[null,e({}),e([]),e(e)];for(var c=2&o&&n;"object"==typeof c&&!~t.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach((function(t){u[t]=function(){return n[t]}}));return u.default=function(){return n},r.d(i,u),i},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return n}});var t=coreApis.componentApis.styledComponent,e=coreApis.utils.urls;const n={displayName:"隐藏番剧承包",tags:[componentsTags.style],...(0,t.toggleStyle)("hideBangumiSponsors",(()=>Promise.resolve().then(r.t.bind(r,346,23)))),urlInclude:e.bangumiUrls,description:{"zh-CN":"隐藏番剧页面下方的承包榜, 以及右边的承包按钮."},commitHash:"ecb4d190d139578e025c4c356fcdf7ec5070ce3e",coreVersion:"2.1.7"}}(),i=i.component}()}));