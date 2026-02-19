---
layout: article_ent
title: npc_helicopter
permalink: /docs/ents/npc_helicopter/
breadcrumb: true
ent_icon: 
type: NPCClass
mb_version: -1
game: hl2
---

Helicopter

<br>

---

### KeyValues
{% include ent_kv.html	name="World Model"	desc="This model should have the right attachments."	internal="model"	type="studio" %}
{% include ent_kv.html	name="Health"	desc="Overrides this helicopter's health. 0 = default npc_helicopter health (5600)."	internal="health"	type="integer" %}
{% include ent_kv.html	name="Field of View"	desc="The helicoter's viewcone. (1.0 = straight ahead, 0.0 = +/- 90 degrees, -1.0 = all directions)"	internal="FieldOfView"	type="float" %}
{% include ent_kv.html	name="Aim around while idle"	desc="If enabled, this helicopter will aim its gun in random locations while searching for enemies without changing the helicopter's overall facing direction. If there are any visually interesting info_hints nearby, the helicopter will aim at them. Intended for use with a spotlight."	internal="IdleAimAround"	type="choices" %}
{% include ent_kv.html	name="Disable Smoke Trails"	desc="Stops smoke trails from appearing while the helicopter is damaged."	internal="DisableSmokeTrails"	type="choices" %}
{% include ent_kv.html	name="Disable Corpses"	desc="Stops corpses from falling when the helicopter is damaged."	internal="DisableCorpses"	type="choices" %}
{% include ent_kv.html	name="Disable Explosions"	desc="Stops explosions from occuring when the helicopter is damaged."	internal="DisableExplosions"	type="choices" %}

### Flags
{% include ent_sf.html	name="[4194304] Aim at enemies even when gun is off"	bit="4194304" %}

### Inputs
{% include ent_io.html	name="SelfDestructNoFX"	desc="Identical to SelfDestruct, except the helicopter won't throw out chunks while flying to a crash point. If there are no crash points, the helicopter will explode in place as normal. Intended for when the pilot is killed and there's not supposed to be anything wrong with the helicopter itself."	type="void" %}

### Outputs
{% include ent_io.html	name="OutBomb"	desc="Fires for each bomb dropped."	type="ehandle" %}
