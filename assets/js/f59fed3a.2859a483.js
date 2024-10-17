"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[22389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46300:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294),r=n(50012);function a(e){let{path:t}=e;const[n]=(0,r.Nk)("docusaurus.tab.js-ts"),a=t.lastIndexOf("{"),l=t.slice(a+1,t.length-1),[i,s]=l.split(","),p=t.slice(0,a);return o.createElement("code",null,p+("js"===n?i:s))}},69384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var o=n(87462),r=n(67294),a=n(3905);n(46300);function l(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"deployment-methods-grid"},[{title:"Using Wasp CLI",description:"One command deployment & redeployment",linkToDocs:"/docs/advanced/deployment/cli"},{title:"Deploying Manually",description:"Build the app and deploy it manually",linkToDocs:"/docs/advanced/deployment/manually"}].map((e=>r.createElement(i,{title:e.title,description:e.description,linkToDocs:e.linkToDocs})))),r.createElement("p",{className:"deployment-methods-info"},r.createElement("small",null,"Click on each deployment method for more details.")))}function i(e){let{linkToDocs:t,title:n,description:o}=e;return r.createElement("a",{href:t,className:"deployment-method-box"},r.createElement("h3",null,n," \xbb"),r.createElement("p",null,o))}const s={title:"Overview"},p=void 0,c={unversionedId:"advanced/deployment/overview",id:"version-0.11.8/advanced/deployment/overview",title:"Overview",description:"Wasp apps are full-stack apps that consist of:",source:"@site/versioned_docs/version-0.11.8/advanced/deployment/overview.md",sourceDirName:"advanced/deployment",slug:"/advanced/deployment/overview",permalink:"/docs/0.11.8/advanced/deployment/overview",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.11.8/advanced/deployment/overview.md",tags:[],version:"0.11.8",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"Custom Vite Config",permalink:"/docs/0.11.8/project/custom-vite-config"},next:{title:"Deploying with the Wasp CLI",permalink:"/docs/0.11.8/advanced/deployment/cli"}},d={},u=[{value:"Customizing the Dockerfile",id:"customizing-the-dockerfile",level:2}],m={toc:u},f="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wasp apps are full-stack apps that consist of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Node.js server."),(0,a.kt)("li",{parentName:"ul"},"A static client."),(0,a.kt)("li",{parentName:"ul"},"A PostgreSQL database. ")),(0,a.kt)("p",null,"You can deploy each part ",(0,a.kt)("strong",{parentName:"p"},"anywhere")," where you can usually deploy Node.js apps or static apps. For example, you can deploy your client on ",(0,a.kt)("a",{parentName:"p",href:"https://www.netlify.com/"},"Netlify"),", the server on ",(0,a.kt)("a",{parentName:"p",href:"https://fly.io/"},"Fly.io"),", and the database on ",(0,a.kt)("a",{parentName:"p",href:"https://neon.tech/"},"Neon"),"."),(0,a.kt)("p",null,"To make deploying as smooth as possible, Wasp also offers a single-command deployment through the ",(0,a.kt)("strong",{parentName:"p"},"Wasp CLI"),". Read more about deploying through the CLI ",(0,a.kt)("a",{parentName:"p",href:"../../advanced/deployment/cli"},"here"),"."),(0,a.kt)(l,{mdxType:"DeploymentOptionsGrid"}),(0,a.kt)("p",null,"Regardless of how you choose to deploy your app (i.e., manually or using the Wasp CLI), you'll need to know about some common patterns covered below."),(0,a.kt)("h2",{id:"customizing-the-dockerfile"},"Customizing the Dockerfile"),(0,a.kt)("p",null,"By default, Wasp generates a multi-stage Dockerfile.\nThis file is used to build and run a Docker image with the Wasp-generated server code.\nIt also runs any pending migrations."),(0,a.kt)("p",null,"You can ",(0,a.kt)("strong",{parentName:"p"},"add extra steps to this multi-stage ",(0,a.kt)("inlineCode",{parentName:"strong"},"Dockerfile"))," by creating your own ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the project's root directory.\nIf Wasp finds a Dockerfile in the project's root, it appends its contents at the ",(0,a.kt)("em",{parentName:"p"},"bottom")," of the default multi-stage Dockerfile."),(0,a.kt)("p",null,"Since the last definition in a Dockerfile wins, you can override or continue from any existing build stages.\nYou can also choose not to use any of our build stages and have your own custom Dockerfile used as-is."),(0,a.kt)("p",null,"A few things to keep in mind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you override an intermediate build stage, no later build stages will be used unless you reproduce them below."),(0,a.kt)("li",{parentName:"ul"},"The generated Dockerfile's content is dynamic and depends on which features your app uses. The content can also change in future releases, so please verify it from time to time."),(0,a.kt)("li",{parentName:"ul"},"Make sure to supply ",(0,a.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT")," in your final build stage. Your changes won't have any effect if you don't.")),(0,a.kt)("p",null,"Read more in the official Docker docs on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/build/building/multi-stage/"},"multi-stage builds"),"."),(0,a.kt)("p",null,"To see what your project's (potentially combined) Dockerfile will look like, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wasp dockerfile\n")),(0,a.kt)("p",null,"Join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," if you have any questions, or if you need more customization than this hook provides."))}y.isMDXComponent=!0}}]);