---
layout: article_ent
title: trigger_waterydeath
permalink: /docs/ents/trigger_waterydeath/
breadcrumb: true
ent_icon: 
type: SolidClass
mb_version: -1
game: hl2
---

A trigger volume that spawns leeches around entities inside it, and does damage to them until they die. Used to prevent players entering deep water.

<br>

---

### KeyValues
{% include ent_kv.html	name="Bite Interval"	desc="The amount of time that should pass in between leech bites."	internal="BiteInterval"	type="float" %}
{% include ent_kv.html	name="Pain Step"	desc="Damage will increase by this number for each leech bite."	internal="PainStep"	type="float" %}
{% include ent_kv.html	name="Max Pain"	desc="This is the maximum damage that could be attained after multiple pain steps."	internal="MaxPain"	type="float" %}

### Outputs
{% include ent_io.html	name="OnDamage"	desc="Fires each time an entity takes damage."	type="integer" %}
