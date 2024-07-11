---
sidebar_position: 2
---

# FAQ

Here you'll find common things that can fix issues you're running into when using VRCOSC and VRChat.

Anything that isn't listed here or that doesn't solve your issue can be posted in the support forum channel on the [Discord Server](https://discord.gg/vj4brHyvT5).

## Useful Locations

These can be pasted into file explorer.

### VRCOSC
Logs: `%appdata%\VRCOSC\logs`

Install: `%localappdata%\VRCOSC`

### VRChat
Common Install: `C:\Program Files (x86)\Steam\steamapps\common\VRChat`

Data: `%appdata%\..\LocalLow\VRChat\VRChat`

## Things to try first
1) Ensuring that OSC is enabled through your action menu: Options -> OSC -> Enable
2) Ensuring that your OSC config has been reset: Options -> OSC -> Reset Config
3) Deleting the `OSC` folder located in here: `%appdata%\..\LocalLow\VRChat\VRChat`
4) Changing worlds
5) Restarting VRCOSC
6) Restarting VRChat
7) If you use a VPN, ensuring it is disabled
8) Restarting your PC

## Specific Issues

### I've done everything above and VRChat still won't receive data {#network-adapter}
It's possible Windows has assigned an extra network adapter. Go into your network settings and disable any adapters you're not using to leave just your ethernet/wifi connection

### Parameters are being received by VRChat in the OSC debug menu, but won't update on my avatar {#received-but-no-update}
Go to VRChat's [data](https://github.com/VolcanicArts/VRCOSC/wiki/FAQ/#vrchat) and delete the `OSC` folder, then disable and enable OSC. This will force VRChat to regenerate the OSC config for your avatar.

### My quick menu says I've been timed out for spam {#timed-out-for-spam}
This is due to your VRChat client lagging and VRChat not taking that into account between when VRCOSC sends ChatBox values. You can increase the `ChatBox Time Span` value in the settings tab by 100-200 milliseconds to compensate for this. VRChat has a default minimum of 1500 milliseconds. If it still occurs, keep increasing the value.

:::info

If this timeout is only happening for you during loading in or out of worlds that's normal behaviour, since VRChat will commonly lag during those times

:::

### Media is refusing to connect to Spotify {#spotify}
Ensure you have the [Desktop](https://www.spotify.com/uk/download/windows) version and not the Windows Store version.

Also ensure that you have the following setting enabled:
![image](https://user-images.githubusercontent.com/29819296/211019070-d74e70c6-55d2-4000-ad9f-34f4054c4108.png)

If both are true, try reinstalling Spotify.

### My HardwareStats usage is different from Task Manager {#hardware-stats-values}
Task Manager rounds values. The library VRCOSC uses for gathering hardware statistics is more accurate.

### My CPU temp is stuck at 0 {#hardware-stats-cpu-temp}
VRCOSC needs to be ran as administrator to get your CPU temp.