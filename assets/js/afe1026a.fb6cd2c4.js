"use strict";(self.webpackChunkvrcosc_docs=self.webpackChunkvrcosc_docs||[]).push([[801],{3733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(4848),o=n(8453);const r={sidebar_position:1},i="Introduction",a={id:"V2/SDK/introduction",title:"Introduction",description:"This section of the documentation outlines everything there is to know about module development in V2.",source:"@site/docs/V2/SDK/introduction.md",sourceDirName:"V2/SDK",slug:"/V2/SDK/introduction",permalink:"/VRCOSC-Docs/docs/V2/SDK/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/VolcanicArts/VRCOSC/docs/V2/SDK/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SDK",permalink:"/VRCOSC-Docs/docs/category/sdk"},next:{title:"Getting Started",permalink:"/VRCOSC-Docs/docs/V2/SDK/getting-started"}},d={},l=[{value:"Notes",id:"notes",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"VRCFury Parameters",id:"vrcfury-parameters",level:2},{value:"Module Flow",id:"module-flow",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"This section of the documentation outlines everything there is to know about module development in V2."}),"\n",(0,s.jsx)(t.h3,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(t.p,{children:["The V2 install folder, ",(0,s.jsx)(t.code,{children:"vrcosc-v2"}),", will change when V2 is released to just be ",(0,s.jsx)(t.code,{children:"vrcosc"}),". Keep this in mind when creating any automations for your module projects."]}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"Below are some things that should be understood before continuing to develop a module, as they're important to understand so that user data isn't lost, and your module functions as expected each time it's imported and loads."}),"\n",(0,s.jsx)(t.h2,{id:"vrcfury-parameters",children:"VRCFury Parameters"}),"\n",(0,s.jsxs)(t.p,{children:["VRCOSC will automatically handle VRCFury prefixes for registered parameters. If VRCOSC detects ",(0,s.jsx)(t.code,{children:"VF65_MyParameter"})," it will treat it as if ",(0,s.jsx)(t.code,{children:"MyParameter"})," has arrived. This is important to understand as if there are multiple ",(0,s.jsx)(t.code,{children:"MyParameter"}),"s it will trigger the same registered parameter. All this is simply a failsafe for when you're testing though, so make sure to mark your OSC parameters as global if you're using VRCFury. This can be done in a Full Controller by adding a ",(0,s.jsx)(t.code,{children:"*"})," in the first isntance of a global parameter's list."]}),"\n",(0,s.jsx)(t.h2,{id:"module-flow",children:"Module Flow"}),"\n",(0,s.jsxs)(t.p,{children:["There are 2 methods to keep in mind: ",(0,s.jsx)(t.code,{children:"OnPreLoad"})," and ",(0,s.jsx)(t.code,{children:"OnPostLoad"}),". As the names suggest, ",(0,s.jsx)(t.code,{children:"OnPreLoad"})," happens before the module loads the user's data from disk and begins the loading process to get itself ready to be run. ",(0,s.jsx)(t.code,{children:"OnPostLoad"})," happens after all this."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"OnPreLoad"})," is where you should define all the static things for the module. E.G, creating the settings, registering the parameters, and setting up any unchanging states, events, and variables for the ChatBox"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"OnPostLoad"})," is generally only used for setting up dynamic things for the module. E.G, creating states, events, and variables for the ChatBox that depend on settings. These must be created each time the module is loaded up, as after all this is complete the ChatBox then loads which first validates that all the data it needs is present, else it will refuse to load."]}),"\n",(0,s.jsxs)(t.p,{children:["For a good example of this, you can check the Counter module's code. Since there is a setting to define the counters, ",(0,s.jsx)(t.code,{children:"OnPostLoad"})," is used to create a ",(0,s.jsx)(t.code,{children:"Changed"})," event and ",(0,s.jsx)(t.code,{children:"Value"})," variable for each defined counter."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);