---
layout: article
title: Entity List
permalink: /docs/ents/
breadcrumb: true
wide: true
---

The following list contains every entity that can be placed in Hammer when using Mapbase, including both new and pre-existing entities. Each entity's status indicates how Mapbase has affected it compared to default Source 2013. Note that this generally does not count base I/O/KV changes that apply to several unrelated entities.

The dropdown menus below can be used filter entities by game or by how Mapbase affects them. Click on the top of the Classname or Status columns to sort the table.

{% include note.html	txt="Specifying a game to filter by will exclude entities available in other games, even if they are otherwise relevant." %}

<hr style="margin-bottom:8px;"/>

<table style="max-width:75%;margin-left:auto;margin-right:auto;">
	<thead>
		<tr style="text-align: center;">
			<th>Status</th>
			<th>Meaning</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_status ent_list_status-Stock">Stock</td>
			<td>This entity has not been changed.</td>
		</tr>
		<tr>
			<td class="ent_list_status ent_list_status-Changed">Changed</td>
			<td>This entity has been changed by Mapbase.</td>
		</tr>
		<!--<tr>
			<td class="ent_list_status ent_list_status-Obsolete">Obsolete</td>
			<td>This entity has been partially or fully obsoleted by Mapbase.</td>
		</tr>-->
		<tr>
			<td class="ent_list_status ent_list_status-Affected">Affected</td>
			<td>This entity has not been changed directly, but it has been affected by Mapbase in some other way. </td>
		</tr>
		<tr>
			<td class="ent_list_status ent_list_status-New">New</td>
			<td>This entity was added to Mapbase and did not exist before.</td>
		</tr>
		<tr>
			<td class="ent_list_status ent_list_status-Ported">Ported</td>
			<td>This entity was ported or partially ported to Mapbase from another game or mod.</td>
		</tr>
		<tr>
			<td class="ent_list_status ent_list_status-Replicated">Replicated</td>
			<td>This entity is based on an entity from another game or mod, but it is not a direct port.</td>
		</tr>
		<tr>
			<td class="ent_list_status ent_list_status-Restored">Restored</td>
			<td>This entity already existed, but it was not accessible to mappers before Mapbase due to lack of FGD definition, available I/O/KV, etc.</td>
		</tr>
	</tbody>
</table>

<div class="table-filters">
	<label class="table-filter-dropdown" for="entlist_filter_game">Game</label>
	<select class="table-filter-dropdown" name="entlist_filter_game" id="entlist_filter_game" oninput="FilterTable()">
	  <option value="any">Any</option>
	  <option value="">None (base only)</option>
	  <option value="hl2">Half-Life 2</option>
	  <option value="tf2">Team Fortress 2</option>
	</select>
	<span style="color:rgba(255,255,255,0.5);padding:4px;">|</span>
	<label class="table-filter-dropdown" for="entlist_filter_status">Status</label>
	<select class="table-filter-dropdown" name="entlist_filter_status" id="entlist_filter_status" oninput="FilterTable()">
	  <option value="any">Any</option>
	  <option value="Stock">Stock</option>
	  <option value="Changed">Changed</option>
	  <option value="Affected">Affected</option>
	  <option value="New">New</option>
	  <option value="Ported">Ported</option>
	  <option value="Replicated">Replicated</option>
	  <option value="Restored">Restored</option>
	</select>
</div>

