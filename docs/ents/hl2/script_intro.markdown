---
layout: article_ent
title: script_intro
permalink: /docs/ents/script_intro/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: hl2
---

Script: Custom entity used to handle the intro sequence.

<br>

---

### KeyValues
{% include ent_kv.html	name="Draw skybox"	desc="Allows the skybox to be drawn while the script_intro is active. Drawing the skybox *might* break the VortWarp shader used by the transcending vortigaunts in EP1/EP2."	internal="DrawSky"	type="choices" %}
{% include ent_kv.html	name="Draw skybox in camera view"	desc="Allows the skybox to be drawn in the second view. Otherwise draws a solid white background."	internal="DrawSky2"	type="choices" %}
{% include ent_kv.html	name="Use camera's eye position"	desc="Uses the camera view entity's eye position instead of its origin. Intended to be used with info_player_view_proxy."	internal="UseEyePosition"	type="choices" %}

### Inputs
{% include ent_io.html	name="SetDrawSky"	desc="Sets whether the skybox should be drawn."	type="bool" %}
{% include ent_io.html	name="SetDrawSky2"	desc="Sets whether the skybox should be drawn in the second view."	type="bool" %}
