---
sidebar_position: 6
title: Weather
description: Display current weather conditions using the ChatBox animation system
---

# Simple Weather Display

This guide shows you how to display current weather conditions for your location in your VRChat ChatBox using VRCOSC's ChatBox animation system.

## What You'll Create

When you finish this setup, the ChatBox will automatically show current weather information (temperature, conditions, humidity, etc.) for your specified location in your VRChat ChatBox, updating periodically.

## Setup Steps

### 1. Enable the Weather Module

1. Click the **Module** tab in VRCOSC
2. Find **Weather** in the module list
3. Enable it by checking the box or toggle switch

**What this does:** The Weather module exposes states, events, and variables about current weather conditions to the ChatBox animation system. This allows the ChatBox to display weather information.

### 2. Configure Your Location

1. Click the **settings icon** (⚙️) next to the Weather module
2. Enter your location (city name, zip code, or coordinates)
3. Save the settings

**What this does:** This tells the Weather module which location to fetch weather data for. The module will automatically update weather information for this location.

### 3. Create and Configure a Clip

1. Click the **ChatBox** tab
2. On the timeline, **right-click** in an empty area
3. Select **Create Clip**
4. **Left-click** the newly created clip to select it
5. Click the **Edit** button at the top

**What's a clip?** A clip is a single message/display element in the ChatBox animation system. You can have multiple clips that show different information at different times.

### 4. Set Up the Weather State

1. In the clip editor window, click **Weather** in the left sidebar (this shows states exposed by the Weather module)
2. Find the **Weather** state
3. Enable it by checking the box

**What this does:** This binds the clip to the "Weather" state. The clip will be selected for your VRChat ChatBox and display current weather conditions.

### 5. Test Your Setup

1. Go to the **Run** tab
2. Click the green **Run** button
3. Make sure VRChat is running

**Expected result:** You should see your clip appear in the VRChat ChatBox showing current weather information for your location.

## Troubleshooting

- **Nothing appears in VRChat:** Make sure VRCOSC is running, VRChat is open, your location is set in the Weather module settings, and you pressed the Run button
- **Weather data not loading:** Check that your location is entered correctly in the module settings. Try using a different format (city name instead of zip code, or vice versa)
- **Data showing as N/A or outdated:** The Weather module fetches data periodically. Wait a minute and check if it updates