---
layout: article_ent
title: func_physbox
permalink: /docs/ents/func_physbox/
breadcrumb: true
ent_icon: 
type: SolidClass
mb_version: -1
game: 
---

A brush entity that's physically simulated.

<br>

---

### Flags
{% include ent_sf.html	name="[16777216] Radius pickup (easier to pickup)"	bit="16777216" %}

### Inputs
{% include ent_io.html	name="SetDebris"	desc="Sets whether this brush is debris."	type="bool" %}

### Outputs
{% include ent_io.html	name="OnPhysGunPull"	desc="Fired when a player pulls this object with the physgun."	type="void" %}
