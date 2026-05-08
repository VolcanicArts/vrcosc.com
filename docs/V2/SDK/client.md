---
sidebar_position: 6
description: Interacting with the client
---

# Client

## General

The client API provides access to the current state of VRChat, including the local player, current avatar, active instance, logged-in user, and user camera systems.

You can access the active client instance by calling:

```csharp
GetClient()
```

This acts as the main entry point for all VRChat client-related functionality exposed by the SDK.

### Checking if VRChat is Open

```csharp
GetClient().IsOpen
```

Returns a `bool` indicating whether VRChat is currently running and available.

In most cases this will remain `true` for the lifetime of a module, but it can be useful for startup logic, reconnect handling, or modules that initialize before VRChat fully launches.

Example:

```csharp
if (!GetClient().IsOpen)
{
    return;
}
```

---

## Player

The local player can be accessed through:

```csharp
GetClient().Player
```

This exposes the current live state of the local player, including read-only avatar parameter values and player input controls.

### Reading Player Parameters

Built-in avatar parameter values are exposed directly as properties on `Player`.

Example:

```csharp
var velocityZ = GetClient().Player.VelocityZ;
```

Typical use cases include:

- Reading gesture values
- Detecting locomotion states
- Synchronizing module behaviour with avatar state

### Player Controls

The player object also exposes methods that contribute to VRChat's input systems.

Example controls include:

- Muting/unmuting the microphone
- Jumping
- Movement input

```csharp
var player = GetClient().Player;
player.Mute();
player.UnMute();
player.Jump();
player.MoveHorizontal(0.5f);
player.MoveVertical(1f);
```

Movement values are typically expected to be within the range:

```text
-1.0f to 1.0f
```

Where:

- `-1` represents full movement in one direction
- `0` represents no input
- `1` represents full movement in the opposite direction

---

## Avatar

The current avatar can be accessed through:

```csharp
GetClient().Avatar
```

This contains metadata and runtime information about the currently equipped avatar.

### Checking if an Avatar is Loaded

Before accessing the avatar object, check:

```csharp
GetClient().IsInAvatar
```

Example:

```csharp
if (GetClient().IsInAvatar)
{
    var avatar = GetClient().Avatar;
}
```

The `Avatar` property should only be accessed when `IsInAvatar` is `true`.

### Avatar Information

The avatar object exposes information such as:

- Avatar Id
- Avatar name
- Parameter definitions
- Eye height information

Example:

```csharp
var avatarName = GetClient().Avatar.Name;
```

### Avatar Parameters

The avatar contains definitions for all parameters available on the current avatar.

This can be useful for:

- Enumerating available parameters
- Building dynamic UI
- Checking parameter existence

### Eye Height

The avatar object also exposes controls and information related to VRChat's eye height system.

---

## Instance

The current VRChat instance can be accessed through:

```csharp
GetClient().Instance
```

This contains information about the currently joined world and instance.

### Checking if the user is in an Instance

Before accessing instance data, check:

```csharp
GetClient().IsInInstance
```

Example:

```csharp
if (GetClient().IsInInstance)
{
    var instance = GetClient().Instance;
}
```

The `Instance` property should only be accessed when `IsInInstance` is `true`.

### Instance Information

The instance object contains the following information:

- Instance Id
- Owner Id
- Number
- World
    - Contains world Id and name
- Type
- Region
- Access type
- Current users
- Is age gated
- Has queue

### Users

```csharp
GetClient().Instance.Users
```

Contains all currently detected users in the instance. The user list updates automatically as users join or leave the instance.

Example:

```csharp
foreach (var user in GetClient().Instance.Users)
{
    Logger.Info(user.Username);
}
```

---

## User

The currently authenticated VRChat account can be accessed through:

```csharp
GetClient().User
```

### Checking Login State

Before accessing the user object, check:

```csharp
GetClient().IsLoggedIn
```

Example:

```csharp
if (GetClient().IsLoggedIn)
{
    var user = GetClient().User;
}
```

The `User` property should only be accessed when `IsLoggedIn` is `true`.

### User Information

The user object contains information about the logged-in account.

Example:

```csharp
var username = GetClient().User.Username;
```

---

## User Camera

The user camera can be accessed through:

```csharp
GetClient().UserCamera
```

This exposes the state and controls for VRChat's user camera system.

Example:

```csharp
var isFlying = GetClient().UserCamera.IsFlying;
GetClient().UserCamera.SetAperture(90f);
```

---

## Typical Usage Pattern

A common pattern is validating availability before accessing guarded properties:

```csharp
var client = GetClient();

if (!client.IsOpen)
{
    return;
}

if (client.IsLoggedIn)
{
    Logger.Info(client.User.Username);
}

if (client.IsInAvatar)
{
    Logger.Info(client.Avatar.Name);
}

if (client.IsInInstance)
{
    Logger.Info(client.Instance.Users.Count);
}
```
