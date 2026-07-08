---
sidebar_position: 2
title: Media
description: Display your currently playing track from Windows Media apps using the ChatBox animation system
---

# Simple Media Display

This guide shows you how to display your currently playing media (music, videos, etc.) from Windows Media applications in VRChat using VRCOSC's ChatBox animation system.

## What You'll Create

When you finish this setup, the ChatBox will automatically show information about whatever's playing in supported Windows Media apps (Spotify, Windows Media Player, etc.) in your VRChat ChatBox.

## Setup Steps

### 1. Enable the Media Module

1. Click the **Module** tab in VRCOSC
2. Find **Media** in the module list
3. Enable it by checking the box or toggle switch

**What this does:** The Media module exposes states, events, and variables about your currently playing media to the ChatBox animation system. This allows the ChatBox to react to what's playing.

### 2. Create and Configure a Clip

1. Click the **ChatBox** tab
2. On the timeline, **right-click** in an empty area
3. Select **Create Clip**
4. **Left-click** the newly created clip to select it
5. Click the **Edit** button at the top

**What's a clip?** A clip is a single message/display element in the ChatBox animation system. You can have multiple clips that show different information at different times (like song title, artist, play/pause status, etc.).

### 3. Set Up the Media State

1. In the clip editor window, click **Media** in the left sidebar (this shows states exposed by the Media module)
2. Find the **Media (Playing)** state
3. Enable it by checking the box

**What this does:** This binds the clip to the "Media (Playing)" state. The clip will be selected for your VRChat ChatBox when media is actively playing, and ignored when paused or stopped.

### 4. Test Your Setup

1. Go to the **Run** tab
2. Click the green **Run** button
3. Make sure VRChat is running
4. Start playing something in your media app (Spotify, etc.)

**Expected result:** You should see your clip appear in the VRChat ChatBox showing your currently playing track information.

## Troubleshooting

- **Nothing appears in VRChat:** Make sure VRCOSC is running, VRChat is open, and media is actually playing in a supported Windows Media app