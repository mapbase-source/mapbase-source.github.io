---
layout: article_ent
title: ambient_generic
permalink: /docs/ents/ambient_generic/
breadcrumb: true
ent_icon: assets/entities/ambient_generic.png
type: PointClass
mb_version: -1
game: 
---

Universal ambient sound. Use it to play and control a single sound.

<br>

---

### KeyValues
{% include ent_kv.html	name="Sound Flags"	desc="Additional options for your sound."	internal="soundflags"	type="choices" %}

### Inputs
{% include ent_io.html	name="SetSound"	desc="Sets the sound this ambient_generic should play."	type="string" %}

### Outputs
{% include ent_io.html	name="OnSoundFinished"	desc="Fires when the sound finishes playing. NOTE: This sound should be set to pause when the game is paused."	type="void" %}
