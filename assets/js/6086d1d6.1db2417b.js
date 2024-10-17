"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[74713],{85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),s=a(86010),i=a(12466),l=a(16550),o=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,u]=h({queryString:a,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),f=(()=>{const e=o??p;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var f=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(p(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,s.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",g.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},46300:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(50012);function s(e){let{path:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts"),s=t.lastIndexOf("{"),i=t.slice(s+1,t.length-1),[l,o]=i.split(","),u=t.slice(0,s);return n.createElement("code",null,u+("js"===a?l:o))}},48863:(e,t,a)=>{a.d(t,{A:()=>i,v:()=>l});var n=a(67294),r=a(50012),s=a(49875);function i(e){let{children:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts");return"ts"===a&&n.createElement(s.Z,null,t)}function l(e){let{children:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts");return"js"===a&&n.createElement(s.Z,null,t)}},35936:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),s=(a(46300),a(85162)),i=a(74866),l=a(48863);const o={title:"Static Asset Handling"},u=void 0,c={unversionedId:"project/static-assets",id:"version-0.14.0/project/static-assets",title:"Static Asset Handling",description:"Importing an Asset as URL",source:"@site/versioned_docs/version-0.14.0/project/static-assets.md",sourceDirName:"project",slug:"/project/static-assets",permalink:"/docs/0.14.0/project/static-assets",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.14.0/project/static-assets.md",tags:[],version:"0.14.0",frontMatter:{title:"Static Asset Handling"},sidebar:"docs",previous:{title:"Server Config",permalink:"/docs/0.14.0/project/server-config"},next:{title:"Env Variables",permalink:"/docs/0.14.0/project/env-vars"}},p={},d=[{value:"Importing an Asset as URL",id:"importing-an-asset-as-url",level:2},{value:"The <code>public</code> Directory",id:"the-public-directory",level:2}],m={toc:d},h="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"importing-an-asset-as-url"},"Importing an Asset as URL"),(0,r.kt)("p",null,"Importing a static asset (e.g. an image) will return its URL. For example:"),(0,r.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/App.jsx"',title:'"src/App.jsx"'},"import imgUrl from './img.png'\n\nfunction App() {\n  return <img src={imgUrl} alt=\"img\" />\n}\n"))),(0,r.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import imgUrl from './img.png'\n\nfunction App() {\n  return <img src={imgUrl} alt=\"img\" />\n}\n")))),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"imgUrl")," will be ",(0,r.kt)("inlineCode",{parentName:"p"},"/img.png")," during development, and become ",(0,r.kt)("inlineCode",{parentName:"p"},"/assets/img.2d8efhg.png")," in the production build."),(0,r.kt)("p",null,"This is what you want to use most of the time, as it ensures that the asset file exists and is included in the bundle."),(0,r.kt)("p",null,"We are using Vite under the hood, read more about importing static assets in Vite's ",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/assets.html#importing-asset-as-url"},"docs"),"."),(0,r.kt)("h2",{id:"the-public-directory"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"public")," Directory"),(0,r.kt)("p",null,"If you have assets that are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Never referenced in source code (e.g. robots.txt)"),(0,r.kt)("li",{parentName:"ul"},"Must retain the exact same file name (without hashing)"),(0,r.kt)("li",{parentName:"ul"},"...or you simply don't want to have to import an asset first just to get its URL")),(0,r.kt)("p",null,"Then you can place the asset in the ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," directory at the root of your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u2514\u2500\u2500 public\n    \u251c\u2500\u2500 favicon.ico\n    \u2514\u2500\u2500 robots.txt\n")),(0,r.kt)("p",null,"Assets in this directory will be served at root path ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," during development and copied to the root of the dist directory as-is."),(0,r.kt)("p",null,"For example, if you have a file ",(0,r.kt)("inlineCode",{parentName:"p"},"favicon.ico")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," directory, and your app is hosted at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://myapp.com"),", it will be made available at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://myapp.com/favicon.ico"),"."),(0,r.kt)("admonition",{title:"Usage in client code",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"You should always reference public assets using root absolute path",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"public/icon.png")," should be referenced in source code as ",(0,r.kt)("inlineCode",{parentName:"li"},"/icon.png"),"."))),(0,r.kt)("li",{parentName:"ul"},"Assets in the ",(0,r.kt)("inlineCode",{parentName:"li"},"public")," directory ",(0,r.kt)("strong",{parentName:"li"},"cannot be imported")," from ",(0,r.kt)(l.v,{mdxType:"ShowForJs"},"JavaScript"),(0,r.kt)(l.A,{mdxType:"ShowForTs"},"TypeScript"),"."))))}b.isMDXComponent=!0}}]);