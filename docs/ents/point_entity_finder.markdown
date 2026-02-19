---
layout: article_ent
title: point_entity_finder
permalink: /docs/ents/point_entity_finder/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

An entity that will find an entity and pass it along as the !Caller with the OutEntity output.  Requires using !Caller as the parameter on the input.

<br>

---

### KeyValues
{% include ent_kv.html	name="Filter Name"	desc="Filter to use to narrow set of findable entities. See filter_activator_name for more explanation."	internal="filtername"	type="filterclass" %}
{% include ent_kv.html	name="Reference Entity"	desc="Name of the entity to use when evaluating criteria.  For example, when using 'Nearest', this is the entity that distance will be measured from.  If left blank will use the point_entity_finder."	internal="referencename"	type="target_destination" %}
{% include ent_kv.html	name="Search Method"	desc="None"	internal="Method"	type="choices" %}

### Inputs
{% include ent_io.html	name="FindEntity"	desc="Find an entity that meets the specified criteria.  Will fire OutEntity if found and pass the entity as !Caller."	type="void" %}

### Outputs
{% include ent_io.html	name="OnFoundEntity"	desc="Fired when FindEntity is input and an entity was found. Passes the found entity as !Caller."	type="void" %}
