---
layout: article_ent
title: env_global_light
permalink: /docs/ents/env_global_light/
breadcrumb: true
ent_icon: assets/entities/env_global_light.png
type: PointClass
mb_version: 
game: 
---

An orthographic projected texture that follows the player. Sorry, I don't have the original FGD documentation here.

<br>

---

### KeyValues
{% include ent_kv.html	name="Distance"	desc="Height above the player where the projection originates from."	internal="distance"	type="float" %}
{% include ent_kv.html	name="FOV"	desc="This is the field of view that the sunlight casts in. Use lower values to simulate a more distant sun and sharper shadows."	internal="fov"	type="float" %}
{% include ent_kv.html	name="NearZ"	desc="Distance from the player where the near Z plane is. Anything closer to the projection origin"	internal="nearz"	type="float" %}
{% include ent_kv.html	name="North Offset"	desc="This offsets the from the player position where the sun is attached. (???)"	internal="northoffset"	type="float" %}
{% include ent_kv.html	name="X Offset"	desc="X/East offset the from the player position."	internal="eastoffset"	type="float" %}
{% include ent_kv.html	name="Y Offset"	desc="Y/Forward offset the from the player position."	internal="forwardoffset"	type="float" %}
{% include ent_kv.html	name="Ortho Size"	desc="The env_global_light's 'size', or how much ground it covers."	internal="orthosize"	type="float" %}
{% include ent_kv.html	name="Enable Shadows"	desc="Enables shadows. If shadows are disabled, light may appear to go through objects. Disabling shadows may be ideal for lower-detail environments due to being less expensive."	internal="enableshadows"	type="choices" %}
{% include ent_kv.html	name="Light Color"	desc="RGBA color of the sunlight. Intensity can only range from 0 to 255, so use the Brightness Scale keyvalue to make the sunlight brighter than 255."	internal="lightcolor"	type="color255" %}
{% include ent_kv.html	name="Color Transition Time"	desc="Amount of time it takes for a color or brightness change to occur. 0 = instant"	internal="colortransitiontime"	type="float" %}
{% include ent_kv.html	name="Brightness Scale"	desc="The light color's brightness scale."	internal="brightnessscale"	type="float" %}
{% include ent_kv.html	name="Texture Name"	desc="None"	internal="texturename"	type="material" %}
{% include ent_kv.html	name="Texture Frame"	desc="Sets the frame of the env_global_light. Only relevant if the texture is animated/has multiple frames."	internal="textureframe"	type="integer" %}

### Inputs
{% include ent_io.html	name="SetFOV"	desc="Set the field of view the sun casts."	type="float" %}
{% include ent_io.html	name="SetTexture"	desc="Set the texture cookie of the sunlight."	type="string" %}
{% include ent_io.html	name="EnableShadows"	desc="Set whether shadow maps are enabled"	type="bool" %}
{% include ent_io.html	name="LightColor"	desc="Set the light color."	type="color255" %}
{% include ent_io.html	name="SetBrightness"	desc="Sets brightness."	type="float" %}
{% include ent_io.html	name="SetColorTransitionTime"	desc="Sets the color transition time."	type="float" %}
{% include ent_io.html	name="SetAngles"	desc="Set the sun direction."	type="string" %}
{% include ent_io.html	name="SetDistance"	desc="Set the distance of the sun."	type="float" %}
{% include ent_io.html	name="SetNearZDistance"	desc="Set the near z distance."	type="float" %}
{% include ent_io.html	name="SetNorthOffset"	desc="Sets the north offset."	type="float" %}
{% include ent_io.html	name="SetXOffset"	desc="Sets the X offset."	type="float" %}
{% include ent_io.html	name="SetYOffset"	desc="Sets the Y offset."	type="float" %}
{% include ent_io.html	name="SetOrthoSize"	desc="Sets the light's size."	type="float" %}
