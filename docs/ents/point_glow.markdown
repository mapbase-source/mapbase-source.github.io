---
layout: article_ent
title: point_glow
permalink: /docs/ents/point_glow/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

Mapbase off-shoot of tf_glow

<br>

---

### KeyValues
{% include ent_kv.html	name="Target"	desc="One target only."	internal="target"	type="target_destination" %}
{% include ent_kv.html	name="Glow Color"	desc="<r> <g> <b> <a> 0-255"	internal="GlowColor"	type="color255" %}

### Inputs
{% include ent_io.html	name="SetGlowColor"	desc="<r> <g> <b> <a> 0-255"	type="color255" %}
{% include ent_io.html	name="Toggle"	desc="Toggles this entity."	type="void" %}
