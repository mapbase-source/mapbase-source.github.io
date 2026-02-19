---
layout: article_ent
title: ai_goal_fear
permalink: /docs/ents/ai_goal_fear/
breadcrumb: true
ent_icon: assets/entities/ai_goal_fear.png
type: PointClass
mb_version: 
game: hl2
---

AI Goal Fear

Allows player allies to use fear withdrawal points and other fear behavior otherwise unique with npc_hunters. Citizens will still engage in fear behavior with npc_hunters, but this allows them to use it with other NPCs.

<br>

---

### KeyValues
{% include ent_kv.html	name="Actor(s) to affect"	desc="NPC(s) that should engage in fear behavior."	internal="actor"	type="target_name_or_class" %}
{% include ent_kv.html	name="Fear Target"	desc="Target to fear. Only applies whenever the actors' relationship to the target is D_FR. Supports wildcards and can be a classname or an entity name."	internal="target"	type="target_destination" %}
{% include ent_kv.html	name="Search Type"	desc="How to search for the entities using the targetname."	internal="SearchType"	type="choices" %}
{% include ent_kv.html	name="Start Active"	desc="None"	internal="StartActive"	type="choices" %}

### Inputs
{% include ent_io.html	name="Activate"	desc="Begin modifying fear behavior"	type="void" %}
{% include ent_io.html	name="Deactivate"	desc="Cease modifying fear behavior"	type="void" %}

### Outputs
{% include ent_io.html	name="OnArrivedAtNode"	desc="Fires when we arrive at a fear withdrawal node. The node is the activator and the NPC is the caller."	type="void" %}
