---
sidebar_position: 1
---

# Controls

V2 contains more granular OSC global controls than V1. These allow you to control the state of the app at runtime from your avatar.

| Name | Type | Description |
| :--- | :--: | :-- |
| VRCOSC/Controls/ChatBox/Enabled | Bool | Enable/Disable sending to the ChatBox at runtime. This will always default to true when modules start running |
| VRCOSC/Controls/ChatBox/Layer/* | Bool | Enable/Disable a specific layer. Replace * with the layer ID. This will be in the range 0 to 31 |