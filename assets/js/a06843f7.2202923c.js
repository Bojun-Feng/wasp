"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(87462),a=n(67294),i=n(86010),o=n(12466),s=n(16550),l=n(91980),p=n(67392),u=n(50012);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=m(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,p]=f({queryString:n,groupId:r}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),y=(()=>{const e=l??c;return d({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),g(e)}),[p,g,i]),tabValues:i}}var y=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),r=p[n].value;r!==s&&(c(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=g(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(b,(0,r.Z)({},e,t)))}function T(e){const t=(0,y.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},46300:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(50012);function i(e){let{path:t}=e;const[n]=(0,a.Nk)("docusaurus.tab.js-ts"),i=t.lastIndexOf("{"),o=t.slice(i+1,t.length-1),[s,l]=o.split(","),p=t.slice(0,i);return r.createElement("code",null,p+("js"===n?s:l))}},90487:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(87462),a=(n(67294),n(3905));n(46300);const i={toc:[]},o="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(o,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"LSP Problems",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you are using TypeScript, your editor may sometimes report type and import errors even while ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp start")," is running."),(0,a.kt)("p",{parentName:"admonition"},"This happens when the TypeScript Language Server gets out of sync with the current code.\nIf you're using VS Code, you can manually restart the language server by opening the command palette and selecting ",(0,a.kt)("em",{parentName:"p"},'"TypeScript: Restart TS Server."'),"\nOpen the command pallete with:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"Shift")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"P")," if you're on Windows or Linux."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Cmd")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"Shift")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"P")," if you're on a Mac."))))}s.isMDXComponent=!0},81667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),i=(n(46300),n(85162)),o=n(74866),s=n(90487);const l={title:"TypeScript Support"},p="TypeScript support",u={unversionedId:"general/typescript",id:"version-0.14.0/general/typescript",title:"TypeScript Support",description:"TypeScript is a programming language that adds static type analysis to JavaScript.",source:"@site/versioned_docs/version-0.14.0/general/typescript.md",sourceDirName:"general",slug:"/general/typescript",permalink:"/docs/0.14.0/general/typescript",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.14.0/general/typescript.md",tags:[],version:"0.14.0",frontMatter:{title:"TypeScript Support"},sidebar:"docs",previous:{title:"CLI Reference",permalink:"/docs/0.14.0/general/cli"},next:{title:"Contributing",permalink:"/docs/0.14.0/contributing"}},c={},m=[{value:"Migrating your project to TypeScript",id:"migrating-your-project-to-typescript",level:2},{value:"Migrating a single file",id:"migrating-a-single-file",level:3},{value:"Migrating the rest of the project",id:"migrating-the-rest-of-the-project",level:3}],d={toc:m},f="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typescript-support"},"TypeScript support"),(0,a.kt)("p",null,"TypeScript is a programming language that adds static type analysis to JavaScript.\nIt is a superset of JavaScript, which means all JavaScript code is valid TypeScript code.\nIt also compiles to JavaScript before running."),(0,a.kt)("p",null,"TypeScript's type system helps catch errors at build time (this reduces runtime errors), and provides type-based auto-completion in IDEs."),(0,a.kt)("p",null,"Each Wasp feature includes TypeScript documentation."),(0,a.kt)("p",null,"If you're starting a new project and want to use TypeScript, you don't need to do anything special.\nJust follow the feature docs you are interested in, and they will tell you everything you need to know.\nWe recommend you start by going through ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.14.0/tutorial/create"},"the tutorial"),"."),(0,a.kt)("p",null,"To migrate an existing Wasp project from JavaScript to TypeScript, follow this guide."),(0,a.kt)("h2",{id:"migrating-your-project-to-typescript"},"Migrating your project to TypeScript"),(0,a.kt)("p",null,"Since Wasp ships with out-of-the-box TypeScript support, migrating your project is as simple as changing file extensions and using the language.\nThis approach allows you to gradually migrate your project on a file-by-file basis."),(0,a.kt)("p",null,"We will first show you how to migrate a single file and then help you generalize the procedure to the rest of your project."),(0,a.kt)("h3",{id:"migrating-a-single-file"},"Migrating a single file"),(0,a.kt)("p",null,"Assuming your ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file defines the ",(0,a.kt)("inlineCode",{parentName:"p"},"Task")," entity:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},"// ...\n\nmodel Task {\n  id          Int @id @default(autoincrement())\n  description String\n  isDone      Boolean\n}\n")),(0,a.kt)("p",null,"And your ",(0,a.kt)("inlineCode",{parentName:"p"},"main.wasp")," file defines the ",(0,a.kt)("inlineCode",{parentName:"p"},"getTaskInfo")," query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'query getTaskInfo {\n  fn: import { getTaskInfo } from "@src/queries",\n  entities: [Task]\n}\n')),(0,a.kt)("p",null,"We will show you how to migrate the following ",(0,a.kt)("inlineCode",{parentName:"p"},"queries.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/queries.js"',title:'"src/queries.js"'},"import HttpError from 'wasp/server'\n\nfunction getInfoMessage(task) {\n  const isDoneText = task.isDone ? 'is done' : 'is not done'\n  return `Task '${task.description}' is ${isDoneText}.`\n}\n\nexport const getTaskInfo = async ({ id }, context) => {\n  const Task = context.entities.Task\n  const task = await Task.findUnique({ where: { id } })\n  if (!task) {\n    throw new HttpError(404)\n  }\n  return getInfoMessage(task)\n}\n")),(0,a.kt)("p",null,"To migrate this file to TypeScript, all you have to do is:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Change the filename from ",(0,a.kt)("inlineCode",{parentName:"li"},"queries.js")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"queries.ts"),"."),(0,a.kt)("li",{parentName:"ol"},"Write some types (and optionally use some of Wasp's TypeScript features).")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"before",label:"Before",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/queries.js"',title:'"src/queries.js"'},"import HttpError from '@wasp/core/HttpError.js'\n\nfunction getInfoMessage(task) {\n  const isDoneText = task.isDone ? 'is done' : 'is not done'\n  return `Task '${task.description}' is ${isDoneText}.`\n}\n\nexport const getTaskInfo = async ({ id }, context) => {\n  const Task = context.entities.Task\n  const task = await Task.findUnique({ where: { id } })\n  if (!task) {\n    throw new HttpError(404)\n  }\n  return getInfoMessage(task)\n}\n"))),(0,a.kt)(i.Z,{value:"after",label:"After",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=src/queries.ts",title:"src/queries.ts"},"import HttpError from 'wasp/server'\n// highlight-next-line\nimport { type Task } from '@wasp/entities'\n// highlight-next-line\nimport { type GetTaskInfo } from '@wasp/server/operations'\n\n// highlight-next-line\nfunction getInfoMessage(task: Pick<Task, 'isDone' | 'description'>): string {\n  const isDoneText = task.isDone ? 'is done' : 'is not done'\n  return `Task '${task.description}' is ${isDoneText}.`\n}\n\n// highlight-next-line\nexport const getTaskInfo: GetTaskInfo<Pick<Task, 'id'>, string> = async (\n  { id },\n  context\n) => {\n  const Task = context.entities.Task\n\n  const task = await Task.findUnique({ where: { id } })\n  if (!task) {\n    throw new HttpError(404)\n  }\n\n  return getInfoMessage(task)\n}\n")))),(0,a.kt)("p",null,"Your code is now processed by TypeScript and uses several of Wasp's TypeScript-specific features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Task")," - A type that represents the ",(0,a.kt)("inlineCode",{parentName:"p"},"Task")," entity. Using this type connects your data to the model definitions in the ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file. Read more about this feature ",(0,a.kt)("a",{parentName:"p",href:"../data-model/entities"},"here"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"GetTaskInfo<...>")," - A generic type Wasp automatically generates to give you type\nsupport when implementing the Query. Thanks to this type, the compiler knows:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The type of the ",(0,a.kt)("inlineCode",{parentName:"li"},"context")," object."),(0,a.kt)("li",{parentName:"ul"},"The type of ",(0,a.kt)("inlineCode",{parentName:"li"},"args"),"."),(0,a.kt)("li",{parentName:"ul"},"The Query's return type.")),(0,a.kt)("p",{parentName:"li"},"And gives you Intellisense and type-checking. Read more about this feature ",(0,a.kt)("a",{parentName:"p",href:"../data-model/operations/queries#implementing-queries"},"here"),"."))),(0,a.kt)("p",null,"You don't need to change anything inside the ",(0,a.kt)("inlineCode",{parentName:"p"},".wasp")," file."),(0,a.kt)("h3",{id:"migrating-the-rest-of-the-project"},"Migrating the rest of the project"),(0,a.kt)("p",null,"You can migrate your project gradually - on a file-by-file basis."),(0,a.kt)("p",null,"When you want to migrate a file, follow the procedure outlined above:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Change the file's extension."),(0,a.kt)("li",{parentName:"ol"},"Fix the type errors."),(0,a.kt)("li",{parentName:"ol"},"Read the Wasp docs and decide which TypeScript features you want to use.")),(0,a.kt)(s.ZP,{mdxType:"TypescriptServerNote"}))}g.isMDXComponent=!0}}]);