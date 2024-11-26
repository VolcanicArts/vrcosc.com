"use strict";(self.webpackChunkvrcosc_com=self.webpackChunkvrcosc_com||[]).push([["3326"],{544:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return a}});var i=t(2281),o=t(5893),l=t(65);let s={title:"2024.812.0-v2",slug:"2024.812.0-v2",date:new Date("2024-08-12T00:00:00.000Z")},r=void 0,d={authorsImageUrls:[]},a=[{value:"App",id:"app",level:2},{value:"Official Modules",id:"official-modules",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"A fair amount of QoL and UI changes in this one. V2 is getting fairly close to being released bar a few things I'm looking into and the automatic updater."}),"\n",(0,o.jsx)(n.h2,{id:"app",children:"App"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["TONS of UI improvements","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Little things like text placement, hovering over draggable components, colour changes, etc etc"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Standardisation of the UI","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A lot of the custom components I've made have been redesigned and reimplemented in a way that's useful for module developers, but also has standardised app-wide behaviour"}),"\n",(0,o.jsx)(n.li,{children:"More of the app, like scrolling, should also work with touchscreen and touchscreen emulation"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Changes from ",(0,o.jsx)(n.code,{children:"Page"})," to ",(0,o.jsx)(n.code,{children:"UserControl"})," for runtime pages and custom settings","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Modules that implement a runtime view or should now use ",(0,o.jsx)(n.code,{children:"SetRuntimeView()"})," and their ",(0,o.jsx)(n.code,{children:"Page"})," should be changed to a ",(0,o.jsx)(n.code,{children:"UserControl"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Added info button to modules that allows for linking to docs pages"}),"\n",(0,o.jsx)(n.li,{children:"Added prefabs button to modules to allow for linking to prefab downloads"}),"\n",(0,o.jsx)(n.li,{children:"Reimplemented most of the main pages to function better and add more visual flare"}),"\n",(0,o.jsx)(n.li,{children:"Added manual input for ChatBox"}),"\n",(0,o.jsx)(n.li,{children:"Fixed OpenVR throwing an error when SteamVR wasn't installed"}),"\n",(0,o.jsx)(n.li,{children:"Attempted to fix UTF16 characters not scrolling in clip variables correctly"}),"\n",(0,o.jsx)(n.li,{children:"Added bounce mode to all clip variables"}),"\n",(0,o.jsx)(n.li,{children:"Improved debug panel to make it expandable"}),"\n",(0,o.jsx)(n.li,{children:"Improved UX for bypassing ChatBox validation"}),"\n",(0,o.jsxs)(n.li,{children:["Attempted to fix start with SteamVR","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"This one is a little more tricky and will require more work to get it working on the rest of people's computers (thanks Valve)"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Allow clips to be copy-pasted"}),"\n",(0,o.jsx)(n.li,{children:"Attempted to fix WindowsMediaProvider race condition"}),"\n",(0,o.jsx)(n.li,{children:"Added start in tray functionality"}),"\n",(0,o.jsx)(n.li,{children:"Added metadata parameters to know which modules are currently running"}),"\n",(0,o.jsx)(n.li,{children:"Added control parameters to enable/disable the chatbox globally, and enable/disable certain layers"}),"\n",(0,o.jsx)(n.li,{children:"Added PasswordTextBox"}),"\n",(0,o.jsx)(n.li,{children:"Fixed some clip variables formatting incorrectly at extremes"}),"\n",(0,o.jsxs)(n.li,{children:["Changed custom settings to include the module as a reference","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The constructor for a custom setting's UserControl now requires (YourModule module, YourCustomSetting setting)"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Removed RequestSerialisation from settings","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"This was too complicated to force module developers to implement a callback for every single setting, so it's been removed in favour of saving when the settings window closes. VRCOSC will still attempt to save as often as possible to reduce dataloss in the event of a crash"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Silenced some exceptions that users don't need to care about"}),"\n",(0,o.jsxs)(n.li,{children:["Ignore failed OSCQuery attempts","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"VRChat likes to leave the port in mDNS apparently, even after the game is closed, which caused VRCOSC to crash trying to contact a non-existent game"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Fixed ",(0,o.jsx)(n.code,{children:"Observable<T>"})," sometimes not notifying of changes"]}),"\n",(0,o.jsx)(n.li,{children:"Created KeybindPicker"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"official-modules",children:"Official Modules"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Create Keybinds module","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"This is a replacement for the Discord module"}),"\n",(0,o.jsx)(n.li,{children:"Add an instance, name it, enter the parameter(s) you want to trigger the keybinds. Add a new keybind, click on the component, it will turn red to record. Now you can press any key with any modifiers (ctrl, shift, alt, win) and it will record the presses."}),"\n",(0,o.jsx)(n.li,{children:"To have this work successfully with Discord, you'll need to set the keybinds in Discord. To recreate the Discord module, go into Discord's keybinds in their app and add new keybinds for mute and deafen"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Added Maths module"}),"\n",(0,o.jsx)(n.li,{children:"Added module info docs links where applicable"}),"\n",(0,o.jsx)(n.li,{children:"Added prefab download links where applicable"}),"\n",(0,o.jsx)(n.li,{children:"Updated a ton of custom UI to use the new standardised components"}),"\n",(0,o.jsx)(n.li,{children:"Added a button for obtaining an access token to Pulsoid"}),"\n",(0,o.jsx)(n.li,{children:"Changed textboxes to password textboxes where applicable"}),"\n",(0,o.jsx)(n.li,{children:"Moved max duration and max intensity from global to per shocker group for PiShock"}),"\n",(0,o.jsx)(n.li,{children:"Moved float threshold to being per counter and added an int threshold for Counter"}),"\n",(0,o.jsx)(n.li,{children:"Added milestones to Counter"}),"\n",(0,o.jsx)(n.li,{children:"Added outgoing parameters to Stopwatch"}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},65:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var i=t(7294);let o={},l=i.createContext(o);function s(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(l.Provider,{value:n},e.children)}},2281:function(e){e.exports=JSON.parse('{"permalink":"/changelog/2024.812.0-v2","source":"@site/changelog/2024.812.0-v2.md","title":"2024.812.0-v2","description":"A fair amount of QoL and UI changes in this one. V2 is getting fairly close to being released bar a few things I\'m looking into and the automatic updater.","date":"2024-08-12T00:00:00.000Z","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"2024.812.0-v2","slug":"2024.812.0-v2","date":"2024-08-12T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"2024.913.0-v2","permalink":"/changelog/2024.913.0-v2"},"nextItem":{"title":"2024.724.0-v2","permalink":"/changelog/2024.724.0-v2"}}')}}]);