---
layout: article_ent
title: env_zoom
permalink: /docs/ents/env_zoom/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

An entity that can be used to control the player's FOV. Useful for scenes where the player's view is being controlled, or player-usable binoculars/telescopes, etc.

<br>

---

### Inputs
{% include ent_io.html	name="UnZoomWithRate"	desc="Stop controlling the player's FOV and returns to the original FOV with the same rate it used to reach it."	type="void" %}
{% include ent_io.html	name="SetZoomRate"	desc="Sets the amount of time it should take to reach the specified FOV."	type="float" %}
