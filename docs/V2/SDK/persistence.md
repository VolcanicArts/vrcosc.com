---
sidebar_position: 6
description: Using module persistence
---

# Persistence
Persistence is where you can save the values of properties of your module so that a user can have persistent data. An example use-case of this is the Counter module.

To enable persistence you define the `[ModulePersistent(string serialisedName)]` on any property. This takes in a serialised name to allow you to rename the property without it affecting the serialisation. Persistent properties can be public or private, but must have `{ get; set; }` to function correctly.

:::info

Persistence loads before `OnModuleStart` and saves after `OnModuleStop` to let you finalise the data if needed

:::

:::info

The property instance is changed when written to, meaning any references will be out of date by the time `OnModuleStart` is called. Ensure you only take references in or after your module has started.`

:::