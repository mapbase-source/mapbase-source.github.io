---
layout: article_ent
title: logic_register_activator
permalink: /docs/ents/logic_register_activator/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

Stores an entity and sends messages with it as the activator
Useful for keeping track of entities with mangled names due to template spawners and instances.

<br>

---

### Inputs
{% include ent_io.html	name="Toggle"	desc="Toggle between enabled and disabled."	type="void" %}
{% include ent_io.html	name="FireRegisteredAsActivator1"	desc="Start a message from this entity using the matching OnRegisteredActivating - but the activator is the registered entity."	type="void" %}
{% include ent_io.html	name="FireRegisteredAsActivator2"	desc="Start a message from this entity using the matching OnRegisteredActivating - but the activator is the registered entity."	type="void" %}
{% include ent_io.html	name="FireRegisteredAsActivator3"	desc="Start a message from this entity using the matching OnRegisteredActivating - but the activator is the registered entity."	type="void" %}
{% include ent_io.html	name="FireRegisteredAsActivator4"	desc="Start a message from this entity using the matching OnRegisteredActivating - but the activator is the registered entity."	type="void" %}
{% include ent_io.html	name="RegisterEntity"	desc="Stores an entity to later be used as an activator."	type="target_destination" %}

### Outputs
{% include ent_io.html	name="OnRegisteredActivate1"	desc="Fired to send a message using the registered as the activator."	type="void" %}
{% include ent_io.html	name="OnRegisteredActivate2"	desc="Fired to send a message using the registered as the activator."	type="void" %}
{% include ent_io.html	name="OnRegisteredActivate3"	desc="Fired to send a message using the registered as the activator."	type="void" %}
{% include ent_io.html	name="OnRegisteredActivate4"	desc="Fired to send a message using the registered as the activator."	type="void" %}
