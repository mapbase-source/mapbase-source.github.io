---
layout: article_ent
title: ai_weaponmodifier
permalink: /docs/ents/ai_weaponmodifier/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
notice: banner_obsolete.html
reason: Unfinished before Mapbase's release; Due to the way it's coded, it may be either non-functional or highly unstable.
---

Modifies a NPC's weapon shot regulation.

<br>

---

### KeyValues
{% include ent_kv.html	name="Target(s)"	desc="The NPC(s) that will be modified by default."	internal="Target"	type="target_destination" %}
{% include ent_kv.html	name="Burst Interval"	desc="The range for a random amount of time the should pass between each shot in a burst. Format: 'min:max'"	internal="BurstInterval"	type="string" %}
{% include ent_kv.html	name="Rest Interval"	desc="The range for a random amount of time the should pass between bursts. Format: 'min:max'"	internal="RestInterval"	type="string" %}
{% include ent_kv.html	name="Burst Shot Count Range"	desc="The range for a random amount of shots that should be fired in a bursts. Format: 'min:max'"	internal="BurstShotCountRange"	type="string" %}

### Inputs
{% include ent_io.html	name="EnableOnNPC"	desc="Applies weapon modification to a specific NPC."	type="target_destination" %}
{% include ent_io.html	name="DisableOnNPC"	desc="Stops applying weapon modification to a specific NPC."	type="target_destination" %}
{% include ent_io.html	name="SetBurstInterval"	desc="Sets the burst interval. Follows the same format as the keyvalue."	type="string" %}
{% include ent_io.html	name="SetRestInterval"	desc="Sets the rest interval. Follows the same format as the keyvalue."	type="string" %}
{% include ent_io.html	name="SetBurstShotCountRange"	desc="Sets the burst shot count range. Follows the same format as the keyvalue."	type="string" %}
{% include ent_io.html	name="SetBurstShotsRemaining"	desc="Sets how many shots are left in the current burst."	type="integer" %}
{% include ent_io.html	name="EnableShooting"	desc="Enables shooting if it was disabled."	type="void" %}
{% include ent_io.html	name="DisableShooting"	desc="Disables shooting."	type="void" %}
{% include ent_io.html	name="FireNoEarlierThan"	desc="Causes the NPC to stop firing for this amount of time."	type="float" %}
{% include ent_io.html	name="Reset"	desc="Causes the shot regulator to reset. If 1 is passed, the NPC will immediately start firing instead of waiting for the next burst interval."	type="bool" %}
