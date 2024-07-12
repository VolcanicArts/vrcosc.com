---
sidebar_position: 1
description: Creating modules with V1's SDK.
---

# Module Creation

:::info

V2 of the app is currently in development and has a new SDK for module creation which allows for installation of modules inside the app with automatic updates from GitHub releases. You can check it out in the [Discord Server](https://discord.gg/vj4brHyvT5)!

:::

## Notes
Every module class is instantiated when VRCOSC is started. So if you have a module that has class-wide variables that control states, make sure to reset them in the `OnModuleStart` event.

:::warning

Due to the way V1 handles module instanciation, never do anything inside the constructor of your module, only `CreateAttributes` and `OnModuleStart`. This is fixed and better in V2

:::

## Templates

Templates are available through the use of NuGet. Running the following in a command prompt will install the template

`dotnet new install VolcanicArts.VRCOSC.Templates`

Next you can create a new project for your module where the project name is the module name.

`dotnet new VRCOSCModuleDefault -n MODULENAME`

:::warning

The templates may not be updated with the latest SDK. Make sure to check for SDK updates in your NuGet package manager.

:::

## Assembly

To organise your assembly in the listing screen, you need to set a custom AssemblyProduct. In Rider, this can be done here:
![image](https://github.com/VolcanicArts/VRCOSC/assets/29819296/27961cbf-008a-4acb-879f-48f1131b1ca7)

The AssemblyProduct is the name that will be used to display to the user what assembly your modules are contained in. This may change in the future.

## Testing
The custom template already moves your built assembly to the correct folder on build, however if your module requires libraries along side your module, you will need to create a folder inside the assemblies folder. It can be named whatever you want for now, and put your module assembly and dependencies inside there. This tells VRCOSC to load your module in an isolated environment, meaning you can use different versions of a library that may already be present in VRCOSC's SDK. You will need to restart VRCOSC to load the modules.

# Class name
The class name when creating a module must explicitly be the title of the module plus `Module`. This is to differentiate the class from anything else that may be inside the framework.

This class name is used when saving data, so if this class name is changed at any point, user data will not be read from storage and they will need to redefine all the settings they may have customised. It is vital this does not get changed, so choose a name that best fits the module's purpose.

# Metadata
All modules are provided with a set of C# attributes to place on your module class to define the metadata of the module.

### Title
Defined using `[ModuleTitle(string title)]`. The title of the module is what's shown to the user. This can be different from the class name explained before, but in practise it should match as to not cause confusion.

### Description
Defined using `[ModuleDescription(string shortDescription, string? longDescription = null)]`. A short description of your module and an optional longer description.

### Author
Defined using `[ModuleAuthor(string name, string? url = null, string? iconUrl = null)]`. Your name, most commonly your GitHub username. An optional URL to link your GitHub, and an optional icon URL for your icon to be displayed on your module.

### Group
Defined using `[ModuleGroup(ModuleType type)]`. For grouping your module. This is more for organisation than anything else, but allows the user to filter modules a lot easier. If you think your module requires a new module type, make a post in the [Discord Server](https://discord.gg/vj4brHyvT5) and I'll be happy to add it.

### Prefab
Defined using `[ModulePrefab(string name, string? url = null)`. If this module is associated with a prefab, and if so the name of it, and an optional download URL.

### Info
Defined using `[ModuleInfo(string description, string? url = null)]`. This is allowed to be present on the class multiple times allowing for multiple info cards. This allows you to define text that appears in the help menu (the question mark on the module listing page). It's meant to be used as a small area to notify users of any extra things they may have to do to work with the parameters listed, but can be used for anything you want to tell the user.

### Legacy
Defined using `[ModuleLegacy(string? legacySerialisedName = null]`. This allows you to migrate from a legacy serialised name if you want to change the class name of a module. This is a last resort as you should *never* need to change the name of a module, but in the event that you do the serialised name of a module is `classnamemodule`. For example, `MediaModule` becomes `mediamodule`. Once you're satisfied that all the users of your module have had their module migrated you can take this attribute off, but it's fine to leave on as VRCOSC will only do a single migration.

:::danger

If you *really* need to change a module's name you can use this attribute. However, this may confuse users or cause issues with migration if this is abused. Changing the class name is not possible in V2 to ensure compatibility.

:::

# Attributes
Attributes of a module are the settings and parameters. Settings allow the user to customise any settings you require for your module, and parameters are what get sent to and received from VRChat. Parameters specifically get registered to ensure that only the parameters you want enter and leave your module to let you not have to worry about filtering, however you can allow any parameter into your module using `OnAnyParameterReceived(ReceivedParameter parameter)` (explained later).

To create attributes, you must call `CreateSetting()` and `CreateParameter()` inside the overridden `CreateAttributes()` method. Below is an example taken from the Heartrate module.

```csharp
public override void CreateAttributes()
{
    CreateParameter<bool>(HeartrateParameter.Enabled, ParameterMode.Write, "VRCOSC/Heartrate/Enabled", "Enabled", "Whether this module is attempting to emit values");
    CreateParameter<float>(HeartrateParameter.Normalised, ParameterMode.Write, "VRCOSC/Heartrate/Normalised", "Normalised", "The heartrate value normalised to 240bpm");
    CreateParameter<float>(HeartrateParameter.Units, ParameterMode.Write, "VRCOSC/Heartrate/Units", "Units", "The units digit 0-9 mapped to a float");
    CreateParameter<float>(HeartrateParameter.Tens, ParameterMode.Write, "VRCOSC/Heartrate/Tens", "Tens", "The tens digit 0-9 mapped to a float");
    CreateParameter<float>(HeartrateParameter.Hundreds, ParameterMode.Write, "VRCOSC/Heartrate/Hundreds", "Hundreds", "The hundreds digit 0-9 mapped to a float");
}
```

## Settings
A setting requires an Enum as a key. It's recommended you create an Enum along the lines of `[ModuleName]Setting` to keep things organised.

Following that is the display name and description of the setting. These are cosmetic and only serve the purpose of describing what the setting does to the user. You have more space with the description that in the module metadata so this can be more in-depth.

Finally you define the default value of the setting. This _must_ be set, even if it's an empty string, or a false bool, as this tells the module what type the setting is.

Settings can also have an optional list of dependencies. These are other settings that are required to be in a certain state for this setting to be enabled and editable.

Settings get stored locally on a user's machine under their keys. There are a few notes on how the storage works:
- If a key is changed or removed, the user's value for the previous key is deleted
- If a new key is added, the default setting will be used
- If a user hasn't changed the default value of a setting, and you change the default value, it will reflect on their end

### Settings Retrieval
You can access settings by calling the `GetSetting<T>()` method where `T` is the setting's type. If your setting is a list, you instead need to call `GetSettingList<T>()` where `T` is the contents of the list.

This can be done in any of the events (defined below), and it will return the latest value of what the user entered. Settings are editable at runtime so make sure you don't cache settings locally unless you want that type of behaviour.

## Parameters
A parameter requires an Enum as a key. It's recommended you create an Enum along the lines of `[ModuleName]Parameter`. Next is the parameter mode; This doesn't affect how the data is sent, but is a contingency to make sure your code works as expected. Next is the parameter's name, and then finally a description.

```csharp
    CreateParameter<bool>(MediaParameter.Play, ParameterMode.ReadWrite, @"VRCOSC/Media/Play", "Play/Pause", @"True for playing. False for paused");
    CreateParameter<float>(MediaParameter.Volume, ParameterMode.ReadWrite, @"VRCOSC/Media/Volume", "Volume", @"The volume of the process that is controlling the media");
    CreateParameter<bool>(MediaParameter.Muted, ParameterMode.ReadWrite, @"VRCOSC/Media/Muted", "Muted", @"True to mute. False to unmute");
    CreateParameter<int>(MediaParameter.Repeat, ParameterMode.ReadWrite, @"VRCOSC/Media/Repeat", "Repeat", @"0 for disabled. 1 for single. 2 for list");
    CreateParameter<bool>(MediaParameter.Shuffle, ParameterMode.ReadWrite, @"VRCOSC/Media/Shuffle", "Shuffle", @"True for enabled. False for disabled");
    CreateParameter<bool>(MediaParameter.Next, ParameterMode.Read, @"VRCOSC/Media/Next", "Next", @"Becoming true causes the next track to play");
    CreateParameter<bool>(MediaParameter.Previous, ParameterMode.Read, @"VRCOSC/Media/Previous", "Previous", @"Becoming true causes the previous track to play");
```

To handle incoming parameters, methods can be overridden:

```csharp
    protected virtual void OnAnyParameterReceived(ReceivedParameter parameter) { }
    // AvatarModule only
    protected virtual void OnAvatarParameterReceived(AvatarParameter parameter) { }
    // WorldModule only
    protected virtual void OnWorldParameterReceived(WorldParameter parameter) { }
```

`OnAnyParameterReceived` should not be used unless you absolutely have to as this allows any avatar parameter to enter your module, not just the registered parameters. If you'd like an example, a viable use case is the Counter module.

# Events
All modules come with default module events. These are separate from events that occur due to OSC. It's important to note that all events are _synchronous_ and if you need to do initialisation of something that will take more than a few microseconds you must use an asynchronous Task to stop the update thread freezing.

Events can be accessed by overriding the `OnModuleStart` and `OnModuleStop` methods. There are avatar specific events which can be accessed by overriding the `OnAvatarChange` and `OnPlayerUpdate` methods.

## General
### Module Start
The start event occurs whenever VRChat is started or a user manually started the modules. This is only called once on start so is the perfect place to do initial setup of anything your module may need to function, but which is dynamic at runtime.

### Module Stop
The stop event occurs when all modules are stopped due to VRChat closing or a user manually stopping the modules. This is only called once on stop so can be used to clear any OSC parameters on a user's avatar and reset local module settings (if they aren't already set to a default in Start).

### Module Update
To allow your module to have update methods, you define the `[ModuleUpdate]` attribute on any method you'd like to be called at a regular interval. The `ModuleUpdateMode` you provide gives insight into how you'd like the method to update. For example, the `ModuleUpdateMode` of `ChatBox` updates right before the ChatBox evaluates the clips, making it perfect for setting ChatBox data.
Setting the mode to `Custom` gives you control over if you'd like the update method to update once immediately and an update rate.

## Avatar Specific
### Avatar Change
The avatar change event occurs whenever a user enters a new avatar or when a user loads into a world. Bear in mind that if a user hasn't started VRCOSC before VRChat then you will not receive this event for the first avatar they load into. The avatar ID is passed through this method for use.

### Player Update
This is called whenever anything about the player is updated, for example, their AFK parameter. This can be used to trigger module code that only needs to be ran when something happens to the player's client.

## World Specific
:::info

The split of Avatar module and World module was in anticipation of VRChat adding world OSC. This is not happening for the forseeable future so you should only ever need to use AvatarModule.

:::

# Persistence
Modules have a thing called persistence, where you can save the state of your module so that a user can have persistent data. An example use-case of this is the `CounterModule`

To enable persistence you define the `[ModulePersistent(string serialiseName, string? legacySerialisedName = null)]` on any property (must have `{ get; set; }` present). The property can be public or private. This takes in a serialised name to allow you to rename the property without it affecting the serialisation, and a legacy serialised name to allow you to change the serialised name while migrating from an old name so as not to lose the user's data.

Do note that the persistence loads before `OnModuleStart` and saves after `OnModuleStop` to let you finalise the data if needed, and that the instance is set, meaning any references will be out of date by the time `OnModuleStart` is called, so ensure you only take references in or after your module has started.`

# ChatBox V3

If you want your module to interface with ChatBox V3, have it extend `ChatBoxModule` instead of `AvatarModule`

## Creating Attributes
To integrate with ChatBox V3 you need to create states, events, and variables.

*ALWAYS* register variables before states/events as this allows you to call `GetVariableFormat()` so your states/events can contain the correctly formatted variables.

Every module that interacts with CBV3 should contain at least 1 state with a key of `default`. If a module only has a single state called `default` then the UI filters out the name to make it cleaner.

To create variables, call `CreateVariable()`. To create states and events, call `CreateState()` and `CreateEvent()` respectively

## Setting Attributes

To set states, call `ChangeStateTo()`. To trigger events, call `TriggerEvent()`. To set variable values, call `SetVariableValue()`

## OnModuleStart

*ALWAYS* call `ChangeStateTo()` with your starting state. If you do not do this then CBV3 will not register your module as ChatBox-enabled until a valid state is set

# Custom Attribute UI

Instead of calling `CreateSetting()` with the intent on adding a simple boolean or int, you can create a custom extension of `ModuleAttribute<T>` or `ModuleAttributeList<T>` and register that. This allows you to create custom UI.

As this isn't a particularly mass use case as the default settings offered will be useful to 99% of people I won't go into great detail here. If you'd like to get a rundown of how custom UI works then please go to the module-development channel on the Discord server and I'll help you as it requires knowledge of the UI framework I use.