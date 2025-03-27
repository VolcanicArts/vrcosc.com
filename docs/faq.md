---
sidebar_position: 2
---

# FAQ

Here you'll find common things that can fix issues you're running into when using VRCOSC and VRChat. Anything that isn't listed here or that doesn't solve your issue can be posted in the support forum channel on the [Discord Server](https://vrcosc.com/discord).

## VRCOSC {#locations-vrcosc}
Install: `%localappdata%\VRCOSC`

Logs: `%appdata%\VRCOSC\logs` (runtime.log is the main log file)

## VRChat {#locations-vrchat}
Install: `C:\Program Files (x86)\Steam\steamapps\common\VRChat`

Data: `%localappdata%Low\VRChat\VRChat`

## Connection Issues {#connection-issues}
1. Ensuring OSC is enabled through your action menu: Options -> OSC -> Enable
2. Ensuring you have added nothing to the router and the Connection Mode in the behaviour settings is set to Local
3. Turning off your VPN
4. Restarting VRCOSC
5. Restarting VRChat
6. Restarting your computer
7. Ensuring Windows hasn't assigned extra network adapters in the network settings

## Installation Issues {#installation-issues}
1. Reinstall [.NET8](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) and re-running the setup exe
2. Ensuring you're not using OneDrive as your desktop
3. Disable any third-party anti-viruses and re-running the setup exe
4. Deleting `%appdata%/VRCOSC` and re-running the setup exe
5. Deleting `%localappdata%/VRCOSC` and re-running the setup exe
6. Re-download the setup exe with Chrome
7. Run CMD as admin. Navigate to the setup exe. Run the file

## ChatBox Issues {#chatbox-issues}

### The ChatBox appears in the preview in the app but not in-game {#no-chatbox-ingame}
Make sure `Show Own ChatBox` is enabled in VRChat's settings. If that doesn't work check Connection Issues.

### My quick menu says I've been timed out for spam {#timed-out-for-spam}
This is due to your VRChat client lagging and VRChat not taking that into account between when VRCOSC sends ChatBox values. You can increase the `Send Interval` value in the behaviour settings of the app by 100-200 milliseconds to compensate for this. VRChat has a default minimum of 1500 milliseconds. If it still occurs, keep increasing the value by 100 until the timeout stops.

## Module Issues {#module-issues}

### Media is refusing to connect to Spotify {#media-spotify}
1. Ensuring you have the [Desktop](https://www.spotify.com/uk/download/windows) version and not the Windows Store version.
2. Ensuring that you have `Show desktop overlay when using media keys` enabled: ![Spotify Display Settings](/img/spotify_display_settings.png)