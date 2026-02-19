---
layout: article_ent
title: game_text
permalink: /docs/ents/game_text/
breadcrumb: true
ent_icon: assets/entities/game_text.png
type: PointClass
mb_version: -1
game: 
---

An entity that displays text on player's screens.

<br>

---

### KeyValues
{% include ent_kv.html	name="Custom Font"	desc="Makes the message use a specific client scheme font. The font must be additive for the fade effects to function. Also supports custom fonts defined through clientside VScript functions."	internal="font"	type="string" %}
{% include ent_kv.html	name="Automatically break lines"	desc="Allows text to automatically shift to the next line whenever it can't fit on a player's screen. This accounts for a player's aspect ratio and adds hyphens when necessary."	internal="autobreak"	type="choices" %}

### Inputs
{% include ent_io.html	name="SetText"	desc="Sets the message text."	type="string" %}
{% include ent_io.html	name="SetFont"	desc="Sets the message font."	type="string" %}
