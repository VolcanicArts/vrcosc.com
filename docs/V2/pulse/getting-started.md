---
sidebar_position: 0
description: Getting started with Pulse
---

# Getting Started

Pulse is VRCOSC's in-house visual programming language that uses a node-based interface.

## What can you do with Pulse?

- Custom responses to avatar parameter changes
- Integration with external services (Twitch, PiShock, etc.)
- Audio playback
- File reading and writing
- Complex mathematics
- Regex matching
- HTTP requests
- Custom behaviour for any supported VRCOSC module

---

## Understanding the Interface {/* #interface */}

### The Graph

Your workspace in Pulse is called a **graph**. Each graph contains:
- **Nodes** - Individual building blocks that perform specific actions or calculations
- **Variables** - Storage locations for data (visible on the right-hand side)
- **Groups** - Named groups of nodes

**Saving:** Pulse automatically saves your graphs. You don't need to manually save your work.

### Creating Nodes

Right-click anywhere on the graph to open the node creation menu. Navigate through the categorized menus to find the node you need. For example:
- `Add Node -> Flow -> Fire On True`
- `Add Node -> VRChat -> Parameters -> Receive -> Parameter Source -> Parameter Source (Bool)`

---

## Core Concepts {/* #concepts */}

### Nodes {/* #nodes */}

**Nodes** are the fundamental building blocks of Pulse. Each node performs a specific function, such as:
- Exposing values as sources
- Performing calculations
- Triggering actions
- Storing or retrieving data

Nodes have **inputs** and **outputs**:
- **Value inputs/outputs** - Carry data (numbers, text, booleans, etc.)
- **Flow inputs/outputs** - Control the order of execution

### How Nodes Execute {/* #how-nodes-execute */}

Pulse uses an implicit execution model:

**Value-only nodes** (nodes without flow connections) execute implicitly when needed. When a flow or trigger node needs a value, Pulse automatically backtracks through the connected value nodes and executes them in the correct order to calculate the required input.

**Flow nodes** execute explicitly when triggered. You connect flow outputs to flow inputs to define the order of operations.

In short: **connect things the way that makes sense, and it will run the way you expect**.

### Pulse's Update Loop {/* #update-loop */}

Pulse runs at a fixed update speed of **100hz** (every 10 milliseconds). This is the maximum rate at which:
- Fire While True, Fire While False, and Fire On Interval can trigger
- Sources can update and propagate changes
- Drives can update and write the current value

### Flows {/* #flows */}

A **flow** is a chain of execution that starts from a trigger and continues through connected nodes. Think of it like a domino effect; When one node triggers, it executes the next node in the chain.

Everything you do in Pulse will start with some kind of trigger node, usually a **Fire On True** node.

### Fire Nodes {/* #fire-nodes */}

Fire nodes are trigger nodes that watch for specific conditions and create flows when those conditions are met.

#### Condition-Based Fire Nodes
These respond to changes in a boolean (true/false) condition:

- **Fire On True** - Triggers once when `Condition` changes from false to true
- **Fire On False** - Triggers once when `Condition` changes from true to false
- **Fire If True** - Triggers whenever `Condition` updates and is currently true
- **Fire If False** - Triggers whenever `Condition` updates and is currently false
- **Fire While True** - Continuously triggers at the given `Delay (ms)` interval while `Condition` remains true
- **Fire While False** - Continuously triggers at the given `Delay (ms)` interval while `Condition` remains false
- **Fire On Burst** - Triggers when `Condition` becomes true `Count` number of times within a given `Duration (ms)` timeframe

#### Other Fire Nodes

- **Fire On Interval** - Triggers repeatedly every given `Delay (ms)`
- **Fire On Change** - Triggers when `Value` updates and has changed from its previous value

#### Flow Cancellation Behaviour

Fire nodes have **cancellation behaviour** by default. This means if the fire node triggers again before the previous flow completes, it will cancel the previous flow.

**Example:** If you have Fire On True followed by a Delay of 2 seconds, but the condition becomes true again every 1 second, the delay will never complete because Fire On True cancels its previous flow each time it triggers.

This is useful when you want to track the state of a value and ensure it transitions from one state to another (e.g., from low to high to back to low).

**Note:** Some fire nodes, like API event nodes with single flow outputs, have this behaviour explicitly turned off since they aren't reactive to value inputs.

### Variables {/* #variables */}

**Variables** allow you to store information between flows. You can access variables from the right-hand side panel of your graph.

**Persistence:**
- By default, variables store data only during the current session
- Mark a variable as **persistent** to save its value between module runs or VRCOSC restarts
- Persistent variables can only store value types and lists/dictionaries containing value types

**Variable Node Types:**

Variables have several associated nodes. These are created by **right-clicking on the variable itself** in the right-hand panel:

- **Source** - Continuously output the variable's current value, updating any connected trigger nodes when the value changes
- **Reference** - Output a reference to the variable that can be used with indirect operations
- **Write** - Write a new value to the variable
- **Drive** - Continuously update the variable with a value (similar to write, but ongoing)

The **Indirect Write Variable** node can be found in the node creation menu and writes to a variable using a variable reference (useful when the target variable is determined dynamically).

