---
layout: article_ent
title: point_viewcontrol
permalink: /docs/ents/point_viewcontrol/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

A camera entity that controls the player's view. While it's active, the player will see out of the camera.

<br>

---

### KeyValues
{% include ent_kv.html	name="FOV"	desc="The player's FOV when using this camera. Be sure to have the 'Set FOV' spawnflag enabled if you want to use this."	internal="fov"	type="float" %}
{% include ent_kv.html	name="FOV rate"	desc="How quickly the FOV should be set. Be sure to have the 'Set FOV' spawnflag enabled if you want to use this."	internal="fov_rate"	type="float" %}
{% include ent_kv.html	name="Don't set player view"	desc="Prevents this point_viewcontrol from actually controlling the player's view. FOV, player-affecting spawnflags, etc. may still happen."	internal="DontSetPlayerView"	type="choices" %}

### Flags
{% include ent_sf.html	name="[128] Set FOV"	bit="128" %}
{% include ent_sf.html	name="[256] Allow fixed behavior (can move without look target, removal stops softlock, etc.)"	bit="256" %}

### Outputs
{% include ent_io.html	name="OnStartFollow"	desc="Fired when the point_viewcontrol activates, usually due to the Enable input being received."	type="void" %}
