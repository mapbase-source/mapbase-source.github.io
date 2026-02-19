---
layout: article_ent
title: info_player_view_proxy
permalink: /docs/ents/info_player_view_proxy/
breadcrumb: true
ent_icon: assets/entities/info_target.png
type: PointClass
mb_version: 
game: hl2
---

Copies a player's view as if they're at a different position. Intended to be used with script_intro.

<br>

---

### KeyValues
{% include ent_kv.html	name="Start Activated"	desc="Starts with position offsetting enabled."	internal="Enabled"	type="choices" %}
{% include ent_kv.html	name="Measure Reference"	desc="Used for logic_measure_movement-based offsetting. The movement of the player will be measured relative to this entity."	internal="MeasureReference"	type="target_destination" %}
{% include ent_kv.html	name="Movement Reference"	desc="Used for logic_measure_movement-based offsetting. The info_player_position_offset will move relative to this entity."	internal="TargetReference"	type="target_destination" %}
{% include ent_kv.html	name="Movement scale"	desc="Used for logic_measure_movement-based offsetting. This is a scale to *divide* the measured movements by before applying those movements to this entity."	internal="TargetScale"	type="float" %}

### Inputs
{% include ent_io.html	name="Activate"	desc="Begin offsetting."	type="void" %}
{% include ent_io.html	name="Deactivate"	desc="Stop offsetting."	type="void" %}
