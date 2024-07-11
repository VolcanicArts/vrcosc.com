---
sidebar_position: 8
description: Module logging
---

# Runtime
Runtime describes anything you can do to a module when it's running.

## Runtime Page
This is a page that appears in the `Runtime` tab of the run page. To add a page to this you make a new page with WPF and then call `SetRuntimePage()` inside `OnModuleStart`.
It's generally recommended to have the page take in your module so that the module and page can communicate.

:::info

Making a page with WPF is outside the scope of this documentation.

:::