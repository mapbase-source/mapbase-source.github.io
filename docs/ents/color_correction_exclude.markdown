---
layout: article_ent
title: color_correction_exclude
permalink: /docs/ents/color_correction_exclude/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

Excludes certain entities from color correction.

<br>

---

### KeyValues
{% include ent_kv.html	name="Target"	desc="The target to exclude from color correction. Applicable color correction entities must have 'Can be excluded' enabled."	internal="target"	type="target_destination" %}
{% include ent_kv.html	name="Exclude Color"	desc="Can be used to exclude a specific color in the lookup table. <r> <g> <b> <a> 0-255"	internal="ExcludeColor"	type="color255" %}

### Inputs
{% include ent_io.html	name="SetExcludeColor"	desc="<r> <g> <b> <a> 0-255"	type="color255" %}
{% include ent_io.html	name="Toggle"	desc="Toggles this entity."	type="void" %}
{% include ent_io.html	name="SetMinFalloff"	desc="Sets the Lookup Falloff Start Distance."	type="float" %}
{% include ent_io.html	name="SetMaxFalloff"	desc="Sets the Lookup Falloff End Distance."	type="float" %}
