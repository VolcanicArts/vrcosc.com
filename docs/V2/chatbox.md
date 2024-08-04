---
sidebar_position: 3
description: Understand how to use the ChatBox system
---

# ChatBox

The ChatBox system is essentially an animation system for VRChat's ChatBox . It provides an extensive featureset to let you customise the way the ChatBox looks in-game from any module that has support for the ChatBox. Below is an explanation of how the different features work. Please reach out on the [Discord Server](https://discord.gg/vj4brHyvT5) if you need more help or feel this documentation could be more detailed.

:::info

On the run page in the ChatBox tab, you can popout a preview of the ChatBox so you can edit the timeline while seeing realtime changes without having to have VRChat open.

:::

## Keywords
- Timeline - The bottom half of the screen where all Clips are kept
- Layer - A single part of the Timeline. 32 layers are stacked make the Timeline
- Clip - A single part of a Layer that is linked to modules

## Management

The top left of ChatBox page contains buttons for importing and exporting a config, as well as clearing the timeline.

:::warning

Always take frequent backups of your chatbox configs if you have complicated setups!

:::

:::warning

When changing the length of the timeline to be less than it currently is, clips will shrink to fit to the new length. If the new length is less than the start time of a clip the clip will be deleted.

:::

## Controls
Right clicking any layer will give you the option to add a clip to it. Right clicking any clip will give you the option to delete it. You can resize a clip by dragging either end, and can move a clip by dragging anywhere in the middle. You can move a clip between layers by dragging from the middle of a clip into any empty space in a layer. This clip will resize if needed.

## Timings
The Timeline lasts 60 seconds by default, whereby every 60 seconds the Timeline will loop back to the start. Clips that are present on the timeline are snapped in intervals of 1 second. You can adjust the length using the control on the left side of the page.

## Clips
Clips are a way of managing the text of the ChatBox at a certain point in time, based on the evaluation of linked modules' states and events. For example, if I create a Clip on the top layer and tick the Media module, the Clip is now registered as following the states and events for the Media module.

### Built-In
With no modules linked, a Clip will have a default state that lets you write text so you don't have to link a random module anymore.

There are also some built-in variables that are always available to use:
- Custom Text - This is for writing custom text that allows you to also use the functionality of variables
- Focused Window - This is the window you're currently focused on

If you have any ideas for more built-in variables, please let me know in the [Discord Server](https://discord.gg/vj4brHyvT5)

### States and Events
Each state and event has a checkbox in the top left. This indicates whether you want to handle that state/event.

Using our example from earlier, if we only tick the `Media (Playing)` state, and leave the `Media (Paused)` state unticked, that means that for this Clip to be valid the Media module must be in the `Playing` state. If it is, the format is used and sent to the ChatBox. If the Media module is in the `Paused` state, the ChatBox is cleared as the Paused state is unticked and there are no other valid clips.

Events take priority over states. If an event occurs, even if there is a valid state, the event will display for the time set by you. The behaviour of how events prioritise between themselves is controlled by the event behaviour. Override means that if there is already an event occurring, the new event will take over. Queue means that if there is already an event occuring, the new event will wait for the current event to end. Ignore means that if there is already an event occurring, the new event will not be handled.

There are also several other settings that are present for both states and events:
- Show Typing Indicator will mean that when that state or event is active it will show the typing animation next to the ChatBox in-game.
- Use Minimal Background will use some character tricks to remove the background from the ChatBox in-game. This can make large ChatBoxes less intrusive.

### Variables
Variables are instances, which allow you to customise how the variable is formatted. To add a variable to a state or event, drag the variable you want from the right sidebar onto the `Drop Variable` area of the state or event. The way to reference a variable in the format is to use `{0}`, where the number corresponds to the 0th-based placement in the variable list. For example, if I had 2 variables and I wanted to reference the 2nd variable, I'd put `{1}` in the format.

To customise a variable instance, click on the cog button. Depending on the type of variable (bool, int, float, string, DateTime, TimeSpan), you will see different options. Some options will be available in all instances, however, as they're part of the base variable implementation. This means that there is no more ChatBox Text or Ticker Tape modules. Every variable can ticker tape. There are also specific settings for things like `DateTime` which means you can format the time however you like rather than having to do `{clock.h}:{clock.m}`

### Multi-module Clips
All Clips are allowed to have multiple modules linked to them. This is what allows for multiple modules' states and events to be handled and their variables to be put into the same Clip.

When multiple modules are linked to a Clip, states are compounded together to give you control over what to show in the Clip no matter what state any of the associated modules are in.

For example, if we tick the Media and Clock module, the only states that will occur are:
- Media (Playing) & Clock
- Media (Paused) & Clock

This is because Clock only has a single default state, so 2 * 1 = 2. This does mean that the number of states and events can grow very quickly the more modules you add, so only link the modules you need.

If any module you have ticked in the "Select Modules" is disabled on the module listing page, the states and events that contain that module will be filtered out by the `Show Relevant Elements Only` button. Unticking this will show you all the generated states and events, however it's recommended to keep this ticked as it shows you how the Clip will behave when it's running based on the enabled modules on the module listing page.

### Validation
Clips are evaluated for their validity at the Timeline's current time. The following steps are done to evaluate a clip:
- Is the Clip Enabled?
- Is the Clip covering the Timeline's current time?
- Is there currently a triggered event that is ticked **OR** are all the modules that are linked to a clip in a state that is ticked?

If a Clip is deemed invalid then the ChatBox will check the next layer down for a valid Clip. If no valid Clips are found, the ChatBox will be cleared.

This evaluation step is done based on the ChatBox Time Span setting in the settings screen. VRChat's default is every 1.5 seconds.


### Testing
Run the modules and the ChatBox system will start. In the ChatBox tab on the run page you can see a preview of the ChatBox. The preview won't respect some of the options due to technical limitations, and some of the Unicode icon sizes will be incorrect if many are used at once, but it's a good starting point if you don't want to have VRChat open. The preview is also able to be popped out into its own window so you can see it while making changes to the timeline.

The timeline's chosen clip will have a yellow border, and inside that clip the chosen state/event will also have a yellow border. This is to help with debugging which clips and which states/events are being chosen.