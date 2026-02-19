---
layout: article_ent
title: logic_measure_direction
permalink: /docs/ents/logic_measure_direction/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

An entity that can measure the direction of an entity relative to another entity and apply the position the entity is looking at to a third entity.

<br>

---

### KeyValues
{% include ent_kv.html	name="Trace distance"	desc="The maximum distance that the trace can go. 0 = no limit."	internal="TraceDistance"	type="float" %}
{% include ent_kv.html	name="Trace Mask"	desc="How the measurement tracing should act in regards to what it should collide with."	internal="Mask"	type="choices" %}
{% include ent_kv.html	name="Collision Group"	desc="The collision group the measurement tracing should use."	internal="CollisionGroup"	type="choices" %}
{% include ent_kv.html	name="Trace Filter"	desc="A filter to use for tracing."	internal="damagefilter"	type="filterclass" %}
{% include ent_kv.html	name="Trace Filter behavior"	desc="What the filter should actually be used for."	internal="HitIfPassed"	type="choices" %}
{% include ent_kv.html	name="Additional trace from movement reference"	desc="Initiates another trace from the Movement Reference using the existing properties and adjusts the position to its end point. Only use this if the Movement Reference is different from the Measure Reference."	internal="TraceTargetReference"	type="choices" %}

### Inputs
{% include ent_io.html	name="SetTraceFilter"	desc="Sets the entity to use as the trace filter. Pass in an empty string to clear the trace filter."	type="target_destination" %}
