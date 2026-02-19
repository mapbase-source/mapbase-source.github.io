---
layout: article_ent
title: env_projectedtexture
permalink: /docs/ents/env_projectedtexture/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

Projected texture entity.

<br>

---

### KeyValues
{% include ent_kv.html	name="Don't Follow Target"	desc="Prevents this entity from trying to point at its target, if it has one. Intended for when you want to use 'Light Only Target' without the entity trying to point to it."	internal="dontfollowtarget"	type="choices" %}
{% include ent_kv.html	name="Horizontal FOV"	desc="The horizontal FOV value. This allows the projected texture to use rectangular dimensions. Leave this at 0 if you want to keep this the same as the regular FOV value."	internal="lighthorfov"	type="float" %}
{% include ent_kv.html	name="Shadow Atten"	desc="The attenuation of the shadows, or how much the shadows should fade into the light of the projected texture, if at all. The player's flashlight uses 0.35 by default, although higher values may be needed for a visible effect."	internal="shadowatten"	type="float" %}
{% include ent_kv.html	name="Shadow Filter Size"	desc="The amount to filter the shadows. This blurs shadows to make them appear less pixelated, but higher values may have more visible noise."	internal="shadowfilter"	type="float" %}
{% include ent_kv.html	name="Brightness Scale"	desc="The light color's brightness scale."	internal="brightnessscale"	type="float" %}
{% include ent_kv.html	name="Color Transition Time"	desc="Amount of time it takes for a color or brightness change to occur. 0 = instant"	internal="colortransitiontime"	type="float" %}
{% include ent_kv.html	name="Constant"	desc="The light's constant attenuation, giving the light no falloff. (This value is internally corrected with x*0.5)"	internal="constant_attn"	type="string" %}
{% include ent_kv.html	name="Linear"	desc="The light's linear attenuation, giving the light linear decline. This is the most common attenuation for projected textures. (This value is internally corrected with x*100)"	internal="linear_attn"	type="string" %}
{% include ent_kv.html	name="Quadratic"	desc="The light's quadratic attenuation, giving the light exponentially decreasing falloff. (This value is internally corrected with x*10000)"	internal="quadratic_attn"	type="string" %}
{% include ent_kv.html	name="Texture Name"	desc="The texture which should be used. Please note that env_projectedtexture uses .vtf files directly and does not use .vmt files. The material browser is only available here to assist with finding textures since materials typically have the same name as their textures."	internal="texturename"	type="material" %}
{% include ent_kv.html	name="Texture Frame"	desc="Sets the frame of the projected texture. Only relevant if the texture is animated/has multiple frames."	internal="textureframe"	type="integer" %}
{% include ent_kv.html	name="Always Draw"	desc="Always draws the projected texture, regardless of whether the player can see its frustum. Use this for projected textures that can be seen on monitors or in the skybox."	internal="alwaysdraw"	type="choices" %}
{% include ent_kv.html	name="Projected Texture Version"	desc="(Don't change). Differentiates between projected textures built before/outside of Mapbase and projected textures using new features."	internal="ProjectedTextureVersion"	type="integer" %}

### Flags
{% include ent_sf.html	name="[2] Always Update (moving light)"	bit="2" %}

### Inputs
{% include ent_io.html	name="AlwaysUpdateOn"	desc="Turns on per frame updating (for moving lights)"	type="void" %}
{% include ent_io.html	name="AlwaysUpdateOff"	desc="Turns off per frame updating (for moving lights)"	type="void" %}
{% include ent_io.html	name="FOV"	desc="Sets the FOV."	type="float" %}
{% include ent_io.html	name="VerFOV"	desc="Sets the vertical FOV."	type="float" %}
{% include ent_io.html	name="HorFOV"	desc="Sets the horizontal FOV."	type="float" %}
{% include ent_io.html	name="SpotlightTexture"	desc="Sets the spotlight texture"	type="string" %}
{% include ent_io.html	name="SetSpotlightFrame"	desc="Sets the spotlight texture frame"	type="string" %}
{% include ent_io.html	name="EnableShadows"	desc="Set the if shadows are enabled"	type="bool" %}
{% include ent_io.html	name="LightColor"	desc="Change the light color"	type="color255" %}
{% include ent_io.html	name="SetBrightness"	desc="Sets brightness."	type="float" %}
{% include ent_io.html	name="SetColorTransitionTime"	desc="Sets the color transition time."	type="float" %}
{% include ent_io.html	name="SetConstant"	desc="Sets the constant attenuation."	type="float" %}
{% include ent_io.html	name="SetLinear"	desc="Sets the linear attenuation."	type="float" %}
{% include ent_io.html	name="SetQuadratic"	desc="Sets the quadratic attenuation."	type="float" %}
{% include ent_io.html	name="SetShadowAtten"	desc="Sets the shadow attenuation."	type="float" %}
{% include ent_io.html	name="SetFilter"	desc="Sets the shadow filter."	type="float" %}
{% include ent_io.html	name="SetNearZ"	desc="Sets NearZ."	type="float" %}
{% include ent_io.html	name="SetFarZ"	desc="Sets FarZ."	type="float" %}
{% include ent_io.html	name="AlwaysDrawOn"	desc="Turns off BBox culling (for skybox or monitor lights)"	type="void" %}
{% include ent_io.html	name="AlwaysDrawOff"	desc="Turns on BBox culling if it was off before"	type="void" %}
{% include ent_io.html	name="StopFollowingTarget"	desc="Causes this entity to stop following the target, if it has one"	type="void" %}
{% include ent_io.html	name="StartFollowingTarget"	desc="Causes this entity to start following the target if it was set to not follow it before"	type="void" %}
