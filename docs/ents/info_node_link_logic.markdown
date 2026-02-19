---
layout: article_ent
title: info_node_link_logic
permalink: /docs/ents/info_node_link_logic/
breadcrumb: true
ent_icon: assets/entities/info_node_link.png
type: PointClass
mb_version: 
game: 
---

A variant of info_node_link that fires outputs when a NPC tries to use it. Otherwise functions identically to a regular info_node_link.

<br>

---

### Outputs
{% include ent_io.html	name="OnUsageAccepted"	desc="Fires when a NPC uses this link after meeting all of the requirements."	type="void" %}
{% include ent_io.html	name="OnUsageAcceptedWhileDisabled"	desc="Fires when a NPC that meets all of the requirements tries to use this link, but it's disabled."	type="void" %}
