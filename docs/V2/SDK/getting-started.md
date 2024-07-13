---
sidebar_position: 2
description: Create and build a module project
---

# Getting Started

:::info

This guide is written with Visual Studio 2022 in mind. Please have an up-to-date copy of Visual Studio 2022 with the `.NET desktop development` module installed, and .NET 8.0's SDK installed which can be found [here](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).

:::

### 1 - Creating a project {#creating-a-project}
First, create a new class library and select .NET 8.0 as the framework. If you do not see .NET 8.0, you need to update Visual Studio. For reference, I'll name the project `MyTestModules`.

Right click on the project and go into the properties. Inside the Application tab click the button named Assembly Information. Find the `Title` field and edit that. This `Title` field is what shows as the module package title on the module listing page.

Next, right click on your project's csproj file and click edit. Where there is the line `<TargetFramework>` you need to change `net8.0` to `net8.0-windows.10.0.22621.0`. The specific windows build of .NET 8.0 is required for VRCOSC's SDK due to certain Windows integrations.

:::info

A single project can contain multiple modules. You'll see this referred to as module packages

:::

### 2 - Installing the SDK {#installing-the-sdk}
During the beta, the SDK's NuGet package is distributed locally. This will eventually be distributed on NuGet again when V2 is released. For now, you can tell Visual Studio to look at a local folder to install packages from.

To make a local folder, make a folder somewhere called `localpackages` and put the SDK's NuGet file in there. Then in Visual Studio go to Tools -> NuGet Package Manager -> Package Manager Settings. In the options window select NuGet Package Manager -> Package Sources. Add a new source and select the `localpackages` folder you previously selected. Click Update, then click OK.

To install the SDK in your project, right click on your project and go to Manage NuGet Packages. Select the `localpackages` source and in the Browse tab install the SDK.

Any time the beta SDK updates you can now drop the new NuGet file in the `localpackages` folder and Visual Studio will let you update.

### 3 - Making a Test Module {#making-a-test-module}
In your project, create a new CS file and call it `TestModule`. We'll use this name for now, but it can be whatever you like. Just keep in mind that this name should be unique and I recommend ending the class name in `Module` just for cleanliness, but as V2 works using packages this is less of an issue now.

At the very least you need the 3 attributes listed below. They indicate the display title, display description, and type of module you're making. You also need the class to extend the `Module` class from the SDK.
```csharp
[ModuleTitle("My Test Module")]
[ModuleDescription("This is my test module")]
[ModuleType(ModuleType.Generic)]
public class TestModule : Module
```

Now that this is done, a barebones module with no functionality has been created which can now be exported and tested.

:::danger

The module's name is used as its ID. Internally `TestModule` gets turned into `testmodule`. Do not change the class name else it will break anything that the user has saved.

:::

### 4 - Exporting your module package {#exporting-your-module-package}
First, build your project. Then go to your project's folder and into `bin/Debug/net8.0-windows10.0.22621.0`. You should find there's a DLL file in there called `MyTestModules.dll`. Copy this file and put it into the `%appdata%/vrcosc-v2/packages/local` folder. This local packages folder is a special folder for testing local modules so as not to interfere with the same module when they're in another package.

If VRCOSC is already open you can reload the modules to load your test module by going into the app's settings, Debug, and turning on Debug Mode. You'll now see a new debug tab has appeared which has a button to reload the modules. Clicking this should result in your module appearing on the module listing page.

### 5 - Publishing your module package {#publishing-your-module-package}
To publish a V2 module and have it appear in the app's package list, tag your repo with `vrcosc-package`.

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

Any releases made on your repo will now be listed automatically on the package screen and available for anyone using V2 to install.

It can take up to 24 hours for the package list to refresh for all users. Users can manually refresh the package list at any time using the refresh button.

The files that V2 downloads are any DLL files from the release that the user has picked, so if you need dependencies that aren't packaged with V2, or need specific versions of dependencies that are, you can add those to the release as well and V2 will handle creating an isolated environment for the whole package to load into.

:::warning

This may change in the future to be a vrcosc.zip file for better security. Please keep up to date with V2 releases and this section of the documentation

:::

### 6 - Advanced Development {#advanced-development}
If you want to be able to rapidly test your modules, you can add the following to your csproj file:
```xml
<Target Name="PostBuild" AfterTargets="PostBuildEvent">
    <Exec Command="copy /Y &quot;$(TargetDir)$(TargetName).dll&quot; &quot;%25appdata%25\vrcosc-v2\packages\local\$(TargetName).dll&quot;"/>
</Target>
```
This will automatically copy the built DLL into the local packages folder for V2. This allows you to build your modules and then reload them using the Debug page in the app without having to manually move any DLLs.

If your module requires a dependency that isn't present in the app, all extra DLLs will need to be moved into the local folder as well. VRCOSC will automaticaly handle creating an isolated environment to load them up in (which also handles the case where you need a different version of a dependency that's already in the app). On the publishing page there is more detail on how to handle dependencies like this when publish your module package.

:::warning

The V2 install folder, `vrcosc-v2`, will change when V2 is released to just be `vrcosc`. Keep this in mind when creating any automations for your module projects.

:::