---
layout: article_ent
title: func_tanklogic
permalink: /docs/ents/func_tanklogic/
breadcrumb: true
ent_icon: 
type: SolidClass
mb_version: 
game: hl2
---

A special kind of turret designed to fire outputs instead of bullets, functioning solely through the I/O system.

<br>

---

### KeyValues
{% include ent_kv.html	name="Shoots through water"	desc="If enabled, this func_tanklogic will be allowed to trace through water. (as opposed to just hitting the surface)"	internal="ShootsThroughWater"	type="choices" %}

### Outputs
{% include ent_io.html	name="OnFire_BarrelPos"	desc="Fires each time this func_tank would fire a bullet. Passes the barrel's current position."	type="vector" %}
{% include ent_io.html	name="OnFire_ShootPos"	desc="Fires each time this func_tank would fire a bullet. Passes the position which said bullet would hit, spread applied."	type="vector" %}
{% include ent_io.html	name="OnFire_FirstEnt"	desc="Fires each time this func_tank would fire a bullet. Passes the first entity that would be hit, if any."	type="ehandle" %}
