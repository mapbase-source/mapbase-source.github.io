---
layout: article_ent
title: ai_monitor
permalink: /docs/ents/ai_monitor/
breadcrumb: true
ent_icon: assets/entities/ai_monitor.png
type: PointClass
mb_version: 
game: 
---

Monitors NPCs for conditions and schedules. You can use this entity to either watch an entity for conditions/schedules or test whether they have them. TODO: Task support.

<br>

---

### KeyValues
{% include ent_kv.html	name="Target NPC(s)"	desc="The NPCs that should be monitored."	internal="Target"	type="target_destination" %}
{% include ent_kv.html	name="Maximum Targets"	desc="How many NPCs we're allowed to monitor. Each one will fire outputs. 0 = no limit."	internal="MaxEnts"	type="integer" %}
{% include ent_kv.html	name="Monitor Interval"	desc="The amount of time in between monitor checks. Use 0 to monitor each tick."	internal="SetMonitorInterval"	type="float" %}
{% include ent_kv.html	name="Cooldown Time"	desc="Whenever a monitor check succeeds, how long should this entity wait before checking again? Use -1 to disable cooldown."	internal="SetCooldownTime"	type="float" %}
{% include ent_kv.html	name="Cooldown upon first success"	desc="While actively monitoring, engage cooldown as soon as a NPC fulfills any of the evaluators instead of checking the other NPCs and letting them fire outputs as well."	internal="CooldownAt"	type="choices" %}
{% include ent_kv.html	name="Condition"	desc="Which condition to monitor. Use 'Conditions (advanced)' to use conditions outside of this list or use multiple conditions."	internal="ConditionsSimple"	type="choices" %}
{% include ent_kv.html	name="Conditions (advanced)"	desc="Allows you to specify exactly which conditions to monitor, either by their actual integer ID or their string name. Separate multiple conditions with colons: 'COND_BEHIND_ENEMY:COND_ENEMY_OCCLUDED:11'"	internal="Conditions"	type="string" %}
{% include ent_kv.html	name="Schedules (advanced)"	desc="Allows you to specify exactly which schedules to monitor, either by their actual integer ID or their string name. Separate multiple schedules with colons: 'SCHED_INVESTIGATE_SOUND:SCHED_COMBAT_FACE:14'"	internal="Schedules"	type="string" %}
{% include ent_kv.html	name="Translate shcedules"	desc="Translates schedules based on each NPC's behavior each time they're checked. This depends on how the NPC remaps that schedule, which may be either their own version of it or something completely different that may not be desirable. The performance impact of this setting is not known."	internal="TranslateSchedules"	type="choices" %}
{% include ent_kv.html	name="Hint Node"	desc="Which hint to monitor. Use 'Hints (advanced)' to use conditions outside of this list or use multiple hints."	internal="HintsSimple"	type="choices" %}
{% include ent_kv.html	name="Hint Nodes (advanced)"	desc="Allows you to specify exactly which hints to monitor by their integer ID. Separate multiple hints with colons: '100:101:104'"	internal="Hints"	type="string" %}
{% include ent_kv.html	name="Hint Distance"	desc="The maximum distance a NPC must be from their current hint node before we are allowed to check."	internal="HintDistance"	type="float" %}

### Inputs
{% include ent_io.html	name="UpdateActors"	desc="Updates the NPCs."	type="void" %}
{% include ent_io.html	name="Test"	desc="Tests all of the current NPCs. This entity does not have to be enabled to do this."	type="void" %}
{% include ent_io.html	name="TestNPC"	desc="Tests the specified NPC. This entity does not have to be enabled to do this."	type="target_destination" %}
{% include ent_io.html	name="GetConditionName"	desc="Looks up the specified condition ID and outputs its name through OutConditionName."	type="integer" %}
{% include ent_io.html	name="GetScheduleName"	desc="Looks up the specified schedule ID and outputs its name through OutScheduleName."	type="integer" %}
{% include ent_io.html	name="SetCondition"	desc="Adds a condition."	type="integer" %}
{% include ent_io.html	name="ClearCondition"	desc="Removes a condition."	type="integer" %}
{% include ent_io.html	name="ClearAllConditions"	desc="Removes all conditions."	type="void" %}
{% include ent_io.html	name="SetSchedule"	desc="Sets a schedule."	type="integer" %}
{% include ent_io.html	name="ClearSchedule"	desc="Removes a schedule."	type="integer" %}
{% include ent_io.html	name="ClearAllSchedules"	desc="Removes all schedules."	type="void" %}
{% include ent_io.html	name="SetHint"	desc="Sets a hint."	type="integer" %}
{% include ent_io.html	name="ClearHint"	desc="Removes a hint."	type="integer" %}
{% include ent_io.html	name="ClearAllHints"	desc="Removes all hints."	type="void" %}

### Outputs
{% include ent_io.html	name="OutConditionName"	desc="Fires each time a condition is evaluated or a condition name is requested, outputting its actual name from its ID."	type="string" %}
{% include ent_io.html	name="OutScheduleName"	desc="Fires each time a schedule is evaluated or a schedule name is requested, outputting its actual name from its ID."	type="string" %}
{% include ent_io.html	name="OnNPCHasCondition"	desc="Fires when a NPC has one of the conditions. Outputs the condition ID and uses the NPC as the activator. This fires for each condition on each NPC."	type="integer" %}
{% include ent_io.html	name="OnNPCLacksCondition"	desc="Fires when a NPC does not have one of the conditions. Outputs the condition ID and uses the NPC as the activator. This fires for each condition on each NPC."	type="integer" %}
{% include ent_io.html	name="OnNPCRunningSchedule"	desc="Fires when a NPC is running any of the schedules. Outputs the schedule ID and uses the NPC as the activator. This fires for each schedule on each NPC."	type="integer" %}
{% include ent_io.html	name="OnNPCUsingHint"	desc="Fires when a NPC is using any of the hints. Outputs the hint ID and uses the NPC as the activator. This fires for each hint on each NPC."	type="integer" %}
{% include ent_io.html	name="OnNPCNotUsingHint"	desc="Fires when a NPC is not using any of the hints. Outputs the hint ID and uses the NPC as the activator. This fires for each hint on each NPC."	type="integer" %}
