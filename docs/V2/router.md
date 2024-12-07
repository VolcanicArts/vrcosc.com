---
sidebar_position: 2
description: Using the router
---

# Router

:::warning

The router should mostly be useless now, but has been left in for backwards compatibility. VRCOSC, VRCFT, and OGB, are all compatible with OSCQuery.
The router should only be used when you have 2 or more non-OSCQuery apps that are receiving from VRChat.

:::

The router allows you to route apps that don't use OSCQuery through VRCOSC to stop port binding issues.

To use the router, you need to choose an new receiving/listening port for the app you'd like to route. Any number above 9001 is a good bet so start with 9002 and increment.

Leave the sending port on the app you're routing alone. All apps should still always send to port 9000.

Next, create a router instance.
The left textbox is a label, so this could be the name of the app you're routing.
The right textbox is the IP and port you're routing to, which is where VRCOSC will forward all data coming from VRChat. In this case it will always be `127.0.0.1` for the IP and whatever receiving port you chose for the app you're routing. So the final entry would be `127.0.0.1:9002`.