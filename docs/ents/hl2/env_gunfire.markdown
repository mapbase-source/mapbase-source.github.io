---
layout: article_ent
title: env_gunfire
permalink: /docs/ents/env_gunfire/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: hl2
---

Gunfire Effect

<br>

---

### Inputs
{% include ent_io.html	name="FireBurst"	desc="Fires a burst with the specified number of shots, regardless of the entity's current state, the maximum and minimum burst numbers, or any bursts currently being executed by this entity."	type="integer" %}
{% include ent_io.html	name="SetTarget"	desc="Sets the target to shoot at."	type="target_destination" %}

### Outputs
{% include ent_io.html	name="OnFire"	desc="Fires for each bullet fired by this entity."	type="void" %}
