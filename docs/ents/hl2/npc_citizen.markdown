---
layout: article_ent
title: npc_citizen
permalink: /docs/ents/npc_citizen/
breadcrumb: true
ent_icon: 
type: NPCClass
mb_version: -1
game: hl2
---

Citizen

<br>

---

### KeyValues
{% include ent_kv.html	name="Toss medkits?"	desc="Episodic only. Griggs in Half-Life 2: Episode Two uses experimental code that allows him to toss medkits at the player from a distance. This activates that code on this NPC if it is a medic. Does not work with ammo resuppliers."	internal="SetTossMedkits"	type="choices" %}
{% include ent_kv.html	name="Alternate aiming animations"	desc="Causes this citizen to use readiness aiming animations with a SMG, AR2, or shotgun. When running or walking while aiming/shooting, they will hold their weapon around their upper-chest instead of from their hip."	internal="AlternateAiming"	type="choices" %}

### Flags
{% include ent_sf.html	name="[33554432] Player can +USE and +WALK (Alt + E) to toggle squad (disables automatically joining)"	bit="33554432" %}

### Inputs
{% include ent_io.html	name="SetUnCommandable"	desc="Makes a previously commandable citizen uncommandable"	type="void" %}
{% include ent_io.html	name="SetTossMedkits"	desc="Sets whether this NPC can toss medkits."	type="bool" %}

### Outputs
{% include ent_io.html	name="OnHealedNPC"	desc="Fires when this citizen heals a NPC."	type="void" %}
{% include ent_io.html	name="OnHealedPlayer"	desc="Fires when this citizen heals a player."	type="void" %}
{% include ent_io.html	name="OnTossMedkit"	desc="Fires when a medkit is tossed. Passes the medkit."	type="ehandle" %}
{% include ent_io.html	name="OnGiveAmmo"	desc="Fires when ammo is given to the player."	type="void" %}
