---
layout: article_ent
title: point_projectile
permalink: /docs/ents/point_projectile/
breadcrumb: true
ent_icon: assets/entities/point_projectile.png
type: PointClass
mb_version: 
game: 
---

An entity that fires projectiles.

<br>

---

### KeyValues
{% include ent_kv.html	name="Projectile Classname"	desc="The classname of the projectile."	internal="Target"	type="pointentityclass" %}
{% include ent_kv.html	name="Owner Entity"	desc="The projectile's owner entity, or whoever kills will be credited to."	internal="Owner"	type="target_destination" %}
{% include ent_kv.html	name="Damage"	desc="The damage of the projectile."	internal="Damage"	type="float" %}
{% include ent_kv.html	name="Speed"	desc="How fast the projectile should move."	internal="Speed"	type="float" %}
{% include ent_kv.html	name="Fire From Owner"	desc="Fires the projectile from the owner entity's origin instead of our own."	internal="FireFromOwner"	type="choices" %}

### Inputs
{% include ent_io.html	name="Fire"	desc="Fires a projectile with our current angles."	type="void" %}
{% include ent_io.html	name="FireAtEntity"	desc="Fires a projectile at a specific entity."	type="target_destination" %}
{% include ent_io.html	name="FireAtPosition"	desc="Fires a projectile at a specific position."	type="vector" %}
{% include ent_io.html	name="SetDamage"	desc="Sets the projectile's damage."	type="float" %}
{% include ent_io.html	name="SetSpeed"	desc="Sets the projectile's starting speed."	type="float" %}
{% include ent_io.html	name="SetProjectileClass"	desc="Sets the class of the projectile to spawn."	type="string" %}

### Outputs
{% include ent_io.html	name="OnFire"	desc="Fires each time a projectile is fired, passing the projectile as the activator. The owner entity is the caller if it exists."	type="ehandle" %}
