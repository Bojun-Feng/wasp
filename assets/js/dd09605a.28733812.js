"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[90275],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=i,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38610:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),i=a(44996);const o=e=>n.createElement("div",null,n.createElement("p",{align:"center"},n.createElement("figure",null,n.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,i.Z)(e.source)}),n.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},46300:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),i=a(50012);function o(e){let{path:t}=e;const[a]=(0,i.Nk)("docusaurus.tab.js-ts"),o=t.lastIndexOf("{"),r=t.slice(o+1,t.length-1),[s,p]=r.split(","),l=t.slice(0,o);return n.createElement("code",null,l+("js"===a?s:p))}},53334:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var n=a(87462),i=(a(67294),a(3905)),o=(a(46300),a(38610));const r={title:"Introduction",slug:"/"},s=void 0,p={unversionedId:"introduction/introduction",id:"version-0.14.0/introduction/introduction",title:"Introduction",description:"If you are looking for the installation instructions, check out the Quick Start section.",source:"@site/versioned_docs/version-0.14.0/introduction/introduction.md",sourceDirName:"introduction",slug:"/",permalink:"/docs/0.14.0/",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.14.0/introduction/introduction.md",tags:[],version:"0.14.0",frontMatter:{title:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Quick Start",permalink:"/docs/0.14.0/quick-start"}},l={},c=[{value:"Wasp is a tool to build modern web applications",id:"wasp-is-a-tool-to-build-modern-web-applications",level:2},{value:"Works well with your existing stack",id:"works-well-with-your-existing-stack",level:3},{value:"Wasp&#39;s secret sauce",id:"wasps-secret-sauce",level:3},{value:"So what does the code look like?",id:"so-what-does-the-code-look-like",level:2},{value:"When to use Wasp",id:"when-to-use-wasp",level:2},{value:"Best used for",id:"best-used-for",level:3},{value:"Avoid using Wasp for",id:"avoid-using-wasp-for",level:3},{value:"Wasp is a DSL",id:"wasp-is-a-dsl",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you are looking for the installation instructions, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.14.0/quick-start"},"Quick Start")," section.")),(0,i.kt)("p",null,"We will give a brief overview of what Wasp is, how it works on a high level and when to use it."),(0,i.kt)("h2",{id:"wasp-is-a-tool-to-build-modern-web-applications"},"Wasp is a tool to build modern web applications"),(0,i.kt)("p",null,"It is an opinionated way of building ",(0,i.kt)("strong",{parentName:"p"},"full-stack web applications"),". It takes care of all three\nmajor parts of a web application: ",(0,i.kt)("strong",{parentName:"p"},"client")," (front-end), ",(0,i.kt)("strong",{parentName:"p"},"server")," (back-end) and ",(0,i.kt)("strong",{parentName:"p"},"database"),"."),(0,i.kt)("h3",{id:"works-well-with-your-existing-stack"},"Works well with your existing stack"),(0,i.kt)("p",null,"Wasp is not trying to do everything at once but rather focuses on the complexity that arises from connecting all the parts of the stack (client, server, database, deployment)."),(0,i.kt)("p",null,"Wasp is using ",(0,i.kt)("strong",{parentName:"p"},"React"),", ",(0,i.kt)("strong",{parentName:"p"},"Node.js")," and ",(0,i.kt)("strong",{parentName:"p"},"Prisma")," under the hood and relies on them to define web components and server queries and actions."),(0,i.kt)("h3",{id:"wasps-secret-sauce"},"Wasp's secret sauce"),(0,i.kt)("p",null,"At the core is the Wasp compiler which takes the Wasp config and your Javascript code and outputs the client app, server app and deployment code."),(0,i.kt)(o.Z,{source:"/img/lp/wasp-compilation-diagram.png",caption:"How the magic happens \ud83c\udf08",mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,"The cool thing about having a compiler that understands your code is that it can do a lot of things for you. "),(0,i.kt)("p",null,"Define your app in the Wasp config and get:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"login and signup with Auth UI components,"),(0,i.kt)("li",{parentName:"ul"},"full-stack type safety,"),(0,i.kt)("li",{parentName:"ul"},"e-mail sending,"),(0,i.kt)("li",{parentName:"ul"},"async processing jobs,"),(0,i.kt)("li",{parentName:"ul"},"React Query powered data fetching,"),(0,i.kt)("li",{parentName:"ul"},"security best practices,"),(0,i.kt)("li",{parentName:"ul"},"and more.")),(0,i.kt)("p",null,"You don't need to write any code for these features, Wasp will take care of it for you \ud83e\udd2f And what's even better, Wasp also maintains the code for you, so you don't have to worry about keeping up with the latest security best practices. As Wasp updates, so does your app."),(0,i.kt)("h2",{id:"so-what-does-the-code-look-like"},"So what does the code look like?"),(0,i.kt)("p",null,"Let's say you want to build a web app that allows users to ",(0,i.kt)("strong",{parentName:"p"},"create and share their favorite recipes"),"."),(0,i.kt)("p",null,"Let's start with the ",(0,i.kt)("inlineCode",{parentName:"p"},"main.wasp")," file: it is the central file of your app, where you describe the app from the high level."),(0,i.kt)("p",null,"Let's give our app a title and let's immediately turn on the full-stack authentication via username and password:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app RecipeApp {\n  title: "My Recipes",\n  wasp: { version: "^0.14.0" },\n  auth: {\n    methods: { usernameAndPassword: {} },\n    onAuthFailedRedirectTo: "/login",\n    userEntity: User\n  }\n}\n')),(0,i.kt)("p",null,"Let's then add the data models for your recipes. Wasp understands and uses the models from the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file. We will want to have Users and Users can own Recipes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},"...\n\n// Data models are defined using Prisma Schema Language.\nmodel User {\n  id          Int @id @default(autoincrement())\n  recipes     Recipe[]\n}\n\nmodel Recipe {\n  id          Int @id @default(autoincrement())\n  title       String\n  description String?\n  userId      Int\n  user        User @relation(fields: [userId], references: [id])\n}\n")),(0,i.kt)("p",null,"Next, let's define how to do something with these data models!"),(0,i.kt)("p",null,"We do that by defining Operations, in this case, a Query ",(0,i.kt)("inlineCode",{parentName:"p"},"getRecipes")," and Action ",(0,i.kt)("inlineCode",{parentName:"p"},"addRecipe"),",\nwhich are in their essence Node.js functions that execute on the server and can, thanks to Wasp, very easily be called from the client."),(0,i.kt)("p",null,"First, we define these Operations in our ",(0,i.kt)("inlineCode",{parentName:"p"},"main.wasp"),' file, so Wasp knows about them and can "beef them up":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// Queries have automatic cache invalidation and are type-safe.\nquery getRecipes {\n  fn: import { getRecipes } from "@src/recipe/operations",\n  entities: [Recipe],\n}\n\n// Actions are type-safe and can be used to perform side-effects.\naction addRecipe {\n  fn: import { addRecipe } from "@src/recipe/operations",\n  entities: [Recipe],\n}\n')),(0,i.kt)("p",null,"... and then implement them in our Javascript (or TypeScript) code (we show just the query here, using TypeScript):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/recipe/operations.ts"',title:'"src/recipe/operations.ts"'},'// Wasp generates the types for you.\nimport { type GetRecipes } from "wasp/server/operations";\nimport { type Recipe } from "wasp/entities";\n\nexport const getRecipes: GetRecipes<{}, Recipe[]> = async (_args, context) => {\n  return context.entities.Recipe.findMany( // Prisma query\n    { where: { user: { id: context.user.id } } }\n  );\n};\n\nexport const addRecipe ...\n')),(0,i.kt)("p",null,"Now we can very easily use these in our React components!"),(0,i.kt)("p",null,"For the end, let's create a home page of our app."),(0,i.kt)("p",null,"First, we define it in ",(0,i.kt)("inlineCode",{parentName:"p"},"main.wasp"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'...\n\nroute HomeRoute { path: "/", to: HomePage }\npage HomePage {\n  component: import { HomePage } from "@src/pages/HomePage",\n  authRequired: true // Will send user to /login if not authenticated.\n}\n')),(0,i.kt)("p",null,"and then implement it as a React component in JS/TS (that calls the Operations we previously defined):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/HomePage.tsx"',title:'"src/pages/HomePage.tsx"'},'import { useQuery, getRecipes } from "wasp/client/operations";\nimport { type User } from "wasp/entities";\n\nexport function HomePage({ user }: { user: User }) {\n  // Due to full-stack type safety, `recipes` will be of type `Recipe[]` here.\n  const { data: recipes, isLoading } = useQuery(getRecipes); // Calling our query here!\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  return (\n    <div>\n      <h1>Recipes</h1>\n      <ul>\n        {recipes ? recipes.map((recipe) => (\n          <li key={recipe.id}>\n            <div>{recipe.title}</div>\n            <div>{recipe.description}</div>\n          </li>\n        )) : \'No recipes defined yet!\'}\n      </ul>\n    </div>\n  );\n}\n')),(0,i.kt)("p",null,"And voila! We are listing all the recipes in our app \ud83c\udf89"),(0,i.kt)("p",null,"This was just a quick example to give you a taste of what Wasp is. For step by step tour through the most important Wasp features, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.14.0/tutorial/create"},"Todo app tutorial"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Above we skipped defining ",(0,i.kt)("inlineCode",{parentName:"p"},"/login")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/signup")," pages to keep the example a bit shorter, but those are very simple to do by using Wasp's Auth UI feature.")),(0,i.kt)("h2",{id:"when-to-use-wasp"},"When to use Wasp"),(0,i.kt)("p",null,"Wasp addresses the same core problems that typical web app frameworks are addressing, and it in big part ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Duck_test"},"looks, swims and quacks")," like a web app framework."),(0,i.kt)("h3",{id:"best-used-for"},"Best used for"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"building full-stack web apps (like e.g. Airbnb or Asana)"),(0,i.kt)("li",{parentName:"ul"},"quickly starting a web app with industry best practices"),(0,i.kt)("li",{parentName:"ul"},"to be used alongside modern web dev stack (React and Node.js are currently supported)")),(0,i.kt)("h3",{id:"avoid-using-wasp-for"},"Avoid using Wasp for"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"building static/presentational websites"),(0,i.kt)("li",{parentName:"ul"},"to be used as a no-code solution"),(0,i.kt)("li",{parentName:"ul"},"to be a solve-it-all tool in a single language")),(0,i.kt)("h2",{id:"wasp-is-a-dsl"},"Wasp is a DSL"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You don't need to know what a DSL is to use Wasp, but if you are curious, you can read more about it below.")),(0,i.kt)("p",null,"Wasp does not match typical expectations of a web app framework: it is not a set of libraries, it is instead a simple programming language that understands your code and can do a lot of things for you."),(0,i.kt)("p",null,"Wasp is a programming language, but a specific kind: it is specialized for a single purpose: ",(0,i.kt)("strong",{parentName:"p"},"building modern web applications"),". We call such languages ",(0,i.kt)("em",{parentName:"p"},"DSL"),"s (Domain Specific Language)."),(0,i.kt)("p",null,"Other examples of ",(0,i.kt)("em",{parentName:"p"},"DSL"),"s that are often used today are e.g. ",(0,i.kt)("em",{parentName:"p"},"SQL")," for databases and ",(0,i.kt)("em",{parentName:"p"},"HTML")," for web page layouts.\nThe main advantage and reason why ",(0,i.kt)("em",{parentName:"p"},"DSL"),"s exist is that they need to do only one task (e.g. database queries)\nso they can do it well and provide the best possible experience for the developer."),(0,i.kt)("p",null,"The same idea stands behind Wasp - a language that will allow developers to ",(0,i.kt)("strong",{parentName:"p"},"build modern web applications with 10x less code and less stack-specific knowledge"),"."))}m.isMDXComponent=!0}}]);