---
sidebar_position: 6
description: Interface with global events
---

# Handlers

## Speech Handler
VRCOSC's speech engine is global, meaning you can implement `ISpeechHandler` and speech recognition will be handled entirely by the app.

2 methods are exposed, `OnPartialSpeechResult` and `OnFinalSpeechResult`. Both provide the text of what the user has said.

`OnPartialSpeechResult` occurs every 1.5 seconds while the user is still talking.

`OnFinalSpeechResult` occurs when the user has stopped talking and a final, more accurate, recognition is done.

## Client Events Handler
VRCOSC scans VRChat's logs for certain events, meaning you can implement `IVRCClientEventHandler`.

`OnInstanceLeft` occurs when the user leaves their current instance.

`OnInstanceJoin` occurs when the user finishes joining the new instance.

`OnUserLeft` occurs when a remote user leaves the current instance.

`OnUserJoined` occurs when a remote user joins the current instance.