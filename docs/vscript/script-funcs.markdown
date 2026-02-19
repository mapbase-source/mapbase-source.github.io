---
layout: article
title: List of Script Functions
permalink: /docs/vscript/script-funcs/
breadcrumb: true
wide: true
---

This list contains all classes and functions available for VScript in Mapbase.

This can also be printed into the console by setting <code>developer</code> to non-zero, loading a map, and executing <code>script_help</code>.

<h2>Classes</h2>
<h3 id="CBaseEntity">CBaseEntity</h3>
Root class of all server-side entities

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AcceptInput</td>
			<td class="ent_list_name">bool CBaseEntity::AcceptInput(string, string, handle, handle)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Activate</td>
			<td class="ent_list_name">void CBaseEntity::Activate()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">AddContext</td>
			<td class="ent_list_name">void CBaseEntity::AddContext(string, string, float)</td>
			<td class="ent_list_summary">Add a response context value</td>
		</tr>
		<tr>
			<td class="ent_list_name">AddEFlags</td>
			<td class="ent_list_name">void CBaseEntity::AddEFlags(int)</td>
			<td class="ent_list_summary">Add Eflags</td>
		</tr>
		<tr>
			<td class="ent_list_name">AddEffects</td>
			<td class="ent_list_name">void CBaseEntity::AddEffects(int)</td>
			<td class="ent_list_summary">Add effect(s)</td>
		</tr>
		<tr>
			<td class="ent_list_name">AddFlag</td>
			<td class="ent_list_name">void CBaseEntity::AddFlag(int)</td>
			<td class="ent_list_summary">Add flag</td>
		</tr>
		<tr>
			<td class="ent_list_name">AddOutput</td>
			<td class="ent_list_name">bool CBaseEntity::AddOutput(string, string, string, string, float, int)</td>
			<td class="ent_list_summary">Add an output</td>
		</tr>
		<tr>
			<td class="ent_list_name">AddSolidFlags</td>
			<td class="ent_list_name">void CBaseEntity::AddSolidFlags(int)</td>
			<td class="ent_list_summary">Add solid flags</td>
		</tr>
		<tr>
			<td class="ent_list_name">AddSpawnFlags</td>
			<td class="ent_list_name">void CBaseEntity::AddSpawnFlags(int)</td>
			<td class="ent_list_summary">Add spawnflag(s)</td>
		</tr>
		<tr>
			<td class="ent_list_name">ApplyAbsVelocityImpulse</td>
			<td class="ent_list_name">void CBaseEntity::ApplyAbsVelocityImpulse(Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ApplyLocalAngularVelocityImpulse</td>
			<td class="ent_list_name">void CBaseEntity::ApplyLocalAngularVelocityImpulse(Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">BodyTarget</td>
			<td class="ent_list_name">Vector CBaseEntity::BodyTarget(Vector, bool)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Classify</td>
			<td class="ent_list_name">int CBaseEntity::Classify()</td>
			<td class="ent_list_summary">Get Class_T class ID (corresponds to the CLASS_ set of constants)</td>
		</tr>
		<tr>
			<td class="ent_list_name">ClearEffects</td>
			<td class="ent_list_name">void CBaseEntity::ClearEffects()</td>
			<td class="ent_list_summary">Clear effect(s)</td>
		</tr>
		<tr>
			<td class="ent_list_name">ClearSpawnFlags</td>
			<td class="ent_list_name">void CBaseEntity::ClearSpawnFlags()</td>
			<td class="ent_list_summary">Clear spawnflag(s)</td>
		</tr>
		<tr>
			<td class="ent_list_name">ConnectOutput</td>
			<td class="ent_list_name">void ConnectOutput(string ''output'', string ''function'')</td>
			<td class="ent_list_summary">Adds an I/O connection that will call the named function when the specified output fires</td>
		</tr>
		<tr>
			<td class="ent_list_name">Destroy</td>
			<td class="ent_list_name">void CBaseEntity::Destroy()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">DisconnectOutput</td>
			<td class="ent_list_name">void CBaseEntity::DisconnectOutput(string, string)</td>
			<td class="ent_list_summary">Removes a connected script function from an I/O event.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DispatchInteraction</td>
			<td class="ent_list_name">bool CBaseEntity::DispatchInteraction(int, handle, handle)</td>
			<td class="ent_list_summary">Dispatches an interaction on this entity. See the g_interaction set of constants for more information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EmitSound</td>
			<td class="ent_list_name">void CBaseEntity::EmitSound(string)</td>
			<td class="ent_list_summary">Plays a sound from this entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EntityToWorldTransform</td>
			<td class="ent_list_name">handle CBaseEntity::EntityToWorldTransform()</td>
			<td class="ent_list_summary">Get the entity's transform</td>
		</tr>
		<tr>
			<td class="ent_list_name">EyeAngles</td>
			<td class="ent_list_name">Vector CBaseEntity::EyeAngles()</td>
			<td class="ent_list_summary">Get eye pitch, yaw, roll as a vector</td>
		</tr>
		<tr>
			<td class="ent_list_name">EyePosition</td>
			<td class="ent_list_name">Vector CBaseEntity::EyePosition()</td>
			<td class="ent_list_summary">Get vector to eye position - absolute coords</td>
		</tr>
		<tr>
			<td class="ent_list_name">FireBullets</td>
			<td class="ent_list_name">void CBaseEntity::FireBullets(handle)</td>
			<td class="ent_list_summary">Fire bullets from entity with a given info handle</td>
		</tr>
		<tr>
			<td class="ent_list_name">FireOutput</td>
			<td class="ent_list_name">void CBaseEntity::FireOutput(string, handle, handle, string, float)</td>
			<td class="ent_list_summary">Fire an entity output</td>
		</tr>
		<tr>
			<td class="ent_list_name">FirstMoveChild</td>
			<td class="ent_list_name">handle CBaseEntity::FirstMoveChild()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">FollowEntity</td>
			<td class="ent_list_name">void CBaseEntity::FollowEntity(handle, bool)</td>
			<td class="ent_list_summary">Begin following the specified entity. This makes this entity non-solid, parents it to the target entity, and teleports it to the specified entity's origin. The second parameter is whether or not to use bonemerging while following.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAngles</td>
			<td class="ent_list_name">Vector CBaseEntity::GetAngles()</td>
			<td class="ent_list_summary">Get entity pitch, yaw, roll as a vector</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAngularVelocity</td>
			<td class="ent_list_name">Vector CBaseEntity::GetAngularVelocity()</td>
			<td class="ent_list_summary">Get the local angular velocity - returns a vector of pitch,yaw,roll</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetBoundingMaxs</td>
			<td class="ent_list_name">Vector CBaseEntity::GetBoundingMaxs()</td>
			<td class="ent_list_summary">Get a vector containing max bounds, centered on object</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetBoundingMins</td>
			<td class="ent_list_name">Vector CBaseEntity::GetBoundingMins()</td>
			<td class="ent_list_summary">Get a vector containing min bounds, centered on object</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetCenter</td>
			<td class="ent_list_name">Vector CBaseEntity::GetCenter()</td>
			<td class="ent_list_summary">Get vector to center of object - absolute coords</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetClassname</td>
			<td class="ent_list_name">string CBaseEntity::GetClassname()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetCollisionGroup</td>
			<td class="ent_list_name">int CBaseEntity::GetCollisionGroup()</td>
			<td class="ent_list_summary">Get the collision group</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetContext</td>
			<td class="ent_list_name">string CBaseEntity::GetContext(string)</td>
			<td class="ent_list_summary">Get a response context value</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetContextCount</td>
			<td class="ent_list_name">int CBaseEntity::GetContextCount()</td>
			<td class="ent_list_summary">Get the number of response contexts</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetContextExpireTime</td>
			<td class="ent_list_name">float CBaseEntity::GetContextExpireTime(string)</td>
			<td class="ent_list_summary">Get a response context's expiration time</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetContextIndex</td>
			<td class="ent_list_name">handle CBaseEntity::GetContextIndex(int)</td>
			<td class="ent_list_summary">Get a response context at a specific index in the form of a table</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDebugName</td>
			<td class="ent_list_name">string CBaseEntity::GetDebugName()</td>
			<td class="ent_list_summary">If name exists returns name, otherwise returns classname</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetEFlags</td>
			<td class="ent_list_name">int CBaseEntity::GetEFlags()</td>
			<td class="ent_list_summary">Get Eflags</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetEffects</td>
			<td class="ent_list_name">int CBaseEntity::GetEffects()</td>
			<td class="ent_list_summary">Get effects</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFlags</td>
			<td class="ent_list_name">int CBaseEntity::GetFlags()</td>
			<td class="ent_list_summary">Get flags</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFollowedEntity</td>
			<td class="ent_list_name">handle CBaseEntity::GetFollowedEntity()</td>
			<td class="ent_list_summary">Get the entity we're following.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetForwardVector</td>
			<td class="ent_list_name">Vector CBaseEntity::GetForwardVector()</td>
			<td class="ent_list_summary">Get the forward vector of the entity</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFriction</td>
			<td class="ent_list_name">float CBaseEntity::GetFriction()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetGravity</td>
			<td class="ent_list_name">float CBaseEntity::GetGravity()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetGroundEntity</td>
			<td class="ent_list_name">handle CBaseEntity::GetGroundEntity()</td>
			<td class="ent_list_summary">Get the entity we're standing on.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetHealth</td>
			<td class="ent_list_name">int CBaseEntity::GetHealth()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetKeyValue</td>
			<td class="ent_list_name">string CBaseEntity::GetKeyValue(string)</td>
			<td class="ent_list_summary">Get a keyvalue</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetLocalAngles</td>
			<td class="ent_list_name">Vector CBaseEntity::GetLocalAngles()</td>
			<td class="ent_list_summary">GetLocalAngles</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetLocalOrigin</td>
			<td class="ent_list_name">Vector CBaseEntity::GetLocalOrigin()</td>
			<td class="ent_list_summary">GetLocalOrigin</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMass</td>
			<td class="ent_list_name">float CBaseEntity::GetMass()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMaxHealth</td>
			<td class="ent_list_name">int CBaseEntity::GetMaxHealth()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMaxOutputDelay</td>
			<td class="ent_list_name">float CBaseEntity::GetMaxOutputDelay(string)</td>
			<td class="ent_list_summary">Get the longest delay for all events attached to an output</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetModelKeyValues</td>
			<td class="ent_list_name">handle CBaseEntity::GetModelKeyValues()</td>
			<td class="ent_list_summary">Get a KeyValue class instance on this entity's model</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetModelName</td>
			<td class="ent_list_name">string CBaseEntity::GetModelName()</td>
			<td class="ent_list_summary">Returns the name of the model</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMoveParent</td>
			<td class="ent_list_name">handle CBaseEntity::GetMoveParent()</td>
			<td class="ent_list_summary">If in hierarchy, retrieves the entity's parent</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMoveType</td>
			<td class="ent_list_name">int CBaseEntity::GetMoveType()</td>
			<td class="ent_list_summary">Get the move type</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetName</td>
			<td class="ent_list_name">string CBaseEntity::GetName()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetOrCreatePrivateScriptScope</td>
			<td class="ent_list_name">handle CBaseEntity::GetOrCreatePrivateScriptScope()</td>
			<td class="ent_list_summary">Create and retrieve the script-side data associated with an entity</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetOrigin</td>
			<td class="ent_list_name">Vector CBaseEntity::GetOrigin()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetOwner</td>
			<td class="ent_list_name">handle CBaseEntity::GetOwner()</td>
			<td class="ent_list_summary">Gets this entity's owner</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPhysicsObject</td>
			<td class="ent_list_name">handle CBaseEntity::GetPhysicsObject()</td>
			<td class="ent_list_summary">Get the entity's physics object if it has one</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPreTemplateName</td>
			<td class="ent_list_name">string CBaseEntity::GetPreTemplateName()</td>
			<td class="ent_list_summary">Get the entity name stripped of template unique decoration</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetRenderAlpha</td>
			<td class="ent_list_name">int CBaseEntity::GetRenderAlpha()</td>
			<td class="ent_list_summary">Get the render color's alpha value</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetRenderColorB</td>
			<td class="ent_list_name">int CBaseEntity::GetRenderColorB()</td>
			<td class="ent_list_summary">Get the render color's B value</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetRenderColorG</td>
			<td class="ent_list_name">int CBaseEntity::GetRenderColorG()</td>
			<td class="ent_list_summary">Get the render color's G value</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetRenderColorR</td>
			<td class="ent_list_name">int CBaseEntity::GetRenderColorR()</td>
			<td class="ent_list_summary">Get the render color's R value</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetRenderColorVector</td>
			<td class="ent_list_name">Vector CBaseEntity::GetRenderColorVector()</td>
			<td class="ent_list_summary">Get the render color as a vector</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetRenderMode</td>
			<td class="ent_list_name">int CBaseEntity::GetRenderMode()</td>
			<td class="ent_list_summary">Get render mode</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetRightVector</td>
			<td class="ent_list_name">Vector CBaseEntity::GetRightVector()</td>
			<td class="ent_list_summary">Get the right vector of the entity</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetRootMoveParent</td>
			<td class="ent_list_name">handle CBaseEntity::GetRootMoveParent()</td>
			<td class="ent_list_summary">If in hierarchy, walks up the hierarchy to find the root parent</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetScriptId</td>
			<td class="ent_list_name">string CBaseEntity::GetScriptId()</td>
			<td class="ent_list_summary">Retrieve the unique identifier used to refer to the entity within the scripting system</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetScriptScope</td>
			<td class="ent_list_name">handle CBaseEntity::GetScriptScope()</td>
			<td class="ent_list_summary">Retrieve the script-side data associated with an entity</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSolid</td>
			<td class="ent_list_name">int CBaseEntity::GetSolid()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSolidFlags</td>
			<td class="ent_list_name">int CBaseEntity::GetSolidFlags()</td>
			<td class="ent_list_summary">Get solid flags</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundDuration</td>
			<td class="ent_list_name">float CBaseEntity::GetSoundDuration(string, string)</td>
			<td class="ent_list_summary">Returns float duration of the sound. Takes soundname and optional actormodelname.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSpawnFlags</td>
			<td class="ent_list_name">int CBaseEntity::GetSpawnFlags()</td>
			<td class="ent_list_summary">Get spawnflags</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetTakeDamage</td>
			<td class="ent_list_name">int CBaseEntity::GetTakeDamage()</td>
			<td class="ent_list_summary">Gets this entity's m_takedamage value. (DAMAGE_YES, DAMAGE_NO, etc.)</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetTeam</td>
			<td class="ent_list_name">int CBaseEntity::GetTeam()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetTransmitState</td>
			<td class="ent_list_name">int CBaseEntity::GetTransmitState()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetUpVector</td>
			<td class="ent_list_name">Vector CBaseEntity::GetUpVector()</td>
			<td class="ent_list_summary">Get the up vector of the entity</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetVelocity</td>
			<td class="ent_list_name">Vector CBaseEntity::GetVelocity()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetWaterLevel</td>
			<td class="ent_list_name">int CBaseEntity::GetWaterLevel()</td>
			<td class="ent_list_summary">Get current level of water submergence</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasSpawnFlags</td>
			<td class="ent_list_name">bool CBaseEntity::HasSpawnFlags(int)</td>
			<td class="ent_list_summary">Check if the entity has specific spawnflag(s) ticked</td>
		</tr>
		<tr>
			<td class="ent_list_name">HeadTarget</td>
			<td class="ent_list_name">Vector CBaseEntity::HeadTarget(Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsAlive</td>
			<td class="ent_list_name">bool CBaseEntity::IsAlive()</td>
			<td class="ent_list_summary">Return true if this entity is alive</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsCombatCharacter</td>
			<td class="ent_list_name">bool CBaseEntity::IsCombatCharacter()</td>
			<td class="ent_list_summary">Returns true if this entity is a combat character (player or NPC).</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsEffectActive</td>
			<td class="ent_list_name">bool CBaseEntity::IsEffectActive(int)</td>
			<td class="ent_list_summary">Check if an effect is active</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsEntVisible</td>
			<td class="ent_list_name">bool CBaseEntity::IsEntVisible(handle)</td>
			<td class="ent_list_summary">Check if the specified entity can be visible to this entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsFollowingEntity</td>
			<td class="ent_list_name">bool CBaseEntity::IsFollowingEntity()</td>
			<td class="ent_list_summary">Returns true if this entity is following another entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsNPC</td>
			<td class="ent_list_name">bool CBaseEntity::IsNPC()</td>
			<td class="ent_list_summary">Returns true if this entity is a NPC.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsPlayer</td>
			<td class="ent_list_name">bool CBaseEntity::IsPlayer()</td>
			<td class="ent_list_summary">Returns true if this entity is a player.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsVisible</td>
			<td class="ent_list_name">bool CBaseEntity::IsVisible(Vector)</td>
			<td class="ent_list_summary">Check if the specified position can be visible to this entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsVisibleWithMask</td>
			<td class="ent_list_name">bool CBaseEntity::IsVisibleWithMask(Vector, int)</td>
			<td class="ent_list_summary">Check if the specified position can be visible to this entity with a specific trace mask.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsWeapon</td>
			<td class="ent_list_name">bool CBaseEntity::IsWeapon()</td>
			<td class="ent_list_summary">Returns true if this entity is a weapon.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsWorld</td>
			<td class="ent_list_name">bool CBaseEntity::IsWorld()</td>
			<td class="ent_list_summary">Returns true if this entity is the world.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NextMovePeer</td>
			<td class="ent_list_name">handle CBaseEntity::NextMovePeer()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">PhysicsDestroyObject</td>
			<td class="ent_list_name">void CBaseEntity::PhysicsDestroyObject()</td>
			<td class="ent_list_summary">Destroys the entity's physics object</td>
		</tr>
		<tr>
			<td class="ent_list_name">PhysicsInitNormal</td>
			<td class="ent_list_name">void CBaseEntity::PhysicsInitNormal(int, int, bool)</td>
			<td class="ent_list_summary">Initializes the entity's physics object with the specified solid type, solid flags, and whether to start asleep</td>
		</tr>
		<tr>
			<td class="ent_list_name">PrecacheSoundScript</td>
			<td class="ent_list_name">void CBaseEntity::PrecacheSoundScript(string)</td>
			<td class="ent_list_summary">Precache a sound for later playing.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveContext</td>
			<td class="ent_list_name">void CBaseEntity::RemoveContext(string)</td>
			<td class="ent_list_summary">Remove a response context</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveEFlags</td>
			<td class="ent_list_name">void CBaseEntity::RemoveEFlags(int)</td>
			<td class="ent_list_summary">Remove Eflags</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveEffects</td>
			<td class="ent_list_name">void CBaseEntity::RemoveEffects(int)</td>
			<td class="ent_list_summary">Remove effect(s)</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveFlag</td>
			<td class="ent_list_name">void CBaseEntity::RemoveFlag(int)</td>
			<td class="ent_list_summary">Remove flag</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveSolidFlags</td>
			<td class="ent_list_name">void CBaseEntity::RemoveSolidFlags(int)</td>
			<td class="ent_list_summary">Remove solid flags</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveSpawnFlags</td>
			<td class="ent_list_name">void CBaseEntity::RemoveSpawnFlags(int)</td>
			<td class="ent_list_summary">Remove spawnflag(s)</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetAbsAngles</td>
			<td class="ent_list_name">void CBaseEntity::SetAbsAngles(Vector)</td>
			<td class="ent_list_summary">SetAbsAngles</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetAbsOrigin</td>
			<td class="ent_list_name">void CBaseEntity::SetAbsOrigin(Vector)</td>
			<td class="ent_list_summary">SetAbsOrigin</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetAngles</td>
			<td class="ent_list_name">void CBaseEntity::SetAngles(Vector)</td>
			<td class="ent_list_summary">Set entity pitch, yaw, roll</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetAngularVelocity</td>
			<td class="ent_list_name">void CBaseEntity::SetAngularVelocity(float, float, float)</td>
			<td class="ent_list_summary">Set the local angular velocity - takes float pitch,yaw,roll velocities</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetCollisionGroup</td>
			<td class="ent_list_name">void CBaseEntity::SetCollisionGroup(int)</td>
			<td class="ent_list_summary">Set the collision group</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetContextThink</td>
			<td class="ent_list_name">void CBaseEntity::SetContextThink(string, handle, float)</td>
			<td class="ent_list_summary">Set a think function on this entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetEffects</td>
			<td class="ent_list_name">void CBaseEntity::SetEffects(int)</td>
			<td class="ent_list_summary">Set effect(s)</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetForwardVector</td>
			<td class="ent_list_name">void CBaseEntity::SetForwardVector(Vector)</td>
			<td class="ent_list_summary">Set the orientation of the entity to have this forward vector</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetFriction</td>
			<td class="ent_list_name">void CBaseEntity::SetFriction(float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetGravity</td>
			<td class="ent_list_name">void CBaseEntity::SetGravity(float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetGroundEntity</td>
			<td class="ent_list_name">void CBaseEntity::SetGroundEntity(handle)</td>
			<td class="ent_list_summary">Set the entity we're standing on.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetHealth</td>
			<td class="ent_list_name">void CBaseEntity::SetHealth(int)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetLocalAngles</td>
			<td class="ent_list_name">void CBaseEntity::SetLocalAngles(Vector)</td>
			<td class="ent_list_summary">SetLocalAngles</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetLocalOrigin</td>
			<td class="ent_list_name">void CBaseEntity::SetLocalOrigin(Vector)</td>
			<td class="ent_list_summary">SetLocalOrigin</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetMass</td>
			<td class="ent_list_name">void CBaseEntity::SetMass(float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetMaxHealth</td>
			<td class="ent_list_name">void CBaseEntity::SetMaxHealth(int)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetModel</td>
			<td class="ent_list_name">void CBaseEntity::SetModel(string)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetMoveType</td>
			<td class="ent_list_name">void CBaseEntity::SetMoveType(int)</td>
			<td class="ent_list_summary">Set the move type</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetName</td>
			<td class="ent_list_name">void CBaseEntity::SetName(string)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetOrigin</td>
			<td class="ent_list_name">void CBaseEntity::SetOrigin(Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetOriginAngles</td>
			<td class="ent_list_name">void CBaseEntity::SetOriginAngles(Vector, Vector)</td>
			<td class="ent_list_summary">Set both the origin and the angles</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetOriginAnglesVelocity</td>
			<td class="ent_list_name">void CBaseEntity::SetOriginAnglesVelocity(Vector, Vector, Vector)</td>
			<td class="ent_list_summary">Set the origin, the angles, and the velocity</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetOwner</td>
			<td class="ent_list_name">void CBaseEntity::SetOwner(handle)</td>
			<td class="ent_list_summary">Sets this entity's owner</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetParent</td>
			<td class="ent_list_name">void CBaseEntity::SetParent(handle, string)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetRenderAlpha</td>
			<td class="ent_list_name">void CBaseEntity::SetRenderAlpha(int)</td>
			<td class="ent_list_summary">Set the render color's alpha value</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetRenderColor</td>
			<td class="ent_list_name">void CBaseEntity::SetRenderColor(int, int, int)</td>
			<td class="ent_list_summary">Set the render color</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetRenderColorB</td>
			<td class="ent_list_name">void CBaseEntity::SetRenderColorB(int)</td>
			<td class="ent_list_summary">Set the render color's B value</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetRenderColorG</td>
			<td class="ent_list_name">void CBaseEntity::SetRenderColorG(int)</td>
			<td class="ent_list_summary">Set the render color's G value</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetRenderColorR</td>
			<td class="ent_list_name">void CBaseEntity::SetRenderColorR(int)</td>
			<td class="ent_list_summary">Set the render color's R value</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetRenderColorVector</td>
			<td class="ent_list_name">void CBaseEntity::SetRenderColorVector(Vector)</td>
			<td class="ent_list_summary">Set the render color as a vector</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetRenderMode</td>
			<td class="ent_list_name">void CBaseEntity::SetRenderMode(int)</td>
			<td class="ent_list_summary">Set render mode</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSize</td>
			<td class="ent_list_name">void CBaseEntity::SetSize(Vector, Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSolid</td>
			<td class="ent_list_name">void CBaseEntity::SetSolid(int)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetTakeDamage</td>
			<td class="ent_list_name">void CBaseEntity::SetTakeDamage(int)</td>
			<td class="ent_list_summary">Sets this entity's m_takedamage value. (DAMAGE_YES, DAMAGE_NO, etc.)</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetTeam</td>
			<td class="ent_list_name">void CBaseEntity::SetTeam(int)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetThink</td>
			<td class="ent_list_name">void CBaseEntity::SetThink(handle, float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetThinkFunction</td>
			<td class="ent_list_name">void CBaseEntity::SetThinkFunction(string, float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetTransmitState</td>
			<td class="ent_list_name">int CBaseEntity::SetTransmitState(int)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetVelocity</td>
			<td class="ent_list_name">void CBaseEntity::SetVelocity(Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">StopFollowingEntity</td>
			<td class="ent_list_name">void CBaseEntity::StopFollowingEntity()</td>
			<td class="ent_list_summary">Stops following an entity if we're following one.</td>
		</tr>
		<tr>
			<td class="ent_list_name">StopSound</td>
			<td class="ent_list_name">void CBaseEntity::StopSound(string)</td>
			<td class="ent_list_summary">Stops a sound from this entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">StopThink</td>
			<td class="ent_list_name">void CBaseEntity::StopThink()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">StopThinkFunction</td>
			<td class="ent_list_name">void CBaseEntity::StopThinkFunction()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">TakeDamage</td>
			<td class="ent_list_name">int CBaseEntity::TakeDamage(handle)</td>
			<td class="ent_list_summary">Apply damage to this entity with a given info handle</td>
		</tr>
		<tr>
			<td class="ent_list_name">TakeHealth</td>
			<td class="ent_list_name">int CBaseEntity::TakeHealth(float, int)</td>
			<td class="ent_list_summary">Give this entity health</td>
		</tr>
		<tr>
			<td class="ent_list_name">ValidateScriptScope</td>
			<td class="ent_list_name">bool CBaseEntity::ValidateScriptScope()</td>
			<td class="ent_list_summary">Ensure that an entity's script scope has been created</td>
		</tr>
		<tr>
			<td class="ent_list_name">entindex</td>
			<td class="ent_list_name">int CBaseEntity::entindex()</td>
			<td class="ent_list_summary"></td>
		</tr>
	</tbody>
</table>

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">CanBeSeenBy</td>
			<td class="ent_list_name">bool CBaseEntity -> CanBeSeenBy(handle ''npc'')</td>
			<td class="ent_list_summary">Whether or not this entity can be seen by the specified NPC.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FireBullets</td>
			<td class="ent_list_name">void CBaseEntity -> FireBullets(handle ''info'')</td>
			<td class="ent_list_summary">Called when the entity fires bullets from itself or from a weapon. The parameter is the associated FireBulletsInfo_t handle. Return false to cancel bullet firing.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HandleInteraction</td>
			<td class="ent_list_name">bool CBaseEntity -> HandleInteraction(int ''interaction'', handle ''sourceEnt'')</td>
			<td class="ent_list_summary">Called for internal game interactions. See the g_interaction set of constants for more information. Returning true or false will return that value without falling to any internal handling. Returning nothing will allow the interaction to fall to any internal handling.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ModifyEmitSoundParams</td>
			<td class="ent_list_name">void CBaseEntity -> ModifyEmitSoundParams(handle ''params'')</td>
			<td class="ent_list_summary">Called every time a sound is emitted on this entity, allowing for its parameters to be modified.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ModifyOrAppendCriteria</td>
			<td class="ent_list_name">handle CBaseEntity -> ModifyOrAppendCriteria()</td>
			<td class="ent_list_summary">Called when the criteria set is collected for a response. Return a table of keyvalues to add to the criteria set.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ModifySentenceParams</td>
			<td class="ent_list_name">void CBaseEntity -> ModifySentenceParams(handle ''params'')</td>
			<td class="ent_list_summary">Called every time a sentence is emitted on this entity, allowing for its parameters to be modified.</td>
		</tr>
		<tr>
			<td class="ent_list_name">OnDeath</td>
			<td class="ent_list_name">bool CBaseEntity -> OnDeath(handle ''info'')</td>
			<td class="ent_list_summary">Called when the entity dies (Event_Killed). Returning false makes the entity cancel death, although this could have unforeseen consequences. For hooking any damage instead of just death, use OnTakeDamage.</td>
		</tr>
		<tr>
			<td class="ent_list_name">OnEntText</td>
			<td class="ent_list_name">string CBaseEntity -> OnEntText()</td>
			<td class="ent_list_summary">Called every frame when ent_text is enabled on the entity. Return a string to be added to the ent_text printout.</td>
		</tr>
		<tr>
			<td class="ent_list_name">OnKilledOther</td>
			<td class="ent_list_name">void CBaseEntity -> OnKilledOther(handle ''victim'', handle ''info'')</td>
			<td class="ent_list_summary">Called when the entity kills another entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">OnTakeDamage</td>
			<td class="ent_list_name">bool CBaseEntity -> OnTakeDamage(handle ''info'')</td>
			<td class="ent_list_summary">Called when the entity takes damage (OnTakeDamage). Returning false makes the entity cancel the damage, similar to a damage filter. This is called after any damage filter operations.</td>
		</tr>
		<tr>
			<td class="ent_list_name">UpdateOnRemove</td>
			<td class="ent_list_name">void CBaseEntity -> UpdateOnRemove()</td>
			<td class="ent_list_summary">Called when the entity is being removed.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VPhysicsCollision</td>
			<td class="ent_list_name">void CBaseEntity -> VPhysicsCollision(handle ''entity'', float ''speed'', Vector ''point'', Vector ''normal'')</td>
			<td class="ent_list_summary">Called for every single VPhysics-related collision experienced by this entity.</td>
		</tr>
	</tbody>
</table>

<h3 id="CBaseAnimating">CBaseAnimating</h3>
*Extends <a href="#CBaseEntity">CBaseEntity</a>*

Animating models

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">BecomeRagdollOnClient</td>
			<td class="ent_list_name">bool CBaseAnimating::BecomeRagdollOnClient(Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">CanBecomeRagdoll</td>
			<td class="ent_list_name">bool CBaseAnimating::CanBecomeRagdoll()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Dissolve</td>
			<td class="ent_list_name">bool CBaseAnimating::Dissolve(string, float, bool, int, Vector, int)</td>
			<td class="ent_list_summary">Use 'sprites/blueglow1.vmt' for the default material, Time() for the default start time, false for npcOnly if you don't want it to check if the entity is a NPC first, 0 for the default dissolve type, Vector(0,0,0) for the default dissolver origin, and 0 for the default magnitude.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindBodygroupByName</td>
			<td class="ent_list_name">int CBaseAnimating::FindBodygroupByName(string)</td>
			<td class="ent_list_summary">Finds a bodygroup by name</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAttachmentAngles</td>
			<td class="ent_list_name">Vector CBaseAnimating::GetAttachmentAngles(int)</td>
			<td class="ent_list_summary">Get the attachement id's angles as a p,y,r vector</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAttachmentMatrix</td>
			<td class="ent_list_name">handle CBaseAnimating::GetAttachmentMatrix(int)</td>
			<td class="ent_list_summary">Get the attachement id's matrix transform</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAttachmentOrigin</td>
			<td class="ent_list_name">Vector CBaseAnimating::GetAttachmentOrigin(int)</td>
			<td class="ent_list_summary">Get the attachement id's origin vector</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetBodygroup</td>
			<td class="ent_list_name">int CBaseAnimating::GetBodygroup(int)</td>
			<td class="ent_list_summary">Gets a bodygroup</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetBodygroupCount</td>
			<td class="ent_list_name">int CBaseAnimating::GetBodygroupCount(int)</td>
			<td class="ent_list_summary">Gets the number of models in a bodygroup</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetBodygroupName</td>
			<td class="ent_list_name">string CBaseAnimating::GetBodygroupName(int)</td>
			<td class="ent_list_summary">Gets a bodygroup name</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetBoneTransform</td>
			<td class="ent_list_name">void CBaseAnimating::GetBoneTransform(int, handle)</td>
			<td class="ent_list_summary">Get the transform for the specified bone</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetCycle</td>
			<td class="ent_list_name">float CBaseAnimating::GetCycle()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetModelScale</td>
			<td class="ent_list_name">float CBaseAnimating::GetModelScale()</td>
			<td class="ent_list_summary">Gets the model's scale</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNumBodyGroups</td>
			<td class="ent_list_name">int CBaseAnimating::GetNumBodyGroups()</td>
			<td class="ent_list_summary">Gets the number of bodygroups</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNumBones</td>
			<td class="ent_list_name">int CBaseAnimating::GetNumBones()</td>
			<td class="ent_list_summary">Get the number of bones</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPhysicsBone</td>
			<td class="ent_list_name">int CBaseAnimating::GetPhysicsBone(int)</td>
			<td class="ent_list_summary">Get physics bone from bone index</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPlaybackRate</td>
			<td class="ent_list_name">float CBaseAnimating::GetPlaybackRate()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPoseParameter</td>
			<td class="ent_list_name">float CBaseAnimating::GetPoseParameter(string)</td>
			<td class="ent_list_summary">Get the specified pose parameter's value</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSequence</td>
			<td class="ent_list_name">int CBaseAnimating::GetSequence()</td>
			<td class="ent_list_summary">Gets the current sequence</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSequenceActivity</td>
			<td class="ent_list_name">int CBaseAnimating::GetSequenceActivity(int)</td>
			<td class="ent_list_summary">Gets the activity ID of the specified sequence index</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSequenceActivityName</td>
			<td class="ent_list_name">string CBaseAnimating::GetSequenceActivityName(int)</td>
			<td class="ent_list_summary">Gets the activity name of the specified sequence index</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSequenceKeyValues</td>
			<td class="ent_list_name">handle CBaseAnimating::GetSequenceKeyValues(int)</td>
			<td class="ent_list_summary">Get a KeyValue class instance on the specified sequence</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSequenceMoveDist</td>
			<td class="ent_list_name">float CBaseAnimating::GetSequenceMoveDist(int)</td>
			<td class="ent_list_summary">Gets the move distance of the specified sequence</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSequenceMoveYaw</td>
			<td class="ent_list_name">float CBaseAnimating::GetSequenceMoveYaw(int)</td>
			<td class="ent_list_summary">Gets the move yaw of the specified sequence</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSequenceName</td>
			<td class="ent_list_name">string CBaseAnimating::GetSequenceName(int)</td>
			<td class="ent_list_summary">Gets the name of the specified sequence index</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSkin</td>
			<td class="ent_list_name">int CBaseAnimating::GetSkin()</td>
			<td class="ent_list_summary">Gets the model's skin</td>
		</tr>
		<tr>
			<td class="ent_list_name">Ignite</td>
			<td class="ent_list_name">void CBaseAnimating::Ignite(float, bool, float, bool)</td>
			<td class="ent_list_summary">'NPCOnly' only lets this fall through if the entity is a NPC and 'CalledByLevelDesigner' determines whether to treat this like the Ignite input or just an internal ignition call.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsRagdoll</td>
			<td class="ent_list_name">bool CBaseAnimating::IsRagdoll()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsSequenceFinished</td>
			<td class="ent_list_name">bool CBaseAnimating::IsSequenceFinished()</td>
			<td class="ent_list_summary">Ask whether the main sequence is done playing</td>
		</tr>
		<tr>
			<td class="ent_list_name">LookupActivity</td>
			<td class="ent_list_name">int CBaseAnimating::LookupActivity(string)</td>
			<td class="ent_list_summary">Gets the ID of the specified activity name</td>
		</tr>
		<tr>
			<td class="ent_list_name">LookupAttachment</td>
			<td class="ent_list_name">int CBaseAnimating::LookupAttachment(string)</td>
			<td class="ent_list_summary">Get the named attachement id</td>
		</tr>
		<tr>
			<td class="ent_list_name">LookupBone</td>
			<td class="ent_list_name">int CBaseAnimating::LookupBone(string)</td>
			<td class="ent_list_summary">Get the named bone id</td>
		</tr>
		<tr>
			<td class="ent_list_name">LookupSequence</td>
			<td class="ent_list_name">int CBaseAnimating::LookupSequence(string)</td>
			<td class="ent_list_summary">Gets the index of the specified sequence name</td>
		</tr>
		<tr>
			<td class="ent_list_name">ResetSequenceInfo</td>
			<td class="ent_list_name">void CBaseAnimating::ResetSequenceInfo()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Scorch</td>
			<td class="ent_list_name">void CBaseAnimating::Scorch(int, int)</td>
			<td class="ent_list_summary">Makes the entity darker from scorching</td>
		</tr>
		<tr>
			<td class="ent_list_name">SelectHeaviestSequence</td>
			<td class="ent_list_name">int CBaseAnimating::SelectHeaviestSequence(int)</td>
			<td class="ent_list_summary">Selects the sequence with the heaviest weight for the specified activity ID</td>
		</tr>
		<tr>
			<td class="ent_list_name">SelectWeightedSequence</td>
			<td class="ent_list_name">int CBaseAnimating::SelectWeightedSequence(int, int)</td>
			<td class="ent_list_summary">Selects a sequence for the specified activity ID</td>
		</tr>
		<tr>
			<td class="ent_list_name">SequenceDuration</td>
			<td class="ent_list_name">float CBaseAnimating::SequenceDuration(int)</td>
			<td class="ent_list_summary">Get the specified sequence duration</td>
		</tr>
		<tr>
			<td class="ent_list_name">SequenceHasMovement</td>
			<td class="ent_list_name">bool CBaseAnimating::SequenceHasMovement(int)</td>
			<td class="ent_list_summary">Checks if the specified sequence has movement</td>
		</tr>
		<tr>
			<td class="ent_list_name">SequenceLoops</td>
			<td class="ent_list_name">bool CBaseAnimating::SequenceLoops()</td>
			<td class="ent_list_summary">Does the current sequence loop?</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetBodygroup</td>
			<td class="ent_list_name">void CBaseAnimating::SetBodygroup(int, int)</td>
			<td class="ent_list_summary">Sets a bodygroup</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetCycle</td>
			<td class="ent_list_name">void CBaseAnimating::SetCycle(float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetModelScale</td>
			<td class="ent_list_name">void CBaseAnimating::SetModelScale(float, float)</td>
			<td class="ent_list_summary">Sets the model's scale with the specified change duration</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPlaybackRate</td>
			<td class="ent_list_name">void CBaseAnimating::SetPlaybackRate(float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPoseParameter</td>
			<td class="ent_list_name">void CBaseAnimating::SetPoseParameter(string, float)</td>
			<td class="ent_list_summary">Set the specified pose parameter to the specified value</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSequence</td>
			<td class="ent_list_name">void CBaseAnimating::SetSequence(int)</td>
			<td class="ent_list_summary">Sets the current sequence</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSkin</td>
			<td class="ent_list_name">void CBaseAnimating::SetSkin(int)</td>
			<td class="ent_list_summary">Sets the model's skin</td>
		</tr>
		<tr>
			<td class="ent_list_name">StudioFrameAdvance</td>
			<td class="ent_list_name">void CBaseAnimating::StudioFrameAdvance()</td>
			<td class="ent_list_summary"></td>
		</tr>
	</tbody>
</table>

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">HandleAnimEvent</td>
			<td class="ent_list_name">bool CBaseAnimating -> HandleAnimEvent(handle ''event'')</td>
			<td class="ent_list_summary">Called when handling animation events. Return false to cancel base handling.</td>
		</tr>
		<tr>
			<td class="ent_list_name">OnServerRagdoll</td>
			<td class="ent_list_name">void CBaseAnimating -> OnServerRagdoll(handle ''ragdoll'', bool ''submodel'')</td>
			<td class="ent_list_summary">Called when this entity creates/turns into a server-side ragdoll.</td>
		</tr>
	</tbody>
</table>

<h3 id="CBaseAnimatingOverlay">CBaseAnimatingOverlay</h3>
*Extends <a href="#CBaseAnimating">CBaseAnimating</a>*

Animating models which support dynamic animation layers/overlays.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AddGesture</td>
			<td class="ent_list_name">int CBaseAnimatingOverlay::AddGesture(string, bool)</td>
			<td class="ent_list_summary">Adds a new animation layer using the specified activity name.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AddGestureID</td>
			<td class="ent_list_name">int CBaseAnimatingOverlay::AddGestureID(int, bool)</td>
			<td class="ent_list_summary">Adds a new animation layer using the specified activity index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AddGestureSequence</td>
			<td class="ent_list_name">int CBaseAnimatingOverlay::AddGestureSequence(string, bool)</td>
			<td class="ent_list_summary">Adds a new animation layer using the specified activity name.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AddGestureSequenceID</td>
			<td class="ent_list_name">int CBaseAnimatingOverlay::AddGestureSequenceID(int, bool)</td>
			<td class="ent_list_summary">Adds a new animation layer using the specified sequence index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FastRemoveLayer</td>
			<td class="ent_list_name">void CBaseAnimatingOverlay::FastRemoveLayer(int)</td>
			<td class="ent_list_summary">Removes the specified layer index immediately.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindGestureLayer</td>
			<td class="ent_list_name">int CBaseAnimatingOverlay::FindGestureLayer(string)</td>
			<td class="ent_list_summary">Finds and returns the first active animation layer which uses the specified activity name.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindGestureLayerByID</td>
			<td class="ent_list_name">int CBaseAnimatingOverlay::FindGestureLayerByID(int)</td>
			<td class="ent_list_summary">Finds and returns the first active animation layer which uses the specified activity index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetLayerActivity</td>
			<td class="ent_list_name">string CBaseAnimatingOverlay::GetLayerActivity(int)</td>
			<td class="ent_list_summary">Gets the activity name of the specified layer index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetLayerActivityID</td>
			<td class="ent_list_name">int CBaseAnimatingOverlay::GetLayerActivityID(int)</td>
			<td class="ent_list_summary">Gets the activity index of the specified layer index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetLayerCycle</td>
			<td class="ent_list_name">float CBaseAnimatingOverlay::GetLayerCycle(int)</td>
			<td class="ent_list_summary">Gets the cycle of the specified layer index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetLayerDuration</td>
			<td class="ent_list_name">float CBaseAnimatingOverlay::GetLayerDuration(int)</td>
			<td class="ent_list_summary">Gets the duration of the specified layer index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetLayerSequence</td>
			<td class="ent_list_name">int CBaseAnimatingOverlay::GetLayerSequence(int)</td>
			<td class="ent_list_summary">Gets the sequence index of the specified layer index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetLayerWeight</td>
			<td class="ent_list_name">float CBaseAnimatingOverlay::GetLayerWeight(int)</td>
			<td class="ent_list_summary">Gets the weight of the specified layer index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNumAnimOverlays</td>
			<td class="ent_list_name">int CBaseAnimatingOverlay::GetNumAnimOverlays()</td>
			<td class="ent_list_summary">Gets the current number of animation layers.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasActiveLayer</td>
			<td class="ent_list_name">bool CBaseAnimatingOverlay::HasActiveLayer()</td>
			<td class="ent_list_summary">Returns true if there is currently an active layer.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsValidLayer</td>
			<td class="ent_list_name">bool CBaseAnimatingOverlay::IsValidLayer(int)</td>
			<td class="ent_list_summary">Returns true if the specified layer index is valid.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveAllGestures</td>
			<td class="ent_list_name">void CBaseAnimatingOverlay::RemoveAllGestures()</td>
			<td class="ent_list_summary">Removes all animation layers.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveLayer</td>
			<td class="ent_list_name">void CBaseAnimatingOverlay::RemoveLayer(int, float, float)</td>
			<td class="ent_list_summary">Removes the specified layer index with the specified kill rate and delay.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetLayerAutokill</td>
			<td class="ent_list_name">void CBaseAnimatingOverlay::SetLayerAutokill(int, bool)</td>
			<td class="ent_list_summary">Sets whether or not the specified layer index should remove itself when it's finished playing.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetLayerBlendIn</td>
			<td class="ent_list_name">void CBaseAnimatingOverlay::SetLayerBlendIn(int, float)</td>
			<td class="ent_list_summary">Sets the fade-in of the specified layer index, with the fade being a 0-1 fraction of the cycle.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetLayerBlendOut</td>
			<td class="ent_list_name">void CBaseAnimatingOverlay::SetLayerBlendOut(int, float)</td>
			<td class="ent_list_summary">Sets the fade-out of the specified layer index, with the fade being a 0-1 fraction of the cycle.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetLayerCycle</td>
			<td class="ent_list_name">void CBaseAnimatingOverlay::SetLayerCycle(int, float)</td>
			<td class="ent_list_summary">Sets the cycle of the specified layer index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetLayerDuration</td>
			<td class="ent_list_name">void CBaseAnimatingOverlay::SetLayerDuration(int, float)</td>
			<td class="ent_list_summary">Sets the duration of the specified layer index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetLayerLooping</td>
			<td class="ent_list_name">void CBaseAnimatingOverlay::SetLayerLooping(int, bool)</td>
			<td class="ent_list_summary">Sets whether or not the specified layer index should loop.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetLayerNoEvents</td>
			<td class="ent_list_name">void CBaseAnimatingOverlay::SetLayerNoEvents(int, bool)</td>
			<td class="ent_list_summary">Sets whether or not the specified layer index should fire animation events.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetLayerNoRestore</td>
			<td class="ent_list_name">void CBaseAnimatingOverlay::SetLayerNoRestore(int, bool)</td>
			<td class="ent_list_summary">Sets whether or not the specified layer index should restore after a save is loaded.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetLayerPlaybackRate</td>
			<td class="ent_list_name">void CBaseAnimatingOverlay::SetLayerPlaybackRate(int, float)</td>
			<td class="ent_list_summary">Sets the playback rate of the specified layer index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetLayerWeight</td>
			<td class="ent_list_name">void CBaseAnimatingOverlay::SetLayerWeight(int, float)</td>
			<td class="ent_list_summary">Sets the weight of the specified layer index.</td>
		</tr>
	</tbody>
</table>

<h3 id="CBaseFlex">CBaseFlex</h3>
*Extends <a href="#CBaseAnimatingOverlay">CBaseAnimatingOverlay</a>*

Animated characters who have vertex flex capability.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetCurrentScene</td>
			<td class="ent_list_name">handle CBaseFlex::GetCurrentScene()</td>
			<td class="ent_list_summary">Returns the instance of the oldest active scene entity (if any).</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSceneByIndex</td>
			<td class="ent_list_name">handle CBaseFlex::GetSceneByIndex(int)</td>
			<td class="ent_list_summary">Returns the instance of the scene entity at the specified index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetViewtarget</td>
			<td class="ent_list_name">void CBaseFlex::SetViewtarget(Vector)</td>
			<td class="ent_list_summary">Sets the entity's eye target.</td>
		</tr>
	</tbody>
</table>

<h3 id="CBaseCombatCharacter">CBaseCombatCharacter</h3>
*Extends <a href="#CBaseFlex">CBaseFlex</a>*

The base class shared by players and NPCs.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AddGlowEffect</td>
			<td class="ent_list_name">void CBaseCombatCharacter::AddGlowEffect()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">BodyAngles</td>
			<td class="ent_list_name">Vector CBaseCombatCharacter::BodyAngles()</td>
			<td class="ent_list_summary">Get the body's angles.</td>
		</tr>
		<tr>
			<td class="ent_list_name">BodyDirection2D</td>
			<td class="ent_list_name">Vector CBaseCombatCharacter::BodyDirection2D()</td>
			<td class="ent_list_summary">Get the body's 2D direction.</td>
		</tr>
		<tr>
			<td class="ent_list_name">BodyDirection3D</td>
			<td class="ent_list_name">Vector CBaseCombatCharacter::BodyDirection3D()</td>
			<td class="ent_list_summary">Get the body's 3D direction.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DoMuzzleFlash</td>
			<td class="ent_list_name">void CBaseCombatCharacter::DoMuzzleFlash()</td>
			<td class="ent_list_summary">Does a muzzle flash.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DropAllWeapons</td>
			<td class="ent_list_name">void CBaseCombatCharacter::DropAllWeapons(bool)</td>
			<td class="ent_list_summary">Make the character drop all of its weapons.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DropWeapon</td>
			<td class="ent_list_name">void CBaseCombatCharacter::DropWeapon(handle)</td>
			<td class="ent_list_summary">Make the character drop the specified weapon entity if they own it.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EntInAimCone</td>
			<td class="ent_list_name">bool CBaseCombatCharacter::EntInAimCone(handle)</td>
			<td class="ent_list_summary">Check if the specified entity is in the character's aim cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EntInViewCone</td>
			<td class="ent_list_name">bool CBaseCombatCharacter::EntInViewCone(handle)</td>
			<td class="ent_list_summary">Check if the specified entity is in the character's viewcone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EquipWeapon</td>
			<td class="ent_list_name">void CBaseCombatCharacter::EquipWeapon(handle)</td>
			<td class="ent_list_summary">Make the character equip the specified weapon entity. If they don't already own the weapon, they will acquire it instantly.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EyeDirection2D</td>
			<td class="ent_list_name">Vector CBaseCombatCharacter::EyeDirection2D()</td>
			<td class="ent_list_summary">Get the eyes' 2D direction.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EyeDirection3D</td>
			<td class="ent_list_name">Vector CBaseCombatCharacter::EyeDirection3D()</td>
			<td class="ent_list_summary">Get the eyes' 3D direction.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindWeapon</td>
			<td class="ent_list_name">handle CBaseCombatCharacter::FindWeapon(string, int)</td>
			<td class="ent_list_summary">Find a specific weapon in the character's inventory by its classname.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetActiveWeapon</td>
			<td class="ent_list_name">handle CBaseCombatCharacter::GetActiveWeapon()</td>
			<td class="ent_list_summary">Get the character's active weapon entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAllWeapons</td>
			<td class="ent_list_name">void CBaseCombatCharacter::GetAllWeapons(handle)</td>
			<td class="ent_list_summary">Get the character's weapon inventory.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAmmoCount</td>
			<td class="ent_list_name">int CBaseCombatCharacter::GetAmmoCount(int)</td>
			<td class="ent_list_summary">Get the ammo count of the specified ammo type.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAttackSpread</td>
			<td class="ent_list_name">Vector CBaseCombatCharacter::GetAttackSpread(handle, handle)</td>
			<td class="ent_list_summary">Get the attack spread.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetCurrentWeaponProficiency</td>
			<td class="ent_list_name">int CBaseCombatCharacter::GetCurrentWeaponProficiency()</td>
			<td class="ent_list_summary">Get the character's current proficiency (accuracy) with their current weapon.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetRelationPriority</td>
			<td class="ent_list_name">int CBaseCombatCharacter::GetRelationPriority(handle)</td>
			<td class="ent_list_summary">Get a character's relationship priority for a specific entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetRelationship</td>
			<td class="ent_list_name">int CBaseCombatCharacter::GetRelationship(handle)</td>
			<td class="ent_list_summary">Get a character's relationship to a specific entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSpreadBias</td>
			<td class="ent_list_name">float CBaseCombatCharacter::GetSpreadBias(handle, handle)</td>
			<td class="ent_list_summary">Get the spread bias.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetVehicleEntity</td>
			<td class="ent_list_name">handle CBaseCombatCharacter::GetVehicleEntity()</td>
			<td class="ent_list_summary">Get the entity for a character's current vehicle if they're in one.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetWeapon</td>
			<td class="ent_list_name">handle CBaseCombatCharacter::GetWeapon(int)</td>
			<td class="ent_list_summary">Get a specific weapon in the character's inventory.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GiveAmmo</td>
			<td class="ent_list_name">int CBaseCombatCharacter::GiveAmmo(int, int, bool)</td>
			<td class="ent_list_summary">Gives the specified amount of the specified ammo type. The third parameter is whether or not to suppress the ammo pickup sound. Returns the amount of ammo actually given, which is 0 if the player's ammo for this type is already full.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HeadDirection2D</td>
			<td class="ent_list_name">Vector CBaseCombatCharacter::HeadDirection2D()</td>
			<td class="ent_list_summary">Get the head's 2D direction.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HeadDirection3D</td>
			<td class="ent_list_name">Vector CBaseCombatCharacter::HeadDirection3D()</td>
			<td class="ent_list_summary">Get the head's 3D direction.</td>
		</tr>
		<tr>
			<td class="ent_list_name">InAimCone</td>
			<td class="ent_list_name">bool CBaseCombatCharacter::InAimCone(Vector)</td>
			<td class="ent_list_summary">Check if the specified position is in the character's aim cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">InViewCone</td>
			<td class="ent_list_name">bool CBaseCombatCharacter::InViewCone(Vector)</td>
			<td class="ent_list_summary">Check if the specified position is in the character's viewcone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsGlowEffectActive</td>
			<td class="ent_list_name">bool CBaseCombatCharacter::IsGlowEffectActive()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">LastHitGroup</td>
			<td class="ent_list_name">int CBaseCombatCharacter::LastHitGroup()</td>
			<td class="ent_list_summary">Get the last hitgroup.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveAmmo</td>
			<td class="ent_list_name">void CBaseCombatCharacter::RemoveAmmo(int, int)</td>
			<td class="ent_list_summary">Removes the specified amount of the specified ammo type.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveGlowEffect</td>
			<td class="ent_list_name">void CBaseCombatCharacter::RemoveGlowEffect()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetAmmoCount</td>
			<td class="ent_list_name">void CBaseCombatCharacter::SetAmmoCount(int, int)</td>
			<td class="ent_list_summary">Set the ammo count of the specified ammo type.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetClassRelationship</td>
			<td class="ent_list_name">void CBaseCombatCharacter::SetClassRelationship(int, int, int)</td>
			<td class="ent_list_summary">Set a character's relationship with a specific Classify() class.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetGlowColor</td>
			<td class="ent_list_name">void CBaseCombatCharacter::SetGlowColor(float, float, float, float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetRelationship</td>
			<td class="ent_list_name">void CBaseCombatCharacter::SetRelationship(handle, int, int)</td>
			<td class="ent_list_summary">Set a character's relationship with a specific entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ShootPosition</td>
			<td class="ent_list_name">Vector CBaseCombatCharacter::ShootPosition()</td>
			<td class="ent_list_summary">Get the character's shoot position.</td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponCount</td>
			<td class="ent_list_name">int CBaseCombatCharacter::WeaponCount()</td>
			<td class="ent_list_summary">Get the number of weapons a character possesses.</td>
		</tr>
	</tbody>
</table>

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">RelationshipPriority</td>
			<td class="ent_list_name">int CBaseCombatCharacter -> RelationshipPriority(handle ''entity'', int ''def'')</td>
			<td class="ent_list_summary">Called when a character's relationship priority for another entity is requested. Returning a number will make the game use that priority instead of the default priority. (note: 'default' in this case includes overrides from ai_relationship/SetRelationship)</td>
		</tr>
		<tr>
			<td class="ent_list_name">RelationshipType</td>
			<td class="ent_list_name">int CBaseCombatCharacter -> RelationshipType(handle ''entity'', int ''def'')</td>
			<td class="ent_list_summary">Called when a character's relationship to another entity is requested. Returning a disposition will make the game use that disposition instead of the default relationship. (note: 'default' in this case includes overrides from ai_relationship/SetRelationship)</td>
		</tr>
	</tbody>
</table>

<h3 id="CBaseCombatWeapon">CBaseCombatWeapon</h3>
*Extends <a href="#CBaseAnimating">CBaseAnimating</a>*

The base class for all equippable weapons.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AddViewKick</td>
			<td class="ent_list_name">void CBaseCombatWeapon::AddViewKick()</td>
			<td class="ent_list_summary">Applies the weapon's view kick.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AltFiresUnderwater</td>
			<td class="ent_list_name">bool CBaseCombatWeapon::AltFiresUnderwater()</td>
			<td class="ent_list_summary">Returns true if this weapon can alt-fire underwater.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CanBePickedUpByNPCs</td>
			<td class="ent_list_name">bool CBaseCombatWeapon::CanBePickedUpByNPCs()</td>
			<td class="ent_list_summary">Check if the weapon can be picked up by NPCs.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CapabilitiesGet</td>
			<td class="ent_list_name">int CBaseCombatWeapon::CapabilitiesGet()</td>
			<td class="ent_list_summary">Get the capabilities the weapon currently possesses.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Clip1</td>
			<td class="ent_list_name">int CBaseCombatWeapon::Clip1()</td>
			<td class="ent_list_summary">Get the weapon's current primary ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Clip2</td>
			<td class="ent_list_name">int CBaseCombatWeapon::Clip2()</td>
			<td class="ent_list_summary">Get the weapon's current secondary ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FireDuration</td>
			<td class="ent_list_name">float CBaseCombatWeapon::FireDuration()</td>
			<td class="ent_list_summary">Returns the amount of time that the weapon has sustained firing.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FiresUnderwater</td>
			<td class="ent_list_name">bool CBaseCombatWeapon::FiresUnderwater()</td>
			<td class="ent_list_summary">Returns true if this weapon can fire underwater.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetBulletSpread</td>
			<td class="ent_list_name">Vector CBaseCombatWeapon::GetBulletSpread()</td>
			<td class="ent_list_summary">Returns the weapon's default bullet spread.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetBulletSpreadForProficiency</td>
			<td class="ent_list_name">Vector CBaseCombatWeapon::GetBulletSpreadForProficiency(int)</td>
			<td class="ent_list_summary">Returns the weapon's bullet spread for the specified proficiency level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDefaultAnimSpeed</td>
			<td class="ent_list_name">float CBaseCombatWeapon::GetDefaultAnimSpeed()</td>
			<td class="ent_list_summary">Returns the weapon's default animation speed.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDefaultClip1</td>
			<td class="ent_list_name">int CBaseCombatWeapon::GetDefaultClip1()</td>
			<td class="ent_list_summary">Get the weapon's default primary ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDefaultClip2</td>
			<td class="ent_list_name">int CBaseCombatWeapon::GetDefaultClip2()</td>
			<td class="ent_list_summary">Get the weapon's default secondary ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDrawActivity</td>
			<td class="ent_list_name">int CBaseCombatWeapon::GetDrawActivity()</td>
			<td class="ent_list_summary">Returns the weapon's draw activity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDroppedModel</td>
			<td class="ent_list_name">string CBaseCombatWeapon::GetDroppedModel()</td>
			<td class="ent_list_summary">Get the weapon's unique dropped model if it has one.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFireRate</td>
			<td class="ent_list_name">float CBaseCombatWeapon::GetFireRate()</td>
			<td class="ent_list_summary">Get the weapon's firing rate.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetHandRig</td>
			<td class="ent_list_name">int CBaseCombatWeapon::GetHandRig()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMaxClip1</td>
			<td class="ent_list_name">int CBaseCombatWeapon::GetMaxClip1()</td>
			<td class="ent_list_summary">Get the weapon's maximum primary ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMaxClip2</td>
			<td class="ent_list_name">int CBaseCombatWeapon::GetMaxClip2()</td>
			<td class="ent_list_summary">Get the weapon's maximum secondary ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetOwner</td>
			<td class="ent_list_name">handle CBaseCombatWeapon::GetOwner()</td>
			<td class="ent_list_summary">Get the weapon's owner.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPrimaryAmmoType</td>
			<td class="ent_list_name">int CBaseCombatWeapon::GetPrimaryAmmoType()</td>
			<td class="ent_list_summary">Get the weapon's primary ammo type.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPrimaryAttackActivity</td>
			<td class="ent_list_name">int CBaseCombatWeapon::GetPrimaryAttackActivity()</td>
			<td class="ent_list_summary">Returns the weapon's primary attack activity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPrintName</td>
			<td class="ent_list_name">string CBaseCombatWeapon::GetPrintName()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSecondaryAmmoType</td>
			<td class="ent_list_name">int CBaseCombatWeapon::GetSecondaryAmmoType()</td>
			<td class="ent_list_summary">Get the weapon's secondary ammo type.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSecondaryAttackActivity</td>
			<td class="ent_list_name">int CBaseCombatWeapon::GetSecondaryAttackActivity()</td>
			<td class="ent_list_summary">Returns the weapon's secondary attack activity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSubType</td>
			<td class="ent_list_name">int CBaseCombatWeapon::GetSubType()</td>
			<td class="ent_list_summary">Get the weapon's subtype.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetViewModel</td>
			<td class="ent_list_name">string CBaseCombatWeapon::GetViewModel(int)</td>
			<td class="ent_list_summary">Get the weapon's view model.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetViewModelSequenceDuration</td>
			<td class="ent_list_name">float CBaseCombatWeapon::GetViewModelSequenceDuration()</td>
			<td class="ent_list_summary">Gets the sequence duration of the current view model animation.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetWeaponIdleTime</td>
			<td class="ent_list_name">float CBaseCombatWeapon::GetWeaponIdleTime()</td>
			<td class="ent_list_summary">Returns the next time WeaponIdle() will run.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetWeight</td>
			<td class="ent_list_name">int CBaseCombatWeapon::GetWeight()</td>
			<td class="ent_list_summary">Get the weapon's weight.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetWorldModel</td>
			<td class="ent_list_name">string CBaseCombatWeapon::GetWorldModel()</td>
			<td class="ent_list_summary">Get the weapon's world model.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GiveDefaultAmmo</td>
			<td class="ent_list_name">void CBaseCombatWeapon::GiveDefaultAmmo()</td>
			<td class="ent_list_summary">Fill the weapon back up to default ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasAnyAmmo</td>
			<td class="ent_list_name">bool CBaseCombatWeapon::HasAnyAmmo()</td>
			<td class="ent_list_summary">Check if the weapon currently has ammo or doesn't need ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasPrimaryAmmo</td>
			<td class="ent_list_name">bool CBaseCombatWeapon::HasPrimaryAmmo()</td>
			<td class="ent_list_summary">Check if the weapon currently has ammo or doesn't need primary ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasSecondaryAmmo</td>
			<td class="ent_list_name">bool CBaseCombatWeapon::HasSecondaryAmmo()</td>
			<td class="ent_list_summary">Check if the weapon currently has ammo or doesn't need secondary ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasWeaponIdleTimeElapsed</td>
			<td class="ent_list_name">bool CBaseCombatWeapon::HasWeaponIdleTimeElapsed()</td>
			<td class="ent_list_summary">Returns true if the idle time has elapsed.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsViewModelSequenceFinished</td>
			<td class="ent_list_name">bool CBaseCombatWeapon::IsViewModelSequenceFinished()</td>
			<td class="ent_list_summary">Returns true if the current view model animation is finished.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MinRange1</td>
			<td class="ent_list_name">float CBaseCombatWeapon::MinRange1()</td>
			<td class="ent_list_summary">Returns the closest this weapon can be used.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MinRange2</td>
			<td class="ent_list_name">float CBaseCombatWeapon::MinRange2()</td>
			<td class="ent_list_summary">Returns the closest this weapon can be used.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NextPrimaryAttack</td>
			<td class="ent_list_name">float CBaseCombatWeapon::NextPrimaryAttack()</td>
			<td class="ent_list_summary">Returns the next time PrimaryAttack() will run when the player is pressing +ATTACK.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NextSecondaryAttack</td>
			<td class="ent_list_name">float CBaseCombatWeapon::NextSecondaryAttack()</td>
			<td class="ent_list_summary">Returns the next time SecondaryAttack() will run when the player is pressing +ATTACK2.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ReloadsSingly</td>
			<td class="ent_list_name">bool CBaseCombatWeapon::ReloadsSingly()</td>
			<td class="ent_list_summary">Returns true if this weapon reloads 1 round at a time.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SendWeaponAnim</td>
			<td class="ent_list_name">bool CBaseCombatWeapon::SendWeaponAnim(int)</td>
			<td class="ent_list_summary">Sends a weapon animation.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetAltFiresUnderwater</td>
			<td class="ent_list_name">void CBaseCombatWeapon::SetAltFiresUnderwater(bool)</td>
			<td class="ent_list_summary">Sets whether this weapon can alt-fire underwater.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetClip1</td>
			<td class="ent_list_name">void CBaseCombatWeapon::SetClip1(int)</td>
			<td class="ent_list_summary">Set the weapon's current primary ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetClip2</td>
			<td class="ent_list_name">void CBaseCombatWeapon::SetClip2(int)</td>
			<td class="ent_list_summary">Set the weapon's current secondary ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetFireDuration</td>
			<td class="ent_list_name">void CBaseCombatWeapon::SetFireDuration(float)</td>
			<td class="ent_list_summary">Sets the amount of time that the weapon has sustained firing.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetFiresUnderwater</td>
			<td class="ent_list_name">void CBaseCombatWeapon::SetFiresUnderwater(bool)</td>
			<td class="ent_list_summary">Sets whether this weapon can fire underwater.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetMinRange1</td>
			<td class="ent_list_name">void CBaseCombatWeapon::SetMinRange1(float)</td>
			<td class="ent_list_summary">Sets the closest this weapon can be used.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetMinRange2</td>
			<td class="ent_list_name">void CBaseCombatWeapon::SetMinRange2(float)</td>
			<td class="ent_list_summary">Sets the closest this weapon can be used.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetNextPrimaryAttack</td>
			<td class="ent_list_name">void CBaseCombatWeapon::SetNextPrimaryAttack(float)</td>
			<td class="ent_list_summary">Sets the next time PrimaryAttack() will run when the player is pressing +ATTACK.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetNextSecondaryAttack</td>
			<td class="ent_list_name">void CBaseCombatWeapon::SetNextSecondaryAttack(float)</td>
			<td class="ent_list_summary">Sets the next time SecondaryAttack() will run when the player is pressing +ATTACK2.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetOwner</td>
			<td class="ent_list_name">void CBaseCombatWeapon::SetOwner(handle)</td>
			<td class="ent_list_summary">Set the weapon's owner.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetReloadsSingly</td>
			<td class="ent_list_name">void CBaseCombatWeapon::SetReloadsSingly(bool)</td>
			<td class="ent_list_summary">Sets whether this weapon reloads 1 round at a time.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSubType</td>
			<td class="ent_list_name">void CBaseCombatWeapon::SetSubType(int)</td>
			<td class="ent_list_summary">Set the weapon's subtype.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetWeaponIdleTime</td>
			<td class="ent_list_name">void CBaseCombatWeapon::SetWeaponIdleTime(float)</td>
			<td class="ent_list_summary">Sets the next time WeaponIdle() will run.</td>
		</tr>
		<tr>
			<td class="ent_list_name">UsesClipsForAmmo1</td>
			<td class="ent_list_name">bool CBaseCombatWeapon::UsesClipsForAmmo1()</td>
			<td class="ent_list_summary">Check if the weapon uses clips for primary ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">UsesClipsForAmmo2</td>
			<td class="ent_list_name">bool CBaseCombatWeapon::UsesClipsForAmmo2()</td>
			<td class="ent_list_summary">Check if the weapon uses clips for secondary ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">UsesHands</td>
			<td class="ent_list_name">bool CBaseCombatWeapon::UsesHands()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">UsesPrimaryAmmo</td>
			<td class="ent_list_name">bool CBaseCombatWeapon::UsesPrimaryAmmo()</td>
			<td class="ent_list_summary">Check if the weapon uses primary ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">UsesSecondaryAmmo</td>
			<td class="ent_list_name">bool CBaseCombatWeapon::UsesSecondaryAmmo()</td>
			<td class="ent_list_summary">Check if the weapon uses secondary ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponClassify</td>
			<td class="ent_list_name">int CBaseCombatWeapon::WeaponClassify()</td>
			<td class="ent_list_summary">Returns the weapon's classify class from the WEPCLASS_ constant group</td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound</td>
			<td class="ent_list_name">void CBaseCombatWeapon::WeaponSound(int, float)</td>
			<td class="ent_list_summary">Plays one of the weapon's sounds.</td>
		</tr>
	</tbody>
</table>

<h3 id="CBasePlayer">CBasePlayer</h3>
*Extends <a href="#CBaseCombatCharacter">CBaseCombatCharacter</a>*

The player entity.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">DeathCount</td>
			<td class="ent_list_name">int CBasePlayer::DeathCount()</td>
			<td class="ent_list_summary">Gets the number of deaths this player has had in a multiplayer game.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DisableButtons</td>
			<td class="ent_list_name">void CBasePlayer::DisableButtons(int)</td>
			<td class="ent_list_summary">Disables the specified button mask.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EnableButtons</td>
			<td class="ent_list_name">void CBasePlayer::EnableButtons(int)</td>
			<td class="ent_list_summary">Enables the specified button mask if it was disabled before.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FlashlightIsOn</td>
			<td class="ent_list_name">int CBasePlayer::FlashlightIsOn()</td>
			<td class="ent_list_summary">Returns true if the flashlight is on.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FlashlightTurnOff</td>
			<td class="ent_list_name">void CBasePlayer::FlashlightTurnOff()</td>
			<td class="ent_list_summary">Turns off the flashlight.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FlashlightTurnOn</td>
			<td class="ent_list_name">void CBasePlayer::FlashlightTurnOn()</td>
			<td class="ent_list_summary">Turns on the flashlight.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ForceButtons</td>
			<td class="ent_list_name">void CBasePlayer::ForceButtons(int)</td>
			<td class="ent_list_summary">Forces the specified button mask.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FragCount</td>
			<td class="ent_list_name">int CBasePlayer::FragCount()</td>
			<td class="ent_list_summary">Gets the number of frags (kills) this player has in a multiplayer game.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetArmor</td>
			<td class="ent_list_name">int CBasePlayer::GetArmor()</td>
			<td class="ent_list_summary">Gets the player's armor.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAutoaimVector</td>
			<td class="ent_list_name">Vector CBasePlayer::GetAutoaimVector(float)</td>
			<td class="ent_list_summary">Gets the player's autoaim shooting direction with the specified scale.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAutoaimVectorCustomMaxDist</td>
			<td class="ent_list_name">Vector CBasePlayer::GetAutoaimVectorCustomMaxDist(float, float)</td>
			<td class="ent_list_summary">Gets the player's autoaim shooting direction with the specified scale and a custom max distance.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetButtonDisabled</td>
			<td class="ent_list_name">int CBasePlayer::GetButtonDisabled()</td>
			<td class="ent_list_summary">Gets the player's currently unusable buttons.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetButtonForced</td>
			<td class="ent_list_name">int CBasePlayer::GetButtonForced()</td>
			<td class="ent_list_summary">Gets the player's currently forced buttons.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetButtonLast</td>
			<td class="ent_list_name">int CBasePlayer::GetButtonLast()</td>
			<td class="ent_list_summary">Gets the player's previously active buttons.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetButtonPressed</td>
			<td class="ent_list_name">int CBasePlayer::GetButtonPressed()</td>
			<td class="ent_list_summary">Gets the player's currently pressed buttons.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetButtonReleased</td>
			<td class="ent_list_name">int CBasePlayer::GetButtonReleased()</td>
			<td class="ent_list_summary">Gets the player's just-released buttons.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetButtons</td>
			<td class="ent_list_name">int CBasePlayer::GetButtons()</td>
			<td class="ent_list_summary">Gets the player's active buttons.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetExpresser</td>
			<td class="ent_list_name">handle CBasePlayer::GetExpresser()</td>
			<td class="ent_list_summary">Gets a handle for this player's expresser.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetEyeForward</td>
			<td class="ent_list_name">Vector CBasePlayer::GetEyeForward()</td>
			<td class="ent_list_summary">Gets the player's forward eye vector.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetEyeRight</td>
			<td class="ent_list_name">Vector CBasePlayer::GetEyeRight()</td>
			<td class="ent_list_summary">Gets the player's right eye vector.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetEyeUp</td>
			<td class="ent_list_name">Vector CBasePlayer::GetEyeUp()</td>
			<td class="ent_list_summary">Gets the player's up eye vector.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFOV</td>
			<td class="ent_list_name">int CBasePlayer::GetFOV()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFOVOwner</td>
			<td class="ent_list_name">handle CBasePlayer::GetFOVOwner()</td>
			<td class="ent_list_summary">Gets current view owner.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetHeldObject</td>
			<td class="ent_list_name">handle CBasePlayer::GetHeldObject()</td>
			<td class="ent_list_summary">Gets the player's currently held object IF it is being held by a gravity gun. To check for the player's held +USE object, use the standalone GetPlayerHeldEntity function.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNetworkIDString</td>
			<td class="ent_list_name">string CBasePlayer::GetNetworkIDString()</td>
			<td class="ent_list_summary">Gets the player's network (i.e. Steam) ID.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPlayerName</td>
			<td class="ent_list_name">string CBasePlayer::GetPlayerName()</td>
			<td class="ent_list_summary">Gets the player's name.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetUseEntity</td>
			<td class="ent_list_name">handle CBasePlayer::GetUseEntity()</td>
			<td class="ent_list_summary">Gets the player's current use entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetUserID</td>
			<td class="ent_list_name">int CBasePlayer::GetUserID()</td>
			<td class="ent_list_summary">Gets the player's user ID.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetViewModel</td>
			<td class="ent_list_name">handle CBasePlayer::GetViewModel(int)</td>
			<td class="ent_list_summary">Returns the viewmodel of the specified index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsConnected</td>
			<td class="ent_list_name">bool CBasePlayer::IsConnected()</td>
			<td class="ent_list_summary">Returns true if this player is connected.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDisconnecting</td>
			<td class="ent_list_name">bool CBasePlayer::IsDisconnecting()</td>
			<td class="ent_list_summary">Returns true if this player is disconnecting.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsNoclipping</td>
			<td class="ent_list_name">bool CBasePlayer::IsNoclipping()</td>
			<td class="ent_list_summary">Returns true if the player is in noclip mode.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsSuitEquipped</td>
			<td class="ent_list_name">bool CBasePlayer::IsSuitEquipped()</td>
			<td class="ent_list_summary">Returns true if this player had the HEV suit equipped.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetArmor</td>
			<td class="ent_list_name">void CBasePlayer::SetArmor(int)</td>
			<td class="ent_list_summary">Sets the player's armor.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetFOV</td>
			<td class="ent_list_name">void CBasePlayer::SetFOV(int, float)</td>
			<td class="ent_list_summary">Sets player FOV regardless of view owner.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetMuzzleFlashTime</td>
			<td class="ent_list_name">void CBasePlayer::SetMuzzleFlashTime(float)</td>
			<td class="ent_list_summary">Sets the player's muzzle flash time for AI.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSuitUpdate</td>
			<td class="ent_list_name">void CBasePlayer::SetSuitUpdate(string, int, int)</td>
			<td class="ent_list_summary">Sets an update for the player's HEV suit.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ShouldAutoaim</td>
			<td class="ent_list_name">bool CBasePlayer::ShouldAutoaim()</td>
			<td class="ent_list_summary">Returns true if the player should be autoaiming.</td>
		</tr>
		<tr>
			<td class="ent_list_name">UnforceButtons</td>
			<td class="ent_list_name">void CBasePlayer::UnforceButtons(int)</td>
			<td class="ent_list_summary">Unforces the specified button mask if it was forced before.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ViewPunch</td>
			<td class="ent_list_name">void CBasePlayer::ViewPunch(Vector)</td>
			<td class="ent_list_summary">Punches the player's view with the specified vector.</td>
		</tr>
	</tbody>
</table>

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">FindUseEntity</td>
			<td class="ent_list_name">handle CBasePlayer -> FindUseEntity(handle ''entity'', bool ''is_radius'')</td>
			<td class="ent_list_summary">Called when finding an entity to use. The 'entity' parameter is for the entity found by the default function. If 'is_radius' is true, then this entity was found by searching in a radius around the cursor, rather than being directly used. Return a different entity to use something else.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PlayerRunCommand</td>
			<td class="ent_list_name">void CBasePlayer -> PlayerRunCommand(handle ''command'')</td>
			<td class="ent_list_summary">Called when running a player command on the server.</td>
		</tr>
	</tbody>
</table>

<h3 id="CHL2_Player">CHL2_Player</h3>
*Extends <a href="#CBasePlayer">CBasePlayer</a>*

The HL2 player entity.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AddAnimStateLayer</td>
			<td class="ent_list_name">void CHL2_Player::AddAnimStateLayer(int, float, float, float, bool, bool)</td>
			<td class="ent_list_summary">Adds a custom sequence index as a misc. layer for the singleplayer anim state, wtih parameters for blending in/out, setting the playback rate, holding the animation at the end, and only playing when the player is still.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AddAuxPower</td>
			<td class="ent_list_name">void CHL2_Player::AddAuxPower(float)</td>
			<td class="ent_list_summary">Adds to the player's available aux power.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AddCustomSuitDevice</td>
			<td class="ent_list_name">void CHL2_Player::AddCustomSuitDevice(int)</td>
			<td class="ent_list_summary">Adds a custom suit device ID. (1-3)</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAuxPower</td>
			<td class="ent_list_name">float CHL2_Player::GetAuxPower()</td>
			<td class="ent_list_summary">Gets the player's available aux power.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFlashlightBattery</td>
			<td class="ent_list_name">float CHL2_Player::GetFlashlightBattery()</td>
			<td class="ent_list_summary">Gets the energy available in the player's flashlight. If the legacy (aux power-based) flashlight is enabled, this returns the aux power.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetProtagonistName</td>
			<td class="ent_list_name">string CHL2_Player::GetProtagonistName()</td>
			<td class="ent_list_summary">Gets the player's protagonist name.</td>
		</tr>
		<tr>
			<td class="ent_list_name">InitCustomSuitDevice</td>
			<td class="ent_list_name">void CHL2_Player::InitCustomSuitDevice(int, float)</td>
			<td class="ent_list_summary">Initializes a custom suit device. (just sets drain rate for now)</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsCustomSuitDeviceActive</td>
			<td class="ent_list_name">bool CHL2_Player::IsCustomSuitDeviceActive(int)</td>
			<td class="ent_list_summary">Checks if a custom suit device is active.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveAuxPower</td>
			<td class="ent_list_name">bool CHL2_Player::RemoveAuxPower(float)</td>
			<td class="ent_list_summary">Removes from the player's available aux power.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveCustomSuitDevice</td>
			<td class="ent_list_name">void CHL2_Player::RemoveCustomSuitDevice(int)</td>
			<td class="ent_list_summary">Removes a custom suit device ID. (1-3)</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetAuxPower</td>
			<td class="ent_list_name">void CHL2_Player::SetAuxPower(float)</td>
			<td class="ent_list_summary">Sets the player's available aux power.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetProtagonist</td>
			<td class="ent_list_name">void CHL2_Player::SetProtagonist(string)</td>
			<td class="ent_list_summary">Sets the player's protagonist entry.</td>
		</tr>
	</tbody>
</table>

<h3 id="CEntities">CEntities</h3>
The global list of entities

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AddCustomProcedural</td>
			<td class="ent_list_name">void CEntities::AddCustomProcedural(string, handle, bool)</td>
			<td class="ent_list_summary">Adds a custom '!' target name. The first parameter is the name of the procedural (which should NOT include the '!'), the second parameter is a function which should support 5 arguments (name, startEntity, searchingEntity, activator, caller), and the third parameter is whether or not this procedural can return multiple entities. Note that these are NOT saved and must be redeclared on restore!</td>
		</tr>
		<tr>
			<td class="ent_list_name">CreateByClassname</td>
			<td class="ent_list_name">handle CEntities::CreateByClassname(string)</td>
			<td class="ent_list_summary">Creates an entity by classname</td>
		</tr>
		<tr>
			<td class="ent_list_name">DisableEntityListening</td>
			<td class="ent_list_name">void CEntities::DisableEntityListening()</td>
			<td class="ent_list_summary">Disables the 'OnEntity' hooks.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EnableEntityListening</td>
			<td class="ent_list_name">void CEntities::EnableEntityListening()</td>
			<td class="ent_list_summary">Enables the 'OnEntity' hooks. This function must be called before using them.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindByClassNearestFacing</td>
			<td class="ent_list_name">handle CEntities::FindByClassNearestFacing(Vector, Vector, float, string)</td>
			<td class="ent_list_summary">Find the nearest entity along the facing direction from the given origin within the angular threshold with the given classname.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindByClassname</td>
			<td class="ent_list_name">handle CEntities::FindByClassname(handle, string)</td>
			<td class="ent_list_summary">Find entities by class name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindByClassnameNearest</td>
			<td class="ent_list_name">handle CEntities::FindByClassnameNearest(string, Vector, float)</td>
			<td class="ent_list_summary">Find entities by class name nearest to a point.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindByClassnameNearest2D</td>
			<td class="ent_list_name">handle CEntities::FindByClassnameNearest2D(string, Vector, float)</td>
			<td class="ent_list_summary">Find entities by class name nearest to a point in 2D space.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindByClassnameWithin</td>
			<td class="ent_list_name">handle CEntities::FindByClassnameWithin(handle, string, Vector, float)</td>
			<td class="ent_list_summary">Find entities by class name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindByClassnameWithinBox</td>
			<td class="ent_list_name">handle CEntities::FindByClassnameWithinBox(handle, string, Vector, Vector)</td>
			<td class="ent_list_summary">Find entities by class name within an AABB. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindByModel</td>
			<td class="ent_list_name">handle CEntities::FindByModel(handle, string)</td>
			<td class="ent_list_summary">Find entities by model name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindByName</td>
			<td class="ent_list_name">handle CEntities::FindByName(handle, string)</td>
			<td class="ent_list_summary">Find entities by name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindByNameNearest</td>
			<td class="ent_list_name">handle CEntities::FindByNameNearest(string, Vector, float)</td>
			<td class="ent_list_summary">Find entities by name nearest to a point.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindByNameWithin</td>
			<td class="ent_list_name">handle CEntities::FindByNameWithin(handle, string, Vector, float)</td>
			<td class="ent_list_summary">Find entities by name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindByTarget</td>
			<td class="ent_list_name">handle CEntities::FindByTarget(handle, string)</td>
			<td class="ent_list_summary">Find entities by targetname. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindInSphere</td>
			<td class="ent_list_name">handle CEntities::FindInSphere(handle, Vector, float)</td>
			<td class="ent_list_summary">Find entities within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search</td>
		</tr>
		<tr>
			<td class="ent_list_name">First</td>
			<td class="ent_list_name">handle CEntities::First()</td>
			<td class="ent_list_summary">Begin an iteration over the list of entities</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetLocalPlayer</td>
			<td class="ent_list_name">handle CEntities::GetLocalPlayer()</td>
			<td class="ent_list_summary">Get local player or listen server host</td>
		</tr>
		<tr>
			<td class="ent_list_name">Next</td>
			<td class="ent_list_name">handle CEntities::Next(handle)</td>
			<td class="ent_list_summary">Continue an iteration over the list of entities, providing reference to a previously found entity</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveCustomProcedural</td>
			<td class="ent_list_name">void CEntities::RemoveCustomProcedural(string)</td>
			<td class="ent_list_summary">Removes a custom '!' target name previously defined with AddCustomProcedural.</td>
		</tr>
	</tbody>
</table>

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">OnEntityCreated</td>
			<td class="ent_list_name">void CEntities -> OnEntityCreated(handle ''entity'')</td>
			<td class="ent_list_summary">Called when an entity is created. Requires EnableEntityListening() to be fired beforehand.</td>
		</tr>
		<tr>
			<td class="ent_list_name">OnEntityDeleted</td>
			<td class="ent_list_name">void CEntities -> OnEntityDeleted(handle ''entity'')</td>
			<td class="ent_list_summary">Called when an entity is deleted. Requires EnableEntityListening() to be fired beforehand.</td>
		</tr>
		<tr>
			<td class="ent_list_name">OnEntitySpawned</td>
			<td class="ent_list_name">void CEntities -> OnEntitySpawned(handle ''entity'')</td>
			<td class="ent_list_summary">Called when an entity spawns. Requires EnableEntityListening() to be fired beforehand.</td>
		</tr>
	</tbody>
</table>

<h3 id="CGameRules">CGameRules</h3>
The container of the game's rules, handling behavior which could be different on a game-by-game basis.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AllowFlashlight</td>
			<td class="ent_list_name">bool CGameRules::AllowFlashlight()</td>
			<td class="ent_list_summary">Returns true if players are allowed to switch on their flashlight.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AllowNPCs</td>
			<td class="ent_list_name">bool CGameRules::AllowNPCs()</td>
			<td class="ent_list_summary">Returns true if NPCs are allowed.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AllowSPRespawn</td>
			<td class="ent_list_name">bool CGameRules::AllowSPRespawn()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">AllowThirdPersonCamera</td>
			<td class="ent_list_name">bool CGameRules::AllowThirdPersonCamera()</td>
			<td class="ent_list_summary">Returns true if third-person camera is allowed.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Damage_IsTimeBased</td>
			<td class="ent_list_name">bool CGameRules::Damage_IsTimeBased(int)</td>
			<td class="ent_list_summary">Damage types that are time-based.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Damage_NoPhysicsForce</td>
			<td class="ent_list_name">bool CGameRules::Damage_NoPhysicsForce(int)</td>
			<td class="ent_list_summary">Damage types that don't have to supply a physics force & position.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Damage_ShouldGibCorpse</td>
			<td class="ent_list_name">bool CGameRules::Damage_ShouldGibCorpse(int)</td>
			<td class="ent_list_summary">Damage types that gib the corpse.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Damage_ShouldNotBleed</td>
			<td class="ent_list_name">bool CGameRules::Damage_ShouldNotBleed(int)</td>
			<td class="ent_list_summary">Damage types that don't make the player bleed.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Damage_ShowOnHUD</td>
			<td class="ent_list_name">bool CGameRules::Damage_ShowOnHUD(int)</td>
			<td class="ent_list_summary">Damage types that have client HUD art.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DefaultFOV</td>
			<td class="ent_list_name">int CGameRules::DefaultFOV()</td>
			<td class="ent_list_summary">Default player FOV in this game.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDamageMultiplier</td>
			<td class="ent_list_name">float CGameRules::GetDamageMultiplier()</td>
			<td class="ent_list_summary">Ammo type damage multiplier.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetGameDescription</td>
			<td class="ent_list_name">string CGameRules::GetGameDescription()</td>
			<td class="ent_list_summary">This is the game description that gets seen in server browsers.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetGameType</td>
			<td class="ent_list_name">int CGameRules::GetGameType()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetGameTypeName</td>
			<td class="ent_list_name">string CGameRules::GetGameTypeName()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSkillLevel</td>
			<td class="ent_list_name">int CGameRules::GetSkillLevel()</td>
			<td class="ent_list_summary">Returns the game's difficulty/skill level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">InRoundRestart</td>
			<td class="ent_list_name">bool CGameRules::InRoundRestart()</td>
			<td class="ent_list_summary">Returns true if the round is restarting.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsCoOp</td>
			<td class="ent_list_name">bool CGameRules::IsCoOp()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDeathmatch</td>
			<td class="ent_list_name">bool CGameRules::IsDeathmatch()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsMultiplayer</td>
			<td class="ent_list_name">bool CGameRules::IsMultiplayer()</td>
			<td class="ent_list_summary">Returns true if this is a multiplayer game (like co-op or deathmatch).</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsSkillLevel</td>
			<td class="ent_list_name">bool CGameRules::IsSkillLevel(int)</td>
			<td class="ent_list_summary">Returns true if the game is set to the specified difficulty/skill level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsTeamplay</td>
			<td class="ent_list_name">bool CGameRules::IsTeamplay()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Name</td>
			<td class="ent_list_name">string CGameRules::Name()</td>
			<td class="ent_list_summary">Gets the name of these rules.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RefreshSkillData</td>
			<td class="ent_list_name">void CGameRules::RefreshSkillData(bool)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSkillLevel</td>
			<td class="ent_list_name">void CGameRules::SetSkillLevel(int)</td>
			<td class="ent_list_summary">Sets the game's difficulty/skill level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ShouldCollide</td>
			<td class="ent_list_name">bool CGameRules::ShouldCollide(int, int)</td>
			<td class="ent_list_summary">Returns whether two collision groups collide with each other in this game.</td>
		</tr>
	</tbody>
</table>

<h3 id="CAmmoDef">CAmmoDef</h3>
The ammo type definition manager.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">DamageForce</td>
			<td class="ent_list_name">float CAmmoDef::DamageForce(int)</td>
			<td class="ent_list_summary">Gets the amount of force this ammo type deals.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DamageType</td>
			<td class="ent_list_name">int CAmmoDef::DamageType(int)</td>
			<td class="ent_list_summary">Gets the type of damage this ammo type deals.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Flags</td>
			<td class="ent_list_name">int CAmmoDef::Flags(int)</td>
			<td class="ent_list_summary">Gets the flags this ammo type uses.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNumAmmoTypes</td>
			<td class="ent_list_name">int CAmmoDef::GetNumAmmoTypes()</td>
			<td class="ent_list_summary">Gets the number of ammo types which currently exist.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Index</td>
			<td class="ent_list_name">int CAmmoDef::Index(string)</td>
			<td class="ent_list_summary">Gets the index of the specified ammo type name.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MaxCarry</td>
			<td class="ent_list_name">int CAmmoDef::MaxCarry(int)</td>
			<td class="ent_list_summary">Gets the maximum amount of this ammo type which players should be able to carry.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MaxSplashSize</td>
			<td class="ent_list_name">int CAmmoDef::MaxSplashSize(int)</td>
			<td class="ent_list_summary">Gets the maximum size of water splashes caused by impacts from this ammo type.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MinSplashSize</td>
			<td class="ent_list_name">int CAmmoDef::MinSplashSize(int)</td>
			<td class="ent_list_summary">Gets the minimum size of water splashes caused by impacts from this ammo type.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NPCDamage</td>
			<td class="ent_list_name">int CAmmoDef::NPCDamage(int)</td>
			<td class="ent_list_summary">Gets the damage NPCs deal for the specified ammo type.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Name</td>
			<td class="ent_list_name">string CAmmoDef::Name(int)</td>
			<td class="ent_list_summary">Gets the name of the specified ammo type index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PlrDamage</td>
			<td class="ent_list_name">int CAmmoDef::PlrDamage(int)</td>
			<td class="ent_list_summary">Gets the damage players deal for the specified ammo type.</td>
		</tr>
		<tr>
			<td class="ent_list_name">TracerType</td>
			<td class="ent_list_name">int CAmmoDef::TracerType(int)</td>
			<td class="ent_list_summary">Gets the type of tracer this ammo type uses.</td>
		</tr>
	</tbody>
</table>

<h3 id="CGlobalState">CGlobalState</h3>
Global state system.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AddGlobal</td>
			<td class="ent_list_name">int CGlobalState::AddGlobal(string, string, int)</td>
			<td class="ent_list_summary">Adds a new global with a specific map name and state. Returns its index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AddToCounter</td>
			<td class="ent_list_name">int CGlobalState::AddToCounter(int, int)</td>
			<td class="ent_list_summary">Adds to the counter of the specified global.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetCounter</td>
			<td class="ent_list_name">int CGlobalState::GetCounter(int)</td>
			<td class="ent_list_summary">Gets the counter of the specified global.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetIndex</td>
			<td class="ent_list_name">int CGlobalState::GetIndex(string)</td>
			<td class="ent_list_summary">Gets the index of the specified global name. Returns -1 if it does not exist.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetState</td>
			<td class="ent_list_name">int CGlobalState::GetState(int)</td>
			<td class="ent_list_summary">Gets the state of the specified global.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetCounter</td>
			<td class="ent_list_name">void CGlobalState::SetCounter(int, int)</td>
			<td class="ent_list_summary">Sets the counter of the specified global.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetState</td>
			<td class="ent_list_name">void CGlobalState::SetState(int, int)</td>
			<td class="ent_list_summary">Sets the state of the specified global.</td>
		</tr>
	</tbody>
</table>

<h3 id="CGlobalSys">CGlobalSys</h3>
GlobalSys

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">CommandLineCheck</td>
			<td class="ent_list_name">bool CGlobalSys::CommandLineCheck(string)</td>
			<td class="ent_list_summary">returns true if the command line param was used, otherwise false.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CommandLineCheckFloat</td>
			<td class="ent_list_name">float CGlobalSys::CommandLineCheckFloat(string)</td>
			<td class="ent_list_summary">returns the command line param as a float.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CommandLineCheckInt</td>
			<td class="ent_list_name">int CGlobalSys::CommandLineCheckInt(string)</td>
			<td class="ent_list_summary">returns the command line param as an int.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CommandLineCheckStr</td>
			<td class="ent_list_name">string CGlobalSys::CommandLineCheckStr(string)</td>
			<td class="ent_list_summary">returns the command line param as a string.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetCommandLine</td>
			<td class="ent_list_name">string CGlobalSys::GetCommandLine()</td>
			<td class="ent_list_summary">returns the command line</td>
		</tr>
	</tbody>
</table>

<h3 id="CDebugOverlayScriptHelper">CDebugOverlayScriptHelper</h3>
CDebugOverlayScriptHelper

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">Axis</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::Axis(Vector, Vector, float, bool, float)</td>
			<td class="ent_list_summary">Draws an axis. Specify origin + orientation in world space.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Box</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::Box(Vector, Vector, Vector, int, int, int, int, float)</td>
			<td class="ent_list_summary">Draws a world-space axis-aligned box. Specify bounds in world space.</td>
		</tr>
		<tr>
			<td class="ent_list_name">BoxAngles</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::BoxAngles(Vector, Vector, Vector, Vector, int, int, int, int, float)</td>
			<td class="ent_list_summary">Draws an oriented box at the origin. Specify bounds in local space.</td>
		</tr>
		<tr>
			<td class="ent_list_name">BoxDirection</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::BoxDirection(Vector, Vector, Vector, Vector, int, int, int, int, float)</td>
			<td class="ent_list_summary">Draw box oriented to a Vector direction</td>
		</tr>
		<tr>
			<td class="ent_list_name">Circle</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::Circle(Vector, Vector, Vector, float, int, int, int, int, bool, float)</td>
			<td class="ent_list_summary">Draws a circle. Specify center in world space.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CircleOriented</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::CircleOriented(Vector, Vector, float, int, int, int, int, bool, float)</td>
			<td class="ent_list_summary">Draws a circle oriented. Specify center in world space.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ClearAllOverlays</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::ClearAllOverlays()</td>
			<td class="ent_list_summary">Clear all debug overlays at once</td>
		</tr>
		<tr>
			<td class="ent_list_name">Cross3D</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::Cross3D(Vector, float, int, int, int, bool, float)</td>
			<td class="ent_list_summary">Draws a world-aligned cross. Specify origin in world space.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Cross3DOriented</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::Cross3DOriented(Vector, Vector, float, int, int, int, bool, float)</td>
			<td class="ent_list_summary">Draws an oriented cross. Specify origin in world space.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DrawTickMarkedLine</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::DrawTickMarkedLine(Vector, Vector, float, int, int, int, int, bool, float)</td>
			<td class="ent_list_summary">Draws a dashed line. Specify endpoints in world space.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EntityBounds</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::EntityBounds(handle, int, int, int, int, float)</td>
			<td class="ent_list_summary">Draws bounds of an entity</td>
		</tr>
		<tr>
			<td class="ent_list_name">EntityText</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::EntityText(int, int, string, float, int, int, int, int)</td>
			<td class="ent_list_summary">Draws text on an entity</td>
		</tr>
		<tr>
			<td class="ent_list_name">EntityTextAtPosition</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::EntityTextAtPosition(Vector, int, string, float, int, int, int, int)</td>
			<td class="ent_list_summary">Draw entity text overlay at a specific position</td>
		</tr>
		<tr>
			<td class="ent_list_name">Grid</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::Grid(Vector)</td>
			<td class="ent_list_summary">Add grid overlay</td>
		</tr>
		<tr>
			<td class="ent_list_name">HorzArrow</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::HorzArrow(Vector, Vector, float, int, int, int, int, bool, float)</td>
			<td class="ent_list_summary">Draws a horizontal arrow. Specify endpoints in world space.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Line</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::Line(Vector, Vector, int, int, int, bool, float)</td>
			<td class="ent_list_summary">Draws a line between two points</td>
		</tr>
		<tr>
			<td class="ent_list_name">ScreenText</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::ScreenText(float, float, string, int, int, int, int, float)</td>
			<td class="ent_list_summary">Draws 2D text. Specify coordinates in screen space.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDebugBits</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::SetDebugBits(handle, int)</td>
			<td class="ent_list_summary">Set debug bits on entity</td>
		</tr>
		<tr>
			<td class="ent_list_name">Sphere</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::Sphere(Vector, float, int, int, int, bool, float)</td>
			<td class="ent_list_summary">Draws a wireframe sphere. Specify center in world space.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SweptBox</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::SweptBox(Vector, Vector, Vector, Vector, Vector, int, int, int, int, float)</td>
			<td class="ent_list_summary">Draws a swept box. Specify endpoints in world space and the bounds in local space.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Text</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::Text(Vector, string, float)</td>
			<td class="ent_list_summary">Draws 2D text. Specify origin in world space.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Triangle</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::Triangle(Vector, Vector, Vector, int, int, int, int, bool, float)</td>
			<td class="ent_list_summary">Draws a filled triangle. Specify vertices in world space.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VertArrow</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::VertArrow(Vector, Vector, float, int, int, int, int, bool, float)</td>
			<td class="ent_list_summary">Draws a vertical arrow. Specify endpoints in world space.</td>
		</tr>
		<tr>
			<td class="ent_list_name">YawArrow</td>
			<td class="ent_list_name">void CDebugOverlayScriptHelper::YawArrow(Vector, float, float, float, int, int, int, int, bool, float)</td>
			<td class="ent_list_summary">Draws a arrow associated with a specific yaw. Specify endpoints in world space.</td>
		</tr>
	</tbody>
</table>

<h3 id="CNetMsg">CNetMsg</h3>
Network messages

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetNumBitsWritten</td>
			<td class="ent_list_name">int CNetMsg::GetNumBitsWritten()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadAngle</td>
			<td class="ent_list_name">float CNetMsg::ReadAngle()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadAngles</td>
			<td class="ent_list_name">Vector CNetMsg::ReadAngles()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadBool</td>
			<td class="ent_list_name">bool CNetMsg::ReadBool()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadByte</td>
			<td class="ent_list_name">int CNetMsg::ReadByte()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadChar</td>
			<td class="ent_list_name">int CNetMsg::ReadChar()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadCoord</td>
			<td class="ent_list_name">float CNetMsg::ReadCoord()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadEHandle</td>
			<td class="ent_list_name">handle CNetMsg::ReadEHandle()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadEntity</td>
			<td class="ent_list_name">handle CNetMsg::ReadEntity()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadFloat</td>
			<td class="ent_list_name">float CNetMsg::ReadFloat()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadInt</td>
			<td class="ent_list_name">int CNetMsg::ReadInt(int)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadLong</td>
			<td class="ent_list_name">int CNetMsg::ReadLong()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadNormal</td>
			<td class="ent_list_name">float CNetMsg::ReadNormal()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadShort</td>
			<td class="ent_list_name">int CNetMsg::ReadShort()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadString</td>
			<td class="ent_list_name">string CNetMsg::ReadString()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadUInt</td>
			<td class="ent_list_name">int CNetMsg::ReadUInt(int)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadVec3Coord</td>
			<td class="ent_list_name">Vector CNetMsg::ReadVec3Coord()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadVec3Normal</td>
			<td class="ent_list_name">Vector CNetMsg::ReadVec3Normal()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ReadWord</td>
			<td class="ent_list_name">int CNetMsg::ReadWord()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Receive</td>
			<td class="ent_list_name">void CNetMsg::Receive(string, handle)</td>
			<td class="ent_list_summary">Set custom network message callback</td>
		</tr>
		<tr>
			<td class="ent_list_name">Reset</td>
			<td class="ent_list_name">void CNetMsg::Reset()</td>
			<td class="ent_list_summary">Reset the current network message buffer</td>
		</tr>
		<tr>
			<td class="ent_list_name">Send</td>
			<td class="ent_list_name">void CNetMsg::Send(handle, bool)</td>
			<td class="ent_list_summary">Send a custom network message from the server to the client (max 251 bytes)</td>
		</tr>
		<tr>
			<td class="ent_list_name">SendEntityMessage</td>
			<td class="ent_list_name">void CNetMsg::SendEntityMessage(handle, bool)</td>
			<td class="ent_list_summary">Send a message from a server side entity to its client side counterpart</td>
		</tr>
		<tr>
			<td class="ent_list_name">SendUserMessage</td>
			<td class="ent_list_name">void CNetMsg::SendUserMessage(handle, string, bool)</td>
			<td class="ent_list_summary">Send a usermessage from the server to the client</td>
		</tr>
		<tr>
			<td class="ent_list_name">Start</td>
			<td class="ent_list_name">void CNetMsg::Start(string)</td>
			<td class="ent_list_summary">Start writing new custom network message</td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteAngle</td>
			<td class="ent_list_name">void CNetMsg::WriteAngle(float)</td>
			<td class="ent_list_summary">8 bit unsigned char</td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteAngles</td>
			<td class="ent_list_name">void CNetMsg::WriteAngles(Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteBool</td>
			<td class="ent_list_name">void CNetMsg::WriteBool(bool)</td>
			<td class="ent_list_summary">1 bit</td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteByte</td>
			<td class="ent_list_name">void CNetMsg::WriteByte(int)</td>
			<td class="ent_list_summary">8 bit unsigned char</td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteChar</td>
			<td class="ent_list_name">void CNetMsg::WriteChar(int)</td>
			<td class="ent_list_summary">8 bit char</td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteCoord</td>
			<td class="ent_list_name">void CNetMsg::WriteCoord(float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteEHandle</td>
			<td class="ent_list_name">void CNetMsg::WriteEHandle(handle)</td>
			<td class="ent_list_summary">32 bit long</td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteEntity</td>
			<td class="ent_list_name">void CNetMsg::WriteEntity(handle)</td>
			<td class="ent_list_summary">11 bit (entindex)</td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteFloat</td>
			<td class="ent_list_name">void CNetMsg::WriteFloat(float)</td>
			<td class="ent_list_summary">32 bit float</td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteInt</td>
			<td class="ent_list_name">void CNetMsg::WriteInt(int, int)</td>
			<td class="ent_list_summary">variable bit signed int</td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteLong</td>
			<td class="ent_list_name">void CNetMsg::WriteLong(int)</td>
			<td class="ent_list_summary">32 bit long</td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteNormal</td>
			<td class="ent_list_name">void CNetMsg::WriteNormal(float)</td>
			<td class="ent_list_summary">12 bit</td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteShort</td>
			<td class="ent_list_name">void CNetMsg::WriteShort(int)</td>
			<td class="ent_list_summary">16 bit short</td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteString</td>
			<td class="ent_list_name">void CNetMsg::WriteString(string)</td>
			<td class="ent_list_summary">max 512 bytes at once</td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteUInt</td>
			<td class="ent_list_name">void CNetMsg::WriteUInt(int, int)</td>
			<td class="ent_list_summary">variable bit unsigned int</td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteVec3Coord</td>
			<td class="ent_list_name">void CNetMsg::WriteVec3Coord(Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteVec3Normal</td>
			<td class="ent_list_name">void CNetMsg::WriteVec3Normal(Vector)</td>
			<td class="ent_list_summary">27 bit</td>
		</tr>
		<tr>
			<td class="ent_list_name">WriteWord</td>
			<td class="ent_list_name">void CNetMsg::WriteWord(int)</td>
			<td class="ent_list_summary">16 bit unsigned short</td>
		</tr>
	</tbody>
</table>

<h3 id="CBaseTrigger">CBaseTrigger</h3>
*Extends <a href="#CBaseEntity">CBaseEntity</a>*

Trigger entity

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">Disable</td>
			<td class="ent_list_name">void CBaseTrigger::Disable()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Enable</td>
			<td class="ent_list_name">void CBaseTrigger::Enable()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetTouchedEntityOfType</td>
			<td class="ent_list_name">handle CBaseTrigger::GetTouchedEntityOfType(string)</td>
			<td class="ent_list_summary">Gets the first touching entity which matches the specified class.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetTouchingEntities</td>
			<td class="ent_list_name">void CBaseTrigger::GetTouchingEntities(handle)</td>
			<td class="ent_list_summary">Gets all entities touching this trigger (and satisfying its criteria). This function copies them to a table with a maximum number of elements.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsTouching</td>
			<td class="ent_list_name">bool CBaseTrigger::IsTouching(handle)</td>
			<td class="ent_list_summary">Checks whether the passed entity is touching the trigger.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PassesTriggerFilters</td>
			<td class="ent_list_name">bool CBaseTrigger::PassesTriggerFilters(handle)</td>
			<td class="ent_list_summary">Returns whether a target entity satisfies the trigger's spawnflags, filter, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PointIsWithin</td>
			<td class="ent_list_name">bool CBaseTrigger::PointIsWithin(Vector)</td>
			<td class="ent_list_summary">Checks if the given vector is within the trigger's volume.</td>
		</tr>
		<tr>
			<td class="ent_list_name">TouchTest</td>
			<td class="ent_list_name">void CBaseTrigger::TouchTest()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">UsesFilter</td>
			<td class="ent_list_name">bool CBaseTrigger::UsesFilter()</td>
			<td class="ent_list_summary">Returns true if this trigger uses a filter.</td>
		</tr>
	</tbody>
</table>

<h3 id="CBaseGrenade">CBaseGrenade</h3>
*Extends <a href="#CBaseAnimating">CBaseAnimating</a>*

The base class for grenades.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetBlastForce</td>
			<td class="ent_list_name">Vector CBaseGrenade::GetBlastForce()</td>
			<td class="ent_list_summary">Gets the grenade's blast force override. Grenades which use base damage force calculations return 0,0,0</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDamage</td>
			<td class="ent_list_name">float CBaseGrenade::GetDamage()</td>
			<td class="ent_list_summary">Gets the grenade's blast damage.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDamageRadius</td>
			<td class="ent_list_name">float CBaseGrenade::GetDamageRadius()</td>
			<td class="ent_list_summary">Gets the grenade's blast damage radius.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetOriginalThrower</td>
			<td class="ent_list_name">handle CBaseGrenade::GetOriginalThrower()</td>
			<td class="ent_list_summary">Gets the grenade's original thrower after the thrower was changed due to being picked up by a gravity gun or something.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetThrower</td>
			<td class="ent_list_name">handle CBaseGrenade::GetThrower()</td>
			<td class="ent_list_summary">Gets the grenade's thrower.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetTimer</td>
			<td class="ent_list_name">float CBaseGrenade::GetTimer()</td>
			<td class="ent_list_summary">Gets the grenade's detonate time if it has one.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetWarnAITime</td>
			<td class="ent_list_name">float CBaseGrenade::GetWarnAITime()</td>
			<td class="ent_list_summary">Gets the time at which the grenade will warn/has warned AI.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasWarnedAI</td>
			<td class="ent_list_name">bool CBaseGrenade::HasWarnedAI()</td>
			<td class="ent_list_summary">Whether or not the grenade has issued its DANGER sound to the world sound list yet.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsLive</td>
			<td class="ent_list_name">bool CBaseGrenade::IsLive()</td>
			<td class="ent_list_summary">Whether or not the grenade has issued its DANGER sound to the world sound list yet.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDamage</td>
			<td class="ent_list_name">void CBaseGrenade::SetDamage(float)</td>
			<td class="ent_list_summary">Sets the grenade's blast damage.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDamageRadius</td>
			<td class="ent_list_name">void CBaseGrenade::SetDamageRadius(float)</td>
			<td class="ent_list_summary">Sets the grenade's blast damage radius.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetThrower</td>
			<td class="ent_list_name">void CBaseGrenade::SetThrower(handle)</td>
			<td class="ent_list_summary">Sets the grenade's thrower.</td>
		</tr>
	</tbody>
</table>

<h3 id="CBaseFilter">CBaseFilter</h3>
*Extends <a href="#CBaseEntity">CBaseEntity</a>*

All entities which could be used as filters.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">BloodAllowed</td>
			<td class="ent_list_name">bool CBaseFilter::BloodAllowed(handle, handle)</td>
			<td class="ent_list_summary">Check if the given caller and damage info allow for the production of blood.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DamageMod</td>
			<td class="ent_list_name">bool CBaseFilter::DamageMod(handle, handle)</td>
			<td class="ent_list_summary">Mods the damage info with the given caller.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PassesDamageFilter</td>
			<td class="ent_list_name">bool CBaseFilter::PassesDamageFilter(handle, handle)</td>
			<td class="ent_list_summary">Check if the given caller and damage info pass the damage filter, with the second parameter being a CTakeDamageInfo instance. The caller is the one who requests the filter result; For example, the entity being damaged when using this as a damage filter.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PassesFilter</td>
			<td class="ent_list_name">bool CBaseFilter::PassesFilter(handle, handle)</td>
			<td class="ent_list_summary">Check if the given caller and entity pass the filter. The caller is the one who requests the filter result; For example, the entity being damaged when using this as a damage filter.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PassesFinalDamageFilter</td>
			<td class="ent_list_name">bool CBaseFilter::PassesFinalDamageFilter(handle, handle)</td>
			<td class="ent_list_summary">Used by filter_damage_redirect to distinguish between standalone filter calls and actually damaging an entity. Returns true if there's no unique behavior. Parameters are identical to PassesDamageFilter.</td>
		</tr>
	</tbody>
</table>

<h3 id="CFilterScript">CFilterScript</h3>
*Extends <a href="#CBaseFilter">CBaseFilter</a>*

The filter_script entity which allows VScript functions to hook onto filter methods.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">BloodAllowed</td>
			<td class="ent_list_name">bool CFilterScript -> BloodAllowed(handle ''caller'', handle ''info'')</td>
			<td class="ent_list_summary">A completely optional hook used by filter_script to determine if a caller is allowed to emit blood after taking damage. Return true if blood should be allowed or false if it should not. If this hook is not defined, it will always return true.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DamageMod</td>
			<td class="ent_list_name">bool CFilterScript -> DamageMod(handle ''caller'', handle ''info'')</td>
			<td class="ent_list_summary">A completely optional hook used by filter_script to modify damage being taken by an entity. You are free to use CTakeDamageInfo functions on the damage info handle and it will change how the caller is damaged. Returning true or false currently has no effect on vanilla code, but you should generally return true if the damage info has been modified by your code and false if it was not. If this hook is not defined, it will always return false.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PassesDamageFilter</td>
			<td class="ent_list_name">bool CFilterScript -> PassesDamageFilter(handle ''caller'', handle ''info'')</td>
			<td class="ent_list_summary">A hook used by filter_script to determine what damage should pass it when it's being used as a damage filter. Return true if the info should pass or false if it should not. If this hook is not defined in a filter_script, damage filter requests will instead check PassesFilter with the attacker as the activator.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PassesFilter</td>
			<td class="ent_list_name">bool CFilterScript -> PassesFilter(handle ''caller'', handle ''activator'')</td>
			<td class="ent_list_summary">A hook used by filter_script to determine what entities should pass it. Return true if the entity should pass or false if it should not. This hook is required for regular filtering.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PassesFinalDamageFilter</td>
			<td class="ent_list_name">bool CFilterScript -> PassesFinalDamageFilter(handle ''caller'', handle ''info'')</td>
			<td class="ent_list_summary">A completely optional hook used by filter_script which only runs when the entity will take damage. This is different from PassesDamageFilter, which is sometimes used in cases where damage is not actually about to be taken. This also runs after a regular PassesDamageFilter check. Return true if the info should pass or false if it should not. If this hook is not defined, it will always return true.</td>
		</tr>
	</tbody>
</table>

<h3 id="CAI_BaseNPC">CAI_BaseNPC</h3>
*Extends <a href="#CBaseCombatCharacter">CBaseCombatCharacter</a>*

The base class all NPCs derive from.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AddSleepFlags</td>
			<td class="ent_list_name">void CAI_BaseNPC::AddSleepFlags(int)</td>
			<td class="ent_list_summary">Add to the NPC's sleep flags. (see AI_SLEEP_ set of constants)</td>
		</tr>
		<tr>
			<td class="ent_list_name">CapabilitiesAdd</td>
			<td class="ent_list_name">int CAI_BaseNPC::CapabilitiesAdd(int)</td>
			<td class="ent_list_summary">Add capabilities to the NPC.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CapabilitiesClear</td>
			<td class="ent_list_name">void CAI_BaseNPC::CapabilitiesClear()</td>
			<td class="ent_list_summary">Clear capabilities for the NPC.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CapabilitiesGet</td>
			<td class="ent_list_name">int CAI_BaseNPC::CapabilitiesGet()</td>
			<td class="ent_list_summary">Get the capabilities the NPC currently possesses.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CapabilitiesRemove</td>
			<td class="ent_list_name">int CAI_BaseNPC::CapabilitiesRemove(int)</td>
			<td class="ent_list_summary">Remove capabilities from the NPC.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ChainRunTask</td>
			<td class="ent_list_name">void CAI_BaseNPC::ChainRunTask(string, float)</td>
			<td class="ent_list_summary">Use with RunTask to redirect to the specified task.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ChainStartTask</td>
			<td class="ent_list_name">void CAI_BaseNPC::ChainStartTask(string, float)</td>
			<td class="ent_list_summary">Use with StartTask to redirect to the specified task.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ClearCondition</td>
			<td class="ent_list_name">void CAI_BaseNPC::ClearCondition(string)</td>
			<td class="ent_list_summary">Clear a condition on the NPC.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ClearConditionID</td>
			<td class="ent_list_name">void CAI_BaseNPC::ClearConditionID(int)</td>
			<td class="ent_list_summary">Clear a condition on the NPC by ID.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ClearCustomInterruptCondition</td>
			<td class="ent_list_name">void CAI_BaseNPC::ClearCustomInterruptCondition(string)</td>
			<td class="ent_list_summary">Use with BuildScheduleTestBits to define conditions which should interrupt the schedule.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ClearEnemyMemory</td>
			<td class="ent_list_name">void CAI_BaseNPC::ClearEnemyMemory(handle)</td>
			<td class="ent_list_summary">Makes the NPC forget about the specified enemy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ClearSchedule</td>
			<td class="ent_list_name">void CAI_BaseNPC::ClearSchedule(string)</td>
			<td class="ent_list_summary">Clear the NPC's current schedule for the specified reason.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CompleteTask</td>
			<td class="ent_list_name">void CAI_BaseNPC::CompleteTask()</td>
			<td class="ent_list_summary">Completes the currently running task.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Crouch</td>
			<td class="ent_list_name">bool CAI_BaseNPC::Crouch()</td>
			<td class="ent_list_summary">Tells the NPC to crouch.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FailTask</td>
			<td class="ent_list_name">void CAI_BaseNPC::FailTask(string)</td>
			<td class="ent_list_summary">Fails the currently running task with the specified error message.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindEnemyMemory</td>
			<td class="ent_list_name">handle CAI_BaseNPC::FindEnemyMemory(handle)</td>
			<td class="ent_list_summary">Get information about the NPC's current enemy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetActivity</td>
			<td class="ent_list_name">string CAI_BaseNPC::GetActivity()</td>
			<td class="ent_list_summary">Get the NPC's current activity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetActivityID</td>
			<td class="ent_list_name">int CAI_BaseNPC::GetActivityID()</td>
			<td class="ent_list_summary">Get the NPC's current activity ID.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetBestSound</td>
			<td class="ent_list_name">handle CAI_BaseNPC::GetBestSound(int)</td>
			<td class="ent_list_summary">Get the NPC's best sound of the specified type(s). Use 'ALL_SOUNDS' to get any sound.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetCine</td>
			<td class="ent_list_name">handle CAI_BaseNPC::GetCine()</td>
			<td class="ent_list_summary">Get the NPC's currently running scripted sequence if it has one.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetEnemy</td>
			<td class="ent_list_name">handle CAI_BaseNPC::GetEnemy()</td>
			<td class="ent_list_summary">Get the NPC's current enemy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetEnemyLKP</td>
			<td class="ent_list_name">Vector CAI_BaseNPC::GetEnemyLKP()</td>
			<td class="ent_list_summary">Get the last known position of the NPC's current enemy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetExpresser</td>
			<td class="ent_list_name">handle CAI_BaseNPC::GetExpresser()</td>
			<td class="ent_list_summary">Get a handle for this NPC's expresser.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFirstEnemyMemory</td>
			<td class="ent_list_name">handle CAI_BaseNPC::GetFirstEnemyMemory()</td>
			<td class="ent_list_summary">Get information about the NPC's first enemy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFirstHeardSound</td>
			<td class="ent_list_name">handle CAI_BaseNPC::GetFirstHeardSound()</td>
			<td class="ent_list_summary">Get the NPC's first heard sound.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFirstSeenEntity</td>
			<td class="ent_list_name">handle CAI_BaseNPC::GetFirstSeenEntity(int)</td>
			<td class="ent_list_summary">Get the NPC's first seen entity in the specified 'SEEN_' list.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetGestureVersionOfActivity</td>
			<td class="ent_list_name">string CAI_BaseNPC::GetGestureVersionOfActivity(string)</td>
			<td class="ent_list_summary">Get the gesture activity counterpart of the specified sequence activity, if one exists.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetGestureVersionOfActivityID</td>
			<td class="ent_list_name">int CAI_BaseNPC::GetGestureVersionOfActivityID(int)</td>
			<td class="ent_list_summary">Get the gesture activity ID counterpart of the specified sequence activity ID, if one exists.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetHintGroup</td>
			<td class="ent_list_name">string CAI_BaseNPC::GetHintGroup()</td>
			<td class="ent_list_summary">Get the name of the NPC's hint group.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetHintNode</td>
			<td class="ent_list_name">handle CAI_BaseNPC::GetHintNode()</td>
			<td class="ent_list_summary">Get the NPC's current AI hint.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetIdealNPCState</td>
			<td class="ent_list_name">int CAI_BaseNPC::GetIdealNPCState()</td>
			<td class="ent_list_summary">Get the NPC's ideal state.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetLastAttackTime</td>
			<td class="ent_list_name">float CAI_BaseNPC::GetLastAttackTime()</td>
			<td class="ent_list_summary">Get the last time the NPC has used an attack (e.g. fired a bullet from a gun).</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetLastDamageTime</td>
			<td class="ent_list_name">float CAI_BaseNPC::GetLastDamageTime()</td>
			<td class="ent_list_summary">Get the last time the NPC has been damaged.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetLastEnemyTime</td>
			<td class="ent_list_name">float CAI_BaseNPC::GetLastEnemyTime()</td>
			<td class="ent_list_summary">Get the last time the NPC has seen an enemy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetLastPlayerDamageTime</td>
			<td class="ent_list_name">float CAI_BaseNPC::GetLastPlayerDamageTime()</td>
			<td class="ent_list_summary">Get the last time the NPC has been damaged by a player.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNPCState</td>
			<td class="ent_list_name">int CAI_BaseNPC::GetNPCState()</td>
			<td class="ent_list_summary">Get the NPC's current state.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNPCTarget</td>
			<td class="ent_list_name">handle CAI_BaseNPC::GetNPCTarget()</td>
			<td class="ent_list_summary">Get the NPC's AI target.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNextEnemyMemory</td>
			<td class="ent_list_name">handle CAI_BaseNPC::GetNextEnemyMemory(handle)</td>
			<td class="ent_list_summary">Get information about the NPC's next enemy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNextHeardSound</td>
			<td class="ent_list_name">handle CAI_BaseNPC::GetNextHeardSound(handle)</td>
			<td class="ent_list_summary">Get the NPC's next heard sound.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNextSeenEntity</td>
			<td class="ent_list_name">handle CAI_BaseNPC::GetNextSeenEntity(handle, int)</td>
			<td class="ent_list_summary">Get the NPC's next seen entity in the specified 'SEEN_' list.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSchedule</td>
			<td class="ent_list_name">string CAI_BaseNPC::GetSchedule()</td>
			<td class="ent_list_summary">Get the NPC's current schedule.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetScheduleID</td>
			<td class="ent_list_name">int CAI_BaseNPC::GetScheduleID()</td>
			<td class="ent_list_summary">Get the NPC's current schedule ID.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetScriptState</td>
			<td class="ent_list_name">int CAI_BaseNPC::GetScriptState()</td>
			<td class="ent_list_summary">Get the NPC's current scripted sequence state.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSequenceVersionOfGesture</td>
			<td class="ent_list_name">string CAI_BaseNPC::GetSequenceVersionOfGesture(string)</td>
			<td class="ent_list_summary">Get the sequence activity counterpart of the specified gesture activity, if one exists.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSequenceVersionOfGestureID</td>
			<td class="ent_list_name">int CAI_BaseNPC::GetSequenceVersionOfGestureID(int)</td>
			<td class="ent_list_summary">Get the sequence activity ID counterpart of the specified gesture activity ID, if one exists.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSleepState</td>
			<td class="ent_list_name">int CAI_BaseNPC::GetSleepState()</td>
			<td class="ent_list_summary">Get the NPC's sleep state. (see AISS_ set of constants)</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSquad</td>
			<td class="ent_list_name">handle CAI_BaseNPC::GetSquad()</td>
			<td class="ent_list_summary">Get the NPC's squad if it has one.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetTask</td>
			<td class="ent_list_name">string CAI_BaseNPC::GetTask()</td>
			<td class="ent_list_summary">Get the NPC's current task.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetTaskID</td>
			<td class="ent_list_name">int CAI_BaseNPC::GetTaskID()</td>
			<td class="ent_list_summary">Get the NPC's current task ID.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetTaskStatus</td>
			<td class="ent_list_name">int CAI_BaseNPC::GetTaskStatus()</td>
			<td class="ent_list_summary">Gets the current task's status.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasCondition</td>
			<td class="ent_list_name">bool CAI_BaseNPC::HasCondition(string)</td>
			<td class="ent_list_summary">Get whether the NPC has a condition.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasConditionID</td>
			<td class="ent_list_name">bool CAI_BaseNPC::HasConditionID(int)</td>
			<td class="ent_list_summary">Get whether the NPC has a condition ID.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasSleepFlags</td>
			<td class="ent_list_name">bool CAI_BaseNPC::HasSleepFlags(int)</td>
			<td class="ent_list_summary">Return true if the NPC has the specified sleep flags. (see AI_SLEEP_ set of constants)</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsCommandable</td>
			<td class="ent_list_name">bool CAI_BaseNPC::IsCommandable()</td>
			<td class="ent_list_summary">Check if the NPC is commandable.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsCrouching</td>
			<td class="ent_list_name">bool CAI_BaseNPC::IsCrouching()</td>
			<td class="ent_list_summary">Returns true if the NPC is crouching.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsCustomInterruptConditionSet</td>
			<td class="ent_list_name">bool CAI_BaseNPC::IsCustomInterruptConditionSet(string)</td>
			<td class="ent_list_summary">Use with BuildScheduleTestBits to define conditions which should interrupt the schedule.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsInPlayerSquad</td>
			<td class="ent_list_name">bool CAI_BaseNPC::IsInPlayerSquad()</td>
			<td class="ent_list_summary">Check if the NPC is in the player's squad.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsInSquad</td>
			<td class="ent_list_name">bool CAI_BaseNPC::IsInSquad()</td>
			<td class="ent_list_summary">Returns true if the NPC is in a squad.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsMedic</td>
			<td class="ent_list_name">bool CAI_BaseNPC::IsMedic()</td>
			<td class="ent_list_summary">Returns true if this NPC is a medic.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsMoving</td>
			<td class="ent_list_name">bool CAI_BaseNPC::IsMoving()</td>
			<td class="ent_list_summary">Check if the NPC is moving.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NumEnemies</td>
			<td class="ent_list_name">int CAI_BaseNPC::NumEnemies()</td>
			<td class="ent_list_summary">Get the number of enemies this NPC knows about.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NumWeaponsInSquad</td>
			<td class="ent_list_name">int CAI_BaseNPC::NumWeaponsInSquad(string)</td>
			<td class="ent_list_summary">Get the number of weapons in a squad.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveSleepFlags</td>
			<td class="ent_list_name">void CAI_BaseNPC::RemoveSleepFlags(int)</td>
			<td class="ent_list_summary">Remove from NPC's sleep flags. (see AI_SLEEP_ set of constants)</td>
		</tr>
		<tr>
			<td class="ent_list_name">ResetActivity</td>
			<td class="ent_list_name">void CAI_BaseNPC::ResetActivity()</td>
			<td class="ent_list_summary">Reset the NPC's current activity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetActivity</td>
			<td class="ent_list_name">void CAI_BaseNPC::SetActivity(string)</td>
			<td class="ent_list_summary">Set the NPC's current activity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetActivityID</td>
			<td class="ent_list_name">void CAI_BaseNPC::SetActivityID(int)</td>
			<td class="ent_list_summary">Set the NPC's current activity ID.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetCondition</td>
			<td class="ent_list_name">void CAI_BaseNPC::SetCondition(string)</td>
			<td class="ent_list_summary">Set a condition on the NPC.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetConditionID</td>
			<td class="ent_list_name">void CAI_BaseNPC::SetConditionID(int)</td>
			<td class="ent_list_summary">Set a condition on the NPC by ID.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetCustomInterruptCondition</td>
			<td class="ent_list_name">void CAI_BaseNPC::SetCustomInterruptCondition(string)</td>
			<td class="ent_list_summary">Use with BuildScheduleTestBits to define conditions which should interrupt the schedule.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetEnemy</td>
			<td class="ent_list_name">void CAI_BaseNPC::SetEnemy(handle)</td>
			<td class="ent_list_summary">Set the NPC's current enemy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetEnemyDiscardTime</td>
			<td class="ent_list_name">void CAI_BaseNPC::SetEnemyDiscardTime(float)</td>
			<td class="ent_list_summary">Sets the amount of time needed before the NPC discards an unseen enemy's memory.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetFreeKnowledgeDuration</td>
			<td class="ent_list_name">void CAI_BaseNPC::SetFreeKnowledgeDuration(float)</td>
			<td class="ent_list_summary">Sets the amount of time the NPC can always know an enemy's location after losing sight.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetIdealNPCState</td>
			<td class="ent_list_name">void CAI_BaseNPC::SetIdealNPCState(int)</td>
			<td class="ent_list_summary">Set the NPC's ideal state.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetNPCTarget</td>
			<td class="ent_list_name">void CAI_BaseNPC::SetNPCTarget(handle)</td>
			<td class="ent_list_summary">Set the NPC's AI target.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSchedule</td>
			<td class="ent_list_name">void CAI_BaseNPC::SetSchedule(string)</td>
			<td class="ent_list_summary">Set the NPC's current schedule.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetScheduleID</td>
			<td class="ent_list_name">void CAI_BaseNPC::SetScheduleID(int)</td>
			<td class="ent_list_summary">Set the NPC's current schedule ID.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSleepState</td>
			<td class="ent_list_name">void CAI_BaseNPC::SetSleepState(int)</td>
			<td class="ent_list_summary">Set the NPC's sleep state. (see AISS_ set of constants)</td>
		</tr>
		<tr>
			<td class="ent_list_name">Sleep</td>
			<td class="ent_list_name">void CAI_BaseNPC::Sleep()</td>
			<td class="ent_list_summary">Puts the NPC into a sleeping state.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Stand</td>
			<td class="ent_list_name">bool CAI_BaseNPC::Stand()</td>
			<td class="ent_list_summary">Tells the NPC to stand if it is crouching.</td>
		</tr>
		<tr>
			<td class="ent_list_name">TranslateActivity</td>
			<td class="ent_list_name">int CAI_BaseNPC::TranslateActivity(string)</td>
			<td class="ent_list_summary">Translates the specified activity string and returns the translated activity ID.</td>
		</tr>
		<tr>
			<td class="ent_list_name">TranslateActivityID</td>
			<td class="ent_list_name">int CAI_BaseNPC::TranslateActivityID(int)</td>
			<td class="ent_list_summary">Translates the specified activity ID and returns the translated activity ID.</td>
		</tr>
		<tr>
			<td class="ent_list_name">UpdateEnemyMemory</td>
			<td class="ent_list_name">bool CAI_BaseNPC::UpdateEnemyMemory(handle, Vector, handle)</td>
			<td class="ent_list_summary">Update information on this enemy. First parameter is the enemy, second is the position we now know the enemy is at, third parameter is the informer (e.g. squadmate who sees enemy, null if I see it myself). Returns true if this is a new enemy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Wake</td>
			<td class="ent_list_name">void CAI_BaseNPC::Wake(handle)</td>
			<td class="ent_list_summary">Awakens the NPC if it is currently asleep.</td>
		</tr>
	</tbody>
</table>

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">BuildScheduleTestBits</td>
			<td class="ent_list_name">void CAI_BaseNPC -> BuildScheduleTestBits()</td>
			<td class="ent_list_summary">Called when the NPC is determining which conditions can interrupt the current schedule.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CanBeAnEnemyOf</td>
			<td class="ent_list_name">bool CAI_BaseNPC -> CanBeAnEnemyOf(handle ''enemy'')</td>
			<td class="ent_list_summary">Whether or not this NPC can be an enemy of another NPC.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetActualShootPosition</td>
			<td class="ent_list_name">Vector CAI_BaseNPC -> GetActualShootPosition(Vector ''shootOrigin'', handle ''target'')</td>
			<td class="ent_list_summary">Called when the NPC is getting their actual shoot position, using the default shoot position as the parameter. (NOTE: NPCs which override this themselves might not always use this hook!)</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsValidEnemy</td>
			<td class="ent_list_name">bool CAI_BaseNPC -> IsValidEnemy(handle ''enemy'')</td>
			<td class="ent_list_summary">Whether or not the specified enemy should be considered valid.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NPC_TranslateActivity</td>
			<td class="ent_list_name">variant CAI_BaseNPC -> NPC_TranslateActivity(string ''activity'', int ''activity_id'')</td>
			<td class="ent_list_summary">Called when the NPC is translating their current activity. The activity is provided in both string and ID form. Should return either an activity string or an activity ID. Return -1 to not translate.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NPC_TranslateSchedule</td>
			<td class="ent_list_name">variant CAI_BaseNPC -> NPC_TranslateSchedule(string ''schedule'', int ''schedule_id'')</td>
			<td class="ent_list_summary">Called when the NPC is translating their current schedule. The schedule is provided in both string and ID form. Should return either a schedule string or a schedule ID. Return -1 to not translate.</td>
		</tr>
		<tr>
			<td class="ent_list_name">OnListened</td>
			<td class="ent_list_name">void CAI_BaseNPC -> OnListened()</td>
			<td class="ent_list_summary">Called when the NPC assigns sound conditions after checking for sounds it hears.</td>
		</tr>
		<tr>
			<td class="ent_list_name">OnSeeEntity</td>
			<td class="ent_list_name">void CAI_BaseNPC -> OnSeeEntity(handle ''entity'')</td>
			<td class="ent_list_summary">Called when the NPC sees an entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">OverrideMove</td>
			<td class="ent_list_name">void CAI_BaseNPC -> OverrideMove(float ''interval'')</td>
			<td class="ent_list_summary">Called when the NPC runs movement code, allowing the NPC's movement to be overridden by some other method. (NOTE: NPCs which override this themselves might not always use this hook!)</td>
		</tr>
		<tr>
			<td class="ent_list_name">QueryHearSound</td>
			<td class="ent_list_name">bool CAI_BaseNPC -> QueryHearSound(handle ''sound'')</td>
			<td class="ent_list_summary">Called when the NPC is deciding whether to hear a CSound or not.</td>
		</tr>
		<tr>
			<td class="ent_list_name">QuerySeeEntity</td>
			<td class="ent_list_name">bool CAI_BaseNPC -> QuerySeeEntity(handle ''entity'')</td>
			<td class="ent_list_summary">Called when the NPC is deciding whether to see an entity or not.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RunTask</td>
			<td class="ent_list_name">void CAI_BaseNPC -> RunTask(string ''task'', int ''task_id'', float ''task_data'')</td>
			<td class="ent_list_summary">Called every think while the task is running. The task is provided in both string and ID form. Return false to override actual task functionality.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ShouldPlayFakeSequenceGesture</td>
			<td class="ent_list_name">bool CAI_BaseNPC -> ShouldPlayFakeSequenceGesture(string ''activity'', string ''translatedActivity'')</td>
			<td class="ent_list_summary">Called when an activity is set on a NPC. Returning true will make the NPC convert the activity into a gesture (if a gesture is available) and continue their current activity instead.</td>
		</tr>
		<tr>
			<td class="ent_list_name">StartTask</td>
			<td class="ent_list_name">void CAI_BaseNPC -> StartTask(string ''task'', int ''task_id'', float ''task_data'')</td>
			<td class="ent_list_summary">Called when a task is starting. The task is provided in both string and ID form. Return false to override actual task functionality.</td>
		</tr>
		<tr>
			<td class="ent_list_name">UpdateEnemyMemory</td>
			<td class="ent_list_name">bool CAI_BaseNPC -> UpdateEnemyMemory(handle ''enemy'', Vector ''position'', handle ''informer'')</td>
			<td class="ent_list_summary">Whether or not this NPC can be an enemy of another NPC.</td>
		</tr>
	</tbody>
</table>

<h3 id="CAI_BaseActor">CAI_BaseActor</h3>
*Extends <a href="#CAI_BaseNPC">CAI_BaseNPC</a>*

The base class for NPCs which act in complex choreo scenes.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AddLookTarget</td>
			<td class="ent_list_name">void CAI_BaseActor::AddLookTarget(handle, float, float, float)</td>
			<td class="ent_list_summary">Add a potential look target for this actor with the specified importance, duration, and ramp.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AddLookTargetPos</td>
			<td class="ent_list_name">void CAI_BaseActor::AddLookTargetPos(Vector, float, float, float)</td>
			<td class="ent_list_summary">Add a potential look target position for this actor with the specified importance, duration, and ramp.</td>
		</tr>
	</tbody>
</table>

<h3 id="CSceneEntity">CSceneEntity</h3>
*Extends <a href="#CBaseEntity">CBaseEntity</a>*

Choreographed scene which controls animation and/or dialog on one or more actors.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AddBroadcastTeamTarget</td>
			<td class="ent_list_name">void CSceneEntity::AddBroadcastTeamTarget(int)</td>
			<td class="ent_list_summary">Adds a team (by index) to the broadcast list</td>
		</tr>
		<tr>
			<td class="ent_list_name">EstimateLength</td>
			<td class="ent_list_name">float CSceneEntity::EstimateLength()</td>
			<td class="ent_list_summary">Returns length of this scene in seconds.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindNamedEntity</td>
			<td class="ent_list_name">handle CSceneEntity::FindNamedEntity(string)</td>
			<td class="ent_list_summary">given an entity reference, such as !target, get actual entity from scene object</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsPaused</td>
			<td class="ent_list_name">bool CSceneEntity::IsPaused()</td>
			<td class="ent_list_summary">If this scene is currently paused.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsPlayingBack</td>
			<td class="ent_list_name">bool CSceneEntity::IsPlayingBack()</td>
			<td class="ent_list_summary">If this scene is currently playing.</td>
		</tr>
		<tr>
			<td class="ent_list_name">LoadSceneFromString</td>
			<td class="ent_list_name">bool CSceneEntity::LoadSceneFromString(string, string)</td>
			<td class="ent_list_summary">given a dummy scene name and a vcd string, load the scene</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveBroadcastTeamTarget</td>
			<td class="ent_list_name">void CSceneEntity::RemoveBroadcastTeamTarget(int)</td>
			<td class="ent_list_summary">Removes a team (by index) from the broadcast list</td>
		</tr>
	</tbody>
</table>

<h3 id="CSceneListManager">CSceneListManager</h3>
*Extends <a href="#CBaseEntity">CBaseEntity</a>*

Stores choreo scenes and cleans them up when a later scene in the list begins playing.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetScene</td>
			<td class="ent_list_name">handle CSceneListManager::GetScene(int)</td>
			<td class="ent_list_summary">Gets the specified scene index from this manager.</td>
		</tr>
	</tbody>
</table>

<h3 id="CAI_Expresser">CAI_Expresser</h3>
Expresser class for complex speech.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">BlockSpeechUntil</td>
			<td class="ent_list_name">void CAI_Expresser::BlockSpeechUntil(float)</td>
			<td class="ent_list_summary">Block speech for a certain amount of time. This is stored in curtime.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CanSpeak</td>
			<td class="ent_list_name">bool CAI_Expresser::CanSpeak()</td>
			<td class="ent_list_summary">Check if the actor can speak.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ForceNotSpeaking</td>
			<td class="ent_list_name">void CAI_Expresser::ForceNotSpeaking()</td>
			<td class="ent_list_summary">If the actor is speaking, force the system to recognize them as not speaking.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetVoicePitch</td>
			<td class="ent_list_name">int CAI_Expresser::GetVoicePitch()</td>
			<td class="ent_list_summary">Get the actor's voice pitch. Used in sentences.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsSpeaking</td>
			<td class="ent_list_name">bool CAI_Expresser::IsSpeaking()</td>
			<td class="ent_list_summary">Check if the actor is speaking.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetVoicePitch</td>
			<td class="ent_list_name">void CAI_Expresser::SetVoicePitch(int)</td>
			<td class="ent_list_summary">Set the actor's voice pitch. Used in sentences.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Speak</td>
			<td class="ent_list_name">bool CAI_Expresser::Speak(string, string)</td>
			<td class="ent_list_summary">Speak a response concept with the specified modifiers.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SpeakAutoGeneratedScene</td>
			<td class="ent_list_name">bool CAI_Expresser::SpeakAutoGeneratedScene(string, float)</td>
			<td class="ent_list_summary">Speak an automatically generated, instanced VCD scene for this sound as though it were played through the Response System. Return whether the scene successfully plays.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SpeakRawScene</td>
			<td class="ent_list_name">bool CAI_Expresser::SpeakRawScene(string, float)</td>
			<td class="ent_list_summary">Speak a raw, instanced VCD scene as though it were played through the Response System. Return whether the scene successfully plays.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SpeakRawSentence</td>
			<td class="ent_list_name">int CAI_Expresser::SpeakRawSentence(string, float)</td>
			<td class="ent_list_summary">Speak a raw sentence as though it were played through the Response System. Return the sentence's index; -1 if not successfully played.</td>
		</tr>
	</tbody>
</table>

<h3 id="CAI_Hint">CAI_Hint</h3>
*Extends <a href="#CBaseEntity">CBaseEntity</a>*

An entity which gives contextual pointers for NPCs.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetDirection</td>
			<td class="ent_list_name">Vector CAI_Hint::GetDirection()</td>
			<td class="ent_list_summary">Get the hint's direction.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetHintActivity</td>
			<td class="ent_list_name">string CAI_Hint::GetHintActivity()</td>
			<td class="ent_list_summary">Get the name of the hint activity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetHintGroup</td>
			<td class="ent_list_name">string CAI_Hint::GetHintGroup()</td>
			<td class="ent_list_summary">Get the name of the hint's group.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetHintType</td>
			<td class="ent_list_name">int CAI_Hint::GetHintType()</td>
			<td class="ent_list_summary">Get the hint's type ID.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNodeId</td>
			<td class="ent_list_name">int CAI_Hint::GetNodeId()</td>
			<td class="ent_list_summary">Get the hint's node ID.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetUser</td>
			<td class="ent_list_name">handle CAI_Hint::GetUser()</td>
			<td class="ent_list_summary">Get the hint's current user.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDisabled</td>
			<td class="ent_list_name">bool CAI_Hint::IsDisabled()</td>
			<td class="ent_list_summary">Check if the hint is disabled.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsLocked</td>
			<td class="ent_list_name">bool CAI_Hint::IsLocked()</td>
			<td class="ent_list_summary">Check if the hint is locked.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Yaw</td>
			<td class="ent_list_name">float CAI_Hint::Yaw()</td>
			<td class="ent_list_summary">Get the hint's yaw.</td>
		</tr>
	</tbody>
</table>

<h3 id="CAI_Squad">CAI_Squad</h3>
NPC squads used for schedule coordination, sharing information about enemies, etc.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AddToSquad</td>
			<td class="ent_list_name">void CAI_Squad::AddToSquad(handle)</td>
			<td class="ent_list_summary">Adds a NPC to the squad.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAnyMember</td>
			<td class="ent_list_name">handle CAI_Squad::GetAnyMember()</td>
			<td class="ent_list_summary">Randomly get any one of the squad's members.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFirstMember</td>
			<td class="ent_list_name">handle CAI_Squad::GetFirstMember(bool)</td>
			<td class="ent_list_summary">Get the squad's first member. The parameter is for whether to ignore silent members (see CAI_Squad::IsSilentMember() for more info).</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetLeader</td>
			<td class="ent_list_name">handle CAI_Squad::GetLeader()</td>
			<td class="ent_list_summary">Get the squad's leader.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMember</td>
			<td class="ent_list_name">handle CAI_Squad::GetMember(int)</td>
			<td class="ent_list_summary">Get one of the squad's members by their index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetName</td>
			<td class="ent_list_name">string CAI_Squad::GetName()</td>
			<td class="ent_list_summary">Get the squad's name.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSquadData</td>
			<td class="ent_list_name">int CAI_Squad::GetSquadData(int)</td>
			<td class="ent_list_summary">Get the squad data in the specified slot.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSquadIndex</td>
			<td class="ent_list_name">int CAI_Squad::GetSquadIndex(handle)</td>
			<td class="ent_list_summary">Get the index of the specified NPC in the squad.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSquadMemberNearestTo</td>
			<td class="ent_list_name">handle CAI_Squad::GetSquadMemberNearestTo(Vector)</td>
			<td class="ent_list_summary">Get the squad member nearest to a point.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetVisibleSquadMembers</td>
			<td class="ent_list_name">int CAI_Squad::GetVisibleSquadMembers(handle)</td>
			<td class="ent_list_summary">Get the number of squad members visible to the specified member.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsLeader</td>
			<td class="ent_list_name">bool CAI_Squad::IsLeader(handle)</td>
			<td class="ent_list_summary">Returns true if the specified NPC is the squad's leader.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsMember</td>
			<td class="ent_list_name">bool CAI_Squad::IsMember(handle)</td>
			<td class="ent_list_summary">Returns true if the specified NPC is a member of the squad.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsSilentMember</td>
			<td class="ent_list_name">bool CAI_Squad::IsSilentMember(handle)</td>
			<td class="ent_list_summary">Returns true if the specified NPC is a "silent squad member", which means it's only in squads for enemy information purposes and does not actually participate in any tactics. For example, this is used for npc_enemyfinder and vital allies (e.g. Alyx) in the player's squad. Please note that this does not check if the NPC is in the squad first.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NearestSquadMember</td>
			<td class="ent_list_name">handle CAI_Squad::NearestSquadMember(handle)</td>
			<td class="ent_list_summary">Get the squad member nearest to the specified member.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NumMembers</td>
			<td class="ent_list_name">int CAI_Squad::NumMembers(bool)</td>
			<td class="ent_list_summary">Get the squad's number of members. The parameter is for whether to ignore silent members (see CAI_Squad::IsSilentMember() for more info).</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveFromSquad</td>
			<td class="ent_list_name">void CAI_Squad::RemoveFromSquad(handle)</td>
			<td class="ent_list_summary">Removes a NPC from the squad.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSquadData</td>
			<td class="ent_list_name">void CAI_Squad::SetSquadData(int, int)</td>
			<td class="ent_list_summary">Set the squad data in the specified slot.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SquadMemberInRange</td>
			<td class="ent_list_name">handle CAI_Squad::SquadMemberInRange(Vector, float)</td>
			<td class="ent_list_summary">Get the first squad member found around the specified position in the specified range.</td>
		</tr>
		<tr>
			<td class="ent_list_name">UpdateEnemyMemory</td>
			<td class="ent_list_name">void CAI_Squad::UpdateEnemyMemory(handle, handle, Vector)</td>
			<td class="ent_list_summary">Updates the squad's memory of an enemy. The first parameter is the updater, the second parameter is the enemy, and the third parameter is the position.</td>
		</tr>
	</tbody>
</table>

<h3 id="CAI_SquadManager">CAI_SquadManager</h3>
Manager for NPC squads.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">FindCreateSquad</td>
			<td class="ent_list_name">handle CAI_SquadManager::FindCreateSquad(string)</td>
			<td class="ent_list_summary">Find the specified squad in the squad list or create it if it doesn't exist.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindSquad</td>
			<td class="ent_list_name">handle CAI_SquadManager::FindSquad(string)</td>
			<td class="ent_list_summary">Find the specified squad in the squad list. Returns null if none found.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFirstSquad</td>
			<td class="ent_list_name">handle CAI_SquadManager::GetFirstSquad()</td>
			<td class="ent_list_summary">Get the first squad in the squad list.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNextSquad</td>
			<td class="ent_list_name">handle CAI_SquadManager::GetNextSquad(handle)</td>
			<td class="ent_list_summary">Get the next squad in the squad list starting from the specified squad.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NumSquads</td>
			<td class="ent_list_name">int CAI_SquadManager::NumSquads()</td>
			<td class="ent_list_summary">Get the number of squads in the list.</td>
		</tr>
	</tbody>
</table>

<h3 id="CAI_GoalEntity">CAI_GoalEntity</h3>
*Extends <a href="#CBaseEntity">CBaseEntity</a>*

The base class for goal entities used to control NPC behavior.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">IsActive</td>
			<td class="ent_list_name">bool CAI_GoalEntity::IsActive()</td>
			<td class="ent_list_summary">Check if the goal entity is active.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NumActors</td>
			<td class="ent_list_name">int CAI_GoalEntity::NumActors()</td>
			<td class="ent_list_summary">Get the number of actors using this goal entity.</td>
		</tr>
	</tbody>
</table>

<h3 id="CAI_ActBusyGoal">CAI_ActBusyGoal</h3>
*Extends <a href="#CAI_GoalEntity">CAI_GoalEntity</a>*

A goal entity which makes NPCs act busy.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">ForceBusy</td>
			<td class="ent_list_name">void CAI_ActBusyGoal::ForceBusy(handle, handle, bool)</td>
			<td class="ent_list_summary">Force a NPC to act busy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ForceBusyComplex</td>
			<td class="ent_list_name">void CAI_ActBusyGoal::ForceBusyComplex(handle, handle, bool, bool, bool, float, int, handle)</td>
			<td class="ent_list_summary">Force a NPC to act busy with additional parameters.</td>
		</tr>
		<tr>
			<td class="ent_list_name">StopBusy</td>
			<td class="ent_list_name">void CAI_ActBusyGoal::StopBusy(handle)</td>
			<td class="ent_list_summary">Force a NPC to stop busying.</td>
		</tr>
	</tbody>
</table>

<h3 id="CSound">CSound</h3>
A sound NPCs can hear.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">DoesSoundExpire</td>
			<td class="ent_list_name">bool CSound::DoesSoundExpire()</td>
			<td class="ent_list_summary">Returns true if the sound expires.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FreeSound</td>
			<td class="ent_list_name">void CSound::FreeSound()</td>
			<td class="ent_list_summary">Frees the sound from the sound list.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetOwner</td>
			<td class="ent_list_name">handle CSound::GetOwner()</td>
			<td class="ent_list_summary">Gets the sound's owner.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundOrigin</td>
			<td class="ent_list_name">Vector CSound::GetSoundOrigin()</td>
			<td class="ent_list_summary">Gets the sound's origin.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundReactOrigin</td>
			<td class="ent_list_name">Vector CSound::GetSoundReactOrigin()</td>
			<td class="ent_list_summary">Gets the sound's react origin.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetTarget</td>
			<td class="ent_list_name">handle CSound::GetTarget()</td>
			<td class="ent_list_summary">Gets the sound's target.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsScent</td>
			<td class="ent_list_name">bool CSound::IsScent()</td>
			<td class="ent_list_summary">Returns true if this is a type of scent (as opposed to a sound).</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsSound</td>
			<td class="ent_list_name">bool CSound::IsSound()</td>
			<td class="ent_list_summary">Returns true if this is a type of sound (as opposed to a scent).</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsSoundType</td>
			<td class="ent_list_name">bool CSound::IsSoundType(int)</td>
			<td class="ent_list_summary">Returns true if the sound type is the specified type.</td>
		</tr>
		<tr>
			<td class="ent_list_name">OccludedVolume</td>
			<td class="ent_list_name">float CSound::OccludedVolume()</td>
			<td class="ent_list_summary">Gets the sound's occluded volume.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Reset</td>
			<td class="ent_list_name">void CSound::Reset()</td>
			<td class="ent_list_summary">Clears the volume, type, and origin for the sound without actually removing it.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSoundOrigin</td>
			<td class="ent_list_name">void CSound::SetSoundOrigin(Vector)</td>
			<td class="ent_list_summary">Sets the sound's origin.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SoundChannel</td>
			<td class="ent_list_name">int CSound::SoundChannel()</td>
			<td class="ent_list_summary">Gets the sound's channel.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SoundContext</td>
			<td class="ent_list_name">int CSound::SoundContext()</td>
			<td class="ent_list_summary">Gets the sound type with contexts only.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SoundExpirationTime</td>
			<td class="ent_list_name">float CSound::SoundExpirationTime()</td>
			<td class="ent_list_summary">Gets the sound's expiration time.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SoundType</td>
			<td class="ent_list_name">int CSound::SoundType()</td>
			<td class="ent_list_summary">Gets the raw sound type.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SoundTypeNoContext</td>
			<td class="ent_list_name">int CSound::SoundTypeNoContext()</td>
			<td class="ent_list_summary">Gets the sound type with contexts excluded.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ValidateOwner</td>
			<td class="ent_list_name">bool CSound::ValidateOwner()</td>
			<td class="ent_list_summary">Returns true if the sound's owner is still valid or if the sound never had an owner in the first place.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Volume</td>
			<td class="ent_list_name">int CSound::Volume()</td>
			<td class="ent_list_summary">Gets the sound's volume.</td>
		</tr>
	</tbody>
</table>

<h3 id="CNPC_Citizen">CNPC_Citizen</h3>
*Extends <a href="#CAI_BaseActor">CAI_BaseActor</a>*

npc_citizen from Half-Life 2

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">CanHeal</td>
			<td class="ent_list_name">bool CNPC_Citizen::CanHeal()</td>
			<td class="ent_list_summary">Returns true if this citizen is a medic or ammo resupplier currently able to heal/give ammo.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetCitizenType</td>
			<td class="ent_list_name">int CNPC_Citizen::GetCitizenType()</td>
			<td class="ent_list_summary">Gets the citizen's type. 1 = Downtrodden, 2 = Refugee, 3 = Rebel, 4 = Unique</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsAmmoResupplier</td>
			<td class="ent_list_name">bool CNPC_Citizen::IsAmmoResupplier()</td>
			<td class="ent_list_summary">Returns true if this citizen is an ammo resupplier.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetCitizenType</td>
			<td class="ent_list_name">void CNPC_Citizen::SetCitizenType(int)</td>
			<td class="ent_list_summary">Sets the citizen's type. 1 = Downtrodden, 2 = Refugee, 3 = Rebel, 4 = Unique</td>
		</tr>
	</tbody>
</table>

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">SelectModel</td>
			<td class="ent_list_name">string CNPC_Citizen -> SelectModel(string ''model_path'', string ''model_head'', int ''gender'')</td>
			<td class="ent_list_summary">Called when a citizen is selecting a random model. 'model_path' is the directory of the selected model and 'model_head' is the name. The 'gender' parameter uses the 'GENDER_' constants and is based only on the citizen's random head spawnflags. If a full model path string is returned, it will be used as the model instead.</td>
		</tr>
	</tbody>
</table>

<h3 id="CProtoSniper">CProtoSniper</h3>
*Extends <a href="#CAI_BaseNPC">CAI_BaseNPC</a>*

Combine sniper NPC.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">FindFrustratedShot</td>
			<td class="ent_list_name">bool CProtoSniper::FindFrustratedShot(float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetBulletOrigin</td>
			<td class="ent_list_name">Vector CProtoSniper::GetBulletOrigin()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetBulletSpeed</td>
			<td class="ent_list_name">float CProtoSniper::GetBulletSpeed()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPaintCursor</td>
			<td class="ent_list_name">Vector CProtoSniper::GetPaintCursor()</td>
			<td class="ent_list_summary">Get the point the sniper is currently aiming at.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPositionParameter</td>
			<td class="ent_list_name">float CProtoSniper::GetPositionParameter(float, bool)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsLaserOn</td>
			<td class="ent_list_name">bool CProtoSniper::IsLaserOn()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsSweepingRandomly</td>
			<td class="ent_list_name">bool CProtoSniper::IsSweepingRandomly()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">LaserOff</td>
			<td class="ent_list_name">void CProtoSniper::LaserOff()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">LaserOn</td>
			<td class="ent_list_name">void CProtoSniper::LaserOn(Vector, Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ScopeGlint</td>
			<td class="ent_list_name">void CProtoSniper::ScopeGlint()</td>
			<td class="ent_list_summary"></td>
		</tr>
	</tbody>
</table>

<h3 id="CPropVehicle">CPropVehicle</h3>
*Extends <a href="#CBaseAnimating">CBaseAnimating</a>*

The base class for four-wheel physics vehicles.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetPhysics</td>
			<td class="ent_list_name">handle CPropVehicle::GetPhysics()</td>
			<td class="ent_list_summary">Get a vehicle's physics.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetVehicleType</td>
			<td class="ent_list_name">int CPropVehicle::GetVehicleType()</td>
			<td class="ent_list_summary">Get a vehicle's type.</td>
		</tr>
	</tbody>
</table>

<h3 id="CPropVehicleDriveable">CPropVehicleDriveable</h3>
*Extends <a href="#CPropVehicle">CPropVehicle</a>*

The base class for driveable vehicles.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetDriver</td>
			<td class="ent_list_name">handle CPropVehicleDriveable::GetDriver()</td>
			<td class="ent_list_summary">Get a vehicle's driver, which could be either a player or a npc_vehicledriver.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsEngineOn</td>
			<td class="ent_list_name">bool CPropVehicleDriveable::IsEngineOn()</td>
			<td class="ent_list_summary">Check if the engine is on.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsOverturned</td>
			<td class="ent_list_name">bool CPropVehicleDriveable::IsOverturned()</td>
			<td class="ent_list_summary">Check if the vehicle is overturned.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsVehicleBodyInWater</td>
			<td class="ent_list_name">bool CPropVehicleDriveable::IsVehicleBodyInWater()</td>
			<td class="ent_list_summary">Check if the vehicle's body is submerged in water.</td>
		</tr>
		<tr>
			<td class="ent_list_name">StartEngine</td>
			<td class="ent_list_name">void CPropVehicleDriveable::StartEngine()</td>
			<td class="ent_list_summary">Start the engine.</td>
		</tr>
		<tr>
			<td class="ent_list_name">StopEngine</td>
			<td class="ent_list_name">void CPropVehicleDriveable::StopEngine()</td>
			<td class="ent_list_summary">Stop the engine.</td>
		</tr>
	</tbody>
</table>

<h3 id="CPointCommentaryNode">CPointCommentaryNode</h3>
*Extends <a href="#CBaseAnimating">CBaseAnimating</a>*

Commentary nodes which play commentary in commentary mode.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AbortPlaying</td>
			<td class="ent_list_name">void CPointCommentaryNode::AbortPlaying()</td>
			<td class="ent_list_summary">Stops playing the node and snaps out of its camera control immediately. The game uses this function to shut down commentary while in the middle of playing a node, as it can't smoothly blend out (since the commentary entities need to be removed).</td>
		</tr>
		<tr>
			<td class="ent_list_name">CannotBeStopped</td>
			<td class="ent_list_name">bool CPointCommentaryNode::CannotBeStopped()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetCommentaryFile</td>
			<td class="ent_list_name">string CPointCommentaryNode::GetCommentaryFile()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetCommentaryType</td>
			<td class="ent_list_name">int CPointCommentaryNode::GetCommentaryType()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFootnote</td>
			<td class="ent_list_name">string CPointCommentaryNode::GetFootnote()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPrintName</td>
			<td class="ent_list_name">string CPointCommentaryNode::GetPrintName()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSpeakers</td>
			<td class="ent_list_name">string CPointCommentaryNode::GetSpeakers()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">HasViewTarget</td>
			<td class="ent_list_name">bool CPointCommentaryNode::HasViewTarget()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsActive</td>
			<td class="ent_list_name">bool CPointCommentaryNode::IsActive()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDisabled</td>
			<td class="ent_list_name">bool CPointCommentaryNode::IsDisabled()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">PreventsMovement</td>
			<td class="ent_list_name">bool CPointCommentaryNode::PreventsMovement()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetCommentaryFile</td>
			<td class="ent_list_name">void CPointCommentaryNode::SetCommentaryFile(string)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetCommentaryType</td>
			<td class="ent_list_name">void CPointCommentaryNode::SetCommentaryType(int)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDisabled</td>
			<td class="ent_list_name">void CPointCommentaryNode::SetDisabled(bool)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetFootnote</td>
			<td class="ent_list_name">void CPointCommentaryNode::SetFootnote(string)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPrintName</td>
			<td class="ent_list_name">void CPointCommentaryNode::SetPrintName(string)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSpeakers</td>
			<td class="ent_list_name">void CPointCommentaryNode::SetSpeakers(string)</td>
			<td class="ent_list_summary"></td>
		</tr>
	</tbody>
</table>

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">PreStartCommentary</td>
			<td class="ent_list_name">bool CPointCommentaryNode -> PreStartCommentary()</td>
			<td class="ent_list_summary">Called just before commentary begins. Use this to modify variables or commentary behavior before it begins. Returning false will prevent the commentary from starting.</td>
		</tr>
	</tbody>
</table>

<h3 id="CTriggerCamera">CTriggerCamera</h3>
*Extends <a href="#CBaseEntity">CBaseEntity</a>*

Server-side camera entity

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetFov</td>
			<td class="ent_list_name">int CTriggerCamera::GetFov()</td>
			<td class="ent_list_summary">get camera's current fov setting as integer</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetFov</td>
			<td class="ent_list_name">void CTriggerCamera::SetFov(int, float)</td>
			<td class="ent_list_summary">set camera's current fov in integer degrees and fov change rate as float</td>
		</tr>
	</tbody>
</table>

<h3 id="CEnvEntityMaker">CEnvEntityMaker</h3>
*Extends <a href="#CBaseEntity">CBaseEntity</a>*

env_entity_maker

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">SpawnEntity</td>
			<td class="ent_list_name">void CEnvEntityMaker::SpawnEntity()</td>
			<td class="ent_list_summary">Create an entity at the location of the maker</td>
		</tr>
		<tr>
			<td class="ent_list_name">SpawnEntityAtEntityOrigin</td>
			<td class="ent_list_name">void CEnvEntityMaker::SpawnEntityAtEntityOrigin(handle)</td>
			<td class="ent_list_summary">Create an entity at the location of a specified entity instance</td>
		</tr>
		<tr>
			<td class="ent_list_name">SpawnEntityAtLocation</td>
			<td class="ent_list_name">void CEnvEntityMaker::SpawnEntityAtLocation(Vector, Vector)</td>
			<td class="ent_list_summary">Create an entity at a specified location and orientaton, orientation is Euler angle in degrees (pitch, yaw, roll)</td>
		</tr>
		<tr>
			<td class="ent_list_name">SpawnEntityAtNamedEntityOrigin</td>
			<td class="ent_list_name">void CEnvEntityMaker::SpawnEntityAtNamedEntityOrigin(string)</td>
			<td class="ent_list_summary">Create an entity at the location of a named entity</td>
		</tr>
	</tbody>
</table>

<h3 id="CLogicExternalData">CLogicExternalData</h3>
*Extends <a href="#CBaseEntity">CBaseEntity</a>*

An entity which loads keyvalues from an external data file.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetKeyValueBlock</td>
			<td class="ent_list_name">handle CLogicExternalData::GetKeyValueBlock()</td>
			<td class="ent_list_summary">Gets the current external data block expressed in CScriptKeyValues.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetKeyValues</td>
			<td class="ent_list_name">handle CLogicExternalData::GetKeyValues()</td>
			<td class="ent_list_summary">Gets the external data expressed in CScriptKeyValues.</td>
		</tr>
		<tr>
			<td class="ent_list_name">LoadFile</td>
			<td class="ent_list_name">void CLogicExternalData::LoadFile()</td>
			<td class="ent_list_summary">Loads external data from the external file.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SaveFile</td>
			<td class="ent_list_name">void CLogicExternalData::SaveFile()</td>
			<td class="ent_list_summary">Saves the external data to the external file.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetKeyValueBlock</td>
			<td class="ent_list_name">void CLogicExternalData::SetKeyValueBlock(handle)</td>
			<td class="ent_list_summary">Sets the current external data block from a CScriptKeyValues object.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetKeyValues</td>
			<td class="ent_list_name">void CLogicExternalData::SetKeyValues(handle)</td>
			<td class="ent_list_summary">Sets the external data from a CScriptKeyValues object.</td>
		</tr>
	</tbody>
</table>

<h3 id="CUserCmd">CUserCmd</h3>


<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetButtons</td>
			<td class="ent_list_name">int CUserCmd::GetButtons()</td>
			<td class="ent_list_summary">Input button state.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetCommandNumber</td>
			<td class="ent_list_name">int CUserCmd::GetCommandNumber()</td>
			<td class="ent_list_summary">For matching server and client commands for debugging.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetForwardMove</td>
			<td class="ent_list_name">float CUserCmd::GetForwardMove()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetImpulse</td>
			<td class="ent_list_name">int CUserCmd::GetImpulse()</td>
			<td class="ent_list_summary">Impulse command issued.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMouseX</td>
			<td class="ent_list_name">int CUserCmd::GetMouseX()</td>
			<td class="ent_list_summary">Mouse accum in x from create move.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMouseY</td>
			<td class="ent_list_name">int CUserCmd::GetMouseY()</td>
			<td class="ent_list_summary">Mouse accum in y from create move.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetRandomSeed</td>
			<td class="ent_list_name">int CUserCmd::GetRandomSeed()</td>
			<td class="ent_list_summary">For shared random functions.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSideMove</td>
			<td class="ent_list_name">float CUserCmd::GetSideMove()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetTickCount</td>
			<td class="ent_list_name">int CUserCmd::GetTickCount()</td>
			<td class="ent_list_summary">The tick the client created this command.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetUpMove</td>
			<td class="ent_list_name">float CUserCmd::GetUpMove()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetViewAngles</td>
			<td class="ent_list_name">Vector CUserCmd::GetViewAngles()</td>
			<td class="ent_list_summary">Player instantaneous view angles.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetWeaponSelect</td>
			<td class="ent_list_name">int CUserCmd::GetWeaponSelect()</td>
			<td class="ent_list_summary">Current weapon id.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetWeaponSubtype</td>
			<td class="ent_list_name">int CUserCmd::GetWeaponSubtype()</td>
			<td class="ent_list_summary">Current weapon subtype id.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetButtons</td>
			<td class="ent_list_name">void CUserCmd::SetButtons(int)</td>
			<td class="ent_list_summary">Sets input button state.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetForwardMove</td>
			<td class="ent_list_name">void CUserCmd::SetForwardMove(float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetImpulse</td>
			<td class="ent_list_name">void CUserCmd::SetImpulse(int)</td>
			<td class="ent_list_summary">Sets impulse command issued.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetMouseX</td>
			<td class="ent_list_name">void CUserCmd::SetMouseX(int)</td>
			<td class="ent_list_summary">Sets mouse accum in x from create move.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetMouseY</td>
			<td class="ent_list_name">void CUserCmd::SetMouseY(int)</td>
			<td class="ent_list_summary">Sets mouse accum in y from create move.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSideMove</td>
			<td class="ent_list_name">void CUserCmd::SetSideMove(float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetUpMove</td>
			<td class="ent_list_name">void CUserCmd::SetUpMove(float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetViewAngles</td>
			<td class="ent_list_name">void CUserCmd::SetViewAngles(Vector)</td>
			<td class="ent_list_summary">Sets player instantaneous view angles.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetWeaponSelect</td>
			<td class="ent_list_name">void CUserCmd::SetWeaponSelect(int)</td>
			<td class="ent_list_summary">Sets current weapon id.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetWeaponSubtype</td>
			<td class="ent_list_name">void CUserCmd::SetWeaponSubtype(int)</td>
			<td class="ent_list_summary">Sets current weapon subtype id.</td>
		</tr>
	</tbody>
</table>

<h3 id="IPhysicsObject">IPhysicsObject</h3>
VPhysics object class.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">ApplyForceCenter</td>
			<td class="ent_list_name">void IPhysicsObject::ApplyForceCenter(Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ApplyForceOffset</td>
			<td class="ent_list_name">void IPhysicsObject::ApplyForceOffset(Vector, Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ApplyTorqueCenter</td>
			<td class="ent_list_name">void IPhysicsObject::ApplyTorqueCenter(Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">EnableCollisions</td>
			<td class="ent_list_name">void IPhysicsObject::EnableCollisions(bool)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">EnableDrag</td>
			<td class="ent_list_name">void IPhysicsObject::EnableDrag(bool)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">EnableGravity</td>
			<td class="ent_list_name">void IPhysicsObject::EnableGravity(bool)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">EnableMotion</td>
			<td class="ent_list_name">void IPhysicsObject::EnableMotion(bool)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetInertia</td>
			<td class="ent_list_name">Vector IPhysicsObject::GetInertia()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetInvInertia</td>
			<td class="ent_list_name">Vector IPhysicsObject::GetInvInertia()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetInvMass</td>
			<td class="ent_list_name">float IPhysicsObject::GetInvMass()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMass</td>
			<td class="ent_list_name">float IPhysicsObject::GetMass()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetName</td>
			<td class="ent_list_name">string IPhysicsObject::GetName()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsAsleep</td>
			<td class="ent_list_name">bool IPhysicsObject::IsAsleep()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsAttachedToConstraint</td>
			<td class="ent_list_name">bool IPhysicsObject::IsAttachedToConstraint(bool)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsCollisionEnabled</td>
			<td class="ent_list_name">bool IPhysicsObject::IsCollisionEnabled()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDragEnabled</td>
			<td class="ent_list_name">bool IPhysicsObject::IsDragEnabled()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsFluid</td>
			<td class="ent_list_name">bool IPhysicsObject::IsFluid()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsGravityEnabled</td>
			<td class="ent_list_name">bool IPhysicsObject::IsGravityEnabled()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsHinged</td>
			<td class="ent_list_name">bool IPhysicsObject::IsHinged()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsMotionEnabled</td>
			<td class="ent_list_name">bool IPhysicsObject::IsMotionEnabled()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsMoveable</td>
			<td class="ent_list_name">bool IPhysicsObject::IsMoveable()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsStatic</td>
			<td class="ent_list_name">bool IPhysicsObject::IsStatic()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsTrigger</td>
			<td class="ent_list_name">bool IPhysicsObject::IsTrigger()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetInertia</td>
			<td class="ent_list_name">void IPhysicsObject::SetInertia(Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetMass</td>
			<td class="ent_list_name">void IPhysicsObject::SetMass(float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Sleep</td>
			<td class="ent_list_name">void IPhysicsObject::Sleep()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Wake</td>
			<td class="ent_list_name">void IPhysicsObject::Wake()</td>
			<td class="ent_list_summary"></td>
		</tr>
	</tbody>
</table>

<h3 id="cplane_t">cplane_t</h3>


<h3 id="FireBulletsInfo_t">FireBulletsInfo_t</h3>


<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetAdditionalIgnoreEnt</td>
			<td class="ent_list_name">handle FireBulletsInfo_t::GetAdditionalIgnoreEnt()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAmmoType</td>
			<td class="ent_list_name">int FireBulletsInfo_t::GetAmmoType()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAttacker</td>
			<td class="ent_list_name">handle FireBulletsInfo_t::GetAttacker()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDamage</td>
			<td class="ent_list_name">float FireBulletsInfo_t::GetDamage()</td>
			<td class="ent_list_summary">Gets the damage the bullets should deal. 0 = use ammo type</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDamageForceScale</td>
			<td class="ent_list_name">float FireBulletsInfo_t::GetDamageForceScale()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDirShooting</td>
			<td class="ent_list_name">Vector FireBulletsInfo_t::GetDirShooting()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDistance</td>
			<td class="ent_list_name">float FireBulletsInfo_t::GetDistance()</td>
			<td class="ent_list_summary">Gets the distance the bullets should travel.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFlags</td>
			<td class="ent_list_name">int FireBulletsInfo_t::GetFlags()</td>
			<td class="ent_list_summary">Gets the flags the bullets should use.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPlayerDamage</td>
			<td class="ent_list_name">int FireBulletsInfo_t::GetPlayerDamage()</td>
			<td class="ent_list_summary">Gets the damage the bullets should deal when hitting the player. 0 = use regular damage</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPrimaryAttack</td>
			<td class="ent_list_name">bool FireBulletsInfo_t::GetPrimaryAttack()</td>
			<td class="ent_list_summary">Gets whether the bullets came from a primary attack.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetShots</td>
			<td class="ent_list_name">int FireBulletsInfo_t::GetShots()</td>
			<td class="ent_list_summary">Gets the number of shots which should be fired.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSource</td>
			<td class="ent_list_name">Vector FireBulletsInfo_t::GetSource()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSpread</td>
			<td class="ent_list_name">Vector FireBulletsInfo_t::GetSpread()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetTracerFreq</td>
			<td class="ent_list_name">int FireBulletsInfo_t::GetTracerFreq()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetAdditionalIgnoreEnt</td>
			<td class="ent_list_name">void FireBulletsInfo_t::SetAdditionalIgnoreEnt(handle)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetAmmoType</td>
			<td class="ent_list_name">void FireBulletsInfo_t::SetAmmoType(int)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetAttacker</td>
			<td class="ent_list_name">void FireBulletsInfo_t::SetAttacker(handle)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDamage</td>
			<td class="ent_list_name">void FireBulletsInfo_t::SetDamage(float)</td>
			<td class="ent_list_summary">Sets the damage the bullets should deal. 0 = use ammo type</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDamageForceScale</td>
			<td class="ent_list_name">void FireBulletsInfo_t::SetDamageForceScale(float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDirShooting</td>
			<td class="ent_list_name">void FireBulletsInfo_t::SetDirShooting(Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDistance</td>
			<td class="ent_list_name">void FireBulletsInfo_t::SetDistance(float)</td>
			<td class="ent_list_summary">Sets the distance the bullets should travel.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetFlags</td>
			<td class="ent_list_name">void FireBulletsInfo_t::SetFlags(float)</td>
			<td class="ent_list_summary">Sets the flags the bullets should use.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPlayerDamage</td>
			<td class="ent_list_name">void FireBulletsInfo_t::SetPlayerDamage(float)</td>
			<td class="ent_list_summary">Sets the damage the bullets should deal when hitting the player. 0 = use regular damage</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPrimaryAttack</td>
			<td class="ent_list_name">void FireBulletsInfo_t::SetPrimaryAttack(bool)</td>
			<td class="ent_list_summary">Sets whether the bullets came from a primary attack.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetShots</td>
			<td class="ent_list_name">void FireBulletsInfo_t::SetShots(int)</td>
			<td class="ent_list_summary">Sets the number of shots which should be fired.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSource</td>
			<td class="ent_list_name">void FireBulletsInfo_t::SetSource(Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSpread</td>
			<td class="ent_list_name">void FireBulletsInfo_t::SetSpread(Vector)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetTracerFreq</td>
			<td class="ent_list_name">void FireBulletsInfo_t::SetTracerFreq(int)</td>
			<td class="ent_list_summary"></td>
		</tr>
	</tbody>
</table>

<h3 id="CBasePropDoor">CBasePropDoor</h3>
*Extends <a href="#CBaseAnimating">CBaseAnimating</a>*

The base class used by prop doors, such as prop_door_rotating.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">DoorCanClose</td>
			<td class="ent_list_name">bool CBasePropDoor::DoorCanClose(bool)</td>
			<td class="ent_list_summary">Return true if the door has room to close. Boolean is for whether or not this is an automatic close and not manually triggered by someone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DoorCanOpen</td>
			<td class="ent_list_name">bool CBasePropDoor::DoorCanOpen()</td>
			<td class="ent_list_summary">Return true if there are other doors connected to this one.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetActivator</td>
			<td class="ent_list_name">handle CBasePropDoor::GetActivator()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDoorList</td>
			<td class="ent_list_name">handle CBasePropDoor::GetDoorList(int)</td>
			<td class="ent_list_summary">Get connected door entity by index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDoorListCount</td>
			<td class="ent_list_name">int CBasePropDoor::GetDoorListCount()</td>
			<td class="ent_list_summary">Get number of connected doors.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFullyClosedSound</td>
			<td class="ent_list_name">string CBasePropDoor::GetFullyClosedSound()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFullyOpenSound</td>
			<td class="ent_list_name">string CBasePropDoor::GetFullyOpenSound()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetLockedSound</td>
			<td class="ent_list_name">string CBasePropDoor::GetLockedSound()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMovingSound</td>
			<td class="ent_list_name">string CBasePropDoor::GetMovingSound()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetUnlockedSound</td>
			<td class="ent_list_name">string CBasePropDoor::GetUnlockedSound()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">HasSlaves</td>
			<td class="ent_list_name">bool CBasePropDoor::HasSlaves()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDoorAjar</td>
			<td class="ent_list_name">bool CBasePropDoor::IsDoorAjar()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDoorBlocked</td>
			<td class="ent_list_name">bool CBasePropDoor::IsDoorBlocked()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDoorClosed</td>
			<td class="ent_list_name">bool CBasePropDoor::IsDoorClosed()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDoorClosing</td>
			<td class="ent_list_name">bool CBasePropDoor::IsDoorClosing()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDoorLocked</td>
			<td class="ent_list_name">bool CBasePropDoor::IsDoorLocked()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDoorOpen</td>
			<td class="ent_list_name">bool CBasePropDoor::IsDoorOpen()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDoorOpening</td>
			<td class="ent_list_name">bool CBasePropDoor::IsDoorOpening()</td>
			<td class="ent_list_summary"></td>
		</tr>
	</tbody>
</table>

<h3 id="CLocalize">CLocalize</h3>
Accesses functions related to localization strings.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AddStringAsUTF8</td>
			<td class="ent_list_name">void CLocalize::AddStringAsUTF8(string, string)</td>
			<td class="ent_list_summary">Adds a new localized token as a UTF-8 string (not Unicode).</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetTokenAsUTF8</td>
			<td class="ent_list_name">string CLocalize::GetTokenAsUTF8(string)</td>
			<td class="ent_list_summary">Gets the current language's token as a UTF-8 string (not Unicode).</td>
		</tr>
	</tbody>
</table>

<h3 id="surfacedata_t">surfacedata_t</h3>


<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetFriction</td>
			<td class="ent_list_name">float surfacedata_t::GetFriction()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetJumpFactor</td>
			<td class="ent_list_name">float surfacedata_t::GetJumpFactor()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMaterialChar</td>
			<td class="ent_list_name">char surfacedata_t::GetMaterialChar()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundBreak</td>
			<td class="ent_list_name">string surfacedata_t::GetSoundBreak()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundBulletImpact</td>
			<td class="ent_list_name">string surfacedata_t::GetSoundBulletImpact()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundImpactHard</td>
			<td class="ent_list_name">string surfacedata_t::GetSoundImpactHard()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundImpactSoft</td>
			<td class="ent_list_name">string surfacedata_t::GetSoundImpactSoft()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundRolling</td>
			<td class="ent_list_name">string surfacedata_t::GetSoundRolling()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundScrapeRough</td>
			<td class="ent_list_name">string surfacedata_t::GetSoundScrapeRough()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundScrapeSmooth</td>
			<td class="ent_list_name">string surfacedata_t::GetSoundScrapeSmooth()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundStepLeft</td>
			<td class="ent_list_name">string surfacedata_t::GetSoundStepLeft()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundStepRight</td>
			<td class="ent_list_name">string surfacedata_t::GetSoundStepRight()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundStrain</td>
			<td class="ent_list_name">string surfacedata_t::GetSoundStrain()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetThickness</td>
			<td class="ent_list_name">float surfacedata_t::GetThickness()</td>
			<td class="ent_list_summary"></td>
		</tr>
	</tbody>
</table>

<h3 id="CAI_SensedObjectsManager">CAI_SensedObjectsManager</h3>
Manager which handles sensed objects.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AddEntity</td>
			<td class="ent_list_name">void CAI_SensedObjectsManager::AddEntity(handle)</td>
			<td class="ent_list_summary">Adds an entity to the sensed object list.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemoveEntity</td>
			<td class="ent_list_name">void CAI_SensedObjectsManager::RemoveEntity(handle)</td>
			<td class="ent_list_summary">Removes an entity from the sensed object list.</td>
		</tr>
	</tbody>
</table>

<h3 id="CTakeDamageInfo">CTakeDamageInfo</h3>
Damage information handler.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AddDamage</td>
			<td class="ent_list_name">void CTakeDamageInfo::AddDamage(float)</td>
			<td class="ent_list_summary">Adds to the damage.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AddDamageType</td>
			<td class="ent_list_name">void CTakeDamageInfo::AddDamageType(int)</td>
			<td class="ent_list_summary">Adds to the damage type.</td>
		</tr>
		<tr>
			<td class="ent_list_name">BaseDamageIsValid</td>
			<td class="ent_list_name">bool CTakeDamageInfo::BaseDamageIsValid()</td>
			<td class="ent_list_summary">Checks if the base damage is valid.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAmmoName</td>
			<td class="ent_list_name">string CTakeDamageInfo::GetAmmoName()</td>
			<td class="ent_list_summary">Gets the ammo type name.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAmmoType</td>
			<td class="ent_list_name">int CTakeDamageInfo::GetAmmoType()</td>
			<td class="ent_list_summary">Gets the ammo type.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetAttacker</td>
			<td class="ent_list_name">handle CTakeDamageInfo::GetAttacker()</td>
			<td class="ent_list_summary">Gets the attacker.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetBaseDamage</td>
			<td class="ent_list_name">float CTakeDamageInfo::GetBaseDamage()</td>
			<td class="ent_list_summary">Gets the base damage.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDamage</td>
			<td class="ent_list_name">float CTakeDamageInfo::GetDamage()</td>
			<td class="ent_list_summary">Gets the damage.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDamageBonus</td>
			<td class="ent_list_name">float CTakeDamageInfo::GetDamageBonus()</td>
			<td class="ent_list_summary">Gets the damage bonus.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDamageCustom</td>
			<td class="ent_list_name">int CTakeDamageInfo::GetDamageCustom()</td>
			<td class="ent_list_summary">Gets the damage custom.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDamageForce</td>
			<td class="ent_list_name">Vector CTakeDamageInfo::GetDamageForce()</td>
			<td class="ent_list_summary">Gets the damage force.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDamagePosition</td>
			<td class="ent_list_name">Vector CTakeDamageInfo::GetDamagePosition()</td>
			<td class="ent_list_summary">Gets the damage position.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDamageStats</td>
			<td class="ent_list_name">int CTakeDamageInfo::GetDamageStats()</td>
			<td class="ent_list_summary">Gets the damage stats.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDamageType</td>
			<td class="ent_list_name">int CTakeDamageInfo::GetDamageType()</td>
			<td class="ent_list_summary">Gets the damage type.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDamagedOtherPlayers</td>
			<td class="ent_list_name">int CTakeDamageInfo::GetDamagedOtherPlayers()</td>
			<td class="ent_list_summary">Gets whether other players have been damaged.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetInflictor</td>
			<td class="ent_list_name">handle CTakeDamageInfo::GetInflictor()</td>
			<td class="ent_list_summary">Gets the inflictor.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMaxDamage</td>
			<td class="ent_list_name">float CTakeDamageInfo::GetMaxDamage()</td>
			<td class="ent_list_summary">Gets the max damage.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPlayerPenetrationCount</td>
			<td class="ent_list_name">int CTakeDamageInfo::GetPlayerPenetrationCount()</td>
			<td class="ent_list_summary">Gets the player penetration count.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetReportedPosition</td>
			<td class="ent_list_name">Vector CTakeDamageInfo::GetReportedPosition()</td>
			<td class="ent_list_summary">Gets the reported damage position.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetWeapon</td>
			<td class="ent_list_name">handle CTakeDamageInfo::GetWeapon()</td>
			<td class="ent_list_summary">Gets the weapon.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsForceFriendlyFire</td>
			<td class="ent_list_name">bool CTakeDamageInfo::IsForceFriendlyFire()</td>
			<td class="ent_list_summary">Gets force friendly fire.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ScaleDamage</td>
			<td class="ent_list_name">void CTakeDamageInfo::ScaleDamage(float)</td>
			<td class="ent_list_summary">Scales the damage.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ScaleDamageForce</td>
			<td class="ent_list_name">void CTakeDamageInfo::ScaleDamageForce(float)</td>
			<td class="ent_list_summary">Scales the damage force.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetAmmoType</td>
			<td class="ent_list_name">void CTakeDamageInfo::SetAmmoType(int)</td>
			<td class="ent_list_summary">Sets the ammo type.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetAttacker</td>
			<td class="ent_list_name">void CTakeDamageInfo::SetAttacker(handle)</td>
			<td class="ent_list_summary">Sets the attacker.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDamage</td>
			<td class="ent_list_name">void CTakeDamageInfo::SetDamage(float)</td>
			<td class="ent_list_summary">Sets the damage.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDamageBonus</td>
			<td class="ent_list_name">void CTakeDamageInfo::SetDamageBonus(float)</td>
			<td class="ent_list_summary">Sets the damage bonus.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDamageCustom</td>
			<td class="ent_list_name">void CTakeDamageInfo::SetDamageCustom(int)</td>
			<td class="ent_list_summary">Sets the damage custom.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDamageForce</td>
			<td class="ent_list_name">void CTakeDamageInfo::SetDamageForce(Vector)</td>
			<td class="ent_list_summary">Sets the damage force.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDamagePosition</td>
			<td class="ent_list_name">void CTakeDamageInfo::SetDamagePosition(Vector)</td>
			<td class="ent_list_summary">Sets the damage position.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDamageStats</td>
			<td class="ent_list_name">void CTakeDamageInfo::SetDamageStats(int)</td>
			<td class="ent_list_summary">Sets the damage stats.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDamageType</td>
			<td class="ent_list_name">void CTakeDamageInfo::SetDamageType(int)</td>
			<td class="ent_list_summary">Sets the damage type.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDamagedOtherPlayers</td>
			<td class="ent_list_name">void CTakeDamageInfo::SetDamagedOtherPlayers(int)</td>
			<td class="ent_list_summary">Sets whether other players have been damaged.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetForceFriendlyFire</td>
			<td class="ent_list_name">void CTakeDamageInfo::SetForceFriendlyFire(bool)</td>
			<td class="ent_list_summary">Sets force friendly fire.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetInflictor</td>
			<td class="ent_list_name">void CTakeDamageInfo::SetInflictor(handle)</td>
			<td class="ent_list_summary">Sets the inflictor.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetMaxDamage</td>
			<td class="ent_list_name">void CTakeDamageInfo::SetMaxDamage(float)</td>
			<td class="ent_list_summary">Sets the max damage.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPlayerPenetrationCount</td>
			<td class="ent_list_name">void CTakeDamageInfo::SetPlayerPenetrationCount(int)</td>
			<td class="ent_list_summary">Sets the player penetration count.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetReportedPosition</td>
			<td class="ent_list_name">void CTakeDamageInfo::SetReportedPosition(Vector)</td>
			<td class="ent_list_summary">Sets the reported damage position.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetWeapon</td>
			<td class="ent_list_name">void CTakeDamageInfo::SetWeapon(handle)</td>
			<td class="ent_list_summary">Sets the weapon.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SubtractDamage</td>
			<td class="ent_list_name">void CTakeDamageInfo::SubtractDamage(float)</td>
			<td class="ent_list_summary">Removes from the damage.</td>
		</tr>
	</tbody>
</table>

<h3 id="CMapbaseSystem">CMapbaseSystem</h3>
All-purpose Mapbase system primarily used for map-specific files.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AddManifestFile</td>
			<td class="ent_list_name">void CMapbaseSystem::AddManifestFile(string)</td>
			<td class="ent_list_summary">Loads a manifest file.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetModName</td>
			<td class="ent_list_name">string CMapbaseSystem::GetModName()</td>
			<td class="ent_list_summary">Gets the name of the mod. This is the name which shows up on Steam, RPC, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsCoreMapbase</td>
			<td class="ent_list_name">bool CMapbaseSystem::IsCoreMapbase()</td>
			<td class="ent_list_summary">Indicates whether this is one of the original Mapbase mods or just a separate mod using its code.</td>
		</tr>
		<tr>
			<td class="ent_list_name">LoadCustomActbusyFile</td>
			<td class="ent_list_name">void CMapbaseSystem::LoadCustomActbusyFile(string)</td>
			<td class="ent_list_summary">Loads a custom actbusy file.</td>
		</tr>
		<tr>
			<td class="ent_list_name">LoadCustomChoreoSentenceFile</td>
			<td class="ent_list_name">void CMapbaseSystem::LoadCustomChoreoSentenceFile(string)</td>
			<td class="ent_list_summary">Loads a custom choreo sentence file.</td>
		</tr>
		<tr>
			<td class="ent_list_name">LoadCustomLocalizationFile</td>
			<td class="ent_list_name">void CMapbaseSystem::LoadCustomLocalizationFile(string)</td>
			<td class="ent_list_summary">Loads a custom localization file.</td>
		</tr>
		<tr>
			<td class="ent_list_name">LoadCustomSoundscriptFile</td>
			<td class="ent_list_name">void CMapbaseSystem::LoadCustomSoundscriptFile(string)</td>
			<td class="ent_list_summary">Loads a custom soundscript file.</td>
		</tr>
		<tr>
			<td class="ent_list_name">LoadCustomSurfacePropsFile</td>
			<td class="ent_list_name">void CMapbaseSystem::LoadCustomSurfacePropsFile(string)</td>
			<td class="ent_list_summary">Loads a custom surface properties file.</td>
		</tr>
		<tr>
			<td class="ent_list_name">LoadCustomTalkerFile</td>
			<td class="ent_list_name">void CMapbaseSystem::LoadCustomTalkerFile(string)</td>
			<td class="ent_list_summary">Loads a custom talker file.</td>
		</tr>
	</tbody>
</table>

<h3 id="EmitSound_t">EmitSound_t</h3>


<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">ClearOrigin</td>
			<td class="ent_list_name">void EmitSound_t::ClearOrigin()</td>
			<td class="ent_list_summary">Clears the sound's origin override if it has one.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetChannel</td>
			<td class="ent_list_name">int EmitSound_t::GetChannel()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetEmitCloseCaption</td>
			<td class="ent_list_name">float EmitSound_t::GetEmitCloseCaption()</td>
			<td class="ent_list_summary">Gets whether or not the sound will emit closed captioning/subtitles.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFlags</td>
			<td class="ent_list_name">int EmitSound_t::GetFlags()</td>
			<td class="ent_list_summary">Gets the sound's flags. See the 'SND_' set of constants.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetOrigin</td>
			<td class="ent_list_name">Vector EmitSound_t::GetOrigin()</td>
			<td class="ent_list_summary">Gets the sound's origin override.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundLevel</td>
			<td class="ent_list_name">int EmitSound_t::GetSoundLevel()</td>
			<td class="ent_list_summary">Gets the sound's level in decibels. (Note that this may not apply to soundscripts)</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundName</td>
			<td class="ent_list_name">string EmitSound_t::GetSoundName()</td>
			<td class="ent_list_summary">Gets the sound's file path or soundscript name.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundScriptHandle</td>
			<td class="ent_list_name">int EmitSound_t::GetSoundScriptHandle()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSoundTime</td>
			<td class="ent_list_name">float EmitSound_t::GetSoundTime()</td>
			<td class="ent_list_summary">Gets the time the sound will begin, relative to Time().</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSpeakerEntity</td>
			<td class="ent_list_name">int EmitSound_t::GetSpeakerEntity()</td>
			<td class="ent_list_summary">Gets the sound's original source if it is being transmitted by a microphone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSpecialDSP</td>
			<td class="ent_list_name">int EmitSound_t::GetSpecialDSP()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetVolume</td>
			<td class="ent_list_name">float EmitSound_t::GetVolume()</td>
			<td class="ent_list_summary">(Note that this may not apply to soundscripts)</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetWarnOnDirectWaveReference</td>
			<td class="ent_list_name">float EmitSound_t::GetWarnOnDirectWaveReference()</td>
			<td class="ent_list_summary">Gets whether or not the sound will send a message to the console if it references a direct sound file instead of a soundscript.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetWarnOnMissingCloseCaption</td>
			<td class="ent_list_name">float EmitSound_t::GetWarnOnMissingCloseCaption()</td>
			<td class="ent_list_summary">Gets whether or not the sound will send a message to the console if there is no corresponding closed captioning token.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasOrigin</td>
			<td class="ent_list_name">bool EmitSound_t::HasOrigin()</td>
			<td class="ent_list_summary">Returns true if the sound has an origin override.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetChannel</td>
			<td class="ent_list_name">void EmitSound_t::SetChannel(int)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetEmitCloseCaption</td>
			<td class="ent_list_name">void EmitSound_t::SetEmitCloseCaption(bool)</td>
			<td class="ent_list_summary">Sets whether or not the sound will emit closed captioning/subtitles.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetFlags</td>
			<td class="ent_list_name">void EmitSound_t::SetFlags(int)</td>
			<td class="ent_list_summary">Sets the sound's flags. See the 'SND_' set of constants.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetOrigin</td>
			<td class="ent_list_name">void EmitSound_t::SetOrigin(Vector)</td>
			<td class="ent_list_summary">Sets the sound's origin override.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSoundLevel</td>
			<td class="ent_list_name">void EmitSound_t::SetSoundLevel(int)</td>
			<td class="ent_list_summary">Sets the sound's level in decibels. (Note that this may not apply to soundscripts)</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSoundName</td>
			<td class="ent_list_name">void EmitSound_t::SetSoundName(string)</td>
			<td class="ent_list_summary">Sets the sound's file path or soundscript name.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSoundScriptHandle</td>
			<td class="ent_list_name">void EmitSound_t::SetSoundScriptHandle(int)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSoundTime</td>
			<td class="ent_list_name">void EmitSound_t::SetSoundTime(float)</td>
			<td class="ent_list_summary">Sets the time the sound will begin, relative to Time().</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSpeakerEntity</td>
			<td class="ent_list_name">void EmitSound_t::SetSpeakerEntity(int)</td>
			<td class="ent_list_summary">Sets the sound's original source if it is being transmitted by a microphone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSpecialDSP</td>
			<td class="ent_list_name">void EmitSound_t::SetSpecialDSP(int)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetVolume</td>
			<td class="ent_list_name">void EmitSound_t::SetVolume(float)</td>
			<td class="ent_list_summary">(Note that this may not apply to soundscripts)</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetWarnOnDirectWaveReference</td>
			<td class="ent_list_name">void EmitSound_t::SetWarnOnDirectWaveReference(bool)</td>
			<td class="ent_list_summary">Sets whether or not the sound will send a message to the console if it references a direct sound file instead of a soundscript.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetWarnOnMissingCloseCaption</td>
			<td class="ent_list_name">void EmitSound_t::SetWarnOnMissingCloseCaption(bool)</td>
			<td class="ent_list_summary">Sets whether or not the sound will send a message to the console if there is no corresponding closed captioning token.</td>
		</tr>
	</tbody>
</table>

<h3 id="CFourWheelVehiclePhysics">CFourWheelVehiclePhysics</h3>
Handler for four-wheel vehicle physics.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">BoostTimeLeft</td>
			<td class="ent_list_name">int CFourWheelVehiclePhysics::BoostTimeLeft()</td>
			<td class="ent_list_summary">Gets how much time is left in any current boost.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DisableMotion</td>
			<td class="ent_list_name">void CFourWheelVehiclePhysics::DisableMotion()</td>
			<td class="ent_list_summary">Disables vehicle motion.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EnableMotion</td>
			<td class="ent_list_name">void CFourWheelVehiclePhysics::EnableMotion()</td>
			<td class="ent_list_summary">Enables vehicle motion.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetHLSpeed</td>
			<td class="ent_list_name">float CFourWheelVehiclePhysics::GetHLSpeed()</td>
			<td class="ent_list_summary">Gets HL speed.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMaxSpeed</td>
			<td class="ent_list_name">int CFourWheelVehiclePhysics::GetMaxSpeed()</td>
			<td class="ent_list_summary">Gets the max speed.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetRPM</td>
			<td class="ent_list_name">int CFourWheelVehiclePhysics::GetRPM()</td>
			<td class="ent_list_summary">Gets the RPM.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSpeed</td>
			<td class="ent_list_name">int CFourWheelVehiclePhysics::GetSpeed()</td>
			<td class="ent_list_summary">Gets the speed.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSteering</td>
			<td class="ent_list_name">float CFourWheelVehiclePhysics::GetSteering()</td>
			<td class="ent_list_summary">Gets the steeering.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSteeringDegrees</td>
			<td class="ent_list_name">float CFourWheelVehiclePhysics::GetSteeringDegrees()</td>
			<td class="ent_list_summary">Gets the degrees of steeering.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetThrottle</td>
			<td class="ent_list_name">float CFourWheelVehiclePhysics::GetThrottle()</td>
			<td class="ent_list_summary">Gets the throttle.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasBoost</td>
			<td class="ent_list_name">bool CFourWheelVehiclePhysics::HasBoost()</td>
			<td class="ent_list_summary">Checks if the vehicle has the ability to boost.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsBoosting</td>
			<td class="ent_list_name">bool CFourWheelVehiclePhysics::IsBoosting()</td>
			<td class="ent_list_summary">Checks if the vehicle is boosting.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsEngineDisabled</td>
			<td class="ent_list_name">bool CFourWheelVehiclePhysics::IsEngineDisabled()</td>
			<td class="ent_list_summary">Checks whether the engine is disabled.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetAction</td>
			<td class="ent_list_name">void CFourWheelVehiclePhysics::SetAction(float)</td>
			<td class="ent_list_summary">Sets the action.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetBoost</td>
			<td class="ent_list_name">void CFourWheelVehiclePhysics::SetBoost(float)</td>
			<td class="ent_list_summary">Sets the boost.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDisableEngine</td>
			<td class="ent_list_name">void CFourWheelVehiclePhysics::SetDisableEngine(bool)</td>
			<td class="ent_list_summary">Sets whether the engine is disabled.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetHandbrake</td>
			<td class="ent_list_name">void CFourWheelVehiclePhysics::SetHandbrake(bool)</td>
			<td class="ent_list_summary">Sets the handbrake.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetHasBrakePedal</td>
			<td class="ent_list_name">void CFourWheelVehiclePhysics::SetHasBrakePedal(bool)</td>
			<td class="ent_list_summary">Sets whether a handbrake pedal exists.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetMaxReverseThrottle</td>
			<td class="ent_list_name">void CFourWheelVehiclePhysics::SetMaxReverseThrottle(float)</td>
			<td class="ent_list_summary">Sets the max reverse throttle.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetMaxThrottle</td>
			<td class="ent_list_name">void CFourWheelVehiclePhysics::SetMaxThrottle(float)</td>
			<td class="ent_list_summary">Sets the max throttle.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSteering</td>
			<td class="ent_list_name">void CFourWheelVehiclePhysics::SetSteering(float, float)</td>
			<td class="ent_list_summary">Sets the steering.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSteeringDegrees</td>
			<td class="ent_list_name">void CFourWheelVehiclePhysics::SetSteeringDegrees(float)</td>
			<td class="ent_list_summary">Sets the degrees of steering.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetThrottle</td>
			<td class="ent_list_name">void CFourWheelVehiclePhysics::SetThrottle(float)</td>
			<td class="ent_list_summary">Sets the throttle.</td>
		</tr>
	</tbody>
</table>

<h3 id="CAI_Network">CAI_Network</h3>
The global list of AI nodes.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetNodeHint</td>
			<td class="ent_list_name">handle CAI_Network::GetNodeHint(int)</td>
			<td class="ent_list_summary">Get a node's hint</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNodePosition</td>
			<td class="ent_list_name">Vector CAI_Network::GetNodePosition(int)</td>
			<td class="ent_list_summary">Get position of node using a generic human hull</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNodePositionWithHull</td>
			<td class="ent_list_name">Vector CAI_Network::GetNodePositionWithHull(int, int)</td>
			<td class="ent_list_summary">Get position of node using the specified hull</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNodeType</td>
			<td class="ent_list_name">int CAI_Network::GetNodeType(int)</td>
			<td class="ent_list_summary">Get a node's type</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNodeYaw</td>
			<td class="ent_list_name">float CAI_Network::GetNodeYaw(int)</td>
			<td class="ent_list_summary">Get yaw of node</td>
		</tr>
		<tr>
			<td class="ent_list_name">NearestNodeToPoint</td>
			<td class="ent_list_name">int CAI_Network::NearestNodeToPoint(Vector, bool)</td>
			<td class="ent_list_summary">Get ID of nearest node</td>
		</tr>
		<tr>
			<td class="ent_list_name">NearestNodeToPointForNPC</td>
			<td class="ent_list_name">int CAI_Network::NearestNodeToPointForNPC(handle, Vector, bool)</td>
			<td class="ent_list_summary">Get ID of nearest node using the specified NPC's properties</td>
		</tr>
		<tr>
			<td class="ent_list_name">NumNodes</td>
			<td class="ent_list_name">int CAI_Network::NumNodes()</td>
			<td class="ent_list_summary">Number of nodes in the level</td>
		</tr>
	</tbody>
</table>

<h3 id="CNetPropManager">CNetPropManager</h3>
Allows reading and updating the network properties and data fields of an entity.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">Dump</td>
			<td class="ent_list_name">void CNetPropManager::Dump(handle, string)</td>
			<td class="ent_list_summary">Dump all readable netprop and datafield values of this entity. Pass in file name to write into.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPropArraySize</td>
			<td class="ent_list_name">int CNetPropManager::GetPropArraySize(handle, string)</td>
			<td class="ent_list_summary">Returns the size of an array.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPropEntity</td>
			<td class="ent_list_name">handle CNetPropManager::GetPropEntity(handle, string)</td>
			<td class="ent_list_summary">Reads an entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPropEntityArray</td>
			<td class="ent_list_name">handle CNetPropManager::GetPropEntityArray(handle, string, int)</td>
			<td class="ent_list_summary">Reads an entity from an array.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPropFloat</td>
			<td class="ent_list_name">float CNetPropManager::GetPropFloat(handle, string)</td>
			<td class="ent_list_summary">Reads a float.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPropFloatArray</td>
			<td class="ent_list_name">float CNetPropManager::GetPropFloatArray(handle, string, int)</td>
			<td class="ent_list_summary">Reads a float from an array.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPropInt</td>
			<td class="ent_list_name">int CNetPropManager::GetPropInt(handle, string)</td>
			<td class="ent_list_summary">Reads an integer.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPropIntArray</td>
			<td class="ent_list_name">int CNetPropManager::GetPropIntArray(handle, string, int)</td>
			<td class="ent_list_summary">Reads an integer from an array.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPropString</td>
			<td class="ent_list_name">string CNetPropManager::GetPropString(handle, string)</td>
			<td class="ent_list_summary">Reads a string.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPropStringArray</td>
			<td class="ent_list_name">string CNetPropManager::GetPropStringArray(handle, string, int)</td>
			<td class="ent_list_summary">Reads a string from an array.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPropType</td>
			<td class="ent_list_name">string CNetPropManager::GetPropType(handle, string)</td>
			<td class="ent_list_summary">Returns the netprop type as a string.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPropVector</td>
			<td class="ent_list_name">Vector CNetPropManager::GetPropVector(handle, string)</td>
			<td class="ent_list_summary">Reads a 3D vector.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPropVectorArray</td>
			<td class="ent_list_name">Vector CNetPropManager::GetPropVectorArray(handle, string, int)</td>
			<td class="ent_list_summary">Reads a 3D vector from an array.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasProp</td>
			<td class="ent_list_name">bool CNetPropManager::HasProp(handle, string)</td>
			<td class="ent_list_summary">Checks if netprop/datafield exists.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPropEntity</td>
			<td class="ent_list_name">void CNetPropManager::SetPropEntity(handle, string, handle)</td>
			<td class="ent_list_summary">Sets an entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPropEntityArray</td>
			<td class="ent_list_name">void CNetPropManager::SetPropEntityArray(handle, string, handle, int)</td>
			<td class="ent_list_summary">Sets an entity in an array.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPropFloat</td>
			<td class="ent_list_name">void CNetPropManager::SetPropFloat(handle, string, float)</td>
			<td class="ent_list_summary">Sets to the specified float.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPropFloatArray</td>
			<td class="ent_list_name">void CNetPropManager::SetPropFloatArray(handle, string, float, int)</td>
			<td class="ent_list_summary">Sets a float in an array.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPropInt</td>
			<td class="ent_list_name">void CNetPropManager::SetPropInt(handle, string, int)</td>
			<td class="ent_list_summary">Sets to the specified integer.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPropIntArray</td>
			<td class="ent_list_name">void CNetPropManager::SetPropIntArray(handle, string, int, int)</td>
			<td class="ent_list_summary">Sets an integer in an array.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPropString</td>
			<td class="ent_list_name">void CNetPropManager::SetPropString(handle, string, string)</td>
			<td class="ent_list_summary">Sets to the specified string.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPropStringArray</td>
			<td class="ent_list_name">void CNetPropManager::SetPropStringArray(handle, string, string, int)</td>
			<td class="ent_list_summary">Sets a string in an array.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPropVector</td>
			<td class="ent_list_name">void CNetPropManager::SetPropVector(handle, string, Vector)</td>
			<td class="ent_list_summary">Sets to the specified vector.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPropVectorArray</td>
			<td class="ent_list_name">void CNetPropManager::SetPropVectorArray(handle, string, Vector, int)</td>
			<td class="ent_list_summary">Sets a 3D vector in an array.</td>
		</tr>
	</tbody>
</table>

<h3 id="CGameTrace">CGameTrace</h3>
trace_t

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AllSolid</td>
			<td class="ent_list_name">bool CGameTrace::AllSolid()</td>
			<td class="ent_list_summary">Returns whether the trace is completely within a solid.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Contents</td>
			<td class="ent_list_name">int CGameTrace::Contents()</td>
			<td class="ent_list_summary">Gets the contents of the surface the trace has hit.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DidHit</td>
			<td class="ent_list_name">bool CGameTrace::DidHit()</td>
			<td class="ent_list_summary">Returns whether the trace hit anything.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DidHitNonWorldEntity</td>
			<td class="ent_list_name">bool CGameTrace::DidHitNonWorldEntity()</td>
			<td class="ent_list_summary">Returns whether the trace hit something other than the world entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DidHitWorld</td>
			<td class="ent_list_name">bool CGameTrace::DidHitWorld()</td>
			<td class="ent_list_summary">Returns whether the trace hit the world entity or not.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DispFlags</td>
			<td class="ent_list_name">int CGameTrace::DispFlags()</td>
			<td class="ent_list_summary">Gets the displacement flags of the surface the trace has hit.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EndPos</td>
			<td class="ent_list_name">Vector CGameTrace::EndPos()</td>
			<td class="ent_list_summary">Gets the trace's end position.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Entity</td>
			<td class="ent_list_name">handle CGameTrace::Entity()</td>
			<td class="ent_list_summary">Returns the entity this trace has hit.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Fraction</td>
			<td class="ent_list_name">float CGameTrace::Fraction()</td>
			<td class="ent_list_summary">Gets the fraction of the trace completed. For example, if the trace stopped exactly halfway to the end position, this would be 0.5.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FractionLeftSolid</td>
			<td class="ent_list_name">float CGameTrace::FractionLeftSolid()</td>
			<td class="ent_list_summary">If this trace started within a solid, this is the point in the trace's fraction at which it left that solid.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetEntityIndex</td>
			<td class="ent_list_name">int CGameTrace::GetEntityIndex()</td>
			<td class="ent_list_summary">Returns the index of whatever entity this trace hit.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HitBox</td>
			<td class="ent_list_name">int CGameTrace::HitBox()</td>
			<td class="ent_list_summary">Returns the hitbox of the entity this trace has hit. If it hit the world entity, this returns the static prop index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HitGroup</td>
			<td class="ent_list_name">int CGameTrace::HitGroup()</td>
			<td class="ent_list_summary">Returns the specific hit group this trace hit if it hit an entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDispSurface</td>
			<td class="ent_list_name">bool CGameTrace::IsDispSurface()</td>
			<td class="ent_list_summary">Returns whether this trace hit a displacement.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDispSurfaceBuildable</td>
			<td class="ent_list_name">bool CGameTrace::IsDispSurfaceBuildable()</td>
			<td class="ent_list_summary">Returns whether DISPSURF_FLAG_BUILDABLE is ticked on the displacement this trace hit.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDispSurfaceProp1</td>
			<td class="ent_list_name">bool CGameTrace::IsDispSurfaceProp1()</td>
			<td class="ent_list_summary">Returns whether DISPSURF_FLAG_SURFPROP1 is ticked on the displacement this trace hit.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDispSurfaceProp2</td>
			<td class="ent_list_name">bool CGameTrace::IsDispSurfaceProp2()</td>
			<td class="ent_list_summary">Returns whether DISPSURF_FLAG_SURFPROP2 is ticked on the displacement this trace hit.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDispSurfaceWalkable</td>
			<td class="ent_list_name">bool CGameTrace::IsDispSurfaceWalkable()</td>
			<td class="ent_list_summary">Returns whether DISPSURF_FLAG_WALKABLE is ticked on the displacement this trace hit.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PhysicsBone</td>
			<td class="ent_list_name">int CGameTrace::PhysicsBone()</td>
			<td class="ent_list_summary">Returns the physics bone this trace hit if it hit an entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Plane</td>
			<td class="ent_list_name">handle CGameTrace::Plane()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">StartPos</td>
			<td class="ent_list_name">Vector CGameTrace::StartPos()</td>
			<td class="ent_list_summary">Gets the trace's start position.</td>
		</tr>
		<tr>
			<td class="ent_list_name">StartSolid</td>
			<td class="ent_list_name">bool CGameTrace::StartSolid()</td>
			<td class="ent_list_summary">Returns whether the trace started within a solid.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Surface</td>
			<td class="ent_list_name">handle CGameTrace::Surface()</td>
			<td class="ent_list_summary"></td>
		</tr>
	</tbody>
</table>

<h3 id="csurface_t">csurface_t</h3>


<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">Name</td>
			<td class="ent_list_name">string csurface_t::Name()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SurfaceProps</td>
			<td class="ent_list_name">handle csurface_t::SurfaceProps()</td>
			<td class="ent_list_summary">The surface's properties.</td>
		</tr>
	</tbody>
</table>

<h3 id="AI_EnemyInfo_t">AI_EnemyInfo_t</h3>
Accessor for information about an enemy.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">DangerMemory</td>
			<td class="ent_list_name">bool AI_EnemyInfo_t::DangerMemory()</td>
			<td class="ent_list_summary">Get the memory of danger position w/o enemy pointer.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EludedMe</td>
			<td class="ent_list_name">bool AI_EnemyInfo_t::EludedMe()</td>
			<td class="ent_list_summary">Get whether the enemy is not at the last known location.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Enemy</td>
			<td class="ent_list_name">handle AI_EnemyInfo_t::Enemy()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">LastKnownLocation</td>
			<td class="ent_list_name">Vector AI_EnemyInfo_t::LastKnownLocation()</td>
			<td class="ent_list_summary">Get </td>
		</tr>
		<tr>
			<td class="ent_list_name">LastSeenLocation</td>
			<td class="ent_list_name">Vector AI_EnemyInfo_t::LastSeenLocation()</td>
			<td class="ent_list_summary">Get </td>
		</tr>
		<tr>
			<td class="ent_list_name">MobbedMe</td>
			<td class="ent_list_name">bool AI_EnemyInfo_t::MobbedMe()</td>
			<td class="ent_list_summary">Get whether the enemy was part of a mob at some point.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetDangerMemory</td>
			<td class="ent_list_name">void AI_EnemyInfo_t::SetDangerMemory(bool)</td>
			<td class="ent_list_summary">Set the memory of danger position w/o enemy pointer.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetEludedMe</td>
			<td class="ent_list_name">void AI_EnemyInfo_t::SetEludedMe(bool)</td>
			<td class="ent_list_summary">Set whether the enemy is not at the last known location.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetEnemy</td>
			<td class="ent_list_name">void AI_EnemyInfo_t::SetEnemy(handle)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetLastKnownLocation</td>
			<td class="ent_list_name">void AI_EnemyInfo_t::SetLastKnownLocation(Vector)</td>
			<td class="ent_list_summary">Set </td>
		</tr>
		<tr>
			<td class="ent_list_name">SetLastSeenLocation</td>
			<td class="ent_list_name">void AI_EnemyInfo_t::SetLastSeenLocation(Vector)</td>
			<td class="ent_list_summary">Set </td>
		</tr>
		<tr>
			<td class="ent_list_name">SetMobbedMe</td>
			<td class="ent_list_name">void AI_EnemyInfo_t::SetMobbedMe(bool)</td>
			<td class="ent_list_summary">Set whether the enemy was part of a mob at some point.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetTimeAtFirstHand</td>
			<td class="ent_list_name">void AI_EnemyInfo_t::SetTimeAtFirstHand(float)</td>
			<td class="ent_list_summary">Set the time at which the enemy was seen firsthand.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetTimeFirstSeen</td>
			<td class="ent_list_name">void AI_EnemyInfo_t::SetTimeFirstSeen(float)</td>
			<td class="ent_list_summary">Set </td>
		</tr>
		<tr>
			<td class="ent_list_name">SetTimeLastReacquired</td>
			<td class="ent_list_name">void AI_EnemyInfo_t::SetTimeLastReacquired(float)</td>
			<td class="ent_list_summary">Set </td>
		</tr>
		<tr>
			<td class="ent_list_name">SetTimeLastReceivedDamageFrom</td>
			<td class="ent_list_name">void AI_EnemyInfo_t::SetTimeLastReceivedDamageFrom(float)</td>
			<td class="ent_list_summary">Set the last time damage was received from this enemy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetTimeLastSeen</td>
			<td class="ent_list_name">void AI_EnemyInfo_t::SetTimeLastSeen(float)</td>
			<td class="ent_list_summary">Set </td>
		</tr>
		<tr>
			<td class="ent_list_name">SetTimeValidEnemy</td>
			<td class="ent_list_name">void AI_EnemyInfo_t::SetTimeValidEnemy(float)</td>
			<td class="ent_list_summary">Set the time at which the enemy can be selected (reaction delay).</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetUnforgettable</td>
			<td class="ent_list_name">void AI_EnemyInfo_t::SetUnforgettable(bool)</td>
			<td class="ent_list_summary">Set </td>
		</tr>
		<tr>
			<td class="ent_list_name">TimeAtFirstHand</td>
			<td class="ent_list_name">float AI_EnemyInfo_t::TimeAtFirstHand()</td>
			<td class="ent_list_summary">Get the time at which the enemy was seen firsthand.</td>
		</tr>
		<tr>
			<td class="ent_list_name">TimeFirstSeen</td>
			<td class="ent_list_name">float AI_EnemyInfo_t::TimeFirstSeen()</td>
			<td class="ent_list_summary">Get </td>
		</tr>
		<tr>
			<td class="ent_list_name">TimeLastReacquired</td>
			<td class="ent_list_name">float AI_EnemyInfo_t::TimeLastReacquired()</td>
			<td class="ent_list_summary">Get </td>
		</tr>
		<tr>
			<td class="ent_list_name">TimeLastReceivedDamageFrom</td>
			<td class="ent_list_name">float AI_EnemyInfo_t::TimeLastReceivedDamageFrom()</td>
			<td class="ent_list_summary">Get the last time damage was received from this enemy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">TimeLastSeen</td>
			<td class="ent_list_name">float AI_EnemyInfo_t::TimeLastSeen()</td>
			<td class="ent_list_summary">Get </td>
		</tr>
		<tr>
			<td class="ent_list_name">TimeValidEnemy</td>
			<td class="ent_list_name">float AI_EnemyInfo_t::TimeValidEnemy()</td>
			<td class="ent_list_summary">Get the time at which the enemy can be selected (reaction delay).</td>
		</tr>
		<tr>
			<td class="ent_list_name">Unforgettable</td>
			<td class="ent_list_name">bool AI_EnemyInfo_t::Unforgettable()</td>
			<td class="ent_list_summary">Get </td>
		</tr>
	</tbody>
</table>

<h3 id="scriptanimevent_t">scriptanimevent_t</h3>


<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetCycle</td>
			<td class="ent_list_name">float scriptanimevent_t::GetCycle()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetEvent</td>
			<td class="ent_list_name">int scriptanimevent_t::GetEvent()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetEventTime</td>
			<td class="ent_list_name">float scriptanimevent_t::GetEventTime()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetOptions</td>
			<td class="ent_list_name">string scriptanimevent_t::GetOptions()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSource</td>
			<td class="ent_list_name">handle scriptanimevent_t::GetSource()</td>
			<td class="ent_list_summary">Gets the event's source entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetType</td>
			<td class="ent_list_name">int scriptanimevent_t::GetType()</td>
			<td class="ent_list_summary">Gets the event's type flags. See the 'AE_TYPE_' set of constants for valid flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetCycle</td>
			<td class="ent_list_name">void scriptanimevent_t::SetCycle(float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetEvent</td>
			<td class="ent_list_name">void scriptanimevent_t::SetEvent(int)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetEventTime</td>
			<td class="ent_list_name">void scriptanimevent_t::SetEventTime(float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetOptions</td>
			<td class="ent_list_name">void scriptanimevent_t::SetOptions(string)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSource</td>
			<td class="ent_list_name">void scriptanimevent_t::SetSource(handle)</td>
			<td class="ent_list_summary">Sets the event's source entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetType</td>
			<td class="ent_list_name">void scriptanimevent_t::SetType(int)</td>
			<td class="ent_list_summary">Sets the event's type flags. See the 'AE_TYPE_' set of constants for valid flags.</td>
		</tr>
	</tbody>
</table>

<h3 id="CScriptKeyValues">CScriptKeyValues</h3>
Wrapper class over KeyValues instance

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">FindKey</td>
			<td class="ent_list_name">handle CScriptKeyValues::FindKey(string)</td>
			<td class="ent_list_summary">Given a KeyValues object and a key name, find a KeyValues object associated with the key name</td>
		</tr>
		<tr>
			<td class="ent_list_name">FindOrCreateKey</td>
			<td class="ent_list_name">handle CScriptKeyValues::FindOrCreateKey(string)</td>
			<td class="ent_list_summary">Given a KeyValues object and a key name, find or create a KeyValues object associated with the key name</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetBool</td>
			<td class="ent_list_name">bool CScriptKeyValues::GetBool()</td>
			<td class="ent_list_summary">Given a KeyValues object, return its own associated bool value</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFirstSubKey</td>
			<td class="ent_list_name">handle CScriptKeyValues::GetFirstSubKey()</td>
			<td class="ent_list_summary">Given a KeyValues object, return the first sub key object</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFloat</td>
			<td class="ent_list_name">float CScriptKeyValues::GetFloat()</td>
			<td class="ent_list_summary">Given a KeyValues object, return its own associated float value</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetInt</td>
			<td class="ent_list_name">int CScriptKeyValues::GetInt()</td>
			<td class="ent_list_summary">Given a KeyValues object, return its own associated integer value</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetKeyBool</td>
			<td class="ent_list_name">bool CScriptKeyValues::GetKeyBool(string)</td>
			<td class="ent_list_summary">Given a KeyValues object and a key name, return associated bool value</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetKeyFloat</td>
			<td class="ent_list_name">float CScriptKeyValues::GetKeyFloat(string)</td>
			<td class="ent_list_summary">Given a KeyValues object and a key name, return associated float value</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetKeyInt</td>
			<td class="ent_list_name">int CScriptKeyValues::GetKeyInt(string)</td>
			<td class="ent_list_summary">Given a KeyValues object and a key name, return associated integer value</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetKeyString</td>
			<td class="ent_list_name">string CScriptKeyValues::GetKeyString(string)</td>
			<td class="ent_list_summary">Given a KeyValues object and a key name, return associated string value</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetName</td>
			<td class="ent_list_name">string CScriptKeyValues::GetName()</td>
			<td class="ent_list_summary">Given a KeyValues object, return its name</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetNextKey</td>
			<td class="ent_list_name">handle CScriptKeyValues::GetNextKey()</td>
			<td class="ent_list_summary">Given a KeyValues object, return the next key object in a sub key group</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetString</td>
			<td class="ent_list_name">string CScriptKeyValues::GetString()</td>
			<td class="ent_list_summary">Given a KeyValues object, return its own associated string value</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsKeyEmpty</td>
			<td class="ent_list_name">bool CScriptKeyValues::IsKeyEmpty(string)</td>
			<td class="ent_list_summary">Given a KeyValues object and a key name, return true if key name has no value</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetBool</td>
			<td class="ent_list_name">void CScriptKeyValues::SetBool(bool)</td>
			<td class="ent_list_summary">Given a KeyValues object, set its own associated bool value</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetFloat</td>
			<td class="ent_list_name">void CScriptKeyValues::SetFloat(float)</td>
			<td class="ent_list_summary">Given a KeyValues object, set its own associated float value</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetInt</td>
			<td class="ent_list_name">void CScriptKeyValues::SetInt(int)</td>
			<td class="ent_list_summary">Given a KeyValues object, set its own associated integer value</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetKeyBool</td>
			<td class="ent_list_name">void CScriptKeyValues::SetKeyBool(string, bool)</td>
			<td class="ent_list_summary">Given a KeyValues object and a key name, set associated bool value</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetKeyFloat</td>
			<td class="ent_list_name">void CScriptKeyValues::SetKeyFloat(string, float)</td>
			<td class="ent_list_summary">Given a KeyValues object and a key name, set associated float value</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetKeyInt</td>
			<td class="ent_list_name">void CScriptKeyValues::SetKeyInt(string, int)</td>
			<td class="ent_list_summary">Given a KeyValues object and a key name, set associated integer value</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetKeyString</td>
			<td class="ent_list_name">void CScriptKeyValues::SetKeyString(string, string)</td>
			<td class="ent_list_summary">Given a KeyValues object and a key name, set associated string value</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetName</td>
			<td class="ent_list_name">void CScriptKeyValues::SetName(string)</td>
			<td class="ent_list_summary">Given a KeyValues object, set its name</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetString</td>
			<td class="ent_list_name">void CScriptKeyValues::SetString(string)</td>
			<td class="ent_list_summary">Given a KeyValues object, set its own associated string value</td>
		</tr>
		<tr>
			<td class="ent_list_name">SubKeysToTable</td>
			<td class="ent_list_name">void CScriptKeyValues::SubKeysToTable(handle)</td>
			<td class="ent_list_summary">Converts to script table.</td>
		</tr>
		<tr>
			<td class="ent_list_name">TableToSubKeys</td>
			<td class="ent_list_name">void CScriptKeyValues::TableToSubKeys(handle)</td>
			<td class="ent_list_summary">Converts a script table to KeyValues.</td>
		</tr>
	</tbody>
</table>

<h3 id="CRagdollProp">CRagdollProp</h3>
*Extends <a href="#CBaseAnimating">CBaseAnimating</a>*

Ragdoll physics prop.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetRagdollObject</td>
			<td class="ent_list_name">handle CRagdollProp::GetRagdollObject(int)</td>
			<td class="ent_list_summary">Gets the ragdoll object of the specified index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetRagdollObjectCount</td>
			<td class="ent_list_name">int CRagdollProp::GetRagdollObjectCount()</td>
			<td class="ent_list_summary">Gets the number of ragdoll objects on this ragdoll.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSourceClassName</td>
			<td class="ent_list_name">string CRagdollProp::GetSourceClassName()</td>
			<td class="ent_list_summary">Gets the ragdoll's source classname.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasPhysgunInteraction</td>
			<td class="ent_list_name">bool CRagdollProp::HasPhysgunInteraction(string, string)</td>
			<td class="ent_list_summary">Checks if the ragdoll has the specified interaction.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetSourceClassName</td>
			<td class="ent_list_name">void CRagdollProp::SetSourceClassName(string)</td>
			<td class="ent_list_summary">Sets the ragdoll's source classname.</td>
		</tr>
	</tbody>
</table>

<h3 id="CConvars">CConvars</h3>
Provides an interface to convars.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetBool</td>
			<td class="ent_list_name">bool CConvars::GetBool(string)</td>
			<td class="ent_list_summary">Returns the convar as a bool. May return null if no such convar.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetClientConvarValue</td>
			<td class="ent_list_name">string CConvars::GetClientConvarValue(int, string)</td>
			<td class="ent_list_summary">Get a convar keyvalue for a specified client</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetCommandClient</td>
			<td class="ent_list_name">handle CConvars::GetCommandClient()</td>
			<td class="ent_list_summary">returns the player who issued this console command.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDefaultValue</td>
			<td class="ent_list_name">string CConvars::GetDefaultValue(string)</td>
			<td class="ent_list_summary">Returns the convar's default value as a string. May return null if no such convar.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFloat</td>
			<td class="ent_list_name">float CConvars::GetFloat(string)</td>
			<td class="ent_list_summary">Returns the convar as a float. May return null if no such convar.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetInt</td>
			<td class="ent_list_name">int CConvars::GetInt(string)</td>
			<td class="ent_list_summary">Returns the convar as an int. May return null if no such convar.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetStr</td>
			<td class="ent_list_name">string CConvars::GetStr(string)</td>
			<td class="ent_list_summary">Returns the convar as a string. May return null if no such convar.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsFlagSet</td>
			<td class="ent_list_name">bool CConvars::IsFlagSet(string, int)</td>
			<td class="ent_list_summary">Returns the convar's flags. May return null if no such convar.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RegisterCommand</td>
			<td class="ent_list_name">void CConvars::RegisterCommand(string, handle, string, int)</td>
			<td class="ent_list_summary">register a console command.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RegisterConvar</td>
			<td class="ent_list_name">void CConvars::RegisterConvar(string, string, string, int)</td>
			<td class="ent_list_summary">register a new console variable.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetBool</td>
			<td class="ent_list_name">void CConvars::SetBool(string, bool)</td>
			<td class="ent_list_summary">Sets the value of the convar as a bool.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetChangeCallback</td>
			<td class="ent_list_name">void CConvars::SetChangeCallback(string, handle)</td>
			<td class="ent_list_summary">callback is called with 5 parameters (var, szOldValue, flOldValue, szNewValue, flNewValue)</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetCompletionCallback</td>
			<td class="ent_list_name">void CConvars::SetCompletionCallback(string, handle)</td>
			<td class="ent_list_summary">callback is called with 3 parameters (cmd, partial, commands), user strings must be appended to 'commands' array</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetFloat</td>
			<td class="ent_list_name">void CConvars::SetFloat(string, float)</td>
			<td class="ent_list_summary">Sets the value of the convar as a float.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetInt</td>
			<td class="ent_list_name">void CConvars::SetInt(string, int)</td>
			<td class="ent_list_summary">Sets the value of the convar as an int.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetStr</td>
			<td class="ent_list_name">void CConvars::SetStr(string, string)</td>
			<td class="ent_list_summary">Sets the value of the convar as a string.</td>
		</tr>
		<tr>
			<td class="ent_list_name">UnregisterCommand</td>
			<td class="ent_list_name">void CConvars::UnregisterCommand(string)</td>
			<td class="ent_list_summary">unregister a console command.</td>
		</tr>
	</tbody>
</table>

<h3 id="matrix3x4_t">matrix3x4_t</h3>
A 3x4 matrix transform.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">Init</td>
			<td class="ent_list_name">void matrix3x4_t::Init(Vector, Vector, Vector, Vector)</td>
			<td class="ent_list_summary">Creates a matrix where the X axis = forward, the Y axis = left, and the Z axis = up.</td>
		</tr>
	</tbody>
</table>

<h3 id="CWeaponCustomScripted">CWeaponCustomScripted</h3>
*Extends <a href="#CBaseCombatWeapon">CBaseCombatWeapon</a>*

Special weapon class with tons of hooks

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AbortReload</td>
			<td class="ent_list_name">void CWeaponCustomScripted -> AbortReload()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ActivityList</td>
			<td class="ent_list_name">handle CWeaponCustomScripted -> ActivityList()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ActivityListCount</td>
			<td class="ent_list_name">int CWeaponCustomScripted -> ActivityListCount()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">AddViewKick</td>
			<td class="ent_list_name">void CWeaponCustomScripted -> AddViewKick()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">CanDeploy</td>
			<td class="ent_list_name">bool CWeaponCustomScripted -> CanDeploy()</td>
			<td class="ent_list_summary">Should return true if weapon can be deployed</td>
		</tr>
		<tr>
			<td class="ent_list_name">CanHolster</td>
			<td class="ent_list_name">bool CWeaponCustomScripted -> CanHolster()</td>
			<td class="ent_list_summary">Should return true if weapon can be holstered</td>
		</tr>
		<tr>
			<td class="ent_list_name">CheckReload</td>
			<td class="ent_list_name">void CWeaponCustomScripted -> CheckReload()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Deploy</td>
			<td class="ent_list_name">bool CWeaponCustomScripted -> Deploy()</td>
			<td class="ent_list_summary">Called when weapon is being deployed</td>
		</tr>
		<tr>
			<td class="ent_list_name">FinishReload</td>
			<td class="ent_list_name">void CWeaponCustomScripted -> FinishReload()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetBulletSpread</td>
			<td class="ent_list_name">Vector CWeaponCustomScripted -> GetBulletSpread()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetBulletSpreadForProficiency</td>
			<td class="ent_list_name">Vector CWeaponCustomScripted -> GetBulletSpreadForProficiency(int ''proficiency'')</td>
			<td class="ent_list_summary">Returns the bullet spread of a specific proficiency level. If this isn't defined, it will fall back to GetBulletSpread.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDefaultAnimSpeed</td>
			<td class="ent_list_name">float CWeaponCustomScripted -> GetDefaultAnimSpeed()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetDrawActivity</td>
			<td class="ent_list_name">variant CWeaponCustomScripted -> GetDrawActivity()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFireRate</td>
			<td class="ent_list_name">float CWeaponCustomScripted -> GetFireRate()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMaxBurst</td>
			<td class="ent_list_name">int CWeaponCustomScripted -> GetMaxBurst()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMaxRestTime</td>
			<td class="ent_list_name">float CWeaponCustomScripted -> GetMaxRestTime()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMinBurst</td>
			<td class="ent_list_name">int CWeaponCustomScripted -> GetMinBurst()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMinRestTime</td>
			<td class="ent_list_name">float CWeaponCustomScripted -> GetMinRestTime()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPrimaryAttackActivity</td>
			<td class="ent_list_name">variant CWeaponCustomScripted -> GetPrimaryAttackActivity()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">GetSecondaryAttackActivity</td>
			<td class="ent_list_name">variant CWeaponCustomScripted -> GetSecondaryAttackActivity()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">HandleFireOnEmpty</td>
			<td class="ent_list_name">void CWeaponCustomScripted -> HandleFireOnEmpty()</td>
			<td class="ent_list_summary">Called when they have the attack button down but they are out of ammo. The default implementation either reloads, switches weapons, or plays an empty sound.</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasAnyAmmo</td>
			<td class="ent_list_name">bool CWeaponCustomScripted -> HasAnyAmmo()</td>
			<td class="ent_list_summary">Should return true if weapon has ammo</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasPrimaryAmmo</td>
			<td class="ent_list_name">bool CWeaponCustomScripted -> HasPrimaryAmmo()</td>
			<td class="ent_list_summary">Should return true if weapon has primary ammo</td>
		</tr>
		<tr>
			<td class="ent_list_name">HasSecondaryAmmo</td>
			<td class="ent_list_name">bool CWeaponCustomScripted -> HasSecondaryAmmo()</td>
			<td class="ent_list_summary">Should return true if weapon has secondary ammo</td>
		</tr>
		<tr>
			<td class="ent_list_name">Holster</td>
			<td class="ent_list_name">bool CWeaponCustomScripted -> Holster(handle ''switchingto'')</td>
			<td class="ent_list_summary">Called when weapon is being holstered</td>
		</tr>
		<tr>
			<td class="ent_list_name">ItemBusyFrame</td>
			<td class="ent_list_name">void CWeaponCustomScripted -> ItemBusyFrame()</td>
			<td class="ent_list_summary">Called each frame by the player PostThink, if the player's not ready to attack yet</td>
		</tr>
		<tr>
			<td class="ent_list_name">ItemHolsterFrame</td>
			<td class="ent_list_name">void CWeaponCustomScripted -> ItemHolsterFrame()</td>
			<td class="ent_list_summary">Called each frame by the player PreThink, if the weapon is holstered</td>
		</tr>
		<tr>
			<td class="ent_list_name">ItemPostFrame</td>
			<td class="ent_list_name">void CWeaponCustomScripted -> ItemPostFrame()</td>
			<td class="ent_list_summary">Called each frame by the player PostThink</td>
		</tr>
		<tr>
			<td class="ent_list_name">ItemPreFrame</td>
			<td class="ent_list_name">void CWeaponCustomScripted -> ItemPreFrame()</td>
			<td class="ent_list_summary">Called each frame by the player PreThink</td>
		</tr>
		<tr>
			<td class="ent_list_name">PrimaryAttack</td>
			<td class="ent_list_name">void CWeaponCustomScripted -> PrimaryAttack()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Reload</td>
			<td class="ent_list_name">bool CWeaponCustomScripted -> Reload()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Reload_NPC</td>
			<td class="ent_list_name">void CWeaponCustomScripted -> Reload_NPC()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SecondaryAttack</td>
			<td class="ent_list_name">void CWeaponCustomScripted -> SecondaryAttack()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponIdle</td>
			<td class="ent_list_name">void CWeaponCustomScripted -> WeaponIdle()</td>
			<td class="ent_list_summary">Called when no buttons pressed</td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponLOSCondition</td>
			<td class="ent_list_name">bool CWeaponCustomScripted -> WeaponLOSCondition()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponMeleeAttack1Condition</td>
			<td class="ent_list_name">int CWeaponCustomScripted -> WeaponMeleeAttack1Condition()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponMeleeAttack2Condition</td>
			<td class="ent_list_name">int CWeaponCustomScripted -> WeaponMeleeAttack2Condition()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponRangeAttack1Condition</td>
			<td class="ent_list_name">int CWeaponCustomScripted -> WeaponRangeAttack1Condition()</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponRangeAttack2Condition</td>
			<td class="ent_list_name">int CWeaponCustomScripted -> WeaponRangeAttack2Condition()</td>
			<td class="ent_list_summary"></td>
		</tr>
	</tbody>
</table>

= Data Types =
<h3 id="Vector">Vector</h3>
Basic 3-float Vector class.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">x</td>
			<td class="ent_list_name">float Vector.x</td>
			<td class="ent_list_summary">The vector's X coordinate on the cartesian X axis.</td>
		</tr>
		<tr>
			<td class="ent_list_name">y</td>
			<td class="ent_list_name">float Vector.y</td>
			<td class="ent_list_summary">The vector's Y coordinate on the cartesian Y axis.</td>
		</tr>
		<tr>
			<td class="ent_list_name">z</td>
			<td class="ent_list_name">float Vector.z</td>
			<td class="ent_list_summary">The vector's Z coordinate on the cartesian Z axis.</td>
		</tr>
	</tbody>
</table>

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">Cross</td>
			<td class="ent_list_name">float Vector::Cross(vector)</td>
			<td class="ent_list_summary">Return the vector product of two vectors.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Dot</td>
			<td class="ent_list_name">float Vector::Dot(vector)</td>
			<td class="ent_list_summary">Return the dot/scalar product of two vectors.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Length</td>
			<td class="ent_list_name">float Vector::Length()</td>
			<td class="ent_list_summary">Return the vector's length.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Length2D</td>
			<td class="ent_list_name">float Vector::Length2D()</td>
			<td class="ent_list_summary">Return the vector's 2D length.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Length2DSqr</td>
			<td class="ent_list_name">float Vector::Length2DSqr()</td>
			<td class="ent_list_summary">Return the vector's squared 2D length.</td>
		</tr>
		<tr>
			<td class="ent_list_name">LengthSqr</td>
			<td class="ent_list_name">float Vector::LengthSqr()</td>
			<td class="ent_list_summary">Return the vector's squared length.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Norm</td>
			<td class="ent_list_name">void Vector::Norm()</td>
			<td class="ent_list_summary">Normalize the vector in place.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Normalized</td>
			<td class="ent_list_name">float Vector::Normalized()</td>
			<td class="ent_list_summary">Return a normalized version of the vector.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Scale</td>
			<td class="ent_list_name">vector Vector::Scale(float)</td>
			<td class="ent_list_summary">Scale the vector's magnitude and return the result.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ToKVString</td>
			<td class="ent_list_name">string Vector::ToKVString()</td>
			<td class="ent_list_summary">Return a vector as a string in KeyValue form, without separation commas.</td>
		</tr>
	</tbody>
</table>

<h3 id="Quaternion">Quaternion</h3>
A quaternion.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">w</td>
			<td class="ent_list_name">float Quaternion.w</td>
			<td class="ent_list_summary">The quaternion's scalar component.</td>
		</tr>
		<tr>
			<td class="ent_list_name">x</td>
			<td class="ent_list_name">float Quaternion.x</td>
			<td class="ent_list_summary">The quaternion's i axis component.</td>
		</tr>
		<tr>
			<td class="ent_list_name">y</td>
			<td class="ent_list_name">float Quaternion.y</td>
			<td class="ent_list_summary">The quaternion's j axis component.</td>
		</tr>
		<tr>
			<td class="ent_list_name">z</td>
			<td class="ent_list_name">float Quaternion.z</td>
			<td class="ent_list_summary">The quaternion's k axis component.</td>
		</tr>
	</tbody>
</table>

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">Init</td>
			<td class="ent_list_name">void Quaternion::Init(float, float, float, float)</td>
			<td class="ent_list_summary">Creates a quaternion with the given values.</td>
		</tr>
	</tbody>
</table>

<h3 id="Color">Color</h3>


<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">a</td>
			<td class="ent_list_name">char Color.a</td>
			<td class="ent_list_summary">Member variable for alpha. (transparency)</td>
		</tr>
		<tr>
			<td class="ent_list_name">b</td>
			<td class="ent_list_name">char Color.b</td>
			<td class="ent_list_summary">Member variable for blue.</td>
		</tr>
		<tr>
			<td class="ent_list_name">g</td>
			<td class="ent_list_name">char Color.g</td>
			<td class="ent_list_summary">Member variable for green.</td>
		</tr>
		<tr>
			<td class="ent_list_name">r</td>
			<td class="ent_list_name">char Color.r</td>
			<td class="ent_list_summary">Member variable for red.</td>
		</tr>
	</tbody>
</table>

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">GetRawColor</td>
			<td class="ent_list_name">int Color::GetRawColor()</td>
			<td class="ent_list_summary">Gets the raw color integer.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetColor</td>
			<td class="ent_list_name">void Color::SetColor(int, int, int, int)</td>
			<td class="ent_list_summary">Sets the color.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetRawColor</td>
			<td class="ent_list_name">void Color::SetRawColor(int)</td>
			<td class="ent_list_summary">Sets the raw color integer.</td>
		</tr>
	</tbody>
</table>

<h2>Global Functions</h2>
<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Function</th>
			<th>Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AddPhysVelocity</td>
			<td class="ent_list_name">void AddPhysVelocity(handle, Vector, Vector)</td>
			<td class="ent_list_summary">Adds physics velocity for the given VPhysics object</td>
		</tr>
		<tr>
			<td class="ent_list_name">AddThinkToEnt</td>
			<td class="ent_list_name">void AddThinkToEnt(handle, string)</td>
			<td class="ent_list_summary">This will put a think function onto an entity, or pass null to remove it. This is NOT chained, so be careful.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AngleDiff</td>
			<td class="ent_list_name">float AngleDiff(float, float)</td>
			<td class="ent_list_summary">Returns the degrees difference between two yaw angles.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AngleDistance</td>
			<td class="ent_list_name">float AngleDistance(float, float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">AngleIMatrix</td>
			<td class="ent_list_name">void AngleIMatrix(Vector, Vector, handle)</td>
			<td class="ent_list_summary">Sets the inverted angles and position of a matrix.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AngleMatrix</td>
			<td class="ent_list_name">void AngleMatrix(Vector, Vector, handle)</td>
			<td class="ent_list_summary">Sets the angles and position of a matrix.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AngleNormalize</td>
			<td class="ent_list_name">float AngleNormalize(float)</td>
			<td class="ent_list_summary">Clamps an angle to be in between -360 and 360.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AngleNormalizePositive</td>
			<td class="ent_list_name">float AngleNormalizePositive(float)</td>
			<td class="ent_list_summary">Clamps an angle to be in between 0 and 360.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AngleVectors</td>
			<td class="ent_list_name">Vector AngleVectors(Vector)</td>
			<td class="ent_list_summary">Turns an angle into a direction vector.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AnglesAreEqual</td>
			<td class="ent_list_name">bool AnglesAreEqual(float, float, float)</td>
			<td class="ent_list_summary">Checks if two angles are equal based on a given tolerance value.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AppearsToBeANumber</td>
			<td class="ent_list_name">bool AppearsToBeANumber(string)</td>
			<td class="ent_list_summary">Checks if the given string appears to be a number.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Approach</td>
			<td class="ent_list_name">float Approach(float, float, float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ApproachAngle</td>
			<td class="ent_list_name">float ApproachAngle(float, float, float)</td>
			<td class="ent_list_summary">Returns an angle which approaches the target angle from the input angle with the specified speed.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Bias</td>
			<td class="ent_list_name">float Bias(float, float)</td>
			<td class="ent_list_summary">The curve is biased towards 0 or 1 based on biasAmt, which is between 0 and 1.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CalcClosestPointOnAABB</td>
			<td class="ent_list_name">Vector CalcClosestPointOnAABB(Vector, Vector, Vector)</td>
			<td class="ent_list_summary">Returns the closest point on a bounding box.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CalcClosestPointOnLine</td>
			<td class="ent_list_name">Vector CalcClosestPointOnLine(Vector, Vector, Vector)</td>
			<td class="ent_list_summary">Returns the closest point on a line.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CalcClosestPointOnLineSegment</td>
			<td class="ent_list_name">Vector CalcClosestPointOnLineSegment(Vector, Vector, Vector)</td>
			<td class="ent_list_summary">Returns the closest point on a line segment.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CalcDistanceToLine</td>
			<td class="ent_list_name">float CalcDistanceToLine(Vector, Vector, Vector)</td>
			<td class="ent_list_summary">Returns the distance to a line.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CalcDistanceToLineSegment</td>
			<td class="ent_list_name">float CalcDistanceToLineSegment(Vector, Vector, Vector)</td>
			<td class="ent_list_summary">Returns the distance to a line segment.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CalcSqrDistanceToAABB</td>
			<td class="ent_list_name">float CalcSqrDistanceToAABB(Vector, Vector, Vector)</td>
			<td class="ent_list_summary">Returns the squared distance to a bounding box.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CalculateBulletDamageForce</td>
			<td class="ent_list_name">void CalculateBulletDamageForce(handle, int, Vector, Vector, float)</td>
			<td class="ent_list_summary">Fill out a damage info handle with a damage force for a bullet impact.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CalculateExplosiveDamageForce</td>
			<td class="ent_list_name">void CalculateExplosiveDamageForce(handle, Vector, Vector, float)</td>
			<td class="ent_list_summary">Fill out a damage info handle with a damage force for an explosive.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CalculateMeleeDamageForce</td>
			<td class="ent_list_name">void CalculateMeleeDamageForce(handle, Vector, Vector, float)</td>
			<td class="ent_list_summary">Fill out a damage info handle with a damage force for a melee impact.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CancelEntityIOEvent</td>
			<td class="ent_list_name">bool CancelEntityIOEvent(int)</td>
			<td class="ent_list_summary">Remove entity I/O event.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ClearSavedTable</td>
			<td class="ent_list_name">void ClearSavedTable(string)</td>
			<td class="ent_list_summary">Removes the table with the given context.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ConcatTransforms</td>
			<td class="ent_list_name">void ConcatTransforms(handle, handle, handle)</td>
			<td class="ent_list_summary">Concatenates two transformation matrices into another matrix.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CreateDamageInfo</td>
			<td class="ent_list_name">handle CreateDamageInfo(handle, handle, Vector, Vector, float, int)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">CreateFireBulletsInfo</td>
			<td class="ent_list_name">handle CreateFireBulletsInfo(int, Vector, Vector, Vector, float, handle)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">CreateProp</td>
			<td class="ent_list_name">handle CreateProp(string, Vector, string, int)</td>
			<td class="ent_list_summary">Create a physics prop</td>
		</tr>
		<tr>
			<td class="ent_list_name">CreateRope</td>
			<td class="ent_list_name">handle CreateRope(handle, handle, int, int, float, string, int, int)</td>
			<td class="ent_list_summary">Creates a single rope between two entities. Can optionally follow specific attachments.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CreateRopeWithSecondPointDetached</td>
			<td class="ent_list_name">handle CreateRopeWithSecondPointDetached(handle, int, int, float, string, int, bool, int)</td>
			<td class="ent_list_summary">Creates a single detached rope hanging from a point. Can optionally follow a specific start attachment.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CreateSceneEntity</td>
			<td class="ent_list_name">handle CreateSceneEntity(string)</td>
			<td class="ent_list_summary">Create a scene entity to play the specified scene.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DecalTrace</td>
			<td class="ent_list_name">void DecalTrace(handle, string)</td>
			<td class="ent_list_summary">Creates a dynamic decal based on the given trace info. The trace information can be generated by TraceLineComplex() and the decal name must be from decals_subrect.txt.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DispatchParticleEffect</td>
			<td class="ent_list_name">null</td>
			<td class="ent_list_summary">Dispatches a one-off particle system</td>
		</tr>
		<tr>
			<td class="ent_list_name">DispatchSpawn</td>
			<td class="ent_list_name">void DispatchSpawn(handle)</td>
			<td class="ent_list_summary">Spawns an unspawned entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DoIncludeScript</td>
			<td class="ent_list_name">bool DoIncludeScript(string, handle)</td>
			<td class="ent_list_summary">Execute a script (internal)</td>
		</tr>
		<tr>
			<td class="ent_list_name">EmitSoundOn</td>
			<td class="ent_list_name">void EmitSoundOn(string, handle)</td>
			<td class="ent_list_summary">Play named sound on an entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EmitSoundOnClient</td>
			<td class="ent_list_name">void EmitSoundOnClient(string, handle, handle)</td>
			<td class="ent_list_summary">Play named sound only on the client for the specified player.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EmitSoundParamsOn</td>
			<td class="ent_list_name">void EmitSoundParamsOn(handle, handle)</td>
			<td class="ent_list_summary">Play EmitSound_t params on an entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EntFire</td>
			<td class="ent_list_name">null</td>
			<td class="ent_list_summary">Generate an entity i/o event</td>
		</tr>
		<tr>
			<td class="ent_list_name">EntFireByHandle</td>
			<td class="ent_list_name">null</td>
			<td class="ent_list_summary">Generate an entity i/o event. First parameter is an entity instance.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EntIndexToHScript</td>
			<td class="ent_list_name">handle EntIndexToHScript(int)</td>
			<td class="ent_list_summary">Returns the script handle for the given entity index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EntitiesAtPoint</td>
			<td class="ent_list_name">void EntitiesAtPoint(handle, int, Vector, int)</td>
			<td class="ent_list_summary">Gets all entities which are intersecting a point in space. This function copies them to an array with a maximum number of elements.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EntitiesInBox</td>
			<td class="ent_list_name">void EntitiesInBox(handle, int, Vector, Vector, int)</td>
			<td class="ent_list_summary">Gets all entities which are within a worldspace box. This function copies them to an array with a maximum number of elements.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EntitiesInSphere</td>
			<td class="ent_list_name">void EntitiesInSphere(handle, int, Vector, float, int)</td>
			<td class="ent_list_summary">Gets all entities which are within a sphere. This function copies them to an array with a maximum number of elements.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ExponentialDecay</td>
			<td class="ent_list_name">float ExponentialDecay(float, float, float)</td>
			<td class="ent_list_summary">decayTo is factor the value should decay to in decayTime</td>
		</tr>
		<tr>
			<td class="ent_list_name">FLerp</td>
			<td class="ent_list_name">float FLerp(float, float, float, float, float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">FileExists</td>
			<td class="ent_list_name">bool FileExists(string)</td>
			<td class="ent_list_summary">Returns true if the file exists.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FileToKeyValues</td>
			<td class="ent_list_name">handle FileToKeyValues(string)</td>
			<td class="ent_list_summary">Returns the CScriptKeyValues from the file, null if no file or file is too big.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FileToString</td>
			<td class="ent_list_name">string FileToString(string)</td>
			<td class="ent_list_summary">Returns the string from the file, null if no file or file is too big.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FireGameEvent</td>
			<td class="ent_list_name">void FireGameEvent(string, handle)</td>
			<td class="ent_list_summary">Fire a game event.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FireGameEventLocal</td>
			<td class="ent_list_name">void FireGameEventLocal(string, handle)</td>
			<td class="ent_list_summary">Fire a game event without broadcasting to the client.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FrameTime</td>
			<td class="ent_list_name">float FrameTime()</td>
			<td class="ent_list_summary">Get the time spent on the server in the last frame</td>
		</tr>
		<tr>
			<td class="ent_list_name">FreeMatrixInstance</td>
			<td class="ent_list_name">void FreeMatrixInstance(handle)</td>
			<td class="ent_list_summary">Frees an allocated matrix instance.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FreeQuaternionInstance</td>
			<td class="ent_list_name">void FreeQuaternionInstance(handle)</td>
			<td class="ent_list_summary">Frees an allocated quaternion instance.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Gain</td>
			<td class="ent_list_name">float Gain(float, float)</td>
			<td class="ent_list_summary">Gain is similar to Bias, but biasAmt biases towards or away from 0.5.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GameOver</td>
			<td class="ent_list_name">handle GameOver(string, float, float, float, int, int, int)</td>
			<td class="ent_list_summary">Ends the game and reloads the last save.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetActivityName</td>
			<td class="ent_list_name">string GetActivityName(int)</td>
			<td class="ent_list_summary">Gets the name of the specified activity index.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetCPUUsage</td>
			<td class="ent_list_name">float GetCPUUsage()</td>
			<td class="ent_list_summary">Get CPU usage percentage.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetEntityIOEventTimeLeft</td>
			<td class="ent_list_name">float GetEntityIOEventTimeLeft(int)</td>
			<td class="ent_list_summary">Get time left on entity I/O event.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetFrameCount</td>
			<td class="ent_list_name">int GetFrameCount()</td>
			<td class="ent_list_summary">Absolute frame counter</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetLoadType</td>
			<td class="ent_list_name">int GetLoadType()</td>
			<td class="ent_list_summary">Get the way the current game was loaded (corresponds to the MapLoad enum)</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetMapName</td>
			<td class="ent_list_name">string GetMapName()</td>
			<td class="ent_list_summary">Get the name of the map.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPhysAngVelocity</td>
			<td class="ent_list_name">Vector GetPhysAngVelocity(handle)</td>
			<td class="ent_list_summary">Gets physics angular velocity for the given VPhysics object</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPhysVelocity</td>
			<td class="ent_list_name">Vector GetPhysVelocity(handle)</td>
			<td class="ent_list_summary">Gets physics velocity for the given VPhysics object</td>
		</tr>
		<tr>
			<td class="ent_list_name">GetPlayerHeldEntity</td>
			<td class="ent_list_name">handle GetPlayerHeldEntity(handle)</td>
			<td class="ent_list_summary">Gets the specified player's currently held entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GuessDamageForce</td>
			<td class="ent_list_name">void GuessDamageForce(handle, Vector, Vector, float)</td>
			<td class="ent_list_summary">Try and guess the physics force to use.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ImpulseScale</td>
			<td class="ent_list_name">float ImpulseScale(float, float)</td>
			<td class="ent_list_summary">Returns an impulse scale required to push an object.</td>
		</tr>
		<tr>
			<td class="ent_list_name">InsertAISound</td>
			<td class="ent_list_name">void InsertAISound(int, Vector, int, float, handle, int, handle)</td>
			<td class="ent_list_summary">Inserts an AI sound.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IntervalPerTick</td>
			<td class="ent_list_name">float IntervalPerTick()</td>
			<td class="ent_list_summary">Simulation tick interval</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsClient</td>
			<td class="ent_list_name">bool IsClient()</td>
			<td class="ent_list_summary">Returns true if the script is being run on the client.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsDedicatedServer</td>
			<td class="ent_list_name">bool IsDedicatedServer()</td>
			<td class="ent_list_summary">Is this a dedicated server?</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsLinux</td>
			<td class="ent_list_name">bool IsLinux()</td>
			<td class="ent_list_summary">Returns true if the game is being run on a Linux machine.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsOSX</td>
			<td class="ent_list_name">bool IsOSX()</td>
			<td class="ent_list_summary">Returns true if the game is being run on an OSX machine.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsPosix</td>
			<td class="ent_list_name">bool IsPosix()</td>
			<td class="ent_list_summary">Returns true if the game is being run on a Posix machine.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsServer</td>
			<td class="ent_list_name">bool IsServer()</td>
			<td class="ent_list_summary">Returns true if the script is being run on the server.</td>
		</tr>
		<tr>
			<td class="ent_list_name">IsWindows</td>
			<td class="ent_list_name">bool IsWindows()</td>
			<td class="ent_list_summary">Returns true if the game is being run on a Windows machine.</td>
		</tr>
		<tr>
			<td class="ent_list_name">KeyValuesToFile</td>
			<td class="ent_list_name">bool KeyValuesToFile(string, handle)</td>
			<td class="ent_list_summary">Stores the CScriptKeyValues into the file</td>
		</tr>
		<tr>
			<td class="ent_list_name">Lerp</td>
			<td class="ent_list_name">float Lerp(float, float, float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ListenToGameEvent</td>
			<td class="ent_list_name">int ListenToGameEvent(string, handle, string)</td>
			<td class="ent_list_summary">Register as a listener for a game event from script.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Matcher_Match</td>
			<td class="ent_list_name">bool Matcher_Match(string, string)</td>
			<td class="ent_list_summary">Compares a string to a query using Mapbase's matcher system, supporting wildcards, RS matchers, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Matcher_NamesMatch</td>
			<td class="ent_list_name">bool Matcher_NamesMatch(string, string)</td>
			<td class="ent_list_summary">Compares a string to a query using Mapbase's matcher system using wildcards only.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MatricesAreEqual</td>
			<td class="ent_list_name">void MatricesAreEqual(handle, handle)</td>
			<td class="ent_list_summary">Checks if two matrices are equal.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MatrixAngles</td>
			<td class="ent_list_name">void MatrixAngles(handle, Vector, Vector)</td>
			<td class="ent_list_summary">Gets the angles and position of a matrix.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MatrixCopy</td>
			<td class="ent_list_name">void MatrixCopy(handle, handle)</td>
			<td class="ent_list_summary">Copies a matrix to another matrix.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MatrixGetColumn</td>
			<td class="ent_list_name">Vector MatrixGetColumn(handle, int)</td>
			<td class="ent_list_summary">Gets the column of a matrix.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MatrixGetTranslation</td>
			<td class="ent_list_name">Vector MatrixGetTranslation(handle)</td>
			<td class="ent_list_summary">Gets a matrix's translation.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MatrixInvert</td>
			<td class="ent_list_name">void MatrixInvert(handle, handle)</td>
			<td class="ent_list_summary">Inverts a matrix and copies the result to another matrix.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MatrixQuaternion</td>
			<td class="ent_list_name">void MatrixQuaternion(handle, handle)</td>
			<td class="ent_list_summary">Converts a matrix to a quaternion.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MatrixScaleBy</td>
			<td class="ent_list_name">void MatrixScaleBy(float, handle)</td>
			<td class="ent_list_summary">Scales a matrix.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MatrixScaleByZero</td>
			<td class="ent_list_name">void MatrixScaleByZero(handle)</td>
			<td class="ent_list_summary">Scales a matrix by zero.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MatrixSetColumn</td>
			<td class="ent_list_name">void MatrixSetColumn(Vector, int, handle)</td>
			<td class="ent_list_summary">Sets the column of a matrix.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MatrixSetTranslation</td>
			<td class="ent_list_name">void MatrixSetTranslation(Vector, handle)</td>
			<td class="ent_list_summary">Sets a matrix's translation.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MaxPlayers</td>
			<td class="ent_list_name">int MaxPlayers()</td>
			<td class="ent_list_summary">Get the maximum number of players allowed on this server</td>
		</tr>
		<tr>
			<td class="ent_list_name">MegaPhyscannonActive</td>
			<td class="ent_list_name">bool MegaPhyscannonActive()</td>
			<td class="ent_list_summary">Checks if supercharged gravity gun mode is enabled.</td>
		</tr>
		<tr>
			<td class="ent_list_name">Msg</td>
			<td class="ent_list_name">void Msg(string)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">NPrint</td>
			<td class="ent_list_name">void NPrint(int, string)</td>
			<td class="ent_list_summary">Notification print</td>
		</tr>
		<tr>
			<td class="ent_list_name">NXPrint</td>
			<td class="ent_list_name">void NXPrint(int, int, int, int, bool, float, string)</td>
			<td class="ent_list_summary">Notification print, customised</td>
		</tr>
		<tr>
			<td class="ent_list_name">PhysCannonGetHeldEntity</td>
			<td class="ent_list_name">handle PhysCannonGetHeldEntity(handle)</td>
			<td class="ent_list_summary">Gets the specified gravity gun's currently held entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PhysDisableEntityCollisions</td>
			<td class="ent_list_name">void PhysDisableEntityCollisions(handle, handle)</td>
			<td class="ent_list_summary">Disables collisions between two VPhysics objects</td>
		</tr>
		<tr>
			<td class="ent_list_name">PhysEnableEntityCollisions</td>
			<td class="ent_list_name">void PhysEnableEntityCollisions(handle, handle)</td>
			<td class="ent_list_summary">Enables collisions between two VPhysics objects</td>
		</tr>
		<tr>
			<td class="ent_list_name">Pickup_ForcePlayerToDropThisObject</td>
			<td class="ent_list_name">void Pickup_ForcePlayerToDropThisObject(handle)</td>
			<td class="ent_list_summary">If the specified entity is being carried, instantly drops it.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PlayerPickupGetHeldObjectMass</td>
			<td class="ent_list_name">float PlayerPickupGetHeldObjectMass(handle, handle)</td>
			<td class="ent_list_summary">Gets the mass of the specified player_pickup controller, with the second parameter the held object's physics object.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PrecacheEntityFromTable</td>
			<td class="ent_list_name">void PrecacheEntityFromTable(string, handle)</td>
			<td class="ent_list_summary">Precache an entity from KeyValues in a table.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PrecacheMaterial</td>
			<td class="ent_list_name">void PrecacheMaterial(string)</td>
			<td class="ent_list_summary">Precaches a material for later usage.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PrecacheModel</td>
			<td class="ent_list_name">null</td>
			<td class="ent_list_summary">Precaches a model for later usage.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PrecacheOther</td>
			<td class="ent_list_name">null</td>
			<td class="ent_list_summary">Precaches an entity class for later usage.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PrecacheParticleSystem</td>
			<td class="ent_list_name">void PrecacheParticleSystem(string)</td>
			<td class="ent_list_summary">Precaches a particle system for later usage.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PredictedPosition</td>
			<td class="ent_list_name">Vector PredictedPosition(handle, float)</td>
			<td class="ent_list_summary">Predicts what an entity's position will be in a given amount of time.</td>
		</tr>
		<tr>
			<td class="ent_list_name">QuaternionAdd</td>
			<td class="ent_list_name">void QuaternionAdd(handle, handle, handle)</td>
			<td class="ent_list_summary">Adds two quaternions together into another quaternion.</td>
		</tr>
		<tr>
			<td class="ent_list_name">QuaternionAngles</td>
			<td class="ent_list_name">Vector QuaternionAngles(handle)</td>
			<td class="ent_list_summary">Converts a quaternion to angles.</td>
		</tr>
		<tr>
			<td class="ent_list_name">QuaternionMatrix</td>
			<td class="ent_list_name">void QuaternionMatrix(handle, handle)</td>
			<td class="ent_list_summary">Converts a quaternion to a matrix.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RandomFloat</td>
			<td class="ent_list_name">float RandomFloat(float, float)</td>
			<td class="ent_list_summary">Generate a random floating point number within a range, inclusive.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RandomInt</td>
			<td class="ent_list_name">int RandomInt(int, int)</td>
			<td class="ent_list_summary">Generate a random integer within a range, inclusive.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RegisterActivityConstants</td>
			<td class="ent_list_name">void RegisterActivityConstants()</td>
			<td class="ent_list_summary">Registers all activity IDs as usable constants.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RemapVal</td>
			<td class="ent_list_name">float RemapVal(float, float, float, float, float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">RemapValClamped</td>
			<td class="ent_list_name">float RemapValClamped(float, float, float, float, float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">RestoreTable</td>
			<td class="ent_list_name">void RestoreTable(string, handle)</td>
			<td class="ent_list_summary">Retrieves a table from storage. Write into input table.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SaveEntityKVToTable</td>
			<td class="ent_list_name">void SaveEntityKVToTable(handle, handle)</td>
			<td class="ent_list_summary">Saves an entity's keyvalues to a table.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SaveTable</td>
			<td class="ent_list_name">void SaveTable(string, handle)</td>
			<td class="ent_list_summary">Store a table with primitive values that will persist across level transitions and save loads.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SendToConsole</td>
			<td class="ent_list_name">void SendToConsole(string)</td>
			<td class="ent_list_summary">Send a string to the console as a command</td>
		</tr>
		<tr>
			<td class="ent_list_name">SendToConsoleServer</td>
			<td class="ent_list_name">void SendToConsoleServer(string)</td>
			<td class="ent_list_summary">Send a string to the server console as a command</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetIdentityMatrix</td>
			<td class="ent_list_name">void SetIdentityMatrix(handle)</td>
			<td class="ent_list_summary">Turns a matrix into an identity matrix.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetPhysVelocity</td>
			<td class="ent_list_name">void SetPhysVelocity(handle, Vector, Vector)</td>
			<td class="ent_list_summary">Sets physics velocity for the given VPhysics object</td>
		</tr>
		<tr>
			<td class="ent_list_name">SetScaleMatrix</td>
			<td class="ent_list_name">void SetScaleMatrix(float, float, float, handle)</td>
			<td class="ent_list_summary">Builds a scale matrix.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ShowMessage</td>
			<td class="ent_list_name">void ShowMessage(string)</td>
			<td class="ent_list_summary">Print a hud message on all clients</td>
		</tr>
		<tr>
			<td class="ent_list_name">SimpleSpline</td>
			<td class="ent_list_name">float SimpleSpline(float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SimpleSplineRemapVal</td>
			<td class="ent_list_name">float SimpleSplineRemapVal(float, float, float, float, float)</td>
			<td class="ent_list_summary">remaps a value in [startInterval, startInterval+rangeInterval] from linear to spline using SimpleSpline</td>
		</tr>
		<tr>
			<td class="ent_list_name">SimpleSplineRemapValClamped</td>
			<td class="ent_list_name">float SimpleSplineRemapValClamped(float, float, float, float, float)</td>
			<td class="ent_list_summary">remaps a value in [startInterval, startInterval+rangeInterval] from linear to spline using SimpleSpline</td>
		</tr>
		<tr>
			<td class="ent_list_name">SmoothCurve</td>
			<td class="ent_list_name">float SmoothCurve(float)</td>
			<td class="ent_list_summary">SmoothCurve maps a 0-1 value into another 0-1 value based on a cosine wave</td>
		</tr>
		<tr>
			<td class="ent_list_name">SmoothCurve_Tweak</td>
			<td class="ent_list_name">float SmoothCurve_Tweak(float, float, float)</td>
			<td class="ent_list_summary">SmoothCurve peaks at flPeakPos, flPeakSharpness controls the sharpness of the peak</td>
		</tr>
		<tr>
			<td class="ent_list_name">SpawnEntityFromKeyValues</td>
			<td class="ent_list_name">handle SpawnEntityFromKeyValues(string, handle)</td>
			<td class="ent_list_summary">Spawns an entity with the keyvalues in a CScriptKeyValues handle.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SpawnEntityFromTable</td>
			<td class="ent_list_name">handle SpawnEntityFromTable(string, handle)</td>
			<td class="ent_list_summary">Native function for entity spawning.</td>
		</tr>
		<tr>
			<td class="ent_list_name">StopListeningToAllGameEvents</td>
			<td class="ent_list_name">void StopListeningToAllGameEvents(string)</td>
			<td class="ent_list_summary">Stop listening to all game events within a specific context.</td>
		</tr>
		<tr>
			<td class="ent_list_name">StopListeningToGameEvent</td>
			<td class="ent_list_name">bool StopListeningToGameEvent(int)</td>
			<td class="ent_list_summary">Stop the specified event listener.</td>
		</tr>
		<tr>
			<td class="ent_list_name">StringToFile</td>
			<td class="ent_list_name">bool StringToFile(string, string)</td>
			<td class="ent_list_summary">Stores the string into the file</td>
		</tr>
		<tr>
			<td class="ent_list_name">Time</td>
			<td class="ent_list_name">float Time()</td>
			<td class="ent_list_summary">Get the current server time</td>
		</tr>
		<tr>
			<td class="ent_list_name">TraceHullComplex</td>
			<td class="ent_list_name">handle TraceHullComplex(Vector, Vector, Vector, Vector, handle, int, int)</td>
			<td class="ent_list_summary">Takes 2 points, min/max hull bounds, an ent to ignore, a trace mask, and a collision group to trace to a point using a hull. Returns a handle which can access all trace info.</td>
		</tr>
		<tr>
			<td class="ent_list_name">TraceLine</td>
			<td class="ent_list_name">float TraceLine(Vector, Vector, handle)</td>
			<td class="ent_list_summary">given 2 points & ent to ignore, return fraction along line that hits world or models</td>
		</tr>
		<tr>
			<td class="ent_list_name">TraceLineComplex</td>
			<td class="ent_list_name">handle TraceLineComplex(Vector, Vector, handle, int, int)</td>
			<td class="ent_list_summary">Complex version of TraceLine which takes 2 points, an ent to ignore, a trace mask, and a collision group. Returns a handle which can access all trace info.</td>
		</tr>
		<tr>
			<td class="ent_list_name">UniqueString</td>
			<td class="ent_list_name">null</td>
			<td class="ent_list_summary">Generate a string guaranteed to be unique across the life of the script VM, with an optional root string. Useful for adding data to tables when not sure what keys are already in use in that table.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VectorAngles</td>
			<td class="ent_list_name">Vector VectorAngles(Vector)</td>
			<td class="ent_list_summary">Turns a direction vector into an angle.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VectorIRotate</td>
			<td class="ent_list_name">Vector VectorIRotate(Vector, handle)</td>
			<td class="ent_list_summary">Rotates a vector with the inverse of a matrix.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VectorITransform</td>
			<td class="ent_list_name">Vector VectorITransform(Vector, handle)</td>
			<td class="ent_list_summary">Transforms a vector with the inverse of a matrix.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VectorRotate</td>
			<td class="ent_list_name">Vector VectorRotate(Vector, handle)</td>
			<td class="ent_list_summary">Rotates a vector with a matrix.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VectorTransform</td>
			<td class="ent_list_name">Vector VectorTransform(Vector, handle)</td>
			<td class="ent_list_summary">Transforms a vector with a matrix.</td>
		</tr>
		<tr>
			<td class="ent_list_name">clamp</td>
			<td class="ent_list_name">float clamp(float, float, float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">max</td>
			<td class="ent_list_name">float max(float, float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">min</td>
			<td class="ent_list_name">float min(float, float)</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">printc</td>
			<td class="ent_list_name">void printc(int, int, int, string)</td>
			<td class="ent_list_summary">Version of print() which takes a color before the message.</td>
		</tr>
		<tr>
			<td class="ent_list_name">printcl</td>
			<td class="ent_list_name">void printcl(int, int, int, string)</td>
			<td class="ent_list_summary">Version of printl() which takes a color before the message.</td>
		</tr>
	</tbody>
</table>
