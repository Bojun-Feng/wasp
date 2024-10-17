"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[22445],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),i=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return a?r.createElement(h,p(p({ref:t},c),{},{components:a})):r.createElement(h,p({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,p=new Array(s);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:n,p[1]=o;for(var i=2;i<s;i++)p[i]=a[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},46300:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(50012);function s(e){let{path:t}=e;const[a]=(0,n.Nk)("docusaurus.tab.js-ts"),s=t.lastIndexOf("{"),p=t.slice(s+1,t.length-1),[o,l]=p.split(","),i=t.slice(0,s);return r.createElement("code",null,i+("js"===a?o:l))}},19038:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));a(46300);const s={title:"Starter Templates"},p=void 0,o={unversionedId:"project/starter-templates",id:"version-0.14.0/project/starter-templates",title:"Starter Templates",description:"We created a few starter templates to help you get started with Wasp. Check out the list below.",source:"@site/versioned_docs/version-0.14.0/project/starter-templates.md",sourceDirName:"project",slug:"/project/starter-templates",permalink:"/docs/0.14.0/project/starter-templates",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.14.0/project/starter-templates.md",tags:[],version:"0.14.0",frontMatter:{title:"Starter Templates"},sidebar:"docs",previous:{title:"Auth Hooks",permalink:"/docs/0.14.0/auth/auth-hooks"},next:{title:"Customizing the App",permalink:"/docs/0.14.0/project/customizing-app"}},l={},i=[{value:"Using a Template",id:"using-a-template",level:2},{value:"Available Templates",id:"available-templates",level:2},{value:"OpenSaaS.sh template",id:"opensaassh-template",level:3},{value:"Vector Similarity Search Template",id:"vector-similarity-search-template",level:3},{value:"Todo App w/ Typescript",id:"todo-app-w-typescript",level:3},{value:"AI Generated Starter \ud83e\udd16",id:"ai-generated-starter-",level:3}],c={toc:i},m="wrapper";function u(e){let{components:t,...s}=e;return(0,n.kt)(m,(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We created a few starter templates to help you get started with Wasp. Check out the list ",(0,n.kt)("a",{parentName:"p",href:"#available-templates"},"below"),"."),(0,n.kt)("h2",{id:"using-a-template"},"Using a Template"),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"wasp new")," to run the interactive mode for creating a new Wasp project."),(0,n.kt)("p",null,"It will ask you for the project name, and then for the template to use:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ wasp new\nEnter the project name (e.g. my-project) \u25b8 MyFirstProject\nChoose a starter template\n[1] basic (default)\n    Simple starter template with a single page.\n[2] todo-ts\n    Simple but well-rounded Wasp app implemented with Typescript & full-stack type safety.\n[3] saas\n    Everything a SaaS needs! Comes with Auth, ChatGPT API, Tailwind, Stripe payments and more. Check out https://opensaas.sh/ for more details.\n[4] embeddings\n    Comes with code for generating vector embeddings and performing vector similarity search.\n[5] ai-generated\n    \ud83e\udd16 Describe an app in a couple of sentences and have Wasp AI generate initial code for you. (experimental)\n \u25b8 1\n\n\ud83d\udc1d --- Creating your project from the "basic" template... -------------------------\n\nCreated new Wasp app in ./MyFirstProject directory!\n\nTo run your new app, do:\n    cd MyFirstProject\n    wasp db start\n')),(0,n.kt)("h2",{id:"available-templates"},"Available Templates"),(0,n.kt)("p",null,"When you have a good idea for a new product, you don't want to waste your time on setting up common things like authentication, database, etc. That's why we created a few starter templates to help you get started with Wasp."),(0,n.kt)("h3",{id:"opensaassh-template"},"OpenSaaS.sh template"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SaaS Template",src:a(71391).Z,width:"2432",height:"1442"})),(0,n.kt)("p",null,"Everything a SaaS needs! Comes with Auth, ChatGPT API, Tailwind, Stripe payments and more. Check out ",(0,n.kt)("a",{parentName:"p",href:"https://opensaas.sh/"},"https://opensaas.sh/")," for more details."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Features:")," Stripe Payments, OpenAI GPT API, Google Auth, SendGrid, Tailwind, & Cron Jobs"),(0,n.kt)("p",null,"Use this template:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"wasp new <project-name> -t saas\n")),(0,n.kt)("h3",{id:"vector-similarity-search-template"},"Vector Similarity Search Template"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Vector Similarity Search Template",src:a(94995).Z,width:"1171",height:"558"})),(0,n.kt)("p",null,"A template for generating embeddings and performing vector similarity search on your text data!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Features:")," Embeddings & vector similarity search, OpenAI Embeddings API, Vector DB (Pinecone), Tailwind, Full-stack Type Safety"),(0,n.kt)("p",null,"Use this template:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"wasp new <project-name> -t embeddings\n")),(0,n.kt)("h3",{id:"todo-app-w-typescript"},"Todo App w/ Typescript"),(0,n.kt)("p",null,"A simple Todo App with Typescript and Full-stack Type Safety."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Features:")," Auth (username/password), Full-stack Type Safety"),(0,n.kt)("p",null,"Use this template:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"wasp new <project-name> -t todo-ts\n")),(0,n.kt)("h3",{id:"ai-generated-starter-"},"AI Generated Starter \ud83e\udd16"),(0,n.kt)("p",null,"Using the same tech as used on ",(0,n.kt)("a",{parentName:"p",href:"https://usemage.ai/"},"https://usemage.ai/"),", Wasp generates your custom starter template based on your\nproject description. It will automatically generate your data model, auth, queries, actions and React pages. "),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"You will need to provide your own OpenAI API key to be able to use this template.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Features:")," Generated using OpenAI's GPT models, Auth (username/password), Queries, Actions, Pages, Full-stack Type Safety"))}u.isMDXComponent=!0},94995:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/embeddings-client-33c5c7acf7de93746c020bb041548e8a.png"},71391:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/open-saas-banner-94e8d63943cb75968abc6f62b691d0c8.png"}}]);