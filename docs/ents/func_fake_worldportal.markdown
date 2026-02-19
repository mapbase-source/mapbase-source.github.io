---
layout: article_ent
title: func_fake_worldportal
permalink: /docs/ents/func_fake_worldportal/
breadcrumb: true
ent_icon: 
type: SolidClass
mb_version: 
game: 
---

Used to produce perfectly reflective glass that renders world + entities. Typically, you want your glass brush to have nodraw on all non-reflective surfaces and you want to use a shader like lightmappedreflective in your material applied to the non-nodraw surfaces. See hl2/materials/glass/reflectiveglass001.vmt for an example. NOTE: currently, you cannot use reflective glass in scenes with water, and you can only have 1 reflective glass in your view frustum ( + pvs ) at a time.

<br>

---

### KeyValues
{% include ent_kv.html	name="Target Plane"	desc="Target entity to render from."	internal="target"	type="target_destination" %}
{% include ent_kv.html	name="Plane Direction (Pitch Yaw Roll)"	desc="Angles indicating the direction to look in. (added onto target entity's angles)"	internal="PlaneAngles"	type="angle" %}
{% include ent_kv.html	name="Sky Mode"	desc="How to draw the sky through this view."	internal="SkyMode"	type="choices" %}
{% include ent_kv.html	name="View scale"	desc="Scales the view, similar to sky_camera scale."	internal="scale"	type="integer" %}
{% include ent_kv.html	name="Render target"	desc="Makes this fake world portal target a specific RT texture instead of just _rt_WaterReflection. You can manually type in any RT texture name if you know what you're doing."	internal="RenderTarget"	type="choices" %}
{% include ent_kv.html	name="Fog Controller"	desc="Makes this fake world portal use the properties of a specific env_fog_controller when rendering the scene. If no fog controller is specified, the scene will use the local player's fog parameters."	internal="FogController"	type="target_destination" %}

### Inputs
{% include ent_io.html	name="SetTargetPlane"	desc="Sets the target plane."	type="target_destination" %}
{% include ent_io.html	name="SetTargetPlaneAngle"	desc="Sets the target plane direction."	type="vector" %}
{% include ent_io.html	name="SetSkyMode"	desc="Sets the sky mode. NOTE: 2 = draw sky texture, 1 = draw 3D skybox!"	type="integer" %}
{% include ent_io.html	name="SetRenderTarget"	desc="Sets the render target."	type="string" %}
{% include ent_io.html	name="SetFogController"	desc="Sets the fog controller."	type="target_destination" %}
{% include ent_io.html	name="SetScale"	desc="Sets the view scale."	type="float" %}
