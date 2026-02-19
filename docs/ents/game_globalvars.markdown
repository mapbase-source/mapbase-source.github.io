---
layout: article_ent
title: game_globalvars
permalink: /docs/ents/game_globalvars/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

Outputs a few global variables when requested.

<br>

---

### Inputs
{% include ent_io.html	name="GetCurtime"	desc="Gets curtime."	type="void" %}
{% include ent_io.html	name="GetFrameCount"	desc="Gets frame count."	type="void" %}
{% include ent_io.html	name="GetFrametime"	desc="Gets frame time."	type="void" %}
{% include ent_io.html	name="GetTickCount"	desc="Gets tick count."	type="void" %}
{% include ent_io.html	name="GetIntervalPerTick"	desc="Gets interval per tick."	type="void" %}

### Outputs
{% include ent_io.html	name="OutCurtime"	desc="Outputs curtime."	type="float" %}
{% include ent_io.html	name="OutFrameCount"	desc="Outputs frame count."	type="integer" %}
{% include ent_io.html	name="OutFrametime"	desc="Outputs frame time."	type="float" %}
{% include ent_io.html	name="OutTickCount"	desc="Outputs tick count."	type="integer" %}
{% include ent_io.html	name="OutIntervalPerTick"	desc="Outputs interval per tick."	type="integer" %}
