---
sidebar_position: 3
---

# FAQ

Here you'll find common things that can fix issues you're running into when using VRCOSC and VRChat.

Anything that isn't listed here or that doesn't solve your issue can be posted in the support forum channel on the [Discord Server](https://discord.gg/vj4brHyvT5).

## Useful Locations

:::info

To open these locations, press `Win + R` and paste the address in.

:::

### VRCOSC {#locations-vrcosc}
Install: `%localappdata%\vrcosc`

Logs: `%appdata%\vrcosc\logs` (runtime.log is the main log file)

### VRChat {#locations-vrchat}
Install: `C:\Program Files (x86)\Steam\steamapps\common\VRChat`

Data: `%localappdata%Low\VRChat\VRChat`

## Things to try first
1) Ensuring OSC is enabled through your action menu: Options -> OSC -> Enable
2) Deleting the `OSC` folder located in VRChat's data folder
3) Restarting VRCOSC
4) Restarting VRChat
5) Turning off your VPN
6) Restarting your PC

## Specific Issues

### I've done everything above and VRChat still won't receive data {#last-resorts}
You may be experiencing the install.exe bug. Restart your computer, go to VRChat's install folder, delete `install.exe`. Sometimes this program doesn't shutdown properly which causes port 9000 to be held onto.

It's also possible Windows has assigned an extra network adapter. Go into your network settings and disable any adapters you're not using to leave just your ethernet/WiFi connection.

### VRCOSC won't install no matter what {#cant-install}
Reinstall .NET8 (https://dotnet.microsoft.com/en-us/download/dotnet/8.0).

### My ChatBox still won't show for me {#no-chatbox-for-self}
Make sure `Show Own ChatBox` is enabled in VRChat's settings.

### My quick menu says I've been timed out for spam {#timed-out-for-spam}
This is due to your VRChat client lagging and VRChat not taking that into account between when VRCOSC sends ChatBox values. You can increase the `ChatBox Time Span` value in the settings tab by 100-200 milliseconds to compensate for this. VRChat has a default minimum of 1500 milliseconds. If it still occurs, keep increasing the value by 100 until the timeout stops.

### Media is refusing to connect to Spotify {#spotify}
Ensure you have the [Desktop](https://www.spotify.com/uk/download/windows) version and not the Windows Store version.

Also ensure that you have the `Show desktop overlay when using media keys` setting enabled in Spotify:
![Spotify Display Settings](/img/spotify_display_settings.png)

If both are true, try reinstalling Spotify.

### My HardwareStats usage is different from Task Manager {#hardware-stats-values}
Task Manager rounds values. The library VRCOSC uses for gathering hardware statistics is more accurate.

### My CPU temp is stuck at 0 {#hardware-stats-cpu-temp}
VRCOSC needs to be ran as administrator to get your CPU temp.