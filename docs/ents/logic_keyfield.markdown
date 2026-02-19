---
layout: article_ent
title: logic_keyfield
permalink: /docs/ents/logic_keyfield/
breadcrumb: true
ent_icon: assets/entities/logic_keyfield.png
type: PointClass
mb_version: 
game: 
---

A logic entity that could read an entity's keyfields. Use the target and key name options if you want to store a specific target and/or keyvalue. Use the 'Test' input to look for the key within the target's datadesc. The 'OutValue' output will fire with the keyfield's value if it is found.

Please note that some keyvalues do not work with this entity. (most do though, so don't worry about it)

<br>

---

### KeyValues
{% include ent_kv.html	name="Target Entity"	desc="The entity with the key to measure."	internal="target"	type="target_destination" %}
{% include ent_kv.html	name="Key Name"	desc="The name of the key to measure."	internal="keyname"	type="string" %}

### Inputs
{% include ent_io.html	name="Test"	desc="Gets the stored key's value from stored target."	type="void" %}
{% include ent_io.html	name="TestKey"	desc="Tests the specified key against the target instead of using the stored key. Does not change the stored key."	type="string" %}
{% include ent_io.html	name="TestTarget"	desc="Tests the specified target against the key instead of using the stored target. Does not change the stored target."	type="target_destination" %}
{% include ent_io.html	name="SetKey"	desc="Sets the key to measure."	type="string" %}
{% include ent_io.html	name="SetValue"	desc="Sets the stored target's stored key value to the specified string."	type="string" %}

### Outputs
{% include ent_io.html	name="OutValue"	desc="Fires when a keyfield is found. Passes its value."	type="string" %}
{% include ent_io.html	name="OnFailed"	desc="Fires when this entity fails to find the specified keyfield."	type="void" %}
