---
layout: article_ent
title: npc_tripmine
permalink: /docs/ents/npc_tripmine/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: hl2
---

S.L.A.M. Tripmine

<br>

---

### KeyValues
{% include ent_kv.html	name="Power Up Time"	desc="How much time this tripmine takes to power up after being activated."	internal="PowerUpTime"	type="float" %}
{% include ent_kv.html	name="Damage"	desc="The amount of damage this tripmine can deal."	internal="Damage"	type="float" %}
{% include ent_kv.html	name="Damage Radius"	desc="The radius in which this tripmine can damage."	internal="DmgRadius"	type="float" %}

### Flags
{% include ent_sf.html	name="[1] Start inactive"	bit="1" %}

### Inputs
{% include ent_io.html	name="Activate"	desc="Recharge to full"	type="void" %}

### Outputs
{% include ent_io.html	name="OnExplode"	desc="Fires when this tripmine explodes."	type="void" %}
