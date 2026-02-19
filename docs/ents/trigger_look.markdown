---
layout: article_ent
title: trigger_look
permalink: /docs/ents/trigger_look/
breadcrumb: true
ent_icon: 
type: SolidClass
mb_version: -1
game: 
---

An entity used to trigger something when the player looks at something. It fires 'OnTrigger' when the player looks at a target entity for the given amount of time, while within the trigger volume. If the player leaves the trigger or looks away from the target entity the clock resets. If the 'Use Velocity instead of facing' spawnflag is checked, the trigger uses the player's velocity instead of the player's view, so it determines whenever the player is moving toward the target entity. Useful for triggering when players are driving a vehicle at something.NOTE: Only designed for single-player game. 

<br>

---

### KeyValues
{% include ent_kv.html	name="Require LOS"	desc="If enabled, the player must have full LOS to the target entity in order to count as ''looking''."	internal="UseLOS"	type="choices" %}
{% include ent_kv.html	name="Use look entity as caller"	desc="When firing OnTrigger, use the triggered look entity as the output's caller. Useful for when multiple look targets exist."	internal="LookEntityCaller"	type="choices" %}
