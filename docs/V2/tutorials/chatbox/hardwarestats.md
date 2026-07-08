---
sidebar_position: 5
title: Hardware Stats
description: Display your PC's hardware stats using the ChatBox animation system
---

# Simple Hardware Stats Display

This guide shows you how to display your PC's hardware statistics (CPU usage, GPU usage, RAM usage, temperatures, etc.) in your VRChat ChatBox using VRCOSC's ChatBox animation system.

## What You'll Create

When you finish this setup, the ChatBox will automatically show your PC's hardware statistics in your VRChat ChatBox, updating in real-time.

## Setup Steps

### 1. Enable the Hardware Stats Module

1. Click the **Module** tab in VRCOSC
2. Find **Hardware Stats** in the module list
3. Enable it by checking the box or toggle switch

**What this does:** The Hardware Stats module exposes states, events, and variables about your PC's hardware to the ChatBox animation system. This allows the ChatBox to display CPU, GPU, RAM usage, temperatures, and more.

### 2. Create and Configure a Clip

1. Click the **ChatBox** tab
2. On the timeline, **right-click** in an empty area
3. Select **Create Clip**
4. **Left-click** the newly created clip to select it
5. Click the **Edit** button at the top

**What's a clip?** A clip is a single message/display element in the ChatBox animation system. You can have multiple clips that show different information at different times.

### 3. Set Up the Hardware Stats State

1. In the clip editor window, click **Hardware Stats** in the left sidebar (this shows states exposed by the Hardware Stats module)
2. Find the **Hardware Stats** state
3. Enable it by checking the box

**What this does:** This binds the clip to the "Hardware Stats" state. The clip will be selected for your VRChat ChatBox and display your PC's hardware information.

### 4. Test Your Setup

1. Go to the **Run** tab
2. Click the green **Run** button
3. Make sure VRChat is running

**Expected result:** You should see your clip appear in the VRChat ChatBox showing your PC's hardware statistics.

## Troubleshooting

- **Nothing appears in VRChat:** Make sure VRCOSC is running, VRChat is open, and you pressed the Run button
- **Stats showing as 0% or N/A:** Your hardware might not be supported. Please make this known in the [Discord Server](https://vrcosc.com/discord)
- **Missing specific stats:** Some hardware sensors may not be available on all systems. Check the Hardware Stats module settings for available sensors