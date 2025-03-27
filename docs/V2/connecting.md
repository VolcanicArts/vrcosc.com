---
sidebar_position: 3
description: Understand how to connect VRCOSC to VRChat
---

# Connecting

## Local {#local}
If you're running VRCOSC and VRChat on the same computer you should leave VRCOSC on default settings.

## LAN {#lan}
If you're running VRCOSC and VRChat on different devices, change the connection mode to `LAN`.

:::warning

VRCOSC must be ran as administrator to allow it to host OSCQuery on LAN.

:::

:::warning

OSCQuery (which some modules require) is disabled in this mode as VRChat doesn't host OSCQuery as LAN-accessible.

:::

:::warning

You may need to disable your firewall on the computer that VRCOSC is on to allow VRChat to find VRCOSC after both VRChat and VRCOSC have opened and VRCOSC's modules are attempting to run. This is entirely dependent on Windows and your firewall rules. Once VRChat is connected you can enable your firewall again.

:::

## Custom {#custom}
If you're wanting to send and receive data to custom endpoints, change the connection mode to `Custom`.

The outgoing endpoint should be the IP and port of the target device.

The incoming endpoint should be the IP and port of the computer VRCOSC is running on.

:::info

The computer that VRCOSC is running on's LAN IP can be found in the debug settings.

:::

:::warning

VRCOSC must be ran as administrator to allow it to host OSCQuery on custom endpoints.

:::

:::warning

OSCQuery (which some modules require) is disabled in this mode as VRChat doesn't host OSCQuery as LAN-accessible.

:::

:::warning

You may need to disable your firewall on the computer that VRCOSC is on to allow VRChat to find VRCOSC after both VRChat and VRCOSC have opened and VRCOSC's modules are attempting to run. This is entirely dependent on Windows and your firewall rules. Once VRChat is connected you can enable your firewall again.

:::