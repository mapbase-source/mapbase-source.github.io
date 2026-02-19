---
layout: article_ent
title: point_bugbait
permalink: /docs/ents/point_bugbait/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: hl2
---

Bugbait sensor point

<br>

---

### KeyValues
{% include ent_kv.html	name="Use Radius Keyvalue"	desc="If disabled, use mins and maxs."	internal="useradius"	type="choices" %}
{% include ent_kv.html	name="Mins"	desc="None"	internal="bmins"	type="vector" %}
{% include ent_kv.html	name="Maxs"	desc="None"	internal="bmaxs"	type="vector" %}

### Inputs
{% include ent_io.html	name="EnableRadius"	desc="Use the Radius keyvalue of the sensor."	type="void" %}
{% include ent_io.html	name="DisableRadius"	desc="Use the mins/maxs keyvalues of the sensor."	type="void" %}
{% include ent_io.html	name="SetRadius"	desc="Sets the radius of the sensor."	type="integer" %}
{% include ent_io.html	name="SetMins"	desc="Sets the mins of the sensor."	type="vector" %}
{% include ent_io.html	name="SetMaxs"	desc="Sets the maxs of the sensor."	type="vector" %}
