---
sidebar_position: 2
description: Create and build a module project
---

# Getting Started

:::info

This guide is written with Visual Studio 2026 in mind. Please have an up-to-date copy of Visual Studio 2026 with the `.NET desktop development` module installed, and .NET 10.0's SDK installed which can be found [here](https://dotnet.microsoft.com/en-us/download/dotnet/10.0).

:::

### 0 - Terminology {#terminology}
There are 3 parts to making and publishing VRCOSC modules:

- Module Package - This is what your repository on GitHub is and what appears inside the package listing in the app
- Module Assembly - Assemblies contain multiple modules, and multiple can make up a module package
- Module - Individual modules make up a module assembly

As such, multiple modules can go into an assembly, and multiple assemblies can go into a package. However, usually there will only be 1 assembly per package.
It's recommended to make multiple packages if you want to truly separate assemblies into different installs for users.

### 1 - Creating a Project {#creating-a-project}
Firstly, create a new class library and select .NET 10.0 as the framework. If you do not see .NET 10.0, you need to update Visual Studio. For reference, I'll name the project `MyTestModules`.

Secondly, right click on the project and go into the properties. Inside the Application tab click the button named Assembly Information. Find the `Title` field and edit that. This `Title` field is what shows as the module package title on the module listing page. You'll know if you did this correctly if you don't see the package title as `UNKNOWN`.

Next, right click on your project's csproj file and click edit. Replace the contents with:
```xml
<PropertyGroup>
    <TargetFramework>net10.0-windows10.0.26100.0</TargetFramework>
    <UseWPF>true</UseWPF>
    <Nullable>enable</Nullable>
    <WindowsSdkPackageVersion>10.0.26100.1</WindowsSdkPackageVersion>
</PropertyGroup>

<ItemGroup>
    <PackageReference Include="VolcanicArts.VRCOSC.SDK" Version="2025.1120.0" />
</ItemGroup>

<!--> This is a post build event that copies your module assembly to the local package directory for VRCOSC <-->
<Target Name="PostBuild" AfterTargets="PostBuildEvent">
    <Exec Command="copy /Y &quot;$(TargetDir)$(TargetName).dll&quot; &quot;%25appdata%25\VRCOSC\packages\local\$(TargetName).dll&quot;"/>
</Target>
```

The specific windows build of .NET 10.0 and the SDK is required for VRCOSC's SDK due to certain Windows integrations, and for people building on slightly different versions of Windows.
Any changes to these requirements will be pinged about, so make sure if you're making a module to be in the Discord server.

:::info

If your module requires a dependency that isn't present in the app, all extra DLLs will need to be moved into the local folder as well.

:::

### 2 - Creating a Module {#creating-a-module}
In your project create a new CS file and call it your module's name. We'll use `TestModule` as the name for now, but it can be whatever you like. Just keep in mind that this name should be unique and we recommend ending the class name in `Module` just for cleanliness. As VRCOSC now works using packages which have an ID, the name of the module is less of a concern now.

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

Internally `TestModule` gets turned into `testmodule`, and this ID is used to save and load the user's settings. Do not change the class name!

:::

### 3 - Exporting {#exporting}
Build your project. If VRCOSC is already open you can reload the modules to load your test module by going into the app's debug settings and clicking the reload modules from disk button. This should result in your module appearing in the module list.

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

Finally, make a new release with a semver-compatible tag (for example, 1.0.0), then go to your project's folder and into `bin/Debug/net10.0-windows10.0.26100.0`. You should find there's a DLL file in there called `MyTestModules.dll`.
This DLL file is what needs to be in the release's assets.

The files that are considered for download are any DLL files or any ZIP files from the release.

:::tip

If you're just publishing a single DLL, putting just the DLL in the release is fine. If you're publishing with other DLLs for dependencies, packing as a ZIP is recommended.

:::

:::info

Keep in mind that it can take up to 24 hours for the package list to refresh for all users automatically. If you publish a release you can advise your users to refresh the package list manually.

:::

### 5 - What's Next? {#whats-next}
Check out some of the other pages in the SDK category! They're ordered in a way to allow you to get an understanding of how modules should be designed.

Feel free to reach out on the Discord server by getting the Development role after joining!