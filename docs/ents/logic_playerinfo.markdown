---
layout: article_ent
title: logic_playerinfo
permalink: /docs/ents/logic_playerinfo/
breadcrumb: true
ent_icon: assets/entities/logic_playerinfo.png
type: PointClass
mb_version: 
game: 
---

An entity that gets basic info about a player, or finds a player by their basic info.

<br>

---

### Inputs
{% include ent_io.html	name="GetPlayerInfo"	desc="Gets player info from the specified entity. If no entity is passed, this will get the local player."	type="target_destination" %}
{% include ent_io.html	name="GetPlayerByID"	desc="Gets a player by their steam ID. Supports wildcards."	type="string" %}
{% include ent_io.html	name="GetPlayerByName"	desc="Gets a player by their Steam name. Supports wildcards."	type="string" %}

### Outputs
{% include ent_io.html	name="OutUserID"	desc="Outputs a player's user ID."	type="string" %}
{% include ent_io.html	name="OutPlayerName"	desc="Outputs a player's Steam name."	type="string" %}
{% include ent_io.html	name="OutPlayerEntity"	desc="Outputs a player's entity."	type="ehandle" %}
