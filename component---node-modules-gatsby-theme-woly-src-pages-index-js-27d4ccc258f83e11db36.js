(self.webpackChunkwoly=self.webpackChunkwoly||[]).push([[414],{5688:function(e,t,n){"use strict";n.d(t,{Ho:function(){return p},By:function(){return l}});var r=n(8499);function o(e){return e.toLowerCase()}var i=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],a=/[^A-Z0-9]+/gi;function c(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function l(e,t){var n=e.charAt(0),r=e.substr(1).toLowerCase();return t>0&&n>="0"&&n<="9"?"_"+n+r:""+n.toUpperCase()+r}function p(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,r=void 0===n?i:n,l=t.stripRegexp,p=void 0===l?a:l,u=t.transform,s=void 0===u?o:u,d=t.delimiter,f=void 0===d?" ":d,m=c(c(e,r,"$1\0$2"),p,"\0"),h=0,g=m.length;"\0"===m.charAt(h);)h++;for(;"\0"===m.charAt(g-1);)g--;return m.slice(h,g).split("\0").map(s).join(f)}(e,(0,r.pi)({delimiter:"",transform:l},t))}},2977:function(e,t,n){"use strict";n.d(t,{A:function(){return P}});var r=n(6156),o=n(7294),i=n(5444),a=n(8499),c=n(5688);function l(e,t){return 0===t?e.toLowerCase():(0,c.By)(e,t)}var p=n(9925),u=n(9694),s=function(e){var t=e.buttonClicked;return o.createElement(h,{onClick:t},o.createElement("input",{type:"checkbox"}),o.createElement("span",null),o.createElement("span",null),o.createElement("span",null))},d=function(e){var t=e.menu,n=e.isVisible,r=e.buttonClicked,i=u.globalHistory.location.pathname.split("/").filter((function(e){return e})).pop();return o.createElement(o.Fragment,null,o.createElement(s,{buttonClicked:r}),o.createElement(g,{isVisible:n},t.map((function(e){return o.createElement(f,{key:e.name,group:e,activeMenu:i})}))))},f=function(e){var t=e.group,n=e.activeMenu;return o.createElement("div",null,o.createElement(b,null,t.name),o.createElement(v,null,Object.keys(t.components).map((function(e){return o.createElement(m,{key:e,name:e,groupItems:t.components[e],activeMenu:n})}))))},m=function(e){var t=e.name,n=e.groupItems,r=e.activeMenu;return o.createElement(o.Fragment,null,o.createElement(x,null,t),n.map((function(e){return o.createElement(y,{key:e.id,active:e.name===r},o.createElement(i.rU,{to:e.path},e.name))})))},h=p.ZP.div.withConfig({componentId:"sc-1s9fl72-0"})(["display:block;position:fixed;top:20px;left:25px;height:30px;z-index:2;outline:none;display:none;user-select:none;input{display:block;width:40px;height:32px;position:absolute;top:-7px;left:-5px;cursor:pointer;opacity:0;z-index:2;-webkit-touch-callout:none;}span{display:block;width:33px;height:4px;margin-bottom:5px;position:relative;background:var(--highlight-color);border-radius:3px;z-index:1;transform-origin:4px 0px;transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1),background 0.5s cubic-bezier(0.77,0.2,0.05,1),opacity 0.55s ease;}input:checked ~ span:nth-child(2){transform:rotate(45deg) translate(-2px,-2px);opacity:1;}input:checked ~ span:nth-child(3){opacity:0;transform:rotate(0deg) scale(0.2,0.2);}input:checked ~ span:nth-child(4){transform:rotate(-45deg) translate(0,-4px);opacity:1;}@media screen and (max-width:768px){display:block;}"]),g=(p.ZP.div.withConfig({componentId:"sc-1s9fl72-1"})(["@media screen and (max-width:768px){display:",";}"],(function(e){return e.isVisible?"flex":"none"})),p.ZP.nav.withConfig({componentId:"sc-1s9fl72-2"})(["display:flex;flex-direction:column;padding:1rem;z-index:1;height:100%;max-height:100vh;overflow:auto;box-sizing:border-box;position:fixed;background:#fff;@media screen and (max-width:768px){width:100%;padding:0;margin:50px 15px;top:0;left:0;display:",";position:inherit;}"],(function(e){return e.isVisible?"block":"none"}))),b=p.ZP.h3.withConfig({componentId:"sc-1s9fl72-3"})(["text-transform:capitalize;font-weight:300;border-bottom:1px solid var(--base);padding:0 0 10px 0;margin-bottom:0px;margin-top:20px;"]),x=p.ZP.h4.withConfig({componentId:"sc-1s9fl72-4"})(["padding:0.5rem 5rem 0.5rem 0.5rem;margin-bottom:0px;"]),v=p.ZP.ul.withConfig({componentId:"sc-1s9fl72-5"})(["padding:0;"]),y=p.ZP.li.withConfig({componentId:"sc-1s9fl72-6"})(["list-style-type:none;display:flex;flex-direction:column;a{text-decoration:none;color:var(--highlight-color);display:inline-block;padding:0.5rem 5rem 0.5rem 0.5rem;background-color:transparent;font-weight:300;background-color:",";color:",";&:hover{background-color:",";color:var(--highlight-color);color:",";transition:0.25s;}}"],(function(e){return e.active?"var(--accent)":"transparent"}),(function(e){return e.active?"var(--main)":"var(--highlight-color);"}),(function(e){return e.active?"var(--accent)":"var(--secondary)"}),(function(e){return e.active?"var(--main)":"var(--highlight-color);"})),w=n(1696);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P=function(e){var t=e.children,n=(0,i.K2)("1297603051"),r=o.useState(!1),a=r[0],c=r[1],l=o.useCallback((function(){c(!a)}),[a]);return o.createElement(A,null,o.createElement(d,{menu:j(n),isVisible:a,buttonClicked:l}),o.createElement(I,{isVisible:!a},t))};function j(e){for(var t,n,r,o={},i=C(e.pages.components);!(t=i()).done;){var p=t.value,u=p.meta,s=u.package,d=u.name,f=u.category;o[s]||(o[s]={}),o[s][f]||(o[s][f]=[]);var m=e.pathPrefix||"";o[s][f].push(E(E({},p.meta),{},{path:m+w.paths.componentPage(p.meta),id:p.id,title:(n=d,r=void 0,void 0===r&&(r={}),(0,c.Ho)(n,(0,a.pi)({transform:l},r)))}))}return Object.keys(o).reduce((function(e,t){return e.push({name:t,components:o[t]}),e}),[])}var A=p.ZP.div.withConfig({componentId:"sc-1yhkdrf-0"})(["display:flex;flex-wrap:nowrap;font-family:'Roboto',sans-serif;"]),I=p.ZP.main.withConfig({componentId:"sc-1yhkdrf-1"})(["display:flex;flex-direction:column;padding:40px 0 0 240px;box-sizing:border-box;width:100%;max-width:1200px;@media screen and (max-width:768px){padding:40px 0 0 15px;display:",";}"],(function(e){return e.isVisible?"flex":"none"}))},6535:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(7294),o=n(2977);function i(){return r.createElement(o.A,null,"Homepage in a user's site")}},1696:function(e){e.exports={paths:{componentPage:function(e){return"/"+e.package+"/"+e.category+"/"+e.name}}}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-woly-src-pages-index-js-27d4ccc258f83e11db36.js.map