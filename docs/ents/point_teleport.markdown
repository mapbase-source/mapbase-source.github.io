---
layout: article_ent
title: point_teleport
permalink: /docs/ents/point_teleport/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

An entity that teleports a target entity to this position and angles. If 'Teleport Home' spawn flag is set, teleports the target entity to its spawn position instead.If object is physically simulated, simulation is turned off when teleported.

<br>

---

### Inputs
{% include ent_io.html	name="TeleportEntity"	desc="Teleport the output parameter box entity."	type="target_destination" %}
{% include ent_io.html	name="TeleportToCurrentPos"	desc="Teleport to the current position."	type="void" %}
