---
layout: article_ent
title: ai_sound
permalink: /docs/ents/ai_sound/
breadcrumb: true
ent_icon: assets/entities/ai_sound.png
type: PointClass
mb_version: -1
game: hl2
---

This entity makes sounds or smells that can be sensed by NPCs, butnot by the player. This can be used to cause reactions in nearby NPCs.

Sound Types
  Combat: Will cause most NPCs to become alert
  World: Will cause most NPCs to become alert
  Danger: Will cause most NPCs to move away from the position of the sound
  Bullet Impact: 
  Carcass: 
  Meat: 
  Garbage: 
  Thumper: causes antlions to run away briefly
  Readiness: (Low, Medium, High) Causes player companions that can hear this sound to change readiness


<br>

---

### KeyValues
{% include ent_kv.html	name="Sound Owner"	desc="An optional entity to use that the sound doesn't emit from, but is specified as the 'owner'. This is needed for certain sound contexts and other miscellaneous stuff. If not specified, the ai_sound will be used as the owner."	internal="target"	type="target_destination" %}
