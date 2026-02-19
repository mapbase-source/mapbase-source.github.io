---
layout: article_ent
title: env_dof_controller
permalink: /docs/ents/env_dof_controller/
breadcrumb: true
ent_icon: assets/entities/env_dof_controller.png
type: PointClass
mb_version: 
game: 
---

An entity that controls the depth of field settings for the player. Depth of field simulates camera blur of out-of-focus regions of the scene.

<br>

---

### KeyValues
{% include ent_kv.html	name="Enabled"	desc="Whether the effect should be active"	internal="enabled"	type="choices" %}
{% include ent_kv.html	name="Near blur depth"	desc="Distance that the blurriness is at its peak near the viewpoint."	internal="near_blur"	type="float" %}
{% include ent_kv.html	name="Near focus depth"	desc="Distance that the focus is in full effect near the viewpoint."	internal="near_focus"	type="float" %}
{% include ent_kv.html	name="Near blur radius"	desc="Radius (in pixels) to blur the surrounding pixels."	internal="near_radius"	type="float" %}
{% include ent_kv.html	name="Far blur depth"	desc="Distance where blurriness is at its peak far from the viewpoint."	internal="far_blur"	type="float" %}
{% include ent_kv.html	name="Far focus depth"	desc="Distance that the focus is in full effect far from the viewpoint."	internal="far_focus"	type="float" %}
{% include ent_kv.html	name="Far blur radius"	desc="Radius (in pixels) to blur the surrounding pixels."	internal="far_radius"	type="float" %}
{% include ent_kv.html	name="Focus target"	desc="Entity to use as a focal point."	internal="focus_target"	type="target_source" %}
{% include ent_kv.html	name="Focus target range"	desc="Distance behind the focal plane to remain in focus."	internal="focus_range"	type="float" %}

### Inputs
{% include ent_io.html	name="SetNearBlurDepth"	desc="Set the distance in front of the focus region at which the scene will be completely blurred using the near blur radius. Must be smaller than NearFocusDepth."	type="float" %}
{% include ent_io.html	name="SetNearFocusDepth"	desc="The area between the near focus and far focus distances is perfectly in focus. Must be smaller than FarFocusDepth."	type="float" %}
{% include ent_io.html	name="SetFarFocusDepth"	desc="The area between the near focus and far focus distances is perfectly in focus. Must be smaller than FarBlurDepth."	type="float" %}
{% include ent_io.html	name="SetFarBlurDepth"	desc="Set the distance beyond the focus region at which the scene will be completely blurred using the far blur radius. Must be larger than FarFocusDepth."	type="float" %}
{% include ent_io.html	name="SetNearBlurRadius"	desc="Set the blur radius (in pixels) to use at the near blur distance. Set to 0 to disable near blur."	type="float" %}
{% include ent_io.html	name="SetFarBlurRadius"	desc="Set the blur radius (in pixels) to use at the far blur distance. Set to 0 to disable far blur."	type="float" %}
{% include ent_io.html	name="SetFocusTarget"	desc="Set the focal target for the effect."	type="string" %}
{% include ent_io.html	name="SetFocusTargetRange"	desc="Set the distance behind the focal point that will remain in focus."	type="float" %}
