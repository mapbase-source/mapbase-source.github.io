---
layout: article_ent
title: point_entity_replace
permalink: /docs/ents/point_entity_replace/
breadcrumb: true
ent_icon: assets/entities/point_entity_replace.png
type: PointClass
mb_version: 
game: 
---

An entity that replaces.

<br>

---

### KeyValues
{% include ent_kv.html	name="Entity to be replaced"	desc="The entity that should be replaced. This is optional if you're only using the 'ReplaceEntity' input."	internal="Target"	type="target_destination" %}
{% include ent_kv.html	name="Replacement Entity"	desc="The entity that should serve as the replacement."	internal="ReplacementEntity"	type="target_destination" %}
{% include ent_kv.html	name="Replacement Type"	desc="What IS the replacement entity?"	internal="ReplacementType"	type="choices" %}
{% include ent_kv.html	name="Replacement Location"	desc="Where should the replacement entit(ies) be teleported to?"	internal="ReplacementLocation"	type="choices" %}
{% include ent_kv.html	name="Remove original entity"	desc="Removes the entity being replaced."	internal="RemoveOriginalEntity"	type="choices" %}
{% include ent_kv.html	name="Take Targetname"	desc="Causes the replacement entity to take the target's name."	internal="TakeTargetname"	type="choices" %}
{% include ent_kv.html	name="Take Parent"	desc="Causes the replacement entity to take the target's current parent as well as its children."	internal="TakeParent"	type="choices" %}
{% include ent_kv.html	name="Take Owner"	desc="Causes the replacement entity to take the target's owner."	internal="TakeOwner"	type="choices" %}
{% include ent_kv.html	name="Take Model Stuff"	desc="Causes the replacement entity to take the target's model stuff, including render fields and animation data."	internal="TakeModelStuff"	type="choices" %}
{% include ent_kv.html	name="Other Fields"	desc="Specific variables that should transfer. Uses internal field names (e.g. ''m_bBoolean''), not keyvalues. This is really delicate, so be careful."	internal="OtherStuff"	type="string" %}
{% include ent_kv.html	name="Fire outputs with original entity as caller"	desc="If enabled, OnReplace will fire with the original entity as the caller instead of this."	internal="TargetIsCaller"	type="choices" %}

### Inputs
{% include ent_io.html	name="Replace"	desc="Replaces the target entity with the replacement entity."	type="void" %}
{% include ent_io.html	name="ReplaceEntity"	desc="Replaces the specified entity with the replacement entity."	type="target_destination" %}
{% include ent_io.html	name="SetReplacementEntity"	desc="Sets the entity to replace the target."	type="target_destination" %}

### Outputs
{% include ent_io.html	name="OnReplace"	desc="Fires for each replacement we undergo, passing the replacement entity as the activator and parameter. The caller can be the replaced entity or this entity depending on this entity's settings."	type="ehandle" %}
