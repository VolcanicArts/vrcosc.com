"use strict";(self.webpackChunkvrcosc_com=self.webpackChunkvrcosc_com||[]).push([["3597"],{5402:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>r,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"v2/sdk/getting-started","title":"Getting Started","description":"Create and build a module project","source":"@site/docs/v2/sdk/getting-started.md","sourceDirName":"v2/sdk","slug":"/v2/sdk/getting-started","permalink":"/docs/v2/sdk/getting-started","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Create and build a module project"},"sidebar":"docsSidebar","previous":{"title":"SDK","permalink":"/docs/category/sdk"},"next":{"title":"Flow","permalink":"/docs/v2/sdk/flow"}}'),a=t("5893"),s=t("65");let o={sidebar_position:2,description:"Create and build a module project"},l="Getting Started",r={},d=[{value:"0 - Terminology",id:"terminology",level:3},{value:"1 - Creating a Project",id:"creating-a-project",level:3},{value:"2 - Making a Module",id:"making-a-module",level:3},{value:"3 - Exporting",id:"exporting",level:3},{value:"4 - Publishing",id:"publishing",level:3},{value:"5 - Extra Dependencies",id:"extra-dependencies",level:3}];function c(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["This guide is written with Visual Studio 2022 in mind. Please have an up-to-date copy of Visual Studio 2022 with the ",(0,a.jsx)(n.code,{children:".NET desktop development"})," module installed, and .NET 8.0's SDK installed which can be found ",(0,a.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/download/dotnet/8.0",children:"here"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"terminology",children:"0 - Terminology"}),"\n",(0,a.jsx)(n.p,{children:"There are 3 parts to making and publishing VRCOSC modules:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Module Package - This is what your repository on GitHub is and what appears inside the package listing in the app"}),"\n",(0,a.jsx)(n.li,{children:"Module Assembly - Assemblies contain multiple modules, and multiple can make up a module package"}),"\n",(0,a.jsx)(n.li,{children:"Module - Individual modules make up a module assembly"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"As such, multiple modules can go into an assembly, and multiple assemblies can go into a package. However, usually there will only be 1 assembly per package.\r\nIt's recommended to make multiple packages if you want to truly separate assemblies into different installs for users."}),"\n",(0,a.jsx)(n.h3,{id:"creating-a-project",children:"1 - Creating a Project"}),"\n",(0,a.jsxs)(n.p,{children:["First, create a new class library and select .NET 8.0 as the framework. If you do not see .NET 8.0, you need to update Visual Studio. For reference, I'll name the project ",(0,a.jsx)(n.code,{children:"MyTestModules"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Right click on the project and go into the properties. Inside the Application tab click the button named Assembly Information. Find the ",(0,a.jsx)(n.code,{children:"Title"})," field and edit that. This ",(0,a.jsx)(n.code,{children:"Title"})," field is what shows as the module package title on the module listing page."]}),"\n",(0,a.jsx)(n.p,{children:"Next, right click on your project's csproj file and click edit. Replace the contents with:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<PropertyGroup>\r\n    <TargetFramework>net8.0-windows10.0.26100.0</TargetFramework>\r\n    <UseWPF>true</UseWPF>\r\n    <ImplicitUsings>enable</ImplicitUsings>\r\n    <Nullable>enable</Nullable>\r\n    <GenerateAssemblyInfo>false</GenerateAssemblyInfo>\r\n    <LangVersion>latestmajor</LangVersion>\r\n    <WindowsSdkPackageVersion>10.0.26100.1</WindowsSdkPackageVersion>\r\n</PropertyGroup>\r\n\r\n<ItemGroup>\r\n    <PackageReference Include="VolcanicArts.VRCOSC.SDK" Version="2025.212.0" />\r\n</ItemGroup>\r\n\r\n<Target Name="PostBuild" AfterTargets="PostBuildEvent">\r\n    <Exec Command="copy /Y &quot;$(TargetDir)$(TargetName).dll&quot; &quot;%25appdata%25\\VRCOSC\\packages\\local\\$(TargetName).dll&quot;"/>\r\n</Target>\n'})}),"\n",(0,a.jsx)(n.p,{children:"The specific windows build of .NET 8.0 and the SDK is required for VRCOSC's SDK due to certain Windows integrations, and for people building on slightly different versions of Windows.\r\nAny changes to these requirements will be pinged about, so make sure if you're making a module to be in the Discord server."}),"\n",(0,a.jsx)(n.p,{children:"The SDK for the modules has been installed for you."}),"\n",(0,a.jsx)(n.p,{children:"The target will automatically copy the built DLL into the local packages folder. This allows you to build your modules and then reload them using the Debug page in the app without having to manually move the built DLL."}),"\n",(0,a.jsx)(n.h3,{id:"making-a-module",children:"2 - Making a Module"}),"\n",(0,a.jsxs)(n.p,{children:["In your project, create a new CS file and call it ",(0,a.jsx)(n.code,{children:"TestModule"}),". We'll use this name for now, but it can be whatever you like. Just keep in mind that this name should be unique and I recommend ending the class name in ",(0,a.jsx)(n.code,{children:"Module"})," just for cleanliness, but as VRCOSC now works using packages this is less of an issue now."]}),"\n",(0,a.jsxs)(n.p,{children:["At the very least you need the 3 attributes listed below. They indicate the display title, display description, and type of module you're making. You also need the class to extend the ",(0,a.jsx)(n.code,{children:"Module"})," class from the SDK."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'[ModuleTitle("My Test Module")]\r\n[ModuleDescription("This is my test module")]\r\n[ModuleType(ModuleType.Generic)]\r\npublic class TestModule : Module\r\n{\r\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now that this is done, a module with no functionality has been created which can now be exported and tested."}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:["The module's name is used as its ID. Internally ",(0,a.jsx)(n.code,{children:"TestModule"})," gets turned into ",(0,a.jsx)(n.code,{children:"testmodule"}),". Do not change the class name else it will break anything that the user has saved."]})}),"\n",(0,a.jsx)(n.h3,{id:"exporting",children:"3 - Exporting"}),"\n",(0,a.jsx)(n.p,{children:"Build your project. If VRCOSC is already open you can reload the modules to load your test module by going into the app's settings, Advanced, and turning on Debug Mode. You'll now see a new debug tab has appeared which has a button to reload the modules. Clicking this should result in your module appearing on the module listing page."}),"\n",(0,a.jsx)(n.h3,{id:"publishing",children:"4 - Publishing"}),"\n",(0,a.jsxs)(n.p,{children:["To publish a module and have it appear in the app's package list, tag your repo with ",(0,a.jsx)(n.code,{children:"vrcosc-package"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Next, add a file called ",(0,a.jsx)(n.code,{children:"vrcosc.json"})," to the root of your main branch with this template:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\r\n    "package_id": "my.package.name",\r\n    "display_name": "My Modules",\r\n    "cover_image_url": "https://some.image/url"\r\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"package_id"})," is usually something along the lines of ",(0,a.jsx)(n.code,{children:"yourname.modulepackagename"}),". For example, the official modules are ",(0,a.jsx)(n.code,{children:"volcanicarts.vrcosc.officialmodules"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"display_name"})," is what will be shown to the user instead of your repository's name."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"cover_image_url"})," is a cover image for the information overlay."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"package_id"})," cannot ever change otherwise it will break all the installs and updates of anyone that has installed your package."]})}),"\n",(0,a.jsxs)(n.p,{children:["Finally, make a new release with a semver-compatible tag (for example, 1.0.0), then go to your project's folder and into ",(0,a.jsx)(n.code,{children:"bin/Debug/net8.0-windows10.0.22621.0"}),". You should find there's a DLL file in there called ",(0,a.jsx)(n.code,{children:"MyTestModules.dll"}),".\r\nThis DLL file is what needs to be in the release's assets."]}),"\n",(0,a.jsx)(n.p,{children:"It can take up to 24 hours for the package list to refresh for all users. Users can manually refresh the package list at any time using the refresh button."}),"\n",(0,a.jsxs)(n.p,{children:["The files that are considered for download are ",(0,a.jsx)(n.em,{children:"any"})," DLL files OR ",(0,a.jsx)(n.em,{children:"any"})," ZIP files from the release that the user has picked, so if you need dependencies that aren't packaged with the SDK, or need specific versions of dependencies that are, you can add those to the release as well and VRCOSC will handle creating an isolated environment for the whole package to load into. Using a ZIP allows you to package any runtime resources your modules might need."]}),"\n",(0,a.jsx)(n.h3,{id:"extra-dependencies",children:"5 - Extra Dependencies"}),"\n",(0,a.jsx)(n.p,{children:"If your module requires a dependency that isn't present in the app, all extra DLLs will need to be moved into the local folder as well. VRCOSC will automatically handle creating an isolated environment to load them up in (which also handles the case where you need a different version of a dependency that's already in the app). On the publishing page there is more detail on how to handle dependencies like this when publish your module package."})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},65:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var i=t(7294);let a={},s=i.createContext(a);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);