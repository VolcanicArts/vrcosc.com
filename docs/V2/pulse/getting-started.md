---
sidebar_position: 0
description: Getting started with Pulse
---

# Getting Started
Pulse is VRCOSC's custom node-based programming language. It allows you to do custom behaviour for any of the supported modules, or a variety of things including, but not limited to, playing audio, reading/writing files, and complex maths.

### Graphs
Pulse is made up of graphs. Each graph contains nodes and variables.

Graphs can be moved around using the middle mouse button.

Selections can be made by left click dragging over nodes.

### Presets
Presets are subsets of graphs designed for sharing. A preset can be made by selecting multiple nodes and selecting Save As Preset in the context menu

### Flows
Everything you do in Pulse will be made up of some combination of event or Fire node. Fire nodes take in conditions and then fire when that condition is met.

- Fire On True - Fires when the condition updates and becomes true.
- Fire On False - Fires when the condition updates and becomes false.
- Fire If True - Fires when the condition updates and is true.
- Fire If False - Fires when the condition updates and is false.
- Fire While True - Fires while the condition is true, at the delay given in milliseconds.
- Fire While False - Fires while the condition is false, at the delay given in milliseconds.
- Fire On Interval - Fires at the delay given in milliseconds.
- Fire On Change - Fires when the input updates and has changed.

Whenever a fire node triggers, it creates a flow. This flow can then be connected to other flow nodes to trigger them in an order.

Nodes that don't have flow inputs or outputs are processed explicitly, where if a flow node is triggered it will then backtrack the inputs it needs to calculate the input values.

In short, connect things the way that makes sense, and it will run the way you expect.

### Special Behaviour
- All value inputs have default values, most of the time that is the default value of the type. If you have inputs that need the default value you don't need to add a default constant value output node.
- Connecting any value output to a string value input will automatically insert a ToString node.
- Connecting any value output to any value input, if a cast is possible, will insert a Cast node.
- Fire While True, Fire While False, and Fire On Interval can only run as fast as the update speed of Pulse, which is 100hz.
- Typing in an equation to any number-accepting textbox will have the textbox evaluate the result. For example `8*2` will result in the text being `16`.

### Controls
Here are the mouse and keyboard shortcuts for Pulse:

- Left click dragging on a value input, and while still holding left click, right clicking, will create a constant value output of the input type if possible.
    - Most of the time this will be a textbox for entering text, or numbers, but there are specialised inputs too.
    - The types that are currently supported for inputs are string, any number, bool, and Keybind.
- Left click dragging on a value output, and while still holding left click, right clicking, will create a display node that displays the value of the value output.
    - Note that this only works for nodes that are connected without a flow. If you want to see the value outputs of a flow node you need to insert a Passthrough Display node instead.
- Left click dragging on a flow input, and while still holding left click, right clicking, will create a call node.
    - This allows you to manually execute a flow for testing.
- Pressing space will take you back to the center of the graph.

### Variables
Variables allow you to store information between flows, and optionally store the information between module runs or VRCOSC restarts.

Variables have source, reference, write, drive nodes associated with them. Nodes are available for indirect drive and indirect write using the reference node instead.

### Making Your First Flow
To start out with Pulse, let's learn how to create a toggle that will change your avatar.

![Change Avatar Example](/img/pulse/example-change-avatar.png)

1. Add in a Bool Parameter Source node: `Create Node -> Parameters -> Receive -> Parameter Source -> Parameter Source (Bool)`.

This parameter source now outputs the value of the parameter on your avatar.

2. Add in a Fire On True node: `Create Node -> Flow -> Fire On True`.

Fire On True, as explained above, fires when the condition becomes true.

3. Connect the Bool Parameter Source's value output to the condition of the Fire On True.

Connecting these values together now means that the Fire On True will create a flow whenever the parameter becomes true.

4. Add in a Change Avatar node: `Create Node -> VRChat -> Player -> Actions -> Change Avatar`.

This node takes in the avatar ID that you want to change into, and a flow input for connecting to a flow producing, or flow continuing, node.

5. Connect the flow output of the Fire On True node to the flow input of the Change Avatar node.

This now means that whenever the Fire On True node produces a flow, it will then execute the Change Avatar node.

6. Left click drag from the value input of the Change Avatar node, and while still holding left click, right click.

This creates a value input of type string, allowing you to have a constant value output.

7. Enter any avatar ID into the textbox.

And you're done! You've now made a flow that changes your avatar whenever you set a parameter to true.

This is a very simple example designed to explain the basics of Pulse, but there's a lot more you can do. Make sure to check out the presets the community has created, or experiment and create your own!