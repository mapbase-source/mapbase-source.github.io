---
layout: article_ent
title: logic_playerproxy
permalink: /docs/ents/logic_playerproxy/
breadcrumb: true
ent_icon: assets/entities/logic_playerproxy.png
type: PointClass
mb_version: -1
game: 
---

An entity that is used to relay inputs/ouputs to the player and back to the world.

<br>

---

### KeyValues
{% include ent_kv.html	name="Max Input Armor"	desc="Sets the maximum armor a player can receive from the AddArmor, RemoveArmor, and SetArmor inputs. This does NOT override how much armor a player can receive overall!"	internal="SetMaxInputArmor"	type="integer" %}
{% include ent_kv.html	name="Suit Zoom FOV"	desc="Sets the FOV value the player's suit zoom function should use."	internal="SetSuitZoomFOV"	type="integer" %}
{% include ent_kv.html	name="Response Contexts"	desc="Response system context(s) for the player. Format should be: 'key:value,key2:value2,etc'. Using inputs like AddContext on this player proxy will not carry it over to the player and should be done on the '!player' entity instead."	internal="ResponseContext"	type="string" %}
{% include ent_kv.html	name="Hide squad HUD"	desc="Hides the player's squad status HUD above the ammo display."	internal="HideSquadHUD"	type="choices" %}
{% include ent_kv.html	name="Hands Viewmodel"	desc="Custom hands viewmodel. Requires weapon viewmodels that support them."	internal="HandsVM"	type="studio" %}
{% include ent_kv.html	name="Hands Viewmodel Skin"	desc="Skin for the custom hands viewmodel."	internal="HandsVMSkin"	type="string" %}
{% include ent_kv.html	name="Hands Viewmodel Bodygroup"	desc="Bodygroup value for the custom hands viewmodel."	internal="HandsVMBody"	type="string" %}
{% include ent_kv.html	name="Protagonist Name"	desc="Sets the player to a specific protagonist from scripts/protagonists/protagonists_manifest.txt. [Currently HL2 only]"	internal="ProtagonistName"	type="string" %}

### Inputs
{% include ent_io.html	name="RequestPlayerArmor"	desc="Requests the current player's armor from the proxy. This will fire the PlayerArmor output with the value."	type="void" %}
{% include ent_io.html	name="RequestPlayerAuxPower"	desc="Requests the current player's auxiliary power from the proxy. This will fire the PlayerAuxPower output with the value."	type="void" %}
{% include ent_io.html	name="RequestPlayerFlashBattery"	desc="Requests the current player's current flashlight battery from the proxy. This will fire the PlayerFlashBattery output with the value.

NOTE: If legacy flashlight is enabled (aux power flashlight), this will return the player's current auxiliary power."	type="void" %}
{% include ent_io.html	name="GetAmmoOnWeapon"	desc="Requests the amount of ammo on the specified weapon, if the player has it. Fires OnGetAmmo with the amount. This has a few quirks:

Fires with secondary ammo if the classname starts with '@' at the beginning. (e.g. @weapon_smg1)
Uses the player's active weapon if the parameter is null. Use '@' to get secondary ammo on the active weapon.
Does not fire if the player does not have the specified weapon."	type="string" %}
{% include ent_io.html	name="SetHandModel"	desc="Sets the player's hands viewmodel."	type="string" %}
{% include ent_io.html	name="SetHandModelSkin"	desc="Sets the skin of the player's hands viewmodel."	type="integer" %}
{% include ent_io.html	name="SetHandModelBodyGroup"	desc="Sets the bodygroup of the player's hands viewmodel."	type="integer" %}
{% include ent_io.html	name="SetPlayerDrawLegs"	desc="Sets whether the player should draw its model beneath the camera."	type="bool" %}
{% include ent_io.html	name="SetPlayerDrawExternally"	desc="Sets whether the player should show up in mirrors, cameras, etc."	type="bool" %}
{% include ent_io.html	name="SetMaxInputArmor"	desc="Sets the maximum armor value that could be set by armor inputs."	type="integer" %}
{% include ent_io.html	name="SetSuitZoomFOV"	desc="Sets the FOV used by suit zoom."	type="integer" %}
{% include ent_io.html	name="SetProtagonist"	desc="Sets the player's protagonist entry."	type="string" %}

### Outputs
{% include ent_io.html	name="PlayerArmor"	desc="The player's current armor value, fired in response to RequestPlayerArmor."	type="integer" %}
{% include ent_io.html	name="PlayerAuxPower"	desc="The player's current auxiliary power value, fired in response to RequestPlayerArmor."	type="float" %}
{% include ent_io.html	name="PlayerFlashBattery"	desc="The player's current flashlight battery percentage, fired in response to RequestPlayerFlashBattery."	type="float" %}
{% include ent_io.html	name="OnGetAmmo"	desc="Fires in response to GetAmmoOnWeapon with the weapon's ammo amount."	type="integer" %}
{% include ent_io.html	name="OnSquadMemberKilled"	desc="Fires when a member of the player's squad dies. Fires with this member as the activator."	type="void" %}
{% include ent_io.html	name="PlayerDamaged"	desc="Fires when the player is damaged."	type="void" %}
{% include ent_io.html	name="OnPlayerSpawn"	desc="Fired when the player spawns or respawns, using the spawn point as the caller."	type="void" %}
