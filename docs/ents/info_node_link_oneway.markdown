---
layout: article_ent
title: info_node_link_oneway
permalink: /docs/ents/info_node_link_oneway/
breadcrumb: true
ent_icon: assets/entities/info_node_link.png
type: PointClass
mb_version: 
game: 
---

A variant of info_node_link that only works from one direction. Navigation requests from the start node to the end node will always pass, but requests from the end node to the start node will not be allowed. If the link is disabled, the link will work from neither direction. Exclusion rules still apply and excluded NPCs will be able to cross from the opposite direction.

<br>

---

### KeyValues
{% include ent_kv.html	name="Usage"	desc="Causes the link to use slightly different behavior."	internal="Usage"	type="choices" %}
