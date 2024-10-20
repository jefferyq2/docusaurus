"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["6408"],{57178:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>p,assets:()=>s,toc:()=>d,frontMatter:()=>u});var n=JSON.parse('{"id":"api/themes/theme-live-codeblock","title":"\uD83D\uDCE6 theme-live-codeblock","description":"This theme provides a @theme/CodeBlock component that is powered by react-live. You can read more on interactive code editor documentation.","source":"@site/docs/api/themes/theme-live-codeblock.mdx","sourceDirName":"api/themes","slug":"/api/themes/@docusaurus/theme-live-codeblock","permalink":"/docs/api/themes/@docusaurus/theme-live-codeblock","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-live-codeblock.mdx","tags":[],"version":"current","lastUpdatedBy":"jefferyq2","lastUpdatedAt":1729462719000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"slug":"/api/themes/@docusaurus/theme-live-codeblock"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 theme-classic","permalink":"/docs/api/themes/@docusaurus/theme-classic"},"next":{"title":"\uD83D\uDCE6 theme-search-algolia","permalink":"/docs/api/themes/@docusaurus/theme-search-algolia"}}'),o=r("24246"),a=r("80980"),l=r("15398"),i=r("58636");let u={sidebar_position:3,slug:"/api/themes/@docusaurus/theme-live-codeblock"},c="\uD83D\uDCE6 theme-live-codeblock",s={},d=[{value:"Configuration",id:"configuration",level:3}];function f(e){let t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"-theme-live-codeblock",children:"\uD83D\uDCE6 theme-live-codeblock"})}),"\n",(0,o.jsxs)(t.p,{children:["This theme provides a ",(0,o.jsx)(t.code,{children:"@theme/CodeBlock"})," component that is powered by react-live. You can read more on ",(0,o.jsx)(t.a,{href:"/docs/markdown-features/code-blocks#interactive-code-editor",children:"interactive code editor"})," documentation."]}),"\n",(0,o.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,o.jsx)(i.Z,{value:"npm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-live-codeblock\n"})})}),(0,o.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/theme-live-codeblock\n"})})}),(0,o.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-live-codeblock\n"})})})]}),"\n",(0,o.jsx)(t.h3,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: ['@docusaurus/theme-live-codeblock'],\n  themeConfig: {\n    liveCodeBlock: {\n      /**\n       * The position of the live playground, above or under the editor\n       * Possible values: \"top\" | \"bottom\"\n       */\n      playgroundPosition: 'bottom',\n    },\n  },\n};\n"})})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},58636:function(e,t,r){r.d(t,{Z:()=>l});var n=r("24246");r("27378");var o=r("90496");let a="tabItem_pnkT";function l(e){var t=e.children,r=e.hidden,l=e.className;return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:r,children:t})}},15398:function(e,t,r){r.d(t,{Z:()=>w});var n=r("24246"),o=r("27378"),a=r("90496"),l=r("54947"),i=r("3620"),u=r("844"),c=r("97486"),s=r("32263"),d=r("16971");function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],l=!0,i=!1;try{for(o=o.call(e);!(l=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,n=e}finally{try{!l&&null!=o.return&&o.return()}finally{if(i)throw n}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e){var t,r;return null!==(r=null===(t=o.Children.toArray(e).filter(function(e){return"\n"!==e}).map(function(e){var t,r;if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&(void 0===t?"undefined":(r=t)&&"undefined"!=typeof Symbol&&r.constructor===Symbol?"symbol":typeof r)=="object"&&"value"in t)return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function b(e){var t=e.value;return e.tabValues.some(function(e){return e.value===t})}var m=r("71607");let v="tabList_Qoir",y="tabItem_AQgk";function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,a;n=e,o=t,a=r[t],o in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})}return e}function j(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function O(e){var t=e.className,r=e.block,o=e.selectedValue,i=e.selectValue,u=e.tabValues,c=[],s=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=u[c.indexOf(t)].value;r!==o&&(s(t),i(r))},f=function(e){var t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,n=c.indexOf(e.currentTarget)+1;t=null!==(r=c[n])&&void 0!==r?r:c[0];break;case"ArrowLeft":var o,a=c.indexOf(e.currentTarget)-1;t=null!==(o=c[a])&&void 0!==o?o:c[c.length-1]}null==t||t.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:u.map(function(e){var t=e.value,r=e.label,l=e.attributes;return(0,n.jsx)("li",j(g({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:d},l),{className:(0,a.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":o===t}),children:null!=r?r:t}),t)})})}function k(e){var t=e.lazy,r=e.children,l=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var u=i.find(function(e){return e.props.value===l});return u?(0,o.cloneElement)(u,{className:(0,a.Z)("margin-top--md",u.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map(function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==l})})})}function x(e){var t=function(e){var t,r,n,a,l,f,m,v,y,g,j,O,k,x,w=e.defaultValue,P=e.queryString,S=e.groupId;var T=(r=(t=e).values,n=t.children,(0,o.useMemo)(function(){var e=null!=r?r:h(n).map(function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}});return!function(e){var t=(0,s.lx)(e,function(e,t){return e.value===t.value});if(t.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(t.map(function(e){return e.value}).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[r,n])),V=p((0,o.useState)(function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!b({value:r,tabValues:n}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(r,'" but none of its children has the corresponding value. Available values are: ').concat(n.map(function(e){return e.value}).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return r}var o=null!==(t=n.find(function(e){return e.default}))&&void 0!==t?t:n[0];if(!o)throw Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:w,tabValues:T})}),2),E=V[0],I=V[1];var C=p((l=(a={queryString:void 0!==P&&P,groupId:S}).queryString,f=a.groupId,m=(0,i.k6)(),v=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:void 0!==l&&l,groupId:f}),[(0,c._X)(v),(0,o.useCallback)(function(e){if(!!v){var t,r,n=new URLSearchParams(m.location.search);n.set(v,e),m.replace((t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,a;n=e,o=t,a=r[t],o in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})}return e}({},m.location),r=(r={search:n.toString()},r),Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}},[v,m])]),2),N=C[0],D=C[1];var A=p((g=(y=({groupId:S}).groupId)?"docusaurus.tab.".concat(y):null,O=(j=p((0,d.Nk)(g),2))[0],k=j[1],[O,(0,o.useCallback)(function(e){if(!!g)k.set(e)},[g,k])]),2),Z=A[0],q=A[1];var _=b({value:x=null!=N?N:Z,tabValues:T})?x:null;return(0,u.Z)(function(){_&&I(_)},[_]),{selectedValue:E,selectValue:(0,o.useCallback)(function(e){if(!b({value:e,tabValues:T}))throw Error("Can't select invalid tab value=".concat(e));I(e),D(e),q(e)},[D,q,T]),tabValues:T}}(e);return(0,n.jsxs)("div",{className:(0,a.Z)("tabs-container",v),children:[(0,n.jsx)(O,g({},t,e)),(0,n.jsx)(k,g({},t,e))]})}function w(e){var t=(0,m.Z)();return(0,n.jsx)(x,j(g({},e),{children:h(e.children)}),String(t))}},80980:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return l}});var n=r(27378);let o={},a=n.createContext(o);function l(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);