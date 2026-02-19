---
layout: article_ent
title: filter_blood_control
permalink: /docs/ents/filter_blood_control/
breadcrumb: true
ent_icon: assets/entities/filter_blood_control.png
type: FilterClass
mb_version: 
game: 
---

A filter that controls the blood an entity emits. Must be used as a damage filter to work properly.

<br>

---

### KeyValues
{% include ent_kv.html	name="Blood Disabled"	desc="Sets whether blood shouldn't be produced by damage. Overrides the secondary filter, if any."	internal="BloodDisabled"	type="choices" %}
{% include ent_kv.html	name="Secondary filter is damage filter"	desc="Sets whether the secondary filter should be treated as a redirected damage filter (must pass to take actual damage) instead of just permitting blood."	internal="SecondaryFilterMode"	type="choices" %}

### Inputs
{% include ent_io.html	name="DisableBlood"	desc="Disables blood."	type="void" %}
{% include ent_io.html	name="EnableBlood"	desc="Enables blood if it was previously disabled."	type="void" %}
