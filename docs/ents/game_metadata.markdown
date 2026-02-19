---
layout: article_ent
title: game_metadata
permalink: /docs/ents/game_metadata/
breadcrumb: true
ent_icon: assets/entities/game_metadata.png
type: PointClass
mb_version: 
game: 
---

An entity that provides metadata for things like Discord.

<br>

---

### KeyValues
{% include ent_kv.html	name="RPC State"	desc="Sets the 'state' that should be reported to rich presence clients like Discord. Shows the mod's name from gameinfo.txt by default."	internal="SetRPCState"	type="string" %}
{% include ent_kv.html	name="RPC Details"	desc="Sets the 'details' that should be reported to rich presence clients like Discord. Shows the map being played by default."	internal="SetRPCDetails"	type="string" %}

### Flags
{% include ent_sf.html	name="[1] Update Steam"	bit="1" %}
{% include ent_sf.html	name="[2] Update Discord"	bit="2" %}

### Inputs
{% include ent_io.html	name="SetRPCState"	desc="Sets the RPC state."	type="string" %}
{% include ent_io.html	name="SetRPCDetails"	desc="Sets the RPC details."	type="string" %}
