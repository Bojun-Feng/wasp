"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[90994],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),b=n,g=m["".concat(l,".").concat(b)]||m[b]||u[b]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},38610:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(44996);const o=e=>a.createElement("div",null,a.createElement("p",{align:"center"},a.createElement("figure",null,a.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,n.Z)(e.source)}),a.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},92908:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(39960);r(44996);const o=()=>a.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),i=()=>a.createElement("p",{className:"in-blog-cta-link-container"},a.createElement(n.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),a.createElement(o,null),a.createElement(n.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),a.createElement(o,null),a.createElement(n.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},69260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));r(39960),r(44996),r(92908),r(70589),r(38610);const o={title:"How Wasp reached all-time high PR count during Hacktoberfest: tips for OSS maintainers",authors:["maksym36ua"],tags:["webdev","wasp","hacktoberfest","github"]},i=void 0,s={permalink:"/blog/2022/11/17/hacktoberfest-wrap-up",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2022-11-17-hacktoberfest-wrap-up.md",source:"@site/blog/2022-11-17-hacktoberfest-wrap-up.md",title:"How Wasp reached all-time high PR count during Hacktoberfest: tips for OSS maintainers",description:"2078 lines of code across 24 PRs were changed in Wasp repo during HacktoberFest 2022 - the most prominent online event for promoting and celebrating OSS culture. October has been a blast, to say the least, and the most active month in the repo's history.",date:"2022-11-17T00:00:00.000Z",formattedDate:"November 17, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"},{label:"hacktoberfest",permalink:"/blog/tags/hacktoberfest"},{label:"github",permalink:"/blog/tags/github"}],readingTime:5.745,hasTruncateMarker:!0,authors:[{name:"Maksym Khamrovskyi",title:"DevRel @ Wasp",key:"maksym36ua"}],frontMatter:{title:"How Wasp reached all-time high PR count during Hacktoberfest: tips for OSS maintainers",authors:["maksym36ua"],tags:["webdev","wasp","hacktoberfest","github"]},prevItem:{title:"Wasp Beta Launch Week announcement",permalink:"/blog/2022/11/26/wasp-beta-launch-week"},nextItem:{title:"Alpha Testing Program: post-mortem",permalink:"/blog/2022/11/16/alpha-testing-program-post-mortem"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"2078 lines of code across 24 PRs were changed in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"Wasp repo")," during ",(0,n.kt)("a",{parentName:"p",href:"https://hacktoberfest.com/"},"HacktoberFest 2022")," - the most prominent online event for promoting and celebrating OSS culture. October has been a blast, to say the least, and the most active month in the repo's history."),(0,n.kt)("p",null,"This is the story of our journey along with the tips on leveraging Hacktoberfest to get your repo buzzing! \ud83d\udc1d\ud83d\udc1d"))}u.isMDXComponent=!0},70589:(e,t,r)=>{r.d(t,{ZP:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={toc:[]},i="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(i,(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}s.isMDXComponent=!0}}]);