---
layout: article
title: Protagonist System
permalink: /docs/hl2/protagonist-system/
breadcrumb: true
related_pages:
  - '/docs/visuals/player-rendering/'
---

<!--{% include banner_version.html	version="v8.0" %}-->

The **Protagonist System** is a dedicated controller for the player's model, viewmodel arms, and other properties. It's intended to allow mappers to quickly and easily change the player's "identity" without requiring several disconnected inputs. For example, setting the player's protagonist to `alyx` will make the player take on the appearance of Alyx Vance, changing their model and viewmodels accordingly.

You can set the player's protagonist name through one of the following methods:

- Using the "Protagonist Name" keyvalue on `logic_playerproxy`.
- Using the `SetProtagonist` input on the player with the protagonist as the parameter.
- Adding `player_default_protagonist "<protagonist name>"`  to `gameinfo.txt`, with `<protagonist name>` being the name of the protagonist.

Mapbase comes with several default protagonists that can be used in any HL2 mod. A list can be found at the bottom of this page. Protagonists can also be listed in-game by using the `protagonist_dump` command.

Here's a short video demonstrating its use in-game:

<p align="center">
<iframe src="https://drive.google.com/file/d/1XK5PPme3dkIi7tmUOK_eYeFJa9vR521I/preview" width="640" height="480"></iframe>
</p>

### Defining a new protagonist

New protagonists are defined through external scripts, which by default include most HL2 characters. You can find these scripts in `mapbase_hl2/content/hl2_mapbase_content.vpk` under `scripts/protagonists`. While new files can be added through the manifest, a `protagonists_mod.txt` file is provided to easily add custom protagonists. Protagonists can also be mounted on a map-by-map basis by adding a `maps/%mapname%_protagonists.txt` file.

This is the format for defining a new protagonist in one of these files, with labels for what each key does:

```
	"[protagonist name]"		- The name used to select the protagonist.
	{
		"inherits_from"			- Existing protagonists to inherit keyvalues from. Separated by semicolon.

		"playermodel"			- The model the player should be set to.
		"playermodel_skin"		- The playermodel's skin value.
		"playermodel_body"		- The playermodel's bodygroup value. This is currently a direct body integer.

		"hands"					- The hand viewmodel used when c_arms are supported.
		"hands_skin"			- The hand model's skin value.
		"hands_body"			- The hand model's bodygroup value. This is currently a direct body integer.

		"hands_..."				- Using "hands_blender" or "hands_css" will set them as different hand models for different rigs.
								  The default protagonists do not use this and it is only important if you have viewmodels with
								  different rigs.

		"response_contexts"		- Response contexts appended to the player, separated by comma.
		"team"					- HL2:DM only: Which team the protagonist should be on.
								  Accepts "combine", "rebels", or a direct integer.

		"wpn_data"				- A list of weapons to override the data for while this protagonist is active.
								  This is mostly used to add c_arms support.
		{
			"[weapon name]"			- The classname of the weapon to override. (e.g. "weapon_smg1")
			{
					"viewmodel"				- The viewmodel the weapon should use.
					"viewmodel_fov"			- The FOV the viewmodel should use.
					"uses_hands"			- Whether or not this viewmodel uses c_arms.
					"hand_rig"				- Which hand rig this viewmodel uses, if relevant.
			}
		}

		"wpn_viewmodels"		- A shortcut for "wpn_data" which only sets the viewmodel on the listed weapons.
		{
			"[weapon name]"		"[viewmodel path]"
		}

		"wpn_viewmodels_c"		- The same as "wpn_viewmodels", but it also turns on "uses_hands" automatically.
		{
			"[weapon name]"		"[viewmodel path]"
		}
	}
```

