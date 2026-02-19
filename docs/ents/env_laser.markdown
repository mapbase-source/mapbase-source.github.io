---
layout: article_ent
title: env_laser
permalink: /docs/ents/env_laser/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

An entity that creates a laser beam between itself and a given target.

<br>

---

### Inputs
{% include ent_io.html	name="SetTarget"	desc="Sets the laser's target."	type="target_destination" %}

### Outputs
{% include ent_io.html	name="OnTouchedByEntity"	desc="Fired when an entity touches the laser. Please note this fires for each frame the entity is touching, unlike env_beam."	type="void" %}
