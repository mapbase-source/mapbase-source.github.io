---
layout: article
title: Logical I/O
permalink: /docs/iokv/logical/
breadcrumb: true
---

### Inputs
{% include ent_io.html	name="PassUser1"	desc="Causes this entity's <code>OutUser1</code> output to be fired. Can pass any parameter."	type="string" %}
{% include ent_io.html	name="PassUser2"	desc="Causes this entity's <code>OutUser2</code> output to be fired. Can pass any parameter."	type="string" %}
{% include ent_io.html	name="PassUser3"	desc="Causes this entity's <code>OutUser3</code> output to be fired. Can pass any parameter."	type="string" %}
{% include ent_io.html	name="PassUser4"	desc="Causes this entity's <code>OutUser4</code> output to be fired. Can pass any parameter."	type="string" %}
{% include ent_io.html	name="FireRandomUser"	desc="Fires <code>OnUser1</code>, <code>OnUser2</code>, <code>OnUser3</code>, or <code>OnUser4</code> with a 25% chance of each."	type="void" %}
{% include ent_io.html	name="PassRandomUser"	desc="Fires <code>OutUser1</code>, <code>OutUser2</code>, <code>OutUser3</code>, or <code>OutUser4</code> with a 25% chance of each. Can pass any parameter."	type="string" %}

{% include ent_io.html	name="SetHealth"	desc="Sets this entity's health. This input already existed on several entities, but now it's part of all entities."	type="integer" %}
{% include ent_io.html	name="AddHealth/RemoveHealth"	desc="Adds to/removes from this entity's health. These inputs already existed on props and <code>func_breakables</code>, but now they're part of all entities, including NPCs."	type="integer" %}
{% include ent_io.html	name="SetHealth"	desc="Sets this entity's maximum health. This will not change the entity's current health unless it exceeds the new maximum, in which case the entity's health will be lowered down to the new maximum."	type="integer" %}

{% include ent_io.html	name="FireOutput"	desc="Fires the named output on this entity. Format: <code>&lt;output name&gt;:&lt;activator&gt;:&lt;caller&gt;:&lt;parameter&gt;:&lt;delay&gt;</code> For example: <code>OnDeath:my_entity:my_entity</code>. Everything beyond the output name is optional."	type="string" %}
{% include ent_io.html	name="RemoveOutput"	desc="Removes all instances of the named output on this entity. Wildcards are supported, meaning you could just pass '*' to wipe all outputs from this entity."	type="string" %}
{% include ent_io.html	name="AcceptInput"	desc="Fires the named input on this entity. Format: <code>&lt;input name&gt;:&lt;parameter&gt;:&lt;activator&gt;:&lt;caller&gt;:&lt;output ID&gt;</code> Example: <code>SetTarget:target_entity</code>. Everything beyond the input name is optional. Note that this is arranged differently from <code>FireOutput</code>, having the parameter right after the input name."	type="string" %}
{% include ent_io.html	name="CancelPending"	desc="Cancels any events fired by this entity that are currently pending in the I/O event queue. This input originated from <code>logic_relay</code>, but it's been promoted to a base input so any entity could cancel their outputs."	type="void" %}

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

{% include ent_io.html	name="ChangeVariable"	desc="A special version of <code>AddOutput</code> that changes a datadesc variable instead of a keyvalue, similar to <code>logic_datadesc_accessor</code>."	type="string" %}

### Outputs
{% include ent_io.html	name="OutUser1"	desc="Fires in response to <code>PassUser1</code>. Can pass any parameter."	type="string" %}
{% include ent_io.html	name="OutUser2"	desc="Fires in response to <code>PassUser2</code>. Can pass any parameter."	type="string" %}
{% include ent_io.html	name="OutUser3"	desc="Fires in response to <code>PassUser3</code>. Can pass any parameter."	type="string" %}
{% include ent_io.html	name="OutUser4"	desc="Fires in response to <code>PassUser4</code>. Can pass any parameter."	type="string" %}

{% include ent_io.html	name="OnKilled"	desc="Fires when this entity is removed with the 'Kill' input."	type="void" from="L4D" %}

### KeyValues
The owner entity can now be accessed with the {{code|OwnerEntity}} keyvalue and {{code|m_fFlags}} (an internal flag variable) can now be accessed with the aptly named {{code|m_fFlags}} keyvalue, but neither are actually used in any base FGD classes to avoid clutter.
