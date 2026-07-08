---
sidebar_position: 2
description: Using the router
---

# Router

The router helps manage connections for apps that don't use OSCQuery, preventing port conflicts and enabling routing from different devices into VRChat. This is especially useful for connecting external devices or applications that need to interact with VRChat’s data.

**Tips for reducing latency:** Apps running on the same computer as VRChat should generally use port 9000 for sending data.

## Creating a Router Instance

The router configuration has two key parts: a label and an address. Here's a breakdown of each and how they work together.

1.  **Label:** This is a descriptive name for the app you're routing. Choose something that helps you easily identify the connection later.
2.  **Send Mode:** Sends data *from* VRChat *to* the address you specify. This is for when you want to send VRChat’s data to another application.
3.  **Receive Mode:** Sends data *to* VRChat *from* the address you specify. This is how you get data *into* VRChat from another application or device.
4.  **Address:** This is the IP address and port you're sending to or listening on (e.g., `192.168.1.100:9000`).  *This is where users often make mistakes.*

### Getting Your Computer's LAN IP Address (For Receive Mode)

When using **Receive Mode** to bring data *into* VRChat, you *must* use your computer's *local area network (LAN)* IP address. This is *not* your internet-facing IP address.

Here’s how to find it:

*   **Windows:** Open Command Prompt and type `ipconfig`. Look for "IPv4 Address" under your active network adapter (usually "Ethernet adapter Ethernet" or "Wireless LAN adapter Wi-Fi").
*   **macOS:** Open Terminal and type `ifconfig | grep "inet "`.  Look for the IP address after `inet`.
*   **Linux:** Open Terminal and type `ip addr show`. Look for `inet` after the network interface (e.g., `wlan0` or `eth0`).

:::info

Keep this LAN IP address handy! You'll need it when configuring other devices to send data *into* VRChat.

:::

:::warning

When using **Receive Mode** to listen for data from a different device, **VRCOSC might require administrator privileges** to function correctly. If you're having connection issues, try running VRCOSC as an administrator.

:::

## Example Use Cases

*   **Routing an app on the same computer (Send Mode):** Label: "My App", Address: `localhost:9000`, Mode: Send
*   **Receiving data from another device (Receive Mode):** Label: "Remote App", Address: `[Your Computer's LAN IP Address]:8080`, Mode: Receive (Make sure VRCOSC is running as administrator!)