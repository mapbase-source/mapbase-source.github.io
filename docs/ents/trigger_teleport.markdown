---
layout: article_ent
title: trigger_teleport
permalink: /docs/ents/trigger_teleport/
breadcrumb: true
ent_icon: 
type: SolidClass
mb_version: -1
game: 
---

A trigger volume that teleports entities that touch it. Entities are teleported to the Remote Destination, and have their angles set to that of the Remote Destination's. If a Local Destination Landmark is specified, teleported entities are offset from the target by their initial offset from the landmark, and their angles are left alone.

<br>

---

### Flags
{% include ent_sf.html	name="[64] Everything (not including physics debris)"	bit="64" %}
{% include ent_sf.html	name="[512] Only clients *not* in vehicles"	bit="512" %}
{% include ent_sf.html	name="[1024] Physics debris"	bit="1024" %}
{% include ent_sf.html	name="[2048] Only NPCs in vehicles (respects player ally flag)"	bit="2048" %}
{% include ent_sf.html	name="[4096] Disallow Bots"	bit="4096" %}
