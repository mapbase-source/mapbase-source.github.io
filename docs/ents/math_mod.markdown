---
layout: article_ent
title: math_mod
permalink: /docs/ents/math_mod/
breadcrumb: true
ent_icon: assets/entities/math_mod.png
type: PointClass
mb_version: 
game: 
---

A lightweight entity that performs simple calculations on the fly without needing a complicated I/O chain. This is useful for values that are outputted on a per-frame basis and might not work with a math_counter chain.

<br>

---

### KeyValues
{% include ent_kv.html	name="Mod Value"	desc="The value that is applied to input values."	internal="startvalue"	type="string" %}
{% include ent_kv.html	name="Operator"	desc="What calculation to perform with the mod value. (input value _ mod value)"	internal="SetOperator"	type="choices" %}

### Inputs
{% include ent_io.html	name="SetMod"	desc="Sets the mod value."	type="string" %}
{% include ent_io.html	name="ModInt"	desc="Applies modification to the specified integer."	type="integer" %}
{% include ent_io.html	name="ModFloat"	desc="Applies modification to the specified float."	type="float" %}
{% include ent_io.html	name="ModVector"	desc="Applies modification to the specified vector."	type="vector" %}
{% include ent_io.html	name="SetOperator"	desc="Sets the operator. Use +, -, *, or / to choose addition, subtraction, multiplication, or division respectively."	type="string" %}

### Outputs
{% include ent_io.html	name="OutInt"	desc="Outputs the modified integer."	type="integer" %}
{% include ent_io.html	name="OutFloat"	desc="Outputs the modified float."	type="float" %}
{% include ent_io.html	name="OutVector"	desc="Outputs the modified vector."	type="vector" %}