By default, most HL2 protagonists override viewmodels by inheriting `BASE_hl2_c_arms`, which is defined in `protagonists_hl2_base.txt` and uses `wpn_viewmodels_c` to draw from Inaki's c_arms-compatible viewmodels. If you have custom weapons, you can make them support c_arms without defining them in the Protagonist System by changing the weapon script directly, but if that isn't possible/convenient, then you can override this file and add your weapons with c_arms-capable viewmodels to this list.

Since `uses_hands` is a general weapon script keyvalue, HL2's weapon scripts could be made to support c_arms instead of being done through the Protagonist System, but Inaki's viewmodels differ slightly and some mods may override the default viewmodels or their scripts. By default, the Protagonist System enables c_arms on its own, and only when a protagonist with defined c_arms viewmodel(s) is selected. This also allows specific characters to use different viewmodels for the same weapons if needed.

If you would like to explicitly enable these values in the weapon scripts, see [Weapon Script Changes](/docs/game-scripts/weapon-scripts/).

### Default protagonists

<details><summary style="font-size:20px;font-weight:700px;margin:16px;">Main Characters</summary>
<table>
	<thead>
		<tr style="text-align: center;">
			<th>Name</th>
			<th>Player Model</th>
			<th>Arms Model</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>gordon</code></td>
			<td><code>gordon/gordon.mdl</code></td>
			<td><code>v_hands.mdl</code></td>
		</tr>
		<tr>
			<td><code>gordon_citizen</code></td>
			<td><code>gordon/gordon_citizen.mdl</code></td>
			<td><code>c_arms_m_citizen1.mdl</code></td>
		</tr>
		<tr>
			<td><code>alyx</code></td>
			<td><code>alyx.mdl</code></td>
			<td><code>c_arms_alyx.mdl</code></td>
		</tr>
		<tr>
			<td><code>barney</code></td>
			<td><code>barney.mdl</code></td>
			<td><code>c_arms_police.mdl</code></td>
		</tr>
		<tr>
			<td><code>eli</code></td>
			<td><code>eli.mdl</code></td>
			<td><code>c_arms_eli.mdl</code></td>
		</tr>
		<tr>
			<td><code>kleiner</code></td>
			<td><code>kleiner.mdl</code></td>
			<td><code>c_arms_kleiner.mdl</code></td>
		</tr>
		<tr>
			<td><code>monk</code></td>
			<td><code>monk.mdl</code></td>
			<td><code>c_arms_monk.mdl</code></td>
		</tr>
		<tr>
			<td><code>magnusson</code></td>
			<td><code>magnusson.mdl</code></td>
			<td><code>c_arms_magnusson.mdl</code></td>
		</tr>
		<tr>
			<td><code>mossman_ep1</code></td>
			<td><code>mossman.mdl</code></td>
			<td><code>c_arms_mossman_ep1.mdl</code></td>
		</tr>
		<tr>
			<td><code>breen</code></td>
			<td><code>breen.mdl</code></td>
			<td><code>c_arms_breen.mdl</code></td>
		</tr>
	</tbody>
</table>
</details>

<details><summary style="font-size:20px;font-weight:700px;margin:16px;">Citizens</summary>

{% include note.html	txt="Female citizens currently use male citizen arms." %}

