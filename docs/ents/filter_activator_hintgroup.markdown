---
layout: article_ent
title: filter_activator_hintgroup
permalink: /docs/ents/filter_activator_hintgroup/
breadcrumb: true
ent_icon: assets/entities/filter_generic2.png
type: FilterClass
mb_version: 
game: 
---

A filter that filters by the hintgroup of the activator.

<br>

---

### KeyValues
{% include ent_kv.html	name="Filter Hintgroup"	desc="The hintgroup to filter by. If the filter mode is Allow, only entities who have the given hintgroup will pass the filter. If the filter mode is Disallow, all entities EXCEPT those who have the given hintgroup will pass the filter."	internal="filtername"	type="string" %}
{% include ent_kv.html	name="Hint Limit Nav"	desc="If set to Yes, only entities who are limiting navigation to their hintgroup will be allowed. If set to No, only entities who are *not* limiting navigation to their hintgroup will be allowed. If set to Don't Care, entities will pass regardless of the their navigational limits as long as they match the hintgroup."	internal="hintlimiting"	type="choices" %}