<table id="entlist">
	<thead>
		<tr style="text-align: center;">
			<th style="cursor: pointer;" onclick="SortTableClassname()">Classname</th>
			<th style="cursor: pointer;" onclick="SortTableStatus()">Status</th>
			<th>Summary</th>
		</tr>
	</thead>
	<tbody id="entlist_body">
	{% include ent_list_row.html	name="ai_ally_manager"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="ai_battle_line"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="ai_changehintgroup"		status="Changed"	summary="New keyvalue to change the hintgroup on hints as well, although it's been deprecated by the <code>SetHintGroup</code> input and entity finder entities." %}
	{% include ent_list_row.html	name="ai_changetarget"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="ai_citizen_response_system"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="ai_goal_actbusy"		status="Changed"	summary="<code>ForceThisNPCToStopBusy</code> and <code>OnNPCStartedLeavingBusy</code>, casual actbusy, etc. (todo: Expand upon \"etc.\")" %}
	{% include ent_list_row.html	name="ai_goal_actbusy_queue"		status="Affected"	summary="This derives from <code>ai_goal_actbusy</code> and receives the same improvements." %}
	{% include ent_list_row.html	name="ai_goal_assault"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="ai_goal_fear"		status="New"	summary="Allows mappers to control the fear behavior allies formerly only used automatically against hunters." %}
	{% include ent_list_row.html	name="ai_goal_follow"		status="Changed"	summary="Wait points have been improved and unmarked formations have been added to the editor, but follow behavior itself hasn't changed much." %}
	{% include ent_list_row.html	name="ai_goal_injured_follow"		status="Affected"	summary="This derives from <code>ai_goal_follow</code> and receives the same improvements." %}
	{% include ent_list_row.html	name="ai_goal_lead"		status="Stock"	summary="It has angles in Hammer now, but other than that it just has indirect changes from <code>ai_goal_lead_weapon</code>." %}
	{% include ent_list_row.html	name="ai_goal_lead_weapon"		status="Stock"	summary="Timeout time can be specified, <code>weapon_bugbait</code> is no longer hardcoded, etc. (todo: Expand upon \"etc.\")" %}
	{% include ent_list_row.html	name="ai_goal_operator"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="ai_goal_police"		status="Affected"	summary="Some <code>npc_metropolice</code> changes are related to police goals, but nothing has been changed in the behavior itself." %}
	{% include ent_list_row.html	name="ai_goal_standoff"		status="Changed"	summary="Custom standoff parameters are now in the FGD and medium cover hints are now fully implemented as potential cover." %}
	{% include ent_list_row.html	name="ai_npc_eventresponsesystem"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="ai_relationship"		status="Changed"	summary="\"Classify\" classes (e.g. <code>CLASS_PLAYER_ALLY</code>) can now be used. See the new <code>ai_relationship_classify</code> for changing default relationships." %}
	{% include ent_list_row.html	name="ai_relationship_classify"		status="New"	summary="A special version of <code>ai_relationship</code> that modifies relationship classes directly within in the gamerules, allowing mappers to change the game's \"true\" default relationships for their map. This also allows <code>ai_relationship</code> to be used on top of a global relationship modification. For example, let's say you want all <code>npc_metropolice</code> (<code>CLASS_METROPOLICE</code>) to be hostile to <code>npc_combine_s</code> (<code>CLASS_COMBINE</code>) *except* for a few <code>npc_metropolice</code> that don't attack soldiers for environmental or balance reasons. This entity allows you to have that kind of relationship setup." %}
	{% include ent_list_row.html	name="ai_script_conditions"		status="Changed"	summary="<code>SatisfyConditions</code> input, NPC state can be set to \"Don't care\"" %}
	{% include ent_list_row.html	name="ai_sound"		status="Changed"	summary="Unmarked sound types and contexts have been added to the editor, a sound \"owner\" can now be specified" %}
	{% include ent_list_row.html	name="ai_speechfilter"		status="Stock"	summary="" %}
	<!--{% include ent_list_row.html	name="ai_weaponmodifier"		status="New"	summary="Modifies a NPC's shot regulator to change burst-related stuff. (bug: hidetested=1: Possibly non-functional.)" %}-->
	{% include ent_list_row.html	name="aiscripted_schedule"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="ambient_generic"		status="Changed"	summary="<code>SetSound</code>, sound flags keyvalue with \"Pause sound with game pause\" option, <code>!activator</code> support, <code>OnSoundFinished</code>" %}
	{% include ent_list_row.html	name="assault_assaultpoint"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="assault_rallypoint"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="color_correction"		status="Changed"	summary="Exclusivity, clientside simulation, etc. ported from the Alien Swarm SDK." %}
	{% include ent_list_row.html	name="color_correction_volume"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="combine_mine"		status="Changed"	summary="Added friend/foe override filters, fixed default enemy registering, added several new I/O/KV including the ability to start friendly, etc. Also actually acts like a point entity in Hammer." %}
	{% include ent_list_row.html	name="concussiveblast"		status="Restored"	summary="This entity is used for the striders' warp cannon and was used for the cut Combine Guard's weapon, but Mapbase gives it a bunch of I/O/KV and puts it in the FGD." %}
	{% include ent_list_row.html	name="cycler"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="cycler_actor"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_alyxemp"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_ar2explosion"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_beam"		status="Changed"	summary="Some fixes, <code>Amplitude</code> input, ability to set start/end entity, etc." %}
	{% include ent_list_row.html	name="env_beverage"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_blood"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_break_shooter"		status="New"	summary="Shoots gibs otherwise associated with <code>func_breakable</code>." %}
	{% include ent_list_row.html	name="env_bubbles"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_citadel_energy_core"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="env_closecaption"		status="New"	summary="Emits captions/subtitles manually without requiring an accompanying sound." %}
	{% include ent_list_row.html	name="env_credits"		status="Changed"	summary="The ability to use custom credits files, separate credits into columns, show images, and set the number of lingering ending lines have been added." %}
	{% include ent_list_row.html	name="env_cubemap"		status="Changed"	summary="[[Parallax Corrected Cubemaps]] are now supported. Also see [[Mapbase/Docs/Autocubemap: Autocubemap]]." %}
	{% include ent_list_row.html	name="env_dof_controller"		status="Ported"	summary="An entity ported from the Alien Swarm SDK which allows for a complex depth-of-field effect." %}
	{% include ent_list_row.html	name="env_dustpuff"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_effectscript"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_embers"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_entity_dissolver"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_entity_igniter"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_entity_maker"		status="Changed"	summary="<code>OutSpawnedEntity</code> and <code>ForceSpawnAtEntityOrigin/Center</code> have been added." %}
	{% include ent_list_row.html	name="env_explosion"		status="Changed"	summary="<code>SetIgnoredEntity</code> has been added." %}
	{% include ent_list_row.html	name="env_fade"		status="Changed"	summary="Added \"Don't purge\" spawnflag, which stops an <code>env_fade</code> from overwriting all other fades." %}
	{% include ent_list_row.html	name="env_fire"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_firesensor"		status="Changed"	summary="New spawnflag for accepting flares. Flares will give off dynamic heat based off of their lifetime." %}
	{% include ent_list_row.html	name="env_firesource"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_flare"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_fog_controller"		status="Changed"	summary="Starts with fog enabled. (todo: \"Also see Radial Fog\" with link to graphical changes)" %}
	{% include ent_list_row.html	name="env_funnel"		status="Changed"	summary="<code>Activate</code> input, \"Don't remove on fire\" flag, missing sprite added to mod files." %}
	{% include ent_list_row.html	name="env_global"		status="Changed"	summary="<code>Counter</code> output replaced with <code>OutCounter</code> in an attempt to dodge the aliasing issue. New global states have also been added, but they're unrelated to env_global itself. (todo: Document them)" %}
	{% include ent_list_row.html	name="env_global_light"		status="Ported"	summary="An orthographic projected texture entity ported from the Alien Swarm SDK. It's received a few changes in Mapbase, like zero default offset with keyvalues for mappers change it themselves." %}
	{% include ent_list_row.html	name="env_gunfire"		status="Changed"	summary="Ability to choose any sound in the sound browser, <code>FireBurst</code> for firing bursts manually, <code>OnFire</code> for each bullet." %}
	{% include ent_list_row.html	name="env_headcrabcanister"		status="Changed"	summary="<code>StopHissing</code> to stop post-impact hissing, <code>OnCrab</code> for each crab that emerges from the canister, and ability to use random spawn type"	game="hl2" %}
	{% include ent_list_row.html	name="env_hudhint"		status="Changed"	summary="Button combinations, raw strings, etc. as well as <code>SetHudHint</code>. (todo: Expand upon \"etc.\")" %}
	{% include ent_list_row.html	name="env_instructor_hint"		status="Ported"	summary="Mapper-placed hint for the game instructor." %}
	{% include ent_list_row.html	name="env_laser"		status="Changed"	summary="<code>OnTouchedByEntity</code> added, based on the output from <code>env_beam</code>. It fires per frame though, so be careful." %}
	{% include ent_list_row.html	name="env_lightglow"		status="Changed"	summary="Added <code>Enable/Disable</code> inputs and the ability to start disabled. Fade distances in Hammer also now have spheres." %}
	{% include ent_list_row.html	name="env_message"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_microphone"		status="Changed"	summary="Added unmarked DSP presets, SetDSPPreset, channel selection, volume/pitch scale, and a local landmark keyvalue similar to trigger_teleport." %}
	{% include ent_list_row.html	name="env_muzzleflash"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_particle_performance_monitor"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_particlelight"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_particlescript"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_physexplosion"		status="Changed"	summary="<code>ExplodeAndRemove</code>, negative magnitude for pulling things in" %}
	{% include ent_list_row.html	name="env_physimpact"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_player_surface_trigger"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_projectedtexture"		status="Changed"	summary="Uses improvements from the VDC, the Alien Swarm SDK, and a few open-source mods. (todo: Dedicated article)" %}
	{% include ent_list_row.html	name="env_rotorshooter"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_rotorwash"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_rotorwash_emitter"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_screeneffect"		status="Changed"	summary="Added primitive new chromatic abberration effects." %}
	{% include ent_list_row.html	name="env_shake"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_shooter"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_smokestack"		status="Changed"	summary="Now properly derives from Targetname in Hammer, meaning it is no longer missing user I/O, etc." %}
	{% include ent_list_row.html	name="env_smoketrail"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_soundscape"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_soundscape_proxy"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_soundscape_triggerable"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_spark"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_speaker"		status="Changed"	summary="Now supports a \"target\" to use for selected responses (<code>!target1</code> scene actor, sound origin, etc.) and also has a new <code>OnSpeak</code> output" %}
	{% include ent_list_row.html	name="env_splash"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_sporeexplosion"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_sprite"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_sprite_oriented"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_spritetrail"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_starfield"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_steam"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_sun"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_terrainmorph"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_texturetoggle"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_tonemap_controller"		status="Changed"	summary="Keyvalues added for every setting that would otherwise be set via input. Also added <code>UseDefaultBloomScale</code> and <code>SetBloomScaleRange</code> to Hammer and fixed <code>SetBloomScaleRange</code> only accepting single floats." %}
	{% include ent_list_row.html	name="env_viewpunch"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="env_wind"		status="Changed"	summary="Added \"wind radius\", a feature from (l4d: 4) that allows for multiple <code>env_wind</code> entities in different areas. Also added inputs to change all wind parameters and a \"Tree sway scale\" for how much an <code>env_wind</code> entity should affect [[$treesway]] materials. Also added \"inner\" radius, which allows the <code>env_wind</code>'s intensity to fade out in combination with regular wind radius." %}
	{% include ent_list_row.html	name="env_zoom"		status="Changed"	summary="Added <code>UnZoomWithRate</code> and <code>SetZoomRate</code> inputs for unzooming at the zoom rate and setting the zoom rate after spawning." %}
	{% include ent_list_row.html	name="filter_activator_class"		status="Affected"	summary="Uses all base filter changes, including <code>SetField</code> to change the primary \"field\" of most filters (e.g. the classname on <code>filter_activator_class</code>) and <code>TestEntity</code> to test a specific entity against the filter. See [Mapbase/Entities/Filters: the dedicated article] for more information." %}
	{% include ent_list_row.html	name="filter_activator_classify"		status="New"	summary="Filters an entity by its \"Classify\" class, e.g. <code>CLASS_PLAYER_ALLY</code>." %}
	{% include ent_list_row.html	name="filter_activator_context"		status="New"	summary="Filters an entity by its response contexts. There is a filter_activator_context available in (l4d: 4) and newer games, but this entity works differently and has new options/capabilities." %}
	{% include ent_list_row.html	name="filter_activator_hintgroup"		status="New"	summary="Filters an NPC by its hint group." %}
	{% include ent_list_row.html	name="filter_activator_involume"		status="New"	summary="Only passes entities within the specified volume, e.g. a trigger." %}
	{% include ent_list_row.html	name="filter_activator_keyfield"		status="New"	summary="Filters an entity by the value of the specified keyvalue, similar to (ent: logic_keyfield)." %}
	{% include ent_list_row.html	name="filter_activator_mass_greater"		status="Affected"	summary="Uses all base filter changes detailed in <code>filter_activator_class</code>." %}
	{% include ent_list_row.html	name="filter_activator_model"		status="Ported"	summary="Filters an entity by its model name." %}
	{% include ent_list_row.html	name="filter_activator_name"		status="Affected"	summary="Uses all base filter changes detailed in <code>filter_activator_class</code>." %}
	{% include ent_list_row.html	name="filter_activator_relationship"		status="New"	summary="Filters an entity by its relationship to the target entity." %}
	{% include ent_list_row.html	name="filter_activator_team"		status="Affected"	summary="Uses all base filter changes detailed in <code>filter_activator_class</code>." %}
	{% include ent_list_row.html	name="filter_activator_squad"		status="New"	summary="Filters an NPC by its squad name." %}
	{% include ent_list_row.html	name="filter_activator_surfacedata"		status="Affected"	summary="Filters an entity by its surface data." %}
	{% include ent_list_row.html	name="filter_base"		status="Restored"	summary="A base filter that always returns true." %}
	{% include ent_list_row.html	name="filter_blood_control"		status="New"	summary="Controls the filter owner's ability to produce blood from damage. This exists to take advantage of workarounds originally used for (ent: filter_damage_transfer). Can use a secondary filter to filter blood and/or actual damage." %}
	{% include ent_list_row.html	name="filter_combineball_type"		status="Affected"	summary="Uses all base filter changes detailed in <code>filter_activator_class</code>."	game="hl2" %}
	{% include ent_list_row.html	name="filter_damage_mod"		status="New"	summary="Modifies damage taken by the filter's owner. Can use a secondary filter for various purposes." %}
	{% include ent_list_row.html	name="filter_damage_transfer"		status="Affected"	summary="Transfers damage taken by the filter's owner to the specified entity. Can use a secondary filter for various purposes." %}
	{% include ent_list_row.html	name="filter_damage_type"		status="Changed"	summary="New option for setting how to compare the damage type (should contain one, all, etc.)." %}
	{% include ent_list_row.html	name="filter_enemy"		status="Affected"	summary="This derives from <code>ai_goal_actbusy</code> and receives the same improvements." %}
	{% include ent_list_row.html	name="filter_multi"		status="Affected"	summary="Uses all base filter changes detailed in <code>filter_activator_class</code>." %}
	{% include ent_list_row.html	name="filter_redirect_inflictor"		status="New"	summary="Redirects to a target filter with the damage inflictor as the activator instead of the attacker." %}
	{% include ent_list_row.html	name="filter_redirect_owner"		status="New"	summary="Redirects to a target filter with the activator's owner entity as the activator instead of the original activator." %}
	{% include ent_list_row.html	name="filter_script"		status="New"	summary="A filter which utilizes hooks in its [[Entity Scripts]]." %}
	{% include ent_list_row.html	name="fog_volume"		status="Ported"	summary="Trigger that changes the <code>env_fog_controller</code>, <code>color_correction</code>, and <code>postprocess_controller</code> of players that walk through it. Ported from the Alien Swarm SDK." %}
	{% include ent_list_row.html	name="func_areaportal"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_areaportal_oneway"		status="New"	summary="Variant of func_areaportal that only draws when viewed from one direction. Based on the code from [[CAreaPortalOneWay: this article]]." %}
	{% include ent_list_row.html	name="func_areaportalwindow"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_breakable"		status="Changed"	summary="" %}
	{% include ent_list_row.html	name="func_breakable_surf"		status="Changed"	summary="" %}
	{% include ent_list_row.html	name="func_brush"		status="Changed"	summary="" %}
	{% include ent_list_row.html	name="func_bulletshield"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_button"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_clip_client"		status="New"	summary="A special brush that only has a physics shadow on the client, allowing clientside ragdolls to collide with it." %}
	{% include ent_list_row.html	name="func_clip_vphysics"		status="Changed"	summary="Implemented the \"Start Disabled\" keyvalue and added a new <code>SetFilter</code> input." %}
	{% include ent_list_row.html	name="func_combine_ball_spawner"		status="Changed"	summary="New <code>Destroy</code> input that causes the balls to fly everywhere."	game="hl2" %}
	{% include ent_list_row.html	name="func_commandredirect"		status="New"	summary="Detects when the player commands their squad to move somewhere within the volume, with the ability to fire outputs, cancel the order, redirect the order, etc."	game="hl2" %}
	{% include ent_list_row.html	name="func_conveyor"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_detail"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_door"		status="Changed"	summary="No longer contains obsolete GoldSrc-era keyvalues. Touch Opens spawnflag now starts off." %}
	{% include ent_list_row.html	name="func_door_rotating"		status="Affected"	summary="Uses the same changes as <code>func_door</code>." %}
	{% include ent_list_row.html	name="func_dustcloud"		status="Changed"	summary="Radius now displays in Hammer." %}
	{% include ent_list_row.html	name="func_dustmotes"		status="Changed"	summary="Radius now displays in Hammer." %}
	{% include ent_list_row.html	name="func_fake_worldportal"		status="New"	summary="WIP entity inspired by Portal 2's world portals created by taking advantage of view rendering tricks without having to use any code from Portal itself." %}
	{% include ent_list_row.html	name="func_fish_pool"		status="Changed"	summary="Contains several new I/O/KV for controlling the fish." %}
	{% include ent_list_row.html	name="func_guntarget"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_healthcharger"		status="Changed"	summary="Has been given some of <code>item_healthcharger</code>'s I/O/KV, but not all of them."	game="hl2" %}
	{% include ent_list_row.html	name="func_illusionary"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_instance"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_instance_parms"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_ladder"		status="Restored"	summary="The original brush ladder from MP games like Counter-Strike: Source. Implemented based on the [[Brush ladders]] article." %}
	{% include ent_list_row.html	name="func_ladderendpoint"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_lod"		status="Changed"	summary="Added the ability to manually choose a maximum fade distance." %}
	{% include ent_list_row.html	name="func_lookdoor"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_monitor"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_movelinear"		status="Changed"	summary="Integrated [[CFuncMoveLinear ParentingFix]]." %}
	{% include ent_list_row.html	name="func_null"		status="New"	summary="Brush version of <code>info_null</code>. Functionally identical." %}
	{% include ent_list_row.html	name="func_occluder"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_physbox"		status="Changed"	summary="<code>SetDebris</code> input for toggling debris status." %}
	{% include ent_list_row.html	name="func_platrot"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_precipitation"		status="Changed"	summary="Backported particle types from (astools: 4)." %}
	{% include ent_list_row.html	name="func_recharge"		status="Changed"	summary="Has been given some of <code>item_suitcharger</code>'s I/O/KV, but not all of them."	game="hl2" %}
	{% include ent_list_row.html	name="func_reflective_glass"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_rot_button"		status="Changed"	summary="Fixed the \"Starts Locked\" spawnflag." %}
	{% include ent_list_row.html	name="func_rotating"		status="Changed"	summary="Applied normalizaton to angles and added keyvalues for controlling min/max sound pitch." %}
	{% include ent_list_row.html	name="func_smokevolume"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_tank"		status="Changed"	summary="Ported \"ammo type\", moved around a few things, added some NPC-related inputs, added a trace filter, etc. (todo: Expand upon \"etc.\")" %}
	{% include ent_list_row.html	name="func_tank_combine_cannon"		status="Changed"	summary="Added support for the player to control directly."	game="hl2ep2" %}
	{% include ent_list_row.html	name="func_tankairboatgun"		status="Changed"	summary="Fixed NPC control, added heavy shot options, deprecated the \"Airboat gun model\" keyvalue for parenting." %}
	{% include ent_list_row.html	name="func_tankapcrocket"		status="Affected"	summary="Uses the same changes as <code>func_tank</code>." %}
	{% include ent_list_row.html	name="func_tanklaser"		status="Affected"	summary="Uses the same changes as <code>func_tank</code>." %}
	{% include ent_list_row.html	name="func_tanklogic"		status="New"	summary="A special kind of <code>func_tank</code> that fires outputs instead of bullets. Outputs are based on a trace that simulates a bullet trace. They pass the position where the bullet would hit, the first entity it would hit, the barrel position, etc. allowing you to effectively create your own func_tank. It can also be controlled by NPCs." %}
	{% include ent_list_row.html	name="func_tankmortar"		status="Changed"	summary="Shell radius and trace control." %}
	{% include ent_list_row.html	name="func_tankphyscannister"		status="Affected"	summary="Uses the same changes as <code>func_tank</code>." %}
	{% include ent_list_row.html	name="func_tankpulselaser"		status="Affected"	summary="Uses the same changes as <code>func_tank</code>." %}
	{% include ent_list_row.html	name="func_tankrocket"		status="Changed"	summary="Rockets now properly credit the turret's controller." %}
	{% include ent_list_row.html	name="func_tanktrain"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_trackautochange"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_trackchange"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_tracktrain"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_traincontrols"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_useableladder"		status="Changed"	summary="New <code>CheckPlayerOn</code> input for getting a player onto a ladder if possible, <code>ForcePlayerOn</code> for forcing a player onto a ladder no matter what. Also stopped ladder entities from always drawing debug information when loading a level with (ent: developer) set to a value greater than 1." %}
	{% include ent_list_row.html	name="func_vehicleclip"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_viscluster"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_wall"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_wall_toggle"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="func_water_analog"		status="Affected"	summary="Uses the same changes as <code>func_movelinear</code>." %}
	{% include ent_list_row.html	name="game_convar_mod"		status="New"	summary="Part of the convar modification system that allows maps to change cvars in a safe and controlled way, saving them so they could be loaded later and reverting them on level unload." %}
	{% include ent_list_row.html	name="game_end"		status="Changed"	summary="New <code>EndGameSP</code> input that functions as a shortcut for \"startupmenu force\". This could be changed by certain mods (e.g. mapping competitions) for firing \"map finished\" events." %}
	{% include ent_list_row.html	name="game_globalvars"		status="New"	summary="Reads certain global variables, like curtime." %}
	{% include ent_list_row.html	name="game_menu"		status="New"	summary="Displays a selectable number menu on the HUD." %}
	{% include ent_list_row.html	name="game_metadata"		status="New"	summary="Stores map details for things like the Discord RPC, allowing mappers to control game details shown on Discord while they're playing their map." %}
	{% include ent_list_row.html	name="game_player_equip"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="game_player_team"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="game_ragdoll_manager"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="game_score"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="game_text"		status="Changed"	summary="Added <code>SetText</code> from Alien Swarm and newline support with <code>/n</code> (mind the forward slash). Also added auto-break keyvalue." %}
	{% include ent_list_row.html	name="game_timer"		status="New"	summary="Displays a custom timer on the HUD." %}
	{% include ent_list_row.html	name="game_ui"		status="Stock"	summary="Added outputs for several binds, also added <code>OutButtons</code> for use with <code>math_bits</code>." %}
	{% include ent_list_row.html	name="game_weapon_manager"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="game_zone_player"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="generic_actor"		status="Changed"	summary="Keyvalue for setting NPC class and ability to use squads." %}
	{% include ent_list_row.html	name="gibshooter"		status="Changed"	summary="Ragdolls are now properly ignited when set to spawn on fire." %}
	{% include ent_list_row.html	name="grenade_helicopter"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="hammer_updateignorelist"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="hl2_gamerules"		status="New"	summary="Controls new game-specific HL2 options, like HL2/EP1 vs. EP2 flashlight or default citizen type."	game="hl2" %}
	{% include ent_list_row.html	name="info_apc_missile_hint"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="info_camera_link"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_constraint_anchor"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_darknessmode_lightsource"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="info_hint"		status="Changed"	summary="New hint radius/weight keyvalues, new <code>SetHintGroup</code> input, and new <code>OnScriptEvent</code> outputs. Node FOV now shows up in Hammer as a frustum. Hintgroup is also listed in <code>ent_text</code>." %}
	{% include ent_list_row.html	name="info_intermission"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_ladder_dismount"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_landmark"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_lighting"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_mass_center"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_no_dynamic_shadow"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_node"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_node_air"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_node_air_hint"		status="Affected"	summary="Uses <code>info_hint</code> and <code>info_node_hint</code> changes." %}
	{% include ent_list_row.html	name="info_node_climb"		status="Changed"	summary="Added ability to override lineup linkage via target node keyvalue." %}
	{% include ent_list_row.html	name="info_node_hint"		status="Changed"	summary="Various hint types correctly use hint options, also affected by <code>info_hint</code> changes." %}
	{% include ent_list_row.html	name="info_node_link"		status="Changed"	summary="There are several new derivatives available, but the entity itself hasn't really changed aside from a new icon in Hammer. " %}
	{% include ent_list_row.html	name="info_node_link_controller"		status="Stock"	summary="Hasn't really changed, but there's an <code>info_template_link_controller</code> for link derivatives now." %}
	{% include ent_list_row.html	name="info_node_link_filtered"		status="New"	summary="A derivative of <code>info_node_link</code> that only allows NPCs that pass its filter. " %}
	{% include ent_list_row.html	name="info_node_link_logic"		status="New"	summary="A derivative of <code>info_node_link</code> that passes outputs when a NPC tries to use it. Actual passage permission can still be toggled. " %}
	{% include ent_list_row.html	name="info_node_link_oneway"		status="New"	summary="A derivative of <code>info_node_link</code> that only allows NPCs to use it in one direction. " %}
	{% include ent_list_row.html	name="info_npc_spawn_destination"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_null"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_overlay"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_overlay_transition"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_particle_system"		status="Changed"	summary="New <code>DestroyImmediately</code> input inspired by the Portal 2 input of the same name." %}
	{% include ent_list_row.html	name="info_particle_system_coordinate"		status="New"	summary="Variant of <code>info_particle_system</code> that uses explicit coordinates for its control points instead of entities." %}
	{% include ent_list_row.html	name="info_player_start"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_player_view_proxy"		status="New"	summary="Copies a player's view as if they're at a different position. Created for <code>script_intro</code> sequences. Not be confused with (ent: point_viewproxy), a Portal 2 entity. " %}
	{% include ent_list_row.html	name="info_projecteddecal"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_radar_target"		status="Changed"	summary="White Forest battle enemy targets added to FGD."	game="hl2" %}
	{% include ent_list_row.html	name="info_radial_link_controller"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_snipertarget"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_target"		status="Changed"	summary="Added \"Always transmit to client\" spawnflag from Alien Swarm SDK" %}
	{% include ent_list_row.html	name="info_target_gunshipcrash"		status="Stock"	summary="Changed <code>OnCrashed</code> activator to crashing gunship and added new <code>OnBeginCrash</code> output."	game="hl2" %}
	{% include ent_list_row.html	name="info_target_helicopter_crash"		status="Changed"	summary="Added ability to disable + <code>OnCrashed</code> and <code>OnBeginCrash</code> outputs."	game="hl2" %}
	{% include ent_list_row.html	name="info_target_vehicle_transition"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_teleport_destination"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_teleporter_countdown"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="info_template_link_controller"		status="New"	summary="A version of <code>info_node_link_controller</code> that uses a <code>point_template</code> with an <code>info_node_link</code> in it. This allows you to use <code>info_node_link_controller</code> with the new <code>info_node_link</code> derivaties. " %}
	{% include ent_list_row.html	name="infodecal"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="item_ammo_357"		status="Affected"	summary="Uses by all ammo item changes."	game="hl2" %}
	{% include ent_list_row.html	name="item_ammo_357_large"		status="Changed"	summary="No longer uses invalid model."	game="hl2" %}
	{% include ent_list_row.html	name="item_ammo_ar2"		status="Affected"	summary="Uses by all ammo item changes."	game="hl2" %}
	{% include ent_list_row.html	name="item_ammo_ar2_altfire"		status="Affected"	summary="Uses by all ammo item changes."	game="hl2" %}
	{% include ent_list_row.html	name="item_ammo_ar2_large"		status="Changed"	summary="No longer uses invalid model."	game="hl2" %}
	{% include ent_list_row.html	name="item_ammo_crate"		status="Changed"	summary="<code>OnAmmoTaken</code>, more ammo crate models, SLAM crate, parenting support"	game="hl2" %}
	{% include ent_list_row.html	name="item_ammo_crossbow"		status="Affected"	summary="Uses by all ammo item changes."	game="hl2" %}
	{% include ent_list_row.html	name="item_ammo_pistol"		status="Affected"	summary="Uses by all ammo item changes."	game="hl2" %}
	{% include ent_list_row.html	name="item_ammo_pistol_large"		status="Changed"	summary="No longer uses invalid model."	game="hl2" %}
	{% include ent_list_row.html	name="item_ammo_smg1"		status="Affected"	summary="Uses by all ammo item changes."	game="hl2" %}
	{% include ent_list_row.html	name="item_ammo_smg1_grenade"		status="Affected"	summary="Uses by all ammo item changes."	game="hl2" %}
	{% include ent_list_row.html	name="item_ammo_smg1_large"		status="Changed"	summary="No longer uses invalid model."	game="hl2" %}
	{% include ent_list_row.html	name="item_battery"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="item_battery_custom"		status="New"	summary="Variant of item_battery that allows armor amount, sound, and model to be chosen."	game="hl2" %}
	{% include ent_list_row.html	name="item_box_buckshot"		status="Affected"	summary="Uses by all ammo item changes."	game="hl2" %}
	{% include ent_list_row.html	name="item_dynamic_resupply"		status="Changed"	summary="<code>OnItem</code> for each item created, master resupply properly falls back to health vial when needed"	game="hl2" %}
	{% include ent_list_row.html	name="item_grubnugget"		status="Restored"	summary="Entity for the nuggets produced by <code>npc_antlion_grub</code>s with a selectable model/size/denomination."	game="hl2" %}
	{% include ent_list_row.html	name="item_healthcharger"		status="Changed"	summary="Various I/O/KV related to setting charge/juice"	game="hl2" %}
	{% include ent_list_row.html	name="item_healthkit"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="item_healthkit_custom"		status="New"	summary="Variant of item_healthkit that allows health amount, sound, and model to be chosen."	game="hl2" %}
	{% include ent_list_row.html	name="item_healthvial"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="item_item_crate"		status="Changed"	summary="<code>OnItem</code> for each item (including items created by <code>item_dynamic_resupply</code>), custom model support, <code>point_template</code> crate contents, support for single NPCs by not randomizing angles"	game="hl2" %}
	{% include ent_list_row.html	name="item_rpg_round"		status="Affected"	summary="Uses by all ammo item changes."	game="hl2" %}
	{% include ent_list_row.html	name="item_suit"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="item_suitcharger"		status="Changed"	summary="Various I/O/KV related to setting charge/juice"	game="hl2" %}
	{% include ent_list_row.html	name="keyframe_rope"		status="Changed"	summary="<code>OnBreak</code> output, <code>SetSlack</code>/<code>SetWidth</code>/<code>SetSubdivision</code> inputs, (ent: SplineRope) shader via <code>SDK_Cable</code>" %}
	{% include ent_list_row.html	name="keyframe_track"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="light"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="light_dynamic"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="light_environment"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="light_spot"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="logic_achievement"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="logic_active_autosave"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="logic_auto"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="logic_autosave"		status="Changed"	summary="New Hammer icon ported from Portal 2." %}
	{% include ent_list_row.html	name="logic_branch"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="logic_branch_listener"		status="Changed"	summary="Fix <code>logic_branch</code> not notifying branch listeners properly on removal" %}
	{% include ent_list_row.html	name="logic_case"		status="Changed"	summary="<code>OnUsed</code> for each time used by <code>InValue</code>, matcher system support with an option to allow multiple matching cases to be fired. You might also want to look into <code>logic_random_outputs</code>, a different entity ported from Alien Swarm SDK which can take percentages directly." %}
	{% include ent_list_row.html	name="logic_choreographed_scene"		status="Changed"	summary="<code>SetTarget#</code> for all targets, <code>Trigger</code> input added to FGD. Also a couple changes to the choreography system itself." %}
	{% include ent_list_row.html	name="logic_collision_pair"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="logic_compare"		status="Changed"	summary="Added <code>OnGreater</code>/<code>LessThanOrEqualTo</code>. Added support for many other data types, particularly strings. Also supports comparing the length of a string against a number, or each other." %}
	{% include ent_list_row.html	name="logic_console"		status="New"	summary="Allows mappers to send messages and warnings with the specified text to the console." %}
	{% include ent_list_row.html	name="logic_context_accessor"		status="New"	summary="Gets the value of the specified response context on a certain entity. Very useful for bringing out the potential of response contexts as data carriers." %}
	{% include ent_list_row.html	name="logic_convar"		status="New"	summary="Gets the value of the specified console variable/cvar. Useful for checking whether cheats or closed captioning are enabled." %}
	{% include ent_list_row.html	name="logic_datadesc_accessor"		status="New"	summary="Derived from logic_keyfield, this entity is completely identical except for the fact it uses internal variable names directly and is not limited to keyvalues. This means you could access values like <code>m_fFlags</code>, <code>m_flNextGrenadeTime</code>, or pretty much anything else in an entity's data description." %}
	{% include ent_list_row.html	name="logic_entity_position"		status="New"	summary="Gets and predicts an entity's position, outputting it through <code>OutPosition</code>." %}
	{% include ent_list_row.html	name="logic_eventlistener"		status="Replicated"	summary="Listens for game events and fires an output for them. This is an entity available in Portal 2 and newer, but it was replicated so it could be used in Mapbase. You might also be interested in <code>point_event</code>." %}
	{% include ent_list_row.html	name="logic_externaldata"		status="New"	summary="Saves and reads keyvalue data from <code>%mapname%_externaldata.txt</code>, intended to be used for data that should persist across playthroughs, save games, etc. similar to <code>gamestate.txt</code>." %}
	{% include ent_list_row.html	name="logic_format"		status="New"	summary="Formats text with C#/Python-based formatting, using <code>{0}</code>, <code>{1}</code>, etc. for each parameter. Useful for <code>AddOutput</code> and other inputs that use a special syntax. Also useful for information relayed to the player." %}
	{% include ent_list_row.html	name="logic_keyfield"		status="New"	summary="Reads the specified keyvalue on the target entity, outputting its value or comparing against it with the matcher system. This is useful for many different things, like getting an entity's health or a soldier's current number of grenades." %}
	{% include ent_list_row.html	name="logic_lineto"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="logic_measure_movement"		status="Changed"	summary="Several new I/O/KV, including the ability to output position & angles through I/O. Also includes attachment support." %}
	{% include ent_list_row.html	name="logic_measure_direction"		status="New"	summary="Uses traces to teleport an entity to where another entity is facing, kind of like a laser. Inherits all abilities and I/O/KV from <code>logic_measure_movement</code>." %}
	{% include ent_list_row.html	name="logic_mirror_movement"		status="Restored"	summary="Mirrors entity movement to another entity." %}
	{% include ent_list_row.html	name="logic_modelinfo"		status="New"	summary="Reads certain model-related information, like how many skins a model has or whether a model has a certain sequence/activity." %}
	{% include ent_list_row.html	name="logic_multicompare"		status="Changed"	summary="Added a bunch of new I/O/KV. Changes very similar to <code>logic_compare</code>." %}
	{% include ent_list_row.html	name="logic_navigation"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="logic_playerinfo"		status="New"	summary="Allows mappers to get a player's basic info, like their Steam name, or find a player by that info. Utilizes data already used throughout the engine." %}
	{% include ent_list_row.html	name="logic_playerproxy"		status="Changed"	summary="Several new I/O/KV for interacting with the player, including expanded flashlight control, the ability to change the player's armor value, and playermodel visibility options." %}
	{% include ent_list_row.html	name="logic_playmovie"		status="Ported"	summary="Plays a video from the <code>media</code> folder over the player's screen. Ported directly from Alien Swarm SDK." %}
	{% include ent_list_row.html	name="logic_random_outputs"		status="Ported"	summary="Fires outputs based on specified percentages. Ported directly from Alien Swarm SDK." %}
	{% include ent_list_row.html	name="logic_register_activator"		status="Replicated"	summary="Stores the specified entity and allows it to be accessed later. Based on the entity of the same name from Portal 2." %}
	{% include ent_list_row.html	name="logic_relay"		status="Changed"	summary="New <code>TriggerWithParameter</code>/<code>OnTriggerParameter</code> I/O for using parameters on the relay." %}
	{% include ent_list_row.html	name="logic_relay_queue"		status="New"	summary="Queues excess triggers instead of discarding them. This means when a <code>logic_relay_queue</code> is still firing its delayed outputs and it receives another trigger event, it queues it up so when its output events are over, it fires that queued trigger with its data intact." %}
	{% include ent_list_row.html	name="logic_scene_list_manager"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="logic_script"		status="Ported"	summary="An entity that acts as a container for VScripts. Ported from the Alien Swarm SDK. See [[Mapbase/Scripting]] for more information regarding VScript in Mapbase." %}
	{% include ent_list_row.html	name="logic_script_client"		status="New"	summary="A version of <code>logic_script</code> which runs scripts on clients." %}
	{% include ent_list_row.html	name="logic_sequence"		status="New"	summary="Coordinates a sequence of cases for things like keypad passwords. Convention is similar to <code>logic_case</code>." %}
	{% include ent_list_row.html	name="logic_skill"		status="New"	summary="Reads the game's current difficulty level and detects when it changes." %}
	{% include ent_list_row.html	name="logic_substring"		status="New"	summary="An entity that isolates a substring from a string parameter." %}
	{% include ent_list_row.html	name="logic_timer"		status="Changed"	summary="New keyvalue to use random interval bounds to limit <code>AddToTimer</code>/<code>SubtractToTimer</code> inputs." %}
	{% include ent_list_row.html	name="mapbase_manifest"		status="New"	summary="Allows mappers to load manifest files other than the default <code>%mapname%_manifest.txt</code> file. (bug: hidetested=1: No icon. Possibly non-functional.)" %}
	{% include ent_list_row.html	name="material_modify_control"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="math_bits"		status="New"	summary="Performs calculations involving bits and bit operations. Based on <code>math_counter</code>." %}
	{% include ent_list_row.html	name="math_clamp"		status="New"	summary="Clamps input values between the specified min/max, which can be integers, floats, or vectors." %}
	{% include ent_list_row.html	name="math_colorblend"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="math_counter"		status="Changed"	summary="<code>OnChangedFromMin</code>/<code>Max</code> and <code>SetMin</code>/<code>MaxValueNoFire</code> ported and replicated from later games respectively. Start value now properly reads floats. Also see <code>math_counter_advanced</code> for advanced capabilities." %}
	{% include ent_list_row.html	name="math_counter_advanced"		status="New"	summary="A special version of <code>math_counter</code> with advanced inputs, outputs, and keyvalues for advanced operations and specialized calculations." %}
	{% include ent_list_row.html	name="math_generate"		status="New"	summary="Generates numbers from a variety of algorithms, mostly taken from material proxies. (e.g. generating a sine wave)" %}
	{% include ent_list_row.html	name="math_lightpattern"		status="New"	summary="Replicates baked light patterns and fires outputs accordingly." %}
	{% include ent_list_row.html	name="math_mod"		status="New"	summary="Modifies and outputs input values with the specified value and operator. For example, it could be configured to add 2 to each value sent to this entity, outputting the result each time. This is to create I/O \"pipelines\" that demand instant operations limited by, say, using a math_counter with delays." %}
	{% include ent_list_row.html	name="math_remap"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="math_vector"		status="New"	summary="Allows for operations on vectors like <code>0 0 0</code> or <code>2509.677 384.001 204.5</code>. Convention is similar to <code>math_counter</code>." %}
	{% include ent_list_row.html	name="momentary_rot_button"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="monster_generic"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="move_keyframed"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="move_rope"		status="Changed"	summary="<code>OnBreak</code> output, <code>SetSlack</code>/<code>SetWidth</code>/<code>SetSubdivision</code> inputs, (ent: SplineRope) shader via <code>SDK_Cable</code>" %}
	{% include ent_list_row.html	name="move_track"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="npc_advisor"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_alyx"		status="Changed"	summary="Inherits all companion changes, see <code>npc_citizen</code>."	game="hl2" %}
	{% include ent_list_row.html	name="npc_antlion"		status="Changed"	summary="Dynamic interactions restored (set by mapper), new global state for disabling soldier insta-kill, attempted better bugbait support for workers, <code>SetFollowTarget </code>"	game="hl2" %}
	{% include ent_list_row.html	name="npc_antlion_grub"		status="Changed"	summary="Now allows a damage filter which can control whether this grub is allowed to be squashed."	game="hl2" %}
	{% include ent_list_row.html	name="npc_antlion_template_maker"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_antlionguard"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_apcdriver"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_barnacle"		status="Changed"	summary="Half-Life 2: Episode One inputs ported to base HL2 DLL."	game="hl2" %}
	{% include ent_list_row.html	name="npc_barney"		status="Changed"	summary="Custom model support added, affected by all companion changes detailed in <code>npc_citizen</code>."	game="hl2" %}
	{% include ent_list_row.html	name="npc_blob"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_breen"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_bullseye"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_citizen"		status="Changed"	summary="New spawnflag for Walk+USE to join squad, option to have medics throw healthkits, medic hostile player fix, rappelling support, new I/O/KV, and much more. Also inherits companion changes like the option to fire energy balls like elites do, usage of Alyx's dynamic melee interactions, flinching on damage, and the usage of expanded speech target capabilities."	game="hl2" %}
	{% include ent_list_row.html	name="npc_clawscanner"		status="Affected"	summary="Inherits all city scanner changes."	game="hl2" %}
	{% include ent_list_row.html	name="npc_combine_camera"		status="Changed"	summary="Proper support for <code>OnLostEnemy</code>/<code>Player</code>."	game="hl2" %}
	{% include ent_list_row.html	name="npc_combine_cannon"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_combine_s"		status="Changed"	summary="Now uses easy and unarmed animations, new grenade I/O/KV, response system support, new tactical variant, better alt-firing, and much more. Differing models also properly appear in Hammer."	game="hl2" %}
	{% include ent_list_row.html	name="npc_combinedropship"		status="Changed"	summary="Added a <code>DropCargo</code> input for dropping objects picked up by the <code>Pickup</code> input and an option to disable danger signals that normally disperse NPCs on the ground. Also added a keyvalue that allows any damage type to damage a dropship's container and another keyvalue to control the container's health. <code>DropStrider</code> input now plays the strider's drop sequence."	game="hl2" %}
	{% include ent_list_row.html	name="npc_combinegunship"		status="Changed"	summary="Restored the ability for gunships to use their ground attack automatically, now controlled by a keyvalue. Also added a keyvalue that allows any damage type to damage a gunship and another keyvalue to control the number of hits needed to take it down."	game="hl2" %}
	{% include ent_list_row.html	name="npc_crabsynth"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_cranedriver"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_crow"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_cscanner"		status="Changed"	summary="Added the ability to enable/disable photo-taking, causing a scanner to only follow its enemies."	game="hl2" %}
	{% include ent_list_row.html	name="npc_dog"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_eli"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_enemyfinder"		status="Changed"	summary="New keyvalue for specifying a NPC class to simulate. Min/max search distance now display spheres in Hammer." %}
	{% include ent_list_row.html	name="npc_enemyfinder_combinecannon"		status="Affected"	summary="Inherits all changes from <code>npc_enemyfinder</code>."	game="hl2" %}
	{% include ent_list_row.html	name="npc_fastzombie"		status="Changed"	summary="Hooked health and damage to convars, now follows base torso rules. Also carries base zombie changes detailed in <code>npc_zombie</code>."	game="hl2" %}
	{% include ent_list_row.html	name="npc_fastzombie_torso"		status="Affected"	summary="Inherits all changes from <code>npc_fastzombie</code>."	game="hl2" %}
	{% include ent_list_row.html	name="npc_fisherman"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_gman"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_grenade_frag"		status="Changed"	summary="Now allows specific damage, radius, etc. and outputs that pass position, all inherited from base grenade."	game="hl2" %}
	{% include ent_list_row.html	name="npc_headcrab"		status="Changed"	summary="<code>OnLeap</code> output that fires for each time the headcrab leaps and passes the headcrab's assumed leap target as the activator. Burrowing-related inputs are also now visible."	game="hl2" %}
	{% include ent_list_row.html	name="npc_headcrab_black"		status="Affected"	summary="Inherits all changes detailed in <code>npc_headcrab</code>."	game="hl2" %}
	{% include ent_list_row.html	name="npc_headcrab_fast"		status="Affected"	summary="Inherits all changes detailed in <code>npc_headcrab</code>."	game="hl2" %}
	{% include ent_list_row.html	name="npc_heli_avoidbox"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_heli_avoidsphere"		status="Changed"	summary="Now supports a filter keyvalue."	game="hl2" %}
	{% include ent_list_row.html	name="npc_helicopter"		status="Changed"	summary="New output <code>OutBomb</code> for each bomb dropped, Field of View keyvalue so you can control whether they can see you from every direction, custom model support. Also added a keyvalue that allows any damage type to damage a helicopter and another keyvalue to control the helicopter's health.			: "	game="hl2" %}
	{% include ent_list_row.html	name="npc_helicopter_custom"		status="New"	summary="Custom helicopter NPC that supports a custom model, custom sounds, custom flight parameters, etc.			: "	game="hl2" %}
	{% include ent_list_row.html	name="npc_hunter"		status="Changed"	summary="Hunters now die instantly to energy balls fired by NPCs in the same way they die from energy balls fired by players. Also has a new keyvalue to disable idle patrolling."	game="hl2" %}
	{% include ent_list_row.html	name="npc_hunter_maker"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_ichthyosaur"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_kleiner"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_launcher"		status="Changed"	summary="Cleaned up appearance/defaults in Hammer, added <code>OutMissile</code> output that fires for each missile, <code>npc_launcher</code>'s owner entity applies to each missile."	game="hl2" %}
	{% include ent_list_row.html	name="npc_magnusson"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_maker"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_manhack"		status="Changed"	summary="Added [Source 2013 GitHub pull request fix for npc_maker owner https://github.com/ValveSoftware/source-sdk-2013/pull/362], restored \"Hacked by Alyx\" state with a keyvalue for starting hacked and a convar for allowing Alyx to hack manhacks herself, added <code>Enable</code>/<code>DisableSprites</code> inputs. "	game="hl2" %}
	{% include ent_list_row.html	name="npc_metropolice"		status="Changed"	summary="Several new I/O/KV related to policing, added optional ability to throw grenades with I/O/KV from <code>npc_combine_s</code>, new manhack tossing I/O, holstered pistol animation fix, and more."	game="hl2" %}
	{% include ent_list_row.html	name="npc_missiledefense"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_monk"		status="Changed"	summary="Father Grigori uses his own versions of the companion interactions that blend into his Annabelle."	game="hl2" %}
	{% include ent_list_row.html	name="npc_mortarsynth"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_mossman"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_pigeon"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_poisonzombie"		status="Changed"	summary="Fixed game crash on contact with barnacle. Also carries base zombie changes detailed in <code>npc_zombie</code>."	game="hl2" %}
	{% include ent_list_row.html	name="npc_puppet"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_rollermine"		status="Changed"	summary="Added keyvalue for rollermines to start as if they were hacked by Alyx in Episode One. Also fixed rollermines creating static versions of themselves each time the player tries to pick them up with the supercharged gravity gun."	game="hl2" %}
	{% include ent_list_row.html	name="npc_seagull"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_sniper"		status="Changed"	summary="Custom model support, custom beam support, response system support, obsolete FGD stuff removed, separate spawnflag for dying on fire. (note: Snipers will no longer die on fire in Episodic and must have this spawnflag enabled!)"	game="hl2" %}
	{% include ent_list_row.html	name="npc_stalker"		status="Changed"	summary="Added a \"Player Aggression\" keyvalue and an option to use the same synth blood used by hunters."	game="hl2" %}
	{% include ent_list_row.html	name="npc_strider"		status="Changed"	summary="Added a stomp filter for choosing who the strider is allowed to stomp and an <code>EnableCrouch</code> input. Also implemented VDC fix for <code>npc_clawscanner</code> strider scouting."	game="hl2" %}
	{% include ent_list_row.html	name="npc_template_maker"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="npc_tripmine"		status="Restored"	summary="<code>weapon_slam</code>'s tripmine with new I/O/KV so it could be placed in Hammer as an entity the mapper sets up."	game="hl2" %}
	{% include ent_list_row.html	name="npc_turret_ceiling"		status="Changed"	summary="Fixed <code>npc_turret_ceiling</code> having no sounds or muzzle flashes. Added option to specify a <code>npc_turret_ceiling</code>'s health and sight FOV. Added inputs to control ammo depletion, based on floor turret's inputs. Added spawnflag and inputs to disable the turret's \"eye\" sprite."	game="hl2" %}
	{% include ent_list_row.html	name="npc_turret_floor"		status="Changed"	summary="Added spawnflag and inputs to disable the turret's \"eye\" sprite, made \"Skin Number\" use actual skin and show up in Hammer, restored Alyx's ability to hack turrets via a convar that's disabled by default."	game="hl2" %}
	{% include ent_list_row.html	name="npc_turret_ground"		status="Changed"	summary="Removed requirement to have parent."	game="hl2" %}
	{% include ent_list_row.html	name="npc_turret_lab"		status="New"	summary="A functional version of <code>labturret.mdl</code>."	game="hl2" %}
	{% include ent_list_row.html	name="npc_vehicledriver"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="npc_vortigaunt"		status="Changed"	summary="Fix LOS issue during firing schedule. Also technically inherits companion changes detailed in <code>npc_citizen</code>, although it can't use all of them."	game="hl2" %}
	{% include ent_list_row.html	name="npc_zombie"		status="Changed"	summary="Inherits base zombie changes like options to have no headcrab or never become a torso and an <code>OnSwattedProp</code> output that fires each time a zombie swats a prop, passing the prop as the activator."	game="hl2" %}
	{% include ent_list_row.html	name="npc_zombie_custom"		status="New"	summary="Special \"custom\" version of <code>npc_zombie</code> that supports custom models (including custom legs and torsos) and uses the response system, unlike other zombies."	game="hl2" %}
	{% include ent_list_row.html	name="npc_zombie_custom_torso"		status="New"	summary="Like <code>npc_zombie_custom</code>, but as a torso. Inherits all changes from <code>npc_zombie_custom</code>."	game="hl2" %}
	{% include ent_list_row.html	name="npc_zombie_torso"		status="Affected"	summary="Inherits all changes from <code>npc_zombie</code>."	game="hl2" %}
	{% include ent_list_row.html	name="npc_zombine"		status="Changed"	summary="Added keyvalue for specifying how many grenades a Zombine could have (including none) as well as an <code>OnPullGrenade</code> output that fires for each grenade pulled. Inherits base zombie changes detailed in <code>npc_zombie</code>."	game="hl2" %}
	{% include ent_list_row.html	name="path_corner"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="path_corner_crash"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="path_track"		status="Changed"	summary="A save/restore oversight involving the way path sequences were saved was fixed." %}
	{% include ent_list_row.html	name="phys_ballsocket"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="phys_constraint"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="phys_constraintsystem"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="phys_convert"		status="Changed"	summary="Improved conversion and added the option to be converted to <code>prop_physics</code>/<code>func_physbox</code> instead of just <code>simple_physics_prop</code>/<code>brush</code>. Also see <code>point_entity_replace</code>." %}
	{% include ent_list_row.html	name="phys_hinge"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="phys_keepupright"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="phys_lengthconstraint"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="phys_magnet"		status="Changed"	summary="Fixed crashing with no model name, added \"Prevent pickup\" spawnflag" %}
	{% include ent_list_row.html	name="phys_motor"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="phys_pulleyconstraint"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="phys_ragdollconstraint"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="phys_ragdollmagnet"		status="Changed"	summary="<code>OnUsed</code> output which fires each time the magnet is used, new keyvalue for targeting a specific bone, and the ability to target sniper bodies." %}
	{% include ent_list_row.html	name="phys_slideconstraint"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="phys_spring"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="phys_thruster"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="phys_torque"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="physics_cannister"		status="Changed"	summary="Fixed and cleaned up FGD definition." %}
	{% include ent_list_row.html	name="player"		status="Changed"	summary="The player has plenty of new inputs, but most of them could be accessed through <code>logic_playerproxy</code> thanks to a new I/O/KV transferring system." %}
	{% include ent_list_row.html	name="player_loadsaved"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="player_speedmod"		status="Changed"	summary="Added <code>Enable</code>/<code>Disable</code> for using speedmod's spawnflags without actually modifying the player's speed. Also added \"Additional Buttons\" keyvalue and a spawnflag that stops this entity from automatically suppressing the player's flashlight." %}
	{% include ent_list_row.html	name="player_weaponstrip"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="point_advanced_finder"		status="New"	summary="A \"finder\" entity for finding entities based on specified criteria. This is a more advanced version of <code>point_entity_finder</code>, an existing entity from (l4d: 4) and newer." %}
	{% include ent_list_row.html	name="point_anglesensor"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="point_angularvelocitysensor"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="point_antlion_repellant"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="point_apc_controller"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="point_bonusmaps_accessor"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="point_bugbait"		status="Changed"	summary="New bounding box testing mode that checks a box rather than a radius." %}
	{% include ent_list_row.html	name="point_camera"		status="Changed"	summary="New keyvalue that determines whether to draw the skybox. Also now properly derives from <code>Targetname</code> in the FGD." %}
	{% include ent_list_row.html	name="point_camera_ortho"		status="New"	summary="A special type of camera that captures an orthographic image. Otherwise identical to <code>point_camera</code> in every way, including its Mapbase changes." %}
	{% include ent_list_row.html	name="point_clientcommand"		status="Changed"	summary="Has a new icon in Hammer." %}
	{% include ent_list_row.html	name="point_combine_ball_launcher"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="point_copy_size"		status="New"	summary="Copies an entity's bounding box size to another." %}
	{% include ent_list_row.html	name="point_damageinfo"		status="New"	summary="Deals damage with precise control over exactly what information the damage carries, from amount and type to attacker and force." %}
	{% include ent_list_row.html	name="point_devshot_camera"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="point_enable_motion_fixup"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="point_entity_finder"		status="Ported"	summary="Finds entities based on various criteria. Ported from Alien Swarm SDK. Also see <code>point_advanced_finder</code>." %}
	{% include ent_list_row.html	name="point_entity_replace"		status="New"	summary="Replaces one entity with another, similar to <code>phys_convert</code>. Copies position, angles, velocity, etc. with the ability to copy additional values. Can be used with outputs that pass new entities to replace them on the fly, like <code>OutGrenade</code> on soldiers to replace their grenades with another object (e.g. flares)." %}
	{% include ent_list_row.html	name="point_event"		status="New"	summary="Listens for and acts upon game events similar to <code>logic_eventlistener</code>, except it can listen for multiple events and pass their data to I/O." %}
	{% include ent_list_row.html	name="point_flesh_effect_target"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="point_gamestats_counter"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="point_glow"		status="New"	summary="A new entity inspired by the (ent: tf_glow) entity which allows a glow to be created around another entity." %}
	{% include ent_list_row.html	name="point_hurt"		status="Changed"	summary="Now has \"Damage Or\" flags similar to <code>trigger_hurt</code>. Also see <code>point_damageinfo</code>." %}
	{% include ent_list_row.html	name="point_message"		status="Changed"	summary="New <code>SetMessage</code> output that sets the message's text." %}
	{% include ent_list_row.html	name="point_message_localized"		status="New"	summary="A version of <code>point_message</code> that can use localized text and newlines. Note that this doesn't support Unicode characters." %}
	{% include ent_list_row.html	name="point_playermoveconstraint"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="point_posecontroller"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="point_projectile"		status="New"	summary="Fires entities as projectiles (e.g. <code>crossbow_bolt</code>) with a specific owner, velocity, damage, etc." %}
	{% include ent_list_row.html	name="point_proximity_sensor"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="point_push"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="point_radiation_source"		status="New"	summary="A source of radiation that the player's geiger counter reacts to. Does no actual damage." %}
	{% include ent_list_row.html	name="point_ragdollboogie"		status="New"	summary="Forces NPCs and ragdolls to use ragdoll boogie, a feature which handles the electrical arcs that occur on ragdolls after being launched by the supercharged gravity gun, etc." %}
	{% include ent_list_row.html	name="point_servercommand"		status="Changed"	summary="Has a new icon in Hammer." %}
	{% include ent_list_row.html	name="point_spotlight"		status="Changed"	summary="New halo scale and custom material keyavlues + <code>LightToggle</code> input." %}
	{% include ent_list_row.html	name="point_teleport"		status="Changed"	summary="<code>TeleportEntity</code> and <code>TeleportToCurrentPos</code> inputs inspired by Counter-Strike: Global Offensive." %}
	{% include ent_list_row.html	name="point_template"		status="Changed"	summary="<code>OutSpawnedEntity</code> and <code>ForceSpawnRandomTemplate</code>." %}
	{% include ent_list_row.html	name="point_tesla"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="point_velocitysensor"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="point_viewcontrol"		status="Changed"	summary="FOV options ported from Alien Swarm SDK, with track speed and target options recreated. Some bug fixes are toggled by a \"New behavior\" spawnflag to avoid breaking existing entities. (the spawnflag is on by default)" %}
	{% include ent_list_row.html	name="postprocess_controller"		status="Ported"	summary="An entity ported from the Alien Swarm SDK SDK which provides control over various filmic post-processing effects originally made for the (l4dseries: 4)." %}
	{% include ent_list_row.html	name="prop_combine_ball"		status="Changed"	summary="<code>SetLifetime</code> and <code>AddLifetime</code> for changing a ball's lifetime."	game="hl2" %}
	{% include ent_list_row.html	name="prop_coreball"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="prop_detail"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="prop_door_rotating"		status="Changed"	summary="Restored spawnflag for preventing NPCs from using, <code>AllowPlayerUse</code> and <code>DisallowPlayerUse</code> inputs for toggling the \"Disallow player +USE\" spawnflag, added collisions disabled spawnflag carried over from <code>prop_dynamic</code> to FGD, disabled shadows by default." %}
	{% include ent_list_row.html	name="prop_dynamic"		status="Changed"	summary="Hold Animation, Update children, and <code>SetAnimationNoReset</code> ported from the Alien Swarm SDK. Also uses all of the base prop changes, including the disabling of the prop consistency system (via <code>mapbase_prop_consistency_noremove</code> cvar), prop interaction inputs, unmarked spawnflags, etc. " %}
	{% include ent_list_row.html	name="prop_dynamic_ornament"		status="Affected"	summary="Uses all of the base prop changes detailed in <code>prop_dynamic</code>." %}
	{% include ent_list_row.html	name="prop_dynamic_override"		status="Affected"	summary="Uses all of the base prop changes detailed in <code>prop_dynamic</code>." %}
	{% include ent_list_row.html	name="prop_flare"		status="New"	summary="An entire class for controlling the properties of <code>flare.mdl</code> from Half-Life 2: Episode One. This is based off of the Black Mesa entity of the same name. Can control lifetime, ignite the flare, restore the flare, etc."	game="hl2" %}
	{% include ent_list_row.html	name="prop_interactable"		status="New"	summary="A prop designed to be interacted with like a button. It has all of the properties of <code>prop_dynamic</code> without having to use an accompanying <code>func_door</code> or <code>func_button</code>." %}
	{% include ent_list_row.html	name="prop_physics"		status="Stock"	summary="<code>SetDebris</code> for toggling debris status. Uses all of the base prop changes detailed in <code>prop_dynamic</code>." %}
	{% include ent_list_row.html	name="prop_physics_multiplayer"		status="Affected"	summary="Uses all of the prop changes detailed in <code>prop_physics</code> and <code>prop_dynamic</code>." %}
	{% include ent_list_row.html	name="prop_physics_override"		status="Changed"	summary="Now supports overriding prop interactions and preferred carry angles." %}
	{% include ent_list_row.html	name="prop_ragdoll"		status="Changed"	summary="Fixed <code>StartRagdollBoogie</code>, added <code>Wake</code>/<code>Sleep</code> inputs, added automatic ragdoll interactions. Also added optional +USE support, including limb pickup." %}
	{% include ent_list_row.html	name="prop_scalable"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="prop_sphere"		status="Restored"	summary="A cheap vphysics sphere. Uses VDC changes on the linked article." %}
	{% include ent_list_row.html	name="prop_static"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="prop_thumper"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="prop_vehicle"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="prop_vehicle_airboat"		status="Affected"	summary="Uses all of the changes detailed in <code>prop_vehicle_driveable</code>."	game="hl2" %}
	{% include ent_list_row.html	name="prop_vehicle_apc"		status="Affected"	summary="Uses all of the changes detailed in <code>prop_vehicle_driveable</code>."	game="hl2" %}
	{% include ent_list_row.html	name="prop_vehicle_cannon"		status="Affected"	summary="Uses all of the changes detailed in <code>prop_vehicle_driveable</code>." %}
	{% include ent_list_row.html	name="prop_vehicle_choreo_generic"		status="Affected"	summary="Uses all of the changes detailed in <code>prop_vehicle_driveable</code>." %}
	{% include ent_list_row.html	name="prop_vehicle_crane"		status="Affected"	summary="Uses all of the changes detailed in <code>prop_vehicle_driveable</code>."	game="hl2" %}
	{% include ent_list_row.html	name="prop_vehicle_driveable"		status="Changed"	summary="<code>EnterVehicle(Immediate)</code>, <code>ExitVehicle(Immediate)</code>, partly ported from <code>prop_vehicle_prisoner_pod</code>." %}
	{% include ent_list_row.html	name="prop_vehicle_jeep"		status="Changed"	summary="Keyvalue for disabling hazard lights in Episodic, <code>Enable</code>/<code>DisablePhysgun</code> ported from Episodic to HL2 jeep."	game="hl2" %}
	{% include ent_list_row.html	name="prop_vehicle_jeep_old"		status="New"	summary="Allows the original jeep to be used in Episodic, reverting its classname to <code>prop_vehicle_jeep</code> on spawn."	game="hl2" %}
	{% include ent_list_row.html	name="prop_vehicle_prisoner_pod"		status="Affected"	summary="Some of its inputs were moved to the base class, but other than that it hasn't changed."	game="hl2" %}
	{% include ent_list_row.html	name="script_intro"		status="Changed"	summary="The skybox bug can now be fixed via a keyvalue (drawing the skybox in the main view, the camera view, both, or neither) and viewmodels now show up correctly." %}
	{% include ent_list_row.html	name="script_tauremoval"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="scripted_sentence"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="scripted_sequence"		status="Changed"	summary="Proper <code>!activator</code> support on target NPC and outputs, \"No Interruptions\" and \"Override AI\" enabled by default, <code>OnPreIdleSequence</code>/<code>OnEntrySequence</code>/<code>OnActionSequence</code> inputs added, unmarked spawnflags added" %}
	{% include ent_list_row.html	name="scripted_sound"		status="New"	summary="Causes a sound to be emitted on an entity directly, allowing it to be interrupted by, say, the entity's death or removal. This is useful for lines spoken by NPCs that can't use <code>logic_choreographed_scene</code> and are too \"interactive\" for <code>ambient_generic</code> to work well." %}
	{% include ent_list_row.html	name="scripted_target"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="shadow_control"		status="Changed"	summary="Add ability to toggle [[Dynamic RTT shadow angles in Source 2007: Saul Rennison's dynamic RTT shadow angles]]." %}
	{% include ent_list_row.html	name="simple_physics_brush"		status="Restored"	summary="A simple physics brush with no unique properties. Previously only usable with <code>phys_convert</code>, this has been changed so it could be used in Hammer." %}
	{% include ent_list_row.html	name="simple_physics_prop"		status="Restored"	summary="A simple physics prop with no unique properties. Previously only ussable with <code>phys_convert</code>, this has been changed so it could be placed in Hammer." %}
	{% include ent_list_row.html	name="sky_camera"		status="Changed"	summary="Added updating capabilities, option to use angles for rotating skybox, ability to use a solid sky color instead of a sky texture, fog I/KV from <code>env_fog_controller</code>, and more." %}
	{% include ent_list_row.html	name="skybox_swapper"		status="Ported"	summary="An entity ported from Alien Swarm SDK that swaps skybox textures. This is broken in Source 2013 SP and only works properly in MP." %}
	{% include ent_list_row.html	name="tanktrain_ai"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="tanktrain_aitarget"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="test_sidelist"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="test_traceline"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="trigger_apply_impulse"		status="Ported"	summary="Applies a single push to entities touching the trigger when the <code>ApplyImpulse</code> input is fired. Added to the FGD and ported to Source 2013 SP from MP." %}
	{% include ent_list_row.html	name="trigger_autosave"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="trigger_changelevel"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="trigger_fall"		status="New"	summary="Players who enter a <code>trigger_fall</code> are given a special flag that causes them to die of fall damage the instant they touch the ground (crunching sound and everything) no matter their speed. Useful for ensuring death by fall damage or serving as a more natural alternative to <code>trigger_hurt</code>." %}
	{% include ent_list_row.html	name="trigger_gravity"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="trigger_hurt"		status="Changed"	summary="Now supports \"Damage Or\" keyvalue for flags intended to be combined with other damage types. Also added a hurt rate keyvalue. " %}
	{% include ent_list_row.html	name="trigger_impact"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="trigger_look"		status="Changed"	summary="Added a \"Use LOS\" keyvalue that also uses LOS calculations as opposed to only viewcone calculations. Also added support for multiple look entities." %}
	{% include ent_list_row.html	name="trigger_multiple"		status="Affected"	summary="Uses all base trigger changes, including the ability to detect items/weapons/projectiles, which could previously only be detected through the \"Everything\" spawnflag. <code>OnTouching</code> also now passes the first touching entity as the activator." %}
	{% include ent_list_row.html	name="trigger_once"		status="Affected"	summary="Uses the base trigger changes defined in <code>trigger_multiple</code>." %}
	{% include ent_list_row.html	name="trigger_physics_trap"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="trigger_playermovement"		status="Changed"	summary="Auto-walk and disable jump spawnflags added based on (l4d: 4) spawnflags (replicated)" %}
	{% include ent_list_row.html	name="trigger_proximity"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="trigger_push"		status="Changed"	summary="New <code>SetSpeed</code> and <code>SetPushDir</code> inputs." %}
	{% include ent_list_row.html	name="trigger_remove"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="trigger_rpgfire"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="trigger_serverragdoll"		status="Changed"	summary="Fixed trigger filter and potential conflicts with other server ragdoll functions." %}
	{% include ent_list_row.html	name="trigger_soundscape"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="trigger_teleport"		status="Changed"	summary="Fixed FGD not showing all of the spawnflags." %}
	{% include ent_list_row.html	name="trigger_teleport_relative"		status="Ported"	summary="Teleports entities relative to their current positions. Added a custom FGD class and ported to Source 2013 SP from MP." %}
	{% include ent_list_row.html	name="trigger_tonemap"		status="Ported"	summary="Trigger that changes the <code>env_tonemap_controller</code> of players that walk through it. Ported from the Alien Swarm SDK." %}
	{% include ent_list_row.html	name="trigger_transition"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="trigger_vphysics_motion"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="trigger_waterydeath"		status="Changed"	summary="Added a bunch of I/O/KV for easier modification and configuration." %}
	{% include ent_list_row.html	name="trigger_weapon_dissolve"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="trigger_weapon_strip"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="vehicle_viewcontroller"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="vgui_movie_display"		status="Ported"	summary="Plays a video from the <code>media</code> folder on a VGUI screen surface. Ported directly from Alien Swarm SDK with additional support for sound + mute keyvalue." %}
	{% include ent_list_row.html	name="vgui_screen"		status="Changed"	summary="Now supports custom outputs starting with <code>~</code> that correspond to VGUI commands." %}
	{% include ent_list_row.html	name="vgui_slideshow_display"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="vgui_text_display"		status="New"	summary="An entity that displays a VGUI text label in the world." %}
	{% include ent_list_row.html	name="water_lod_control"		status="Stock"	summary="" %}
	{% include ent_list_row.html	name="weapon_357"		status="Changed"	summary="Now usable by NPCs, uses base weapon changes like ammo overrides, new pickup prevention inputs/flags, and fade distances using spheres."	game="hl2" %}
	{% include ent_list_row.html	name="weapon_alyxgun"		status="Affected"	summary="Uses base weapon changes detailed in <code>weapon_357</code>."	game="hl2" %}
	{% include ent_list_row.html	name="weapon_annabelle"		status="Changed"	summary="Uses proper animations with non-Grigori NPCs. Uses base weapon changes detailed in <code>weapon_357</code>."	game="hl2" %}
	{% include ent_list_row.html	name="weapon_ar2"		status="Changed"	summary="Uses restored AR2 animations previously only found in the model. Uses base weapon changes detailed in <code>weapon_357</code>."	game="hl2" %}
	{% include ent_list_row.html	name="weapon_bugbait"		status="Affected"	summary="Uses base weapon changes detailed in <code>weapon_357</code>."	game="hl2" %}
	{% include ent_list_row.html	name="weapon_crossbow"		status="Changed"	summary="Now usable by NPCs. Model no longer broken in Hammer. Uses base weapon changes detailed in <code>weapon_357</code>."	game="hl2" %}
	{% include ent_list_row.html	name="weapon_crowbar"		status="Affected"	summary="Uses base weapon changes detailed in <code>weapon_357</code>."	game="hl2" %}
	{% include ent_list_row.html	name="weapon_custom_scripted1"		status="New"	summary="New VScript-driven custom weapon." %}
	{% include ent_list_row.html	name="weapon_frag"		status="Affected"	summary="Uses base weapon changes detailed in <code>weapon_357</code>."	game="hl2" %}
	{% include ent_list_row.html	name="weapon_physcannon"		status="Affected"	summary="Uses base weapon changes detailed in <code>weapon_357</code>."	game="hl2" %}
	{% include ent_list_row.html	name="weapon_pistol"		status="Affected"	summary="Uses base weapon changes detailed in <code>weapon_357</code>."	game="hl2" %}
	{% include ent_list_row.html	name="weapon_rpg"		status="Changed"	summary="NPCs now use RPGs correctly. Uses base weapon changes detailed in <code>weapon_357</code>."	game="hl2" %}
	{% include ent_list_row.html	name="weapon_shotgun"		status="Changed"	summary="Uses base weapon changes detailed in <code>weapon_357</code>."	game="hl2" %}
	{% include ent_list_row.html	name="weapon_slam"		status="Ported"	summary="Ported from Half-Life 2: Deathmatch. Uses base weapon changes detailed in <code>weapon_357</code>."	game="hl2" %}
	{% include ent_list_row.html	name="weapon_smg1"		status="Affected"	summary="Uses base weapon changes detailed in <code>weapon_357</code>."	game="hl2" %}
	{% include ent_list_row.html	name="weapon_striderbuster"		status="Stock"	summary=""	game="hl2" %}
	{% include ent_list_row.html	name="weapon_stunstick"		status="Changed"	summary="Now uses Half-Life 2: Deathmatch weapon/model with NPC support. Uses base weapon changes detailed in <code>weapon_357</code>."	game="hl2" %}
	{% include ent_list_row.html	name="worldspawn"		status="Changed"	summary="(TODO)" %}
	</tbody>

</table>

<script src="../../js/ents.js"></script>
