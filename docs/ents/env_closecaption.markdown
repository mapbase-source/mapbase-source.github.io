---
layout: article_ent
title: env_closecaption
permalink: /docs/ents/env_closecaption/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

Sends a CC token via the 'Send' input. Unfortunately, this does not allow you to make your own and you can only use existing ones.

<br>

---

### KeyValues
{% include ent_kv.html	name="Flags"	desc="Flags."	internal="flags"	type="choices" %}
{% include ent_kv.html	name="Duration"	desc="The duration of the CC."	internal="duration"	type="float" %}

### Inputs
{% include ent_io.html	name="Send"	desc="Sends a CC."	type="string" %}
