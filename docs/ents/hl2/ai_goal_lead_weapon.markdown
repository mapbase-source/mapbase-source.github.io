---
layout: article_ent
title: ai_goal_lead_weapon
permalink: /docs/ents/ai_goal_lead_weapon/
breadcrumb: true
ent_icon: assets/entities/ai_goal_lead.png
type: PointClass
mb_version: -1
game: hl2
---

AI Goal Lead (Weapon). A version of the ai_goal_lead entity that requires the player to have the specified weapon before the Actor(s) will lead the player to their target.

<br>

---

### KeyValues
{% include ent_kv.html	name="Timeout Time"	desc="How long after the ai_goal_lead_weapon is activated should it time out and just give the player the weapon? Enter 0 to use no timeout."	internal="TimeoutTime"	type="float" %}
