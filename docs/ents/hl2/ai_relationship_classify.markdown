---
layout: article_ent
title: ai_relationship_classify
permalink: /docs/ents/ai_relationship_classify/
breadcrumb: true
ent_icon: assets/entities/ai_relationship.png
type: PointClass
mb_version: 
game: hl2
---

AI Relationship - Sets relationships between entire classify classes in the AI.

<br>

---

### KeyValues
{% include ent_kv.html	name="Subject(s)"	desc="This is the NPC class whose disposition will change."	internal="subject"	type="choices" %}
{% include ent_kv.html	name="Target(s)"	desc="This is the NPC class about whom the Subject class will change their disposition."	internal="target"	type="choices" %}
{% include ent_kv.html	name="Disposition"	desc="Choose the way the subject class should feel about the target class"	internal="disposition"	type="choices" %}
{% include ent_kv.html	name="Radius for subject"	desc="None"	internal="radius"	type="float" %}
{% include ent_kv.html	name="Disposition Priority"	desc="How much the subject class should Like/Hate/Fear the target class. Higher priority = stronger feeling."	internal="rank"	type="integer" %}
{% include ent_kv.html	name="Start Active"	desc="None"	internal="StartActive"	type="choices" %}
{% include ent_kv.html	name="Reciprocal"	desc="Set this to YES to have the new relationship mirrored by the target class."	internal="Reciprocal"	type="choices" %}

### Inputs
{% include ent_io.html	name="ApplyRelationship"	desc="Apply relationship changes. This will change all Subject entities' relationships to all Target entities. 

IMPORTANT: Once you ApplyRelationships, this entity is then 'ALWAYS ON' until you send a Disable input or RevertRelationship input. During the time this entity is 'ON', any entities that spawn who match the Subject or Target names will be affected. 

IMPORTANT: Unpredictable results may occur when two ai_relationship entities refer to the same set or subset of target or subject entities. This situation should be avoided."	type="void" %}
{% include ent_io.html	name="RevertRelationship"	desc="Revert relationship changes. This will return the relationship to what it was at the time the ApplyRelationship input was called (or when this ai_relationship was spawned if StartActive is set)."	type="void" %}
{% include ent_io.html	name="RevertToDefaultRelationship"	desc="Revert relationship changes to the default relationship, which may have changed since this ai_relationship was applied. This returns control of the entity relationship to the code."	type="void" %}
