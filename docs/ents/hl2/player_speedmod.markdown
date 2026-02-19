---
layout: article_ent
title: player_speedmod
permalink: /docs/ents/player_speedmod/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: hl2
---

Speeds up or slows down player velocity over time (slow mo/fast forward)

<br>

---

### KeyValues
{% include ent_kv.html	name="Additional Buttons"	desc="Additional buttons to suppress, other than those listed in the spawnflags. Advanced users only."	internal="AdditionalButtons"	type="integer" %}

### Flags
{% include ent_sf.html	name="[256] Don't suppress flashlight"	bit="256" %}

### Inputs
{% include ent_io.html	name="Enable"	desc="Enables the spawnflag abilities without actually modifying the player's speed."	type="void" %}
{% include ent_io.html	name="Disable"	desc="Disables the spawnflag abilities without actually modifying the player's speed."	type="void" %}
{% include ent_io.html	name="SetAdditionalButtons"	desc="Sets the additional suppressed buttons."	type="integer" %}
