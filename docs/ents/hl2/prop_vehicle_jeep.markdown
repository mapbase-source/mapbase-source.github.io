---
layout: article_ent
title: prop_vehicle_jeep
permalink: /docs/ents/prop_vehicle_jeep/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: hl2
---

Driveable studiomodel jeep.

<br>

---

### KeyValues
{% include ent_kv.html	name="World model"	desc="Use jalopy.mdl if you're using Episodic. If you want to use the original HL2 buggy in Episodic, use prop_vehicle_jeep_old."	internal="model"	type="studio" %}
{% include ent_kv.html	name="No Hazard Lights"	desc="Stops the jalopy's hazard lights from turning on and flashing when the player exits the vehicle."	internal="NoHazardLights"	type="choices" %}
{% include ent_kv.html	name="Has Gun"	desc="Whether the jeep's tau cannon is enabled or disabled."	internal="EnableGun"	type="choices" %}

### Inputs
{% include ent_io.html	name="EnableGun"	desc="Enables or disables the jeep's tau cannon and associated crosshair."	type="bool" %}
{% include ent_io.html	name="EnableHazardLights"	desc="Enables the jalopy's hazard lights."	type="void" %}
{% include ent_io.html	name="DisableHazardLights"	desc="Disables the jalopy's hazard lights."	type="void" %}
