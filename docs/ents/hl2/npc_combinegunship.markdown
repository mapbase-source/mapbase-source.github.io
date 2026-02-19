---
layout: article_ent
title: npc_combinegunship
permalink: /docs/ents/npc_combinegunship/
breadcrumb: true
ent_icon: 
type: NPCClass
mb_version: -1
game: hl2
---

Combine Gunship

<br>

---

### KeyValues
{% include ent_kv.html	name="Model Override"	desc="None"	internal="model"	type="studio" %}
{% include ent_kv.html	name="Health Increments"	desc="The number of times this gunship must be damaged before dying. This value is multiplied by 0.5 on Easy and 1.5 on Hard. 0 = the value stored in sk_gunship_health_increments (default 5)."	internal="HealthIncrements"	type="integer" %}
{% include ent_kv.html	name="Can use ground attack automatically"	desc="Allows this gunship to use its belly cannon automatically during combat."	internal="CanGroundAttack"	type="choices" %}

### Flags
{% include ent_sf.html	name="[8192] Use chopper model (Lost Coast chopper)"	bit="8192" %}
