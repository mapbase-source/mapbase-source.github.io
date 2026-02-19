---
layout: article_ent
title: logic_measure_movement
permalink: /docs/ents/logic_measure_movement/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

An entity that can measure the movement of an entity relative to another entity and apply that movement to a third entity.

<br>

---

### KeyValues
{% include ent_kv.html	name="Fire position outputs"	desc="Allows OutPosition and OutAngles to be fired with the resulting position while this entity is active. Does not apply to the GetPosition input."	internal="ShouldOutputPosition"	type="choices" %}
{% include ent_kv.html	name="Measurement Attachment"	desc="Only useful for the ''Attachment point'' measurement type. This attachment should be on the Entity to Measure and measurements will correspond to its position and angles."	internal="MeasureAttachment"	type="string" %}

### Flags
{% include ent_sf.html	name="[1] Ignore X"	bit="1" %}
{% include ent_sf.html	name="[2] Ignore Y"	bit="2" %}
{% include ent_sf.html	name="[4] Ignore Z"	bit="4" %}
{% include ent_sf.html	name="[8] Use 'Ignore' flags for origin instead of angles"	bit="8" %}
{% include ent_sf.html	name="[16] Use new teleportation rules (smoother movement)"	bit="16" %}
{% include ent_sf.html	name="[32] Don't change target's angles"	bit="32" %}

### Inputs
{% include ent_io.html	name="SetTarget"	desc="Set the Entity to Move, which will be moved to mimic the measured entity."	type="target_destination" %}
{% include ent_io.html	name="SetMeasureType"	desc="Sets the measurement type."	type="integer" %}
{% include ent_io.html	name="SetMeasureAttachment"	desc="Sets the measurement attachment."	type="string" %}
{% include ent_io.html	name="ShouldOutputPosition"	desc="Sets whether we are allowed to fire position outputs while this entity is active."	type="bool" %}
{% include ent_io.html	name="GetPosition"	desc="Initiates a single measurement with the current settings, only firing OutPosition and OutAngles without moving anything. (it doesn't need a target to be available)
This input ignores the 'Fire position outputs' keyvalue and instead repurposes it to modify who the outputs' activator should be.
If 'Fire position outputs' is enabled, the target will be used as the activator if it is available.
If 'Fire position outputs' is disabled, the activator that fired GetPosition will be used instead."	type="void" %}

### Outputs
{% include ent_io.html	name="OutPosition"	desc="Outputs the resulting position when allowed."	type="vector" %}
{% include ent_io.html	name="OutAngles"	desc="Outputs the resulting angles when allowed."	type="vector" %}
