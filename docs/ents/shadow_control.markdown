---
layout: article_ent
title: shadow_control
permalink: /docs/ents/shadow_control/
breadcrumb: true
ent_icon: assets/entities/shadow_control.png
type: PointClass
mb_version: -1
game: 
---

An entity to control the shadows in the map.

<br>

---

### KeyValues
{% include ent_kv.html	name="Enable Local Light Shadows"	desc="Enables RTT dynamic shadow angles, which cause shadows to face away from the nearest light source instead of always using this entity's direction. This is a new feature and the original Half-Life 2 had no dynamic shadow angles. Leave this off if they are not desired."	internal="enableshadowsfromlocallights"	type="choices" %}

### Inputs
{% include ent_io.html	name="SetShadowsFromLocalLightsEnabled"	desc="Toggles shadows from local lights."	type="bool" %}
