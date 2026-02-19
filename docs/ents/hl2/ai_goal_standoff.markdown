---
layout: article_ent
title: ai_goal_standoff
permalink: /docs/ents/ai_goal_standoff/
breadcrumb: true
ent_icon: assets/entities/ai_goal_standoff.png
type: PointClass
mb_version: -1
game: hl2
---

AI Goal Standoff

<br>

---

### KeyValues
{% include ent_kv.html	name="Custom: Take cover to reload"	desc="None"	internal="CustomCoverOnReload"	type="choices" %}
{% include ent_kv.html	name="Custom: Min time wait to shoot"	desc="Minimum duration of time after a burst of shooting before trying again"	internal="CustomMinTimeShots"	type="float" %}
{% include ent_kv.html	name="Custom: Max time wait to shoot"	desc="Minimum duration of time after a burst of shooting before trying again"	internal="CustomMaxTimeShots"	type="float" %}
{% include ent_kv.html	name="Custom: Min shots in a burst"	desc="None"	internal="CustomMinShots"	type="integer" %}
{% include ent_kv.html	name="Custom: Max shots in a burst"	desc="None"	internal="CustomMaxShots"	type="integer" %}
{% include ent_kv.html	name="Custom: Odds cover on damage"	desc="If damaged, the chances react by taking immediate cover"	internal="CustomOddsCover"	type="integer" %}

### Inputs
{% include ent_io.html	name="UpdateActors"	desc="Forces an update on this goal's actors."	type="void" %}
