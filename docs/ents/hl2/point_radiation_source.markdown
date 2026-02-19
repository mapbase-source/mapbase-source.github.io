---
layout: article_ent
title: point_radiation_source
permalink: /docs/ents/point_radiation_source/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: hl2
---

Radiation source that trips the player's geiger counter. Does no actual damage.

<br>

---

### KeyValues
{% include ent_kv.html	name="Radius"	desc="Only affects the geiger counter if the player is within this radius. 0 = no radius, use intensity only"	internal="SetRadius"	type="float" %}
{% include ent_kv.html	name="Intensity"	desc="The intensity of the radiation source. Cannot be 0."	internal="SetIntensity"	type="float" %}
{% include ent_kv.html	name="Test PVS"	desc="Tests whether the player is in this entity's PVS before attempting to update."	internal="TestPVS"	type="choices" %}

### Inputs
{% include ent_io.html	name="Enable"	desc="Enable"	type="void" %}
{% include ent_io.html	name="Disable"	desc="Disable"	type="void" %}
