---
layout: article_ent
title: logic_multicompare
permalink: /docs/ents/logic_multicompare/
breadcrumb: true
ent_icon: assets/entities/logic_multicompare.png
type: PointClass
mb_version: -1
game: 
---

Compares a set of inputs to each other. If they are all the same, fires an OnEqual output. If any are different, fires the OnNotEqual output.There is currently no way to remove inputs.

<br>

---

### Inputs
{% include ent_io.html	name="InputValueNoFire"	desc="Adds a value to our set of inputs without firing CompareValues."	type="string" %}
{% include ent_io.html	name="SetReferenceValue"	desc="Sets our reference value."	type="string" %}