<details><summary style="font-size:16px;font-weight:700px;margin:8px;margin-left:32px;">Downtrodden</summary>
<table>
	<thead>
		<tr style="text-align: center;">
			<th>Name</th>
			<th>Player Model</th>
			<th>Arms Model</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>citizen_male_01</code></td>
			<td><code>humans/group01/male_01.mdl</code></td>
			<td><code>c_arms_m_citizen1.mdl</code></td>
		</tr>
		<tr>
			<td><code>citizen_male_02</code></td>
			<td><code>humans/group01/male_02.mdl</code></td>
			<td><code>c_arms_m_citizen2.mdl</code></td>
		</tr>
		<tr>
			<td><code>citizen_male_03</code></td>
			<td><code>humans/group01/male_03.mdl</code></td>
			<td><code>c_arms_m_citizen1.mdl</code></td>
		</tr>
		<tr>
			<td><code>citizen_male_04</code></td>
			<td><code>humans/group01/male_04.mdl</code></td>
			<td><code>c_arms_m_citizen2.mdl</code></td>
		</tr>
		<tr>
			<td><code>citizen_male_05</code></td>
			<td><code>humans/group01/male_05.mdl</code></td>
			<td><code>c_arms_m_citizen1.mdl</code></td>
		</tr>
		<tr>
			<td><code>citizen_male_06</code></td>
			<td><code>humans/group01/male_06.mdl</code></td>
			<td><code>c_arms_m_citizen2.mdl</code></td>
		</tr>
		<tr>
			<td><code>citizen_male_07</code></td>
			<td><code>humans/group01/male_07.mdl</code></td>
			<td><code>c_arms_m_citizen1.mdl</code></td>
		</tr>
		<tr>
			<td><code>citizen_male_08</code></td>
			<td><code>humans/group01/male_08.mdl</code></td>
			<td><code>c_arms_m_citizen2.mdl</code></td>
		</tr>
		<tr>
			<td><code>citizen_male_09</code></td>
			<td><code>humans/group01/male_09.mdl</code></td>
			<td><code>c_arms_m_citizen1.mdl</code></td>
		</tr>
		<tr>
			<td><code>citizen_female_01</code></td>
			<td><code>humans/group01/female_01.mdl</code></td>
			<td><code>c_arms_m_citizen1.mdl</code></td>
		</tr>
		<tr>
			<td><code>citizen_female_02</code></td>
			<td><code>humans/group01/female_02.mdl</code></td>
			<td><code>c_arms_m_citizen2.mdl</code></td>
		</tr>
		<tr>
			<td><code>citizen_female_03</code></td>
			<td><code>humans/group01/female_03.mdl</code></td>
			<td><code>c_arms_m_citizen1.mdl</code></td>
		</tr>
		<tr>
			<td><code>citizen_female_04</code></td>
			<td><code>humans/group01/female_04.mdl</code></td>
			<td><code>c_arms_m_citizen2.mdl</code></td>
		</tr>
		<tr>
			<td><code>citizen_female_06</code></td>
			<td><code>humans/group01/female_06.mdl</code></td>
			<td><code>c_arms_m_citizen1.mdl</code></td>
		</tr>
		<tr>
			<td><code>citizen_female_07</code></td>
			<td><code>humans/group01/female_07.mdl</code></td>
			<td><code>c_arms_m_citizen2.mdl</code></td>
		</tr>
	</tbody>
</table>
</details>

