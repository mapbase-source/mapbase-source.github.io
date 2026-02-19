---
layout: article_ent
title: filter_damage_mod
permalink: /docs/ents/filter_damage_mod/
breadcrumb: true
ent_icon: assets/entities/filter_damage_mod.png
type: FilterClass
mb_version: 
game: 
---

A filter that modifies damage taken by an entity.

<br>

---

### KeyValues
{% include ent_kv.html	name="Damage Multiplier"	desc="Multiplies the damage by this scale."	internal="SetDamageMultiplier"	type="float" %}
{% include ent_kv.html	name="Damage Addend"	desc="Adds to or subtracts the damage by this number. This is done after the damage is multiplied by the damage scale."	internal="SetDamageAddend"	type="float" %}
{% include ent_kv.html	name="Damage Bits Added"	desc="Adds bits to the damage type. See a damage type keyvalue in an entity like filter_damage_type to get their bit representation."	internal="SetDamageBitsAdded"	type="integer" %}
{% include ent_kv.html	name="Damage Bits Removed"	desc="Removes bits from the damage type. See a damage type keyvalue in an entity like filter_damage_type to get their bit representation."	internal="SetDamageBitsRemoved"	type="integer" %}
{% include ent_kv.html	name="New Attacker"	desc="If specified, the damage will be credited to this entity instead of the original attacker."	internal="NewAttacker"	type="target_destination" %}
{% include ent_kv.html	name="New Inflictor"	desc="If specified, the damage's inflictor will be changed to this entity instead of the original inflictor."	internal="NewInflictor"	type="target_destination" %}
{% include ent_kv.html	name="New Weapon"	desc="If specified, the damage's weapon will be changed to this entity instead of the original weapon."	internal="NewWeapon"	type="target_destination" %}
{% include ent_kv.html	name="Secondary Filter Mode"	desc="Sets whether the secondary filter should be treated as a redirected damage filter (must pass to take actual damage) instead of just permitting modification."	internal="SecondaryFilterMode"	type="choices" %}

### Inputs
{% include ent_io.html	name="SetDamageMultiplier"	desc="Sets the damage multiplier."	type="float" %}
{% include ent_io.html	name="SetDamageAddend"	desc="Sets the damage addend."	type="float" %}
{% include ent_io.html	name="SetDamageBitsAdded"	desc="Sets the damage types added."	type="integer" %}
{% include ent_io.html	name="SetDamageBitsRemoved"	desc="Sets the damage types removed."	type="integer" %}
{% include ent_io.html	name="SetNewAttacker"	desc="Sets the new attacker."	type="target_destination" %}
{% include ent_io.html	name="SetNewInflictor"	desc="Sets the new inflictor."	type="target_destination" %}
{% include ent_io.html	name="SetNewWeapon"	desc="Sets the new weapon."	type="target_destination" %}
