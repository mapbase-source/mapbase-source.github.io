---
layout: article_ent
title: prop_door_rotating
permalink: /docs/ents/prop_door_rotating/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

An entity used to place a door in the world.

<br>

---

### KeyValues
{% include ent_kv.html	name="Disable Shadows"	desc="Used to disable dynamic shadows on this entity."	internal="disableshadows"	type="choices" %}
{% include ent_kv.html	name="NPC Open Distance"	desc="How far away NPCs should move in order to open the door. (default = 64)"	internal="opendistoverride"	type="integer" %}
{% include ent_kv.html	name="NPC Front Open Activity"	desc="The gesture activity NPCs should play when opening the door from the front."	internal="openfrontactivityoverride"	type="string" %}
{% include ent_kv.html	name="NPC Back Open Activity"	desc="The gesture activity NPCs should play when opening the door from the back."	internal="openbackactivityoverride"	type="string" %}
{% include ent_kv.html	name="Lighting Origin"	desc="Select an entity to specify a location to sample lighting from, instead of using this entity's origin."	internal="lightingorigin"	type="target_destination" %}

### Flags
{% include ent_sf.html	name="[256] Start with collision disabled"	bit="256" %}
{% include ent_sf.html	name="[512] NPCs Can't"	bit="512" %}

### Inputs
{% include ent_io.html	name="AllowPlayerUse"	desc="Allows players to use the door. This just disables the 'Ignore player +USE' spawnflag."	type="void" %}
{% include ent_io.html	name="DisallowPlayerUse"	desc="Prevents players from using the door. This just enables the 'Ignore player +USE' spawnflag."	type="void" %}
{% include ent_io.html	name="SetDoorFilter"	desc="Sets the entity to use as the NPC filter. Pass in an empty string to clear the NPC filter."	type="target_destination" %}
{% include ent_io.html	name="SetFullyOpenSound"	desc="Sets the sound to use when the door is fully open."	type="string" %}
{% include ent_io.html	name="SetFullyClosedSound"	desc="Sets the sound to use when the door is fully closed."	type="string" %}
{% include ent_io.html	name="SetMovingSound"	desc="Sets the sound to use when the door is moving."	type="string" %}
{% include ent_io.html	name="SetLockedSound"	desc="Sets the sound to use when the door is locked."	type="string" %}
{% include ent_io.html	name="SetUnlockedSound"	desc="Sets the sound to use when the door is unlocked."	type="string" %}
