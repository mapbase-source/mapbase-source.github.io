---
layout: article_ent
title: func_commandredirect
permalink: /docs/ents/func_commandredirect/
breadcrumb: true
ent_icon: 
type: SolidClass
mb_version: 
game: hl2
---

A brush entity that redirects the player's squad commands. Also functions as a limited trigger for the player AND their squad members.

<br>

---

### KeyValues
{% include ent_kv.html	name="Target"	desc="Redirects command goals to this entity's origin. If blank, doesn't affect the goal. If -1, cancels the command entirely."	internal="target"	type="target_destination" %}
{% include ent_kv.html	name="Squad Representative Only"	desc="If enabled, only fires OutAlly for the player's squad's representative."	internal="reponly"	type="choices" %}

### Outputs
{% include ent_io.html	name="OnCommandGoal"	desc="Fires when a player's command goal falls within this brush. Passes the goal's position."	type="vector" %}
{% include ent_io.html	name="OutAlly"	desc="Fires for each ally in the player's squad whenever this brush detects a command goal. Fires before the actual order is sent. Useful for adding a response context to TLK_COMMANDED."	type="ehandle" %}
{% include ent_io.html	name="OnStartTouch"	desc="Fired when a player or a member of the player's squad starts touching this brush."	type="void" %}
{% include ent_io.html	name="OnStartTouchAll"	desc="Fired when a player or a member of the player's squad starts touching this brush, and no other member is touching it."	type="void" %}
{% include ent_io.html	name="OnEndTouch"	desc="Fired when a player or a member of the player's squad stops touching this trigger."	type="void" %}
{% include ent_io.html	name="OnEndTouchAll"	desc="Fires when a player or a member of the player's squad stops touching this trigger, and no other members are touching it."	type="void" %}
