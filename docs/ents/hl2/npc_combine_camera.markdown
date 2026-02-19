---
layout: article_ent
title: npc_combine_camera
permalink: /docs/ents/npc_combine_camera/
breadcrumb: true
ent_icon: 
type: NPCClass
mb_version: -1
game: hl2
---

Combine security camera

<br>

---

### KeyValues
{% include ent_kv.html	name="Model"	desc="None"	internal="model"	type="studio" %}

### Outputs
{% include ent_io.html	name="OnLostPlayer"	desc="Fired when the tracked player spotted within the inner radius has been lost. Usually due to the player leaving the inner radius, or because the player was killed."	type="void" %}
{% include ent_io.html	name="OnLostEnemy"	desc="Fired when a non-player enemy spotted within the inner radius has been lost. Usually due to the enemy leaving the inner radius, or because the enemy was killed/removed."	type="void" %}
