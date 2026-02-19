---
layout: article_ent
title: point_template
permalink: /docs/ents/point_template/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

Turns an entity, or set of entities, into a single template that can be instanced anywhere, and multiple times. If there are interdependencies (entity I/O, hierarchy, or other name references) between the entities in the template, the entities in the template will have their names changed and the interdependencies will be reconnected to the changes names. The name change format is as follows: '<original name>&0000', where the 0000 will be replaced with the current global template instance, so wildcard searches for '<original name>*' will still find them.
If you don't want the name fixup to happen, because you're only spawning the template once, or you want inputs to trigger all instances of the template, check the 'Preserve entity names' spawnflag. 
To spawn the template in other places, use an env_entity_maker.

<br>

---

### KeyValues
{% include ent_kv.html	name="Expanded name fixup"	desc="Allows name fixup to target *all* instances of template names in keyvalues and I/O, including output parameters. Requires name fixup to be enabled (''Preserve entity names'' spawnflag disabled)."	internal="FixupMode"	type="choices" %}

### Inputs
{% include ent_io.html	name="ForceSpawnRandomTemplate"	desc="Spawns one of this entity's templates at its original position."	type="void" %}

### Outputs
{% include ent_io.html	name="OutSpawnedEntity"	desc="Fired for each entity spawned by this template, passing said entity as the parameter and activator."	type="ehandle" %}
