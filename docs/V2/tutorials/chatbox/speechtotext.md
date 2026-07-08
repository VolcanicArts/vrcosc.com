---
sidebar_position: 3
title: Speech To Text
description: Display live speech-to-text transcription using the ChatBox animation system
---

# Simple Speech To Text Display

This guide shows you how to display live speech-to-text transcription in your VRChat ChatBox using VRCOSC's ChatBox animation system.

## What You'll Create

When you finish this setup, the ChatBox will automatically transcribe your spoken words and display them in your VRChat ChatBox in real-time.

## Setup Steps

### 1. Install a Speech Model

1. Open VRCOSC's **Settings**
2. Click the **Speech** section
3. At the bottom of the page, select a speech model from the dropdown
4. Click **Install** (this may take a few minutes to download)

**What this does:** The speech model converts your voice into text. VRCOSC needs this installed before it can transcribe speech.

### 2. Enable the Speech To Text Module

1. Click the **Module** tab in VRCOSC
2. Find **Speech To Text** in the module list
3. Enable it by checking the box or toggle switch

**What this does:** The Speech To Text module exposes states, events, and variables about transcribed speech to the ChatBox animation system. This allows the ChatBox to display what you're saying.

### 3. Create and Configure a Clip

1. Click the **ChatBox** tab
2. On the timeline, **right-click** in an empty area
3. Select **Create Clip**
4. **Left-click** the newly created clip to select it
5. Click the **Edit** button at the top

**What's a clip?** A clip is a single message/display element in the ChatBox animation system. You can have multiple clips that show different information at different times.

### 4. Set Up the Speech To Text Event

1. In the clip editor window, click **Speech To Text** in the left sidebar (this shows events exposed by the Speech To Text module)
2. Find the **On Speech Result** event
3. Enable it by checking the box (make sure only this event is enabled)

**What this does:** This binds the clip to the "On Speech Result" event. The clip will be selected for your VRChat ChatBox whenever the speech model finishes transcribing what you said.

### 5. Test Your Setup

1. Go to the **Run** tab
2. Click the green **Run** button
3. Make sure VRChat is running
4. Speak into your microphone

**Expected result:** You should see your clip appear in the VRChat ChatBox showing the transcribed text of what you just said.

## Troubleshooting

- **Nothing appears in VRChat:** Make sure VRCOSC is running, VRChat is open, the speech model is installed, and your microphone is working
- **Speech not being detected:**
  1. Go to **Settings** → **Speech**
  2. Check that the correct microphone is selected from the dropdown
  3. Speak into your microphone and watch the green microphone preview bar
  4. The green bar should cross over the blue threshold line when you speak
  5. If it doesn't reach the blue line, increase the **Volume Adjustment** slider until it does
- **Transcription not accurate:** Try a different speech model in Settings → Speech, or check your microphone quality
- **No microphone input:** Check that VRCOSC has microphone permissions in your system settings