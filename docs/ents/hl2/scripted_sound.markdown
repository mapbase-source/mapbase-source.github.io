---
layout: article_ent
title: scripted_sound
permalink: /docs/ents/scripted_sound/
breadcrumb: true
ent_icon: assets/entities/scripted_sound.png
type: PointClass
mb_version: 
game: hl2
---

Makes a target entity emit a sound directly, which allows lip syncing, interruption from death or other lines, etc. at the cost of most forms of control. Not exclusive to NPCs.

<br>

---

### KeyValues
{% include ent_kv.html	name="Sound Name"	desc="The sound to play. Supports Game Sounds and direct filenames."	internal="message"	type="sound" %}
{% include ent_kv.html	name="Target Entity"	desc="The entity that should play the sound."	internal="target"	type="target_destination" %}
{% include ent_kv.html	name="Grab All"	desc="Makes all entities play the sound instead of just one."	internal="GrabAll"	type="choices" %}

### Inputs
{% include ent_io.html	name="PlaySound"	desc="Starts the sound."	type="void" %}
{% include ent_io.html	name="PlaySoundOnEntity"	desc="Plays the sound on the specified entity."	type="target_destination" %}
{% include ent_io.html	name="StopSound"	desc="Stops the sound if it is playing."	type="void" %}
{% include ent_io.html	name="SetSound"	desc="Sets the sound."	type="string" %}
