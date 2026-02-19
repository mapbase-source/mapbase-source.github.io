---
layout: article_ent
title: logic_compare
permalink: /docs/ents/logic_compare/
breadcrumb: true
ent_icon: assets/entities/logic_compare.png
type: PointClass
mb_version: -1
game: 
---

Compares an input value to another value. If the input value is less than the compare value, the OnLessThan output is fired with the input value. If the input value is equal to the compare value, the OnEqualTo output is fired with the input value. If the input value is greater than the compare value, the OnGreaterThan output is fired with the input value.

<br>

---

### Inputs
{% include ent_io.html	name="SetCompareValueCompare"	desc="Sets the compare value and performs the comparison."	type="string" %}

### Outputs
{% include ent_io.html	name="OnGreaterThanOrEqualTo"	desc="Fired when the input value is greater than or equal to the compare value. Sends the input value as data."	type="string" %}
{% include ent_io.html	name="OnLessThanOrEqualTo"	desc="Fired when the input value is greater than or equal to the compare value. Sends the input value as data."	type="string" %}
