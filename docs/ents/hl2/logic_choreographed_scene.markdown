---
layout: article_ent
title: logic_choreographed_scene
permalink: /docs/ents/logic_choreographed_scene/
breadcrumb: true
ent_icon: assets/entities/choreo_scene.png
type: PointClass
mb_version: -1
game: hl2
---

Manages a choreographed scene of one or more actors.

<br>

---

### KeyValues
{% include ent_kv.html	name="Resume scene file/concept"	desc="An optional scene file or response concept to play before resuming the scene when it's interrupted. (Response concepts must select a scene file!)"	internal="ResumeSceneFile"	type="scene" %}

### Inputs
{% include ent_io.html	name="PauseAtLastInterrupt"	desc="Pauses playback of the scene and rewinds it to the last interrupt event in the scene."	type="void" %}
{% include ent_io.html	name="Trigger"	desc="Fires the OnTrigger output of the specified number."	type="integer" %}
{% include ent_io.html	name="SetTarget1"	desc="Sets this target to the specified entity."	type="target_destination" %}
{% include ent_io.html	name="SetTarget2"	desc="Sets this target to the specified entity."	type="target_destination" %}
{% include ent_io.html	name="SetTarget3"	desc="Sets this target to the specified entity."	type="target_destination" %}
{% include ent_io.html	name="SetTarget4"	desc="Sets this target to the specified entity."	type="target_destination" %}
{% include ent_io.html	name="SetTarget5"	desc="Sets this target to the specified entity."	type="target_destination" %}
{% include ent_io.html	name="SetTarget6"	desc="Sets this target to the specified entity."	type="target_destination" %}
{% include ent_io.html	name="SetTarget7"	desc="Sets this target to the specified entity."	type="target_destination" %}
{% include ent_io.html	name="SetTarget8"	desc="Sets this target to the specified entity."	type="target_destination" %}
