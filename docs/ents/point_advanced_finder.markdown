---
layout: article_ent
title: point_advanced_finder
permalink: /docs/ents/point_advanced_finder/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

An enhanced entity finder that finds entities that pass a filter and fires OnFoundEntity for each of them.

<br>

---

### KeyValues
{% include ent_kv.html	name="Filter Name"	desc="The filter to use that finds what entit(ies) we're looking for."	internal="SearchFilter"	type="filterclass" %}
{% include ent_kv.html	name="Search Point"	desc="This is the entity in which distance and radius is measured from. Leave blank to use the finder itself."	internal="SearchPoint"	type="target_destination" %}
{% include ent_kv.html	name="Radius"	desc="The radius in which entities can be found. Leave 0 for infinite."	internal="radius"	type="float" %}
{% include ent_kv.html	name="Max Results"	desc="The number of entities that can be found by this finder. 0 = No limit."	internal="NumberOfEntities"	type="integer" %}
{% include ent_kv.html	name="Output Delay"	desc="OnFoundEntity fires once for each entity every X number of seconds. Deleted/killed/removed entities will not be skipped and a chain cannot be canceled, even if the finder is removed. Look into a more manual alternative if you do not want these side effects. Leave 0 for no delay."	internal="OutputDelay"	type="float" %}
{% include ent_kv.html	name="Search Method"	desc="None"	internal="Method"	type="choices" %}

### Inputs
{% include ent_io.html	name="BeginSearch"	desc="Begins finding entities with all of the current options."	type="void" %}
{% include ent_io.html	name="SetSearchFilter"	desc="Sets the search filter."	type="target_destination" %}
{% include ent_io.html	name="SetSearchPoint"	desc="Sets the search point."	type="target_destination" %}
{% include ent_io.html	name="SetRadius"	desc="Sets the search radius."	type="float" %}
{% include ent_io.html	name="SetMaxResults"	desc="Sets the maximum entities that could be found by this finder."	type="integer" %}
{% include ent_io.html	name="SetOutputDelay"	desc="Sets the delay in between outputs."	type="float" %}
{% include ent_io.html	name="SetFiringMethod"	desc="Sets the search method."	type="integer" %}

### Outputs
{% include ent_io.html	name="OnFoundEntity"	desc="Fires for each entity found, passing it as the parameter and the activator."	type="ehandle" %}
{% include ent_io.html	name="OnSearchFailed"	desc="Fired when this finder couldn't find any entities."	type="void" %}
