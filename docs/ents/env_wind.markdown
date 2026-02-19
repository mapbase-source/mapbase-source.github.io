---
layout: article_ent
title: env_wind
permalink: /docs/ents/env_wind/
breadcrumb: true
ent_icon: assets/entities/env_wind.png
type: PointClass
mb_version: -1
game: 
---

An entity to control wind in the map.

<br>

---

### KeyValues
{% include ent_kv.html	name="Tree sway scale"	desc="The scale at which this env_wind affects $treeSway. Set to 0 to not affect $treeSway. (Only one env_wind should affect $treeSway)"	internal="treeswayscale"	type="float" %}
{% include ent_kv.html	name="Radius"	desc="The radius in which this env_wind should simulate wind. -1 = everywhere"	internal="windradius"	type="float" %}
{% include ent_kv.html	name="Inner Radius"	desc="The inner-radius for the env_wind, which enables varying intensities at certain distances. 0 = no inner radius"	internal="windradiusinner"	type="float" %}

### Inputs
{% include ent_io.html	name="SetMinWind"	desc="Sets the minimum speed of the wind while idling."	type="float" %}
{% include ent_io.html	name="SetMaxWind"	desc="Sets the maximum speed of the wind while idling."	type="float" %}
{% include ent_io.html	name="SetMinGust"	desc="Sets the minimum speed of wind gusts."	type="float" %}
{% include ent_io.html	name="SetMaxGust"	desc="Sets the maximum speed of wind gusts."	type="float" %}
{% include ent_io.html	name="SetMinGustDelay"	desc="Sets the minimum time delay between random gusts."	type="float" %}
{% include ent_io.html	name="SetMaxGustDelay"	desc="Sets the maximum time delay between random gusts."	type="float" %}
{% include ent_io.html	name="SetGustDirChange"	desc="Sets the maximum amount that the wind's direction changes due to a gust."	type="float" %}
{% include ent_io.html	name="SetGustDuration"	desc="Sets how long the wind will gust for."	type="float" %}
{% include ent_io.html	name="SetWindRadius"	desc="Sets the radius in which this env_wind should simulate wind. -1 = everywhere"	type="float" %}
{% include ent_io.html	name="SetWindRadiusInner"	desc="Sets the inner-radius for the env_wind, which enables varying intensities at certain distances. 0 = no inner radius"	type="float" %}
{% include ent_io.html	name="SetTreeSwayScale"	desc="Sets the scale at which this env_wind affects $treeSway. Set to 0 to not affect $treeSway."	type="float" %}