<details><summary style="font-size:16px;font-weight:700px;margin:8px;margin-left:32px;">Refugee</summary>
<table>
	<thead>
		<tr style="text-align: center;">
			<th>Name</th>
			<th>Player Model</th>
			<th>Arms Model</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>refugee_male_01</code></td>
			<td><code>humans/group02/male_01.mdl</code></td>
			<td><code>c_arms_m_refugee1.mdl</code></td>
		</tr>
		<tr>
			<td><code>refugee_male_02</code></td>
			<td><code>humans/group02/male_02.mdl</code></td>
			<td><code>c_arms_m_refugee2.mdl</code></td>
		</tr>
		<tr>
			<td><code>refugee_male_03</code></td>
			<td><code>humans/group02/male_03.mdl</code></td>
			<td><code>c_arms_m_refugee1.mdl</code></td>
		</tr>
		<tr>
			<td><code>refugee_male_04</code></td>
			<td><code>humans/group02/male_04.mdl</code></td>
			<td><code>c_arms_m_refugee2.mdl</code></td>
		</tr>
		<tr>
			<td><code>refugee_male_05</code></td>
			<td><code>humans/group02/male_05.mdl</code></td>
			<td><code>c_arms_m_refugee1.mdl</code></td>
		</tr>
		<tr>
			<td><code>refugee_male_06</code></td>
			<td><code>humans/group02/male_06.mdl</code></td>
			<td><code>c_arms_m_refugee2.mdl</code></td>
		</tr>
		<tr>
			<td><code>refugee_male_07</code></td>
			<td><code>humans/group02/male_07.mdl</code></td>
			<td><code>c_arms_m_refugee1.mdl</code></td>
		</tr>
		<tr>
			<td><code>refugee_male_08</code></td>
			<td><code>humans/group02/male_08.mdl</code></td>
			<td><code>c_arms_m_refugee2.mdl</code></td>
		</tr>
		<tr>
			<td><code>refugee_male_09</code></td>
			<td><code>humans/group02/male_09.mdl</code></td>
			<td><code>c_arms_m_refugee1.mdl</code></td>
		</tr>
		<tr>
			<td><code>refugee_female_01</code></td>
			<td><code>humans/group02/female_01.mdl</code></td>
			<td><code>c_arms_m_refugee1.mdl</code></td>
		</tr>
		<tr>
			<td><code>refugee_female_02</code></td>
			<td><code>humans/group02/female_02.mdl</code></td>
			<td><code>c_arms_m_refugee2.mdl</code></td>
		</tr>
		<tr>
			<td><code>refugee_female_03</code></td>
			<td><code>humans/group02/female_03.mdl</code></td>
			<td><code>c_arms_m_refugee1.mdl</code></td>
		</tr>
		<tr>
			<td><code>refugee_female_04</code></td>
			<td><code>humans/group02/female_04.mdl</code></td>
			<td><code>c_arms_m_refugee2.mdl</code></td>
		</tr>
		<tr>
			<td><code>refugee_female_06</code></td>
			<td><code>humans/group02/female_06.mdl</code></td>
			<td><code>c_arms_m_refugee1.mdl</code></td>
		</tr>
		<tr>
			<td><code>refugee_female_07</code></td>
			<td><code>humans/group02/female_07.mdl</code></td>
			<td><code>c_arms_m_refugee2.mdl</code></td>
		</tr>
	</tbody>
</table>
</details>

<details><summary style="font-size:16px;font-weight:700px;margin:8px;margin-left:32px;">Rebel</summary>
<table>
	<thead>
		<tr style="text-align: center;">
			<th>Name</th>
			<th>Player Model</th>
			<th>Arms Model</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>rebel_male_01</code></td>
			<td><code>humans/group03/male_01.mdl</code></td>
			<td><code>c_arms_m_rebel1.mdl</code></td>
		</tr>
		<tr>
			<td><code>rebel_male_02</code></td>
			<td><code>humans/group03/male_02.mdl</code></td>
			<td><code>c_arms_m_rebel2.mdl</code></td>
		</tr>
		<tr>
			<td><code>rebel_male_03</code></td>
			<td><code>humans/group03/male_03.mdl</code></td>
			<td><code>c_arms_m_rebel2.mdl</code></td>
		</tr>
		<tr>
			<td><code>rebel_male_04</code></td>
			<td><code>humans/group03/male_04.mdl</code></td>
			<td><code>c_arms_m_rebel1.mdl</code></td>
		</tr>
		<tr>
			<td><code>rebel_male_05</code></td>
			<td><code>humans/group03/male_05.mdl</code></td>
			<td><code>c_arms_m_rebel2.mdl</code></td>
		</tr>
		<tr>
			<td><code>rebel_male_06</code></td>
			<td><code>humans/group03/male_06.mdl</code></td>
			<td><code>c_arms_m_rebel1.mdl</code></td>
		</tr>
		<tr>
			<td><code>rebel_male_07</code></td>
			<td><code>humans/group03/male_07.mdl</code></td>
			<td><code>c_arms_m_rebel2.mdl</code></td>
		</tr>
		<tr>
			<td><code>rebel_male_08</code></td>
			<td><code>humans/group03/male_08.mdl</code></td>
			<td><code>c_arms_m_rebel1.mdl</code></td>
		</tr>
		<tr>
			<td><code>rebel_male_09</code></td>
			<td><code>humans/group03/male_09.mdl</code></td>
			<td><code>c_arms_m_rebel1.mdl</code></td>
		</tr>
		<tr>
			<td><code>rebel_female_01</code></td>
			<td><code>humans/group03/female_01.mdl</code></td>
			<td><code>c_arms_m_rebel1.mdl</code></td>
		</tr>
		<tr>
			<td><code>rebel_female_02</code></td>
			<td><code>humans/group03/female_02.mdl</code></td>
			<td><code>c_arms_m_rebel2.mdl</code></td>
		</tr>
		<tr>
			<td><code>rebel_female_03</code></td>
			<td><code>humans/group03/female_03.mdl</code></td>
			<td><code>c_arms_m_rebel1.mdl</code></td>
		</tr>
		<tr>
			<td><code>rebel_female_04</code></td>
			<td><code>humans/group03/female_04.mdl</code></td>
			<td><code>c_arms_m_rebel2.mdl</code></td>
		</tr>
		<tr>
			<td><code>rebel_female_06</code></td>
			<td><code>humans/group03/female_06.mdl</code></td>
			<td><code>c_arms_m_rebel1.mdl</code></td>
		</tr>
		<tr>
			<td><code>rebel_female_07</code></td>
			<td><code>humans/group03/female_07.mdl</code></td>
			<td><code>c_arms_m_rebel1.mdl</code></td>
		</tr>
	</tbody>
