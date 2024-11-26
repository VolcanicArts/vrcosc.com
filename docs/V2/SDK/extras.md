---
sidebar_position: 10
description: Extra functionality that VRCOSC handles
---

# Extras

## VRCFury Parameters
VRCOSC will automatically handle VRCFury prefixes for registered parameters. If VRCOSC detects `VF65_MyParameter` it will treat it as if `MyParameter` has arrived. This is important to understand as if there are multiple `MyParameter`s it will trigger the same registered parameter.

:::warning

This feature is a fail-safe. It's still recommended to set the parameters that VRCOSC is using to global. You can mark the parameters as global in a Full Controller by adding a `*` in the first instance of a global parameters list in the advanced settings of the Full Controller.

:::