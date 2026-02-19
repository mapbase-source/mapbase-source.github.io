---
layout: article_ent
title: concussiveblast
permalink: /docs/ents/concussiveblast/
breadcrumb: true
ent_icon: assets/entities/concussiveblast.png
type: PointClass
mb_version: 
game: hl2
---

A special, space-warping explosion that damages/dissolves entities in the specified radius. Striders use this in their warp cannons.

<br>

---

### KeyValues
{% include ent_kv.html	name="Damage"	desc="The amount of damage done by the explosion."	internal="damage"	type="float" %}
{% include ent_kv.html	name="Radius"	desc="The radius in which the explosion can damage entities."	internal="radius"	type="float" %}
{% include ent_kv.html	name="Shockwave Magnitude"	desc="Multiplier for how far the shockwave should go. Does nothing to the radius or damage. 2.5 = Strider Cannon"	internal="magnitude"	type="string" %}
{% include ent_kv.html	name="Sound"	desc="Sound to make when we explode."	internal="soundname"	type="sound" %}

### Flags
{% include ent_sf.html	name="[1] Repeatable"	bit="1" %}

### Inputs
{% include ent_io.html	name="Explode"	desc="Triggers the explosion."	type="void" %}
{% include ent_io.html	name="ExplodeWithMagnitude"	desc="Triggers the explosion with the specified magnitude."	type="float" %}
