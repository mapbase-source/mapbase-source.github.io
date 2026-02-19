---
layout: article_ent
title: env_beam
permalink: /docs/ents/env_beam/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

An entity that creates a visible beam between two points. The points can be attached to entities to make the beam move around.

<br>

---

### Inputs
{% include ent_io.html	name="Noise"	desc="Set the noise of the beam, in pixels."	type="float" %}
{% include ent_io.html	name="SetStartEntity"	desc="Sets the start entity."	type="target_destination" %}
{% include ent_io.html	name="SetEndEntity"	desc="Sets the end entity."	type="target_destination" %}
