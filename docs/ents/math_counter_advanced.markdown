---
layout: article_ent
title: math_counter_advanced
permalink: /docs/ents/math_counter_advanced/
breadcrumb: true
ent_icon: assets/entities/math_counter_advanced.png
type: PointClass
mb_version: 
game: 
---

A special version of math_counter with the ability to perform advanced calculations. Otherwise functions identically to math_counter.

<br>

---

### KeyValues
{% include ent_kv.html	name="Preserve Value?"	desc="If set to 'Yes', calculations will fire OutValue with the resulting value, but the actual value stored in this entity will stay the same, allowing future calculations to use a constant value. If you want to change the value, you must use SetValueNoFire to set the counter's value or the PreserveValue input to toggle this feature. This also disables min/max functionality."	internal="PreserveValue"	type="choices" %}
{% include ent_kv.html	name="Always Output As Int"	desc="If set to 'Yes', the stored value (and OutValue) will always be rounded to an integer before firing."	internal="AlwaysOutputAsInt"	type="choices" %}
{% include ent_kv.html	name="Lerp Percent"	desc="The percentage used by the LerpTo input."	internal="SetLerpPercent"	type="float" %}

### Inputs
{% include ent_io.html	name="PreserveValue"	desc="Sets whether this counter's value should be preserved after calculations. 1 = Yes, 0 = No"	type="bool" %}
{% include ent_io.html	name="AlwaysOutputAsInt"	desc="Sets whether this counter's value should always output as an integer. 1 = Yes, 0 = No"	type="bool" %}
{% include ent_io.html	name="SetValueToPi"	desc="Sets the counter's value to 3.14159265358979323846 and fires the OutValue output with it."	type="void" %}
{% include ent_io.html	name="SquareRoot"	desc="Calculates the square root of the counter's current value. Fires the OutValue output with the result."	type="void" %}
{% include ent_io.html	name="Power"	desc="Raises the power of the counter's current value to this value. Fires the OutValue output with the result."	type="integer" %}
{% include ent_io.html	name="Round"	desc="Rounds the counter's current value to the specified number place. For example, rounding 256 to 100 will round it to 300 and rounding 256 to 10 will round it to 260. Use 0 to round decimals to integers. Fires the OutValue output with the result."	type="integer" %}
{% include ent_io.html	name="Floor"	desc="Floors, or rounds down, the counter's current value to the specified number place. Fires the OutValue output with the result."	type="integer" %}
{% include ent_io.html	name="Ceil"	desc="Ceils, or rounds up, the counter's current value to the specified number place. Fires the OutValue output with the result."	type="integer" %}
{% include ent_io.html	name="Trunc"	desc="Truncates, or rounds toward zero, the counter's current value to the specified number place. Fires the OutValue output with the result."	type="integer" %}
{% include ent_io.html	name="Sin"	desc="Applies sine to the counter's current value. Fires the OutValue output with the result."	type="void" %}
{% include ent_io.html	name="Cos"	desc="Applies cosine to the counter's current value. Fires the OutValue output with the result."	type="void" %}
{% include ent_io.html	name="Tan"	desc="Applies tangent to the counter's current value. Fires the OutValue output with the result."	type="void" %}
{% include ent_io.html	name="RandomInt"	desc="Generates a random integer between the specified bounds. Format = 'lowerbound upperbound', like '22 65'. Fires the OutValue output with the result."	type="string" %}
{% include ent_io.html	name="RandomFloat"	desc="Generates a random float between the specified bounds. Format = 'lowerbound upperbound', like '22.5 48.721'. Fires the OutValue output with the result."	type="string" %}
{% include ent_io.html	name="LerpTo"	desc="Lerps this counter's value to the specified value based on the lerp percent."	type="float" %}
{% include ent_io.html	name="SetLerpPercent"	desc="Sets the lerp percent."	type="float" %}
