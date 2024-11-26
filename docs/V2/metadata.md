---
sidebar_position: 1
title: Metadata
description: Metadata parameters
---

## Metadata Parameters

| Name | Type | Description |
| :--- | :--: | :-- |
| VRCOSC/Metadata/Modules/\{moduleid\} | Bool | Whether a module is currently running |

## Control Parameters

| Name | Type | Description |
| :--- | :--: | :-- |
| VRCOSC/Controls/ChatBox/Enabled | Bool | Enable/Disable sending to the ChatBox at runtime. This will always default to true when modules start running |
| VRCOSC/Controls/ChatBox/Layer/* | Bool | Enable/Disable a specific layer. Replace * with the layer ID. This will be in the range 0 to 31 |