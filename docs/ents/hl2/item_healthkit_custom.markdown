---
layout: article_ent
title: item_healthkit_custom
permalink: /docs/ents/item_healthkit_custom/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: hl2
---

Custom Health Kit

<br>

---

### KeyValues
{% include ent_kv.html	name="Model"	desc="The health kit's model."	internal="model"	type="studio" %}
{% include ent_kv.html	name="Health Amount"	desc="The amount of health this item gives."	internal="HealthAmount"	type="float" %}
{% include ent_kv.html	name="Touch Sound"	desc="The sound to make when this item is picked up and used."	internal="TouchSound"	type="sound" %}

### Inputs
{% include ent_io.html	name="SetHealthAmount"	desc="Sets the amount of health this item gives."	type="float" %}