</table>
</details>

<details><summary style="font-size:16px;font-weight:700px;margin:8px;margin-left:32px;">Medic</summary>
<table>
	<thead>
		<tr style="text-align: center;">
			<th>Name</th>
			<th>Player Model</th>
			<th>Arms Model</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>medic_male_01</code></td>
			<td><code>humans/group03m/male_01.mdl</code></td>
			<td><code>c_arms_m_medic1.mdl</code></td>
		</tr>
		<tr>
			<td><code>medic_male_02</code></td>
			<td><code>humans/group03m/male_02.mdl</code></td>
			<td><code>c_arms_m_medic2.mdl</code></td>
		</tr>
		<tr>
			<td><code>medic_male_03</code></td>
			<td><code>humans/group03m/male_03.mdl</code></td>
			<td><code>c_arms_m_medic1.mdl</code></td>
		</tr>
		<tr>
			<td><code>medic_male_04</code></td>
			<td><code>humans/group03m/male_04.mdl</code></td>
			<td><code>c_arms_m_medic2.mdl</code></td>
		</tr>
		<tr>
			<td><code>medic_male_05</code></td>
			<td><code>humans/group03m/male_05.mdl</code></td>
			<td><code>c_arms_m_medic1.mdl</code></td>
		</tr>
		<tr>
			<td><code>medic_male_06</code></td>
			<td><code>humans/group03m/male_06.mdl</code></td>
			<td><code>c_arms_m_medic2.mdl</code></td>
		</tr>
		<tr>
			<td><code>medic_male_07</code></td>
			<td><code>humans/group03m/male_07.mdl</code></td>
			<td><code>c_arms_m_medic1.mdl</code></td>
		</tr>
		<tr>
			<td><code>medic_male_08</code></td>
			<td><code>humans/group03m/male_08.mdl</code></td>
			<td><code>c_arms_m_medic2.mdl</code></td>
		</tr>
		<tr>
			<td><code>medic_male_09</code></td>
			<td><code>humans/group03m/male_09.mdl</code></td>
			<td><code>c_arms_m_medic1.mdl</code></td>
		</tr>
		<tr>
			<td><code>medic_female_01</code></td>
			<td><code>humans/group03m/female_01.mdl</code></td>
			<td><code>c_arms_m_medic1.mdl</code></td>
		</tr>
		<tr>
			<td><code>medic_female_02</code></td>
			<td><code>humans/group03m/female_02.mdl</code></td>
			<td><code>c_arms_m_medic2.mdl</code></td>
		</tr>
		<tr>
			<td><code>medic_female_03</code></td>
			<td><code>humans/group03m/female_03.mdl</code></td>
			<td><code>c_arms_m_medic1.mdl</code></td>
		</tr>
		<tr>
			<td><code>medic_female_04</code></td>
			<td><code>humans/group03m/female_04.mdl</code></td>
			<td><code>c_arms_m_medic2.mdl</code></td>
		</tr>
		<tr>
			<td><code>medic_female_06</code></td>
			<td><code>humans/group03m/female_06.mdl</code></td>
			<td><code>c_arms_m_medic2.mdl</code></td>
		</tr>
		<tr>
			<td><code>medic_female_07</code></td>
			<td><code>humans/group03m/female_07.mdl</code></td>
			<td><code>c_arms_m_medic1.mdl</code></td>
		</tr>
	</tbody>
