(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1250:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(118),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(145),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(53),_storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(449),_storybook_theming__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6),_layout_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(453),_layout_template__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(452);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addParameters)({options:{showPanel:!0,panelPosition:"right",theme:_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.themes.light}}),Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.configureActions)({depth:20,limit:5});var _ref=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layout_styles__WEBPACK_IMPORTED_MODULE_6__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)((function(story){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,_ref,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layout_template__WEBPACK_IMPORTED_MODULE_7__.a,null,story()))})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)((function(storyFn,context){return Object(_storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__.withConsole)()(storyFn)(context)})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(__webpack_require__(1295),module)}.call(this,__webpack_require__(1251)(module))},1295:function(module,exports,__webpack_require__){var map={"./ui/atoms/button/story.tsx":1299,"./ui/atoms/input/story.tsx":1300,"./ui/atoms/surface/story.tsx":1301,"./ui/atoms/title/story.tsx":1302};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1295},1299:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(7),dist=__webpack_require__(53),addon_actions_dist=__webpack_require__(145);const Base=Object(styled_components_browser_esm.default)(p=>react.createElement("button",Object.assign({className:p.className,type:p.type||"button"},p),p.left&&react.createElement("span",{"data-icon":"left"},p.left),react.createElement("span",null,p.text),p.right&&react.createElement("span",{"data-icon":"right"},p.right)))`
  --vertical: calc(1px * var(--component-level) * var(--main-level));
  --horizontal: calc(
    var(--const-m) + (1px * var(--main-level)) + var(--vertical)
  );
  --line-height: 24px;
  --gap: calc(
    (1px * var(--main-level)) +
      (1px * var(--main-level) * var(--component-level))
  );

  display: flex;
  flex-wrap: nowrap;
  border-radius: var(--rounding, 4px);
  font-size: var(--font-size, 15px);
  line-height: var(--line-height, 24px);
  padding: var(--vertical, 1rem) var(--horizontal, 0.4rem);

  /* border: 1px solid var(--button-borders, #000000); */
  border: none;
  background-color: var(--button-background, #000000);
  color: var(--button-color, #ffffff);

  &:hover,
  &:focus,
  &:active {
    border-color: var(--button-borders, #000000);
    outline: none;
  }

  & [data-icon] {
    width: var(--line-height, 24px);
    height: var(--line-height, 24px);
  }

  & > *:not(:first-child) {
    margin-left: var(--gap);
  }
`,Primary=Object(styled_components_browser_esm.default)(Base)`
  --button-borders: var(--primary-bg);
  --button-background: var(--primary-bg);
  --button-color: var(--primary-text);
`,Secondary=Object(styled_components_browser_esm.default)(Base)`
  --button-borders: var(--secondary-bg);
  --button-background: var(--secondary-bg);
  --button-color: var(--secondary-text);
`,Destructive=Object(styled_components_browser_esm.default)(Base)`
  --button-borders: var(--destructive-bg);
  --button-background: var(--destructive-bg);
  --button-color: var(--destructive-text);
`;__webpack_require__.d(__webpack_exports__,"modular",(function(){return modular})),__webpack_require__.d(__webpack_exports__,"buttons",(function(){return buttons}));__webpack_exports__.default={title:"Atoms"};const Global=styled_components_browser_esm.default.div`
  --const-m: 6px;

  --main-level: 3;
`,Block=styled_components_browser_esm.default.div`
  & > * + * {
    --gap: calc(
      (1px * var(--main-level)) +
        (1px * var(--main-level) * var(--component-level))
    );
    margin-top: var(--gap, 1rem);
  }
`,block={N:Object(styled_components_browser_esm.default)(Block)`
  --component-level: 0;
`,XS:Object(styled_components_browser_esm.default)(Block)`
  --component-level: 1;
`,S:Object(styled_components_browser_esm.default)(Block)`
  --component-level: 2;
`,M:Object(styled_components_browser_esm.default)(Block)`
  --component-level: 3;
`,L:Object(styled_components_browser_esm.default)(Block)`
  --component-level: 4;
`,XL:Object(styled_components_browser_esm.default)(Block)`
  --component-level: 5;
`,H:Object(styled_components_browser_esm.default)(Block)`
  --component-level: 6;
`},Icon=styled_components_browser_esm.default.div`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: white;
`,modular=()=>react.createElement(Global,null,react.createElement(block.L,null,react.createElement(Primary,{left:react.createElement(Icon,null),text:"Button L"}),react.createElement(block.M,null,react.createElement(Primary,{left:react.createElement(Icon,null),right:react.createElement(Icon,null),text:"Button M"})),react.createElement(block.M,null,react.createElement(Primary,{left:react.createElement(Icon,null),text:"Button M"}),react.createElement(block.XS,null,react.createElement(Primary,{right:react.createElement(Icon,null),text:"Button XS"})),react.createElement(block.N,null,react.createElement(Primary,{right:react.createElement(Icon,null),text:"Button N"})),react.createElement(block.N,null,react.createElement(Primary,{right:react.createElement(Icon,null),text:"Button N"})),react.createElement(block.N,null,react.createElement(Primary,{right:react.createElement(Icon,null),text:"Button N"})),react.createElement(block.N,null,react.createElement(Primary,{right:react.createElement(Icon,null),text:"Button N"}))))),buttons=()=>{const content=Object(dist.text)("Text","Sign In"),onClick=Object(addon_actions_dist.action)("click");return react.createElement(react.Fragment,null,react.createElement("div",null,react.createElement("pre",{style:{fontSize:"1rem"}},`\n          import { button } from 'woly'\n\n          <button.Primary text="${content}" />\n          `)),react.createElement("table",null,react.createElement("thead",null,react.createElement("tr",{key:"heading-key"},react.createElement(Head,null,"Kind"),react.createElement(Head,null,"Preview"))),react.createElement("tbody",null,react.createElement("tr",null,react.createElement(Cell,null,"Primary"),react.createElement(Preview,null,react.createElement(Primary,{onClick:onClick,text:content}))),react.createElement("tr",null,react.createElement(Cell,null,"Secondary"),react.createElement(Preview,null,react.createElement(Secondary,{onClick:onClick,text:content}))),react.createElement("tr",null,react.createElement(Cell,null,"Destructive"),react.createElement(Preview,null,react.createElement(Destructive,{onClick:onClick,text:content}))))))},Cell=styled_components_browser_esm.default.td`
  font-size: 1rem;
  padding: 1rem;
`,Head=Object(styled_components_browser_esm.default)(Cell)`
  font-weight: bold;
`,Preview=Object(styled_components_browser_esm.default)(Cell)`
  padding: 2rem;
  border: 1px dashed var(--borders, rgb(200, 200, 200));
`},1300:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),dist=__webpack_require__(53),styled_components_browser_esm=__webpack_require__(7);const Base=Object(styled_components_browser_esm.default)(({value:value,placeholder:placeholder,type:type="text",name:name,disabled:disabled,className:className,onChange:onChange})=>react.createElement("input",{name:name,type:type,value:value,placeholder:placeholder,className:className,disabled:disabled,onChange:onChange}))`
  --input-width: 100%;
  --input-border-color: #d5d5dc;

  width: var(--input-width);
  border-radius: var(--rounding, 3px);
  border: solid 1px var(--input-border-color);
  padding: var(--spacing-vertical, 1rem) var(--spacing-horizontal, 0.4rem);
  font-size: var(--font-size, 1rem);
`;__webpack_require__.d(__webpack_exports__,"Input",(function(){return story_Input}));__webpack_exports__.default={title:"Atoms/Input"};const noop=()=>{},story_Input=()=>react.createElement(Base,{type:"text",name:Object(dist.text)("Input name","name"),placeholder:Object(dist.text)("Placeholder","Enter your name here"),value:Object(dist.text)("Value","full name"),onChange:noop})},1301:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),dist=__webpack_require__(53),styled_components_browser_esm=__webpack_require__(7);const Surface=styled_components_browser_esm.default.div`
  background-color: var(--surface-background, #ffffff);
  padding: var(--padding, 1rem);
  border-radius: var(--rounding, 3px);
  border-width: var(--surface-border-width, 0);
  border-color: var(--surface-border-color, #000000);
  box-shadow: var(--surface-box-shadow, none);
`,Base=Object(styled_components_browser_esm.default)(Surface)`
  --surface-background: var(--surface-background);
  --surface-border-width: var(--surface-border-width);
  --surface-border-color: var(--surface-border-color);
  --surface-box-shadow: var(--surface-box-shadow);
`;__webpack_require__.d(__webpack_exports__,"surfaces",(function(){return surfaces}));__webpack_exports__.default={title:"Atoms"};const surfaces=()=>{const content=Object(dist.text)("Content","Content");return react.createElement("div",null,react.createElement(Base,null,content))}},1302:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),dist=__webpack_require__(53),styled_components_browser_esm=__webpack_require__(7);const Title=Object(styled_components_browser_esm.default)(properties=>{var _a;const level=null!==(_a=properties.level)&&void 0!==_a?_a:1,Tag=`h${level}`;return react.createElement(Tag,{className:properties.className,"data-level":level},properties.children)})`
  color: var(--title-color);

  &[data-level='1'] {
    font-size: var(--h1-font-size);
    line-height: var(--h1-line-height);
    margin-bottom: 5rem;
  }

  &[data-level='2'] {
    font-size: var(--h2-font-size);
    line-height: var(--h2-line-height);
    margin-bottom: 4rem;
  }

  &[data-level='3'] {
    font-size: var(--h3-font-size);
    line-height: var(--h3-line-height);
    margin-bottom: 3rem;
  }
`;__webpack_require__.d(__webpack_exports__,"Title",(function(){return story_Title}));__webpack_exports__.default={title:"Atoms"};const story_Title=()=>{const content=Object(dist.text)("Content","Example heading"),TitleCom=Title;return react.createElement("div",null,[1,2,3].map(level=>react.createElement("div",{key:level},react.createElement("span",{style:{fontSize:"1.6rem"}},"Level ",level),react.createElement("span",null,react.createElement(TitleCom,{as:`h${level}`,level:level},content)))))}},434:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/interfaces-bold.7c51fd02.ttf"},435:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/interfaces-regular.901139f0.ttf"},436:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/interfaces-thin.8f4e5248.ttf"},452:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Wrap}));__webpack_require__(41),__webpack_require__(56),__webpack_require__(57);var react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  padding: 24px;\n"]);return _templateObject=function(){return data},data}var Wrap=function(_ref){var children=_ref.children;return(react__WEBPACK_IMPORTED_MODULE_3__.createElement(Wrapper,null,children))};Wrap.displayName="Wrap";var Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject());Wrap.__docgenInfo={description:"",methods:[],displayName:"Wrap"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/layout/template.jsx"]={name:"Wrap",docgenInfo:Wrap.__docgenInfo,path:".storybook/layout/template.jsx"})},453:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(41),__webpack_require__(56),__webpack_require__(57);var styled_components_browser_esm=__webpack_require__(7),dist=__webpack_require__(450),interfaces_bold=__webpack_require__(434),interfaces_regular=__webpack_require__(435),interfaces_thin=__webpack_require__(436);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  @font-face {\n    font-family: 'TT Interfaces';\n    src: url('","') format('truetype');\n    font-weight: 300;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'TT Interfaces';\n    src: url('","') format('truetype');\n    font-weight: 400;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'TT Interfaces';\n    src: url('","') format('truetype');\n    font-weight: 700;\n    font-style: normal;\n  }\n\n\n"]);return _templateObject=function(){return data},data}var fonts=Object(styled_components_browser_esm.css)(_templateObject(),interfaces_thin,interfaces_regular,interfaces_bold);const light=styled_components_browser_esm.css`
  --canvas-bg: #fcfcfc;
  --canvas-text: #080808;

  --borders: #828282;

  --primary-bg: #1565c0;
  --primary-text: #ffffff;

  --secondary-bg: #cccccc;
  --secondary-text: #000000;

  --destructive-bg: #dd2c00;
  --destructive-text: #ffffff;
`,dark=styled_components_browser_esm.css`
  --canvas-bg: #141414;
  --canvas-text: #c1c1c1;

  --borders: #363636;

  --primary-bg: #1565c0;
  --primary-text: #ffffff;

  --secondary-bg: #cccccc;
  --secondary-text: #000000;

  --destructive-bg: #dd2c00;
  --destructive-text: #ffffff;
`,common=styled_components_browser_esm.css`
  --rounding: 3px;
  --font-size: 1rem;
  --line-height: 1.2rem;
  --spacing-vertical: 0.4rem;
  --spacing-horizontal: 0.8rem;
`;function _templateObject2(){var data=styles_taggedTemplateLiteral(["\n  ","\n  ","\n  ","\n"]);return _templateObject2=function(){return data},data}function styles_templateObject(){var data=styles_taggedTemplateLiteral(["\n  :root {\n    font-size: 14px;\n\n    /* common */\n    --primary-font: 'TT Interfaces', serif;\n    --text-color: var(--black);\n    --border-color: rgba(0, 0, 0, 0.1);\n    --body-bg: var(--white);\n\n    /* colors */\n    --conch: #d5d5dc;\n    --black: #000;\n    --white: #fff;\n    --coral: #f0254c;\n\n    /* block */\n    --block-padding: 30px 42px;\n    --block-bg: var(--white);\n    --block-border: 1px solid var(--border-color);\n    --block-border-radius: 3px;\n    --block-shadow: 0 3px 12px -3px var(--border-color);\n\n    /* titles */\n    --title-color: var(--black)\n    --title-height: 1.2rem;\n\n    --h1-font-size: 4.2rem;\n    --h1-line-height: var(--title-height);\n    --h2-font-size: 3rem;\n    --h2-line-height: var(--title-height);\n    --h3-font-size: 2.4rem;\n    --h3-line-height: var(--title-height);\n\n    /* types */\n    --primary: var(--black);\n    --primary-text: var(--white);\n    --primary-border: var(--black);\n    --primary-ghost-text: var(--black);\n    --primary-ghost-border: var(--black);\n\n    --warning: var(--coral);\n    --warning-text: var(--white);\n    --warning-border: var(--coral);\n    --warning-ghost-text: var(--coral);\n    --warning-ghost-border: var(--coral);\n\n    --ghost: transparent;\n    --ghost-border: var(--border-color);\n\n    /* input styles */\n    --input-font-size: 3.6rem;\n    --input-line-height: 4.8rem;\n\n    ","\n\n    @media screen and (prefers-color-scheme: light) {\n      ","\n    }\n\n    @media screen and (prefers-color-scheme: dark) {\n      ",'\n    }\n  }\n\n  body,\n  html {\n    color: var(--canvas-text);\n    background-color: var(--canvas-bg);\n    font-family: var(--primary-font);\n    font-size: 62.5%;\n    font-weight: 400;\n    height: 100%;\n    line-height: 1.4;\n    margin-left: auto;\n    margin-right: auto;\n    min-width: 320px;\n    width: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  input {\n    border: 0;\n    background-color: transparent;\n    outline: none;\n\n    &[type="text"] {\n      font-weight: 300;\n    }\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 0;\n  }\n']);return styles_templateObject=function(){return data},data}function styles_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,"a",(function(){return Styles}));var globals=Object(styled_components_browser_esm.css)(styles_templateObject(),common,light,dark),Styles=Object(styled_components_browser_esm.createGlobalStyle)(_templateObject2(),dist.normalize,fonts,globals)},454:function(module,exports,__webpack_require__){__webpack_require__(455),__webpack_require__(598),__webpack_require__(599),__webpack_require__(1249),module.exports=__webpack_require__(1250)},517:function(module,exports){}},[[454,1,2]]]);
//# sourceMappingURL=main.b0412c0d536e8582ed92.bundle.js.map