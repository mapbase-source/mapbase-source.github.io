---
layout: article_ent
title: info_node_link_filtered
permalink: /docs/ents/info_node_link_filtered/
breadcrumb: true
ent_icon: assets/entities/info_node_link.png
type: PointClass
mb_version: 
game: 
---

A variant of info_node_link that uses an entity filter. Only entities that pass the specified filter can use this link. While disabled, the filter is disregarded and filtering is handed to the regular exclusion rules.

<br>

---

### KeyValues
{% include ent_kv.html	name="Link Filter"	desc="Name of the filter entity that controls which entities can use this link."	internal="damagefilter"	type="filterclass" %}
{% include ent_kv.html	name="Usage"	desc="Causes the link to use slightly different behavior."	internal="Usage"	type="choices" %}

### Inputs
{% include ent_io.html	name="SetLinkFilter"	desc="Sets the link's filter."	type="target_destination" %}
