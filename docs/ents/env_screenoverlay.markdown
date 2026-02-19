---
layout: article_ent
title: env_screenoverlay
permalink: /docs/ents/env_screenoverlay/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

An entity that can display and control a set of screen overlays, to be displayed over the player's view. Useful for view effects like drunkenness, or teleporter afterimages, etc.

<br>

---

### KeyValues
{% include ent_kv.html	name="Overlay Index"	desc="If this value is set to a number between 0 and 9, this overlay will use one of Mapbase's indexed overlay slots. Overlays in different slots will display on the screen at the same time."	internal="OverlayIndex"	type="integer" %}
