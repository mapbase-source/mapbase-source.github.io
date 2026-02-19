---
layout: article_ent
title: npc_turret_ceiling
permalink: /docs/ents/npc_turret_ceiling/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: hl2
---

Combine Ceiling Turret

<br>

---

### KeyValues
{% include ent_kv.html	name="Health"	desc="Health was 1000 in the original Half-Life 2."	internal="health"	type="integer" %}
{% include ent_kv.html	name="FieldOfView"	desc="The ceiling turret's viewcone. (1.0 = straight ahead, 0.0 = +/- 90 degrees, -1.0 = all directions)"	internal="FieldOfView"	type="float" %}

### Flags
{% include ent_sf.html	name="[1024] No Light Sprite"	bit="1024" %}

### Inputs
{% include ent_io.html	name="DepleteAmmo"	desc="Depletes all the ammo from a turret, causing it to dry-fire."	type="void" %}
{% include ent_io.html	name="RestoreAmmo"	desc="Restores ammo to a turret, allowing it to fire live rounds again."	type="void" %}
{% include ent_io.html	name="CreateSprite"	desc="Creates the turret's light sprite if it was previously destroyed."	type="void" %}
{% include ent_io.html	name="DestroySprite"	desc="Destroys the turret's light sprite."	type="void" %}
{% include ent_io.html	name="FieldOfView"	desc="Sets this turret's field of view."	type="float" %}
