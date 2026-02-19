---
layout: article_ent
title: logic_modelinfo
permalink: /docs/ents/logic_modelinfo/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

Gets and outputs some model information from an entity.

<br>

---

### KeyValues
{% include ent_kv.html	name="Target"	desc="The entity whose model will be evaluated."	internal="target"	type="target_destination" %}
{% include ent_kv.html	name="Pose Parameter Name"	desc="(Optional) The pose parameter to use for pose parameter-related I/O."	internal="PoseParameterName"	type="string" %}

### Inputs
{% include ent_io.html	name="GetNumSkins"	desc="Gets the number of skins on the target entity."	type="void" %}
{% include ent_io.html	name="LookupSequence"	desc="Looks up the specified sequence on the target entity."	type="string" %}
{% include ent_io.html	name="LookupActivity"	desc="Looks up the specified activity on the target entity. Uses the sequence outputs and outputs the first sequence with the given activity."	type="string" %}
{% include ent_io.html	name="SetPoseParameterName"	desc="Sets the pose parameter to target."	type="string" %}
{% include ent_io.html	name="SetPoseParameterValue"	desc="Sets the target pose parameter's current value."	type="float" %}
{% include ent_io.html	name="GetPoseParameter"	desc="Gets the current value of the target pose parameter and fires OutPoseParameterValue with it."	type="void" %}

### Outputs
{% include ent_io.html	name="OutNumSkins"	desc="Outputs number of skins."	type="integer" %}
{% include ent_io.html	name="OnHasSequence"	desc="Fires when the target has the sequence requested. Outputs the sequence's index."	type="integer" %}
{% include ent_io.html	name="OnLacksSequence"	desc="Fires when the target does not have the sequence requested."	type="void" %}
{% include ent_io.html	name="OutPoseParameterValue"	desc="Fires when the pose parameter value is requested, outputting its current value."	type="float" %}
