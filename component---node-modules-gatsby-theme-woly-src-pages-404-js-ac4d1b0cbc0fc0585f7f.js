(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{ANxX:function(e,t){e.exports={paths:{componentUsage:function(e){return"/package/"+e.package+"/component/"+e.name}}}},"G0f/":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e){return e.toLowerCase()}var a=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],c=/[^A-Z0-9]+/gi;function i(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function u(e,t){var n=e.charAt(0),r=e.substr(1).toLowerCase();return t>0&&n>="0"&&n<="9"?"_"+n+r:""+n.toUpperCase()+r}function l(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,r=void 0===n?a:n,u=t.stripRegexp,l=void 0===u?c:u,f=t.transform,p=void 0===f?o:f,s=t.delimiter,m=void 0===s?" ":s,d=i(i(e,r,"$1\0$2"),l,"\0"),g=0,v=d.length;"\0"===d.charAt(g);)g++;for(;"\0"===d.charAt(v-1);)v--;return d.slice(g,v).split("\0").map(p).join(m)}(e,r({delimiter:"",transform:u},t))}function f(e,t){return 0===t?e.toLowerCase():u(e,t)}function p(e,t){return void 0===t&&(t={}),l(e,r({transform:f},t))}},GZrc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("q1tI"),o=n.n(r),a=n("IWfH");function c(){return o.a.createElement(a.a,null,"Page Not Found")}},IWfH:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("rePB"),o=n("q1tI"),a=n.n(o),c=n("Wbzz"),i=n("G0f/"),u=n("vOnD"),l=function(e){var t=e.menu;return a.a.createElement(p,null,a.a.createElement("h3",null,"Components"),t.map((function(e){return a.a.createElement(f,{key:e.name,group:e})})))},f=function(e){var t=e.group;return a.a.createElement("div",null,a.a.createElement("h4",null,t.name),a.a.createElement("ul",null,t.components.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(c.a,{to:e.path},e.name))}))))},p=u.a.nav.withConfig({componentId:"sc-1s9fl72-0"})(["display:flex;flex-direction:column;padding:1rem;padding-right:3rem;"]),s=n("ANxX");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(e){var t=e.children,n=Object(c.c)("429273075");return a.a.createElement(h,null,a.a.createElement(l,{menu:b(n)}),a.a.createElement(O,null,t))};function b(e){for(var t,n={},r=g(e.mdx.components);!(t=r()).done;){var o=t.value;n[o.meta.package]||(n[o.meta.package]=[]),n[o.meta.package].push(d(d({},o.meta),{},{path:s.paths.componentUsage(o.meta),id:o.id,title:Object(i.a)(o.meta.name)}))}return Object.keys(n).reduce((function(e,t){return e.push({name:t,components:n[t]}),e}),[])}var h=u.a.div.withConfig({componentId:"sc-1yhkdrf-0"})(["display:flex;flex-wrap:nowrap;"]),O=u.a.main.withConfig({componentId:"sc-1yhkdrf-1"})(["display:flex;flex-direction:column;"])}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-woly-src-pages-404-js-ac4d1b0cbc0fc0585f7f.js.map