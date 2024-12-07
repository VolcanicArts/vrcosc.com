---
sidebar_position: 2
description: Create and build a module project
---

# Getting Started

:::info

This guide is written with Visual Studio 2022 in mind. Please have an up-to-date copy of Visual Studio 2022 with the `.NET desktop development` module installed, and .NET 8.0's SDK installed which can be found [here](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).

:::

### 0 - Terminology {#terminology}
There are 3 parts to making and publishing VRCOSC modules:

- Module Package - This is what your repository on GitHub is and what appears inside the package listing in the app
- Module Assembly - Assemblies contain multiple modules, and multiple can make up a module package
- Module - Individual modules make up a module assembly

As such, multiple modules can go into an assembly, and multiple assemblies can go into a package. However, usually there will only be 1 assembly per package.
It's recommended to make multiple packages if you want to truly separate assemblies into different installs for users.

### 1 - Creating a Project {#creating-a-project}
First, create a new class library and select .NET 8.0 as the framework. If you do not see .NET 8.0, you need to update Visual Studio. For reference, I'll name the project `MyTestModules`.

Right click on the project and go into the properties. Inside the Application tab click the button named Assembly Information. Find the `Title` field and edit that. This `Title` field is what shows as the module package title on the module listing page.

Next, right click on your project's csproj file and click edit. Replace the contents with:
```xml
<PropertyGroup>
    <TargetFramework>net8.0-windows10.0.22621.0</TargetFramework>
    <UseWPF>true</UseWPF>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
    <GenerateAssemblyInfo>false</GenerateAssemblyInfo>
    <LangVersion>latestmajor</LangVersion>
    <WindowsSdkPackageVersion>10.0.22621.52</WindowsSdkPackageVersion>
</PropertyGroup>

<ItemGroup>
    <PackageReference Include="VolcanicArts.VRCOSC.SDK" Version="2024.1208.0" />
</ItemGroup>

<Target Name="PostBuild" AfterTargets="PostBuildEvent">
    <Exec Command="copy /Y &quot;$(TargetDir)$(TargetName).dll&quot; &quot;%25appdata%25\vrcosc\packages\local\$(TargetName).dll&quot;"/>
</Target>
```

The specific windows build of .NET 8.0 and the SDK is required for VRCOSC's SDK due to certain Windows integrations, and for people building on slightly different versions of Windows.
Any changes to these requirements will be pinged about, so make sure if you're making a module to be in the Discord server.

The SDK for the modules has been installed for you.

The target will automatically copy the built DLL into the local packages folder. This allows you to build your modules and then reload them using the Debug page in the app without having to manually move the built DLL.

### 2 - Making a Module {#making-a-module}
In your project, create a new CS file and call it `TestModule`. We'll use this name for now, but it can be whatever you like. Just keep in mind that this name should be unique and I recommend ending the class name in `Module` just for cleanliness, but as VRCOSC now works using packages this is less of an issue now.

At the very least you need the 3 attributes listed below. They indicate the display title, display description, and type of module you're making. You also need the class to extend the `Module` class from the SDK.
```csharp
[ModuleTitle("My Test Module")]
[ModuleDescription("This is my test module")]
[ModuleType(ModuleType.Generic)]
public class TestModule : Module
{
}
```

Now that this is done, a module with no functionality has been created which can now be exported and tested.

:::danger

The module's name is used as its ID. Internally `TestModule` gets turned into `testmodule`. Do not change the class name else it will break anything that the user has saved.

:::

### 3 - Exporting {#exporting}
Build your project. If VRCOSC is already open you can reload the modules to load your test module by going into the app's settings, Advanced, and turning on Debug Mode. You'll now see a new debug tab has appeared which has a button to reload the modules. Clicking this should result in your module appearing on the module listing page.

### 4 - Publishing {#publishing}

To publish a module and have it appear in the app's package list, tag your repo with `vrcosc-package`.

Next, add a file called `vrcosc.json` to the root of your main branch with this template:
```json
{
    "package_id": "my.package.name",
    "display_name": "My Modules",
    "cover_image_url": "https://some.image/url"
}
```
- `package_id` is usually something along the lines of `yourname.modulepackagename`. For example, the official modules are `volcanicarts.vrcosc.officialmodules`.
- `display_name` is what will be shown to the user instead of your repository's name.
- `cover_image_url` is a cover image for the information overlay.

:::danger

`package_id` cannot ever change otherwise it will break all the installs and updates of anyone that has installed your package.

:::

Finally, make a new release with a semver-compatible tag (for example, 1.0.0), then go to your project's folder and into `bin/Debug/net8.0-windows10.0.22621.0`. You should find there's a DLL file in there called `MyTestModules.dll`.
This DLL file is what needs to be in the release's assets.

It can take up to 24 hours for the package list to refresh for all users. Users can manually refresh the package list at any time using the refresh button.

The files that are considered for download are *any* DLL files OR *any* ZIP files from the release that the user has picked, so if you need dependencies that aren't packaged with the SDK, or need specific versions of dependencies that are, you can add those to the release as well and VRCOSC will handle creating an isolated environment for the whole package to load into. Using a ZIP allows you to package any runtime resources your modules might need.

### 5 - Extra Dependencies {#extra-dependencies}
If your module requires a dependency that isn't present in the app, all extra DLLs will need to be moved into the local folder as well. VRCOSC will automatically handle creating an isolated environment to load them up in (which also handles the case where you need a different version of a dependency that's already in the app). On the publishing page there is more detail on how to handle dependencies like this when publish your module package.