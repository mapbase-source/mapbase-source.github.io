---
layout: article_ent
title: info_template_link_controller
permalink: /docs/ents/info_template_link_controller/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

An entity that controls all connections between nodes that intersect the controller's volume. This allows for mass enabling/disabling of all node connections through a volume.

NOTE: Due to the way this works, using info_node_link_logic may cause several identical instances of the outputs to be fired instead of one. One way to remedy this by passing your action through a relay with fast refire disabled.

<br>

---

### KeyValues
{% include ent_kv.html	name="Reference Template"	desc="The point_template whose first template would be used as a reference for all of this controller's links. The first template MUST be info_node_link or an entity derived from it, like info_node_link_filtered."	internal="ReferenceTemplate"	type="target_destination" %}
