---
layout: article_ent
title: logic_skill
permalink: /docs/ents/logic_skill/
breadcrumb: true
ent_icon: assets/entities/logic_skill.png
type: PointClass
mb_version: 
game: 
---

Fires various inputs and outputs related to difficulty levels. You can use this entity to figure out what difficulty the player is using.

<br>

---

### KeyValues
{% include ent_kv.html	name="Listen for skill changes?"	desc="If enabled, this entity will fire the 'OnSkillChanged' output every time the difficulty is changed. This can also be toggled during the game with inputs."	internal="ListenForSkillChange"	type="choices" %}

### Inputs
{% include ent_io.html	name="Test"	desc="Test the skill level and fire an input based on the returning value."	type="void" %}
{% include ent_io.html	name="StartListening"	desc="Starts listening for difficulty level changes."	type="void" %}
{% include ent_io.html	name="StopListening"	desc="Stops listening for difficulty level changes."	type="void" %}

### Outputs
{% include ent_io.html	name="OnSkillChanged"	desc="Fired when the difficulty is changed."	type="void" %}
{% include ent_io.html	name="OnEasy"	desc="Fired when the tested difficulty is on Easy."	type="void" %}
{% include ent_io.html	name="OnNormal"	desc="Fired when the tested difficulty is on Normal."	type="void" %}
{% include ent_io.html	name="OnHard"	desc="Fired when the tested difficulty is on Hard."	type="void" %}
