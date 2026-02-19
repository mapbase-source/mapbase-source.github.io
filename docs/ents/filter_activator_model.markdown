---
layout: article_ent
title: filter_activator_model
permalink: /docs/ents/filter_activator_model/
breadcrumb: true
ent_icon: assets/entities/filter_model.png
type: FilterClass
mb_version: 
game: 
---

A filter that filters by the model of the activator.

<br>

---

### KeyValues
{% include ent_kv.html	name="Filter Model"	desc="The model to filter by. If the filter mode is Allow, only entities whose model matches the given string will pass the filter. If the filter mode is Disallow, all entities EXCEPT those whose model matches the given string will pass the filter."	internal="filtermodel"	type="studio" %}
{% include ent_kv.html	name="Skin"	desc="Some models have multiple versions of their textures, called skins. Use this if you want to filter by skins as well. If you want any skin to be allowed, be sure to leave this at -1! It might automatically change when you choose a model. This keyvalue supports matchers (<, >, !=, etc.)."	internal="skin"	type="string" %}
