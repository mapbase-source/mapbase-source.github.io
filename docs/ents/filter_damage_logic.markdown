---
layout: article_ent
title: filter_damage_logic
permalink: /docs/ents/filter_damage_logic/
breadcrumb: true
ent_icon: assets/entities/filter_damage_logic.png
type: FilterClass
mb_version: 
game: 
---

A filter that fires outputs based on received damage information.

<br>

---

### KeyValues
{% include ent_kv.html	name="Secondary Filter Mode"	desc="Sets how the secondary filter should be treated."	internal="SecondaryFilterMode"	type="choices" %}

### Outputs
{% include ent_io.html	name="OutInflictor"	desc="Outputs the damage inflictor."	type="ehandle" %}
{% include ent_io.html	name="OutAttacker"	desc="Outputs the damage attacker."	type="ehandle" %}
{% include ent_io.html	name="OutWeapon"	desc="Outputs the damage weapon."	type="ehandle" %}
{% include ent_io.html	name="OutDamage"	desc="Outputs the damage."	type="float" %}
{% include ent_io.html	name="OutMaxDamage"	desc="Outputs the max damage."	type="float" %}
{% include ent_io.html	name="OutBaseDamage"	desc="Outputs the base damage."	type="float" %}
{% include ent_io.html	name="OutDamageType"	desc="Outputs the damage type."	type="integer" %}
{% include ent_io.html	name="OutDamageCustom"	desc="Outputs the damage custom."	type="integer" %}
{% include ent_io.html	name="OutDamageStats"	desc="Outputs the damage stats."	type="integer" %}
{% include ent_io.html	name="OutAmmoType"	desc="Outputs the ammo type."	type="integer" %}
{% include ent_io.html	name="OutDamageForce"	desc="Outputs the damage force."	type="vector" %}
{% include ent_io.html	name="OutDamagePosition"	desc="Outputs the damage position."	type="vector" %}
{% include ent_io.html	name="OutForceFriendlyFire"	desc="Outputs whether the damage info forces friendly fire."	type="bool" %}
