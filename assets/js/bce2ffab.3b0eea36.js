"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["94535"],{22408:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>f,assets:()=>a,toc:()=>u,frontMatter:()=>o});var r=JSON.parse('{"id":"tests/visibility/only-unlisteds/unlisted-subcategory/index","title":"Only Unlisteds - Subcategory index unlisted","description":"Doc with unlisted front matter","source":"@site/_dogfooding/_docs tests/tests/visibility/only-unlisteds/unlisted-subcategory/index.mdx","sourceDirName":"tests/visibility/only-unlisteds/unlisted-subcategory","slug":"/tests/visibility/only-unlisteds/unlisted-subcategory/","permalink":"/tests/docs/tests/visibility/only-unlisteds/unlisted-subcategory/","draft":false,"unlisted":true,"tags":[{"inline":false,"label":"Visibility","permalink":"/tests/docs/tags/visibility"},{"inline":false,"label":"Unlisted","permalink":"/tests/docs/tags/unlisted"}],"version":"current","lastUpdatedBy":"jefferyq2","lastUpdatedAt":1729462719000,"frontMatter":{"unlisted":true,"tags":["visibility","unlisted"]},"sidebar":"sidebar"}'),i=n("24246"),s=n("80980"),l=n("78042");let o={unlisted:!0,tags:["visibility","unlisted"]},c="Only Unlisteds - Subcategory index unlisted",a={},u=[];function d(e){let t={h1:"h1",header:"header",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"only-unlisteds---subcategory-index-unlisted",children:"Only Unlisteds - Subcategory index unlisted"})}),"\n",(0,i.jsx)(t.p,{children:"Doc with unlisted front matter"}),"\n","\n",(0,i.jsx)(l.Z,{})]})}function f(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}f.displayName="MDXContent(_dogfooding/_docs tests/tests/visibility/only-unlisteds/unlisted-subcategory/index.mdx)"},78042:function(e,t,n){n.d(t,{Z:()=>b});var r=n("24246");n("27378");var i=n("90496"),s=n("85921"),l=n("35363"),o=n("11660"),c=n("82095"),a=n("77827"),u=n("57922");let d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function f(e){var t=e.href,n=e.children;return(0,r.jsx)(l.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){var t=e.href,n=e.icon,s=e.title,l=e.description;return(0,r.jsxs)(f,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),l&&(0,r.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:l,children:l})]})}function p(e){var t,n,i=e.item,l=(0,s.LM)(i);var c=(t=(0,o.c)().selectMessage,function(e){return t(e,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return l?(0,r.jsx)(m,{href:l,icon:"\uD83D\uDDC3\uFE0F",title:i.label,description:null!==(n=i.description)&&void 0!==n?n:c(i.items.length)}):null}function h(e){var t,n,i=e.item,l=(0,c.Z)(i.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,s.xz)(null!==(t=i.docId)&&void 0!==t?t:void 0);return(0,r.jsx)(m,{href:i.href,icon:l,title:i.label,description:null!==(n=i.description)&&void 0!==n?n:null==o?void 0:o.description})}function y(e){var t=e.item;switch(t.type){case"link":return(0,r.jsx)(h,{item:t});case"category":return(0,r.jsx)(p,{item:t});default:throw Error("unknown item type ".concat(JSON.stringify(t)))}}function g(e){var t=e.className,n=(0,s.jA)();return(0,r.jsx)(b,{items:n.items,className:t})}function b(e){var t=e.items,n=e.className;if(!t)return(0,r.jsx)(g,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,i,s;r=e,i=t,s=n[t],i in r?Object.defineProperty(r,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[i]=s})}return e}({},e));var l=(0,s.MN)(t);return(0,r.jsx)("section",{className:(0,i.Z)("row",n),children:l.map(function(e,t){return(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(y,{item:e})},t)})})}},11660:function(e,t,n){n.d(t,{c:function(){return c}});var r=n(27378),i=n(8156),s=["zero","one","two","few","many","other"];function l(e){return s.filter(function(t){return e.includes(t)})}var o={locale:"en",pluralForms:l(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e,t=(e=(0,i.Z)().i18n.currentLocale,(0,r.useMemo)(function(){try{var t,n;return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:l(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'.concat(e,'".\nDocusaurus will fallback to the default (English) implementation.\nError: ').concat(t.message,"\n")),o}},[e]));return{selectMessage:function(e,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale=".concat(n.locale,", a maximum of ").concat(n.pluralForms.length," plural forms are expected (").concat(n.pluralForms.join(","),"), but the message contains ").concat(r.length,": ").concat(e));var i=n.select(t);return r[Math.min(n.pluralForms.indexOf(i),r.length-1)]}(n,e,t)}}}},80980:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var r=n(27378);let i={},s=r.createContext(i);function l(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);