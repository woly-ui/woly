(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},ANxX:function(e,t){e.exports={paths:{componentUsage:function(e){return"/package/"+e.package+"/component/"+e.name}}}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},"G0f/":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e){return e.toLowerCase()}var a=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],c=/[^A-Z0-9]+/gi;function i(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function u(e,t){var n=e.charAt(0),r=e.substr(1).toLowerCase();return t>0&&n>="0"&&n<="9"?"_"+n+r:""+n.toUpperCase()+r}function l(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,r=void 0===n?a:n,u=t.stripRegexp,l=void 0===u?c:u,p=t.transform,f=void 0===p?o:p,s=t.delimiter,m=void 0===s?" ":s,y=i(i(e,r,"$1\0$2"),l,"\0"),d=0,b=y.length;"\0"===y.charAt(d);)d++;for(;"\0"===y.charAt(b-1);)b--;return y.slice(d,b).split("\0").map(f).join(m)}(e,r({delimiter:"",transform:u},t))}function p(e,t){return 0===t?e.toLowerCase():u(e,t)}function f(e,t){return void 0===t&&(t={}),l(e,r({transform:p},t))}},IWfH:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("rePB"),o=n("q1tI"),a=n.n(o),c=n("Wbzz"),i=n("G0f/"),u=n("vOnD"),l=function(e){var t=e.menu;return a.a.createElement(f,null,a.a.createElement("h3",null,"Components"),t.map((function(e){return a.a.createElement(p,{key:e.name,group:e})})))},p=function(e){var t=e.group;return a.a.createElement("div",null,a.a.createElement("h4",null,t.name),a.a.createElement("ul",null,t.components.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(c.a,{to:e.path},e.name))}))))},f=u.a.nav.withConfig({componentId:"sc-1s9fl72-0"})(["display:flex;flex-direction:column;padding:1rem;padding-right:3rem;"]),s=n("ANxX");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=function(e){var t=e.children,n=Object(c.c)("429273075");return a.a.createElement(h,null,a.a.createElement(l,{menu:g(n)}),a.a.createElement(O,null,t))};function g(e){for(var t,n={},r=d(e.mdx.components);!(t=r()).done;){var o=t.value;n[o.meta.package]||(n[o.meta.package]=[]),n[o.meta.package].push(y(y({},o.meta),{},{path:s.paths.componentUsage(o.meta),id:o.id,title:Object(i.a)(o.meta.name)}))}return Object.keys(n).reduce((function(e,t){return e.push({name:t,components:n[t]}),e}),[])}var h=u.a.div.withConfig({componentId:"sc-1yhkdrf-0"})(["display:flex;flex-wrap:nowrap;"]),O=u.a.main.withConfig({componentId:"sc-1yhkdrf-1"})(["display:flex;flex-direction:column;"])},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},J5ZQ:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return u}));var r=n("q1tI"),o=n.n(r),a=n("A2+M"),c=n("G0f/"),i=n("IWfH"),u="1345001494";t.default=function(e){var t,n=e.data,r=(e.pageContext,n.usage.frontmatter);return o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement("h2",null,r.name),o.a.createElement("h3",null,"Use it"),o.a.createElement("pre",null,"import ","{"," ",Object(c.a)(r.name)," ","}",' from "',r.package,'";'),o.a.createElement("h3",null,"Installation"),o.a.createElement("pre",null,"npm install "+(t=r.package)+"\n# or\nyarn add "+t),o.a.createElement(a.MDXRenderer,null,n.usage.body)))}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},X8hv:function(e,t,n){var r=n("sXyB"),o=n("RIqP"),a=n("lSNA"),c=n("8OQS");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=n("q1tI"),p=n("7ljp"),f=p.useMDXComponents,s=p.mdx,m=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,a=e.children,i=c(e,["scope","components","children"]),p=f(n),y=m(t),d=l.useMemo((function(){if(!a)return null;var e=u({React:l,mdx:s},y),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+a])).apply(void 0,[{}].concat(o(n)))}),[a,t]);return l.createElement(d,u({components:p},i))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},sXyB:function(e,t,n){var r=n("SksO"),o=n("b48C");function a(t,n,c){return o()?e.exports=a=Reflect.construct:e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},a.apply(null,arguments)}e.exports=a}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-woly-src-templates-usage-js-44003c312a320355d5c0.js.map