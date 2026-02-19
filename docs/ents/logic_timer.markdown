---
layout: article_ent
title: logic_timer
permalink: /docs/ents/logic_timer/
breadcrumb: true
ent_icon: assets/entities/logic_timer.png
type: PointClass
mb_version: -1
game: 
---

An entity that fires a timer event at regular, or random, intervals. It can also be set to oscillate betweena high and low end, in which case it will fire alternating high/low outputs each time it fires.

<br>

---

### KeyValues
{% include ent_kv.html	name="Limit Timer Inputs"	desc="Allows the Minumum/Maximum Random Interval keyvalues to limit the total timer value when it receives AddToTimer or SubtractFromTimer inputs."	internal="UseBoundsForTimerInputs"	type="choices" %}
