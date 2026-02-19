---
layout: article_ent
title: logic_case
permalink: /docs/ents/logic_case/
breadcrumb: true
ent_icon: assets/entities/logic_case.png
type: PointClass
mb_version: -1
game: 
---

Compares an input to up to 16 preset values. If the input value is the same as any of the preset values, an output corresponding to that value is fired.

For example: if Case01 is set to 2 and Case02 is set to 5, and the input value is 5, the OnCase02 output will be fired.

This entity can also be used to select from a number of random targets via the PickRandom input. One of the OnCase outputs that is connected to another entity will be picked at random and fired.

<br>

---

### KeyValues
{% include ent_kv.html	name="Multiple case hits allowed"	desc="If an input value matches a given case, are we allowed to test the rest of the cases or should we stop there? Don't worry about this if you're only using this entity for PickRandom."	internal="MultipleCasesAllowed"	type="choices" %}

### Outputs
{% include ent_io.html	name="OnUsed"	desc="Fired when an input value is received, regardless of whether it matches a case. Passes the input value."	type="string" %}
