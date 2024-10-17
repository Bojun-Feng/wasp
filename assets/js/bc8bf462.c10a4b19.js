"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[37733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),s=n(16550),l=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,u]=f({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=l??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==s&&(c(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},46300:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(50012);function o(e){let{path:t}=e;const[n]=(0,r.Nk)("docusaurus.tab.js-ts"),o=t.lastIndexOf("{"),i=t.slice(o+1,t.length-1),[s,l]=i.split(","),u=t.slice(0,o);return a.createElement("code",null,u+("js"===n?s:l))}},8057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=(n(46300),n(85162)),i=n(74866);n(44996);const s={title:"2. Project Structure"},l=void 0,u={unversionedId:"tutorial/project-structure",id:"version-0.14.0/tutorial/project-structure",title:"2. Project Structure",description:"After creating a new Wasp project, you'll get a file structure that looks like this:",source:"@site/versioned_docs/version-0.14.0/tutorial/02-project-structure.md",sourceDirName:"tutorial",slug:"/tutorial/project-structure",permalink:"/docs/0.14.0/tutorial/project-structure",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.14.0/tutorial/02-project-structure.md",tags:[],version:"0.14.0",sidebarPosition:2,frontMatter:{title:"2. Project Structure"},sidebar:"docs",previous:{title:"1. Creating a New Project",permalink:"/docs/0.14.0/tutorial/create"},next:{title:"3. Pages & Routes",permalink:"/docs/0.14.0/tutorial/pages"}},p={},c=[{value:"<code>main.wasp</code>",id:"mainwasp",level:2}],d={toc:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("p",null,"After creating a new Wasp project, you'll get a file structure that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 main.wasp          # Your Wasp code goes here.\n\u251c\u2500\u2500 schema.prisma      # Your Prisma schema goes here.\n\u251c\u2500\u2500 package.json       # Your dependencies and project info go here.\n\u251c\u2500\u2500 public             # Your static files (e.g., images, favicon) go here.\n\u251c\u2500\u2500 src                # Your source code (TS/JS/CSS/HTML) goes here.\n\u2502\xa0\xa0 \u251c\u2500\u2500 Main.css\n\u2502\xa0\xa0 \u251c\u2500\u2500 MainPage.jsx\n\u2502\xa0\xa0 \u251c\u2500\u2500 vite-env.d.ts\n\u2502\xa0\xa0 \u2514\u2500\u2500 waspLogo.png\n\u251c\u2500\u2500 tsconfig.json\n\u251c\u2500\u2500 vite.config.ts\n\u251c\u2500\u2500 .waspignore\n\u2514\u2500\u2500 .wasproot\n\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("p",null,"The default project uses JavaScript. To use TypeScript, you must manually rename the file\n",(0,r.kt)("inlineCode",{parentName:"p"},"src/MainPage.jsx")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"src/MainPage.tsx"),". Restart ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp start")," after you do this."),(0,r.kt)("p",null,"No updates to the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp")," file are necessary - it stays the same regardless of the language you use."),(0,r.kt)("p",null,"After creating a new Wasp project and renaming the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/MainPage.jsx")," file, your project should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 main.wasp          # Your Wasp code goes here.\n\u251c\u2500\u2500 schema.prisma      # Your Prisma schema goes here.\n\u251c\u2500\u2500 package.json       # Your dependencies and project info go here.\n\u251c\u2500\u2500 public             # Your static files (e.g., images, favicon) go here.\n\u251c\u2500\u2500 src                # Your source code (TS/JS/CSS/HTML) goes here.\n\u2502\xa0\xa0 \u251c\u2500\u2500 Main.css\n// highlight-next-line\n\u2502\xa0\xa0 \u251c\u2500\u2500 MainPage.tsx   # Renamed from MainPage.jsx\n\u2502\xa0\xa0 \u251c\u2500\u2500 vite-env.d.ts\n\u2502\xa0\xa0 \u2514\u2500\u2500 waspLogo.png\n\u251c\u2500\u2500 tsconfig.json\n\u251c\u2500\u2500 vite.config.ts\n\u251c\u2500\u2500 .waspignore\n\u2514\u2500\u2500 .wasproot\n\n")))),(0,r.kt)("p",null,"By ",(0,r.kt)("em",{parentName:"p"},"your code"),", we mean the ",(0,r.kt)("em",{parentName:"p"},'"the code you write"'),", as opposed to the code generated by Wasp. Wasp allows you to organize and structure your code however you think is best - there's no need to separate client files and server files into different directories."),(0,r.kt)("p",null,"We'd normally recommend organizing code by features (i.e., vertically).\nHowever, since this tutorial contains only a handful of files, there's no need for fancy organization.\nWe'll keep it simple by placing everything in the root ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," directory."),(0,r.kt)("p",null,"Many other files (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"vite-env.d.ts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".wasproot"),", etc.) help Wasp and the IDE improve your development experience with autocompletion, IntelliSense, and error reporting."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"vite.config.ts")," file is used to configure ",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/"},"Vite"),", Wasp's build tool of choice.\nWe won't be configuring Vite in this tutorial, so you can safely ignore the file. Still, if you ever end up wanting more control over Vite, you'll find everything you need to know in ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.14.0/project/custom-vite-config"},"custom Vite config docs"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file is where you define your database schema using ",(0,r.kt)("a",{parentName:"p",href:"https://www.prisma.io/"},"Prisma"),". We'll cover this a bit later in the tutorial."),(0,r.kt)("p",null,"The most important file in the project is ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp"),". Wasp uses the configuration within it to perform its magic. Based on what you write, it generates a bunch of code for your database, server-client communication, React routing, and more."),(0,r.kt)("p",null,"Let's take a closer look at ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp")),(0,r.kt)("h2",{id:"mainwasp"},(0,r.kt)("inlineCode",{parentName:"h2"},"main.wasp")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp")," is your app's definition file.\nIt defines the app's central components and helps Wasp to do a lot of the legwork for you."),(0,r.kt)("p",null,"The file is a list of ",(0,r.kt)("em",{parentName:"p"},"declarations"),". Each declaration defines a part of your app."),(0,r.kt)("p",null,"The default ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp")," file generated with ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp new")," on the previous page looks like this:"),(0,r.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app TodoApp {\n  wasp: {\n    version: "^0.14.0" // Pins the version of Wasp to use.\n  },\n  title: "TodoApp" // Used as the browser tab title. Note that all strings in Wasp are double quoted!\n}\n\nroute RootRoute { path: "/", to: MainPage }\npage MainPage {\n  // We specify that the React implementation of the page is exported from\n  // `src/MainPage.jsx`. This statement uses standard JS import syntax.\n  // Use `@src` to reference files inside the `src` folder.\n  component: import { MainPage } from "@src/MainPage"\n}\n'))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app TodoApp {\n  wasp: {\n    version: "^0.14.0" // Pins the version of Wasp to use.\n  },\n  title: "TodoApp" // Used as the browser tab title. Note that all strings in Wasp are double quoted!\n}\n\nroute RootRoute { path: "/", to: MainPage }\npage MainPage {\n  // We specify that the React implementation of the page is exported from\n  // `src/MainPage.tsx`. This statement uses standard JS import syntax.\n  // Use `@src` to reference files inside the `src` folder.\n  component: import { MainPage } from "@src/MainPage"\n}\n')))),(0,r.kt)("p",null,"This file uses three declaration types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"app"),": Top-level configuration information about your app.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"route"),": Describes which path each page should be accessible from.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"page"),": Defines a web page and the React component that gets rendered when the page is loaded."))),(0,r.kt)("p",null,"In the next section, we'll explore how ",(0,r.kt)("strong",{parentName:"p"},"route")," and ",(0,r.kt)("strong",{parentName:"p"},"page")," work together to build your web app."))}f.isMDXComponent=!0}}]);