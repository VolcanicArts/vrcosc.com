"use strict";(self.webpackChunkvrcosc_docs=self.webpackChunkvrcosc_docs||[]).push([[171],{7373:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=r(4848),n=r(8453);const s={sidebar_position:5,description:"Create and use module parameters"},i="Parameters",o={id:"V2/SDK/parameters",title:"Parameters",description:"Create and use module parameters",source:"@site/docs/V2/SDK/parameters.md",sourceDirName:"V2/SDK",slug:"/V2/SDK/parameters",permalink:"/docs/V2/SDK/parameters",draft:!1,unlisted:!1,editUrl:"https://github.com/VolcanicArts/VRCOSC/docs/V2/SDK/parameters.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Create and use module parameters"},sidebar:"tutorialSidebar",previous:{title:"Settings",permalink:"/docs/V2/SDK/settings"},next:{title:"ChatBox",permalink:"/docs/V2/SDK/chatbox"}},d={},l=[{value:"Registering Parameters",id:"registering-parameters",level:2},{value:"Sending Parameters",id:"sending-parameters",level:2},{value:"Receiving Parameters",id:"receiving-parameters",level:2},{value:"OSCQuery",id:"oscquery",level:2}];function h(e){const a={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(a.p,{children:"Parameters are the main way VRCOSC and VRChat communicate. For all intents and purposes, the parameters you register and use in a module are the avatar parameters on your avatar."}),"\n",(0,t.jsx)(a.h2,{id:"registering-parameters",children:"Registering Parameters"}),"\n",(0,t.jsx)(a.p,{children:"Registered parameters are parameters that have a defined lookup (usually denoted by an Enum), so that the user can change the name of the parameter and your module still works fine as the lookup is controlled by you. Any parameter that your module is going to be using on each run should be registered, as this allows the user to customise their setup."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:'RegisterParameter<bool>(MediaParameter.Play, "VRCOSC/Media/Play", ParameterMode.ReadWrite, "Play/Pause", "True for playing. False for paused");\r\nRegisterParameter<float>(MediaParameter.Volume, "VRCOSC/Media/Volume", ParameterMode.ReadWrite, "Volume", "The volume of the process that is controlling the media");\r\nRegisterParameter<int>(MediaParameter.Repeat, "VRCOSC/Media/Repeat", ParameterMode.ReadWrite, "Repeat", "0 - Disabled\\n1 - Single\\n2 - List");\n'})}),"\n",(0,t.jsx)(a.p,{children:"Let's go over each of the parts of the method."}),"\n",(0,t.jsxs)(a.p,{children:["First, I'm calling ",(0,t.jsx)(a.code,{children:"RegisterParameter<T>"}),", where T is the type of parameter I want. This accepts ",(0,t.jsx)(a.code,{children:"int"}),", ",(0,t.jsx)(a.code,{children:"float"}),", and ",(0,t.jsx)(a.code,{children:"bool"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["For the first argument, I have an Enum named ",(0,t.jsx)(a.code,{children:"MediaParameter"}),". This contains all the lookups for each of the parameters. As mentioned before, this is a nicer way of organising parameters so you don't have to worry about spelling the lookup correctly."]}),"\n",(0,t.jsx)(a.p,{children:"Next is the name of the parameter. This name is the exact name it would be on the avatar."}),"\n",(0,t.jsx)(a.p,{children:"After that is the parameter mode. This is just used for safety to tell VRCOSC if a parameter can read from VRChat, write to VRChat, or both."}),"\n",(0,t.jsx)(a.p,{children:"Finally, the rest of the method call is metadata, which is the display name and display description of the parameter."}),"\n",(0,t.jsx)(a.p,{children:"There is also an optional bool at the end to mark a parameter as legacy, meaning it's still available to use but might be removed in the future, so this lets users know to change over to newer parameters else their prefabs might break.\r\nNote: This may be superceeded by a feature in the works called parameter sets. Keep an eye on V2 updates and the docs for news."}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsxs)(a.p,{children:["VRChat sends out parameters using the ",(0,t.jsx)(a.code,{children:"/avatar/parameters/"})," prefix but VRCOSC handles this for you."]})}),"\n",(0,t.jsx)(a.h2,{id:"sending-parameters",children:"Sending Parameters"}),"\n",(0,t.jsx)(a.p,{children:"To send a parameter, there are 2 methods you can use:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:"SendParameter(MediaParameter.Play, true);\r\nSendParameter(MediaParameter.Shuffle, false);\r\nSendParameter(MediaParameter.Repeat, 0);\n"})}),"\n",(0,t.jsxs)(a.p,{children:["This uses the ",(0,t.jsx)(a.code,{children:"MediaParameter"})," Enum to send to a registered parameter. Behind the scenes, VRCOSC is taking the parameter name that the user has set this registered parameter to and sending the data there, which abstracts your module from having to deal with different parameter names."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:'SendParameter("MyNormalParameter", false);\n'})}),"\n",(0,t.jsx)(a.p,{children:"For the above, you can send directly to a parameter using its name. This is not customisable by the user and should be used spareingly when you want to drive a parameter you know will never change."}),"\n",(0,t.jsx)(a.h2,{id:"receiving-parameters",children:"Receiving Parameters"}),"\n",(0,t.jsx)(a.p,{children:"To receive a parameter, there are 2 methods to override:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:"protected override void OnRegisteredParameterReceived(RegisteredParameter parameter)\r\n{\r\n    switch (parameter.Lookup)\r\n    {\r\n        case MediaParameter.Volume:\r\n            MediaProvider.TryChangeVolume(parameter.GetValue<float>());\r\n            break;\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(a.p,{children:["This listens for registered parameters. Registered parameters, once again, have the benefit of being abstracted from your module, so you can listen for whenever the lookup arrives and the user can change the parameter name to whatever they need it to be. Registered parameters can give you access to the parameter value using ",(0,t.jsx)(a.code,{children:"GetValue<T>()"}),", where T is the type of the parameter's value. Note: This type must match the type that it's expecting else an error will be thrown. Registered parameters also have access to a function called wildcards, which will be spoken about in a different advanced section."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:'protected override void OnAnyParameterReceived(ReceivedParameter parameter)\r\n{\r\n    if (parameter.Name == "MyNormalParameter")\r\n    {\r\n        Console.WriteLine($"MyNormalParameter\'s value is {parameter.GetValue<bool>()}`)\r\n    }\r\n}\n'})}),"\n",(0,t.jsxs)(a.p,{children:["You can also listen for any parameter. Unregistered ",(0,t.jsx)(a.em,{children:"and"})," registered parameters will call this method, and registered parameters will call this before calling ",(0,t.jsx)(a.code,{children:"OnRegisteredParameterReceived"}),", so only use if it you need to. An example of a good use of this is the Counter module, as it listens for any parameter that arrives and if it finds a match for a parameter that a counter needs it can then use the parameter's data to increase the counter's value."]}),"\n",(0,t.jsx)(a.h2,{id:"oscquery",children:"OSCQuery"}),"\n",(0,t.jsx)(a.p,{children:"OSCQuery lets you retrieve parameter types and values, allowing you to check types and values without the parameter ever having to change in game."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:"FindParameterType(MyParameters.SomeParameter);\r\nFindParameterValue(MyParameters.SomeParameter);\n"})}),"\n",(0,t.jsx)(a.p,{children:"Finding a parameter by using the methods with lookups will attempt to find the type or value using the parameter name that the user may have edited."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-csharp",children:'FindParameterType("SomeParameterName");\r\nFindParameterValue("SomeParameterName");\n'})}),"\n",(0,t.jsx)(a.p,{children:"Finding a parameter by using the methods with strings will attempt to find the type or value using the parameter name that's been passed."}),"\n",(0,t.jsx)(a.p,{children:"If the parameter doesn't exist or OSCQuery isn't working for VRChat, null will be returned."})]})}function m(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,a,r)=>{r.d(a,{R:()=>i,x:()=>o});var t=r(6540);const n={},s=t.createContext(n);function i(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);