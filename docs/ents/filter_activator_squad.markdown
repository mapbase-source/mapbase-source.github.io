---
layout: article_ent
title: filter_activator_squad
permalink: /docs/ents/filter_activator_squad/
breadcrumb: true
ent_icon: assets/entities/filter_generic2.png
type: FilterClass
mb_version: 
game: 
---

A filter that filters by the squad of the activator.

<br>

---

### KeyValues
{% include ent_kv.html	name="Filter Squad"	desc="The squad name to filter by. If the filter mode is Allow, only entities who are in the squad of the given string will pass the filter. If the filter mode is Disallow, all entities EXCEPT those who are in the squad of the given string will pass the filter."	internal="filtername"	type="string" %}
{% include ent_kv.html	name="Allow Silent Members"	desc="Allows silent squad members to pass the filter. Silent squad members are enemy finders and vital allies in player_squad."	internal="allowsilentmembers"	type="choices" %}