</table>
</details>

</details>

<details><summary style="font-size:20px;font-weight:700px;margin:16px;">Enemies</summary>
<table>
	<thead>
		<tr style="text-align: center;">
			<th>Name</th>
			<th>Player Model</th>
			<th>Skin</th>
			<th>Arms Model</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>police</code></td>
			<td><code>police.mdl</code></td>
			<td><code>0</code></td>
			<td><code>c_arms_police.mdl</code></td>
		</tr>
		<tr>
			<td><code>combine_soldier</code></td>
			<td><code>combine_soldier.mdl</code></td>
			<td><code>0</code></td>
			<td><code>c_arms_combine.mdl</code></td>
		</tr>
		<tr>
			<td><code>combine_soldier_sg</code></td>
			<td><code>combine_soldier_sg.mdl</code></td>
			<td><code>1</code></td>
			<td><code>c_arms_combine.mdl</code></td>
		</tr>
		<tr>
			<td><code>combine_prisonguard</code></td>
			<td><code>combine_soldier_prisonguard.mdl</code></td>
			<td><code>0</code></td>
			<td><code>c_arms_combine.mdl</code></td>
		</tr>
		<tr>
			<td><code>combine_prisonguard_sg</code></td>
			<td><code>combine_soldier_prisonguard.mdl</code></td>
			<td><code>1</code></td>
			<td><code>c_arms_combine.mdl</code></td>
		</tr>
		<tr>
			<td><code>combine_elite</code></td>
			<td><code>combine_super_soldier.mdl</code></td>
			<td><code>0</code></td>
			<td><code>c_arms_combine.mdl</code></td>
		</tr>
		<tr>
			<td><code>combine_soldier_dirty</code></td>
			<td><code>combine_soldirt.mdl</code></td>
			<td><code>0</code></td>
			<td><code>c_arms_combine_dirty.mdl</code></td>
		</tr>
		<tr>
			<td><code>combine_soldier_dirty_sg</code></td>
			<td><code>combine_soldirt.mdl</code></td>
			<td><code>1</code></td>
			<td><code>c_arms_combine_dirty.mdl</code></td>
		</tr>
		<tr>
			<td><code>combine_prisonguard_dirty</code></td>
			<td><code>combine_soldirt_prisonguard.mdl</code></td>
			<td><code>0</code></td>
			<td><code>c_arms_combine_dirty.mdl</code></td>
		</tr>
		<tr>
			<td><code>combine_prisonguard_dirty_sg</code></td>
			<td><code>combine_soldirt_prisonguard.mdl</code></td>
			<td><code>1</code></td>
			<td><code>c_arms_combine_dirty.mdl</code></td>
		</tr>
		<tr>
			<td><code>combine_elite_dirty</code></td>
			<td><code>combine_super_soldirt.mdl</code></td>
			<td><code>0</code></td>
			<td><code>c_arms_combine_dirty.mdl</code></td>
		</tr>
	</tbody>
</table>
</details>
