---
sidebar_position: 2
description: Using the router
---

# Router

The router allows you to route apps that don't use OSCQuery through VRCOSC to stop port binding issues, or route apps from different devices into VRChat.

Apps that are on the same computer as VRChat should have their sending port left on 9000 to reduce latency.

### Creating A Router Instance
1. The left textbox is a label, so this could be the name of the app you're routing.
2. Send mode sends all data received from VRChat to the specified address. Receive mode sends all received data from the specified address to VRChat.
3. The right textbox is the IP and port you're sending to or listening on.

:::info

When you're routing apps into VRChat using receive mode you'll most likely need to set the address to the LAN IP of your computer. This can be found in the app's debug settings.

:::

:::warning

When listening for data from a different device using receive mode VRCOSC will need to be run as administrator.

:::