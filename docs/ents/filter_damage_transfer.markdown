---
layout: article_ent
title: filter_damage_transfer
permalink: /docs/ents/filter_damage_transfer/
breadcrumb: true
ent_icon: assets/entities/filter_damage_transfer.png
type: FilterClass
mb_version: 
game: 
---

Whenever an entity using this as a damage filter takes damage, that damage is transferred to another entity. The entity using this filter will not take the damage unless a secondary filter is specified and passed or caller damage is allowed. All damage information including force, type, attacker, etc. should be retained during the transfer and it obeys the target entity's own damage filters.

<br>

---

### KeyValues
{% include ent_kv.html	name="Transfer Target"	desc="The name of the entity/entities that will receive the damage. Please note that this complies with their own damage filters."	internal="target"	type="target_destination" %}
{% include ent_kv.html	name="Adjust Damage Position"	desc="Adjusts the damage position to be relative to the target entity."	internal="AdjustDamagePosition"	type="choices" %}
{% include ent_kv.html	name="Max Entities"	desc="The maximum number of entities matching the criteria who can be damaged. 0 = no limit. (0 is actually changed to 2048 internally, but don't worry about that)"	internal="MaxEntities"	type="integer" %}
{% include ent_kv.html	name="Caller Damage Allowed"	desc="Sets whether the caller using this filter is allowed to take the transferred damage as well."	internal="CallerDamageAllowed"	type="choices" %}
{% include ent_kv.html	name="Secondary Filter Mode"	desc="How should the secondary filter be used?"	internal="SecondaryFilterMode"	type="choices" %}
