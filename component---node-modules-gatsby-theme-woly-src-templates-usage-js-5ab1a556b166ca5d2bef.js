(self.webpackChunkwoly=self.webpackChunkwoly||[]).push([[752],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,n){var r=n(9489),o=n(7067);function a(t,n,i){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},5688:function(e,t,n){"use strict";n.d(t,{Ho:function(){return u},By:function(){return l}});var r=n(8499);function o(e){return e.toLowerCase()}var a=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],i=/[^A-Z0-9]+/gi;function c(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function l(e,t){var n=e.charAt(0),r=e.substr(1).toLowerCase();return t>0&&n>="0"&&n<="9"?"_"+n+r:""+n.toUpperCase()+r}function u(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,r=void 0===n?a:n,l=t.stripRegexp,u=void 0===l?i:l,p=t.transform,s=void 0===p?o:p,f=t.delimiter,d=void 0===f?" ":f,m=c(c(e,r,"$1\0$2"),u,"\0"),b=0,x=m.length;"\0"===m.charAt(b);)b++;for(;"\0"===m.charAt(x-1);)x--;return m.slice(b,x).split("\0").map(s).join(d)}(e,(0,r.pi)({delimiter:"",transform:l},t))}},2977:function(e,t,n){"use strict";n.d(t,{A:function(){return P}});var r=n(6156),o=n(7294),a=n(5444),i=n(8499),c=n(5688);function l(e,t){return 0===t?e.toLowerCase():(0,c.By)(e,t)}var u=n(9925),p=n(9694),s=function(e){var t=e.buttonClicked;return o.createElement(b,{onClick:t},o.createElement("input",{type:"checkbox"}),o.createElement("span",null),o.createElement("span",null),o.createElement("span",null))},f=function(e){var t=e.menu,n=e.isVisible,r=e.buttonClicked,a=p.globalHistory.location.pathname.split("/").filter((function(e){return e})).pop();return o.createElement(o.Fragment,null,o.createElement(s,{buttonClicked:r}),o.createElement(x,{isVisible:n},t.map((function(e){return o.createElement(d,{key:e.name,group:e,activeMenu:a})}))))},d=function(e){var t=e.group,n=e.activeMenu;return o.createElement("div",null,o.createElement(g,null,t.name),o.createElement(v,null,Object.keys(t.components).map((function(e){return o.createElement(m,{key:e,name:e,groupItems:t.components[e],activeMenu:n})}))))},m=function(e){var t=e.name,n=e.groupItems,r=e.activeMenu;return o.createElement(o.Fragment,null,o.createElement(h,null,t),n.map((function(e){return o.createElement(y,{key:e.id,active:e.name===r},o.createElement(a.rU,{to:e.path},e.name))})))},b=u.ZP.div.withConfig({componentId:"sc-1s9fl72-0"})(["display:block;position:fixed;top:20px;left:25px;height:30px;z-index:2;outline:none;display:none;user-select:none;input{display:block;width:40px;height:32px;position:absolute;top:-7px;left:-5px;cursor:pointer;opacity:0;z-index:2;-webkit-touch-callout:none;}span{display:block;width:33px;height:4px;margin-bottom:5px;position:relative;background:var(--highlight-color);border-radius:3px;z-index:1;transform-origin:4px 0px;transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1),background 0.5s cubic-bezier(0.77,0.2,0.05,1),opacity 0.55s ease;}input:checked ~ span:nth-child(2){transform:rotate(45deg) translate(-2px,-2px);opacity:1;}input:checked ~ span:nth-child(3){opacity:0;transform:rotate(0deg) scale(0.2,0.2);}input:checked ~ span:nth-child(4){transform:rotate(-45deg) translate(0,-4px);opacity:1;}@media screen and (max-width:768px){display:block;}"]),x=(u.ZP.div.withConfig({componentId:"sc-1s9fl72-1"})(["@media screen and (max-width:768px){display:",";}"],(function(e){return e.isVisible?"flex":"none"})),u.ZP.nav.withConfig({componentId:"sc-1s9fl72-2"})(["display:flex;flex-direction:column;padding:1rem;z-index:1;height:100%;max-height:100vh;overflow:auto;box-sizing:border-box;position:fixed;background:#fff;@media screen and (max-width:768px){width:100%;padding:0;margin:50px 15px;top:0;left:0;display:",";position:inherit;}"],(function(e){return e.isVisible?"block":"none"}))),g=u.ZP.h3.withConfig({componentId:"sc-1s9fl72-3"})(["text-transform:capitalize;font-weight:300;border-bottom:1px solid var(--base);padding:0 0 10px 0;margin-bottom:0px;margin-top:20px;"]),h=u.ZP.h4.withConfig({componentId:"sc-1s9fl72-4"})(["padding:0.5rem 5rem 0.5rem 0.5rem;margin-bottom:0px;"]),v=u.ZP.ul.withConfig({componentId:"sc-1s9fl72-5"})(["padding:0;"]),y=u.ZP.li.withConfig({componentId:"sc-1s9fl72-6"})(["list-style-type:none;display:flex;flex-direction:column;a{text-decoration:none;color:var(--highlight-color);display:inline-block;padding:0.5rem 5rem 0.5rem 0.5rem;background-color:transparent;font-weight:300;background-color:",";color:",";&:hover{background-color:",";color:var(--highlight-color);color:",";transition:0.25s;}}"],(function(e){return e.active?"var(--accent)":"transparent"}),(function(e){return e.active?"var(--main)":"var(--highlight-color);"}),(function(e){return e.active?"var(--accent)":"var(--secondary)"}),(function(e){return e.active?"var(--main)":"var(--highlight-color);"})),w=n(1696);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P=function(e){var t=e.children,n=(0,a.K2)("1297603051"),r=o.useState(!1),i=r[0],c=r[1],l=o.useCallback((function(){c(!i)}),[i]);return o.createElement(_,null,o.createElement(f,{menu:C(n),isVisible:i,buttonClicked:l}),o.createElement(A,{isVisible:!i},t))};function C(e){for(var t,n,r,o={},a=E(e.pages.components);!(t=a()).done;){var u=t.value,p=u.meta,s=p.package,f=p.name,d=p.category;o[s]||(o[s]={}),o[s][d]||(o[s][d]=[]);var m=e.pathPrefix||"";o[s][d].push(O(O({},u.meta),{},{path:m+w.paths.componentPage(u.meta),id:u.id,title:(n=f,r=void 0,void 0===r&&(r={}),(0,c.Ho)(n,(0,i.pi)({transform:l},r)))}))}return Object.keys(o).reduce((function(e,t){return e.push({name:t,components:o[t]}),e}),[])}var _=u.ZP.div.withConfig({componentId:"sc-1yhkdrf-0"})(["display:flex;flex-wrap:nowrap;font-family:'Roboto',sans-serif;"]),A=u.ZP.main.withConfig({componentId:"sc-1yhkdrf-1"})(["display:flex;flex-direction:column;padding:40px 0 0 240px;box-sizing:border-box;width:100%;max-width:1200px;@media screen and (max-width:768px){padding:40px 0 0 15px;display:",";}"],(function(e){return e.isVisible?"flex":"none"}))},1696:function(e){e.exports={paths:{componentPage:function(e){return"/"+e.package+"/"+e.category+"/"+e.name}}}},5228:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(7294),o=n(9394),a=n(2977),i=n(9925),c=function(e){var t=e.data,n=r.useState(0),o=n[0],a=n[1];if(0===t.length)return console.warn("pass at least one tab data element"),null;if(1===t.length){var i=t[0],c=i.header,s=i.content,f=i.meta;return r.createElement(r.Fragment,null,null==c?void 0:c(f),s)}return r.createElement(r.Fragment,null,r.createElement(l,null,t.map((function(e,t){var n=e.label;return r.createElement(u,{key:n,"data-active":t===o,onClick:function(){return a(t)}},n)}))),function(){var e=t[o];if(e){var n=e.meta,a=e.content,i=e.header;return r.createElement(p,null,null==i?void 0:i(n),a)}return null}())},l=i.ZP.div.withConfig({componentId:"sc-11qkbqs-0"})(["display:flex;& > * + *{margin-left:1rem;}"]),u=i.ZP.button.withConfig({componentId:"sc-11qkbqs-1"})(["padding:9px 15px;font-size:inherit;font-family:inherit;background:none;border:none;border-bottom:var(--highlight-border);&[data-active='true']{border-bottom-color:var(--accent);}"]),p=i.ZP.div.withConfig({componentId:"sc-11qkbqs-2"})(["padding-top:12px;&[data-active='false']{display:none;}"]),s=n(5688),f=[{code:"usage",label:"Usage",renderHeader:function(e){return r.createElement("pre",null,"import ","{"," ",(0,s.Ho)(e.name)," ","}",' from "',e.package,'";')}},{code:"specification",label:"Specification"},{code:"state",label:"State Map"}],d=function(e){var t=e.pageContext,n=function(e){var t=e.pages;return e.mapper.reduce((function(e,n){var a=n.code,i=n.label,c=n.renderHeader,l=t.find((function(e){return e.type===a}));return l&&e.push({label:i,meta:l.meta,content:r.createElement(o.MDXRenderer,null,l.body),header:c}),e}),[])}({pages:t.pages,mapper:f});return r.createElement(a.A,null,r.createElement("div",null,r.createElement("h2",null,t.name),r.createElement(c,{data:n})))}},9394:function(e,t,n){var r=n(6660);e.exports={MDXRenderer:r}},6660:function(e,t,n){var r=n(9100),o=n(319),a=n(9713),i=n(7316),c=["scope","children"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=n(7294),s=n(3497).mdx,f=n(2197).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=i(e,c),l=f(t),d=p.useMemo((function(){if(!n)return null;var e=u({React:p,mdx:s},l),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return p.createElement(d,u({},a))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-woly-src-templates-usage-js-5ab1a556b166ca5d2bef.js.map