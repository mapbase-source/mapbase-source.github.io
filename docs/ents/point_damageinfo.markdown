---
layout: article_ent
title: point_damageinfo
permalink: /docs/ents/point_damageinfo/
breadcrumb: true
ent_icon: assets/entities/point_damageinfo.png
type: PointClass
mb_version: 
game: 
---

Applies damage with full control over the variables of CTakeDamageInfo, providing as much precision as possible.

<br>

---

### KeyValues
{% include ent_kv.html	name="Damage Custom"	desc="A special, game-specific identifier mostly used in mods or multiplayer games."	internal="DamageCustom"	type="integer" %}
{% include ent_kv.html	name="Damage Stats"	desc="Function unknown, possibly unused"	internal="DamageStats"	type="integer" %}
{% include ent_kv.html	name="Force Friendly Fire"	desc="Disregards friendly fire safechecks and applies the damage regardless of the attacker's relationship to the victim."	internal="ForceFriendlyFire"	type="choices" %}
{% include ent_kv.html	name="Ammo Type"	desc="Uses a specific ammo type by order in the ammo def. (not to be confused with damage type)"	internal="AmmoType"	type="integer" %}
{% include ent_kv.html	name="Player Penetration Count"	desc="Presumably how many players the inflictor has gone through before reaching the current victim. Appears to be unused in singleplayer games."	internal="PlayerPenetrationCount"	type="integer" %}
{% include ent_kv.html	name="Damaged Other Players"	desc="Function unknown, possibly unused"	internal="DamagedOtherPlayers"	type="integer" %}
{% include ent_kv.html	name="Damage Force"	desc="The force to apply when the damage is applied."	internal="DamageForce"	type="vector" %}
{% include ent_kv.html	name="Damage Position"	desc="What position the damage took place."	internal="DamagePosition"	type="vector" %}
{% include ent_kv.html	name="Reported Position"	desc="Function unknown, possibly related to multidamage (buckshot)"	internal="ReportedPosition"	type="vector" %}
{% include ent_kv.html	name="Suppress Death Sound"	desc="Attempts to suppress the target entity's death sound."	internal="SuppressDeathSound"	type="choices" %}

### Inputs
{% include ent_io.html	name="SetInflictor"	desc="Sets the inflictor."	type="target_destination" %}
{% include ent_io.html	name="SetAttacker"	desc="Sets the attacker."	type="target_destination" %}
{% include ent_io.html	name="SetWeapon"	desc="Sets the weapon."	type="target_destination" %}
{% include ent_io.html	name="SetDamage"	desc="Sets the damage."	type="integer" %}
{% include ent_io.html	name="SetMaxDamage"	desc="Sets the max damage."	type="integer" %}
{% include ent_io.html	name="SetDamageBonus"	desc="Sets the damage bonus."	type="integer" %}
{% include ent_io.html	name="SetDamageType"	desc="Sets the damage type."	type="integer" %}
{% include ent_io.html	name="SetDamageCustom"	desc="Sets the damage custom."	type="integer" %}
{% include ent_io.html	name="SetDamageStats"	desc="Sets the damage stats."	type="integer" %}
{% include ent_io.html	name="SetForceFriendlyFire"	desc="Sets force friendly fire."	type="bool" %}
{% include ent_io.html	name="SetAmmoType"	desc="Sets the ammo type."	type="integer" %}
{% include ent_io.html	name="SetPlayerPenetrationCount"	desc="Sets player penetration count."	type="integer" %}
{% include ent_io.html	name="SetDamagedOtherPlayers"	desc="Sets damaged other players."	type="integer" %}
{% include ent_io.html	name="SetDamageForce"	desc="Sets the damage force."	type="vector" %}
{% include ent_io.html	name="SetDamagePosition"	desc="Sets the damage position."	type="vector" %}
{% include ent_io.html	name="SetReportedPosition"	desc="Sets the reported position."	type="vector" %}
{% include ent_io.html	name="ApplyDamage"	desc="Applies damage."	type="void" %}
{% include ent_io.html	name="ApplyDamageToEntity"	desc="Applies damage to a specific entity."	type="target_destination" %}

### Outputs
{% include ent_io.html	name="OnApplyDamage"	desc="Fires for every entity that takes our damage, using that as the activator."	type="void" %}
{% include ent_io.html	name="OnApplyDeath"	desc="Fires for every entity that dies from our damage, using that as the activator."	type="void" %}
