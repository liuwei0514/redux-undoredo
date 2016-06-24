!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.reduxUndoredo=e():t.reduxUndoredo=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},u=r(1),f=n(u),p=r(4),c=n(p),i=function(t,e){var r="undefined"==typeof t?"undefined":o(t),n="undefined"==typeof e?"undefined":o(e),u=void 0,p=void 0;if(r!==n)return!1;switch(r){case"object":return Array.isArray(t)?(0,f["default"])(t,e,{strict:!0}):(u=(0,c["default"])(t),p=(0,c["default"])(e),JSON.stringify(u)===JSON.stringify(p));default:return t===e}},s=function(t,e){var r={past:[],present:t,future:[]},n=function(){var n=arguments.length<=0||void 0===arguments[0]?t:arguments[0],o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if(e.indexOf(o.type)!==-1)return n;switch(o.type){case"UNDO":return r.past.length?(r.future.unshift(r.present),r.present=r.past.pop(),r.present):n;case"REDO":return r.future.length?(r.past.push(r.present),r.present=r.future.shift(),r.present):n;case"RESET":return r={past:[],present:t,future:[]},n;case"@@redux/INIT":return n;default:return i(n,r.present)?n:(r.past.push(r.present),r.future=[],r.present=n,n)}};return n};e["default"]=s},function(t,e,r){function n(t){return null===t||void 0===t}function o(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length||"function"!=typeof t.copy||"function"!=typeof t.slice||t.length>0&&"number"!=typeof t[0])}function u(t,e,r){var u,s;if(n(t)||n(e))return!1;if(t.prototype!==e.prototype)return!1;if(c(t))return!!c(e)&&(t=f.call(t),e=f.call(e),i(t,e,r));if(o(t)){if(!o(e))return!1;if(t.length!==e.length)return!1;for(u=0;u<t.length;u++)if(t[u]!==e[u])return!1;return!0}try{var a=p(t),l=p(e)}catch(y){return!1}if(a.length!=l.length)return!1;for(a.sort(),l.sort(),u=a.length-1;u>=0;u--)if(a[u]!=l[u])return!1;for(u=a.length-1;u>=0;u--)if(s=a[u],!i(t[s],e[s],r))return!1;return typeof t==typeof e}var f=Array.prototype.slice,p=r(3),c=r(2),i=t.exports=function(t,e,r){return r||(r={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?r.strict?t===e:t==e:u(t,e,r))}},function(t,e){function r(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function n(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();e=t.exports=o?r:n,e.supported=r,e.unsupported=n},function(t,e){function r(t){var e=[];for(var r in t)e.push(r);return e}e=t.exports="function"==typeof Object.keys?Object.keys:r,e.shim=r},function(t,e,r){"use strict";var n=r(5);t.exports=function(t,e){if(!n(t))throw new TypeError("Expected a plain object");e=e||{},"function"==typeof e&&(e={compare:e});var r=e.deep,o=[],u=[],f=function(t){var p=o.indexOf(t);if(p!==-1)return u[p];var c={},i=Object.keys(t).sort(e.compare);o.push(t),u.push(c);for(var s=0;s<i.length;s++){var a=i[s],l=t[a];c[a]=r&&n(l)?f(l):l}return c};return f(t)}},function(t,e){"use strict";var r=Object.prototype.toString;t.exports=function(t){var e;return"[object Object]"===r.call(t)&&(e=Object.getPrototypeOf(t),null===e||e===Object.getPrototypeOf({}))}}])});