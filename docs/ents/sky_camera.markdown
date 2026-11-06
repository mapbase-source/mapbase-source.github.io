---
layout: article_ent
title: sky_camera
permalink: /docs/ents/sky_camera/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

Outside of Mapbase, `sky_camera` is static. Once it's been placed, the skybox can't move. You can move the `sky_camera` itself through things like logic_measure_movement, but it doesn't update the skybox. There is a trick to update the skybox by continuously removing and respawning the `sky_camera`, but this is a complicated workaround and usually isn't very smooth. `sky_camera` is also not capable of rotating the skybox.

## Moving skyboxes

In Mapbase, `sky_camera` has been updated to support parenting and continuous updating. There's also a new keyvalue to use the `sky_camera`'s angles for actual skybox rotation rather than fog direction. Together, these changes create the ability for the skybox to move around freely relative to the world.

## Multiple skyboxes

Multiple skybox support from HL2: Downfall has been added as well. If you have multiple `sky_camera` entities, you can assign one of them as the main one with the 'Master' keyvalue, and then activate one of them later using the `ActivateSkybox` input.

Being able to set different skyboxes between different players is not yet supported.

<br>

---

### KeyValues
{% include ent_kv.html	name="Parent"	desc="The name of the entity to move with. NOTE: sky_camera's position is normally only updated on spawn. Fire the ForceUpdate or StartUpdating inputs to update the sky_camera's position! You might also want to enable Use Angles for Sky."	internal="parentname"	type="target_destination" %}
{% include ent_kv.html	name="Sky Color"	desc="Causes the skybox to use a solid color instead of the sky texture specified in worldspawn. Blended alpha is unfortunately not supported, but an alpha of '0' disables the effect and any alpha greater than that (e.g. 255) enables the effect."	internal="skycolor"	type="color255" %}
{% include ent_kv.html	name="Use Angles for Sky"	desc="Uses angles for actual skybox rotation, as if the world were tilted on this entity's axis."	internal="use_angles_for_sky"	type="choices" %}
{% include ent_kv.html	name="Fog Max Density [0..1]"	desc="None"	internal="fogmaxdensity"	type="float" %}
{% include ent_kv.html	name="Far Z Clip Plane"	desc="Clips the sky."	internal="farz"	type="float" %}

### Flags
{% include ent_sf.html	name="[1] Master (takes priority if multiple sky_cameras exist)"	bit="1" %}
{% include ent_sf.html	name="[2] Continuously update position (for moving sky_cameras)"	bit="2" %}

### Inputs
{% include ent_io.html	name="ForceUpdate"	desc="Forces the 3D skybox to update with this sky_camera's position."	type="void" %}
{% include ent_io.html	name="StartUpdating"	desc="Begins per-tick skybox updating, which is needed if you want this sky_camera to move."	type="void" %}
{% include ent_io.html	name="StopUpdating"	desc="Ends per-tick skybox updating if it was enabled before."	type="void" %}
{% include ent_io.html	name="ActivateSkybox"	desc="Makes this sky_camera the active skybox."	type="void" %}
{% include ent_io.html	name="DeactivateSkybox"	desc="Stops making this sky_camera the active skybox if it is currently the active skybox, which causes the sky to clear."	type="void" %}
{% include ent_io.html	name="SetFogStartDist"	desc="Sets the fog start distance."	type="float" %}
{% include ent_io.html	name="SetFogEndDist"	desc="Sets the fog end distance."	type="float" %}
{% include ent_io.html	name="TurnOnFog"	desc="Turns the fog on."	type="void" %}
{% include ent_io.html	name="TurnOffFog"	desc="Turns the fog off."	type="void" %}
{% include ent_io.html	name="SetFogColor"	desc="Sets the primary fog color."	type="color255" %}
{% include ent_io.html	name="SetFogColorSecondary"	desc="Sets the secondary fog color."	type="color255" %}
{% include ent_io.html	name="SetFarZ"	desc="Sets the far clip plane distance."	type="integer" %}
{% include ent_io.html	name="SetSkyColor"	desc="Sets the sky color."	type="color255" %}
{% include ent_io.html	name="CopyFogController"	desc="Copies the target fog controller's exact fog parameters."	type="target_destination" %}
{% include ent_io.html	name="CopyFogControllerWithScale"	desc="Copies the target fog controller's exact fog parameters."	type="target_destination" %}
{% include ent_io.html	name="SetScale"	desc="Sets the skybox scale."	type="integer" %}
