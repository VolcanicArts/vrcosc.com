"use strict";(self.webpackChunkvrcosc_com=self.webpackChunkvrcosc_com||[]).push([["6034"],{2324:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>r,metadata:()=>a,assets:()=>o,toc:()=>d,contentTitle:()=>s});var a=JSON.parse('{"id":"v2/sdk/chatbox","title":"ChatBox","description":"How to interact with the ChatBox system","source":"@site/docs/v2/sdk/chatbox.md","sourceDirName":"v2/sdk","slug":"/v2/sdk/chatbox","permalink":"/docs/v2/sdk/chatbox","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"description":"How to interact with the ChatBox system"},"sidebar":"docsSidebar","previous":{"title":"Parameters","permalink":"/docs/v2/sdk/parameters"},"next":{"title":"Handlers","permalink":"/docs/v2/sdk/handlers"}}'),i=n("5893"),l=n("65");let r={sidebar_position:6,description:"How to interact with the ChatBox system"},s="ChatBox",o={},d=[{value:"Flow",id:"flow",level:2},{value:"Defining elements",id:"defining-elements",level:2},{value:"States",id:"states",level:3},{value:"Events",id:"events",level:3},{value:"Variables",id:"variables",level:3}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"chatbox",children:"ChatBox"})}),"\n",(0,i.jsx)(t.h2,{id:"flow",children:"Flow"}),"\n",(0,i.jsx)(t.p,{children:"It's important to understand the flow of how data is used for the ChatBox to make sure that user data doesn't get lost."}),"\n",(0,i.jsx)(t.p,{children:"Static elements (ones that have Enums for lookups) are not allowed to change during the lifetime of the module. These elements are defined and are guaranteed to not be modified."}),"\n",(0,i.jsxs)(t.p,{children:["Dynamic elements (ones that have strings for lookups) are allowed to change during the lifetime of the module. An example use case of this is the ",(0,i.jsx)(t.a,{href:"https://github.com/VolcanicArts/VRCOSC-Modules/blob/main/VRCOSC.Modules/Counter/CounterModule.cs#L32",children:"Counter"})," module where I'm defining a new event and 2 variables for each counter instance. The lookups of these instances are a unique GUID followed by ",(0,i.jsx)(t.code,{children:"_changed"})," or ",(0,i.jsx)(t.code,{children:"_value"}),". This GUID is also saved alongside the counter settings for the module, as when the module calls ",(0,i.jsx)(t.code,{children:"OnPostLoad"})," it can then go through the counter instances to recreate the dynamic elements that each requires. Since these GUIDs are saved as the lookup for the elements in the user's ChatBox file, if this last step wasn't done the ChatBox would error out because of missing data, so it's very important to be consistent with where and how you're creating dynamic elements."]}),"\n",(0,i.jsx)(t.h2,{id:"defining-elements",children:"Defining elements"}),"\n",(0,i.jsxs)(t.p,{children:["To define a state, event, or variable, inside ",(0,i.jsx)(t.code,{children:"OnPostLoad"})," you can call their respective methods."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Define your variables before your states and events. States and events can take in default variables via their reference which is returned by ",(0,i.jsx)(t.code,{children:"CreateVariable"}),"."]})}),"\n",(0,i.jsx)(t.h3,{id:"states",children:"States"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'CreateState(Enum lookup, string displayName, string defaultFormat = "", IEnumerable<ClipVariableReference>? defaultVariables = null, bool defaultShowTyping = false);\r\nCreateState(string lookup, string displayName, string defaultFormat = "", IEnumerable<ClipVariableReference>? defaultVariables = null, bool defaultShowTyping = false);\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"lookup - The lookup of the state"}),"\n",(0,i.jsx)(t.li,{children:"displayName - The display name of the state"}),"\n",(0,i.jsx)(t.li,{children:"defaultFormat - The default format of the state"}),"\n",(0,i.jsxs)(t.li,{children:["defaultVariables - A list of clip variable references that can be obtained from calling ",(0,i.jsx)(t.code,{children:"CreateVariable"})]}),"\n",(0,i.jsx)(t.li,{children:"defaultShowTyping - Whether the typing indicator should be shown by default"}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["You can use a display name of ",(0,i.jsx)(t.code,{children:"Default"})," to force VRCOSC to not show the display name. This is best used when you only need a single state."]})}),"\n",(0,i.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'CreateEvent(Enum lookup, string displayName, string defaultFormat = "", IEnumerable<ClipVariableReference>? defaultVariables = null, bool defaultShowTyping = false, float defaultLength = 5, ClipEventBehaviour defaultBehaviour = ClipEventBehaviour.Override);\r\nCreateEvent(string lookup, string displayName, string defaultFormat = "", IEnumerable<ClipVariableReference>? defaultVariables = null, bool defaultShowTyping = false, float defaultLength = 5, ClipEventBehaviour defaultBehaviour = ClipEventBehaviour.Override);\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"lookup - The lookup of the event"}),"\n",(0,i.jsx)(t.li,{children:"displayName - The display name of the event"}),"\n",(0,i.jsx)(t.li,{children:"defaultFormat - The default format of the event"}),"\n",(0,i.jsxs)(t.li,{children:["defaultVariables - A list of clip variable references that can be obtained from calling ",(0,i.jsx)(t.code,{children:"CreateVariable"})]}),"\n",(0,i.jsx)(t.li,{children:"defaultShowTyping - Whether the typing indicator should be shown by default"}),"\n",(0,i.jsx)(t.li,{children:"defaultLength - The default length that the event lasts for in seconds"}),"\n",(0,i.jsx)(t.li,{children:"defaultBehaviour - The behaviour of how the event should be handled when it occurs. Override will override the current event. Queue will queue the event to occur after the current event if there's a current event. Ignore will ignore the event if there's a current event"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"variables",children:"Variables"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"CreateVariable<T>(Enum lookup, string displayName);\r\nCreateVariable<T>(string lookup, string displayName);\r\nCreateVariable<T>(Enum lookup, string displayName, Type clipVariableType);\r\nCreateVariable<T>(string lookup, string displayName, Type clipVariableType);\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"T - The type of variable to create"}),"\n",(0,i.jsx)(t.li,{children:"lookup - The lookup of the variable"}),"\n",(0,i.jsx)(t.li,{children:"displayName - The display name of the variable"}),"\n",(0,i.jsx)(t.li,{children:"clipVariableType - A way to define a custom ClipVariable for custom variable behaviour"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The list of types that are available in the SDK are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Bool"}),"\n",(0,i.jsx)(t.li,{children:"Int"}),"\n",(0,i.jsx)(t.li,{children:"Float"}),"\n",(0,i.jsx)(t.li,{children:"String"}),"\n",(0,i.jsx)(t.li,{children:"DateTime"}),"\n",(0,i.jsx)(t.li,{children:"TimeSpan"}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},65:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return r}});var a=n(7294);let i={},l=a.createContext(i);function r(e){let t=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);