---
layout: article_ent
title: logic_random_outputs
permalink: /docs/ents/logic_random_outputs/
breadcrumb: true
ent_icon: assets/entities/logic_random_outputs.png
type: PointClass
mb_version: 
game: 
---

A message forwarder. Fires up to eight separate outputs, each with a different chance of firing.

<br>

---

### KeyValues
{% include ent_kv.html	name="OnTrigger1 Chance"	desc="Chance (from 0 to 1) of the OnTrigger1 output firing when this entity is triggered."	internal="OnTriggerChance1"	type="float" %}
{% include ent_kv.html	name="OnTrigger2 Chance"	desc="Chance (from 0 to 1) of the OnTrigger2 output firing when this entity is triggered."	internal="OnTriggerChance2"	type="float" %}
{% include ent_kv.html	name="OnTrigger3 Chance"	desc="Chance (from 0 to 1) of the OnTrigger3 output firing when this entity is triggered."	internal="OnTriggerChance3"	type="float" %}
{% include ent_kv.html	name="OnTrigger4 Chance"	desc="Chance (from 0 to 1) of the OnTrigger4 output firing when this entity is triggered."	internal="OnTriggerChance4"	type="float" %}
{% include ent_kv.html	name="OnTrigger5 Chance"	desc="Chance (from 0 to 1) of the OnTrigger5 output firing when this entity is triggered."	internal="OnTriggerChance5"	type="float" %}
{% include ent_kv.html	name="OnTrigger6 Chance"	desc="Chance (from 0 to 1) of the OnTrigger6 output firing when this entity is triggered."	internal="OnTriggerChance6"	type="float" %}
{% include ent_kv.html	name="OnTrigger7 Chance"	desc="Chance (from 0 to 1) of the OnTrigger7 output firing when this entity is triggered."	internal="OnTriggerChance7"	type="float" %}
{% include ent_kv.html	name="OnTrigger8 Chance"	desc="Chance (from 0 to 1) of the OnTrigger8 output firing when this entity is triggered."	internal="OnTriggerChance8"	type="float" %}

### Flags
{% include ent_sf.html	name="[1] Only trigger once"	bit="1" %}
{% include ent_sf.html	name="[2] Allow fast retrigger"	bit="2" %}

### Inputs
{% include ent_io.html	name="Trigger"	desc="Trigger this entity, causing its OnTrigger outputs to fire if it is enabled."	type="void" %}
{% include ent_io.html	name="Toggle"	desc="Toggle this entity between enabled and disabled."	type="void" %}

### Outputs
{% include ent_io.html	name="OnSpawn"	desc="Fired when this entity is spawned. If this entity is set to only trigger once, it will delete itself after firing this output."	type="void" %}
{% include ent_io.html	name="OnTrigger1"	desc="This output has a chance to fire when the entity is triggered."	type="void" %}
{% include ent_io.html	name="OnTrigger2"	desc="This output has a chance to fire when the entity is triggered."	type="void" %}
{% include ent_io.html	name="OnTrigger3"	desc="This output has a chance to fire when the entity is triggered."	type="void" %}
{% include ent_io.html	name="OnTrigger4"	desc="This output has a chance to fire when the entity is triggered."	type="void" %}
{% include ent_io.html	name="OnTrigger5"	desc="This output has a chance to fire when the entity is triggered."	type="void" %}
{% include ent_io.html	name="OnTrigger6"	desc="This output has a chance to fire when the entity is triggered."	type="void" %}
{% include ent_io.html	name="OnTrigger7"	desc="This output has a chance to fire when the entity is triggered."	type="void" %}
{% include ent_io.html	name="OnTrigger8"	desc="This output has a chance to fire when the entity is triggered."	type="void" %}
