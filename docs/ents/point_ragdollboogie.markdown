---
layout: article_ent
title: point_ragdollboogie
permalink: /docs/ents/point_ragdollboogie/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

An entity that makes ragdolls dance.

<br>

---

### KeyValues
{% include ent_kv.html	name="Boogie target(s)"	desc="The one(s) that must boogie. prop_ragdolls have no hassle, but NPCs will have to break them elbows and become prop_ragdolls themselves (a.k.a. die) in order to boogie."	internal="target"	type="target_destination" %}
{% include ent_kv.html	name="Start time"	desc="How long after we've received the 'Activate' input should ragdolls boogie?"	internal="StartTime"	type="float" %}
{% include ent_kv.html	name="Boogie length"	desc="How long should the boogie last? Can be a range with a lower bound and a higher bound, e.g. ''2.5,4.0'' (no quotes)"	internal="BoogieLength"	type="float" %}
{% include ent_kv.html	name="Magnitude"	desc="How intense is the boogie?"	internal="Magnitude"	type="float" %}
{% include ent_kv.html	name="Zap Color"	desc="The color of each tesla beam on an electrical boogie."	internal="ZapColor"	type="color255" %}

### Flags
{% include ent_sf.html	name="[65536] Electrical"	bit="65536" %}
{% include ent_sf.html	name="[131072] Narrow arcs (must be electrical)"	bit="131072" %}

### Inputs
{% include ent_io.html	name="Activate"	desc="Makes the targets dance."	type="void" %}
{% include ent_io.html	name="Deactivate"	desc="Makes the targets stop dancing, if they're still dancing."	type="void" %}
{% include ent_io.html	name="BoogieTarget"	desc="Boogies specific target(s) without using or modifying our target field."	type="target_destination" %}
{% include ent_io.html	name="SetZapColor"	desc="Sets the zap color."	type="color255" %}
