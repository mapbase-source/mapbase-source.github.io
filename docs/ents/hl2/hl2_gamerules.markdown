---
layout: article_ent
title: hl2_gamerules
permalink: /docs/ents/hl2_gamerules/
breadcrumb: true
ent_icon: assets/entities/hl2_gamerules.png
type: PointClass
mb_version: 
game: hl2
---

Proxy entity for HL2 Gamerules

<br>

---

### KeyValues
{% include ent_kv.html	name="Default Citizen Type"	desc="Overrides the default citizen type."	internal="DefaultCitizenType"	type="choices" %}
{% include ent_kv.html	name="Player Squad Autosummon Allowed"	desc="Sets whether citizens are allowed to automatically follow the player again when they're at a command point and left alone for a while."	internal="SetPlayerSquadAutosummon"	type="choices" %}
{% include ent_kv.html	name="Legacy Flashlight"	desc="Sets whether the EP2 flashlight or the original flashlight from HL2 and Episode One should be used. 'No' means use the EP2 version, 'Yes' means use the original flashlight, and 'Default' doesn't change anything."	internal="SetLegacyFlashlight"	type="choices" %}
{% include ent_kv.html	name="Stunstick Pickup Behavior"	desc="Controls how stunsticks should react to being touched by the player."	internal="SetStunstickPickupBehavior"	type="choices" %}
{% include ent_kv.html	name="Allow SP respawn"	desc="Allows players to respawn in singleplayer instead of being forced to reload the last save upon dying. Use OnPlayerSpawn in logic_playerproxy to fire an output each time the player respawns."	internal="SetAllowSPRespawn"	type="choices" %}

### Inputs
{% include ent_io.html	name="DefaultCitizenType"	desc="Sets the default citizen type."	type="integer" %}
{% include ent_io.html	name="SetPlayerSquadAutosummon"	desc="Sets player squad autosummon."	type="bool" %}
{% include ent_io.html	name="SetLegacyFlashlight"	desc="Sets legacy flashlight."	type="bool" %}
{% include ent_io.html	name="SetStunstickPickupBehavior"	desc="Sets stunstick pickup behavior."	type="bool" %}
{% include ent_io.html	name="SetAllowSPRespawn"	desc="Sets SP respawning."	type="bool" %}
