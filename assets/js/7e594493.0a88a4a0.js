"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[96916],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},38610:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(44996);const o=e=>a.createElement("div",null,a.createElement("p",{align:"center"},a.createElement("figure",null,a.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,r.Z)(e.source)}),a.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},92908:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(39960);n(44996);const o=()=>a.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),i=()=>a.createElement("p",{className:"in-blog-cta-link-container"},a.createElement(r.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),a.createElement(o,null),a.createElement(r.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),a.createElement(o,null),a.createElement(r.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},20521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));n(39960),n(44996),n(92908),n(70589),n(38610);const o={title:"Wasp Beta brings major IDE improvements",authors:["martinsos"],tags:["wasp","language"]},i=void 0,l={permalink:"/blog/2022/12/01/beta-ide-improvements",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2022-12-01-beta-ide-improvements.md",source:"@site/blog/2022-12-01-beta-ide-improvements.md",title:"Wasp Beta brings major IDE improvements",description:"With the Beta release (0.7), Wasp brings its IDE game to a whole new level!",date:"2022-12-01T00:00:00.000Z",formattedDate:"December 1, 2022",tags:[{label:"wasp",permalink:"/blog/tags/wasp"},{label:"language",permalink:"/blog/tags/language"}],readingTime:5.87,hasTruncateMarker:!0,authors:[{name:"Martin Sosic",title:"Co-founder & CTO @ Wasp",url:"https://github.com/martinsos",email:"martin@wasp-lang.dev",imageURL:"https://github.com/martinsos.png",key:"martinsos"}],frontMatter:{title:"Wasp Beta brings major IDE improvements",authors:["martinsos"],tags:["wasp","language"]},prevItem:{title:"Watch us build a *truly* full-stack app in just 9 minutes w/ Wasp & ChatGPT \ud83d\ude80 \ud83e\udd2f",permalink:"/blog/2022/12/08/fast-fullstack-chatgpt"},nextItem:{title:"Feature Release Announcement - Wasp Optimistic Updates",permalink:"/blog/2022/11/30/optimistic-update-feature-announcement"}},s={authorsImageUrls:[void 0]},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With the Beta release (0.7), Wasp brings its IDE game to a whole new level!"),(0,r.kt)("p",null,"So far Wasp didn\u2019t have much beyond basic syntax highlighting in VSCode, but now it has:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Wasp language server"),", that brings the following to your .wasp files:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"live error reporting in your editor"),(0,r.kt)("li",{parentName:"ol"},"autocompletion (basic for now)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"VSCode Wasp language extension"),":",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"snippets (for ",(0,r.kt)("inlineCode",{parentName:"li"},"page"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"query"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"action"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"entity"),")"),(0,r.kt)("li",{parentName:"ol"},"improved syntax highlighting for .wasp files"),(0,r.kt)("li",{parentName:"ol"},"integration with the above-mentioned language server"))),(0,r.kt)("li",{parentName:"ol"},"Support for popular ",(0,r.kt)("strong",{parentName:"li"},"IDEs to fully support Javascript and Typescript files")," in the Wasp project.")))}u.isMDXComponent=!0},70589:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}l.isMDXComponent=!0}}]);