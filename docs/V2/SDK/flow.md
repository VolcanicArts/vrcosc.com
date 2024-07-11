---
sidebar_position: 3
description: Module flow
---

# Flow

## Loading
There are 2 essential methods for defining your settings and parameters. `OnPreLoad` and `OnPostLoad`. As the names suggest, `OnPreLoad` happens before the module loads the user's data from disk and begins the loading process to get itself ready to be run. `OnPostLoad` happens after all this.

`OnPreLoad` is where you should define all the static things for the module. E.G, creating the settings, registering the parameters, and setting up any unchanging states, events, and variables for the ChatBox

`OnPostLoad` is generally only used for setting up dynamic things for the module. E.G, creating states, events, and variables for the ChatBox that depend on settings. These must be created each time the module is loaded up, as after all this is complete the ChatBox then loads which first validates that all the data it needs is present, else it will refuse to load.

For a good example of this, you can check the Counter module's code. Since there is a setting to define the counters, `OnPostLoad` is used to create a `Changed` event and `Value` variable for each defined counter.

## Start
The `OnModuleStart` method is called whenever a user runs the modules. This can include the modules being automatically started. This is only called once on start so is the perfect place to do initial setup of anything your module may need to function, but which is dynamic at runtime. This method returns a `Task<bool>` to allow you to do an asynchronous start. Return false if your module has failed to start, true otherwise.

## Stop
The `OnModuleStop` methid is called when all modules are stopped due to VRChat closing or a user manually stopping the modules. This is only called once on stop so can be used to clear any OSC parameters on a user's avatar and reset local module settings (if they aren't already set to a default in Start). This method returns a `Task` to allow you to do an asychronous stop. This will block the user from starting the modules again until all the running modules have stopped meaning you don't have to worry about race conditions with `OnModuleStart` being called while your module is still stopping.

## Update
To allow your module to have update methods, you define the `[ModuleUpdate(ModuleUpdateMode mode, bool updateImmediately, double deltaMilliseconds)]` attribute on any method you'd like to be called at a regular interval.

The `ModuleUpdateMode` you provide gives insight into how you'd like the method to update. A value of `ChatBox` updates just before the ChatBox evaluates. `Custom` lets you set a custom time using `deltaMilliseconds`.

The `updateImmediately` field will call the method once directly after `OnModuleStart` is called when set to true, otherwise it will wait `deltaMilliseconds` before the first call.

The `deltaMilliseconds` field defines how long the time is between the update method being called is.

:::info

It's recommended to set variable values in an update method marked with `ChatBox`.

:::

## Avatar Change
The `OnAvatarChange` method will be called whenever the user changes their avatar. This can be used to send out all your module parameters again to make sure the user's avatar has the correct parameter values.

## Player Update
The `OnPlayerUpdate` method will be called whenever a built-in VRChat parameter changes. For example, if the user goes AFK and the `AFK` parameter changes this method will be called.