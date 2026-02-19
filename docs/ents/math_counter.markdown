---
layout: article_ent
title: math_counter
permalink: /docs/ents/math_counter/
breadcrumb: true
ent_icon: assets/entities/math_counter.png
type: PointClass
mb_version: -1
game: 
---

Holds a numeric value and performs arithmetic operations upon it. If either the minimum or maximum legal value is nonzero, OutValue will be clamped to the legal range, and the OnHitMin/OnHitMax outputs will be fired at the appropriate times. If both min and max are set to zero, no clamping is performed and only the OutValue output will be fired.

<br>

---

### Inputs
{% include ent_io.html	name="SetMaxValueNoFire"	desc="Set the upper bound of the counter without firing any outputs."	type="float" %}
{% include ent_io.html	name="SetMinValueNoFire"	desc="Set the lower bound of the counter without firing any outputs."	type="float" %}

### Outputs
{% include ent_io.html	name="OnChangedFromMin"	desc="Fired when the counter value changes from the minimum value."	type="void" %}
{% include ent_io.html	name="OnChangedFromMax"	desc="Fired when the counter value changes from the maximum value."	type="void" %}
