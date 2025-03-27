---
sidebar_position: 6
description: How to interact with the ChatBox system
---

# ChatBox

## Flow
It's important to understand the flow of how data is used for the ChatBox to make sure that user data doesn't get lost.

Static elements (ones that have Enums for lookups) are not allowed to change during the lifetime of the module. These elements are defined and are guaranteed to not be modified.

Dynamic elements (ones that have strings for lookups) are allowed to change during the lifetime of the module. An example use case of this is the [Counter](https://github.com/VolcanicArts/VRCOSC-Modules/blob/main/VRCOSC.Modules/Counter/CounterModule.cs#L32) module where I'm defining a new event and 2 variables for each counter instance. The lookups of these instances are a unique GUID followed by `_changed` or `_value`. This GUID is also saved alongside the counter settings for the module, as when the module calls `OnPostLoad` it can then go through the counter instances to recreate the dynamic elements that each requires. Since these GUIDs are saved as the lookup for the elements in the user's ChatBox file, if this last step wasn't done the ChatBox would error out because of missing data, so it's very important to be consistent with where and how you're creating dynamic elements.

## Defining elements
To define a state, event, or variable, inside `OnPostLoad` you can call their respective methods.

:::info

Define your variables before your states and events. States and events can take in default variables via their reference which is returned by `CreateVariable`.

:::

### States

```csharp
CreateState(Enum lookup, string displayName, string defaultFormat = "", IEnumerable<ClipVariableReference>? defaultVariables = null, bool defaultShowTyping = false);
CreateState(string lookup, string displayName, string defaultFormat = "", IEnumerable<ClipVariableReference>? defaultVariables = null, bool defaultShowTyping = false);
```
- lookup - The lookup of the state
- displayName - The display name of the state
- defaultFormat - The default format of the state
- defaultVariables - A list of clip variable references that can be obtained from calling `CreateVariable`
- defaultShowTyping - Whether the typing indicator should be shown by default

:::info

You can use a display name of `Default` to force VRCOSC to not show the display name. This is best used when you only need a single state.

:::

### Events

```csharp
CreateEvent(Enum lookup, string displayName, string defaultFormat = "", IEnumerable<ClipVariableReference>? defaultVariables = null, bool defaultShowTyping = false, float defaultLength = 5, ClipEventBehaviour defaultBehaviour = ClipEventBehaviour.Override);
CreateEvent(string lookup, string displayName, string defaultFormat = "", IEnumerable<ClipVariableReference>? defaultVariables = null, bool defaultShowTyping = false, float defaultLength = 5, ClipEventBehaviour defaultBehaviour = ClipEventBehaviour.Override);
```
- lookup - The lookup of the event
- displayName - The display name of the event
- defaultFormat - The default format of the event
- defaultVariables - A list of clip variable references that can be obtained from calling `CreateVariable`
- defaultShowTyping - Whether the typing indicator should be shown by default
- defaultLength - The default length that the event lasts for in seconds
- defaultBehaviour - The behaviour of how the event should be handled when it occurs. Override will override the current event. Queue will queue the event to occur after the current event if there's a current event. Ignore will ignore the event if there's a current event

### Variables

```csharp
CreateVariable<T>(Enum lookup, string displayName);
CreateVariable<T>(string lookup, string displayName);
CreateVariable<T>(Enum lookup, string displayName, Type clipVariableType);
CreateVariable<T>(string lookup, string displayName, Type clipVariableType);
```
- T - The type of variable to create
- lookup - The lookup of the variable
- displayName - The display name of the variable
- clipVariableType - A way to define a custom ClipVariable for custom variable behaviour

The list of types that are available in the SDK are:
- Bool
- Int
- Float
- String
- DateTime
- TimeSpan