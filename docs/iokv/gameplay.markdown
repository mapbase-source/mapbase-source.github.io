---
layout: article
title: Gameplay I/O
permalink: /docs/iokv/gameplay/
breadcrumb: true
---

### Inputs
{% include ent_io.html	name="SetTarget"	desc="A special new input designed to change an entity's \"target\", including things like <code>path_track</code> paths and <code>env_gunfire</code> targets. By default, this changes the common target keyvalue on entities. Some entities override <code>SetTarget</code> for their own keyvalues, e.g. <code>scripted_sequence</code>'s target NPC. In code, this also calls <code>Activate()</code>, which is commonly used to assign <code>m_target</code> to cached entity handles."	type="targetname" %}
{% include ent_io.html	name="SetOwnerEntity"	desc="Sets this entity's \"owner entity\". Owner entities are mainly used for kill credit, and entities will typically never collide with their owner entity. Note that this has nothing to do with parenting."	type="targetname" %}

{% include ent_io.html	name="FreeChildren"	desc="Unparents all entities parented to this entity in a movement hierarchy."	type="void" %}

{% include ent_io.html	name="SetLocalOrigin"	desc="Sets this entity's origin in local space, relative to its parent if one exists. Otherwise relative to the world."	type="vector" %}
{% include ent_io.html	name="SetLocalAngles"	desc="Sets this entity's angles in local space, relative to its parent if one exists. Otherwise relative to the world."	type="vector" %}
{% include ent_io.html	name="SetAbsOrigin"	desc="Sets this entity's origin in the map, always relative to the world origin."	type="vector" %}
{% include ent_io.html	name="SetAbsAngles"	desc="Sets this entity's angles in the map, always relative to the world origin."	type="vector" %}
{% include ent_io.html	name="SetLocalVelocity"	desc="Sets this entity's current velocity."	type="vector" %}
{% include ent_io.html	name="SetLocalAngularVelocity"	desc="Sets this entity's current angular velocity."	type="vector" %}

{% include ent_io.html	name="AddSpawnFlags"	desc="Adds spawnflag(s) to this entity. Many spawnflags have their respective numbers suffixed in Mapbase's FGD."	type="integer" %}
{% include ent_io.html	name="RemoveSpawnFlags"	desc="Removes spawnflag(s) from this entity. Many spawnflags have their respective numbers suffixed in Mapbase's FGD."	type="integer" %}

{% include ent_io.html	name="AddEFlags"	desc="Adds EFlags to this entity."	type="integer" %}
{% include ent_io.html	name="RemoveEFlags"	desc="Removes EFlags from this entity."	type="integer" %}
{% include ent_io.html	name="SetMoveType"	desc="Sets this entity's movetype."	type="integer" %}
{% include ent_io.html	name="SetCollisionGroup"	desc="Sets this entity's collision group."	type="integer" %}
{% include ent_io.html	name="AddSolidFlags"	desc="Adds solid flags to this entity."	type="integer" %}
{% include ent_io.html	name="RemoveSolidFlags"	desc="Removes solid flags from this entity."	type="integer" %}

{% include ent_io.html	name="Touch"	desc="Simulates the specified entity touching the entity receiving this input. (e.g. a trigger receiving this input with a player as the parameter will be triggered by that player)"	type="target_destination" %}

{% include ent_io.html	name="KillIfNotVisible"	desc="Kills this entity if it's not visible to any players."	type="void" %}
{% include ent_io.html	name="KillWhenNotVisible"	desc="Kills this entity when it's not visible to any players. The parameter is the delay before this is evaluated."	type="float" %}

{% include ent_io.html	name="SetThinkNull"	desc="Sets this entity's general think function to NULL. A string can be passed to clear the think of a specific context."	type="string" %}

# Model Entities
The following I/O/KV are only available on entities that use models (i.e. non-brush entities).

### Inputs
{% include ent_io.html	name="CreateSeparateRagdoll"	desc="Creates a separate serverside ragdoll at this entity's origin."	type="void" %}
{% include ent_io.html	name="CreateSeparateRagdollClient"	desc="Creates a separate clientside ragdoll at this entity's origin."	type="void" %}

### Outputs
{% include ent_io.html	name="OnServerRagdoll"	desc="Fires when this object becomes/creates a serverside ragdoll. Passes the ragdoll."	type="target_destination" %}
