---
layout: article_ent
title: env_cubemap
permalink: /docs/ents/env_cubemap/
breadcrumb: true
ent_icon: assets/entities/env_cubemap.png
type: PointClass
mb_version: -1
game: 
---

An entity that creates a sample point for the Cubic Environment Map.

<br>

---

### KeyValues
{% include ent_kv.html	name="Cubemap Bounds"	desc="MAPBASE VBSP ONLY: Optionally assigns this cubemap a bounding box for parallax correction (brush entity tied to parallax_obb). This means the cubemap reflection will move as the camera moves, similar to func_reflective_glass."	internal="parallaxobb"	type="target_destination" %}
