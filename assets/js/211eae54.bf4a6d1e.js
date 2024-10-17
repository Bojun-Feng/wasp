"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[88421],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),i=n(86010),l=n(12466),o=n(16550),s=n(91980),p=n(67392),u=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,p]=h({queryString:n,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=s??c;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),k(e)}),[p,k,i]),tabValues:i}}var g=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==o&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=k(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(b,(0,a.Z)({key:String(t)},e))}},46300:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(50012);function i(e){let{path:t}=e;const[n]=(0,r.Nk)("docusaurus.tab.js-ts"),i=t.lastIndexOf("{"),l=t.slice(i+1,t.length-1),[o,s]=l.split(","),p=t.slice(0,i);return a.createElement("code",null,p+("js"===n?o:s))}},46620:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));n(46300);const i={toc:[]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("small",null,(0,r.kt)("p",null,"Read more about accessing the user data in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/auth/entities/#accessing-the-auth-fields"},"Accessing User Data")," section of the docs.")))}o.isMDXComponent=!0},36318:(e,t,n)=>{n.d(t,{ZP:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=(n(46300),n(85162)),l=n(74866);const o={toc:[]},s="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"userSignupFields")," defines all the extra fields that need to be set on the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," during the sign-up process. For example, if you have ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"phone")," fields on your ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," entity, you can set them by defining the ",(0,r.kt)("inlineCode",{parentName:"p"},"userSignupFields")," like this:"),(0,r.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/auth.js"',title:'"src/auth.js"'},"import { defineUserSignupFields } from 'wasp/server/auth'\n\nexport const userSignupFields = defineUserSignupFields({\n  address: (data) => {\n    if (!data.address) {\n      throw new Error('Address is required')\n    }\n    return data.address\n  }\n  phone: (data) => data.phone,\n})\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/auth.ts"',title:'"src/auth.ts"'},"import { defineUserSignupFields } from 'wasp/server/auth'\n\nexport const userSignupFields = defineUserSignupFields({\n  address: (data) => {\n    if (!data.address) {\n      throw new Error('Address is required')\n    }\n    return data.address\n  }\n  phone: (data) => data.phone,\n})\n")))))}p.isMDXComponent=!0},35307:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));n(46300);const i={toc:[]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const keycloakIdentity = user.identities.keycloak\n\n// Keycloak User ID for example "12345678-1234-1234-1234-123456789012"\nkeycloakIdentity.id\n')))}o.isMDXComponent=!0},24373:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));n(46300);const i={toc:[]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Provider-specific behavior comes down to implementing two functions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"configFn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userSignupFields"))),(0,r.kt)("p",null,"The reference shows how to define both."),(0,r.kt)("p",null,"For behavior common to all providers, check the general ",(0,r.kt)("a",{parentName:"p",href:"/docs/auth/overview#api-reference"},"API Reference"),"."))}o.isMDXComponent=!0},34626:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));n(46300);const i={toc:[]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When a user ",(0,r.kt)("strong",{parentName:"p"},"signs in for the first time"),", Wasp creates a new user account and links it to the chosen auth provider account for future logins."))}o.isMDXComponent=!0},63785:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));n(46300);const i={toc:[]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Wasp automatically generates the ",(0,r.kt)("inlineCode",{parentName:"p"},"defineUserSignupFields")," function to help you correctly type your ",(0,r.kt)("inlineCode",{parentName:"p"},"userSignupFields")," object."))}o.isMDXComponent=!0},40971:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));n(46300);const i={toc:[]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When a user logs in using a social login provider, the backend receives some data about the user.\nWasp lets you access this data inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"userSignupFields")," getters."),(0,r.kt)("p",null,"For example, the User entity can include a ",(0,r.kt)("inlineCode",{parentName:"p"},"displayName")," field which you can set based on the details received from the provider."),(0,r.kt)("p",null,"Wasp also lets you customize the configuration of the providers' settings using the ",(0,r.kt)("inlineCode",{parentName:"p"},"configFn")," function."),(0,r.kt)("p",null,"Let's use this example to show both fields in action:"))}o.isMDXComponent=!0},10769:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));n(46300);const i={toc:[]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, Wasp doesn't store any information it receives from the social login provider. It only stores the user's ID specific to the provider."),(0,r.kt)("p",null,"There are two mechanisms used for overriding the default behavior:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userSignupFields")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"configFn"))),(0,r.kt)("p",null,"Let's explore them in more detail."))}o.isMDXComponent=!0},75801:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));n(46300);const i={toc:[]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To read more about how to set up the logout button and get access to the logged-in user in both client and server code, read the docs on ",(0,r.kt)("a",{parentName:"p",href:"../../auth/overview"},"using auth"),"."))}o.isMDXComponent=!0},79780:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));n(46300);const i={toc:[]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here's a skeleton of how our ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp")," should look like after we're done:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},"// Configuring the social authentication\napp myApp {\n  auth: { ... }\n}\n\n// Defining routes and pages\nroute LoginRoute { ... }\npage LoginPage { ... }\n")))}o.isMDXComponent=!0},8007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>v,default:()=>C,frontMatter:()=>f,metadata:()=>b,toc:()=>N});var a=n(87462),r=(n(67294),n(3905)),i=n(46300),l=n(85162),o=n(74866),s=(n(44996),n(34626)),p=n(10769),u=n(40971),c=n(75801),d=n(79780),m=n(63785),h=n(24373),k=n(36318),g=n(35307),y=n(46620);const f={title:"Keycloak"},v=void 0,b={unversionedId:"auth/social-auth/keycloak",id:"version-0.15.0/auth/social-auth/keycloak",title:"Keycloak",description:"Wasp supports Keycloak Authentication out of the box.",source:"@site/versioned_docs/version-0.15.0/auth/social-auth/keycloak.md",sourceDirName:"auth/social-auth",slug:"/auth/social-auth/keycloak",permalink:"/docs/auth/social-auth/keycloak",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.15.0/auth/social-auth/keycloak.md",tags:[],version:"0.15.0",frontMatter:{title:"Keycloak"},sidebar:"docs",previous:{title:"Google",permalink:"/docs/auth/social-auth/google"},next:{title:"Discord",permalink:"/docs/auth/social-auth/discord"}},w={},N=[{value:"Setting up Keycloak Auth",id:"setting-up-keycloak-auth",level:2},{value:"1. Adding Keycloak Auth to Your Wasp File",id:"1-adding-keycloak-auth-to-your-wasp-file",level:3},{value:"2. Adding the User Entity",id:"2-adding-the-user-entity",level:3},{value:"3. Creating a Keycloak Client",id:"3-creating-a-keycloak-client",level:3},{value:"4. Adding Environment Variables",id:"4-adding-environment-variables",level:3},{value:"5. Adding the Necessary Routes and Pages",id:"5-adding-the-necessary-routes-and-pages",level:3},{value:"6. Create the Client Pages",id:"6-create-the-client-pages",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Default Behaviour",id:"default-behaviour",level:2},{value:"Overrides",id:"overrides",level:2},{value:"Data Received From Keycloak",id:"data-received-from-keycloak",level:3},{value:"Using the Data Received From Keycloak",id:"using-the-data-received-from-keycloak",level:3},{value:"Using Auth",id:"using-auth",level:2},{value:"API Reference",id:"api-reference",level:2}],x={toc:N},T="wrapper";function C(e){let{components:t,...f}=e;return(0,r.kt)(T,(0,a.Z)({},x,f,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Wasp supports Keycloak Authentication out of the box."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.keycloak.org/"},"Keycloak")," is an open-source identity and access management solution for modern applications and services. Keycloak provides both SAML and OpenID protocol solutions. It also has a very flexible and powerful administration UI."),(0,r.kt)("p",null,"Let's walk through enabling Keycloak authentication, explain some of the default settings, and show how to override them."),(0,r.kt)("h2",{id:"setting-up-keycloak-auth"},"Setting up Keycloak Auth"),(0,r.kt)("p",null,"Enabling Keycloak Authentication comes down to a series of steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enabling Keycloak authentication in the Wasp file."),(0,r.kt)("li",{parentName:"ol"},"Adding the ",(0,r.kt)("inlineCode",{parentName:"li"},"User")," entity."),(0,r.kt)("li",{parentName:"ol"},"Creating a Keycloak client."),(0,r.kt)("li",{parentName:"ol"},"Adding the necessary Routes and Pages"),(0,r.kt)("li",{parentName:"ol"},"Using Auth UI components in our Pages.")),(0,r.kt)(d.ZP,{mdxType:"WaspFileStructureNote"}),(0,r.kt)("h3",{id:"1-adding-keycloak-auth-to-your-wasp-file"},"1. Adding Keycloak Auth to Your Wasp File"),(0,r.kt)("p",null,"Let's start by properly configuring the Auth object:"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app myApp {\n  wasp: {\n    version: "^0.15.0"\n  },\n  title: "My App",\n  auth: {\n    // 1. Specify the User entity (we\'ll define it next)\n    // highlight-next-line\n    userEntity: User,\n    methods: {\n      // 2. Enable Keycloak Auth\n      // highlight-next-line\n      keycloak: {}\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n'))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app myApp {\n  wasp: {\n    version: "^0.15.0"\n  },\n  title: "My App",\n  auth: {\n    // 1. Specify the User entity (we\'ll define it next)\n    // highlight-next-line\n    userEntity: User,\n    methods: {\n      // 2. Enable Keycloak Auth\n      // highlight-next-line\n      keycloak: {}\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n')))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"userEntity")," is explained in ",(0,r.kt)("a",{parentName:"p",href:"../../auth/social-auth/overview#social-login-entity"},"the social auth overview"),"."),(0,r.kt)("h3",{id:"2-adding-the-user-entity"},"2. Adding the User Entity"),(0,r.kt)("p",null,"Let's now define the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.auth.userEntity")," entity in the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file:"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},"// 3. Define the user entity\nmodel User {\n  // highlight-next-line\n  id Int @id @default(autoincrement())\n  // Add your own fields below\n  // ...\n}\n"))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},"// 3. Define the user entity\nmodel User {\n  // highlight-next-line\n  id Int @id @default(autoincrement())\n  // Add your own fields below\n  // ...\n}\n")))),(0,r.kt)("h3",{id:"3-creating-a-keycloak-client"},"3. Creating a Keycloak Client"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log into your Keycloak admin console."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Clients"),", click on ",(0,r.kt)("strong",{parentName:"li"},"Create Client"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Keycloak Screenshot 1",src:n(44281).Z,width:"2020",height:"1262"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fill in the ",(0,r.kt)("strong",{parentName:"li"},"Client ID")," and choose a name for the client.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Keycloak Screenshot 2",src:n(77985).Z,width:"2226",height:"1226"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the next step, enable ",(0,r.kt)("strong",{parentName:"li"},"Client Authentication"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Keycloak Screenshot 3",src:n(70543).Z,width:"2162",height:"1178"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Valid Redirect URIs"),", add ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3001/auth/keycloak/callback")," for local development.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Keycloak Screenshot 4",src:n(22106).Z,width:"2216",height:"1326"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- Once you know on which URL(s) your API server will be deployed, also add those URL(s).\n- For example: `https://my-server-url.com/auth/keycloak/callback`.\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save"),"."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Credentials")," tab, copy the ",(0,r.kt)("strong",{parentName:"li"},"Client Secret")," value, which we'll use in the next step.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Keycloak Screenshot 5",src:n(95420).Z,width:"2132",height:"1280"})),(0,r.kt)("h3",{id:"4-adding-environment-variables"},"4. Adding Environment Variables"),(0,r.kt)("p",null,"Add these environment variables to the ",(0,r.kt)("inlineCode",{parentName:"p"},".env.server")," file at the root of your project (take their values from the previous step):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env.server"',title:'".env.server"'},"KEYCLOAK_CLIENT_ID=your-keycloak-client-id\nKEYCLOAK_CLIENT_SECRET=your-keycloak-client-secret\nKEYCLOAK_REALM_URL=https://your-keycloak-url.com/realms/master\n")),(0,r.kt)("p",null,"We assumed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"KEYCLOAK_REALM_URL")," env variable that you are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," realm. If you are using a different realm, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," with your realm name."),(0,r.kt)("h3",{id:"5-adding-the-necessary-routes-and-pages"},"5. Adding the Necessary Routes and Pages"),(0,r.kt)("p",null,"Let's define the necessary authentication Routes and Pages."),(0,r.kt)("p",null,"Add the following code to your ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp")," file:"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute LoginRoute { path: "/login", to: LoginPage }\npage LoginPage {\n  component: import { Login } from "@src/pages/auth.jsx"\n}\n'))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute LoginRoute { path: "/login", to: LoginPage }\npage LoginPage {\n  component: import { Login } from "@src/pages/auth.tsx"\n}\n')))),(0,r.kt)("p",null,"We'll define the React components for these pages in the ",(0,r.kt)(i.Z,{path:"src/pages/auth.{jsx,tsx}",mdxType:"FileExtSwitcher"})," file below."),(0,r.kt)("h3",{id:"6-create-the-client-pages"},"6. Create the Client Pages"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We are using ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS")," to style the pages. Read more about how to add it ",(0,r.kt)("a",{parentName:"p",href:"../../project/css-frameworks"},"here"),".")),(0,r.kt)("p",null,"Let's now create an ",(0,r.kt)(i.Z,{path:"auth.{jsx,tsx}",mdxType:"FileExtSwitcher"})," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages"),".\nIt should have the following code:"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/auth.jsx"',title:'"src/pages/auth.jsx"'},'import { LoginForm } from \'wasp/client/auth\'\n\nexport function Login() {\n  return (\n    <Layout>\n      <LoginForm />\n    </Layout>\n  )\n}\n\n// A layout component to center the content\nexport function Layout({ children }) {\n  return (\n    <div className="h-full w-full bg-white">\n      <div className="flex min-h-[75vh] min-w-full items-center justify-center">\n        <div className="h-full w-full max-w-sm bg-white p-5">\n          <div>{children}</div>\n        </div>\n      </div>\n    </div>\n  )\n}\n'))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/auth.tsx"',title:'"src/pages/auth.tsx"'},'import { LoginForm } from \'wasp/client/auth\'\n\nexport function Login() {\n  return (\n    <Layout>\n      <LoginForm />\n    </Layout>\n  )\n}\n\n// A layout component to center the content\nexport function Layout({ children }: { children: React.ReactNode }) {\n  return (\n    <div className="h-full w-full bg-white">\n      <div className="flex min-h-[75vh] min-w-full items-center justify-center">\n        <div className="h-full w-full max-w-sm bg-white p-5">\n          <div>{children}</div>\n        </div>\n      </div>\n    </div>\n  )\n}\n')))),(0,r.kt)("admonition",{title:"Auth UI",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Our pages use an automatically generated Auth UI component. Read more about Auth UI components ",(0,r.kt)("a",{parentName:"p",href:"../../auth/ui"},"here"),".")),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Yay, we've successfully set up Keycloak Auth!"),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp db migrate-dev")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp start")," should now give you a working app with authentication.\nTo see how to protect specific pages (i.e., hide them from non-authenticated users), read the docs on ",(0,r.kt)("a",{parentName:"p",href:"../../auth/overview"},"using auth"),"."),(0,r.kt)("h2",{id:"default-behaviour"},"Default Behaviour"),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"keycloak: {}")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.methods")," dictionary to use it with default settings:"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app myApp {\n  wasp: {\n    version: "^0.15.0"\n  },\n  title: "My App",\n  auth: {\n    userEntity: User,\n    methods: {\n      // highlight-next-line\n      keycloak: {}\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n'))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app myApp {\n  wasp: {\n    version: "^0.15.0"\n  },\n  title: "My App",\n  auth: {\n    userEntity: User,\n    methods: {\n      // highlight-next-line\n      keycloak: {}\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n')))),(0,r.kt)(s.ZP,{mdxType:"DefaultBehaviour"}),(0,r.kt)("h2",{id:"overrides"},"Overrides"),(0,r.kt)(p.ZP,{mdxType:"OverrideIntro"}),(0,r.kt)("h3",{id:"data-received-from-keycloak"},"Data Received From Keycloak"),(0,r.kt)("p",null,"We are using Keycloak's API and its ",(0,r.kt)("inlineCode",{parentName:"p"},"/userinfo")," endpoint to fetch the user's data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Keycloak user data"',title:'"Keycloak',user:!0,'data"':!0},"{\n  sub: '5adba8fc-3ea6-445a-a379-13f0bb0b6969',\n  email_verified: true,\n  name: 'Test User',\n  preferred_username: 'test',\n  given_name: 'Test',\n  family_name: 'User',\n  email: 'test@example.com'\n}\n")),(0,r.kt)("p",null,"The fields you receive will depend on the scopes you requested. The default scope is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"profile")," only. If you want to get the user's email, you need to specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," scope in the ",(0,r.kt)("inlineCode",{parentName:"p"},"configFn")," function."),(0,r.kt)("small",null,(0,r.kt)("p",null,"For up-to-date info about the data received from Keycloak, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs-api/23.0.7/javadocs/org/keycloak/representations/UserInfo.html"},"Keycloak API documentation"),".")),(0,r.kt)("h3",{id:"using-the-data-received-from-keycloak"},"Using the Data Received From Keycloak"),(0,r.kt)(u.ZP,{mdxType:"OverrideExampleIntro"}),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app myApp {\n  wasp: {\n    version: "^0.15.0"\n  },\n  title: "My App",\n  auth: {\n    userEntity: User,\n    methods: {\n      keycloak: {\n        // highlight-next-line\n        configFn: import { getConfig } from "@src/auth/keycloak.js",\n        // highlight-next-line\n        userSignupFields: import { userSignupFields } from "@src/auth/keycloak.js"\n      }\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},"model User {\n  id          Int    @id @default(autoincrement())\n  username    String @unique\n  displayName String\n}\n\n// ...\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/auth/keycloak.js",title:"src/auth/keycloak.js"},"export const userSignupFields = {\n  username: () => 'hardcoded-username',\n  displayName: (data) => data.profile.name,\n}\n\nexport function getConfig() {\n  return {\n    scopes: ['profile', 'email'],\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app myApp {\n  wasp: {\n    version: "^0.15.0"\n  },\n  title: "My App",\n  auth: {\n    userEntity: User,\n    methods: {\n      keycloak: {\n        // highlight-next-line\n        configFn: import { getConfig } from "@src/auth/keycloak.js",\n        // highlight-next-line\n        userSignupFields: import { userSignupFields } from "@src/auth/keycloak.js"\n      }\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},"model User {\n  id          Int    @id @default(autoincrement())\n  username    String @unique\n  displayName String\n}\n\n// ...\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/auth/keycloak.ts",title:"src/auth/keycloak.ts"},"import { defineUserSignupFields } from 'wasp/server/auth'\n\nexport const userSignupFields = defineUserSignupFields({\n  username: () => 'hardcoded-username',\n  displayName: (data: any) => data.profile.name,\n})\n\nexport function getConfig() {\n  return {\n    scopes: ['profile', 'email'],\n  }\n}\n")),(0,r.kt)(m.ZP,{mdxType:"GetUserFieldsType"}))),(0,r.kt)("h2",{id:"using-auth"},"Using Auth"),(0,r.kt)(c.ZP,{mdxType:"UsingAuthNote"}),(0,r.kt)("p",null,"When you receive the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," object ",(0,r.kt)("a",{parentName:"p",href:"/docs/auth/overview#accessing-the-logged-in-user"},"on the client or the server"),", you'll be able to access the user's Keycloak ID like this:"),(0,r.kt)(g.ZP,{mdxType:"KeycloakData"}),(0,r.kt)(y.ZP,{mdxType:"AccessingUserDataNote"}),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)(h.ZP,{mdxType:"ApiReferenceIntro"}),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app myApp {\n  wasp: {\n    version: "^0.15.0"\n  },\n  title: "My App",\n  auth: {\n    userEntity: User,\n    methods: {\n      keycloak: {\n        // highlight-next-line\n        configFn: import { getConfig } from "@src/auth/keycloak.js",\n        // highlight-next-line\n        userSignupFields: import { userSignupFields } from "@src/auth/keycloak.js"\n      }\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n'))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app myApp {\n  wasp: {\n    version: "^0.15.0"\n  },\n  title: "My App",\n  auth: {\n    userEntity: User,\n    methods: {\n      keycloak: {\n        // highlight-next-line\n        configFn: import { getConfig } from "@src/auth/keycloak.js",\n        // highlight-next-line\n        userSignupFields: import { userSignupFields } from "@src/auth/keycloak.js"\n      }\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n')))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"keycloak")," dict has the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"configfn-extimport"},(0,r.kt)("inlineCode",{parentName:"h4"},"configFn: ExtImport")),(0,r.kt)("p",{parentName:"li"},"This function must return an object with the scopes for the OAuth provider."),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/auth/keycloak.js",title:"src/auth/keycloak.js"},"export function getConfig() {\n  return {\n    scopes: ['profile', 'email'],\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/auth/keycloak.ts",title:"src/auth/keycloak.ts"},"export function getConfig() {\n  return {\n    scopes: ['profile', 'email'],\n  }\n}\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"usersignupfields-extimport"},(0,r.kt)("inlineCode",{parentName:"h4"},"userSignupFields: ExtImport")),(0,r.kt)(k.ZP,{mdxType:"UserSignupFieldsExplainer"}),(0,r.kt)("p",{parentName:"li"},"Read more about the ",(0,r.kt)("inlineCode",{parentName:"p"},"userSignupFields")," function ",(0,r.kt)("a",{parentName:"p",href:"../overview#1-defining-extra-fields"},"here"),"."))))}C.isMDXComponent=!0},44281:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-keycloak-8155a8f9942220fefbd9b9dcc2cad35a.png"},77985:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-keycloak-32ad48fb343615017b70bd1eded25cb5.png"},70543:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-keycloak-c0c90613d7359d7a25b4b658985fd86d.png"},22106:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-keycloak-8820ce6352eaa10525119c5aa363350c.png"},95420:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/5-keycloak-bc37d067ab40972cae964de71798ede4.png"}}]);