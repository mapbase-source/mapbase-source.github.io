---
layout: article_ent
title: env_physexplosion
permalink: /docs/ents/env_physexplosion/
breadcrumb: true
ent_icon: assets/entities/env_physexplosion.png
type: PointClass
mb_version: -1
game: 
---

An entity that creates an explosion at its origin. If the no-damage spawnflag is set, the explosion won't be visible, but will apply force to any physics objects within its radius.

<br>

---

### Inputs
{% include ent_io.html	name="ExplodeAndRemove"	desc="Triggers the explosion and then removes the entity."	type="void" %}
