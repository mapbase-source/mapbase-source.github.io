---
layout: article_ent
title: npc_metropolice
permalink: /docs/ents/npc_metropolice/
breadcrumb: true
ent_icon: 
type: NPCClass
mb_version: -1
game: hl2
---

MetroPolice

<br>

---

### KeyValues
{% include ent_kv.html	name="Model"	desc="The model of this npc_metropolice. Keep in mind this overrides the 'Efficient' spawnflag which sets the model to police_cheaple.mdl."	internal="model"	type="studio" %}

### Inputs
{% include ent_io.html	name="DisableManhackToss"	desc="Disables manhack toss"	type="void" %}
{% include ent_io.html	name="AdministerJustice"	desc="Orders this NPC to administer justice to the player as if they hit this NPC with a can or something. If this NPC cannot respond, it will look for another npc_metropolice to do it."	type="void" %}
{% include ent_io.html	name="SetWarnings"	desc="Sets the number of warnings this NPC has given to the player."	type="integer" %}
{% include ent_io.html	name="AddWarnings"	desc="Adds to the number of warnings this NPC has given to the player."	type="integer" %}
{% include ent_io.html	name="DeployManhack"	desc="Deploys a manhack immediately if one is available."	type="void" %}
{% include ent_io.html	name="AddManhacks"	desc="Adds to the number of manhacks this NPC has available."	type="integer" %}
{% include ent_io.html	name="SetManhacks"	desc="Sets the number of manhacks this NPC has available."	type="integer" %}

### Outputs
{% include ent_io.html	name="OnHitByPhysicsObject"	desc="Fired when the player hits this NPC with any prop. Passes the thrower as the activator and the prop as the parameter."	type="ehandle" %}
{% include ent_io.html	name="OutManhack"	desc="Fired the moment when this NPC spawns a manhack. Passes the manhack."	type="ehandle" %}
