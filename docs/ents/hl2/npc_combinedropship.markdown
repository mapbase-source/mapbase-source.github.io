---
layout: article_ent
title: npc_combinedropship
permalink: /docs/ents/npc_combinedropship/
breadcrumb: true
ent_icon: 
type: NPCClass
mb_version: -1
game: hl2
---

Combine Dropship

<br>

---

### KeyValues
{% include ent_kv.html	name="Model"	desc="None"	internal="model"	type="studio" %}
{% include ent_kv.html	name="Don't emit danger on dropoff"	desc="Prevents this dropship from emitting danger sounds when it's dropping off soldiers."	internal="DontEmitDanger"	type="choices" %}
{% include ent_kv.html	name="Allows any damage (to container)"	desc="Allows this dropship's container (if it's a soldier crate) to take any amount of any type of damage, including bullet or melee damage. This is supposed to allow dropship containers to be taken down in previously impossible ways and should be used with an actual damage filter."	internal="AllowsAnyDamage"	type="choices" %}

### Inputs
{% include ent_io.html	name="DropCargo"	desc="Drop whatever the hell you're carrying. Now."	type="void" %}

### Outputs
{% include ent_io.html	name="OnSpawnNPC"	desc="Fires when this dropship spawns a NPC."	type="ehandle" %}
