---
sidebar_position: 4
---

# Parameters
In VRCOSC there are 2 types of parameters, registered and unregistered.

## Registering Parameters
Registered parameters are parameters that have a defined lookup (usually denoted by an Enum), so that the user can change the name of the parameter and your module still works fine as the lookup is controlled by you. Any parameter that your module is going to be using on each run should be registered, as this allows the user to customise their setup.

As mentioned above, `OnPreLoad` is where parameters should be registered. I'm going to use an example from the Media module to demonstrate what this looks like.

```c#
RegisterParameter<bool>(MediaParameter.Play, "VRCOSC/Media/Play", ParameterMode.ReadWrite, "Play/Pause", "True for playing. False for paused");
RegisterParameter<float>(MediaParameter.Volume, "VRCOSC/Media/Volume", ParameterMode.ReadWrite, "Volume", "The volume of the process that is controlling the media");
RegisterParameter<int>(MediaParameter.Repeat, "VRCOSC/Media/Repeat", ParameterMode.ReadWrite, "Repeat", "0 - Disabled\n1 - Single\n2 - List");
RegisterParameter<bool>(MediaParameter.Shuffle, "VRCOSC/Media/Shuffle", ParameterMode.ReadWrite, "Shuffle", "True for enabled. False for disabled");
RegisterParameter<bool>(MediaParameter.Next, "VRCOSC/Media/Next", ParameterMode.Read, "Next", "Becoming true causes the next track to play");
RegisterParameter<bool>(MediaParameter.Previous, "VRCOSC/Media/Previous", ParameterMode.Read, "Previous", "Becoming true causes the previous track to play");
RegisterParameter<bool>(MediaParameter.Seeking, "VRCOSC/Media/Seeking", ParameterMode.Read, "Seeking", "Whether the user is currently seeking");
RegisterParameter<float>(MediaParameter.Position, "VRCOSC/Media/Position", ParameterMode.ReadWrite, "Position", "The position of the song as a percentage");
```

Let's go over each of the parts of the method.

First, I'm calling `RegisterParameter<T>`, where T is the type of parameter I want. This accepts `int`, `float`, and `bool`.

For the first argument, I have an Enum named `MediaParameter`. This contains all the lookups for each of the parameters. As mentioned before, this is a nicer way of organising parameters so you don't have to worry about spelling the lookup correctly.

Next is the name of the parameter. This name is the exact name it would be on the avatar (Note: VRChat sends out parameters using the `/avatar/parameters/` prefix but VRCOSC handles this for you).

After that is the parameter mode. This is just used for safety to tell VRCOSC if a parameter can read from VRChat, write to VRChat, or both.

Finally, the rest of the method call is metadata, which is the display name and display description of the parameter.

There is also an optional bool at the end to mark a parameter as legacy, meaning it's still available to use but might be removed in the future, so this lets users know to change over to newer parameters else their prefabs might break.
Note: This may be superceeded by a feature in the works called parameter sets. Keep an eye on V2 updates and the docs for news.

## Sending Parameters
To send a parameter, there are 2 methods you can use:

```c#
SendParameter(MediaParameter.Play, true);
SendParameter(MediaParameter.Shuffle, false);
SendParameter(MediaParameter.Repeat, 0);
```

This uses the `MediaParameter` Enum to send to a registered parameter. Behind the scenes, VRCOSC is taking the parameter name that the user has set this registered parameter to and sending the data there, which abstracts your module from having to deal with different parameter names.

```c#
SendParameter("MyNormalParameter", false);
```

For the above, you can send directly to a parameter using its name. This is not customisable by the user and should be used spareingly when you want to drive a parameter you know will never change.

## Receiving Parameters
To receive a parameter, there are 2 methods to override:

```c#
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

This listens for registered parameters. Registered parameters, once again, have the benefit of being abstracted from your module, so you can listen for whenever the lookup arrives and the user can change the parameter name to whatever they need it to be. Registered parameters can give you access to the parameter value using `GetValue<T>()`, where T is the type of the parameter's value. Note: This type must match the type that it's expecting else an error will be thrown. Registered parameters also have access to a function called wildcards, which will be spoken about in a different advanced section.


```c#
protected override void OnAnyParameterReceived(ReceivedParameter parameter)
{
    if (parameter.Name == "MyNormalParameter")
    {
        Console.WriteLine($"MyNormalParameter's value is {parameter.GetValue<bool>()}`)
    }
}
```

You can also listen for any parameter. Unregistered *and* registered parameters will call this method, and registered parameters will call this before calling `OnRegisteredParameterReceived`, so only use if it you need to. An example of a good use of this is the Counter module, as it listens for any parameter that arrives and if it finds a match for a parameter that a counter needs it can then use the parameter's data to increase the counter's value.

## OSCQuery
OSCQuery lets you retrieve parameter types and values, allowing you to check types and values without the parameter ever having to change in game.

```c#
FindParameterType(MyParameters.SomeParameter);
FindParameterValue(MyParameters.SomeParameter);
```
Finding a parameter by using the methods with lookups will attempt to find the type or value using the parameter name that the user may have edited.

```c#
FindParameterType("SomeParameterName");
FindParameterValue("SomeParameterName");
```
Finding a parameter by using the methods with strings will attempt to find the type or value using the parameter name that's been passed.

If the parameter doesn't exist or OSCQuery isn't working for VRChat, null will be returned.