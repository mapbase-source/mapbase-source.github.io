---
layout: article_ent
title: math_bits
permalink: /docs/ents/math_bits/
breadcrumb: true
ent_icon: assets/entities/math_bits.png
type: PointClass
mb_version: 
game: 
---

A math_counter variant that specializes in bitwise operations.

<br>

---

### KeyValues
{% include ent_kv.html	name="Initial Value"	desc="The bits this entity should start with."	internal="startvalue"	type="integer" %}

### Inputs
{% include ent_io.html	name="Add"	desc="Adds bit(s) to this entity's value and fires the OutValue output with the result."	type="integer" %}
{% include ent_io.html	name="Subtract"	desc="Subtracts bit(s) to this entity's value and fires the OutValue output with the result."	type="integer" %}
{% include ent_io.html	name="ShiftLeft"	desc="Shifts this entity's value to the left by the specified number and fires the OutValue output with the result."	type="integer" %}
{% include ent_io.html	name="ShiftRight"	desc="Shifts this entity's value to the right by the specified number and fires the OutValue output with the result."	type="integer" %}
{% include ent_io.html	name="SetValue"	desc="Changes this entity's value and fires the OutValue output with the result."	type="integer" %}
{% include ent_io.html	name="SetValueNoFire"	desc="Changes this entity's value without firing any outputs."	type="integer" %}
{% include ent_io.html	name="GetValue"	desc="Causes this entity to fire its OnGetValue output with its current bits. Used for polling the current bits when you don't want constant updates from the OutValue output."	type="void" %}
{% include ent_io.html	name="ContainsBits"	desc="Tests whether this entity's current value contains at least one of the specified bit(s)."	type="integer" %}
{% include ent_io.html	name="ContainsAllBits"	desc="Tests whether this entity's current value contains all of the specified bit(s)."	type="integer" %}

### Outputs
{% include ent_io.html	name="OutValue"	desc="Fired when the value changes."	type="integer" %}
{% include ent_io.html	name="OnGetValue"	desc="Fired in response to the GetValue input. Used for polling the current bits when you don't want constant updates from the OutValue output."	type="integer" %}
{% include ent_io.html	name="OnTrue"	desc="Fired by ContainsBits when the current value contains the specified bit."	type="void" %}
{% include ent_io.html	name="OnFalse"	desc="Fired by ContainsBits when the current value does not contain the specified bit."	type="void" %}
