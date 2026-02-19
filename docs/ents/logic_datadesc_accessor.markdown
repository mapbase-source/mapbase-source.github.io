---
layout: article_ent
title: logic_datadesc_accessor
permalink: /docs/ents/logic_datadesc_accessor/
breadcrumb: true
ent_icon: assets/entities/logic_datadesc_accessor.png
type: PointClass
mb_version: 
game: 
---

A logic entity that could read or write any field in an entity's data description, keyvalue or not, based on its internal name. It otherwise functions identically to logic_keyfield.

You'd better know what you're doing.

<br>

---

### KeyValues
{% include ent_kv.html	name="Target Entity"	desc="The entity whose data description will be measured."	internal="target"	type="target_destination" %}
{% include ent_kv.html	name="Element Name"	desc="The internal name (e.g. m_iName) of the field to measure. Use the ''ent_info_datatable'' command followed by an entity's class name to see all of their fields."	internal="keyname"	type="string" %}

### Inputs
{% include ent_io.html	name="Test"	desc="Gets the stored field's value from stored target."	type="void" %}
{% include ent_io.html	name="TestKey"	desc="Tests the specified field against the target instead of using the stored field. Does not change the stored field."	type="string" %}
{% include ent_io.html	name="TestTarget"	desc="Tests the specified target against the field instead of using the stored target. Does not change the stored target."	type="target_destination" %}
{% include ent_io.html	name="SetKey"	desc="Sets the field to measure."	type="string" %}
{% include ent_io.html	name="SetValue"	desc="Sets the stored target's stored field to the specified string."	type="string" %}

### Outputs
{% include ent_io.html	name="OutValue"	desc="Fires when a field is found. Passes its value."	type="string" %}
{% include ent_io.html	name="OnFailed"	desc="Fires when this entity fails to find the specified field."	type="void" %}
