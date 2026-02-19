---
layout: article_ent
title: func_reflective_glass
permalink: /docs/ents/func_reflective_glass/
breadcrumb: true
ent_icon: 
type: SolidClass
mb_version: -1
game: 
---

Used to produce perfectly reflective glass that renders world + entities. Typically, you want your glass brush to have nodraw on all non-reflective surfaces and you want to use a shader like lightmappedreflective in your material applied to the non-nodraw surfaces. See hl2/materials/glass/reflectiveglass001.vmt for an example. NOTE: currently, you cannot use reflective glass in scenes with water, and you can only have 1 reflective glass in your view frustum ( + pvs ) at a time.

<br>

---

### KeyValues
{% include ent_kv.html	name="Reflection render target"	desc="Makes this mirror target a specific RT texture for its reflection instead of just _rt_WaterReflection. You can manually type in any RT texture name if you know what you're doing or leave this blank to disable reflection entirely."	internal="ReflectRenderTarget"	type="choices" %}
{% include ent_kv.html	name="Refraction render target"	desc="Makes this mirror target a specific RT texture for its refraction instead of just _rt_WaterRefraction. You can manually type in any RT texture name if you know what you're doing or leave this blank to disable refraction entirely."	internal="RefractRenderTarget"	type="choices" %}

### Inputs
{% include ent_io.html	name="SetReflectRenderTarget"	desc="Sets the reflection render target."	type="string" %}
{% include ent_io.html	name="SetRefractRenderTarget"	desc="Sets the refraction render target."	type="string" %}
