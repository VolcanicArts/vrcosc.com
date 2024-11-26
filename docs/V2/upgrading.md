---
sidebar_position: 0
description: Upgrading from V1
---

# Upgrading From V1
When V2 is released, V1 will automatically update. All your V1 files will be placed in a backup folder, and first time setup will run for V2.

None of your V1 files are compatible with V2 due to major architecture changes. However this is a good thing as learning how the new systems work is preferable.

All modules have had a facelift and should make setting up more complex modules easier. For example, the Counter module now has separate windows for each counter, with more customisation options.

## Modules
Every module has been copied over or turned into a function of another module or put into the base implementation of the ChatBox.
Below are some common migration paths people will want to take.

### Discord
This has been removed in favour of the Keybinds module. If you'd like to replicate the Discord module's functionality:

- Setup custom mute and deafen keybinds in Discord (as this allows them to be used without Discord being focused)
- Add mute and deafen keybinds to the Keybinds module, and give them the `VRCOSC/Discord/Mute` and `VRCOSC/Discord/Deafen` respectively

Your buttons on your radial menu should now work. Changing the keybinds mode allows you to hold keybinds down when the parameters are true, rather than pressing and releasing the keys, so play around with them to create custom radios!

### Ticker Tape
This has been removed as every variable in the ChatBox can now ticker tape, truncate, and control its case.
If you want to ticker tape custom text, use the `Custom Text` variable.

### OpenVR
Both OpenVR Statistics and OpenVR Controller Statistics have been merged and optimised into SteamVR Stats.

### Exchange Rate
This has been removed with no migration.

### Timer
This has been removed as there is now a built-in ChatBox variable to handle this

### Clock
Clock is now called DateTime and has more parameters. The `12/24` setting now controls the parameters. Adjusting 12/24 visuals for the ChatBox requires using `hh` or `HH` in the `Now` variable's formatting.

## Persistence
Your persistence will be lost, but using a module that has persistence in V2 (like the counter module) will generate a persistence file inside your chosen profile.
You can then go into there an edit the persistence data.

## ChatBox
The ChatBox has had massive changes, but you should find the timeline UI familiar, but now you can now drag clips between layers.

Variables are now instanced, so you can edit their settings individually, and the textbox supports newlines.

More granularity has been given to states and events, all other logic has remained the same.

## Router
At no point should you need to use the router. V2 uses OSCQuery, as well as every other popular 3rd party app, so the router is hidden behind advanced settings.
If you have a scenario that you think requires the router

## Speech
The speech detection has been moved out of the modules and into the app's settings. To set it up, click the `Auto Install Model` button and leave everything else as default.

You should find that the new speech detection is a lot more accurate, has punctuation, and is faster than before. This is because the engine has changed from VOSK to Whisper.

If you find that speech detection is spotty, or sometimes wrong, increase the `Microphone Volume Adjustment`, or decrease the `Noise Level Cutoff`.

## SteamVR
To help modules be more abstracted from SteamVR, you can now assign roles to all your SteamVR devices in the app settings. You can figure out the device IDs from inside SteamVR.