---
layout: article_ent
title: logic_playmovie
permalink: /docs/ents/logic_playmovie/
breadcrumb: true
ent_icon: assets/entities/logic_playmovie.png
type: PointClass
mb_version: 
game: 
---

Plays a movie and allows for various playback options

<br>

---

### KeyValues
{% include ent_kv.html	name="Movie to play"	desc="Filename of the movie to play"	internal="MovieFilename"	type="string" %}
{% include ent_kv.html	name="Allow User to Skip"	desc="Whether or not the user may skip the video with common keys"	internal="allowskip"	type="choices" %}
{% include ent_kv.html	name="Loop Video"	desc="If set to true, the movie will loop forever"	internal="loopvideo"	type="choices" %}
{% include ent_kv.html	name="Mute Video"	desc="If set to true, the movie will not produce any sound"	internal="mute"	type="choices" %}

### Inputs
{% include ent_io.html	name="PlayMovie"	desc="Play the movie."	type="void" %}
{% include ent_io.html	name="StopMovie"	desc="Stop the movie if it is currently playing."	type="void" %}

### Outputs
{% include ent_io.html	name="OnPlaybackFinished"	desc="Fired when the movie has completed playing back, was skipped by the user, or was stopped with StopMovie."	type="void" %}
