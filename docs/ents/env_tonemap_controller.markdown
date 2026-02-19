---
layout: article_ent
title: env_tonemap_controller
permalink: /docs/ents/env_tonemap_controller/
breadcrumb: true
ent_icon: assets/entities/env_tonemap_controller.png
type: PointClass
mb_version: -1
game: 
---

An entity that controls the HDR tonemapping for the player. Think of it as a method of controlling the exposure of the player's eyes.

<br>

---

### KeyValues
{% include ent_kv.html	name="Tonemap Scale"	desc="The tonemap scale. This should be a value between 0 and 2, where 0 is the eyes fully closed, 1 is use the unchanged autoexposure (default), and 2 is the eye fully wide open. -1 = use default"	internal="TonemapScale"	type="float" %}
{% include ent_kv.html	name="Tonemap Rate"	desc="The rate for auto exposure adjustment. -1 = use default"	internal="TonemapRate"	type="float" %}
{% include ent_kv.html	name="Auto Exposure Minimum"	desc="Sets a custom tonemap auto exposure minimum. -1 = use default"	internal="AutoExposureMin"	type="float" %}
{% include ent_kv.html	name="Auto Exposure Maximum"	desc="Sets a custom tonemap auto exposure maximum. -1 = use default"	internal="AutoExposureMax"	type="float" %}
{% include ent_kv.html	name="Bloom Scale"	desc="Sets a custom bloom scale. -1 = use default"	internal="BloomScale"	type="float" %}

### Flags
{% include ent_sf.html	name="[1] Master (Has priority if multiple env_tonemap_controllers exist)"	bit="1" %}

### Inputs
{% include ent_io.html	name="UseDefaultBloomScale"	desc="Reverts to using the default bloom scale."	type="void" %}
{% include ent_io.html	name="SetBloomScaleRange"	desc="Sets a range for the bloom scale. First number is the maximum, second number is the minimum."	type="string" %}
