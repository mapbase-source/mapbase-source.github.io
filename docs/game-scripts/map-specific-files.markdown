---
layout: article
title: Map-Specific Files
permalink: /docs/game-scripts/map-specific-files/
breadcrumb: true
---

Mapbase allows certain types of scripts to load on a map-by-map basis when they would normally only be loaded by mod files. This is best suited for maps which can't have their own deriving mod with their own script changes. It also allows mappers to easily use scripts previously reserved for more complex modding. This system was inspired by existing code which loads level-specific soundscripts and soundscapes.

---

Map-specific scripts are normally loaded by an automatic manifest which searches for specific file names. The types of scripts which could be used with the map-specific file system are listed below.

<!--<div class="table-filters">
	<label class="table-filter-dropdown" for="entlist_filter_game">Game</label>
	<select class="table-filter-dropdown" name="entlist_filter_game" id="entlist_filter_game" oninput="FilterTable()">
	  <option value="any">Any</option>
	  <option value="">None (base only)</option>
	  <option value="hl2">Half-Life 2</option>
	  <option value="tf2">Team Fortress 2</option>
	</select>
</div>-->

<table id="entlist">
	<thead>
		<tr style="text-align: center;">
			<th style="cursor: pointer;" onclick="SortTableClassname()">Name</th>
			<th>Summary</th>
		</tr>
	</thead>
	<tbody id="entlist_body">
	{% include script_list_row.html	name="maps/%mapname%_actbusy.txt"	summary="Actbusies are basically unscripted scripted sequences, allowing NPCs to play animations without actually entering an uninterruptible scripted state. See [the VDC article](https://developer.valvesoftware.com/wiki/Actbusy) for more information."	game="hl2" %}
	{% include script_list_row.html	name="maps/%mapname%_talker.txt"	summary="The Response System is a complex system which some NPCs use to decide what to say in response to an event, like seeing an enemy. See [the VDC article](https://developer.valvesoftware.com/wiki/Response_System) for more information." %}
	{% include script_list_row.html	name="maps/%mapname%_%language%.txt"	summary="Localization files contain language-specific text. They can be used in `env_hudhint` or `game_text`. Existing localization tokens should not be overridden because changes cannot be reverted on map unload." %}
	</tbody>

</table>

<script src="../../../js/ents.js"></script>
