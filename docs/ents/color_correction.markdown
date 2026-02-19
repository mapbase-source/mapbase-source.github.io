---
layout: article_ent
title: color_correction
permalink: /docs/ents/color_correction/
breadcrumb: true
ent_icon: assets/entities/color_correction.png
type: PointClass
mb_version: -1
game: 
---

An entity to control the color correction in the map.

<br>

---

### KeyValues
{% include ent_kv.html	name="Exlusive"	desc="An exclusive color_correction entity disables and fades out all other color corrections when it is enabled. There should only be one active exclusive color_correction ent at any time."	internal="exclusive"	type="choices" %}
{% include ent_kv.html	name="Can be excluded"	desc="If enabled, allows color_correction_exclude entities to exclude this lookup."	internal="MaskEnabled"	type="choices" %}
{% include ent_kv.html	name="Invert exclusion"	desc="If enabled, this lookup will exclusively affect entities excluded from color correction. 'Can be excluded' must still be enabled."	internal="MaskInvert"	type="choices" %}

### Flags
{% include ent_sf.html	name="[1] Master (Default color correction when used with L4D fog_volume)"	bit="1" %}
{% include ent_sf.html	name="[2] Client-side simulation (Must be set when used with L4D fog_volume)"	bit="2" %}

### Inputs
{% include ent_io.html	name="SetMinFalloff"	desc="Sets the Lookup Falloff Start Distance."	type="float" %}
{% include ent_io.html	name="SetMaxFalloff"	desc="Sets the Lookup Falloff End Distance."	type="float" %}
