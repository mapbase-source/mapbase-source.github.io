---
layout: article_ent
title: logic_relay
permalink: /docs/ents/logic_relay/
breadcrumb: true
ent_icon: assets/entities/logic_relay.png
type: PointClass
mb_version: -1
game: 
---

A message forwarder. Fires an OnTrigger output when triggered, and can be disabled to prevent forwarding outputs.

Useful as an intermediary between one entity and another for turning on or off an I/O connection, or as a container for holding a set of outputs that can be triggered from multiple places.

<br>

---

### Inputs
{% include ent_io.html	name="TriggerWithParameter"	desc="Triggers the relay with a parameter, causing its OnTriggerParameter output to fire if it is enabled."	type="string" %}
{% include ent_io.html	name="EnableRefire"	desc="If fast retrigger is disabled, the relay will not be able to fire again until its most delayed output has been fired. This input allows the relay to fire again early if it is in this state."	type="void" %}

### Outputs
{% include ent_io.html	name="OnTriggerParameter"	desc="Fired when the relay is triggered with a parameter. If the relay is set to only trigger once, it will delete itself after firing this output."	type="string" %}
