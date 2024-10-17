"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[34873],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,c=h["".concat(l,".").concat(m)]||h[m]||d[m]||r;return a?o.createElement(c,i(i({ref:t},u),{},{components:a})):o.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38610:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(67294),n=a(44996);const r=e=>o.createElement("div",null,o.createElement("p",{align:"center"},o.createElement("figure",null,o.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,n.Z)(e.source)}),o.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},92908:(e,t,a)=>{a.d(t,{Z:()=>i});var o=a(67294),n=a(39960);a(44996);const r=()=>o.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),i=()=>o.createElement("p",{className:"in-blog-cta-link-container"},o.createElement(n.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),o.createElement(r,null),o.createElement(n.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),o.createElement(r,null),o.createElement(n.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},52268:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var o=a(87462),n=(a(67294),a(3905)),r=a(39960),i=a(44996),s=(a(92908),a(70589),a(38610));const l={title:"Alpha Testing Program: post-mortem",authors:["matijasos"],image:"/img/atp/welcome-to-atp-notion.png",tags:["webdev","wasp","startups","github"]},p=void 0,u={permalink:"/blog/2022/11/16/alpha-testing-program-post-mortem",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2022-11-16-alpha-testing-program-post-mortem.md",source:"@site/blog/2022-11-16-alpha-testing-program-post-mortem.md",title:"Alpha Testing Program: post-mortem",description:"We are working on a new web framework that integrates with React & Node.js, and also happens to be a language. As you can probably imagine, it\u2019s not easy to get people to use a new piece of technology, especially while still in Alpha. On the other hand, without users and their feedback, it\u2019s impossible to know what to build.",date:"2022-11-16T00:00:00.000Z",formattedDate:"November 16, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"},{label:"startups",permalink:"/blog/tags/startups"},{label:"github",permalink:"/blog/tags/github"}],readingTime:6.41,hasTruncateMarker:!0,authors:[{name:"Matija Sosic",title:"Co-founder & CEO @ Wasp",url:"https://github.com/matijasos",email:"matija@wasp-lang.dev",imageURL:"https://github.com/matijasos.png",key:"matijasos"}],frontMatter:{title:"Alpha Testing Program: post-mortem",authors:["matijasos"],image:"/img/atp/welcome-to-atp-notion.png",tags:["webdev","wasp","startups","github"]},prevItem:{title:"How Wasp reached all-time high PR count during Hacktoberfest: tips for OSS maintainers",permalink:"/blog/2022/11/17/hacktoberfest-wrap-up"},nextItem:{title:"Feature Announcement - Tailwind CSS support",permalink:"/blog/2022/11/16/tailwind-feature-announcement"}},h={authorsImageUrls:[void 0]},d=[{value:"\u201cOf course I know about Wasp! I just haven\u2019t come around to trying it out yet.\u201d",id:"of-course-i-know-about-wasp-i-just-havent-come-around-to-trying-it-out-yet",level:2},{value:"Welcome to Wasp Alpha Testing Program!",id:"welcome-to-wasp-alpha-testing-program",level:2},{value:"How it went - test profile &amp; feedback",id:"how-it-went---test-profile--feedback",level:2},{value:"Tester profile",id:"tester-profile",level:3},{value:"The feedback",id:"the-feedback",level:3},{value:"Post-mortem: what didn\u2019t go well",id:"post-mortem-what-didnt-go-well",level:2},{value:"No threshold for feedback quality",id:"no-threshold-for-feedback-quality",level:3},{value:"Using free text form for collecting addresses",id:"using-free-text-form-for-collecting-addresses",level:3},{value:"The non-obvious benefit of Alpha Testing Program",id:"the-non-obvious-benefit-of-alpha-testing-program",level:2},{value:"Summary &amp; going forward: Beta",id:"summary--going-forward-beta",level:2}],m={toc:d},c="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We are working on a new web framework that integrates with React & Node.js, and also happens to be a language. As you can probably imagine, it\u2019s not easy to get people to use a new piece of technology, especially while still in Alpha. On the other hand, without users and their feedback, it\u2019s impossible to know what to build."),(0,n.kt)("p",null,"That is why we ran Alpha Testing Program for Wasp - here is what we learned and what went both well and wrong along the way."),(0,n.kt)(s.Z,{alt:"twitter DM - shared atp in swag groups",source:"img/atp/swag-groups-twitter.png",mdxType:"ImgWithCaption"}),(0,n.kt)("h2",{id:"of-course-i-know-about-wasp-i-just-havent-come-around-to-trying-it-out-yet"},"\u201cOf course I know about Wasp! I just haven\u2019t come around to trying it out yet.\u201d"),(0,n.kt)("p",null,"Although we hit the front page of HN ",(0,n.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=26091956"},"several")," ",(0,n.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=32098144"},"times")," and are about to reach 2,000 stars on GitHub, there is still a big difference between a person starring a repo and actually sitting down and building something with it."),(0,n.kt)("p",null,"Talking to people, we realised a lot of them had heard of Wasp, thought it was a neat idea, but hadn\u2019t tried it out. These were the main reasons:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"having to find 30 mins to go through our ",(0,n.kt)("strong",{parentName:"li"},"Build a Todo App")," tutorial - ",(0,n.kt)("em",{parentName:"li"},"\u201cI'm busy now, but I\u2019ll do it next week.\u201d")),(0,n.kt)("li",{parentName:"ul"},"building a bare-bones todo app is not that exciting"),(0,n.kt)("li",{parentName:"ul"},"not having an idea what else to build"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"\u201cthe product is still in alpha, so I will bookmark it for later\u201d"))),(0,n.kt)("p",null,"These are all obvious and understandable reasons. I must admit, I\u2019m much the same \u2014 maybe even worse \u2014 when it comes to trying out something new/unproven. It just isn\u2019t a priority, and without a push that will help me overcome all these objections, I usually don\u2019t have an incentive to go through with it."),(0,n.kt)("p",null,"Having realised all that, we understood we needed to give people a reason to try Wasp out ",(0,n.kt)("strong",{parentName:"p"},"now"),", because that\u2019s when we needed the feedback, not next week."),(0,n.kt)("h2",{id:"welcome-to-wasp-alpha-testing-program"},"Welcome to Wasp Alpha Testing Program!"),(0,n.kt)("p",{align:"center"},(0,n.kt)("figure",null,(0,n.kt)("img",{alt:"The team",src:(0,i.Z)("img/atp/welcome-to-atp-notion.png")}),(0,n.kt)("figcaption",{style:{color:"#808080"}},"I was having a bit too much fun ",(0,n.kt)(r.Z,{to:(0,i.Z)("https://wasp-lang.notion.site/CLOSED-Welcome-to-Wasp-Alpha-Testing-program-f3a8a350802341abac87fb7831bb1e60"),mdxType:"Link"},"here"),", but Portal fans will understand."))),(0,n.kt)("p",null,"We quickly put together an admissions page for alpha testers in Notion (you can see it ",(0,n.kt)("a",{parentName:"p",href:"https://wasp-lang.notion.site/Wasp-Alpha-Testing-Program-Admissions-dca25649d63849cb8dfc55881e4f6f82"},"here"),") and started sharing it around. To counter the hurdles we mentioned above, we time-boxed the program (",(0,n.kt)("em",{parentName:"p"},"\u201dthis is happening now and you have 48 hours to finish once you start"),"\u201d) and promised a t-shirt to everyone that goes through the tutorial and fills out the feedback form."),(0,n.kt)(s.Z,{alt:"Apply to ATP - CTA",source:"img/atp/atp-apply-here.png",caption:"CTA from the admissions page",mdxType:"ImgWithCaption"}),(0,n.kt)("p",null,"Soon, the first applications started trickling in! For each new applicant, we\u2019d follow up with the ",(0,n.kt)("a",{parentName:"p",href:"https://www.notion.so/CLOSED-Welcome-to-Wasp-Alpha-Testing-program-f3a8a350802341abac87fb7831bb1e60"},"instructions")," on how to successfully go through the Alpha Testing Program:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fill out intro form (years of experience, preferred stack, etc)"),(0,n.kt)("li",{parentName:"ul"},"go through our \u201cbuild a Todo app\u201d tutorial"),(0,n.kt)("li",{parentName:"ul"},"fill out the feedback form - what was good, what was bad etc.")),(0,n.kt)(s.Z,{alt:"Timeboxing",source:"img/atp/timeboxing.png",caption:"People were really respectful of this deadline and would politely ask to extend it in case they couldn\u2019t make it.",mdxType:"ImgWithCaption"}),(0,n.kt)("p",null,"But, soon after I got the following message on Twitter:"),(0,n.kt)(s.Z,{alt:"twitter DM - shared atp in swag groups",source:"img/atp/swag-groups-twitter.png",mdxType:"ImgWithCaption"}),(0,n.kt)("p",null,"We got really scared that we would get a ton of folks putting in minimal effort while trying Wasp out just to get the free swag, leaving us empty-handed and having learned nothing! On the other hand, we didn\u2019t have much choice since we didn\u2019t define the \u201cminimum required quality\u201d of feedback in advance."),(0,n.kt)("p",null,"Luckily, it wasn\u2019t the problem in the end, even the opposite -- we did get a surge of applications, but only a portion of them finished the program and the ones that did left really high-quality feedback!"),(0,n.kt)("h2",{id:"how-it-went---test-profile--feedback"},"How it went - test profile & feedback"),(0,n.kt)("h3",{id:"tester-profile"},"Tester profile"),(0,n.kt)("p",null,"We received 210 applications and 53 out of those completed the program \u2014 25% completion rate."),(0,n.kt)("p",null,"We also surveyed applicants about their preferred stack, years of programming experience, etc:"),(0,n.kt)(s.Z,{alt:"Intro survey - tester profile",source:"img/atp/atp-intro-survey-yoe.png",caption:"Yep, we like puns.",mdxType:"ImgWithCaption"}),(0,n.kt)("h3",{id:"the-feedback"},"The feedback"),(0,n.kt)("p",null,"The feedback form evaluated testers\u2019 overall experience with Wasp. We asked them what they found to be the best and worst parts of working with Wasp, as well as about the next features they\u2019d like to see."),(0,n.kt)(s.Z,{alt:"Feedback survey - experience",source:"img/atp/atp-feedback-survey-exp.png",mdxType:"ImgWithCaption"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The bad parts")),(0,n.kt)("p",null,"What our testers were missing the most was a full-blown IDE and TypeScript support. Both of these are coming in Beta but only JS was supported at the time. Plus, there were some installation problems with Windows (which is not fully supported yet \u2014 best to use it through WSL)."),(0,n.kt)(s.Z,{alt:"Feedback survey - the bad parts",source:"img/atp/atp-bad-parts.png",mdxType:"ImgWithCaption"}),(0,n.kt)("p",null,"We were already aware that TypeScript support is an important feature, but didn\u2019t have an exact feeling of how much - the feedback was really helpful and helped us prioritise our Beta backlog."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The good parts")),(0,n.kt)("p",null,"Testers\u2019 favourite part was the batteries-included experience, particularly the ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/auth"},"auth model"),"."),(0,n.kt)(s.Z,{alt:"Feedback survey - the good parts",source:"img/atp/atp-good-parts.png",mdxType:"ImgWithCaption"}),(0,n.kt)("h2",{id:"post-mortem-what-didnt-go-well"},"Post-mortem: what didn\u2019t go well"),(0,n.kt)("h3",{id:"no-threshold-for-feedback-quality"},"No threshold for feedback quality"),(0,n.kt)(s.Z,{alt:"Feedback quality",source:"img/atp/atp-feedback-quality.png",mdxType:"ImgWithCaption"}),(0,n.kt)("p",null,"We didn\u2019t put any kind of restrictions on the feedback form, e.g. minimal length of the feedback. That resulted in ~15%-20% of answers being single words, such as depicted above. I\u2019m not sure if there is an efficient way to avoid this or just a stat to live with."),(0,n.kt)("h3",{id:"using-free-text-form-for-collecting-addresses"},"Using free text form for collecting addresses"),(0,n.kt)("p",null,"It never crossed our minds before that validating addresses could be such an important part of shipping swag, but turns out it is. It seems that there are a lot of ways to specify an address, some of which are different from what is expected by our post office, resulting in a number of shipments getting returned."),(0,n.kt)("p",null,"An ideal solution would be to use a specialized \u201caddress\u201d field in a survey that would auto-validate it, but turns out Typeform (which we used) doesn\u2019t have that feature implemented yet, although ",(0,n.kt)("a",{parentName:"p",href:"https://community.typeform.com/suggestions-feedback-34/address-field-question-type-2950"},"it\u2019s been highly requested"),"."),(0,n.kt)(s.Z,{alt:"Shipment returned",source:"img/atp/atp-shipment-returned.jpg",mdxType:"ImgWithCaption"}),(0,n.kt)(s.Z,{alt:"Shipment returned email",source:"img/atp/atp-shipment-returned-email.png",mdxType:"ImgWithCaption"}),(0,n.kt)("h2",{id:"the-non-obvious-benefit-of-alpha-testing-program"},"The non-obvious benefit of Alpha Testing Program"),(0,n.kt)("p",null,"What went well is that we got a lot of high-quality feedback that steered and fortified our plan for the upcoming Beta release."),(0,n.kt)("p",null,"The other big benefit is that we finally solved the ",(0,n.kt)("em",{parentName:"p"},"\u201clooks cool but i\u2019ll try it out later maybe\u201d")," problem. Overall, our usage went well up during the program, but even after it ended, the baseline increased significantly. This was the second-order effect we didn\u2019t foresee."),(0,n.kt)("p",null,"Our understanding is that once people finally gave it a try, a portion of them felt the value first-hand and decided to keep using it for other projects as well."),(0,n.kt)(s.Z,{alt:"Alpha testing program - usage spike",source:"img/atp/atp-usage-spike.png",mdxType:"ImgWithCaption"}),(0,n.kt)("h2",{id:"summary--going-forward-beta"},"Summary & going forward: Beta"),(0,n.kt)("p",null,"The overall conclusion from our Alpha Testing Program is it was a worthy effort which got us valuable feedback and positively affected the overall usage. Moving forward we\u2019ll try to focus on ensuring more quality feedback and prioritising 1-to-1 communication to make sure we fully understand what bothers Wasp users and what we can improve. It also might be helpful to do testing in smaller batches so we are not overwhelmed with responses and can focus on the individual testers - that\u2019s something we might try out in Beta."),(0,n.kt)("p",null,"As mentioned, the next stop is Beta! It comes out on the 27th of November - ",(0,n.kt)("a",{parentName:"p",href:"/#signup"},"sign up here")," to get notified."))}g.isMDXComponent=!0},70589:(e,t,a)=>{a.d(t,{ZP:()=>s});var o=a(87462),n=(a(67294),a(3905));const r={toc:[]},i="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(i,(0,o.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}s.isMDXComponent=!0}}]);