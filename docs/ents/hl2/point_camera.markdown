---
layout: article_ent
title: point_camera
permalink: /docs/ents/point_camera/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: hl2
---

Camera

<br>

---

### KeyValues
{% include ent_kv.html	name="Sky Mode"	desc="How to draw the sky through this point_camera."	internal="SkyMode"	type="choices" %}
{% include ent_kv.html	name="Render target"	desc="Makes this camera target a specific RT texture instead of just _rt_Camera, allowing for multiple active point_cameras. Monitors for this camera must use materials which draw the target texture. You can manually type in any RT texture name if you know what you're doing."	internal="RenderTarget"	type="choices" %}

### Inputs
{% include ent_io.html	name="SetSkyMode"	desc="Sets the sky mode. NOTE: 2 = draw sky texture, 1 = draw 3D skybox!"	type="integer" %}
{% include ent_io.html	name="SetRenderTarget"	desc="Sets the render target."	type="string" %}
