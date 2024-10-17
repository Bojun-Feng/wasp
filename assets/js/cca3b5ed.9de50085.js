"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[24612],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),s=a(16550),i=a(91980),u=a(67392),p=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=i??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var k=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==s&&(c(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},46300:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(50012);function o(e){let{path:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts"),o=t.lastIndexOf("{"),l=t.slice(o+1,t.length-1),[s,i]=l.split(","),u=t.slice(0,o);return n.createElement("code",null,u+("js"===a?s:i))}},59673:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=(a(46300),a(85162)),l=a(74866);a(44996);const s={title:"Quick Start",slug:"/quick-start"},i=void 0,u={unversionedId:"introduction/quick-start",id:"version-0.14.0/introduction/quick-start",title:"Quick Start",description:"Installation",source:"@site/versioned_docs/version-0.14.0/introduction/quick-start.md",sourceDirName:"introduction",slug:"/quick-start",permalink:"/docs/0.14.0/quick-start",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.14.0/introduction/quick-start.md",tags:[],version:"0.14.0",frontMatter:{title:"Quick Start",slug:"/quick-start"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/0.14.0/"},next:{title:"Editor Setup",permalink:"/docs/0.14.0/editor-setup"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"What next?",id:"what-next",level:3},{value:"More details",id:"more-details",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation-1",level:3}],m={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Welcome, new Waspeteer \ud83d\udc1d!"),(0,r.kt)("p",null,"Let's create and run our first Wasp app in 3 short steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"To install Wasp on Linux / OSX / WSL (Windows), open your terminal and run:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sSL https://get.wasp-lang.dev/installer.sh | sh\n")),(0,r.kt)("p",{parentName:"li"},"\u2139\ufe0f Wasp requires Node.js and will warn you if it is missing: check below for ",(0,r.kt)("a",{parentName:"p",href:"#requirements"},"more details"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Then, create a new app by running:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp new\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Finally, run the app:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd <my-project-name>\nwasp start\n")))),(0,r.kt)("p",null,"That's it \ud83c\udf89 You have successfully created and served a new full-stack web app at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," and Wasp is serving both frontend and backend for you."),(0,r.kt)("admonition",{title:"Something Unclear?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"  Check ",(0,r.kt)("a",{parentName:"p",href:"#more-details"},"More Details")," section below if anything went wrong with the installation, or if you have additional questions.")),(0,r.kt)("admonition",{title:"Want an even faster start?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"  Try out ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.14.0/wasp-ai/creating-new-app"},"Wasp AI")," \ud83e\udd16 to generate a new Wasp app in minutes just from a title and short description!")),(0,r.kt)("admonition",{title:"Try Wasp Without Installing \ud83e\udd14?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"  Give Wasp a spin in the browser with GitHub Codespaces by following the intructions in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/release/examples/tutorials/TodoApp"},"Tutorial App README"))),(0,r.kt)("h3",{id:"what-next"},"What next?"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\ud83d\udc49 ",(0,r.kt)("strong",{parentName:"li"},"Check out the ",(0,r.kt)("a",{parentName:"strong",href:"/docs/0.14.0/tutorial/create"},"Todo App tutorial"),", which will take you through all the core features of Wasp!")," \ud83d\udc48"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.14.0/editor-setup"},"Setup your editor")," for working with Wasp."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Join us on ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/rzdnErX"},"Discord"),"! Any feedback or questions you have, we are there for you."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Follow Wasp development by subscribing to our newsletter: ",(0,r.kt)("a",{parentName:"li",href:"https://wasp-lang.dev/#signup"},"https://wasp-lang.dev/#signup")," . We usually send 1 per month, and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/matijaSos"},"Matija")," does his best to unleash his creativity to make them engaging and fun to read :D!")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"more-details"},"More details"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"You must have Node.js (and NPM) installed on your machine and available in ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),".\nA version of Node.js must be >= 18."),(0,r.kt)("p",null,"If you need it, we recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing your Node.js installation version(s)."),(0,r.kt)("details",null,(0,r.kt)("summary",{style:{cursor:"pointer",textDecoration:"underline"}},"A quick guide on installing/using nvm"),(0,r.kt)("div",null,(0,r.kt)("p",null,"  Install nvm via your OS package manager (",(0,r.kt)("inlineCode",{parentName:"p"},"apt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pacman"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"homebrew"),", ...) or via the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#install--update-script"},"nvm")," install script."),(0,r.kt)("p",null,"  Then, install a version of Node.js that you need:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nvm install 20\n")),(0,r.kt)("p",null,"  Finally, whenever you need to ensure a specific version of Node.js is used, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nvm use 20\n")),(0,r.kt)("p",null,"  to set the Node.js version for the current shell session."),(0,r.kt)("p",null,"  You can run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node -v\n")),(0,r.kt)("p",null,"  to check the version of Node.js currently being used in this shell session."),(0,r.kt)("p",null,"  Check NVM repo for more details: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"https://github.com/nvm-sh/nvm"),"."))),(0,r.kt)("h3",{id:"installation-1"},"Installation"),(0,r.kt)(l.Z,{defaultValue:"linux/osx",values:[{label:"Linux / macOS",value:"linux/osx"},{label:"Windows",value:"win"},{label:"From source",value:"source"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"linux/osx",mdxType:"TabItem"},(0,r.kt)("p",null,"Open your terminal and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sSL https://get.wasp-lang.dev/installer.sh | sh\n")),(0,r.kt)("admonition",{title:"Running Wasp on Mac with Mx chip (arm64)",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Experiencing the 'Bad CPU type in executable' issue on a device with arm64 (Apple Silicon)?"),"\nGiven that the wasp binary is built for x86 and not for arm64 (Apple Silicon), you'll need to install ",(0,r.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT211861"},"Rosetta on your Mac")," if you are using a Mac with Mx (M1, M2, ...). Rosetta is a translation process that enables users to run applications designed for x86 on arm64 (Apple Silicon). To install Rosetta, run the following command in your terminal"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"softwareupdate --install-rosetta\n")),(0,r.kt)("p",{parentName:"admonition"},"Once Rosetta is installed, you should be able to run Wasp without any issues."))),(0,r.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("p",null,"With Wasp for Windows, we are almost there: Wasp is successfully compiling and running on Windows but there is a bug or two stopping it from fully working. Check it out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/48"},"here")," if you are interested in helping."),(0,r.kt)("p",null,"In the meantime, the best way to start using Wasp on Windows is by using ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"WSL"),". Once you set up Ubuntu on WSL, just follow Linux instructions for installing Wasp. You can refer to this ",(0,r.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/blog/2023/11/21/guide-windows-development-wasp-wsl"},"article")," if you prefer a step by step guide to using Wasp in WSL environment. If you need further help, reach out to us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," - we have some community members using WSL that might be able to help you."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"  If you are using WSL2, make sure that your Wasp project is not on the Windows file system, but instead on the Linux file system. Otherwise, Wasp won't be able to detect file changes, due to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/WSL/issues/4739"},"issue in WSL2"),"."))),(0,r.kt)(o.Z,{value:"source",mdxType:"TabItem"},(0,r.kt)("p",null,"If the installer is not working for you or your OS is not supported, you can try building Wasp from the source."),(0,r.kt)("p",null,"To install from source, you need to clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"wasp repo"),", install ",(0,r.kt)("a",{parentName:"p",href:"https://cabal.readthedocs.io/en/stable/getting-started.html"},"Cabal")," on your machine and then run ",(0,r.kt)("inlineCode",{parentName:"p"},"cabal install")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"waspc/")," dir."),(0,r.kt)("p",null,"If you have never built Wasp before, this might take some time due to ",(0,r.kt)("inlineCode",{parentName:"p"},"cabal")," downloading dependencies for the first time."),(0,r.kt)("p",null,"Check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/main/waspc"},"waspc/")," for more details on building Wasp from the source."))))}h.isMDXComponent=!0}}]);