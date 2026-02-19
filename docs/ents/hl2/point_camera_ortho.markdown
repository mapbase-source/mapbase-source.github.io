---
layout: article_ent
title: point_camera_ortho
permalink: /docs/ents/point_camera_ortho/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: hl2
---

Orthographic Camera

<br>

---

### KeyValues
{% include ent_kv.html	name="Ortho Top"	desc="The ortho's top dimension. Will be FOV if 0."	internal="Ortho0"	type="float" %}
{% include ent_kv.html	name="Ortho Bottom"	desc="The ortho's bottom dimension. Will be a negative version of the top if 0."	internal="Ortho1"	type="float" %}
{% include ent_kv.html	name="Ortho Left"	desc="The ortho's left dimension. Will be the top if 0."	internal="Ortho2"	type="float" %}
{% include ent_kv.html	name="Ortho Right"	desc="The ortho's right dimension. Will be a negative version of the left if 0."	internal="Ortho3"	type="float" %}
{% include ent_kv.html	name="Ortho Enabled"	desc="Sets whether this camera is orthographic. This is for when you want to toggle ortho mode via input."	internal="IsOrtho"	type="choices" %}

### Inputs
{% include ent_io.html	name="SetOrthoEnabled"	desc="Changes camera's FOV over time"	type="bool" %}
{% include ent_io.html	name="SetOrthoTop"	desc="Changes the top ortho over time"	type="string" %}
{% include ent_io.html	name="SetOrthoBottom"	desc="Changes the bottom ortho over time"	type="string" %}
{% include ent_io.html	name="SetOrthoLeft"	desc="Changes the left ortho over time"	type="string" %}
{% include ent_io.html	name="SetOrthoRight"	desc="Changes the right ortho over time"	type="string" %}
