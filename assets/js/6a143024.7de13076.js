"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[12818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>w});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,w=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return n?a.createElement(w,o(o({ref:t},c),{},{components:n})):a.createElement(w,o({ref:t},c))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},38610:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(44996);const i=e=>a.createElement("div",null,a.createElement("p",{align:"center"},a.createElement("figure",null,a.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,r.Z)(e.source)}),a.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},46300:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(50012);function i(e){let{path:t}=e;const[n]=(0,r.Nk)("docusaurus.tab.js-ts"),i=t.lastIndexOf("{"),o=t.slice(i+1,t.length-1),[p,s]=o.split(","),l=t.slice(0,i);return a.createElement("code",null,l+("js"===n?p:s))}},16300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=(n(46300),n(44996),n(38610));const o={title:"Creating New App with AI"},p=void 0,s={unversionedId:"wasp-ai/creating-new-app",id:"version-0.14.0/wasp-ai/creating-new-app",title:"Creating New App with AI",description:"Wasp comes with its own AI: Wasp AI, aka Mage (Magic web App GEnerator).",source:"@site/versioned_docs/version-0.14.0/wasp-ai/creating-new-app.md",sourceDirName:"wasp-ai",slug:"/wasp-ai/creating-new-app",permalink:"/docs/0.14.0/wasp-ai/creating-new-app",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.14.0/wasp-ai/creating-new-app.md",tags:[],version:"0.14.0",frontMatter:{title:"Creating New App with AI"},sidebar:"docs",previous:{title:"Custom Vite Config",permalink:"/docs/0.14.0/project/custom-vite-config"},next:{title:"Developing Existing App with AI",permalink:"/docs/0.14.0/wasp-ai/developing-existing-app"}},l={},c=[{value:"usemage.ai",id:"usemageai",level:2},{value:"Wasp CLI",id:"wasp-cli",level:2}],u={toc:c},m="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Wasp comes with its own AI: Wasp AI, aka Mage (",(0,r.kt)("strong",{parentName:"p"},"M"),"agic web ",(0,r.kt)("strong",{parentName:"p"},"A"),"pp ",(0,r.kt)("strong",{parentName:"p"},"GE"),"nerator)."),(0,r.kt)("p",null,"Wasp AI allows you to create a new Wasp app ",(0,r.kt)("strong",{parentName:"p"},"from only a title and a short description")," (using GPT in the background)!"),(0,r.kt)("p",null,"There are two main ways to create a new Wasp app with Wasp AI:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Free, open-source online app ",(0,r.kt)("a",{parentName:"li",href:"https://usemage.ai"},"usemage.ai"),"."),(0,r.kt)("li",{parentName:"ol"},"Running ",(0,r.kt)("inlineCode",{parentName:"li"},"wasp new")," on your machine and picking AI generation. For this you need to provide your own OpenAI API keys, but it allows for more flexibility (choosing GPT models).")),(0,r.kt)("p",null,'They both use the same logic in the background, so both approaches are equally "smart", the difference is just in the UI / settings.'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Wasp AI is an experimental feature. Apps that Wasp AI generates can have mistakes (proportional to their complexity), but even then they can often serve as a great starting point (once you fix the mistakes) or an interesting way to explore how to implement stuff in Wasp.")),(0,r.kt)("h2",{id:"usemageai"},"usemage.ai"),(0,r.kt)(i.Z,{source:"img/gpt-wasp/how-it-works.gif",caption:"1. Describe your app 2. Pick the color 3. Generate your app \ud83d\ude80",mdxType:"ImgWithCaption"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://usemage.ai"},"Mage")," is an open-source app with which you can create new Wasp apps from just a short title and description."),(0,r.kt)("p",null,"It is completely free for you - it uses our OpenAI API keys and we take on the costs."),(0,r.kt)("p",null,"Once you provide an app title, app description, and choose some basic settings, your new Wasp app will be created for you in a matter of minutes and you will be able to download it to your machine and keep working on it!"),(0,r.kt)("p",null,"If you want to know more, check this ",(0,r.kt)("a",{parentName:"p",href:"/blog/2023/07/10/gpt-web-app-generator"},"blog post")," for more details on how Mage works, or this ",(0,r.kt)("a",{parentName:"p",href:"/blog/2023/07/17/how-we-built-gpt-web-app-generator"},"blog post")," for a high-level overview of how we implemented it."),(0,r.kt)("h2",{id:"wasp-cli"},"Wasp CLI"),(0,r.kt)("p",null,"You can create a new Wasp app using Wasp AI by running ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp new")," in your terminal and picking AI generation."),(0,r.kt)("p",null,"If you don't have them set yet, ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp")," will ask you to provide (via ENV vars) your OpenAI API keys (which it will use to query GPT)."),(0,r.kt)("p",null,"Then, after providing a title and description for your Wasp app, the new app will be generated on your disk!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"wasp-cli-ai-input",src:n(678).Z,width:"3478",height:"1567"}),"\n",(0,r.kt)("img",{alt:"wasp-cli-ai-generation",src:n(37713).Z,width:"3479",height:"1550"})))}g.isMDXComponent=!0},678:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wasp-ai-1-a07955444bb0f6da3a6beb529b86d388.png"},37713:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wasp-ai-2-ee9892b880dc6e7c51fbe352748dbb90.png"}}]);