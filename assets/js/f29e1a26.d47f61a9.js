"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[19306],{85162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),i=a(86010);const s={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(s.tabItem,r),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),i=a(67294),s=a(86010),r=a(12466),o=a(16550),l=a(91980),u=a(67392),p=a(50012);function d(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function c(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=c(e),[r,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,u]=h({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,p.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),k=(()=>{const e=l??d;return m({value:e,tabValues:s})?e:null})();(0,i.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var k=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==o&&(d(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},r,{className:(0,s.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return i.createElement("div",{className:(0,s.Z)("tabs-container",f.tabList)},i.createElement(b,(0,n.Z)({},e,t)),i.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return i.createElement(w,(0,n.Z)({key:String(t)},e))}},46300:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),i=a(50012);function s(e){let{path:t}=e;const[a]=(0,i.Nk)("docusaurus.tab.js-ts"),s=t.lastIndexOf("{"),r=t.slice(s+1,t.length-1),[o,l]=r.split(","),u=t.slice(0,s);return n.createElement("code",null,u+("js"===a?o:l))}},48863:(e,t,a)=>{a.d(t,{A:()=>r,v:()=>o});var n=a(67294),i=a(50012),s=a(49875);function r(e){let{children:t}=e;const[a]=(0,i.Nk)("docusaurus.tab.js-ts");return"ts"===a&&n.createElement(s.Z,null,t)}function o(e){let{children:t}=e;const[a]=(0,i.Nk)("docusaurus.tab.js-ts");return"js"===a&&n.createElement(s.Z,null,t)}},18306:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var n=a(87462),i=(a(67294),a(3905)),s=(a(46300),a(85162)),r=a(74866),o=a(44996),l=a(48863);const u={title:"7. Adding Authentication"},p=void 0,d={unversionedId:"tutorial/auth",id:"version-0.15.0/tutorial/auth",title:"7. Adding Authentication",description:"Most modern apps need a way to create and authenticate users. Wasp makes this as easy as possible with its first-class auth support.",source:"@site/versioned_docs/version-0.15.0/tutorial/07-auth.md",sourceDirName:"tutorial",slug:"/tutorial/auth",permalink:"/docs/tutorial/auth",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.15.0/tutorial/07-auth.md",tags:[],version:"0.15.0",sidebarPosition:7,frontMatter:{title:"7. Adding Authentication"},sidebar:"docs",previous:{title:"6. Modifying Data",permalink:"/docs/tutorial/actions"},next:{title:"Entities",permalink:"/docs/data-model/entities"}},c={},m=[{value:"Creating a User Entity",id:"creating-a-user-entity",level:2},{value:"Adding Auth to the Project",id:"adding-auth-to-the-project",level:2},{value:"Adding Login and Signup Pages",id:"adding-login-and-signup-pages",level:2},{value:"Update the Main Page to Require Auth",id:"update-the-main-page-to-require-auth",level:2},{value:"Defining a User-Task Relation",id:"defining-a-user-task-relation",level:2},{value:"Updating Operations to Check Authentication",id:"updating-operations-to-check-authentication",level:2},{value:"Logout Button",id:"logout-button",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],h={toc:m},g="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(g,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Most modern apps need a way to create and authenticate users. Wasp makes this as easy as possible with its first-class auth support."),(0,i.kt)("p",null,"To add users to your app, you must:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," Entity."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Tell Wasp to use the ",(0,i.kt)("em",{parentName:"li"},"Username and Password")," authentication."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add login and signup pages."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update the main page to require authentication."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add a relation between ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Task")," entities."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Modify your Queries and Actions so users can only see and modify their tasks."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add a logout button.")),(0,i.kt)("h2",{id:"creating-a-user-entity"},"Creating a User Entity"),(0,i.kt)("p",null,"Since Wasp manages authentication, it will create ",(0,i.kt)("a",{parentName:"p",href:"../auth/entities"},"the auth related entities")," for you in the background. Nothing to do here!"),(0,i.kt)("p",null,"You must only add the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," Entity to keep track of who owns which tasks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},"// ...\n\nmodel User {\n  id Int @id @default(autoincrement())\n}\n")),(0,i.kt)("h2",{id:"adding-auth-to-the-project"},"Adding Auth to the Project"),(0,i.kt)("p",null,"Next, tell Wasp to use full-stack ",(0,i.kt)("a",{parentName:"p",href:"../auth/overview"},"authentication"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app TodoApp {\n  wasp: {\n    version: "^0.15.0"\n  },\n  // highlight-start\n  title: "TodoApp",\n  auth: {\n    // Tells Wasp which entity to use for storing users.\n    userEntity: User,\n    methods: {\n      // Enable username and password auth.\n      usernameAndPassword: {}\n    },\n    // We\'ll see how this is used in a bit.\n    onAuthFailedRedirectTo: "/login"\n  }\n  // highlight-end\n}\n\n// ...\n')),(0,i.kt)("p",null,"Don't forget to update the database schema by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"wasp db migrate-dev\n")),(0,i.kt)("p",null,"By doing this, Wasp will create:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../auth/ui"},"Auth UI")," with login and signup forms."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"logout()")," action."),(0,i.kt)("li",{parentName:"ul"},"A React hook ",(0,i.kt)("inlineCode",{parentName:"li"},"useAuth()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context.user")," for use in Queries and Actions.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Wasp also supports authentication using ",(0,i.kt)("a",{parentName:"p",href:"../auth/social-auth/google"},"Google"),", ",(0,i.kt)("a",{parentName:"p",href:"../auth/social-auth/github"},"GitHub"),", and ",(0,i.kt)("a",{parentName:"p",href:"../auth/email"},"email"),", with more on the way!")),(0,i.kt)("h2",{id:"adding-login-and-signup-pages"},"Adding Login and Signup Pages"),(0,i.kt)("p",null,"Wasp creates the login and signup forms for us, but we still need to define the pages to display those forms on. We'll start by declaring the pages in the Wasp file:"),(0,i.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute SignupRoute { path: "/signup", to: SignupPage }\npage SignupPage {\n  component: import { SignupPage } from "@src/SignupPage"\n}\n\nroute LoginRoute { path: "/login", to: LoginPage }\npage LoginPage {\n  component: import { LoginPage } from "@src/LoginPage"\n}\n'))),(0,i.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute SignupRoute { path: "/signup", to: SignupPage }\npage SignupPage {\n  component: import { SignupPage } from "@src/SignupPage"\n}\n\nroute LoginRoute { path: "/login", to: LoginPage }\npage LoginPage {\n  component: import { LoginPage } from "@src/LoginPage"\n}\n')))),(0,i.kt)("p",null,"Great, Wasp now knows these pages exist!"),(0,i.kt)("p",null,"Here's the React code for the pages you've just imported:"),(0,i.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/LoginPage.jsx"',title:'"src/LoginPage.jsx"'},"import { Link } from 'react-router-dom'\nimport { LoginForm } from 'wasp/client/auth'\n\nexport const LoginPage = () => {\n  return (\n    <div style={{ maxWidth: '400px', margin: '0 auto' }}>\n      <LoginForm />\n      <br />\n      <span>\n        I don't have an account yet (<Link to=\"/signup\">go to signup</Link>).\n      </span>\n    </div>\n  )\n}\n"))),(0,i.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/LoginPage.tsx"',title:'"src/LoginPage.tsx"'},"import { Link } from 'react-router-dom'\nimport { LoginForm } from 'wasp/client/auth'\n\nexport const LoginPage = () => {\n  return (\n    <div style={{ maxWidth: '400px', margin: '0 auto' }}>\n      <LoginForm />\n      <br />\n      <span>\n        I don't have an account yet (<Link to=\"/signup\">go to signup</Link>).\n      </span>\n    </div>\n  )\n}\n")))),(0,i.kt)("p",null,"The signup page is very similar to the login page:"),(0,i.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/SignupPage.jsx"',title:'"src/SignupPage.jsx"'},"import { Link } from 'react-router-dom'\nimport { SignupForm } from 'wasp/client/auth'\n\nexport const SignupPage = () => {\n  return (\n    <div style={{ maxWidth: '400px', margin: '0 auto' }}>\n      <SignupForm />\n      <br />\n      <span>\n        I already have an account (<Link to=\"/login\">go to login</Link>).\n      </span>\n    </div>\n  )\n}\n"))),(0,i.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/SignupPage.tsx"',title:'"src/SignupPage.tsx"'},"import { Link } from 'react-router-dom'\nimport { SignupForm } from 'wasp/client/auth'\n\nexport const SignupPage = () => {\n  return (\n    <div style={{ maxWidth: '400px', margin: '0 auto' }}>\n      <SignupForm />\n      <br />\n      <span>\n        I already have an account (<Link to=\"/login\">go to login</Link>).\n      </span>\n    </div>\n  )\n}\n")))),(0,i.kt)(l.A,{mdxType:"ShowForTs"},(0,i.kt)("admonition",{title:"Type-safe links",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Since you are using Typescript, you can benefit from using Wasp's type-safe ",(0,i.kt)("inlineCode",{parentName:"p"},"Link")," component and the ",(0,i.kt)("inlineCode",{parentName:"p"},"routes")," object. Check out the ",(0,i.kt)("a",{parentName:"p",href:"../advanced/links"},"type-safe links docs")," for more details."))),(0,i.kt)("h2",{id:"update-the-main-page-to-require-auth"},"Update the Main Page to Require Auth"),(0,i.kt)("p",null,"We don't want users who are not logged in to access the main page, because they won't be able to create any tasks. So let's make the page private by requiring the user to be logged in:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\npage MainPage {\n  // highlight-next-line\n  authRequired: true,\n  component: import { MainPage } from "@src/MainPage"\n}\n')),(0,i.kt)("p",null,"Now that auth is required for this page, unauthenticated users will be redirected to ",(0,i.kt)("inlineCode",{parentName:"p"},"/login"),", as we specified with ",(0,i.kt)("inlineCode",{parentName:"p"},"app.auth.onAuthFailedRedirectTo"),"."),(0,i.kt)("p",null,"Additionally, when ",(0,i.kt)("inlineCode",{parentName:"p"},"authRequired")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the page's React component will be provided a ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," object as prop."),(0,i.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/MainPage.jsx"',title:'"src/MainPage.jsx"'},"// highlight-next-line\nexport const MainPage = ({ user }) => {\n  // Do something with the user\n  // ...\n}\n"))),(0,i.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/MainPage.tsx"',title:'"src/MainPage.tsx"'},"import { AuthUser } from 'wasp/auth'\n\n// highlight-next-line\nexport const MainPage = ({ user }: { user: AuthUser }) => {\n  // Do something with the user\n  // ...\n}\n")))),(0,i.kt)("p",null,"Ok, time to test this out. Navigate to the main page (",(0,i.kt)("inlineCode",{parentName:"p"},"/"),") of the app. You'll get redirected to ",(0,i.kt)("inlineCode",{parentName:"p"},"/login"),", where you'll be asked to authenticate."),(0,i.kt)("p",null,"Since we just added users, you don't have an account yet. Go to the signup page and create one. You'll be sent back to the main page where you will now be able to see the TODO list!"),(0,i.kt)("p",null,"Let's check out what the database looks like. Start the Prisma Studio:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp db studio\n")),(0,i.kt)("img",{alt:"Database demonstration - password hashing",src:(0,o.Z)("img/wasp_user_in_db.gif"),style:{border:"1px solid black"}}),(0,i.kt)("p",null,"You'll notice that we now have a ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," entity in the database alongside the ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," entity."),(0,i.kt)("p",null,"However, you will notice that if you try logging in as different users and creating some tasks, all users share the same tasks. That's because you haven't yet updated the queries and actions to have per-user tasks. Let's do that next."),(0,i.kt)("small",null,(0,i.kt)("p",null,"You might notice some extra Prisma models like ",(0,i.kt)("inlineCode",{parentName:"p"},"Auth"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthIdentity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Session")," that Wasp created for you. You don't need to care about these right now, but if you are curious, you can read more about them ",(0,i.kt)("a",{parentName:"p",href:"../auth/entities"},"here"),".")),(0,i.kt)("h2",{id:"defining-a-user-task-relation"},"Defining a User-Task Relation"),(0,i.kt)("p",null,"First, let's define a one-to-many relation between users and tasks (check the ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema/relations"},"Prisma docs on relations"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},"// ...\n\nmodel User {\n  id    Int    @id @default(autoincrement())\n  // highlight-next-line\n  tasks Task[]\n}\n\nmodel Task {\n  id          Int     @id @default(autoincrement())\n  description String\n  isDone      Boolean @default(false)\n  // highlight-next-line\n  user        User?   @relation(fields: [userId], references: [id])\n  // highlight-next-line\n  userId      Int?\n}\n")),(0,i.kt)("p",null,"As always, you must migrate the database after changing the Entities:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"wasp db migrate-dev\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We made ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"userId")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," optional (via ",(0,i.kt)("inlineCode",{parentName:"p"},"?"),") because that allows us to keep the existing tasks, which don't have a user assigned, in the database."),(0,i.kt)("p",{parentName:"admonition"},"This isn't recommended because it allows an unwanted state in the database (what is the purpose of the task not belonging to anybody?) and normally we would not make these fields optional."),(0,i.kt)("p",{parentName:"admonition"},"Instead, we would do a data migration to take care of those tasks, even if it means just deleting them all. However, for this tutorial, for the sake of simplicity, we will stick with this.")),(0,i.kt)("h2",{id:"updating-operations-to-check-authentication"},"Updating Operations to Check Authentication"),(0,i.kt)("p",null,"Next, let's update the queries and actions to forbid access to non-authenticated users and to operate only on the currently logged-in user's tasks:"),(0,i.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/queries.js"',title:'"src/queries.js"'},"// highlight-next-line\nimport { HttpError } from 'wasp/server'\n\nexport const getTasks = async (args, context) => {\n  // highlight-start\n  if (!context.user) {\n    throw new HttpError(401)\n  }\n  // highlight-end\n  return context.entities.Task.findMany({\n    // highlight-next-line\n    where: { user: { id: context.user.id } },\n    orderBy: { id: 'asc' },\n  })\n}\n"))),(0,i.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/queries.ts"',title:'"src/queries.ts"'},"import { Task } from 'wasp/entities'\n// highlight-next-line\nimport { HttpError } from 'wasp/server'\nimport { GetTasks } from 'wasp/server/operations'\n\nexport const getTasks: GetTasks<void, Task[]> = async (args, context) => {\n  // highlight-start\n  if (!context.user) {\n    throw new HttpError(401)\n  }\n  // highlight-end\n  return context.entities.Task.findMany({\n    // highlight-next-line\n    where: { user: { id: context.user.id } },\n    orderBy: { id: 'asc' },\n  })\n}\n")))),(0,i.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'{1,4-6,10,16-18} title="src/actions.js"',"{1,4-6,10,16-18}":!0,title:'"src/actions.js"'},"import { HttpError } from 'wasp/server'\n\nexport const createTask = async (args, context) => {\n  if (!context.user) {\n    throw new HttpError(401)\n  }\n  return context.entities.Task.create({\n    data: {\n      description: args.description,\n      user: { connect: { id: context.user.id } },\n    },\n  })\n}\n\nexport const updateTask = async (args, context) => {\n  if (!context.user) {\n    throw new HttpError(401)\n  }\n  return context.entities.Task.updateMany({\n    where: { id: args.id, user: { id: context.user.id } },\n    data: { isDone: args.isDone },\n  })\n}\n"))),(0,i.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{2,11-13,17,28-30,32} title="src/actions.ts"',"{2,11-13,17,28-30,32}":!0,title:'"src/actions.ts"'},"import { Task } from 'wasp/entities'\nimport { HttpError } from 'wasp/server'\nimport { CreateTask, UpdateTask } from 'wasp/server/operations'\n\ntype CreateTaskPayload = Pick<Task, 'description'>\n\nexport const createTask: CreateTask<CreateTaskPayload, Task> = async (\n  args,\n  context\n) => {\n  if (!context.user) {\n    throw new HttpError(401)\n  }\n  return context.entities.Task.create({\n    data: {\n      description: args.description,\n      user: { connect: { id: context.user.id } },\n    },\n  })\n}\n\ntype UpdateTaskPayload = Pick<Task, 'id' | 'isDone'>\n\nexport const updateTask: UpdateTask<\n  UpdateTaskPayload,\n  { count: number }\n> = async ({ id, isDone }, context) => {\n  if (!context.user) {\n    throw new HttpError(401)\n  }\n  return context.entities.Task.updateMany({\n    where: { id, user: { id: context.user.id } },\n    data: { isDone },\n  })\n}\n")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Due to how Prisma works, we had to convert ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"updateMany")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"updateTask")," action to be able to specify the user id in ",(0,i.kt)("inlineCode",{parentName:"p"},"where"),".")),(0,i.kt)("p",null,"With these changes, each user should have a list of tasks that only they can see and edit."),(0,i.kt)("p",null,"Try playing around, adding a few users and some tasks for each of them. Then open the DB studio:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"wasp db studio\n")),(0,i.kt)("img",{alt:"Database demonstration",src:(0,o.Z)("img/wasp_db_demonstration.gif"),style:{border:"1px solid black"}}),(0,i.kt)("p",null,"You will see that each user has their tasks, just as we specified in our code!"),(0,i.kt)("h2",{id:"logout-button"},"Logout Button"),(0,i.kt)("p",null,"Last, but not least, let's add the logout functionality:"),(0,i.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{2,10} title="src/MainPage.jsx"',"{2,10}":!0,title:'"src/MainPage.jsx"'},"// ...\nimport { logout } from 'wasp/client/auth'\n//...\n\nconst MainPage = () => {\n  // ...\n  return (\n    <div>\n      // ...\n      <button onClick={logout}>Logout</button>\n    </div>\n  )\n}\n"))),(0,i.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{2,10} title="src/MainPage.tsx"',"{2,10}":!0,title:'"src/MainPage.tsx"'},"// ...\nimport { logout } from 'wasp/client/auth'\n//...\n\nconst MainPage = () => {\n  // ...\n  return (\n    <div>\n      // ...\n      <button onClick={logout}>Logout</button>\n    </div>\n  )\n}\n")))),(0,i.kt)("p",null,"This is it, we have a working authentication system, and our Todo app is multi-user!"),(0,i.kt)("h2",{id:"whats-next"},"What's Next?"),(0,i.kt)("p",null,"We did it \ud83c\udf89 You've followed along with this tutorial to create a basic Todo app with Wasp."),(0,i.kt)(l.v,{mdxType:"ShowForJs"},(0,i.kt)("p",null,"You can find the complete code for the JS version of the tutorial ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/release/examples/tutorials/TodoApp"},"here"),".")),(0,i.kt)(l.A,{mdxType:"ShowForTs"},(0,i.kt)("p",null,"You can find the complete code for the TS version of the tutorial ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/release/examples/tutorials/TodoAppTs"},"here"),".")),(0,i.kt)("p",null,"You should be ready to learn about more complicated features and go more in-depth with the features already covered. Scroll through the sidebar on the left side of the page to see every feature Wasp has to offer. Or, let your imagination run wild and start building your app! \u2728"),(0,i.kt)("p",null,"Looking for inspiration?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get a jump start on your next project with ",(0,i.kt)("a",{parentName:"li",href:"../project/starter-templates"},"Starter Templates"),"."),(0,i.kt)("li",{parentName:"ul"},"Check out our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wasp-lang/wasp/tree/release/examples"},"official examples"),"."),(0,i.kt)("li",{parentName:"ul"},"Make a real-time app with ",(0,i.kt)("a",{parentName:"li",href:"../advanced/web-sockets"},"Web Sockets"),".")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you notice that some of the features you'd like to have are missing, or have any other kind of feedback, please write to us on ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," or create an issue on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"Github"),", so we can learn which features to add/improve next \ud83d\ude4f"),(0,i.kt)("p",{parentName:"admonition"},"If you would like to contribute or help to build a feature, let us know! You can find more details on contributing ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing"},"here"),".")),(0,i.kt)("p",null,"Oh, and do ",(0,i.kt)("a",{parentName:"p",href:"/#signup"},(0,i.kt)("strong",{parentName:"a"},"subscribe to our newsletter")),"! We usually send one per month, and Matija does his best to unleash his creativity to make them engaging and fun to read :D!"))}k.isMDXComponent=!0}}]);