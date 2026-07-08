---
sidebar_position: 3
description: Understand how to use the ChatBox system
---

# ChatBox

The ChatBox system is an animation system for VRChat's ChatBox. It lets you control how the ChatBox looks in-game by linking multiple modules, creating clips on a timeline, and defining what text displays based on module states and events.

:::info

Pop out a live preview of the ChatBox on the **Run** page's **ChatBox** tab while editing. This lets you see real-time changes without opening VRChat.

:::

:::warning

Take frequent backups of your ChatBox configs if you have complicated setups! Changing timeline length can delete clips unexpectedly. If the new length is less than a clip's start time, that clip will be deleted.

:::

## Core Concepts

**Timeline**  
A 60-second loop (adjustable) where all animation happens. Updates evaluate every 1.5 seconds by default (VRChat's setting).

**Layers**  
32 independent stacks in the Timeline. Each layer can hold multiple clips. Higher layers take priority. If a clip is invalid on Layer 1, the system checks Layer 2, then Layer 3, etc. If no valid clips exist on any layer, the ChatBox clears.

**Clips**  
Individual segments on a layer that display text during a specific time window. Clips are linked to one or more modules and display text only when those modules meet the conditions you've defined.

**States and Events**  
- **States**: Persistent conditions (e.g., "Media is Playing"). The ChatBox shows this state's text for as long as the state is active.
- **Events**: Temporary occurrences (e.g., "Song changed"). Events display for a duration you set, then the state takes over. Events always override states.

---

## Timeline and Layers

### Managing the Timeline

The **Management** section (top left) has buttons to:
- **Import/Export**: Save and load complete ChatBox configs
- **Clear Timeline**: Wipe all clips

### Timeline Length

The default timeline is 60 seconds, looping infinitely. Adjust the length on the left side of the timeline.

:::warning

Shortening the timeline deletes any clips that no longer fit

:::

### Creating and Editing Clips

**Right-click a layer** to add a new clip.  
**Right-click a clip** to delete it.  
**Drag clip ends** to resize.  
**Drag clip middle horizontally** to move it on its layer.  
**Drag clip middle to another layer** to move it vertically between layers.

---

## Clips

All clips are snapped to 1-second intervals.

### Built-In Variables

With no modules linked, a clip has a **Default State** that lets you write custom text. Several variables are always available:

- **Custom Text** - Write custom text with variable support (see [Variables](#variables) section)
- **File Reader** - Reads and displays text from a file each update
- **Focused Window** - Shows the name of your currently focused window
- **Timer** - Displays the time difference between now and a set time

(Have ideas for more? Let us know on [Discord](https://vrcosc.com/discord).)

### States and Events

When you link a module to a clip, you can enable specific states and events:

**States**: Persistent conditions of the module. To display this clip's text, the module must be in one of the enabled states.

**Events**: Temporary triggers. When enabled, the event displays its text when triggered, overriding any active state.

**Event Behavior** controls priority:
- **Override** - New event replaces the current event
- **Queue** - New event waits for the current event to finish
- **Ignore** - New event is discarded if an event is already playing

**Additional State/Event Options**:
- **Show Typing Indicator** - Displays the typing animation next to the ChatBox in-game
- **Use Minimal Background** - Uses character tricks to minimize the ChatBox background

### Variables

Variables let you insert dynamic data into your clip's text. To add one:

1. **Drag a variable** from the right sidebar into the clip's variable area
2. **Reference it in your text** using `{0}`, `{1}`, etc., based on its position (0-indexed)

Example: `Now playing: {0}`

If you drag the Media module's "Current Track" variable into position 0, this displays "Now playing: [song title]".

**Customizing Variables**:  
Click the gear icon on any variable to customize it. Options vary by type. All variables come with default options, some types have extra.

### Multi-Module Clips

A single clip can link multiple modules. When you do:

1. **States combine** - Only the state combinations that exist across all linked modules are shown. For example, linking Media (2 states: Playing, Paused) + Clock (1 state) = 2 possible combinations, not 4.
2. **Events coexist** - All events from linked modules can trigger, controlled by their event behavior settings.

:::warning

Linking many modules to one clip creates exponential state combinations. Only link the modules you need.

:::

### Filter By Enabled Modules

If a module you've linked is **disabled** on the main module listing, tick **Filter By Enabled Modules** to hide its states/events. This shows you how the clip behaves at runtime based on your enabled modules.

### Clip Validation

Every 1.5 seconds, the timeline checks each clip for validity:

1. Is the clip enabled?
2. Does the clip cover the current timeline time?
3. **Is there an active, enabled event?** OR **Are all linked modules in enabled states?**

If no valid clips exist on any layer, the ChatBox clears.

---

## Live Text Input

When modules are running, VRCOSC controls the ChatBox. You **cannot** type in-game unless the Timeline is empty.
Instead use the **Live Text** area in the **Run** page's **ChatBox** tab to type temporary text that displays immediately.

---

## Testing and Debugging

### Live Preview

In the **Run** page's **ChatBox** tab, you'll see a real-time preview of the ChatBox:
- **Yellow border on clips** - The clip currently selected by the timeline
- **Yellow border on states/events** - The state/event currently active

Use this to debug which clips and states are being chosen without opening VRChat.

**Pop out the preview** into a separate window to edit the timeline while watching changes live.

### Limitations

The preview may not perfectly match in-game due to rendering differences. Unicode icon sizing is inaccurate with many icons at once. It's a good starting point but always test in VRChat for final results.

---

## Troubleshooting

**ChatBox is blank or not updating**
- Is at least one clip enabled and covering the current timeline time?
- Are the modules linked to that clip in a ticked state?
- Check the yellow borders in the preview. Is a clip selected?

**A clip isn't showing even though its module is active**
- Make sure the specific state/event is ticked in the clip. Just linking a module isn't enough.
- Check Filter By Enabled Modules. If the module is disabled on the module listing, its states won't appear.

**Only one clip is showing when I have multiple on different layers**
- Higher layers take priority. If Layer 1's clip is valid, Layer 2 is ignored.
- Make sure Layer 1 clips are disabled or invalid during the time you want Layer 2 to show.

---

## Backup and Import/Export

Backups are created automatically between VRCOSC versions, but you can manually export configs for extra safety:

1. Go to **ChatBox** tab's **Management** (top left)
2. Click **Export** to open your config's file location. Take a copy of this file.
3. Click **Import** to load a previously saved config

Repeat this regularly for complicated setups.