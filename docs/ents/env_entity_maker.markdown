---
layout: article_ent
title: env_entity_maker
permalink: /docs/ents/env_entity_maker/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

Spawns the specified entity template at its origin. If set to auto-spawn, it will spawn the template whenever there's room and the player is looking elsewhere.

<br>

---

### Inputs
{% include ent_io.html	name="ForceSpawnAtEntityCenter"	desc="Spawns an instance of the template at the specified entity's world space center and angles."	type="target_destination" %}
{% include ent_io.html	name="ForceSpawnAtPosition"	desc="Spawn an instance of the template at the specified position (has env_entity_maker's angles)"	type="vector" %}

### Outputs
{% include ent_io.html	name="OutSpawnedEntity"	desc="Fired for each entity spawned by this template, passing said entity as the parameter and activator."	type="ehandle" %}
