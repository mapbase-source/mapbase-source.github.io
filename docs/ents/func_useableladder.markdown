---
layout: article_ent
title: func_useableladder
permalink: /docs/ents/func_useableladder/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

A Half-Life 2 ladder. Handles player auto mount/unmount, as well as +use to get onto the ladder. 

See also 'info_ladder_dismount', used to specify ladder auto-dismount points.

Note: This entity is non-functional in Counter-Strike: Source. Use func_ladder instead.

<br>

---

### Inputs
{% include ent_io.html	name="ForcePlayerOn"	desc="Forces the player onto this ladder, no matter what."	type="void" %}
{% include ent_io.html	name="CheckPlayerOn"	desc="Acts like the player just +USEd this ladder, taking distance and obstructions into account."	type="void" %}
