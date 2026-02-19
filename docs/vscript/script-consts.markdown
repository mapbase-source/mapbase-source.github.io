---
layout: article
title: List of Script Constants
permalink: /docs/vscript/script-consts/
breadcrumb: true
wide: true
---

This list contains all consts available for VScript in Mapbase.

This can also be printed into the console by setting <code>developer</code> to non-zero, loading a map, and executing <code>script_help</code>.

<h2>Game Constants</h2>
<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Instance</th>
			<th>Type</th>
			<th>Value</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">AE_TYPE_SERVER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Animation event flag which indicates an event is supposed to be serverside only.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AE_TYPE_SCRIPTED</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Animation event flag with an unknown purpose.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AE_TYPE_SHARED</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Animation event flag which indicates an event is supposed to be shared between the server and client.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AE_TYPE_WEAPON</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">Animation event flag which indicates an event is part of a weapon.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AE_TYPE_CLIENT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary">Animation event flag which indicates an event is supposed to be clientside only.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AE_TYPE_FACEPOSER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32</td>
			<td class="ent_list_summary">Animation event flag with an unknown purpose. Presumably related to Faceposer.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AE_TYPE_NEWEVENTSYSTEM</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1024</td>
			<td class="ent_list_summary">Animation event flag which indicates an event is using the new system. This is often used by class-specific events from NPCs.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AISS_AWAKE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">NPC is awake. (NPC sleep state used in Get/SetSleepState())</td>
		</tr>
		<tr>
			<td class="ent_list_name">AISS_WAITING_FOR_THREAT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">NPC is asleep and will awaken upon seeing an enemy. (NPC sleep state used in Get/SetSleepState())</td>
		</tr>
		<tr>
			<td class="ent_list_name">AISS_WAITING_FOR_PVS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">NPC is asleep and will awaken upon entering a player's PVS. (NPC sleep state used in Get/SetSleepState())</td>
		</tr>
		<tr>
			<td class="ent_list_name">AISS_WAITING_FOR_INPUT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary">NPC is asleep and will only awaken upon receiving the Wake input. (NPC sleep state used in Get/SetSleepState())</td>
		</tr>
		<tr>
			<td class="ent_list_name">AI_SLEEP_FLAGS_NONE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">No sleep flags. (NPC sleep flag used in Add/Remove/HasSleepFlags())</td>
		</tr>
		<tr>
			<td class="ent_list_name">AI_SLEEP_FLAG_AUTO_PVS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Indicates a NPC will sleep upon exiting PVS. (NPC sleep flag used in Add/Remove/HasSleepFlags())</td>
		</tr>
		<tr>
			<td class="ent_list_name">AI_SLEEP_FLAG_AUTO_PVS_AFTER_PVS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Indicates a NPC will sleep upon exiting PVS after entering PVS for the first time(?) (NPC sleep flag used in Add/Remove/HasSleepFlags())</td>
		</tr>
		<tr>
			<td class="ent_list_name">ALL_CONTEXTS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">-1048576</td>
			<td class="ent_list_summary">All sound contexts useable in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ALL_SCENTS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">224</td>
			<td class="ent_list_summary">All "scent" sound types useable in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ALL_VISIBLE_CONTENTS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">255</td>
			<td class="ent_list_summary">Contains all visible spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ALL_SOUNDS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1048351</td>
			<td class="ent_list_summary">All sound types useable in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AUTOAIM_SCALE_DIRECT_ONLY</td>
			<td class="ent_list_name">float</td>
			<td class="ent_list_name">0.000000</td>
			<td class="ent_list_summary">Indicates auto aim should not be used except for direct hits.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AUTOAIM_2DEGREES</td>
			<td class="ent_list_name">float</td>
			<td class="ent_list_name">0.034899</td>
			<td class="ent_list_summary">2-degree autoaim cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AUTOAIM_5DEGREES</td>
			<td class="ent_list_name">float</td>
			<td class="ent_list_name">0.087156</td>
			<td class="ent_list_summary">5-degree autoaim cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AUTOAIM_8DEGREES</td>
			<td class="ent_list_name">float</td>
			<td class="ent_list_name">0.139173</td>
			<td class="ent_list_summary">8-degree autoaim cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AUTOAIM_10DEGREES</td>
			<td class="ent_list_name">float</td>
			<td class="ent_list_name">0.173648</td>
			<td class="ent_list_summary">10-degree autoaim cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AUTOAIM_20DEGREES</td>
			<td class="ent_list_name">float</td>
			<td class="ent_list_name">0.349066</td>
			<td class="ent_list_summary">20-degree autoaim cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">AUTOAIM_SCALE_DEFAULT</td>
			<td class="ent_list_name">float</td>
			<td class="ent_list_name">1.000000</td>
			<td class="ent_list_summary">Indicates default auto aim scale.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CHAN_REPLACE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">-1</td>
			<td class="ent_list_summary">The sound channel used when playing sounds through console commands.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CHAN_AUTO</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">The default generic sound channel.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CHAN_WEAPON</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">The sound channel for player and NPC weapons.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CHAN_VOICE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">The sound channel used for dialogue, voice lines, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CHAN_ITEM</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary">The sound channel used for generic physics impact sounds, health/suit chargers, +use sounds.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CHAN_BODY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">The sound channel used for clothing, ragdoll impacts, footsteps, knocking/pounding/punching etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CHAN_STREAM</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">5</td>
			<td class="ent_list_summary">The sound channel for sounds that can be delayed by an async load, i.e. aren't responses to particular events.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CHAN_STATIC</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">6</td>
			<td class="ent_list_summary">The sound channel for constant/background sound that doesn't require any reaction.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CHAN_VOICE2</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">7</td>
			<td class="ent_list_summary">An additional sound channel for voices. Used in TF2 for the announcer.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CHAN_VOICE_BASE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">The sound channel used for network voice data (online voice communications).</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_NONE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">No class.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_PLAYER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Used by players.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_PLAYER_ALLY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Used by citizens, hacked manhacks, and other misc. allies.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_PLAYER_ALLY_VITAL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary">Used by Alyx, Barney, and other allies vital to HL2.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_ANTLION</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Used by antlions, antlion guards, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_BARNACLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">5</td>
			<td class="ent_list_summary">Used by barnacles.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_BULLSEYE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">6</td>
			<td class="ent_list_summary">Used by npc_bullseye.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_CITIZEN_PASSIVE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">7</td>
			<td class="ent_list_summary">Used by citizens when the "gordon_precriminal" or "citizens_passive" states are enabled.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_CITIZEN_REBEL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">UNUSED IN HL2. Rebels normally use CLASS_PLAYER_ALLY.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_COMBINE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">9</td>
			<td class="ent_list_summary">Used by Combine soldiers, Combine turrets, and other misc. Combine NPCs.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_COMBINE_GUNSHIP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">10</td>
			<td class="ent_list_summary">Used by Combine gunships, helicopters, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_CONSCRIPT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">11</td>
			<td class="ent_list_summary">UNUSED IN HL2. Would've been used by conscripts.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_HEADCRAB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">12</td>
			<td class="ent_list_summary">Used by headcrabs.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_MANHACK</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">13</td>
			<td class="ent_list_summary">Used by Combine manhacks.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_METROPOLICE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">14</td>
			<td class="ent_list_summary">Used by Combine metrocops.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_MILITARY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">15</td>
			<td class="ent_list_summary">In HL2, this is only used by npc_combinecamera and func_guntarget. This appears to be recognized as a Combine class.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_SCANNER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary">Used by Combine city scanners and claw scanners.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_STALKER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">17</td>
			<td class="ent_list_summary">Used by Combine stalkers.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_VORTIGAUNT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">18</td>
			<td class="ent_list_summary">Used by vortigaunts.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_ZOMBIE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">19</td>
			<td class="ent_list_summary">Used by zombies.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_PROTOSNIPER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">20</td>
			<td class="ent_list_summary">Used by Combine snipers.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_MISSILE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">21</td>
			<td class="ent_list_summary">Used by RPG and APC missiles.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_FLARE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">22</td>
			<td class="ent_list_summary">Used by env_flares.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_EARTH_FAUNA</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">23</td>
			<td class="ent_list_summary">Used by birds and other terrestrial animals.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_HACKED_ROLLERMINE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">24</td>
			<td class="ent_list_summary">Used by rollermines which were hacked by Alyx.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLASS_COMBINE_HUNTER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">25</td>
			<td class="ent_list_summary">Used by Combine hunters.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CLIENT_DLL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_NONE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_DEBRIS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_DEBRIS_TRIGGER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_INTERACTIVE_DEBRIS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_INTERACTIVE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_PLAYER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">5</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_BREAKABLE_GLASS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">6</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_VEHICLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">7</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_PLAYER_MOVEMENT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_NPC</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">9</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_IN_VEHICLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">10</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_WEAPON</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">11</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_VEHICLE_CLIP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">12</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_PROJECTILE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">13</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_DOOR_BLOCKER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">14</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_PASSABLE_DOOR</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">15</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_DISSOLVING</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_PUSHAWAY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">17</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_NPC_ACTOR</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">18</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">COLLISION_GROUP_NPC_SCRIPTED</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">19</td>
			<td class="ent_list_summary">Collision group used in GetCollisionGroup(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_EMPTY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_SOLID</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_WINDOW</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_AUX</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_GRATE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_SLIME</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_WATER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_BLOCKLOS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">64</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_OPAQUE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">128</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_TESTFOGVOLUME</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">256</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_TEAM1</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2048</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_TEAM2</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4096</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_IGNORE_NODRAW_OPAQUE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8192</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_MOVEABLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16384</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_AREAPORTAL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32768</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_PLAYERCLIP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">65536</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_MONSTERCLIP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">131072</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_CURRENT_0</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">262144</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_CURRENT_90</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">524288</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_CURRENT_180</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1048576</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_CURRENT_270</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2097152</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_CURRENT_UP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4194304</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_CURRENT_DOWN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8388608</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_ORIGIN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16777216</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_MONSTER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">33554432</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_DEBRIS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">67108864</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_DETAIL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">134217728</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_TRANSLUCENT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">268435456</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_LADDER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">536870912</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">CONTENTS_HITBOX</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1073741824</td>
			<td class="ent_list_summary">Spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DAMAGE_NO</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">Don't take damage (Use with GetTakeDamage/SetTakeDamage)</td>
		</tr>
		<tr>
			<td class="ent_list_name">DAMAGE_EVENTS_ONLY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Call damage functions, but don't modify health (Use with GetTakeDamage/SetTakeDamage)</td>
		</tr>
		<tr>
			<td class="ent_list_name">DAMAGE_YES</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Allow damage to be taken (Use with GetTakeDamage/SetTakeDamage)</td>
		</tr>
		<tr>
			<td class="ent_list_name">DAMAGE_AIM</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary">(Use with GetTakeDamage/SetTakeDamage)</td>
		</tr>
		<tr>
			<td class="ent_list_name">DEG2RAD</td>
			<td class="ent_list_name">float</td>
			<td class="ent_list_name">0.017453</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_GENERIC</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_CRUSH</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_BULLET</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_SLASH</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_BURN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_VEHICLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_FALL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_BLAST</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">64</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_CLUB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">128</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_SHOCK</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">256</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_SONIC</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">512</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_ENERGYBEAM</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1024</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_PREVENT_PHYSICS_FORCE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2048</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_NEVERGIB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4096</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_ALWAYSGIB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8192</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_DROWN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16384</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_PARALYZE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32768</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_NERVEGAS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">65536</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_POISON</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">131072</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_RADIATION</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">262144</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_DROWNRECOVER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">524288</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_ACID</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1048576</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_SLOWBURN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2097152</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_REMOVENORAGDOLL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4194304</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_PHYSGUN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8388608</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_PLASMA</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16777216</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_AIRBOAT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">33554432</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_DISSOLVE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">67108864</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_BLAST_SURFACE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">134217728</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_DIRECT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">268435456</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">DMG_BUCKSHOT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">536870912</td>
			<td class="ent_list_summary">Damage type used in damage information.</td>
		</tr>
		<tr>
			<td class="ent_list_name">D_ER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">'Error' relationship definition. Used by NPCs and players for relationship disposition.</td>
		</tr>
		<tr>
			<td class="ent_list_name">D_HT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Denotes a 'Hate' relationship. Used by NPCs and players for relationship disposition.</td>
		</tr>
		<tr>
			<td class="ent_list_name">D_FR</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Denotes a 'Fear' relationship. Used by NPCs and players for relationship disposition.</td>
		</tr>
		<tr>
			<td class="ent_list_name">D_LI</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary">Denotes a 'Like' relationship. Used by NPCs and players for relationship disposition.</td>
		</tr>
		<tr>
			<td class="ent_list_name">D_NU</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Denotes a 'Neutral' relationship. Used by NPCs and players for relationship disposition.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_NO_DAMAGE_FORCES</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">-2147483648</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_KILLME</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_DORMANT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_NOCLIP_ACTIVE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_SETTING_UP_BONES</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_KEEP_ON_RECREATE_ENTITIES</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_HAS_PLAYER_CHILD</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_DIRTY_SHADOWUPDATE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_NOTIFY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">64</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_FORCE_CHECK_TRANSMIT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">128</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_BOT_FROZEN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">256</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_SERVER_ONLY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">512</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_NO_AUTO_EDICT_ATTACH</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1024</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_DIRTY_ABSTRANSFORM</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2048</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_DIRTY_ABSVELOCITY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4096</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_DIRTY_ABSANGVELOCITY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8192</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_DIRTY_SURROUNDING_COLLISION_BOUNDS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16384</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_DIRTY_SPATIAL_PARTITION</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32768</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_PLUGIN_BASED_BOT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">65536</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_IN_SKYBOX</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">131072</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_USE_PARTITION_WHEN_NOT_SOLID</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">262144</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_TOUCHING_FLUID</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">524288</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_IS_BEING_LIFTED_BY_BARNACLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1048576</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_NO_ROTORWASH_PUSH</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2097152</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_NO_THINK_FUNCTION</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4194304</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_NO_GAME_PHYSICS_SIMULATION</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8388608</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_CHECK_UNTOUCH</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16777216</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_DONTBLOCKLOS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">33554432</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_DONTWALKON</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">67108864</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_NO_DISSOLVE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">134217728</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_NO_MEGAPHYSCANNON_RAGDOLL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">268435456</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_NO_WATER_VELOCITY_CHANGE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">536870912</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EFL_NO_PHYSCANNON_INTERACTION</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1073741824</td>
			<td class="ent_list_summary">Entity flag used in GetEFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EF_BONEMERGE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Effect flag used in GetEffects(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EF_BRIGHTLIGHT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Effect flag used in GetEffects(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EF_DIMLIGHT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Effect flag used in GetEffects(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EF_NOINTERP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">Effect flag used in GetEffects(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EF_NOSHADOW</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary">Effect flag used in GetEffects(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EF_NODRAW</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32</td>
			<td class="ent_list_summary">Effect flag used in GetEffects(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EF_NORECEIVESHADOW</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">64</td>
			<td class="ent_list_summary">Effect flag used in GetEffects(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EF_BONEMERGE_FASTCULL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">128</td>
			<td class="ent_list_summary">Effect flag used in GetEffects(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EF_ITEM_BLINK</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">256</td>
			<td class="ent_list_summary">Effect flag used in GetEffects(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">EF_PARENT_ANIMATES</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">512</td>
			<td class="ent_list_summary">Effect flag used in GetEffects(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_NONE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">Empty convar flag.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_UNREGISTERED</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">If this convar flag is set, it isn't added to linked list, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_DEVELOPMENTONLY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">If this convar flag is set, it's hidden in "retail" DLLs.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_GAMEDLL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">This convar flag is defined in server DLL convars.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_CLIENTDLL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">This convar flag is defined in client DLL convars.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_HIDDEN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary">If this convar flag is set, it doesn't appear in the console or any searching tools, but it can still be set.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_PROTECTED</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32</td>
			<td class="ent_list_summary">This convar flag prevents convars with secure data (e.g. passwords) from sending full data to clients, only sending 1 if non-zero and 0 otherwise.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_SPONLY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">64</td>
			<td class="ent_list_summary">If this convar flag is set, it can't be changed by clients connected to a multiplayer server.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_ARCHIVE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">128</td>
			<td class="ent_list_summary">If this convar flag is set, its value will be saved when the game is exited.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_NOTIFY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">256</td>
			<td class="ent_list_summary">If this convar flag is set, it will notify players when it is changed.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_USERINFO</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">512</td>
			<td class="ent_list_summary">If this convar flag is set, it will be marked as info which plays a part in how the server identifies a client.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_PRINTABLEONLY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1024</td>
			<td class="ent_list_summary">If this convar flag is set, it cannot contain unprintable characters. Used for player name cvars, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_UNLOGGED</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2048</td>
			<td class="ent_list_summary">If this convar flag is set, it will not log its changes if a log is being created.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_NEVER_AS_STRING</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4096</td>
			<td class="ent_list_summary">If this convar flag is set, it will never be printed as a string.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_REPLICATED</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8192</td>
			<td class="ent_list_summary">If this convar flag is set, it will enforce a serverside value on any clientside counterparts. (also known as FCVAR_SERVER)</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_CHEAT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16384</td>
			<td class="ent_list_summary">Only useable in singleplayer / debug / multiplayer & sv_cheats</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_DEMO</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">65536</td>
			<td class="ent_list_summary">If this convar flag is set, it will be recorded when starting a demo file.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_DONTRECORD</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">131072</td>
			<td class="ent_list_summary">If this convar flag is set, it will NOT be recorded when starting a demo file.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_RELOAD_MATERIALS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1048576</td>
			<td class="ent_list_summary">If this convar flag is set, it will force a material reload when it changes.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_RELOAD_TEXTURES</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2097152</td>
			<td class="ent_list_summary">If this convar flag is set, it will force a texture reload when it changes.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_NOT_CONNECTED</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4194304</td>
			<td class="ent_list_summary">If this convar flag is set, it cannot be changed by a client connected to the server.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_MATERIAL_SYSTEM_THREAD</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8388608</td>
			<td class="ent_list_summary">This convar flag indicates it's read from the material system thread.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_ARCHIVE_XBOX</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16777216</td>
			<td class="ent_list_summary">If this convar flag is set, it will be archived on the Xbox config.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_ACCESSIBLE_FROM_THREADS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">33554432</td>
			<td class="ent_list_summary">If this convar flag is set, it will be accessible from the material system thread.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_SERVER_CAN_EXECUTE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">268435456</td>
			<td class="ent_list_summary">If this convar flag is set, the server will be allowed to execute it as a client command.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_SERVER_CANNOT_QUERY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">536870912</td>
			<td class="ent_list_summary">If this convar flag is set, the server will not be allowed to query its value.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FCVAR_CLIENTCMD_CAN_EXECUTE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1073741824</td>
			<td class="ent_list_summary">If this convar flag is set, any client will be allowed to execute this command.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_ONGROUND</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_DUCKING</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_WATERJUMP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_ONTRAIN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_INRAIN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_FROZEN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_ATCONTROLS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">64</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_CLIENT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">128</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_FAKECLIENT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">256</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_INWATER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">512</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_FLY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1024</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_SWIM</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2048</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_CONVEYOR</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4096</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_NPC</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8192</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_GODMODE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16384</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_NOTARGET</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32768</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_AIMTARGET</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">65536</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_PARTIALGROUND</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">131072</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_STATICPROP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">262144</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_GRAPHED</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">524288</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_GRENADE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1048576</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_STEPMOVEMENT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2097152</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_DONTTOUCH</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4194304</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_BASEVELOCITY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8388608</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_WORLDBRUSH</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16777216</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_OBJECT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">33554432</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_KILLME</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">67108864</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_ONFIRE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">134217728</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_DISSOLVING</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">268435456</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_TRANSRAGDOLL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">536870912</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FL_UNBLOCKABLE_BY_PLAYER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1073741824</td>
			<td class="ent_list_summary">Flag used in GetFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FSOLID_CUSTOMRAYTEST</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Solid flag used in GetSolidFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FSOLID_CUSTOMBOXTEST</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Solid flag used in GetSolidFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FSOLID_NOT_SOLID</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Solid flag used in GetSolidFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FSOLID_TRIGGER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">Solid flag used in GetSolidFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FSOLID_NOT_STANDABLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary">Solid flag used in GetSolidFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FSOLID_VOLUME_CONTENTS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32</td>
			<td class="ent_list_summary">Solid flag used in GetSolidFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FSOLID_FORCE_WORLD_ALIGNED</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">64</td>
			<td class="ent_list_summary">Solid flag used in GetSolidFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FSOLID_USE_TRIGGER_BOUNDS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">128</td>
			<td class="ent_list_summary">Solid flag used in GetSolidFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FSOLID_ROOT_PARENT_ALIGNED</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">256</td>
			<td class="ent_list_summary">Solid flag used in GetSolidFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FSOLID_TRIGGER_TOUCH_DEBRIS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">512</td>
			<td class="ent_list_summary">Solid flag used in GetSolidFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">FSOLID_COLLIDE_WITH_OWNER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1024</td>
			<td class="ent_list_summary">Solid flag used in GetSolidFlags(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GENDER_NONE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">A standard value used to represent no specific gender. Usually used for sounds.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GENDER_MALE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">A standard value used to represent male gender. Usually used for sounds.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GENDER_FEMALE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">A standard value used to represent female gender. Usually used for sounds.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GLOBAL_OFF</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">Global state used by the Globals singleton.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GLOBAL_ON</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Global state used by the Globals singleton.</td>
		</tr>
		<tr>
			<td class="ent_list_name">GLOBAL_DEAD</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Global state used by the Globals singleton.</td>
		</tr>
		<tr>
			<td class="ent_list_name">LAST_VISIBLE_CONTENTS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">128</td>
			<td class="ent_list_summary">Contains last visible spatial content flags.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MAPBASE_VERSION</td>
			<td class="ent_list_name">string</td>
			<td class="ent_list_name">"8.0"</td>
			<td class="ent_list_summary">The current Mapbase version according to when the VScript library was last compiled.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MAPBASE_VER_INT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8000</td>
			<td class="ent_list_summary">The current Mapbase version integer according to when the VScript library was last compiled.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_SPLITAREAPORTAL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">48</td>
			<td class="ent_list_summary">Spatial content mask representing objects which can split areaportals (CONTENTS_WATER|CONTENTS_SLIME)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_SOLID_BRUSHONLY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16395</td>
			<td class="ent_list_summary">Spatial content mask equivalent to MASK_SOLID, but without NPCs (CONTENTS_SOLID|CONTENTS_MOVEABLE|CONTENTS_WINDOW|CONTENTS_GRATE)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_WATER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16432</td>
			<td class="ent_list_summary">Spatial content mask representing water and slime solids (CONTENTS_WATER|CONTENTS_MOVEABLE|CONTENTS_SLIME)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_BLOCKLOS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16449</td>
			<td class="ent_list_summary">Spatial content mask representing objects which block LOS for AI (CONTENTS_SOLID|CONTENTS_MOVEABLE|CONTENTS_BLOCKLOS)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_OPAQUE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16513</td>
			<td class="ent_list_summary">Spatial content mask representing objects which block lighting (CONTENTS_SOLID|CONTENTS_MOVEABLE|CONTENTS_OPAQUE)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_VISIBLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">24705</td>
			<td class="ent_list_summary">Spatial content mask representing objects which block LOS for players (MASK_OPAQUE|CONTENTS_IGNORE_NODRAW_OPAQUE)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_PLAYERSOLID_BRUSHONLY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">81931</td>
			<td class="ent_list_summary">Spatial content mask equivalent to MASK_PLAYERSOLID, but without NPCs (CONTENTS_SOLID|CONTENTS_MOVEABLE|CONTENTS_WINDOW|CONTENTS_PLAYERCLIP|CONTENTS_GRATE)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_NPCWORLDSTATIC</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">131083</td>
			<td class="ent_list_summary">Spatial content mask representing objects static to NPCs, used for nodegraph rebuilding (CONTENTS_SOLID|CONTENTS_WINDOW|CONTENTS_MONSTERCLIP|CONTENTS_GRATE)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_NPCSOLID_BRUSHONLY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">147467</td>
			<td class="ent_list_summary">Spatial content mask equivalent to MASK_NPCSOLID, but without NPCs (CONTENTS_SOLID|CONTENTS_MOVEABLE|CONTENTS_WINDOW|CONTENTS_MONSTERCLIP|CONTENTS_GRATE)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_SHOT_PORTAL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">33570819</td>
			<td class="ent_list_summary">Spatial content mask equivalent to MASK_SHOT, but excluding debris and not using expensive hitbox calculations (CONTENTS_SOLID|CONTENTS_MOVEABLE|CONTENTS_WINDOW|CONTENTS_MONSTER)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_SOLID</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">33570827</td>
			<td class="ent_list_summary">Spatial content mask representing solid objects (CONTENTS_SOLID|CONTENTS_MOVEABLE|CONTENTS_WINDOW|CONTENTS_MONSTER|CONTENTS_GRATE)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_BLOCKLOS_AND_NPCS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">33570881</td>
			<td class="ent_list_summary">Spatial content mask equivalent to MASK_BLOCKLOS, but also including NPCs (MASK_BLOCKLOS|CONTENTS_MONSTER)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_OPAQUE_AND_NPCS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">33570945</td>
			<td class="ent_list_summary">Spatial content mask equivalent to MASK_OPAQUE, but also including NPCs (MASK_OPAQUE|CONTENTS_MONSTER)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_VISIBLE_AND_NPCS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">33579137</td>
			<td class="ent_list_summary">Spatial content mask equivalent to MASK_VISIBLE, but also including NPCs (MASK_OPAQUE_AND_NPCS|CONTENTS_IGNORE_NODRAW_OPAQUE)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_PLAYERSOLID</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">33636363</td>
			<td class="ent_list_summary">Spatial content mask representing objects solid to the player, including player clips (CONTENTS_SOLID|CONTENTS_MOVEABLE|CONTENTS_PLAYERCLIP|CONTENTS_WINDOW|CONTENTS_MONSTER|CONTENTS_GRATE)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_NPCSOLID</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">33701899</td>
			<td class="ent_list_summary">Spatial content mask representing objects solid to NPCs, including NPC clips (CONTENTS_SOLID|CONTENTS_MOVEABLE|CONTENTS_MONSTERCLIP|CONTENTS_WINDOW|CONTENTS_MONSTER|CONTENTS_GRATE)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_SHOT_HULL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">100679691</td>
			<td class="ent_list_summary">Spatial content mask representing objects solid to non-raycasted weapons, including grates (CONTENTS_SOLID|CONTENTS_MOVEABLE|CONTENTS_MONSTER|CONTENTS_WINDOW|CONTENTS_DEBRIS|CONTENTS_GRATE)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MASK_SHOT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1174421507</td>
			<td class="ent_list_summary">Spatial content mask representing objects solid to bullets (CONTENTS_SOLID|CONTENTS_MOVEABLE|CONTENTS_MONSTER|CONTENTS_WINDOW|CONTENTS_DEBRIS|CONTENTS_HITBOX)</td>
		</tr>
		<tr>
			<td class="ent_list_name">MAX_COORD_FLOAT</td>
			<td class="ent_list_name">float</td>
			<td class="ent_list_name">16384.000000</td>
			<td class="ent_list_summary">Maximum float coordinate.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MAX_TRACE_LENGTH</td>
			<td class="ent_list_name">float</td>
			<td class="ent_list_name">56755.839844</td>
			<td class="ent_list_summary">Maximum traceable distance (assumes cubic world and trace from one corner to opposite).</td>
		</tr>
		<tr>
			<td class="ent_list_name">MOVETYPE_NONE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">Move type used in GetMoveType(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MOVETYPE_ISOMETRIC</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Move type used in GetMoveType(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MOVETYPE_WALK</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Move type used in GetMoveType(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MOVETYPE_STEP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary">Move type used in GetMoveType(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MOVETYPE_FLY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Move type used in GetMoveType(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MOVETYPE_FLYGRAVITY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">5</td>
			<td class="ent_list_summary">Move type used in GetMoveType(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MOVETYPE_VPHYSICS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">6</td>
			<td class="ent_list_summary">Move type used in GetMoveType(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MOVETYPE_PUSH</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">7</td>
			<td class="ent_list_summary">Move type used in GetMoveType(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MOVETYPE_NOCLIP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">Move type used in GetMoveType(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MOVETYPE_LADDER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">9</td>
			<td class="ent_list_summary">Move type used in GetMoveType(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MOVETYPE_OBSERVER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">10</td>
			<td class="ent_list_summary">Move type used in GetMoveType(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">MOVETYPE_CUSTOM</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">11</td>
			<td class="ent_list_summary">Move type used in GetMoveType(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NPC_STATE_INVALID</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">-1</td>
			<td class="ent_list_summary">NPC state type used in GetNPCState(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NPC_STATE_NONE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">NPC state type used in GetNPCState(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NPC_STATE_IDLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">NPC state type used in GetNPCState(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NPC_STATE_ALERT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">NPC state type used in GetNPCState(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NPC_STATE_COMBAT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary">NPC state type used in GetNPCState(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NPC_STATE_SCRIPT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">NPC state type used in GetNPCState(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NPC_STATE_PLAYDEAD</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">5</td>
			<td class="ent_list_summary">NPC state type used in GetNPCState(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NPC_STATE_PRONE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">6</td>
			<td class="ent_list_summary">When in clutches of barnacle (NPC state type used in GetNPCState(), etc.)</td>
		</tr>
		<tr>
			<td class="ent_list_name">NPC_STATE_DEAD</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">7</td>
			<td class="ent_list_summary">NPC state type used in GetNPCState(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">NUM_AI_CLASSES</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">26</td>
			<td class="ent_list_summary">Number of AI classes.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PITCH_LOW</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">95</td>
			<td class="ent_list_summary">The standard low pitch value.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PITCH_NORM</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">100</td>
			<td class="ent_list_summary">The standard pitch value.</td>
		</tr>
		<tr>
			<td class="ent_list_name">PITCH_HIGH</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">120</td>
			<td class="ent_list_summary">The standard high pitch value.</td>
		</tr>
		<tr>
			<td class="ent_list_name">RAD2DEG</td>
			<td class="ent_list_name">float</td>
			<td class="ent_list_name">57.295780</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">ROPE_RESIZE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Try to keep the rope dangling the same amount even as the rope length changes. (for use in rope flags)</td>
		</tr>
		<tr>
			<td class="ent_list_name">ROPE_BARBED</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Hack option to draw like a barbed wire. (for use in rope flags)</td>
		</tr>
		<tr>
			<td class="ent_list_name">ROPE_COLLIDE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Collide with the world. (for use in rope flags)</td>
		</tr>
		<tr>
			<td class="ent_list_name">ROPE_GRAVITY</td>
			<td class="ent_list_name"> 0.000000, 0.000000, -1500.000000 </td>
			<td class="ent_list_name">Vecto</td>
			<td class="ent_list_summary">Default rope gravity vector.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ROPE_SIMULATE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">Is the rope valid? (for use in rope flags)</td>
		</tr>
		<tr>
			<td class="ent_list_name">ROPE_NUMFLAGS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">9</td>
			<td class="ent_list_summary">The number of rope flags recognized by the game.</td>
		</tr>
		<tr>
			<td class="ent_list_name">ROPE_BREAKABLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary">Can the endpoints detach? (for use in rope flags)</td>
		</tr>
		<tr>
			<td class="ent_list_name">ROPE_USE_WIND</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32</td>
			<td class="ent_list_summary">Wind simulation on this rope. (for use in rope flags)</td>
		</tr>
		<tr>
			<td class="ent_list_name">ROPE_INITIAL_HANG</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">64</td>
			<td class="ent_list_summary">By default, ropes will simulate for a bit internally when they are created so they sag, but dynamically created ropes for things like harpoons don't want this. (for use in rope flags)</td>
		</tr>
		<tr>
			<td class="ent_list_name">ROPE_PLAYER_WPN_ATTACH</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">128</td>
			<td class="ent_list_summary">If this flag is set, then the second attachment must be a player. The rope will attach to "buff_attach" on the player's active weapon. This is a flag because it requires special code on the client to find the weapon. (for use in rope flags)</td>
		</tr>
		<tr>
			<td class="ent_list_name">ROPE_NO_GRAVITY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">256</td>
			<td class="ent_list_summary">Disable gravity on this rope. (for use in rope flags)</td>
		</tr>
		<tr>
			<td class="ent_list_name">SCRIPT_PLAYING</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">Moving to the scripted sequence position while playing a custom movement animation.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SCRIPT_WAIT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Waiting on everyone in the script to be ready. Plays the pre idle animation if there is one.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SCRIPT_POST_IDLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Playing the post idle animation after playing the action animation.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SCRIPT_CLEANUP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary">Cancelling the script / cleaning up.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SCRIPT_WALK_TO_MARK</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Walking to the scripted sequence position.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SCRIPT_RUN_TO_MARK</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">5</td>
			<td class="ent_list_summary">Running to the scripted sequence position.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SEEN_ALL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">-1</td>
			<td class="ent_list_summary">All NPC sight arrays. Used in GetFirstSeenEntity, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SEEN_HIGH_PRIORITY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">NPC sight array for players. Used in GetFirstSeenEntity, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SEEN_NPCS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">NPC sight array for other NPCs. Used in GetFirstSeenEntity, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SEEN_MISC</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">NPC sight array for objects. Used in GetFirstSeenEntity, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SERVER_DLL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_NONE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_20dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">20</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_25dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">25</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_30dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">30</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_35dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">35</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_40dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">40</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_45dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">45</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_50dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">50</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_55dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">55</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_60dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">60</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_IDLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">60</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_65dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">65</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_STATIC</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">66</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_70dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">70</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_NORM</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">75</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_75dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">75</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_80dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">80</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_TALKING</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">80</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_85dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">85</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_90dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">90</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_95dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">95</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_100dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">100</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_105dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">105</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_110dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">110</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_120dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">120</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_130dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">130</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_GUNFIRE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">140</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_140dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">140</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_150dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">150</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SNDLVL_180dB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">180</td>
			<td class="ent_list_summary">A standard value used for a sound's sound level.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SND_CHANGE_VOL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Indicates a sound is a volume change to an already-playing sound.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SND_CHANGE_PITCH</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Indicates a sound is a pitch change to an already-playing sound.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SND_STOP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Indicates a sound is stopping an already-playing sound.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SND_SPAWNING</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">Indicates a sound is spawning, used in some cases for ambients. Not networked.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SND_DELAY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary">Indicates a sound has an initial delay.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SND_STOP_LOOPING</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32</td>
			<td class="ent_list_summary">Stops all looping sounds on an entity.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SND_SPEAKER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">64</td>
			<td class="ent_list_summary">Indicates a sound is being played again by a microphone through a speaker.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SND_SHOULDPAUSE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">128</td>
			<td class="ent_list_summary">Forces a sound to pause if the game is paused.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SND_IGNORE_PHONEMES</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">256</td>
			<td class="ent_list_summary">Prevents the entity emitting this sound from using its phonemes (no lip-syncing).</td>
		</tr>
		<tr>
			<td class="ent_list_name">SND_IGNORE_NAME</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">512</td>
			<td class="ent_list_summary">Used to change all sounds emitted by an entity, regardless of name.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SND_DO_NOT_OVERWRITE_EXISTING_ON_CHANNEL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1024</td>
			<td class="ent_list_summary">Prevents a sound from interrupting other sounds on a channel (if the channel supports interruption).</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOLID_NONE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">Solid type used by VPhysics</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOLID_BSP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Solid type used by VPhysics</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOLID_BBOX</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Solid type used by VPhysics</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOLID_OBB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary">Solid type used by VPhysics</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOLID_OBB_YAW</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Solid type used by VPhysics</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOLID_CUSTOM</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">5</td>
			<td class="ent_list_summary">Solid type used by VPhysics</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOLID_VPHYSICS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">6</td>
			<td class="ent_list_summary">Solid type used by VPhysics</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUNDENT_CHANNEL_UNSPECIFIED</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">Sound channel used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUNDENT_CHANNEL_REPEATING</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Sound channel used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUNDENT_CHANNEL_REPEATED_DANGER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Sound channel used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUNDENT_CHANNEL_REPEATED_PHYSICS_DANGER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary">Sound channel used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUNDENT_CHANNEL_WEAPON</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Sound channel used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUNDENT_CHANNEL_INJURY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">5</td>
			<td class="ent_list_summary">Sound channel used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUNDENT_CHANNEL_BULLET_IMPACT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">6</td>
			<td class="ent_list_summary">Sound channel used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUNDENT_CHANNEL_NPC_FOOTSTEP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">7</td>
			<td class="ent_list_summary">Sound channel used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUNDENT_CHANNEL_SPOOKY_NOISE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">Sound channel used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUNDENT_CHANNEL_ZOMBINE_GRENADE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">9</td>
			<td class="ent_list_summary">Sound channel used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUNDENT_VOLUME_PISTOL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">500</td>
			<td class="ent_list_summary">Sound volume preset for use in InsertAISound, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUNDENT_VOLUME_MACHINEGUN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1500</td>
			<td class="ent_list_summary">Sound volume preset for use in InsertAISound, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUNDENT_VOLUME_SHOTGUN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1500</td>
			<td class="ent_list_summary">Sound volume preset for use in InsertAISound, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_NONE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_COMBAT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_WORLD</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_PLAYER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_DANGER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_BULLET_IMPACT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_CARCASS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_MEAT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">64</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_GARBAGE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">128</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_THUMPER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">256</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_BUGBAIT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">512</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_PHYSICS_DANGER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1024</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_DANGER_SNIPERONLY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2048</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_MOVE_AWAY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4096</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_PLAYER_VEHICLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8192</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_READINESS_LOW</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16384</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_READINESS_MEDIUM</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32768</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_READINESS_HIGH</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">65536</td>
			<td class="ent_list_summary">Sound type used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_CONTEXT_FROM_SNIPER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1048576</td>
			<td class="ent_list_summary">Sound context used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_CONTEXT_GUNFIRE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2097152</td>
			<td class="ent_list_summary">Sound context used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_CONTEXT_MORTAR</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4194304</td>
			<td class="ent_list_summary">Sound context used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_CONTEXT_COMBINE_ONLY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8388608</td>
			<td class="ent_list_summary">Sound context used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_CONTEXT_REACT_TO_SOURCE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16777216</td>
			<td class="ent_list_summary">Sound context used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_CONTEXT_EXPLOSION</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">33554432</td>
			<td class="ent_list_summary">Sound context used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_CONTEXT_EXCLUDE_COMBINE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">67108864</td>
			<td class="ent_list_summary">Sound context used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_CONTEXT_DANGER_APPROACH</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">134217728</td>
			<td class="ent_list_summary">Sound context used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_CONTEXT_ALLIES_ONLY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">268435456</td>
			<td class="ent_list_summary">Sound context used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_CONTEXT_PLAYER_VEHICLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">536870912</td>
			<td class="ent_list_summary">Sound context used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">SOUND_CONTEXT_OWNER_ALLIES</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1073741824</td>
			<td class="ent_list_summary">Sound context used in QueryHearSound hooks, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VECTOR_CONE_10DEGREES</td>
			<td class="ent_list_name"> 0.087160, 0.087160, 0.087160 </td>
			<td class="ent_list_name">Vecto</td>
			<td class="ent_list_summary">10-degree weapon vector cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VECTOR_CONE_15DEGREES</td>
			<td class="ent_list_name"> 0.130530, 0.130530, 0.130530 </td>
			<td class="ent_list_name">Vecto</td>
			<td class="ent_list_summary">15-degree weapon vector cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VECTOR_CONE_1DEGREES</td>
			<td class="ent_list_name"> 0.008730, 0.008730, 0.008730 </td>
			<td class="ent_list_name">Vecto</td>
			<td class="ent_list_summary">1-degree weapon vector cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VECTOR_CONE_20DEGREES</td>
			<td class="ent_list_name"> 0.173650, 0.173650, 0.173650 </td>
			<td class="ent_list_name">Vecto</td>
			<td class="ent_list_summary">20-degree weapon vector cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VECTOR_CONE_2DEGREES</td>
			<td class="ent_list_name"> 0.017450, 0.017450, 0.017450 </td>
			<td class="ent_list_name">Vecto</td>
			<td class="ent_list_summary">2-degree weapon vector cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VECTOR_CONE_3DEGREES</td>
			<td class="ent_list_name"> 0.026180, 0.026180, 0.026180 </td>
			<td class="ent_list_name">Vecto</td>
			<td class="ent_list_summary">3-degree weapon vector cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VECTOR_CONE_4DEGREES</td>
			<td class="ent_list_name"> 0.034900, 0.034900, 0.034900 </td>
			<td class="ent_list_name">Vecto</td>
			<td class="ent_list_summary">4-degree weapon vector cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VECTOR_CONE_5DEGREES</td>
			<td class="ent_list_name"> 0.043620, 0.043620, 0.043620 </td>
			<td class="ent_list_name">Vecto</td>
			<td class="ent_list_summary">5-degree weapon vector cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VECTOR_CONE_6DEGREES</td>
			<td class="ent_list_name"> 0.052340, 0.052340, 0.052340 </td>
			<td class="ent_list_name">Vecto</td>
			<td class="ent_list_summary">6-degree weapon vector cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VECTOR_CONE_7DEGREES</td>
			<td class="ent_list_name"> 0.061050, 0.061050, 0.061050 </td>
			<td class="ent_list_name">Vecto</td>
			<td class="ent_list_summary">7-degree weapon vector cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VECTOR_CONE_8DEGREES</td>
			<td class="ent_list_name"> 0.069760, 0.069760, 0.069760 </td>
			<td class="ent_list_name">Vecto</td>
			<td class="ent_list_summary">8-degree weapon vector cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VECTOR_CONE_9DEGREES</td>
			<td class="ent_list_name"> 0.078460, 0.078460, 0.078460 </td>
			<td class="ent_list_name">Vecto</td>
			<td class="ent_list_summary">9-degree weapon vector cone.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VECTOR_CONE_PRECALCULATED</td>
			<td class="ent_list_name"> 0.000000, 0.000000, 0.000000 </td>
			<td class="ent_list_name">Vecto</td>
			<td class="ent_list_summary">This is just a zero vector, but it adds some context indicating that the person writing the code is not allowing FireBullets() to modify the direction of the shot because the shot direction being passed into the function has already been modified by another piece of code and should be fired as specified.</td>
		</tr>
		<tr>
			<td class="ent_list_name">VOL_NORM</td>
			<td class="ent_list_name">float</td>
			<td class="ent_list_name">1.000000</td>
			<td class="ent_list_summary">The standard volume value.</td>
		</tr>
		<tr>
			<td class="ent_list_name">WEAPON_PROFICIENCY_INVALID</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">-1</td>
			<td class="ent_list_summary">Invalid weapon proficiency.</td>
		</tr>
		<tr>
			<td class="ent_list_name">WEAPON_PROFICIENCY_POOR</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">Poor weapon proficiency. Causes low accuracy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">WEAPON_PROFICIENCY_AVERAGE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Average weapon proficiency. Causes average accuracy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">WEAPON_PROFICIENCY_GOOD</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Good weapon proficiency. Causes good accuracy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">WEAPON_PROFICIENCY_VERY_GOOD</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary">Very good weapon proficiency. Causes very good accuracy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">WEAPON_PROFICIENCY_PERFECT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Perfect weapon proficiency. Causes perfect accuracy.</td>
		</tr>
		<tr>
			<td class="ent_list_name">WEPCLASS_INVALID</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">Invalid weapon class.</td>
		</tr>
		<tr>
			<td class="ent_list_name">WEPCLASS_HANDGUN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Weapon class for pistols, revolvers, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">WEPCLASS_RIFLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Weapon class for (assault) rifles, SMGs, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">WEPCLASS_SHOTGUN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary">Weapon class for shotguns.</td>
		</tr>
		<tr>
			<td class="ent_list_name">WEPCLASS_HEAVY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Weapon class for RPGs, etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">WEPCLASS_MELEE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">5</td>
			<td class="ent_list_summary">Weapon class for melee weapons.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_SIMPLE_RADIUS_DAMAGE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">-2147483648</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_MOVE_GROUND</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_MOVE_JUMP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_MOVE_FLY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_MOVE_CLIMB</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_MOVE_SWIM</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_MOVE_CRAWL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_MOVE_SHOOT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">64</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_SKIP_NAV_GROUND_CHECK</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">128</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_USE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">256</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_AUTO_DOORS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1024</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_OPEN_DOORS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2048</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_DOORS_GROUP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3072</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_TURN_HEAD</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4096</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_WEAPON_RANGE_ATTACK1</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8192</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_WEAPON_RANGE_ATTACK2</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16384</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_RANGE_ATTACK_GROUP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">24576</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_WEAPON_MELEE_ATTACK1</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32768</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_WEAPON_MELEE_ATTACK2</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">65536</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_MELEE_ATTACK_GROUP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">98304</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_INNATE_RANGE_ATTACK1</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">131072</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_INNATE_RANGE_ATTACK2</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">262144</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_INNATE_MELEE_ATTACK1</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">524288</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_INNATE_MELEE_ATTACK2</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1048576</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_USE_WEAPONS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2097152</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_ANIMATEDFACE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8388608</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_USE_SHOT_REGULATOR</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16777216</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_FRIENDLY_DMG_IMMUNE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">33554432</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_SQUAD</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">67108864</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_DUCK</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">134217728</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_NO_HIT_PLAYER</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">268435456</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_AIM_GUN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">536870912</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">bits_CAP_NO_HIT_SQUADMATES</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1073741824</td>
			<td class="ent_list_summary">NPC/player/weapon capability used in GetCapabilities(), etc.</td>
		</tr>
		<tr>
			<td class="ent_list_name">g_interactionHitByPlayerThrownPhysObj</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">An interaction which could be used with HandleInteraction or DispatchInteraction. NOTE: These are usually only initialized by certain types of NPCs when an instance of one spawns in the level for the first time!!! (the fact you're seeing this one means there was an NPC in the level which initialized it)</td>
		</tr>
		<tr>
			<td class="ent_list_name">g_interactionPlayerPuntedHeavyObject</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">An interaction which could be used with HandleInteraction or DispatchInteraction. NOTE: These are usually only initialized by certain types of NPCs when an instance of one spawns in the level for the first time!!! (the fact you're seeing this one means there was an NPC in the level which initialized it)</td>
		</tr>
		<tr>
			<td class="ent_list_name">g_interactionTurretStillStanding</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary">An interaction which could be used with HandleInteraction or DispatchInteraction. NOTE: These are usually only initialized by certain types of NPCs when an instance of one spawns in the level for the first time!!! (the fact you're seeing this one means there was an NPC in the level which initialized it)</td>
		</tr>
		<tr>
			<td class="ent_list_name">g_interactionCombineBash</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">An interaction which could be used with HandleInteraction or DispatchInteraction. NOTE: These are usually only initialized by certain types of NPCs when an instance of one spawns in the level for the first time!!! (the fact you're seeing this one means there was an NPC in the level which initialized it)</td>
		</tr>
		<tr>
			<td class="ent_list_name">g_interactionMetrocopStartedStitch</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">5</td>
			<td class="ent_list_summary">An interaction which could be used with HandleInteraction or DispatchInteraction. NOTE: These are usually only initialized by certain types of NPCs when an instance of one spawns in the level for the first time!!! (the fact you're seeing this one means there was an NPC in the level which initialized it)</td>
		</tr>
		<tr>
			<td class="ent_list_name">g_interactionMetrocopIdleChatter</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">6</td>
			<td class="ent_list_summary">An interaction which could be used with HandleInteraction or DispatchInteraction. NOTE: These are usually only initialized by certain types of NPCs when an instance of one spawns in the level for the first time!!! (the fact you're seeing this one means there was an NPC in the level which initialized it)</td>
		</tr>
		<tr>
			<td class="ent_list_name">g_interactionMetrocopClearSentenceQueues</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">7</td>
			<td class="ent_list_summary">An interaction which could be used with HandleInteraction or DispatchInteraction. NOTE: These are usually only initialized by certain types of NPCs when an instance of one spawns in the level for the first time!!! (the fact you're seeing this one means there was an NPC in the level which initialized it)</td>
		</tr>
		<tr>
			<td class="ent_list_name">g_interactionZombieMeleeWarning</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">An interaction which could be used with HandleInteraction or DispatchInteraction. NOTE: These are usually only initialized by certain types of NPCs when an instance of one spawns in the level for the first time!!! (the fact you're seeing this one means there was an NPC in the level which initialized it)</td>
		</tr>
		<tr>
			<td class="ent_list_name">g_interactionPlayerLaunchedRPG</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">9</td>
			<td class="ent_list_summary">An interaction which could be used with HandleInteraction or DispatchInteraction. NOTE: These are usually only initialized by certain types of NPCs when an instance of one spawns in the level for the first time!!! (the fact you're seeing this one means there was an NPC in the level which initialized it)</td>
		</tr>
	</tbody>
</table>

<h2>Enums</h2>
<h3 id="WeaponSound">WeaponSound</h3>
Weapon sounds.

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Instance</th>
			<th>Type</th>
			<th>Value</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">WeaponSound.EMPTY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound.SINGLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound.SINGLE_NPC</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound.WPN_DOUBLE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound.DOUBLE_NPC</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound.BURST</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">5</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound.RELOAD</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">6</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound.RELOAD_NPC</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">7</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound.MELEE_MISS</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound.MELEE_HIT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">9</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound.MELEE_HIT_WORLD</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">10</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound.SPECIAL1</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">11</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound.SPECIAL2</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">12</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound.SPECIAL3</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">13</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound.TAUNT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">14</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound.DEPLOY</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">15</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">WeaponSound.NUM_SHOOT_SOUND_TYPES</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary"></td>
		</tr>
	</tbody>
</table>

<h3 id="IN">IN</h3>
Button mask bindings

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Instance</th>
			<th>Type</th>
			<th>Value</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">IN.ATTACK</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Button for +attack</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.JUMP</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Button for +jump</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.DUCK</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary">Button for +duck</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.FORWARD</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary">Button for +forward</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.BACK</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16</td>
			<td class="ent_list_summary">Button for +back</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.USE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32</td>
			<td class="ent_list_summary">Button for +use</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.CANCEL</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">64</td>
			<td class="ent_list_summary">Special button flag for attack cancel</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.LEFT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">128</td>
			<td class="ent_list_summary">Button for +left</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.RIGHT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">256</td>
			<td class="ent_list_summary">Button for +right</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.MOVELEFT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">512</td>
			<td class="ent_list_summary">Button for +moveleft</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.MOVERIGHT</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1024</td>
			<td class="ent_list_summary">Button for +moveright</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.ATTACK2</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2048</td>
			<td class="ent_list_summary">Button for +attack2</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.RUN</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4096</td>
			<td class="ent_list_summary">Unused button (see IN.SPEED for sprint)</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.RELOAD</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8192</td>
			<td class="ent_list_summary">Button for +reload</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.ALT1</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16384</td>
			<td class="ent_list_summary">Button for +alt1</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.ALT2</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">32768</td>
			<td class="ent_list_summary">Button for +alt2</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.SCORE</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">65536</td>
			<td class="ent_list_summary">Button for +score</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.SPEED</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">131072</td>
			<td class="ent_list_summary">Button for +speed</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.WALK</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">262144</td>
			<td class="ent_list_summary">Button for +walk</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.ZOOM</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">524288</td>
			<td class="ent_list_summary">Button for +zoom</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.WEAPON1</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1048576</td>
			<td class="ent_list_summary">Special button used by weapons themselves</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.WEAPON2</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2097152</td>
			<td class="ent_list_summary">Special button used by weapons themselves</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.BULLRUSH</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4194304</td>
			<td class="ent_list_summary">Unused button</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.GRENADE1</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8388608</td>
			<td class="ent_list_summary">Button for +grenade1</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.GRENADE2</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">16777216</td>
			<td class="ent_list_summary">Button for +grenade2</td>
		</tr>
		<tr>
			<td class="ent_list_name">IN.ATTACK3</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">33554432</td>
			<td class="ent_list_summary">Button for +attack3</td>
		</tr>
	</tbody>
</table>

<h3 id="Hitgroup">Hitgroup</h3>
Hit groups from traces

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Instance</th>
			<th>Type</th>
			<th>Value</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">Hitgroup.Generic</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Hitgroup.Head</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Hitgroup.Chest</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Hitgroup.Stomach</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Hitgroup.LeftArm</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Hitgroup.RightArm</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">5</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Hitgroup.LeftLeg</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">6</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Hitgroup.RightLeg</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">7</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">Hitgroup.Gear</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">10</td>
			<td class="ent_list_summary"></td>
		</tr>
	</tbody>
</table>

<h3 id="RenderMode">RenderMode</h3>
Render modes used by Get/SetRenderMode

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Instance</th>
			<th>Type</th>
			<th>Value</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">RenderMode.Normal</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">RenderMode.Color</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">RenderMode.Texture</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">RenderMode.Glow</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">RenderMode.Solid</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">4</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">RenderMode.Additive</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">5</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">RenderMode.Environmental</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">6</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">RenderMode.AdditiveFractionalFrame</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">7</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">RenderMode.AlphaAdd</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">8</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">RenderMode.WorldSpaceGlow</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">9</td>
			<td class="ent_list_summary"></td>
		</tr>
		<tr>
			<td class="ent_list_name">RenderMode.None</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">10</td>
			<td class="ent_list_summary"></td>
		</tr>
	</tbody>
</table>

<h3 id="MapLoad">MapLoad</h3>
Map load enum for GetLoadType()

<table class="scriptlist-table">
	<thead>
		<tr style="text-align: center;">
			<th>Instance</th>
			<th>Type</th>
			<th>Value</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_name">MapLoad.NewGame</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">0</td>
			<td class="ent_list_summary">Map was loaded from a new game</td>
		</tr>
		<tr>
			<td class="ent_list_name">MapLoad.LoadGame</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">1</td>
			<td class="ent_list_summary">Map was loaded from a save file</td>
		</tr>
		<tr>
			<td class="ent_list_name">MapLoad.Transition</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">2</td>
			<td class="ent_list_summary">Map was loaded from a level transition</td>
		</tr>
		<tr>
			<td class="ent_list_name">MapLoad.Background</td>
			<td class="ent_list_name">int</td>
			<td class="ent_list_name">3</td>
			<td class="ent_list_summary">Map was loaded as a background map</td>
		</tr>
	</tbody>
</table>
