---
layout: article_ent
title: npc_turret_floor
permalink: /docs/ents/npc_turret_floor/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: hl2
---

Combine Floor Turret

<br>

---

### KeyValues
{% include ent_kv.html	name="Skin Number"	desc="Which skin to use for this turret. If a citizen turret, set to 0 to select randomly."	internal="skin"	type="integer" %}

### Flags
{% include ent_sf.html	name="[1024] No Light Sprite"	bit="1024" %}

### Inputs
{% include ent_io.html	name="CreateSprite"	desc="Creates the turret's light sprite if it was previously destroyed."	type="void" %}
{% include ent_io.html	name="DestroySprite"	desc="Destroys the turret's light sprite."	type="void" %}

### Outputs
{% include ent_io.html	name="OnStartTipped"	desc="Turret has just been tipped over."	type="void" %}
