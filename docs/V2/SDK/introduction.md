---
sidebar_position: 1
---

# Introduction
This section of the documentation outlines everything there is to know about module development in V2.

### Notes
The V2 install folder, `vrcosc-v2`, will change when V2 is released to just be `vrcosc`. Keep this in mind when creating any automations for your module projects.

## Prerequisites
Below are some things that should be understood before continuing to develop a module, as they're important to understand so that user data isn't lost, and your module functions as expected each time it's imported and loads.

## VRCFury Parameters
VRCOSC will automatically handle VRCFury prefixes for registered parameters. If VRCOSC detects `VF65_MyParameter` it will treat it as if `MyParameter` has arrived. This is important to understand as if there are multiple `MyParameter`s it will trigger the same registered parameter. All this is simply a failsafe for when you're testing though, so make sure to mark your OSC parameters as global if you're using VRCFury. This can be done in a Full Controller by adding a `*` in the first isntance of a global parameter's list.

## Module Flow
There are 2 methods to keep in mind: `OnPreLoad` and `OnPostLoad`. As the names suggest, `OnPreLoad` happens before the module loads the user's data from disk and begins the loading process to get itself ready to be run. `OnPostLoad` happens after all this.

`OnPreLoad` is where you should define all the static things for the module. E.G, creating the settings, registering the parameters, and setting up any unchanging states, events, and variables for the ChatBox

`OnPostLoad` is generally only used for setting up dynamic things for the module. E.G, creating states, events, and variables for the ChatBox that depend on settings. These must be created each time the module is loaded up, as after all this is complete the ChatBox then loads which first validates that all the data it needs is present, else it will refuse to load.

For a good example of this, you can check the Counter module's code. Since there is a setting to define the counters, `OnPostLoad` is used to create a `Changed` event and `Value` variable for each defined counter.