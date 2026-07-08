---
sidebar_position: 4
title: Heartrate
description: Display your live heartrate using the ChatBox animation system
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Simple Heartrate Display

This guide shows you how to display your live heartrate in your VRChat ChatBox using VRCOSC's ChatBox animation system. VRCOSC supports two heartrate services: Pulsoid and HypeRate.

## What You'll Create

When you finish this setup, the ChatBox will automatically show your current heartrate in your VRChat ChatBox, updating in real-time.

## Choose Your Service

<Tabs groupId="heartrate-service">
<TabItem value="pulsoid" label="Pulsoid" default>

### 1. Enable the Pulsoid Module

1. Click the **Module** tab in VRCOSC
2. Find **Pulsoid** in the module list
3. Enable it by checking the box or toggle switch

**What this does:** The Pulsoid module exposes states, events, and variables about your heartrate to the ChatBox animation system. This allows the ChatBox to display your heartrate from Pulsoid.

### 2. Configure Your Pulsoid API Key

1. Click the **settings icon** (⚙️) next to the Pulsoid module
2. Follow the instructions to obtain a Pulsoid API key
3. Enter your API key in the setting's textbox

**What this does:** The API key connects VRCOSC to your Pulsoid account so it can receive your heartrate data.

### 3. Create and Configure a Clip

1. Click the **ChatBox** tab
2. On the timeline, **right-click** in an empty area
3. Select **Create Clip**
4. **Left-click** the newly created clip to select it
5. Click the **Edit** button at the top

**What's a clip?** A clip is a single message/display element in the ChatBox animation system. You can have multiple clips that show different information at different times.

### 4. Set Up the Pulsoid State

1. In the clip editor window, click **Pulsoid** in the left sidebar (this shows states exposed by the Pulsoid module)
2. Find the **Connected** state
3. Enable it by checking the box

**What this does:** This binds the clip to the "Connected" state. The clip will be selected for your VRChat ChatBox when VRCOSC is successfully connected to Pulsoid and receiving heartrate data.

### 5. Test Your Setup

1. Go to the **Run** tab
2. Click the green **Run** button
3. Make sure VRChat is running
4. Make sure your Pulsoid device is active and sending data

**Expected result:** You should see your clip appear in the VRChat ChatBox showing your current heartrate.

### Troubleshooting

- **Nothing appears in VRChat:** Make sure VRCOSC is running, VRChat is open, and your Pulsoid API key is correctly entered
- **Not connecting to Pulsoid:** Double-check your API key in the Pulsoid module settings
- **No heartrate data:** Make sure your Pulsoid device/app is running and actively tracking your heartrate

</TabItem>
<TabItem value="hyperate" label="HypeRate">

### 1. Enable the HypeRate Module

1. Click the **Module** tab in VRCOSC
2. Find **HypeRate** in the module list
3. Enable it by checking the box or toggle switch

**What this does:** The HypeRate module exposes states, events, and variables about your heartrate to the ChatBox animation system. This allows the ChatBox to display your heartrate from HypeRate.

### 2. Configure Your HypeRate ID

1. Click the **settings icon** (⚙️) next to the HypeRate module
2. Enter your HypeRate ID in the setting's textbox

**What this does:** The HypeRate ID connects VRCOSC to your HypeRate account so it can receive your heartrate data.

### 3. Create and Configure a Clip

1. Click the **ChatBox** tab
2. On the timeline, **right-click** in an empty area
3. Select **Create Clip**
4. **Left-click** the newly created clip to select it
5. Click the **Edit** button at the top

**What's a clip?** A clip is a single message/display element in the ChatBox animation system. You can have multiple clips that show different information at different times.

### 4. Set Up the HypeRate State

1. In the clip editor window, click **HypeRate** in the left sidebar (this shows states exposed by the HypeRate module)
2. Find the **Connected** state
3. Enable it by checking the box

**What this does:** This binds the clip to the "Connected" state. The clip will be selected for your VRChat ChatBox when VRCOSC is successfully connected to HypeRate and receiving heartrate data.

### 5. Test Your Setup

1. Go to the **Run** tab
2. Click the green **Run** button
3. Make sure VRChat is running
4. Make sure your HypeRate device is active and sending data

**Expected result:** You should see your clip appear in the VRChat ChatBox showing your current heartrate.

### Troubleshooting

- **Nothing appears in VRChat:** Make sure VRCOSC is running, VRChat is open, and your HypeRate ID is correctly entered
- **Not connecting to HypeRate:** Double-check your HypeRate ID in the HypeRate module settings
- **No heartrate data:** Make sure your HypeRate device/app is running and actively tracking your heartrate

</TabItem>
</Tabs>