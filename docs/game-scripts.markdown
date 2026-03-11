---
layout: article
title: Game Scripts
permalink: /docs/game-scripts/
breadcrumb: true
---

<script src="../../js/docs.js"></script>

This category covers changes to the game's keyvalue scripts, which are usually located within the `scripts` folder. For changes related to VScript, which are user-defined scripts that run in maps, see [VScript](/docs/vscript/).

<div class="feature_list" style="margin:0px auto;">

	{% include docs_feature_wip.html	url="map-specific-files"		text="Map-Specific Files"		desc="Support for individual maps to override mod scripts."				icon="assets/entities/math_counter_advanced.png"		bg="../assets/website_bg.jpg" %}
	{% include docs_feature_button.html	url="weapon-scripts"		text="Weapon Script Changes"		desc="Changes to weapon scripts."			icon="assets/docs/feature_dc_icon.png"					bg="../assets/docs/feature_dc_bg.gif" %}
	{% include docs_feature_wip.html	url="response-system"		text="Response System"		desc="Changes to the Response System."			icon="assets/entities/game_menu.png"					bg="../assets/website_bg.jpg" %}
	{% include docs_feature_wip.html	url="choreo-sentences"		text="Choreo Sentences"		desc="New scene-based sentences."			icon="assets/entities/game_menu.png"					bg="../assets/website_bg.jpg" %}
	<div style="clear: left;"></div>
	
</div>

---

## Modified Scripts

This is a list of script files that Mapbase changes or overrides in some way. File names are relative to `scripts`. Note that this list is not exhaustive; files with negligible changes are excluded.

