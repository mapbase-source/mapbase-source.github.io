---
layout: article_ent
title: trigger_teleport_relative
permalink: /docs/ents/trigger_teleport_relative/
breadcrumb: true
ent_icon: 
type: SolidClass
mb_version: 
game: 
---

A trigger volume that teleports entities that touch it to their current position relative to the given offset. Their angles stay the same, but velocity is reset. Use trigger_teleport for more complicated teleporting operations.

<br>

---

### KeyValues
{% include ent_kv.html	name="Teleport Offset"	desc="The offset."	internal="teleportoffset"	type="vector" %}
