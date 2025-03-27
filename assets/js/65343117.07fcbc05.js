"use strict";(self.webpackChunkvrcosc_com=self.webpackChunkvrcosc_com||[]).push([["3597"],{5402:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>r,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"v2/sdk/getting-started","title":"Getting Started","description":"Create and build a module project","source":"@site/docs/v2/sdk/getting-started.md","sourceDirName":"v2/sdk","slug":"/v2/sdk/getting-started","permalink":"/docs/v2/sdk/getting-started","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Create and build a module project"},"sidebar":"docsSidebar","previous":{"title":"SDK","permalink":"/docs/category/sdk"},"next":{"title":"Flow","permalink":"/docs/v2/sdk/flow"}}'),o=t("5893"),s=t("65");let a={sidebar_position:2,description:"Create and build a module project"},l="Getting Started",r={},d=[{value:"0 - Terminology",id:"terminology",level:3},{value:"1 - Creating a Project",id:"creating-a-project",level:3},{value:"2 - Creating a Module",id:"creating-a-module",level:3},{value:"3 - Exporting",id:"exporting",level:3},{value:"4 - Publishing",id:"publishing",level:3},{value:"5 - What&#39;s Next?",id:"whats-next",level:3}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["This guide is written with Visual Studio 2022 in mind. Please have an up-to-date copy of Visual Studio 2022 with the ",(0,o.jsx)(n.code,{children:".NET desktop development"})," module installed, and .NET 8.0's SDK installed which can be found ",(0,o.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/download/dotnet/8.0",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"terminology",children:"0 - Terminology"}),"\n",(0,o.jsx)(n.p,{children:"There are 3 parts to making and publishing VRCOSC modules:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Module Package - This is what your repository on GitHub is and what appears inside the package listing in the app"}),"\n",(0,o.jsx)(n.li,{children:"Module Assembly - Assemblies contain multiple modules, and multiple can make up a module package"}),"\n",(0,o.jsx)(n.li,{children:"Module - Individual modules make up a module assembly"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"As such, multiple modules can go into an assembly, and multiple assemblies can go into a package. However, usually there will only be 1 assembly per package.\r\nIt's recommended to make multiple packages if you want to truly separate assemblies into different installs for users."}),"\n",(0,o.jsx)(n.h3,{id:"creating-a-project",children:"1 - Creating a Project"}),"\n",(0,o.jsxs)(n.p,{children:["Firstly, create a new class library and select .NET 8.0 as the framework. If you do not see .NET 8.0, you need to update Visual Studio. For reference, I'll name the project ",(0,o.jsx)(n.code,{children:"MyTestModules"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Secondly, right click on the project and go into the properties. Inside the Application tab click the button named Assembly Information. Find the ",(0,o.jsx)(n.code,{children:"Title"})," field and edit that. This ",(0,o.jsx)(n.code,{children:"Title"})," field is what shows as the module package title on the module listing page. You'll know if you did this correctly if you don't see the package title as ",(0,o.jsx)(n.code,{children:"UNKNOWN"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Next, right click on your project's csproj file and click edit. Replace the contents with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<PropertyGroup>\r\n    <TargetFramework>net8.0-windows10.0.26100.0</TargetFramework>\r\n    <UseWPF>true</UseWPF>\r\n    <Nullable>enable</Nullable>\r\n    <WindowsSdkPackageVersion>10.0.26100.1</WindowsSdkPackageVersion>\r\n</PropertyGroup>\r\n\r\n<ItemGroup>\r\n    <PackageReference Include="VolcanicArts.VRCOSC.SDK" Version="2025.212.0" />\r\n</ItemGroup>\r\n\r\n\x3c!--\x3e This is a post build event that copies your module assembly to the local package directory for VRCOSC <--\x3e\r\n<Target Name="PostBuild" AfterTargets="PostBuildEvent">\r\n    <Exec Command="copy /Y &quot;$(TargetDir)$(TargetName).dll&quot; &quot;%25appdata%25\\VRCOSC\\packages\\local\\$(TargetName).dll&quot;"/>\r\n</Target>\n'})}),"\n",(0,o.jsx)(n.p,{children:"The specific windows build of .NET 8.0 and the SDK is required for VRCOSC's SDK due to certain Windows integrations, and for people building on slightly different versions of Windows.\r\nAny changes to these requirements will be pinged about, so make sure if you're making a module to be in the Discord server."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"If your module requires a dependency that isn't present in the app, all extra DLLs will need to be moved into the local folder as well."})}),"\n",(0,o.jsx)(n.h3,{id:"creating-a-module",children:"2 - Creating a Module"}),"\n",(0,o.jsxs)(n.p,{children:["In your project create a new CS file and call it your module's name. We'll use ",(0,o.jsx)(n.code,{children:"TestModule"})," as the name for now, but it can be whatever you like. Just keep in mind that this name should be unique and we recommend ending the class name in ",(0,o.jsx)(n.code,{children:"Module"})," just for cleanliness. As VRCOSC now works using packages which have an ID, the name of the module is less of a concern now."]}),"\n",(0,o.jsxs)(n.p,{children:["At the very least you need the 3 attributes listed below. They indicate the display title, display description, and type of module you're making. You also need the class to extend the ",(0,o.jsx)(n.code,{children:"Module"})," class from the SDK."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'[ModuleTitle("My Test Module")]\r\n[ModuleDescription("This is my test module")]\r\n[ModuleType(ModuleType.Generic)]\r\npublic class TestModule : Module\r\n{\r\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now that this is done, a module with no functionality has been created which can now be exported and tested."}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsxs)(n.p,{children:["Internally ",(0,o.jsx)(n.code,{children:"TestModule"})," gets turned into ",(0,o.jsx)(n.code,{children:"testmodule"}),", and this ID is used to save and load the user's settings. Do not change the class name!"]})}),"\n",(0,o.jsx)(n.h3,{id:"exporting",children:"3 - Exporting"}),"\n",(0,o.jsx)(n.p,{children:"Build your project. If VRCOSC is already open you can reload the modules to load your test module by going into the app's debug settings and clicking the reload modules from disk button. This should result in your module appearing in the module list."}),"\n",(0,o.jsx)(n.h3,{id:"publishing",children:"4 - Publishing"}),"\n",(0,o.jsxs)(n.p,{children:["To publish a module and have it appear in the app's package list, tag your repo with ",(0,o.jsx)(n.code,{children:"vrcosc-package"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Next, add a file called ",(0,o.jsx)(n.code,{children:"vrcosc.json"})," to the root of your main branch with this template:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\r\n    "package_id": "my.package.name",\r\n    "display_name": "My Modules",\r\n    "cover_image_url": "https://some.image/url"\r\n}\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"package_id"})," is usually something along the lines of ",(0,o.jsx)(n.code,{children:"yourname.modulepackagename"}),". For example, the official modules are ",(0,o.jsx)(n.code,{children:"volcanicarts.vrcosc.officialmodules"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"display_name"})," is what will be shown to the user instead of your repository's name."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"cover_image_url"})," is a cover image for the information overlay."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"package_id"})," cannot ever change otherwise it will break all the installs and updates of anyone that has installed your package."]})}),"\n",(0,o.jsxs)(n.p,{children:["Finally, make a new release with a semver-compatible tag (for example, 1.0.0), then go to your project's folder and into ",(0,o.jsx)(n.code,{children:"bin/Debug/net8.0-windows10.0.26100.0"}),". You should find there's a DLL file in there called ",(0,o.jsx)(n.code,{children:"MyTestModules.dll"}),".\r\nThis DLL file is what needs to be in the release's assets."]}),"\n",(0,o.jsx)(n.p,{children:"The files that are considered for download are any DLL files or any ZIP files from the release."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"If you're just publishing a single DLL, putting just the DLL in the release is fine. If you're publishing with other DLLs for dependencies, packing as a ZIP is recommended."})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Keep in mind that it can take up to 24 hours for the package list to refresh for all users automatically. If you publish a release you can advise your users to refresh the package list manually."})}),"\n",(0,o.jsx)(n.h3,{id:"whats-next",children:"5 - What's Next?"}),"\n",(0,o.jsx)(n.p,{children:"Check out some of the other pages in the SDK category! They're ordered in a way to allow you to get an understanding of how modules should be designed."}),"\n",(0,o.jsx)(n.p,{children:"Feel free to reach out on the Discord server by getting the Development role after joining!"})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},65:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var i=t(7294);let o={},s=i.createContext(o);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);