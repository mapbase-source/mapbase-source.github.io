---
layout: article
title: Weapon & Ability Portability
permalink: /docs/hl2/npcs/weapons-and-abilities/
breadcrumb: true
related_pages:
  - '/docs/hl2/npcs/custom-anims/'
---

Mapbase extends what types of weapons and abilities NPCs can use.

{% include note.html	txt="Most of what's covered by this article applies to humanoid NPCs only (<code>npc_citizen</code>, <code>npc_combine_s</code>, etc.)" %}

# Increased weapon portability

The following table shows which HL2 NPCs are capable of using various weapons in vanilla Source 2013:

<table>
	<thead>
		<tr style="text-align: center;">
			<th>Weapon</th>
			<th>Male npc_citizen and allies</th>
			<th>Female npc_citizen and allies</th>
			<th>npc_metropolice</th>
			<th>npc_combine_s</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>weapon_pistol</code></td>
			<td class="ent_list_status" style="background-color: #292929;">Partially</td>
			<td class="ent_list_status" style="background-color: #292929;">Partially</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
		</tr>
		<tr>
			<td><code>weapon_smg1</code></td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
		</tr>
		<tr>
			<td><code>weapon_ar2</code></td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
		</tr>
		<tr>
			<td><code>weapon_shotgun</code></td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
		</tr>
		<tr>
			<td><code>weapon_357</code></td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
		</tr>
		<tr>
			<td><code>weapon_crossbow</code></td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
		</tr>
		<tr>
			<td><code>weapon_rpg</code></td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
		</tr>
		<tr>
			<td><code>weapon_crowbar</code></td>
			<td class="ent_list_status" style="background-color: #292929;">Partially</td>
			<td class="ent_list_status" style="background-color: #292929;">Partially</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
		</tr>
		<tr>
			<td><code>weapon_stunstick</code></td>
			<td class="ent_list_status" style="background-color: #292929;">Partially</td>
			<td class="ent_list_status" style="background-color: #292929;">Partially</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
		</tr>
		<tr>
			<td><code>weapon_citizenpackage</code></td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
		</tr>
		<tr>
			<td><code>weapon_citizensuitcase</code></td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
			<td class="ent_list_status" style="background-color: #3F2A2A;">No</td>
		</tr>
	</tbody>
</table>

This table shows which NPCs are capable of using those weapons in Mapbase:

<table>
	<thead>
		<tr style="text-align: center;">
			<th>Weapon</th>
			<th>Male npc_citizen and allies</th>
			<th>Female npc_citizen and allies</th>
			<th>npc_metropolice</th>
			<th>npc_combine_s</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>weapon_pistol</code></td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
		</tr>
		<tr>
			<td><code>weapon_smg1</code></td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
		</tr>
		<tr>
			<td><code>weapon_ar2</code></td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
		</tr>
		<tr>
			<td><code>weapon_shotgun</code></td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
		</tr>
		<tr>
			<td><code>weapon_357</code></td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
		</tr>
		<tr>
			<td><code>weapon_crossbow</code></td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
		</tr>
		<tr>
			<td><code>weapon_rpg</code></td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #292929;">Partially</td>
			<td class="ent_list_status" style="background-color: #292929;">Partially</td>
		</tr>
		<tr>
			<td><code>weapon_crowbar</code></td>
			<td class="ent_list_status" style="background-color: #292929;">Partially</td>
			<td class="ent_list_status" style="background-color: #292929;">Partially</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
		</tr>
		<tr>
			<td><code>weapon_stunstick</code></td>
			<td class="ent_list_status" style="background-color: #292929;">Partially</td>
			<td class="ent_list_status" style="background-color: #292929;">Partially</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
		</tr>
		<tr>
			<td><code>weapon_citizenpackage</code></td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
		</tr>
		<tr>
			<td><code>weapon_citizensuitcase</code></td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
			<td class="ent_list_status" style="background-color: #2A3F2A;">Yes</td>
		</tr>
	</tbody>
</table>

Many of these weapons use completely new animations which are detailed in [Custom Animations](/docs/hl2/npcs/custom-anims/).

# Grenades and alt-fire capabilities
In vanilla Source 2013, only <code>npc_combine_s</code> is capable of using grenades or a weapon's secondary attack, and <code>weapon_ar2</code> is the only weapon it can use the secondary attack with. Mapbase expands both of these capabilities to almost all human NPCs and also gives them the ability to use <code>weapon_smg1</code>'s secondary attack.

For non-soldiers, the desired capability must be enabled through a dedicated "Grenade capabilities" keyvalue. This allows you to have a NPC use grenades, its alt-fire ability, or both.