<table style="max-width:75%;margin-left: auto;margin-right: auto;">
	<thead>
		<tr style="text-align: center;">
			<th>Status</th>
			<th>Meaning</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="ent_list_status ent_list_status-Changed">Changed</td>
			<td>Mapbase overrides and changes the content of this script.</td>
		</tr>
		<tr>
			<td class="ent_list_status ent_list_status-Extended">Extended</td>
			<td>Mapbase extends the capabilities of this script.</td>
		</tr>
		<tr>
			<td class="ent_list_status ent_list_status-New">New</td>
			<td>This script was added by Mapbase and did not exist before.</td>
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
	  <option value="Changed">Changed</option>
	  <option value="Extended">Extended</option>
	  <option value="New">New</option>
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
	{% include script_list_row.html	name="actbusy.txt"		status="Extended"	summary="Added new <code>translateactivity</code> keyvalue to translate specified activities. Also see <code>[ai_goal_actbusy](/docs/ents/ai_goal_actbusy/)</code>."	game="hl2" %}
	<!--{% include script_list_row.html	name="actremap.txt"		status="?"	summary="(todo)" %}-->
	<!--{% include script_list_row.html	name="chapterbackgrounds.txt"		status="Changed"	summary="Cleared by default so that mods don't always go into background01. Mods can still override to integrate background maps." %} commented out b/c mostly irrelevant and confusing to explain-->
	{% include script_list_row.html	name="chapters.txt"		status="New"	summary="New script file for defining chapters."	link="/docs/utils/chapters/"	game="hl2" %}
	{% include script_list_row.html	name="choreosentences_******.txt"		status="New"	summary="Script files for choreo sentences."	link="/docs/game-scripts/choreo-sentences/"	game="hl2" %}
	{% include script_list_row.html	name="game_sounds.txt"		status="Changed"	summary="<code>Instructor.LessonStart</code> and <code>Instructor.ImportantLessonStart</code> added for the [Game Instructor](/docs/ents/env_instructor_hint/)." %}
	{% include script_list_row.html	name="game_sounds_weapons.txt"		status="Changed"	summary="SLAM sounds added added for <code>[weapon_slam](/docs/ents/weapon_slam/)</code>."	game="hl2" %}
	{% include script_list_row.html	name="global_actors.txt"		status="Changed"	summary="Added bloody rebel models from EP2. (<code>male_01_bloody</code>, etc.)"	game="hl2" %}
	{% include script_list_row.html	name="hudanimations_manifest.txt"		status="Changed"	summary="Added <code>hudanimations_mapbase_hl2.txt</code>."	game="hl2" %}
	{% include script_list_row.html	name="hudanimations_mapbase_hl2.txt"		status="New"	summary="Contains animations for custom aux power devices, <code>[game_menu](/docs/ents/game_menu/)</code>, and other features."	game="hl2" %}
	<!--{% include script_list_row.html	name="hud_textures.txt"		status="?"	summary="(todo)" %}
	{% include script_list_row.html	name="hudlayout_mapbase.res"		status="New"	summary="(todo)" %}-->
	{% include script_list_row.html	name="hudlayout.res"		status="Changed"	summary="(todo)" %}
	{% include script_list_row.html	name="instructor_lessons.txt"		status="New"	summary="Defines core game instructor lessons. Contains the lesson for [env_instructor_hint](/docs/ents/env_instructor_hint/) by default." %}
	{% include script_list_row.html	name="instructor_textures.txt"		status="New"	summary="Defines instructor hint icons for <code>[env_instructor_hint](/docs/ents/env_instructor_hint/)</code>." %}
	{% include script_list_row.html	name="instructor_textures_hl2.txt"		status="New"	summary="Defines instructor hint icons for <code>[env_instructor_hint](/docs/ents/env_instructor_hint/)</code>." %}
	{% include script_list_row.html	name="kb_act.lst"		status="Changed"	summary="Added <code>+attack3</code> and additional <code>slot</code> binds."	game="hl2" %}
	{% include script_list_row.html	name="kb_def.lst"		status="Changed"	summary="Added default bind for <code>+attack3</code> at <code>MOUSE3</code>."	game="hl2" %}
	{% include script_list_row.html	name="mapbase_con_groups.txt"		status="New"	summary="New script file for defining console groups."	link="/docs/utils/console-groups/" %}
	{% include script_list_row.html	name="mapbase_default_manifest.txt"		status="New"	summary="New script file for defining what's mounted by map-specific files."	link="/docs/game-scripts/map-specific-files/" %}
	<!--{% include script_list_row.html	name="mapbase_rpc.txt"		status="New"	summary="(todo)" %}-->
	{% include script_list_row.html	name="mod_con_groups.txt"		status="New"	summary="Console group script file intended to be overridden by mods."	link="/docs/utils/console-groups/" %}
	{% include script_list_row.html	name="newbindings.txt"		status="New"	summary="Added binds for <code>+attack3</code>, additional slot binds, and multiplayer binds in singleplayer for VScript use."	game="hl2" %}
	{% include script_list_row.html	name="npc_sounds_turret.txt"		status="Changed"	summary="Added unique sounds for <code>[npc_turret_ceiling](/docs/ents/npc_turret_ceiling/)</code>."	game="hl2" %}
	{% include script_list_row.html	name="surfaceproperties_manifest.txt"		status="Changed"	summary="Added <code>surfaceproperties_mapbase.txt</code>." %}
	{% include script_list_row.html	name="surfaceproperties_mapbase.txt"		status="Changed"	summary="Added friction tool material surfaceprops from Half-Life: Source." %}
	<!--{% include script_list_row.html	name="vgui_screens_mapbase.txt"		status="New"	summary="(todo)" %}-->
	<!--{% include script_list_row.html	name="weapon_custom_scripted1.txt"		status="New"	summary="(todo)" %}-->
	{% include script_list_row.html	name="weapon_357.txt"		status="Changed"	summary="Added NPC sounds and pickup weight value."	game="hl2" %}
	{% include script_list_row.html	name="weapon_annabelle.txt"		status="Changed"	summary="Added NPC sounds and pickup weight value."	game="hl2" %}
	{% include script_list_row.html	name="weapon_crossbow.txt"		status="Changed"	summary="Added NPC sounds and pickup weight value."	game="hl2" %}
	{% include script_list_row.html	name="weapon_crowbar.txt"		status="Changed"	summary="Fixed world impact sound. Added pickup weight value."	game="hl2" %}
	{% include script_list_row.html	name="weapon_frag.txt"		status="Changed"	summary="Added pickup weight value."	game="hl2" %}
	{% include script_list_row.html	name="weapon_mattpipe.txt"		status="New"	summary="Variant of the crowbar used by Matt in Route Kanal."	game="hl2" %}
	{% include script_list_row.html	name="weapon_rpg.txt"		status="Changed"	summary="Added pickup weight value."	game="hl2" %}
	{% include script_list_row.html	name="weapon_slam.txt"		status="New"	summary="Ported from HL2DM."	game="hl2" %}
	{% include script_list_row.html	name="weapon_stunstick.txt"		status="New"	summary="Ported from HL2DM."	game="hl2" %}
	{% include script_list_row.html	name="protagonists/protagonists_******.txt"		status="New"	summary="Script files for the Protagonist System."	link="/docs/hl2/protagonist-system/"	game="hl2" %}
	{% include script_list_row.html	name="talker/response_rules.txt"		status="Extended"	summary="Response System significantly changed. See article for details."	link="/docs/game-scripts/response-system/" %}
	</tbody>

</table>

<script src="../../js/ents.js"></script>
