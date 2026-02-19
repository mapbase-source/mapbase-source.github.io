---
layout: article_ent
title: vgui_movie_display
permalink: /docs/ents/vgui_movie_display/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

Movie Display

<br>

---

### KeyValues
{% include ent_kv.html	name="Display Text"	desc="None"	internal="displaytext"	type="string" %}
{% include ent_kv.html	name="Movie Filename"	desc="None"	internal="moviefilename"	type="string" %}
{% include ent_kv.html	name="Group Name"	desc="None"	internal="groupname"	type="string" %}
{% include ent_kv.html	name="Loop Movie"	desc="None"	internal="looping"	type="choices" %}
{% include ent_kv.html	name="Mute Movie"	desc="None"	internal="muted"	type="choices" %}
{% include ent_kv.html	name="Panel width"	desc="Width of the panel in units."	internal="width"	type="integer" %}
{% include ent_kv.html	name="Panel height"	desc="Height of the panel in units."	internal="height"	type="integer" %}

### Inputs
{% include ent_io.html	name="Enable"	desc="Make movie visible."	type="void" %}
{% include ent_io.html	name="Disable"	desc="Make movie invisible."	type="void" %}
{% include ent_io.html	name="SetDisplayText"	desc="Sets the display text."	type="string" %}