### Transforms
Transforms are written as standard right-hand rotation space using intrinsic YXZ Euler rotations (Yaw → Pitch → Roll). This matches Unity.

For a mental model of the transforms relative to facing your screen:
- X+ = Right
- Y+ = Up
- Z+ = Forward (towards you out of the screen)

---

## Special Behaviours {/* #behaviours */}

Pulse includes several helpful automatic behaviours to make graph creation smoother:

### Default Values
All value inputs have default values (typically the default for that type, like `0` for numbers or `false` for booleans). You don't need to connect a constant value node if the default is what you want.

### Automatic Type Conversion
- Connecting any value output to a **string input** automatically inserts a **ToString node**
- Connecting incompatible types automatically inserts a **Cast node** if a conversion is possible
- Some type conversions don't require a cast node at all (e.g., `List<int>` to `IEnumerable<int>`, or `Controller` to `TrackedDevice`). When types extend each other, Pulse blends the two type colours from output to input without inserting a node

### Math Expression Evaluation
Typing an equation into any numeric textbox will evaluate the result. For example, typing `8*2` will result in the text becoming `16`.

### Error Handling
Errors are handled silently in Pulse for value computation. If errors are needing to be handled, the node will follow the OnSuccess/OnFail pattern.

---

## Mouse and Keyboard Shortcuts {/* #shortcuts */}

### Quick Node Creation

- **Drag from a value input + right click** - Creates a constant value output node
  - Supported types: `byte`, `sbyte`, `short`, `ushort`, `int`, `uint`, `long`, `ulong`, `float`, `double`, `decimal`, `string`, `bool`, `Enum`, `Keybind`, `DateTime`, `TimeSpan`, `Color`, and `ColorHSL`

- **Drag from a value output + right click** - Creates a display node showing the output value
  - Only works for non-flow nodes
  - For flow nodes, use a **Passthrough Display** node instead - flow nodes only have value outputs within the context of their flows, so they need to be displayed differently

- **Drag from a flow input + right click** - Creates a call node
  - Allows you to manually trigger a flow for testing

- **Drag from a flow output + right click** - Creates a flow display
  - Allows you to see when a flow reaches this node

- Use **Ctrl+C** and **Ctrl+V** for copy and pasting selections

- Use **Delete** for deleting selections

- Hold **Ctrl** when dragging a group to instead start a selection

### Navigation

- **Space** - Return to the center of the graph
- **Middle mouse button** - Pan around the graph
- **Left click drag** - Select multiple nodes
    - To select nodes within a group hold **Left Ctrl** while trying to grab a group to start a selection instead

---

## Your First Flow: Avatar Change Toggle {/* #your-first-flow */}

Let's create a simple flow that changes your avatar when you toggle a parameter to true.

![Change Avatar Example](/img/pulse/example-change-avatar.png)

### Step 1: Add a Parameter Source

Right-click and navigate to: `Add Node -> VRChat -> Parameters -> Receive -> Parameter Source -> Parameter Source (Bool)`

**Why:** This parameter source exposes the avatar parameter's value so we can connect it to trigger nodes.

### Step 2: Add a Fire On True Node

Right-click and navigate to: `Add Node -> Flow -> Fire On True`

**Why:** We only want to change avatars when the parameter becomes true, not every time it updates.

### Step 3: Connect the Parameter to the Fire On True Node

Click and drag from the **value output** of the Bool Parameter Source to the **Condition input** of the Fire On True node.

**Why:** This tells the Fire On True node to watch the parameter value and trigger when it becomes true.

### Step 4: Add a Change Avatar Node

Right-click and navigate to: `Add Node -> VRChat -> Player -> Actions -> Change Avatar`

**Why:** This is the action we want to perform when the parameter becomes true.

### Step 5: Connect the Flow

Click and drag from the **flow output** (right side) of the Fire On True node to the **flow input** (left side) of the Change Avatar node.

**Why:** This creates the execution chain; When Fire On True triggers, it will execute the Change Avatar node.

### Step 6: Add Your Avatar ID

Add your avatar Id into the `Avatar Id` field of the `Change Avatar` node's value input

**Finding Avatar IDs:** You can find avatar IDs through the VRChat website or using VRCX.

### Done!

You've created your first Pulse flow! Whenever you set your chosen avatar parameter to true, your avatar will automatically change.

---

## What's Next? {/* #whats-next */}

### Explore Presets

**Presets** are sharable subsets of graphs created by the community. You can:
- Browse existing presets to see what's possible
- Import presets to add functionality to your graphs
- Create your own presets by selecting nodes and choosing **Save As Preset** in the context menu

**Note:** When you spawn a preset that contains references to variables, Pulse will create new variable instances for that preset to use. This ensures the references never break and each preset instance works independently.

### Experiment

The best way to learn Pulse is to experiment. Try:
- Combining different Fire nodes with various actions
- Using variables to create stateful behaviours
- Exploring the different VRCOSC modules that have Pulse nodes available

### Join the Community

Check out what others have created and share your own creations in the [Discord](https://vrcosc.com/discord) server. The more you explore, the more you'll discover what's possible with Pulse!