---
layout: article_ent
title: logic_entity_position
permalink: /docs/ents/logic_entity_position/
breadcrumb: true
ent_icon: assets/entities/logic_entity_position.png
type: PointClass
mb_version: 
game: 
---

Outputs an entity's position. Prediction operations can be performed as well.

<br>

---

### KeyValues
{% include ent_kv.html	name="Target"	desc="Who's position should be measured? Use the SetTarget input to change mid-game."	internal="target"	type="target_destination" %}
{% include ent_kv.html	name="Position Type"	desc="What position should be measured."	internal="PositionType"	type="choices" %}
{% include ent_kv.html	name="Position Type Parameter"	desc="If using an attachment's position, enter the name of the attachment here."	internal="PositionParameter"	type="string" %}

### Inputs
{% include ent_io.html	name="GetPosition"	desc="Gets the target's position."	type="void" %}
{% include ent_io.html	name="SetPosition"	desc="Sets the target's position. Using the default 'Origin' will set absolute origin while using 'Local Origin' will set local origin."	type="vector" %}
{% include ent_io.html	name="PredictPosition"	desc="Predicts what position the target will be at in the specified number of seconds."	type="float" %}

### Outputs
{% include ent_io.html	name="OutPosition"	desc="Outputs the position."	type="vector" %}
{% include ent_io.html	name="OutAngles"	desc="Outputs the angles."	type="vector" %}
