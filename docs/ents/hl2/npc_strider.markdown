---
layout: article_ent
title: npc_strider
permalink: /docs/ents/npc_strider/
breadcrumb: true
ent_icon: 
type: NPCClass
mb_version: -1
game: hl2
---

Strider

<br>

---

### KeyValues
{% include ent_kv.html	name="Stomp Filter"	desc="Which entities am I allowed to stomp? Don't forget to use the 'Can Stomp Player' spawnflag as well."	internal="stompfilter"	type="filterclass" %}

### Inputs
{% include ent_io.html	name="EnableCrouch"	desc="Allow the Strider to crouch again if it was prevented before"	type="void" %}
{% include ent_io.html	name="SetStompFilter"	desc="Sets the strider's stomp filter."	type="target_destination" %}
