"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[49392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46300:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(50012);function i(e){let{path:t}=e;const[n]=(0,r.Nk)("docusaurus.tab.js-ts"),i=t.lastIndexOf("{"),o=t.slice(i+1,t.length-1),[s,l]=o.split(","),p=t.slice(0,i);return a.createElement("code",null,p+("js"===n?s:l))}},60622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=(n(46300),n(44996));const o={title:"4. Database Entities"},s=void 0,l={unversionedId:"tutorial/entities",id:"version-0.14.0/tutorial/entities",title:"4. Database Entities",description:"Entities are one of the most important concepts in Wasp and are how you define what gets stored in the database.",source:"@site/versioned_docs/version-0.14.0/tutorial/04-entities.md",sourceDirName:"tutorial",slug:"/tutorial/entities",permalink:"/docs/0.14.0/tutorial/entities",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.14.0/tutorial/04-entities.md",tags:[],version:"0.14.0",sidebarPosition:4,frontMatter:{title:"4. Database Entities"},sidebar:"docs",previous:{title:"3. Pages & Routes",permalink:"/docs/0.14.0/tutorial/pages"},next:{title:"5. Querying the Database",permalink:"/docs/0.14.0/tutorial/queries"}},p={},c=[],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Entities are one of the most important concepts in Wasp and are how you define what gets stored in the database."),(0,r.kt)("p",null,"Wasp uses Prisma to talk to the database, and you define Entities by defining Prisma models in the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file."),(0,r.kt)("p",null,"Since our Todo app is all about tasks, we'll define a Task entity by adding a Task model in the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},"// ...\n\nmodel Task {\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Read more about how Wasp Entities work in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.14.0/data-model/entities"},"Entities")," section or how Wasp uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.14.0/data-model/prisma-file"},"Prisma Schema File")," section.")),(0,r.kt)("p",null,"To update the database schema to include this entity, stop the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp start")," process, if it's running, and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wasp db migrate-dev\n")),(0,r.kt)("p",null,"You'll need to do this any time you change an entity's definition. It instructs Prisma to create a new database migration and apply it to the database."),(0,r.kt)("p",null,"To take a look at the database and the new ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," entity, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wasp db studio\n")),(0,r.kt)("p",null,"This will open a new page in your browser to view and edit the data in your database."),(0,r.kt)("img",{alt:"Todo App - Db studio showing Task schema",src:(0,i.Z)("img/todo-app-db-studio-task-entity.png"),style:{border:"1px solid black"}}),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," entity and check out its fields! We don't have any data in our database yet, but we are about to change that."))}m.isMDXComponent=!0}}]);