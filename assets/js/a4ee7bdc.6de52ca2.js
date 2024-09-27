"use strict";(self.webpackChunkvrcosc_com=self.webpackChunkvrcosc_com||[]).push([[374],{1230:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var n=i(4848),a=i(8453);const s={sidebar_position:2,description:"The ChatBox animation system."},o="ChatBox V3",l={id:"V1/chatbox-v3",title:"ChatBox V3",description:"The ChatBox animation system.",source:"@site/docs/V1/chatbox-v3.md",sourceDirName:"V1",slug:"/V1/chatbox-v3",permalink:"/docs/V1/chatbox-v3",draft:!1,unlisted:!1,editUrl:"https://github.com/VolcanicArts/VRCOSC/docs/V1/chatbox-v3.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"The ChatBox animation system."},sidebar:"tutorialSidebar",previous:{title:"Module Creation",permalink:"/docs/V1/module-creation"},next:{title:"Gesture Extensions",permalink:"/docs/V1/gesture-extensions"}},h={},r=[{value:"Keywords",id:"keywords",level:2},{value:"If you need help",id:"if-you-need-help",level:2},{value:"Formatting",id:"formatting",level:2},{value:"Importing/Exporting Configs",id:"importingexporting-configs",level:2},{value:"Default Timeline",id:"default-timeline",level:2},{value:"Simple Edits",id:"simple-edits",level:2},{value:"Timeline",id:"timeline",level:2},{value:"Creating Clips",id:"creating-clips",level:3},{value:"Timings",id:"timings",level:3},{value:"Clips",id:"clips",level:2},{value:"States and Events",id:"states-and-events",level:3},{value:"Multi-module Clips",id:"multi-module-clips",level:3},{value:"Validation",id:"validation",level:3},{value:"Media - Now Playing Event",id:"media---now-playing-event",level:3},{value:"Multiple Clips",id:"multiple-clips",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"chatbox-v3",children:"ChatBox V3"})}),"\n",(0,n.jsx)(t.p,{children:"ChatBox V3 is essentially an animation system for VRC's ChatBox and the culmination of feedback and suggestions from the community. It provides an extensive featureset to let you customise the way the ChatBox looks in-game from any ChatBox-enabled module that's offered. Below is an explanation of how the different features work and some example setups. There are also ChatBox V3 configs in the chatbox-config forum channel on the Discord server."}),"\n",(0,n.jsx)(t.p,{children:"While going through this guide do note that you can enable and run modules and then switch to the ChatBox screen to get a live preview in-game of what the ChatBox is doing."}),"\n",(0,n.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Timeline - The bottom half of the screen where all Clips are kept"}),"\n",(0,n.jsx)(t.li,{children:"Layer - A single part of the Timeline. 8 layers are stacked make the Timeline"}),"\n",(0,n.jsx)(t.li,{children:"Clip - A single part of a Layer that is associated with modules. Can be dragged and resized horizontally and moved up and down by right clicking"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"if-you-need-help",children:"If you need help"}),"\n",(0,n.jsxs)(t.p,{children:["If the explanation or examples don't make sense to you feel free to reach out on the ",(0,n.jsx)(t.a,{href:"https://discord.gg/vj4brHyvT5",children:"Discord Server"})," and I'll be more than happy to run you through how it all works so that you can achieve what you want."]}),"\n",(0,n.jsx)(t.h2,{id:"formatting",children:"Formatting"}),"\n",(0,n.jsx)(t.p,{children:"Each format for a state or event can have the following keys to aid with formatting:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"/n - Adds a new line using the previous method of padding with spaces, but this automatically calculates the correct number of spaces dynamically"}),"\n",(0,n.jsx)(t.li,{children:"/v - Adds a new line using the newline terminator which saves on character spaces but shrinks the width of the ChatBox in-game to the maximum line width"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"importingexporting-configs",children:"Importing/Exporting Configs"}),"\n",(0,n.jsxs)(t.p,{children:["Using the in-app Import and Export buttons is recommended, but if they don't work for whatever reason the ChatBox V3 config can be found at ",(0,n.jsx)(t.code,{children:"%appdata%/VRCOSC"})," and given to people so they can have your ChatBox V3 setup. They can paste the config file and restart VRCOSC to load it up."]}),"\n",(0,n.jsxs)(t.p,{children:["Inside the chatbox-configs forum channel in the ",(0,n.jsx)(t.a,{href:"https://discord.gg/vj4brHyvT5",children:"Discord Server"})," some users have shared their configs for ChatBox V3."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h1,{id:"quick-start",children:"Quick Start"}),"\n",(0,n.jsx)(t.p,{children:"For the majority of people the default Timeline will work fine with your chosen enabled modules. Timeline edits can be made by right clicking on the Clips (the rectangles in the bottom half of the screen) to delete Clips. Right clicking an empty space in the Timeline will let you create a Clip. Improvements to the movement and management of Clips will come in the future."}),"\n",(0,n.jsx)(t.h2,{id:"default-timeline",children:"Default Timeline"}),"\n",(0,n.jsx)(t.p,{children:"When starting the app from version 2023.423.0 onwards, you will be setup with the default Timeline. Any edits you make to the Timeline will then be saved. The default Timeline is aimed at trying to make ChatBox V3 behave the same as ChatBox V2 if no customisation was done to either systems."}),"\n",(0,n.jsx)(t.h2,{id:"simple-edits",children:"Simple Edits"}),"\n",(0,n.jsx)(t.p,{children:"You can make simple edits to any of the default clips by clicking on them and altering their formats.\r\nIf you don't want to show anything that is a part of the default timeline, either disable or remove the clips you don't want."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h1,{id:"docs",children:"Docs"}),"\n",(0,n.jsxs)(t.p,{children:["The following subsections are an explanation of how ChatBoxV3 works. I've tried my best to explain it as simply as possible but feedback is always welcomed, and as always if you're confused you can join the ",(0,n.jsx)(t.a,{href:"https://discord.gg/vj4brHyvT5",children:"Discord Server"})," and ask for help."]}),"\n",(0,n.jsx)(t.h2,{id:"timeline",children:"Timeline"}),"\n",(0,n.jsx)(t.p,{children:"The Timeline is the main feature of ChatBox V3 as it allows you to customise when and how Clips interact with each other and the ChatBox in-game."}),"\n",(0,n.jsx)(t.h3,{id:"creating-clips",children:"Creating Clips"}),"\n",(0,n.jsx)(t.p,{children:"The Timeline has 8 layers, also known as priorities. Right clicking on a layer will give you the option to create a new Clip on that layer. The new Clip will fill the empty space between other clips, or between the bounds of the Timeline."}),"\n",(0,n.jsx)(t.p,{children:"You can drag a Clip left and right on the layer, and right clicking on a Clip will give you the option to move the Clip up or down a layer, or delete it. Do note that you can only move a Clip up or down a layer if there is space (Improvements to the Timeline dragging system will come in the future)"}),"\n",(0,n.jsx)(t.h3,{id:"timings",children:"Timings"}),"\n",(0,n.jsx)(t.p,{children:"The Timeline lasts 60 seconds by default (Similar to V2's default settings), whereby every 60 seconds the Timeline will loop back to the start. Clips that are present on the timeline are snapped in intervals of 1 second. You can adjust the length using the control in the centre of the screen"}),"\n",(0,n.jsx)(t.h2,{id:"clips",children:"Clips"}),"\n",(0,n.jsx)(t.p,{children:"Clips are a way of managing the text of the ChatBox at a certain point in time, based on evaluation of associated modules' states and events."}),"\n",(0,n.jsx)(t.p,{children:"For example, if I create a Clip on the top layer and tick the Media module, the Clip is now registered as following the states and events for the Media module."}),"\n",(0,n.jsx)(t.h3,{id:"states-and-events",children:"States and Events"}),"\n",(0,n.jsx)(t.p,{children:"Each state and event has a checkbox in the top right. This indicates whether you care about that state/event."}),"\n",(0,n.jsx)(t.p,{children:"Using our example from earlier, if we only tick the Media - Playing state, and leave the Media - Paused state unticked, that means that for this Clip to be valid the Media module must be in the Playing state. If it is, the format is used and sent to the ChatBox. If the Media module is in the Paused state, the ChatBox is cleared as the Paused state is unticked (This is the same as Paused Behaviour from V2 being set to Empty)."}),"\n",(0,n.jsx)(t.p,{children:"Events take priority over states. If an event occurs, even if there is a valid state, the event will display for the time set by you."}),"\n",(0,n.jsx)(t.p,{children:"If 2 events from the same module occur, then the latest event will replace the current event. However if 2 events from different modules occur, then they will queue."}),"\n",(0,n.jsx)(t.h3,{id:"multi-module-clips",children:"Multi-module Clips"}),"\n",(0,n.jsx)(t.p,{children:"All Clips are allowed to have multiple modules associated with them. This is what allows for multiple module variables to be put into the same Clip."}),"\n",(0,n.jsx)(t.p,{children:"When multiple modules are associated with a Clip, states are compounded together to give you ultimate control over what to show in the Clip no matter what state any of the associated modules are in."}),"\n",(0,n.jsx)(t.p,{children:"For example, if we tick the Media and Clock module, the only states that will occur are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Media - Playing & Clock"}),"\n",(0,n.jsx)(t.li,{children:"Media - Paused & Clock"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This is because Clock only has a single default state."}),"\n",(0,n.jsx)(t.p,{children:'However, if any module you have ticked in the "Select Modules" is disabled in the module listing screen, the states that contain that module will be filtered out by the "Show relevant states only" button. Unticking this will show you all the generated states however it\'s recommended to keep this ticked as it shows you how the Clip will behave when it\'s running based on the enabled modules in the listing screen.'}),"\n",(0,n.jsx)(t.h3,{id:"validation",children:"Validation"}),"\n",(0,n.jsx)(t.p,{children:"As mentioned earlier, Clips are evaluated for their validity at the Timeline's current time. The following steps are done to evaluate a clip:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Is the Clip Enabled?"}),"\n",(0,n.jsx)(t.li,{children:"Is the Clip covering the Timeline's current time?"}),"\n",(0,n.jsxs)(t.li,{children:["Is there currently a triggered event that is ticked ",(0,n.jsx)(t.strong,{children:"OR"})," are all the modules that are associated with a clip in a state that is ticked?"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If a Clip is deemed invalid then the ChatBox will check the next priority down for a valid Clip. If no valid Clips are found, the ChatBox will be cleared."}),"\n",(0,n.jsx)(t.p,{children:"This evaluation step is done based on the ChatBox Time Span setting in the settings screen. VRC's default is every 1.5 seconds."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h1,{id:"example-setups",children:"Example Setups"}),"\n",(0,n.jsx)(t.h3,{id:"media---now-playing-event",children:"Media - Now Playing Event"}),"\n",(0,n.jsxs)(t.p,{children:['In this example, you can see that the "Media - Now Playing" format will only be put into the ChatBox if the "Media - Now Playing" event occurs, and will be shown for 5 seconds. The "Media" Clip covers the entire Timeline to allow this event to be triggered any time.\r\n',(0,n.jsx)(t.img,{src:"https://github.com/VolcanicArts/VRCOSC/assets/29819296/3256063c-73ef-4301-8947-cdc6be9e82c7",alt:"image"})]}),"\n",(0,n.jsx)(t.h3,{id:"multiple-clips",children:"Multiple Clips"}),"\n",(0,n.jsx)(t.p,{children:"In this example, there are 4 Clips."}),"\n",(0,n.jsx)(t.p,{children:'As the AFK state only occurs when VRC\'s AFK animator parameter is set to true, this means that if you aren\'t AFK in-game the "Not AFK" state is used. Because the "Not AFK" state is unticked the "AFK" Clip is marked as invalid.'}),"\n",(0,n.jsx)(t.p,{children:'This then goes down the priority list into the "Media" Clip (see above for how that\'s setup). If the "Media - Now Playing" event isn\'t occurring, the "Media" Clip is also marked as invalid.'}),"\n",(0,n.jsxs)(t.p,{children:['That means that the "Clock" and "Weather" Clips are the only ones left and will show for 9 seconds each one after the other before the ChatBox is then cleared for the remaining 42 seconds (Remembering that if either the "Media - Now Playing" event occurs or I go AFK then the ChatBox shows them as they are higher priorities and their respective Clips become valid)\r\n',(0,n.jsx)(t.img,{src:"https://github.com/VolcanicArts/VRCOSC/assets/29819296/304324a2-6e52-4350-a22f-5c6692491784",alt:"image"})]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var n=i(6540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);