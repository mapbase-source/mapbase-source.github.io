---
layout: article_ent
title: logic_relay_queue
permalink: /docs/ents/logic_relay_queue/
breadcrumb: true
ent_icon: assets/entities/logic_relay_queue.png
type: PointClass
mb_version: 
game: 
---

A special variant of logic_relay designed to queue trigger inputs. If the relay is still handling its I/O connections after being triggered, additional Trigger inputs will be queued and automatically fire when the relay is able to be re-fired. Activator, output ID, and parameter are all kept and saved. Inputs are added to the queue each time Trigger or TriggerWithParameter are received while the relay is disabled or still handling its current I/O connections. The first one in the queue will trigger the moment an opportunity becomes available and the next one in the queue will wait for that one.

This is useful for when you don't want something to happen multiple times at once, but don't want to discard further requests either.

<br>

---

### KeyValues
{% include ent_kv.html	name="Maximum Items"	desc="The maximum number of Trigger and TriggerWithParameter inputs allowed in the queue. Any others received while this value is full will be discarded. Keep in mind this does not count the I/O chain currently being handled."	internal="SetMaxQueueItems"	type="integer" %}
{% include ent_kv.html	name="Don't queue when disabled"	desc="Prevents the relay from queuing inputs when disabled. This means inputs will only be queued when enabled and still handling its current I/O connections."	internal="DontQueueWhenDisabled"	type="choices" %}

### Inputs
{% include ent_io.html	name="Trigger"	desc="Triggers the relay, causing its OnTrigger output to fire if it is enabled."	type="void" %}
{% include ent_io.html	name="TriggerWithParameter"	desc="Triggers the relay with a parameter, causing its OnTriggerParameter output to fire if it is enabled."	type="string" %}
{% include ent_io.html	name="Toggle"	desc="Toggle the relay between enabled and disabled."	type="void" %}
{% include ent_io.html	name="EnableRefire"	desc="If fast retrigger is disabled, the relay will not be able to fire again until its most delayed output has been fired. This input allows the relay to fire again early if it is in this state."	type="void" %}
{% include ent_io.html	name="ClearQueue"	desc="Clears the input queue."	type="void" %}
{% include ent_io.html	name="SetMaxQueueItems"	desc="Sets the maximum queue items."	type="integer" %}

### Outputs
{% include ent_io.html	name="OnTrigger"	desc="Fired when the relay is triggered."	type="void" %}
{% include ent_io.html	name="OnTriggerParameter"	desc="Fired when the relay is triggered with a parameter."	type="string" %}
