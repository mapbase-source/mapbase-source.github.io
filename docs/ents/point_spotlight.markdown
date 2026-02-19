---
layout: article_ent
title: point_spotlight
permalink: /docs/ents/point_spotlight/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

An entity to draw a spotlight. Will draw a beam when the player views it side on, and a halo when it's facing towards the player. Unless the 'No Dynamic Light' spawnflag is checked, it will also create a dynamic light wherever the end of the spotlight rests.

<br>

---

### KeyValues
{% include ent_kv.html	name="Ignore Solid"	desc="If set, this spotlight won't trace for solids."	internal="IgnoreSolid"	type="choices" %}
{% include ent_kv.html	name="Halo size scale."	desc="float value to determine the size of the halo."	internal="HaloScale"	type="float" %}
{% include ent_kv.html	name="Halo material"	desc="Material to use for the halo."	internal="HaloMaterial"	type="sprite" %}
{% include ent_kv.html	name="Spotlight beam material"	desc="Material to use for the spotlight's beam."	internal="SpotlightMaterial"	type="sprite" %}

### Inputs
{% include ent_io.html	name="LightToggle"	desc="Toggles the spotlight on or off"	type="void" %}
