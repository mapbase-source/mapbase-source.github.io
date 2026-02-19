---
layout: article_ent
title: combine_mine
permalink: /docs/ents/combine_mine/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: hl2
---

A bouncing Combine mine. Mapbase adds a few new I/O/KV, but probably not enough.

<br>

---

### KeyValues
{% include ent_kv.html	name="Delay"	desc="The delay after being triggered before this mine bounces, or before it explodes if bouncing is disabled. Does not apply to the cavern type."	internal="ExplosionDelay"	type="float" %}
{% include ent_kv.html	name="Initial State"	desc="The initial state of this mine."	internal="InitialState"	type="choices" %}
{% include ent_kv.html	name="Cheap Warn Sound"	desc="Makes the mine's warn sound use generic sound methods instead of a sound patch, which is cheaper and doesn't continuously take up audio channels. Use this for areas with tons of active mines."	internal="CheapWarnSound"	type="choices" %}
{% include ent_kv.html	name="Start Friendly"	desc="Makes this mine friendly, as if it was placed by the player."	internal="Friendly"	type="choices" %}
{% include ent_kv.html	name="Enemy Filter"	desc="Makes this combine_mine target specific NPCs as enemies. It will also use its default targets unless ''Filter Exclusive'' is enabled."	internal="enemyfilter"	type="filterclass" %}
{% include ent_kv.html	name="Friend Filter"	desc="Makes this combine_mine target specific NPCs as friends. It will also use its default targets unless ''Filter Exclusive'' is enabled."	internal="friendfilter"	type="filterclass" %}
{% include ent_kv.html	name="Filter Exclusive"	desc="If enabled, the filters will be the exclusive factor in determining whether a mine is friendly or hostile towards a target. Entities that pass neither filter will be ignored by the mine."	internal="FilterExclusive"	type="choices" %}
{% include ent_kv.html	name="LOS method"	desc="Controls what the mine can't see through when looking for enemies. Useful for when you want mines to see through grates and fences."	internal="LOSMask"	type="choices" %}
{% include ent_kv.html	name="Unavoidable"	desc="If true, this mine will not be avoided by companion NPCs."	internal="SetUnavoidable"	type="choices" %}
{% include ent_kv.html	name="Plant Orientation (Pitch Yaw Roll)"	desc="Sets a custom angle for the mine to consider ''upright'' for planting itself."	internal="PlantOrientation"	type="angle" %}

### Inputs
{% include ent_io.html	name="Bounce"	desc="Causes this mine to instantly bounce straight up into the air."	type="void" %}
{% include ent_io.html	name="BounceAtTarget"	desc="Causes this mine to bounce at the specified entity, regardless of distance."	type="target_destination" %}
{% include ent_io.html	name="SetEnemyFilter"	desc="Changes this mine's enemy filter to the named filter."	type="target_destination" %}
{% include ent_io.html	name="SetFriendFilter"	desc="Changes this mine's friend filter to the named filter."	type="target_destination" %}
{% include ent_io.html	name="SetUnavoidable"	desc="Sets whether this mine will not be avoided by companion NPCs."	type="bool" %}
{% include ent_io.html	name="SetPlantOrientation"	desc="Sets the mine's plant orientation as an angle."	type="vector" %}
{% include ent_io.html	name="SetPlantOrientationRaw"	desc="Sets the mine's plant orientation as a direction vector."	type="vector" %}

### Outputs
{% include ent_io.html	name="OnTriggered"	desc="Fires when this mine is triggered by an enemy."	type="void" %}
{% include ent_io.html	name="OnExplode"	desc="Fires when this mine actually explodes."	type="void" %}
