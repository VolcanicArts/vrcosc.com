---
sidebar_position: 3
description: Understand how to connect VRCOSC to VRChat
---

# Connecting

VRCOSC can connect to VRChat in three ways depending on your setup. Choose the connection mode that matches your network configuration.

## Local {/* #local */}

**Use this if:** VRChat and VRCOSC are running on the same computer.

## LAN {/* #lan */}

**Use this if:** VRChat and VRCOSC are on different devices on the same network.

1. In VRCOSC settings, change the connection mode to `LAN`
2. Run VRCOSC as administrator
3. Start both VRCOSC and VRChat

:::info

Your computer's LAN IP is shown in VRCOSC's debug settings.

:::

:::warning

OSCQuery is disabled in LAN mode since VRChat doesn't expose it across the network.

:::

## Custom {/* #custom */}

**Use this if:** You need to send/receive data to custom endpoints or non-standard networks.

1. In VRCOSC settings, change the connection mode to `Custom`

2. Setup:
    - **Outgoing endpoint:** The IP address and port of the device receiving data (typically your VRChat machine)
    - **Incoming endpoint:** The IP address and port of the VRCOSC computer

3. Run VRCOSC as administrator

:::info

Your computer's LAN IP is shown in VRCOSC's debug settings.

:::

:::warning

OSCQuery is disabled in Custom mode.

:::