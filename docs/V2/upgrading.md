---
sidebar_position: 0
description: Upgrading from V1
---

# Upgrading From V1
All your V1 files have been placed in a backup folder, located at `%appdata%/vrcosc/backups/v1`. None of these files are compatible with V2, but are backed up as a reference for you to pull data from.

All modules have had a facelift and should make setting up more complex modules easier. For example, the Counter module now has separate windows for each counter, with more customisation options.

If you need more help upgrading from V1, join the [Discord Server](https://vrcosc.com/discord).

## Prefabs
There are new prefabs that have been redesigned and optimised for V2 modules and parameter count. Check them out [here](/docs/downloads#prefabs).

## Modules
Every module has been copied over or turned into a function of another module or put into the base implementation of the ChatBox.
Below are some common migration paths people will want to take.

### Discord
This has been removed in favour of the Keybinds module.

If you'd like to replicate the Discord module's functionality you can either use the new prefab, or:

1. Setup custom mute and deafen keybinds in Discord (as this allows them to be used without Discord being focused)
2. Add mute and deafen keybinds to the Keybinds module, and give them the `VRCOSC/Discord/Mute` and `VRCOSC/Discord/Deafen` parameters respectively, set up as `When ParameterName Bool Becomes Equal To True Then Press`

### Ticker Tape
This has been removed as every variable in the ChatBox can now ticker tape, truncate, and control its case.
If you want to ticker tape custom text, use the `Custom Text` variable.

### OpenVR/SteamVR
Both OpenVR Statistics and OpenVR Controller Statistics have been merged and optimised into SteamVR Stats.

To help modules be more abstracted from SteamVR, you can now assign roles to all your SteamVR devices in the app settings. You can figure out the device IDs from inside SteamVR.

### Exchange Rate
This has been removed with no migration.

### Timer
This has been removed as there is now a built-in ChatBox variable to handle this.

### Clock
Clock is now called DateTime and has more parameters. The `12/24` setting now controls the parameters. Adjusting 12/24 visuals for the ChatBox requires using `hh` or `HH` in the `Now` variable's formatting.

### PiShock
For the prefabs that were using wildcard parameters (`VRCOSC/PiShock/Shock/0`) but were using the global durations and intensity (`VRCOSC/PiShock/Duration`). This will not work anymore.

The global duration and intensity parameters only work the global shock, vibrate, and beep parameters now.

If you want to use the wildcard parameters for shock, vibrate, and beep, you need to use the wildcard parameters of duration and intensity.

## Persistence
Your persistence will be lost, but using a module that has persistence, like the counter module, will generate a persistence file inside your chosen profile.
You can then go into there an edit the persistence data.

## ChatBox
The ChatBox has had massive changes. You should find the timeline UI familiar but now you can now drag clips between layers.

Variables are now instanced, so you can edit their settings individually, and the textbox supports newlines.

More granularity has been given to states and events, all other logic has remained the same.

## Router
V2 uses OSCQuery, as well as every other popular 3rd party app, so the router is hidden behind advanced settings.
If you have a scenario that you think requires the router, please ask about it in the [Discord Server](https://vrcosc.com/discord). You likely don't need to use it.

## Speech
The speech detection has been moved out of the modules and into the app's settings. To set it up choose a model in the app's speech settings and leave everything else as default.

You should find that the new speech detection is a lot more accurate, has punctuation, and is faster than before. This is because the engine has changed from VOSK to Whisper.

If you find that speech detection is spotty, or sometimes wrong, increase the `Volume Adjustment` or decrease the `Activation Threshold`.