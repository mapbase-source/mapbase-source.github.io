---
layout: article_ent
title: logic_eventlistener
permalink: /docs/ents/logic_eventlistener/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

An entity that can listen to events fired from code and fire an output when it happens.

<br>

---

### KeyValues
{% include ent_kv.html	name="Event Name"	desc="The name of the event that you want to listen for."	internal="EventName"	type="string" %}
{% include ent_kv.html	name="Start Disabled"	desc="None"	internal="StartDisabled"	type="choices" %}

### Inputs
{% include ent_io.html	name="Enable"	desc="Enables this entity."	type="void" %}
{% include ent_io.html	name="Disable"	desc="Disables this entity."	type="void" %}
{% include ent_io.html	name="Toggle"	desc="Toggles this entity."	type="void" %}

### Outputs
{% include ent_io.html	name="OnEventFired"	desc="Fires when the event has been detected."	type="void" %}
