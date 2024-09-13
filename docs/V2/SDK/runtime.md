---
sidebar_position: 8
description: Module runtime
---

# Runtime
Runtime describes anything you can do to a module when it's running.

## Runtime View
This is a view that appears in the `Runtime` tab of the run page.
To add a view to your module you make a new `UserControl` with WPF and then call `SetRuntimeView()` inside `OnPreLoad`. This takes in your `UserControl` as a type.
Your `UserControl` *must* have a constructor that contains your Module as the only argument.

:::info

Making a UserControl with WPF is outside the scope of this documentation.

:::