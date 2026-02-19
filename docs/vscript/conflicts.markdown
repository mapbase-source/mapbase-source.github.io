---
layout: article
title: Conflicts with Official VScript
permalink: /docs/vscript/conflicts/
breadcrumb: true
---

{% include todo.html	txt="This needs to be updated with TF2 SDK collisions." %}

Some features from Valve's games are not available in Mapbase's implementation of VScript, although some may be available in the future.

* Some of the global functions are not yet available because many of them are game-specific and are not included in the Alien Swarm SDK.
* Some singletons are not yet available for the same reason.
* In the source code, the following `IScriptVM` functions are currently unsupported: `AddSearchPath`, `Frame`, `DumpState`, `SetOutputCallback`, `SetErrorCallback`

The following differences are intentional:

* `SetAngles` now takes a `Vector` instead of a separate pitch, yaw, and roll, similar to `SetOrigin`.
* `EntFire` can now take an optional caller at the end and `EntFireByHandle` no longer requires all parameters.
