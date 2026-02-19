---
layout: article_ent
title: math_clamp
permalink: /docs/ents/math_clamp/
breadcrumb: true
ent_icon: assets/entities/math_clamp.png
type: PointClass
mb_version: 
game: 
---

Clamps a value between two values. Supports integers, floats, and vectors.

<br>

---

### KeyValues
{% include ent_kv.html	name="Max"	desc="The maximum value. Can be an integer, a float, or a vector."	internal="SetMax"	type="string" %}
{% include ent_kv.html	name="Min"	desc="The minimum value. Can be an integer, a float, or a vector."	internal="SetMin"	type="string" %}

### Inputs
{% include ent_io.html	name="ClampValue"	desc="Clamps the specified value. Can be an integer, a float, or a vector."	type="string" %}
{% include ent_io.html	name="SetMax"	desc="Sets the max value. Can be an integer, a float, or a vector."	type="string" %}
{% include ent_io.html	name="SetMin"	desc="Sets the max value. Can be an integer, a float, or a vector."	type="string" %}

### Outputs
{% include ent_io.html	name="OutValue"	desc="Outputs the clamped value."	type="string" %}
{% include ent_io.html	name="OnBeforeMin"	desc="Fires when a clamped value was before the minimum value. Outputs the clamped value."	type="string" %}
{% include ent_io.html	name="OnBeyondMax"	desc="Fires when a clamped value was beyond the maximum value. Outputs the clamped value."	type="string" %}
