---
layout: article_ent
title: env_break_shooter
permalink: /docs/ents/env_break_shooter/
breadcrumb: true
ent_icon: assets/entities/env_shooter.png
type: PointClass
mb_version: 
game: 
---

An entity that shoots func_breakable gibs.

<br>

---

### KeyValues
{% include ent_kv.html	name="Model"	desc="Thing(s) to shoot out. The choices only matter when the model type is Breakable Chunks. If a specific model is needed, enter its file path. If a point_template is needed, enter the point_template's name."	internal="model"	type="choices" %}
{% include ent_kv.html	name="Model Type"	desc="The type of model to use."	internal="modeltype"	type="choices" %}
{% include ent_kv.html	name="Gib Count"	desc="Number of gibs to create."	internal="SetCount"	type="integer" %}
{% include ent_kv.html	name="Delay"	desc="Delay until gibs are shot."	internal="SetDelay"	type="float" %}
{% include ent_kv.html	name="Gib Size"	desc="The size of each gib."	internal="SetGibSize"	type="vector" %}
{% include ent_kv.html	name="Gib Speed"	desc="The speed of each gib."	internal="SetGibSpeed"	type="float" %}
{% include ent_kv.html	name="Randomization"	desc="The gib direction randomization factor."	internal="SetRandomization"	type="integer" %}
{% include ent_kv.html	name="Lifetime"	desc="The lifetime of each gib."	internal="SetLifetime"	type="float" %}
{% include ent_kv.html	name="Gib Flags"	desc="The flags for each gib."	internal="SetGibFlags"	type="integer" %}

### Inputs
{% include ent_io.html	name="Shoot"	desc="Shoots the gibs."	type="void" %}
{% include ent_io.html	name="SetCount"	desc="Sets the number of gibs to create."	type="integer" %}
{% include ent_io.html	name="SetDelay"	desc="Sets the delay until gibs are shot."	type="float" %}
{% include ent_io.html	name="SetGibSize"	desc="Sets the size of each gib."	type="vector" %}
{% include ent_io.html	name="SetGibSpeed"	desc="Sets the speed of each gib."	type="float" %}
{% include ent_io.html	name="SetRandomization"	desc="Sets the gib direction randomization factor."	type="integer" %}
{% include ent_io.html	name="SetLifetime"	desc="Sets the lifetime of each gib."	type="float" %}
{% include ent_io.html	name="SetGibFlags"	desc="Sets the flags for each gib."	type="integer" %}
