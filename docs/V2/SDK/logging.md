---
sidebar_position: 7
description: Module logging
---

# Logging

## Terminal Logging
You can log to the terminal in the run screen by calling `Log()`. Do not log anything in here that has sensitive information just in case a user is required to take screenshots for debug purposes.

## Debug Logging
You can add debug logging to your module by calling `LogDebug()`. This will only log if debugging is on in the app's settings.