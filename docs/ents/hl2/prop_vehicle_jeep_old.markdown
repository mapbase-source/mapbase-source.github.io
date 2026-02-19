---
layout: article_ent
title: prop_vehicle_jeep_old
permalink: /docs/ents/prop_vehicle_jeep_old/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: hl2
---

A way to access the original HL2 jeep in Episodic. Just use prop_vehicle_jeep if you're using the original HL2 version.

<br>

---

### KeyValues
{% include ent_kv.html	name="World model"	desc="None"	internal="model"	type="studio" %}

### Inputs
{% include ent_io.html	name="StartRemoveTauCannon"	desc="Start the tau removal sequence."	type="void" %}
{% include ent_io.html	name="FinishRemoveTauCannon"	desc="Finish the tau removal sequence."	type="void" %}
{% include ent_io.html	name="DisablePhysGun"	desc="Disable physgun interactions with the jeep."	type="void" %}
{% include ent_io.html	name="EnablePhysGun"	desc="Enable physgun interactions with the jeep (default)."	type="void" %}
