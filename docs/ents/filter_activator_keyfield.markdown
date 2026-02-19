---
layout: article_ent
title: filter_activator_keyfield
permalink: /docs/ents/filter_activator_keyfield/
breadcrumb: true
ent_icon: assets/entities/filter_keyfield.png
type: FilterClass
mb_version: 
game: 
---

A filter that filters by the activator's keyfields.

<br>

---

### KeyValues
{% include ent_kv.html	name="Key"	desc="The key name to filter by. Please note that certain keyvalues, particularly targetnames and base values related to clientside rendering (e.g. render mode), cannot be found by this filter."	internal="keyname"	type="string" %}
{% include ent_kv.html	name="Value (Optional)"	desc="The key value to filter by. If empty, the filter will pass if the entity just has the keyfield."	internal="value"	type="string" %}
