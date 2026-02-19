---
layout: article_ent
title: npc_sniper
permalink: /docs/ents/npc_sniper/
breadcrumb: true
ent_icon: 
type: NPCClass
mb_version: -1
game: hl2
---

Sniper

<br>

---

### KeyValues
{% include ent_kv.html	name="Model"	desc="The model of this sniper. Can be seen when the sniper dies."	internal="model"	type="studio" %}
{% include ent_kv.html	name="Beam Texture"	desc="The texture that should be used by the sniper's laser beam. Be sure to put '.vmt' at the end!"	internal="BeamName"	type="material" %}
{% include ent_kv.html	name="Beam Color"	desc="The color that should be used by the sniper's laser beam."	internal="BeamColor"	type="color255" %}

### Flags
{% include ent_sf.html	name="[4194304] Die on fire"	bit="4194304" %}
