---
layout: article_ent
title: aiscripted_schedule
permalink: /docs/ents/aiscripted_schedule/
breadcrumb: true
ent_icon: assets/entities/aiscripted_schedule".png
type: PointClass
mb_version: -1
game: hl2
---

Issues a command to an NPC without taking the NPC out of its AI. This does not seize control of the NPC as a scripted_sequence does

<br>

---

### Inputs
{% include ent_io.html	name="StopSchedule"	desc="Stops the scripted schedule if it is running. This will first locate an NPC that matches the given target, then tell the NPC to stop this schedule if it is running."	type="void" %}
{% include ent_io.html	name="SetTarget"	desc="Sets the target NPC."	type="target_destination" %}
