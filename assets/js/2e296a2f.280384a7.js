"use strict";(self.webpackChunkvrcosc_com=self.webpackChunkvrcosc_com||[]).push([["8984"],{6985:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return h}});var i=t(3193),s=t(5893),a=t(65);let r={title:"2024.1208.0",slug:"2024.1208.0",date:"2024-12-08T16:00"},o=void 0,l={authorsImageUrls:[]},h=[{value:"What&#39;s Changed?",id:"whats-changed",level:2},{value:"Thank You!",id:"thank-you",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"After over a year of work, V2 is finally here. A lot has changed, so brace yourself for a read!"}),"\n",(0,s.jsxs)(n.p,{children:["As there has been many changes, and there are a lot of differences in what modules should be used now, take a read of the upgrade document ",(0,s.jsx)(n.a,{href:"/docs/v2/upgrading",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["As always, if you need help, join the ",(0,s.jsx)(n.a,{href:"https://vrcosc.com/discord",children:"Discord Server"})]}),"\n",(0,s.jsx)(n.h2,{id:"whats-changed",children:"What's Changed?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["UI framework","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"V2 is written in WPF, meaning that it's now written in a proper desktop framework that Windows supports"}),"\n",(0,s.jsx)(n.li,{children:"This enables for clearer text, faster UI, lower memory usage, lower storage usage, lower CPU usage, and NO GPU usage!"}),"\n",(0,s.jsx)(n.li,{children:"This also allows for opening multiple windows so that the UI can be less cramped"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["OSCQuery","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"VRCOSC now supports connecting to VRChat via OSCQuery"}),"\n",(0,s.jsx)(n.li,{children:"If you don't know what OSCQuery is, that's fine! It just means less port errors if you're running other apps"}),"\n",(0,s.jsx)(n.li,{children:"If you were previously using the router, you now shouldn't need it"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Profiles","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Everything you do in the app, aside from global settings, is now inside a profile"}),"\n",(0,s.jsx)(n.li,{children:"This means you can now make different profiles for different things"}),"\n",(0,s.jsx)(n.li,{children:"Profiles are able to be copied if needed"}),"\n",(0,s.jsx)(n.li,{children:"Profiles are also able to be linked to avatars, meaning if you change into an avatar the linked profile will be changed to, automating profile switching!"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Modules","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The SDK has been completely revamped to be more stable and resilient"}),"\n",(0,s.jsx)(n.li,{children:"Modules are now installed directly from GitHub, and the official modules aren't packaged with the app. This allows for modules to be updated without the app updating"}),"\n",(0,s.jsx)(n.li,{children:"Anyone can now publish a module package on GitHub and have it appear inside the app for everyone to use!"}),"\n",(0,s.jsx)(n.li,{children:"Modules have had a massive facelift with clearer UI for their settings and parameters"}),"\n",(0,s.jsx)(n.li,{children:"You can now import/export configs for easier sharing, and for putting alongside prefabs so installing them even easier"}),"\n",(0,s.jsx)(n.li,{children:"Compatible prefabs are also linked"}),"\n",(0,s.jsx)(n.li,{children:"Where applicable, there are also links to the docs for certain modules where extra information is useful"}),"\n",(0,s.jsx)(n.li,{children:"Parameters are also now able to be disabled, if you don't want to see certain parameters"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Run View","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The run view has had a massive upgrade with several notable features"}),"\n",(0,s.jsx)(n.li,{children:"The first tab, runtime, allows module developers to create custom UI to be placed on the run view for users to use. These are meant to be for settings that can be dynamically populated during runtime"}),"\n",(0,s.jsx)(n.li,{children:"The second tab, avatar, is the incoming and outgoing parameter list that was in V1"}),"\n",(0,s.jsx)(n.li,{children:"The third tab, chatbox, is a preview of the ChatBox when the timeline is active, meaning you don't have to go into VRChat to see if things are working"}),"\n",(0,s.jsx)(n.li,{children:"The chatbox tab also allows you to type live text into the ChatBox to override the timeline"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["ChatBox V4","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ChatBox V4, also now just the ChatBox Animation System, is an upgraded version of ChatBox V3"}),"\n",(0,s.jsx)(n.li,{children:"The timeline now allows you to reorder clips by dragging them between layers"}),"\n",(0,s.jsx)(n.li,{children:"Module developers can now add dynamic states (ones that aren't available when the app starts), meaning for things like the Counter module, different states and events per counter!"}),"\n",(0,s.jsx)(n.li,{children:'States and events have had a facelift, allowing for custom settings per state and event. Things like showing the typing indicator, some background tricks to "hide" it, and more to come!'}),"\n",(0,s.jsxs)(n.li,{children:["The biggest change has been to how variables are referenced. They're now in a list, where you use ",(0,s.jsx)(n.code,{children:"{i}"})," in the textbox to reference them, where ",(0,s.jsx)(n.code,{children:"i"})," is the number next to the variable"]}),"\n",(0,s.jsx)(n.li,{children:"Variables are now instanced, meaning the module provides some raw data, and you choose how it's formatted"}),"\n",(0,s.jsx)(n.li,{children:"TickerTape is no longer a module, as every variable can ticker tape!"}),"\n",(0,s.jsx)(n.li,{children:"There's also some custom variables that don't require a module to work. If you think you know of something that would be useful, suggest it"}),"\n",(0,s.jsx)(n.li,{children:"You'll also see the clips and states/events outline in yellow. This is to show you which clip and state/event is currently active"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Speech To Text","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The speech engine is now global rather than being per module, and has changed from VOSK to Whisper"}),"\n",(0,s.jsx)(n.li,{children:"Whisper has many upsides, being that it's faster, more accurate, has punctuation, and uses less resources"}),"\n",(0,s.jsx)(n.li,{children:"Since it's global, you need to go into the app's settings and install a model"}),"\n",(0,s.jsx)(n.li,{children:"In the settings you can also mess with the different sliders to get recognition to work better for you. The default settings should be fine for most users"}),"\n",(0,s.jsx)(n.li,{children:"If you have a Vulkan-capable GPU, it will also be used where possible to speed up recognition. It won't use it if VRChat is taking up all your GPU though!"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["SteamVR","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SteamVR integration has been given an upgrade, allowing modules to reference specific roles for trackers rather than having a list"}),"\n",(0,s.jsx)(n.li,{children:"This requires users to go into the app's settings and assign roles to all the devices that have connected to their SteamVR instance"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Along with everything above there's countless smaller changes, improvements, and QoL features!"}),"\n",(0,s.jsx)(n.h2,{id:"thank-you",children:"Thank You!"}),"\n",(0,s.jsx)(n.p,{children:"Thank you to everyone that's supported V2's development over the past year. It's been a lot of effort to get things right, and I'm very excited for the future of VRCOSC."}),"\n",(0,s.jsx)(n.p,{children:"A big thank you to the beta testers who were daily-driving V2 and reporting bugs, and a massive thank you to the whole community who've still been using VRCOSC!"})]})}function c(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},65:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var i=t(7294);let s={},a=i.createContext(s);function r(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}},3193:function(e){e.exports=JSON.parse('{"permalink":"/changelog/2024.1208.0","source":"@site/changelog/2024.1208.0.md","title":"2024.1208.0","description":"After over a year of work, V2 is finally here. A lot has changed, so brace yourself for a read!","date":"2024-12-08T16:00:00.000Z","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"2024.1208.0","slug":"2024.1208.0","date":"2024-12-08T16:00"},"unlisted":false,"nextItem":{"title":"2024.1208.0-v2","permalink":"/changelog/2024.1208.0-v2"}}')}}]);