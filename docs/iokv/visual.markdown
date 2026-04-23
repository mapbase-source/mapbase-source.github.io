---
layout: article
title: Visual I/KV
permalink: /docs/iokv/visual/
breadcrumb: true
---

### Inputs
{% include ent_io.html	name="SetRenderMode"	desc="Sets this entity's render mode."	type="integer" %}
{% include ent_io.html	name="SetRenderFX"	desc="Sets this entity's render FX."	type="integer" %}
{% include ent_io.html	name="SetViewHideFlags"	desc="Sets view ID hide flags. See the [#New nodraw abilities] section for more information."	type="integer" %}
{% include ent_io.html	name="AddEffects"	desc="Adds to this entity's effects flags."	type="integer" %}
{% include ent_io.html	name="RemoveEffects"	desc="Removes from this entity's effects flags."	type="integer" %}
{% include ent_io.html	name="EnableDraw"	desc="Draws this entity if it was undrawn before. Equivalent to <code>RemoveEffects 32</code>."	type="void"	from="Portal 2" %}
{% include ent_io.html	name="DisableDraw"	desc="Undraws this entity if it was drawn before. Equivalent to <code>AddEffects 32</code>."	type="void"	from="Portal 2" %}

### KeyValues

{% include ent_kv.html	name="View ID nodraw"	desc="Controls whether an entity shouldn't be drawn in specific parts of the view rendering process. See the [#New nodraw abilities] section for more information.}"	internal="viewhideflags"	type="flags" %}
{% include ent_kv.html	name="Disable flashlight"	desc="Used to disable flashlight (<code>env_projectedtexture</code>) lighting on this entity. Note that this will not stop the entity from casting projected texture shadows; see the [#New nodraw abilities] section for information on how to do that."	internal="disableflashlight"	type="choices"	from="Portal 2" %}

#### New nodraw abilities

Mapbase adds a few new ways of turning an entity invisible:

* A <code>SetRenderMode</code> input which can be used to set an entity to the "Don't render" mode on the fly by using a parameter of 9.
* New <code>Enable/DisableDraw</code> inputs inspired by the inputs of the same name from Portal 2.
* A new "view ID nodraw" feature that hides an entity in specific render contexts.

Each of these methods turn an entity invisible in different ways, and they each have their own tradeoffs. For example, using <code>DisableDraw</code> will prevent an entity's data from being transmitted to the client, while using the other methods will not.

The view ID nodraw ability is unique in the fact that it prevents drawing in specific passes from the view rendering process. For example, if an entity is set to not draw in <code>VIEW_MONITOR</code>, then that entity will not show up on RT camera monitors, but it will show up everywhere else.

View IDs are specified in a similar fashion to spawnflags, and combinations of them can be used. Here's a list of view IDs in base Source 2013:

{% include ent_sf.html	name="VIEW_MAIN"	desc="The main view used for the default player camera."	bit="1" %}
{% include ent_sf.html	name="VIEW_3DSKY"	desc="Used by the 3D Skybox."	bit="2" %}
{% include ent_sf.html	name="VIEW_MONITOR"	desc="Used by <code>point_camera</code> screens."	bit="4" %}
{% include ent_sf.html	name="VIEW_REFLECTION"	desc="Used by expensive water and <code>func_reflective_glass</code> to reflect the world."	bit="8" %}
{% include ent_sf.html	name="VIEW_REFRACTION"	desc="Used by expensive water and <code>func_reflective_glass</code> to show underwater areas."	bit="16" %}
{% include ent_sf.html	name="VIEW_INTRO_PLAYER"	desc="Used by <code>script_intro</code>'s secondary camera view."	bit="32" %}
{% include ent_sf.html	name="VIEW_INTRO_CAMERA"	desc="When a <code>script_intro</code> is active, the player uses this instead of <code>VIEW_MAIN</code>."	bit="64" %}
{% include ent_sf.html	name="VIEW_SHADOW_DEPTH_TEXTURE"	desc="Used by <code>env_projectedtexture</code> and flashlight shadow maps. Hiding an entity in this view will stop it from casting projected texture shadows."	bit="128" %}
{% include ent_sf.html	name="VIEW_SSAO"	desc="Used by Pyrovision SSAO in TF2."	bit="256" %}

---

The FGD also provides some default presets:

* 0 : "Draw normally"
* 193 : "Hide in main view (player's eyes)" ''( VIEW_MAIN + VIEW_INTRO_CAMERA + VIEW_SHADOW_DEPTH_TEXTURE )''
* 36 : "Hide in cameras" ''( VIEW_MONITOR + VIEW_INTRO_PLAYER )''
* 24 : "Hide in mirrors/water" ''( VIEW_REFLECTION + VIEW_REFRACTION )''
* 60 : "Hide in cameras and mirrors/water" ''( VIEW_MONITOR + VIEW_INTRO_PLAYER + VIEW_REFLECTION + VIEW_REFRACTION )''
* 2 : "Hide in 3D skybox" ''( VIEW_3DSKY )''
* 128 : "Hide projected texture shadows" ''( VIEW_SHADOW_DEPTH_TEXTURE )''

# Model Entities
The following I/O/KV are only available on entities that use models (i.e. non-brush entities).

### Inputs
{% include ent_io.html	name="SetPoseParameter"	desc="Sets the specified pose parameter to the specified value (e.g. <code>aim_yaw 45</code>)."	type="string" %}
{% include ent_io.html	name="SetModel"	desc="Sets this entity's model. Path must start with <code>models/</code> and include the extension."	type="string" %}
{% include ent_io.html	name="SetCycle"	desc="Sets the animation's cycle."	type="float" %}
{% include ent_io.html	name="SetPlaybackRate"	desc="Sets the animation's playback rate."	type="float" %}
