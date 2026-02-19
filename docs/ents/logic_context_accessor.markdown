---
layout: article_ent
title: logic_context_accessor
permalink: /docs/ents/logic_context_accessor/
breadcrumb: true
ent_icon: assets/entities/logic_context_accessor.png
type: PointClass
mb_version: 
game: 
---

A logic entity that could read an entity's response contexts. Use the target and context name keyvalues if you want to store a specific target and/or context. Use the 'Test' input to look for the context on the target. The 'OutValue' output will fire with the context's value if it is found.

<br>

---

### KeyValues
{% include ent_kv.html	name="Target Entity"	desc="The entity with the context to measure."	internal="target"	type="target_destination" %}
{% include ent_kv.html	name="Context Name"	desc="The name of the context to measure."	internal="context"	type="string" %}

### Inputs
{% include ent_io.html	name="Test"	desc="Gets the stored context's value from stored target."	type="void" %}
{% include ent_io.html	name="TestContext"	desc="Tests the specified context against the target instead of using the stored context. Does not change the stored context."	type="string" %}
{% include ent_io.html	name="TestTarget"	desc="Tests the specified target against the context instead of using the stored target. Does not change the stored target."	type="target_destination" %}
{% include ent_io.html	name="SetContext"	desc="Sets the context to measure."	type="string" %}
{% include ent_io.html	name="SetValue"	desc="Sets the stored target's stored context value to the specified string."	type="string" %}

### Outputs
{% include ent_io.html	name="OutValue"	desc="Fires when a context is found. Passes its value."	type="string" %}
{% include ent_io.html	name="OnFailed"	desc="Fires when this entity fails to find the specified context."	type="void" %}
