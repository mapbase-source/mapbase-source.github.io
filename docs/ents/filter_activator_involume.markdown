---
layout: article_ent
title: filter_activator_involume
permalink: /docs/ents/filter_activator_involume/
breadcrumb: true
ent_icon: assets/entities/filter_involume.png
type: FilterClass
mb_version: 
game: 
---

A filter that tests whether the activator is within a volume.

<br>

---

### KeyValues
{% include ent_kv.html	name="Volume"	desc="The volume to be tested with. This filter passes if the activator is within this volume. Intended to be a brush entity. (e.g. a trigger)"	internal="target"	type="target_destination" %}
{% include ent_kv.html	name="Volume Tester"	desc="Who should be in the volume for the filter to pass?"	internal="tester"	type="target_destination" %}
