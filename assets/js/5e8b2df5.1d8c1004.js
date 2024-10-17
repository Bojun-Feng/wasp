"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[92302],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46300:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(50012);function a(e){let{path:t}=e;const[r]=(0,o.Nk)("docusaurus.tab.js-ts"),a=t.lastIndexOf("{"),i=t.slice(a+1,t.length-1),[s,l]=i.split(","),c=t.slice(0,a);return n.createElement("code",null,c+("js"===r?s:l))}},87587:(e,t,r)=>{r.d(t,{Jp:()=>a,aH:()=>i});var n=r(67294);const o=e=>{let{color:t,children:r}=e;return n.createElement("span",{style:{border:`2px solid ${t}`,display:"inline-block",padding:"0.2em 0.4em",color:t,borderRadius:"0.4em",fontSize:"0.8em",lineHeight:"1",fontWeight:"bold"}},r)};function a(){return n.createElement(o,{color:"#0b62f5"},"internal")}function i(){return n.createElement(o,{color:"#f59e0b"},"required")}},86422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));r(46300),r(87587);const a={title:"Overview"},i=void 0,s={unversionedId:"data-model/operations/overview",id:"version-0.14.0/data-model/operations/overview",title:"Overview",description:"While Entities enable you to define your app's data model and relationships, Operations are all about working with this data.",source:"@site/versioned_docs/version-0.14.0/data-model/operations/overview.md",sourceDirName:"data-model/operations",slug:"/data-model/operations/overview",permalink:"/docs/0.14.0/data-model/operations/overview",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.14.0/data-model/operations/overview.md",tags:[],version:"0.14.0",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"Entities",permalink:"/docs/0.14.0/data-model/entities"},next:{title:"Queries",permalink:"/docs/0.14.0/data-model/operations/queries"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"While Entities enable you to define your app's data model and relationships, Operations are all about working with this data."),(0,o.kt)("p",null,"There are two kinds of Operations: ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.14.0/data-model/operations/queries"},"Queries")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.14.0/data-model/operations/actions"},"Actions"),". As their names suggest,\nQueries are meant for reading data, and Actions are meant for changing it (either by updating existing entries or creating new ones)."),(0,o.kt)("p",null,"Keep reading to find out all there is to know about Operations in Wasp."))}u.isMDXComponent=!0}}]);