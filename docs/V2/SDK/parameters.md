---
sidebar_position: 5
description: Create and use module parameters
---

# Parameters
Parameters are the main way VRCOSC and VRChat communicate. For all intents and purposes, the parameters you register and use in a module are the avatar parameters on your avatar.

## Registering Parameters
Registered parameters are parameters that have a defined lookup (usually denoted by an Enum), so that the user can change the name of the parameter and your module still works fine as the lookup is controlled by you. Any parameter that your module is going to be using on each run should be registered, as this allows the user to customise their setup.

```csharp
RegisterParameter<bool>(MediaParameter.Play, "VRCOSC/Media/Play", ParameterMode.ReadWrite, "Play/Pause", "True for playing. False for paused");
RegisterParameter<float>(MediaParameter.Volume, "VRCOSC/Media/Volume", ParameterMode.ReadWrite, "Volume", "The volume of the process that is controlling the media");
RegisterParameter<int>(MediaParameter.Repeat, "VRCOSC/Media/Repeat", ParameterMode.ReadWrite, "Repeat", "0 - Disabled\n1 - Single\n2 - List");
```

Let's go over each of the parts of the method.

First, I'm calling `RegisterParameter<T>`, where T is the type of parameter I want. This accepts `int`, `float`, and `bool`.

For the first argument, I have an Enum named `MediaParameter`. This contains all the lookups for each of the parameters. As mentioned before, this is a nicer way of organising parameters so you don't have to worry about spelling the lookup correctly.

Next is the name of the parameter. This name is the exact name it would be on the avatar.

After that is the parameter mode. This is just used for safety to tell VRCOSC if a parameter can read from VRChat, write to VRChat, or both.

Finally, the rest of the method call is metadata, which is the display name and display description of the parameter.

There is also an optional bool at the end to mark a parameter as legacy, meaning it's still available to use but might be removed in the future, so this lets users know to change over to newer parameters else their prefabs might break.

:::info

VRChat sends out parameters using the `/avatar/parameters/` prefix but VRCOSC handles this for you.

:::

## Sending Parameters
To send a parameter, there are 2 methods you can use:

```csharp
SendParameter(MediaParameter.Play, true);
SendParameter(MediaParameter.Shuffle, false);
SendParameter(MediaParameter.Repeat, 0);
```

This uses the `MediaParameter` Enum to send to a registered parameter. Behind the scenes, VRCOSC is taking the parameter name that the user has set this registered parameter to and sending the data there, which abstracts your module from having to deal with different parameter names.

```csharp
SendParameter("MyNormalParameter", false);
```

For the above, you can send directly to a parameter using its name. This is not customisable by the user and should be used sparingly when you want to send to a parameter you know will never change name.

## Receiving Parameters
To receive a parameter, there are 2 methods to override:

```csharp
protected override void OnRegisteredParameterReceived(RegisteredParameter parameter)
{
    switch (parameter.Lookup)
    {
        case MediaParameter.Volume:
            MediaProvider.TryChangeVolume(parameter.GetValue<float>());
            break;
    }
}
```

This listens for registered parameters. Registered parameters, once again, have the benefit of being abstracted from your module, so you can listen for whenever the lookup arrives and the user can change the parameter name to whatever they need it to be. Registered parameters can give you access to the parameter value using `GetValue<T>()`, where T is the type of the parameter's value. Note: This type must match the type that it's expecting else an error will be thrown.


```csharp
protected override void OnAnyParameterReceived(ReceivedParameter parameter)
{
    switch (parameter.Name)
    {
        case "MyNormalParameter":
            Log($"MyNormalParameter's value is {parameter.GetValue<bool>()}")
            break;
    }
}
```

You can also listen for any parameter. Unregistered *and* registered parameters will call this method, and registered parameters will call this before calling `OnRegisteredParameterReceived`, so only use if it you need to. An example of a good use of this is the Counter module, as it listens for any parameter that arrives and if it finds a match for a parameter that a counter needs it can then use the parameter's data to increase the counter's value.

## Wildcards
Wildcards are available to registered parameters. When you put a `*` in a parameter, for example, `MyParameter/*`, the `*` can be changed to anything on the user's avatar.
In your module, `OnRegisteredParameterReceived` will be triggered for any parameter that matches `MyParameter/*`. You can have as many wildcards as you want in your parameter.

To check if the wildcard exists, you can call `parameter.IsWildcardType<T>(position)`, where `T` is checking if the wildcard can be changed into that type, and `position` is the position of the wildcard.

To extract the wildcard, you can call `parameter.GetWildcard<T>(position)`.

:::info

To keep consistency, wildcards only support the string, int, and float types.

:::

## Waiting
```csharp
SendParameterAndWait(MyParameters.SomeParameter, true, true)
```

`SendParameterAndWait` allows you to send a parameter, and if that parameter is present on the user's avatar, wait for the response. This is useful for when you're wanting to use the same parameter for multiple bits of data, but want to make sure that the avatar has handled the data before sending the parameter again.

Setting the third field to true, which is the block events field, will block `OnRegisteredParameterReceived` from being called with that parameter until a response has been sent from VRChat.
This is useful for when you don't want loopbacks in your parameters.

A good example of how this is used is in the [Media](https://github.com/VolcanicArts/VRCOSC-Modules/blob/main/VRCOSC.Modules/Media/MediaModule.cs#L178) module.
We don't want the initial setting of the parameters going out to loopback into the module and change the state of Windows media, so we ignore the loopback update from VRChat when sending those parameters out.

:::info

When sending parameters over OSC, VRChat will send back 2 parameter updates. This can break SendParameterAndWait depending on how it's being used.

:::

## OSCQuery
OSCQuery lets you retrieve parameter types and values, allowing you to check types and values without the parameter ever having to change in-game.

```csharp
FindParameter(MyParameters.SomeParameter);
FindParameter("SomeParameterName");
```

If the parameter doesn't exist or OSCQuery isn't working for VRChat, null will be returned.

## VRCFury

:::warning

This feature is a fail-safe and for advanced users. It's still recommended to set the parameters that VRCOSC is using to global. You can mark the parameters as global in a Full Controller by adding a `*` in the first instance of a global parameters list in the advanced settings of the Full Controller.

:::

VRCOSC will automatically handle VRCFury prefixes for registered parameters. If VRCOSC detects `VF65_MyParameter` it will treat it as if `MyParameter` has arrived. This is important to understand as if there are multiple `MyParameter`s it will trigger the same registered parameter. Sometimes this can be useful for prefabs that control modules like Media.