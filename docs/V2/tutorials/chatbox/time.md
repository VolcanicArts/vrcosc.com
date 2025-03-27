---
sidebar_position: 1
title: Time Display
description: Set up a simple time display
---

1. Go into the module tab and enable the DateTime module
2. Go into the ChatBox tab and add a new clip by right clicking. Select the clip by left clicking, then click the edit button at the top
3. Select `DateTime` on the left side, then enable the `DateTime` state that's appeared
4. Exit the clip edit window and go into the run tab, then press the green run button

### Customisation
If you'd like to edit the format of the date and time go back to the DateTime clip you created, edit it, and click the cog wheel next to the `Now` variable. Here you can change the format.

Common format changes include:

1. Changing from 24-hour to 12-hour format: Change the `HH` to `hh`.
2. Adding the period (AM/PM): Add `tt`.

If you'd like to see what else is possible, go [here](https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings) and scroll down to the format table.
From there you can use any `Format Specifier` you want.