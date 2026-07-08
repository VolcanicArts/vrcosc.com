---
title: Index Gesture Extensions
description: Index Gesture Extensions module documentation
---

# Index Gesture Extensions

The Gesture Extensions module adds additional hand gestures for Valve Index controllers using finger tracking data.

## Features

* Additional custom gestures beyond VRChat's built-in gestures
* Finger tracking support for Valve Index controllers
* OSC output for avatar integration

## Gesture Detection

Gestures are detected using the finger curl values from Valve Index controllers.

Finger states are interpreted as:

* **Up**: Finger is extended
* **Down**: Finger is curled
* **Any**: Finger position is ignored

## Available Gestures

The following gestures are currently available:

| OSC Value | Gesture Name | Index | Middle | Ring | Pinky | Thumb |
| ---------- | ------------- | ----- | ------ | ---- | ----- | ----- |
| `0` | None | Any | Any | Any | Any | Any |
| `1` | Double Gun | Up | Up | Down | Down | Any |
| `2` | Middle Finger | Down | Up | Down | Down | Any |
| `3` | Pinky Finger | Down | Down | Down | Up | Any |

## Avatar Parameters

The module outputs the following OSC parameters:

| Parameter Name | Type | Description |
| -------------- | ---- | ----------- |
| `VRCOSC/VR/Gestures/Left` | int | Current gesture value of the left controller |
| `VRCOSC/VR/Gestures/Right` | int | Current gesture value of the right controller |

## Troubleshooting

### Gestures are not detecting correctly

* Ensure finger tracking is enabled and calibrated
* Verify you are using Valve Index controllers
* Restart SteamVR if finger tracking appears unresponsive

### Gesture values are not updating

* Ensure the Index Gesture Extensions module is enabled
* Verify OSC is enabled in VRChat
* Confirm your avatar contains the correct parameters