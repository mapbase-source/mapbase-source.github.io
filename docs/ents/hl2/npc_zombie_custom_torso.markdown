---
layout: article_ent
title: npc_zombie_custom_torso
permalink: /docs/ents/npc_zombie_custom_torso/
breadcrumb: true
ent_icon: 
type: NPCClass
mb_version: 
game: hl2
---

Custom Zombie Torso

<br>

---

### KeyValues
{% include ent_kv.html	name="Health"	desc="Overrides this zombie's health. 0 = default npc_zombie health."	internal="health"	type="integer" %}
{% include ent_kv.html	name="Model"	desc="The zombie's model."	internal="model"	type="studio" %}
{% include ent_kv.html	name="Headcrab Classname"	desc="The NPC that should be used as the 'headcrab'. You can leave this blank if the zombie is marked as headcrab-less."	internal="HeadcrabClassname"	type="pointentityclass" %}
{% include ent_kv.html	name="Headcrab Model"	desc="The model that should be used for 'headcrab' ragdolls. You can leave this blank if the zombie is marked as headcrab-less."	internal="HeadcrabModel"	type="studio" %}
