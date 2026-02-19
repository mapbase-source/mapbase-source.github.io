---
layout: article_ent
title: phys_convert
permalink: /docs/ents/phys_convert/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

Turns an arbitrary entity into a physically simulated entity. i.e. brush entities will behave like func_physbox, model entities behave like prop_physics.

<br>

---

### KeyValues
{% include ent_kv.html	name="Conversion Type"	desc="How this phys_convert should convert objects."	internal="SetConversionType"	type="choices" %}

### Inputs
{% include ent_io.html	name="SetConversionType"	desc="Sets this entity's conversion type. 0 = Simple, 1 = Conventional"	type="integer" %}
