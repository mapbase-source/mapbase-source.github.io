---
layout: article_ent
title: npc_launcher
permalink: /docs/ents/npc_launcher/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: hl2
---

Launcher

<br>

---

### KeyValues
{% include ent_kv.html	name="Owner Entity"	desc="The entity that should 'own' the missiles, or receive credit/not collide with them."	internal="OwnerEntity"	type="target_destination" %}

### Outputs
{% include ent_io.html	name="OutMissile"	desc="Passes each missile launched"	type="ehandle" %}
