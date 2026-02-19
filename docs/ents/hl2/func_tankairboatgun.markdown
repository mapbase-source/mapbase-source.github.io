---
layout: article_ent
title: func_tankairboatgun
permalink: /docs/ents/func_tankairboatgun/
breadcrumb: true
ent_icon: 
type: SolidClass
mb_version: -1
game: hl2
---

Airboat Gun Turret

<br>

---

### KeyValues
{% include ent_kv.html	name="Bullet accuracy"	desc="None"	internal="firespread"	type="choices" %}
{% include ent_kv.html	name="Heavy shot accuracy"	desc="The accuracy for each 'heavy' shot, which fires at a specified interval."	internal="heavy_shot_spread"	type="choices" %}
{% include ent_kv.html	name="Heavy shot interval"	desc="The interval between each 'heavy' shot, which carries higher knockback and, by default, perfect accuracy. The vast majority of bullets that hit the enemy are these 'heavy' shots."	internal="heavy_shot_interval"	type="float" %}
{% include ent_kv.html	name="Use Damage KV"	desc="Allows this func_tankairboatgun to use the Bullet Damage keyvalues instead of the airboat gun's default damage."	internal="use_damage_kv"	type="choices" %}
