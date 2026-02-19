---
layout: article_ent
title: npc_zombine
permalink: /docs/ents/npc_zombine/
breadcrumb: true
ent_icon: 
type: NPCClass
mb_version: -1
game: hl2
---

Combine Soldier Zombie

<br>

---

### KeyValues
{% include ent_kv.html	name="Model"	desc="None"	internal="model"	type="studio" %}
{% include ent_kv.html	name="Number of Grenades"	desc="The number of grenades this zombine can pull out."	internal="NumGrenades"	type="choices" %}

### Outputs
{% include ent_io.html	name="OnPullGrenade"	desc="Fires when the zombine pulls a grenade. Passes the grenade."	type="ehandle" %}
