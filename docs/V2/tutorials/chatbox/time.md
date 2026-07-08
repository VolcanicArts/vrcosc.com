---
sidebar_position: 1
title: Time
description: Display the current date and time using the ChatBox animation system
---

# Simple Time Display

This guide shows you how to display the current date and time in your VRChat ChatBox using VRCOSC's ChatBox animation system.

## What You'll Create

When you finish this setup, the ChatBox will automatically show the current date and time in your VRChat ChatBox, updating continuously.

## Setup Steps

### 1. Enable the DateTime Module

1. Click the **Module** tab in VRCOSC
2. Find **DateTime** in the module list
3. Enable it by checking the box or toggle switch

**What this does:** The DateTime module exposes states, events, and variables about the current date and time to the ChatBox animation system. This allows the ChatBox to display time information.

### 2. Create and Configure a Clip

1. Click the **ChatBox** tab
2. On the timeline, **right-click** in an empty area
3. Select **Create Clip**
4. **Left-click** the newly created clip to select it
5. Click the **Edit** button at the top

**What's a clip?** A clip is a single message/display element in the ChatBox animation system. You can have multiple clips that show different information at different times.

### 3. Set Up the DateTime State

1. In the clip editor window, click **DateTime** in the left sidebar (this shows states exposed by the DateTime module)
2. Find the **DateTime** state
3. Enable it by checking the box

**What this does:** This binds the clip to the "DateTime" state. The clip will be selected for your VRChat ChatBox and display the current time.

### 4. Test Your Setup

1. Go to the **Run** tab
2. Click the green **Run** button
3. Make sure VRChat is running

**Expected result:** You should see your clip appear in the VRChat ChatBox showing the current date and time.

## Customization

You can customize how the date and time are displayed:

1. Go back to the **ChatBox** tab
2. Select your DateTime clip and click **Edit**
3. Click the **cog wheel** (⚙️) next to the **Now** variable
4. Change the format string to customize the display

### Common Format Changes

- **12-hour format instead of 24-hour:** Change `HH` to `hh`
- **Add AM/PM indicator:** Add `tt` to your format string
- **Date only:** Use `dd/MM/yyyy` or `MM/dd/yyyy`
- **Time only:** Use `HH:mm:ss` or `hh:mm:ss tt`

**Example formats:**
- `HH:mm:ss` → 14:30:45 (24-hour)
- `hh:mm:ss tt` → 02:30:45 PM (12-hour with AM/PM)
- `dd/MM/yyyy HH:mm` → 23/05/2026 14:30

### Advanced Formatting

For more formatting options, see [Microsoft's Custom Date and Time Format Strings documentation](https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings). Scroll down to the format table where you can use any **Format Specifier** listed.

## Troubleshooting

- **Nothing appears in VRChat:** Make sure VRCOSC is running, VRChat is open, and you pressed the Run button