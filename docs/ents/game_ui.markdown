---
layout: article_ent
title: game_ui
permalink: /docs/ents/game_ui/
breadcrumb: true
ent_icon: assets/entities/game_ui.png
type: PointClass
mb_version: -1
game: 
---

An entity used to override player input when the player is looking at it.

<br>

---

### Inputs
{% include ent_io.html	name="GetButtons"	desc="Fires OutButtons with the player's current button flags."	type="void" %}

### Outputs
{% include ent_io.html	name="OutButtons"	desc="Outputs the player's current button flags when they are requested by the GetButtons input."	type="integer" %}
{% include ent_io.html	name="PressedAttack3"	desc="Fired whenever the player presses the tertiary attack key."	type="void" %}
{% include ent_io.html	name="PressedUse"	desc="Fired whenever the player presses the use key."	type="void" %}
{% include ent_io.html	name="PressedJump"	desc="Fired whenever the player presses the jump key."	type="void" %}
{% include ent_io.html	name="PressedCrouch"	desc="Fired whenever the player presses the crouch key."	type="void" %}
{% include ent_io.html	name="PressedSprint"	desc="Fired whenever the player presses the sprint key."	type="void" %}
{% include ent_io.html	name="PressedReload"	desc="Fired whenever the player presses the reload key."	type="void" %}
{% include ent_io.html	name="UnpressedAttack3"	desc="Fired whenever the player releases the tertiary attack key."	type="void" %}
{% include ent_io.html	name="UnpressedUse"	desc="Fired whenever the player releases the use key."	type="void" %}
{% include ent_io.html	name="UnpressedJump"	desc="Fired whenever the player releases the jump key."	type="void" %}
{% include ent_io.html	name="UnpressedCrouch"	desc="Fired whenever the player releases the crouch key."	type="void" %}
{% include ent_io.html	name="UnpressedSprint"	desc="Fired whenever the player releases the sprint key."	type="void" %}
{% include ent_io.html	name="UnpressedReload"	desc="Fired whenever the player releases the reload key."	type="void" %}
