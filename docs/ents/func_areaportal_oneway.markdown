---
layout: article_ent
title: func_areaportal_oneway
permalink: /docs/ents/func_areaportal_oneway/
breadcrumb: true
ent_icon: 
type: SolidClass
mb_version: 
game: 
---

An areaportal that is only open when viewed from one direction.

<br>

---

### KeyValues
{% include ent_kv.html	name="Origin"	desc="Point from which the areaportal's location is determined (they are a special case and cannot use the normal value). Read-only."	internal="origin_"	type="origin" %}
{% include ent_kv.html	name="One-way group"	desc="Optimisation: oneway portals in the same group share a single closed/open state. Use this, for example, on walls full of one-way windows."	internal="group"	type="string" %}
{% include ent_kv.html	name="Open direction"	desc="The portal will be open when the player is within 90 degrees of this direction."	internal="onewayfacing"	type="angle" %}
{% include ent_kv.html	name="Avoid latency pop"	desc="Enable this if it becomes noticeable that the portal stays closed momentarily after the player walks past it. The portal will open 80 units in advance."	internal="avoidpop"	type="choices" %}

### Inputs
{% include ent_io.html	name="DisableOneWay"	desc="Disable the one-way behaviour of the portal."	type="void" %}
{% include ent_io.html	name="EnableOneWay"	desc="Enable the one-way behaviour of the portal."	type="void" %}
{% include ent_io.html	name="ToggleOneWay"	desc="Toggle the one-way behaviour of the portal."	type="void" %}
{% include ent_io.html	name="InvertOneWay"	desc="Flip the one-way direction."	type="void" %}
