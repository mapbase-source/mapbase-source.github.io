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

<script src="../../../js/lightbox.js"></script>

An entity to control the shadows in the map.

---

<div class="feature_list" style="margin:0px auto;">
	<div class="feature_column"	style="width:75%;">
		{% include lightbox.html	src="assets/docs/visuals/dynamicrttshadows01a.jpg"	styleEnlarged=";width:75%;" %}
	</div>
</div>

Mapbase uses [Saul Rennison's dynamic RTT shadow angles from the VDC](https://developer.valvesoftware.com/wiki/Dynamic_RTT_shadow_angles_in_Orange_Box_branch), which means shadows draw their direction from nearby lights and don't stay in one constant direction. This feature is off by default and must be enabled through an input/keyvalue in shadow_control, an option from later Source games.

<br>

---

### KeyValues
{% include ent_kv.html	name="Enable Local Light Shadows"	desc="Enables RTT dynamic shadow angles, which cause shadows to face away from the nearest light source instead of always using this entity's direction. This is a new feature and the original Half-Life 2 had no dynamic shadow angles. Leave this off if they are not desired."	internal="enableshadowsfromlocallights"	type="choices" %}

### Inputs
{% include ent_io.html	name="SetShadowsFromLocalLightsEnabled"	desc="Toggles shadows from local lights."	type="bool" %}
