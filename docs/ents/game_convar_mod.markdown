---
layout: article_ent
title: game_convar_mod
permalink: /docs/ents/game_convar_mod/
breadcrumb: true
ent_icon: assets/entities/convar_mod.png
type: PointClass
mb_version: 
game: 
---

Mods cvars

<br>

---

### KeyValues
{% include ent_kv.html	name="ConVars"	desc="The convars to modify. Multiple cvars can be modded with ';', e.g. 'host_timescale 0.5; npc_alyx_interact_manhacks 1'"	internal="target"	type="string" %}
{% include ent_kv.html	name="Command from Server"	desc="Mods convars directly from the server instead of acting as if the convars were typed into the local player's console, similar to using point_servercommand as opposed to point_clientcommand. Required to function in MP games."	internal="UseServer"	type="choices" %}

### Flags
{% include ent_sf.html	name="[1] Start Activated"	bit="1" %}

### Inputs
{% include ent_io.html	name="Activate"	desc="Begins modding the cvars."	type="void" %}
{% include ent_io.html	name="Deactivate"	desc="Stops modding the cvars."	type="void" %}
