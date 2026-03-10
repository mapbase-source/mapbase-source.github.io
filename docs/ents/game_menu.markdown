---
layout: article_ent
title: game_menu
permalink: /docs/ents/game_menu/
breadcrumb: true
ent_icon: assets/entities/game_menu.png
type: PointClass
mb_version: v8.0
game: 
---

An entity that opens number menus.

<br>

---

### KeyValues
{% include ent_kv.html	name="Hold Time"	desc="The time the menu should stay onscreen before it closes automatically. The OnTimeout output will be fired if the player doesn't select an option in time. Specify '-1' for infinite hold time."	internal="holdtime"	type="float" %}
{% include ent_kv.html	name="Title"	desc="If specified, this will be placed above all of the options. Localization is supported."	internal="Title"	type="string" %}
{% include ent_kv.html	name="Case 01"	desc="If specified, this will be the 1st option in the menu. Localization is supported."	internal="Case01"	type="string" %}
{% include ent_kv.html	name="Case 02"	desc="If specified, this will be the 2nd option in the menu. Localization is supported."	internal="Case02"	type="string" %}
{% include ent_kv.html	name="Case 03"	desc="If specified, this will be the 3rd option in the menu. Localization is supported."	internal="Case03"	type="string" %}
{% include ent_kv.html	name="Case 04"	desc="If specified, this will be the 4th option in the menu. Localization is supported."	internal="Case04"	type="string" %}
{% include ent_kv.html	name="Case 05"	desc="If specified, this will be the 5th option in the menu. Localization is supported."	internal="Case05"	type="string" %}
{% include ent_kv.html	name="Case 06"	desc="If specified, this will be the 6th option in the menu. Localization is supported."	internal="Case06"	type="string" %}
{% include ent_kv.html	name="Case 07"	desc="If specified, this will be the 7th option in the menu. Localization is supported."	internal="Case07"	type="string" %}
{% include ent_kv.html	name="Case 08"	desc="If specified, this will be the 8th option in the menu. Localization is supported."	internal="Case08"	type="string" %}
{% include ent_kv.html	name="Case 09"	desc="If specified, this will be the 9th option in the menu. Localization is supported."	internal="Case09"	type="string" %}
{% include ent_kv.html	name="Case 10 (0)"	desc="If specified, this will be the 0th option in the menu. This option will not have a visual effect when selected. Localization is supported."	internal="Case10"	type="string" %}

### Flags
{% include ent_sf.html	name="[1] All Players"	bit="1" %}
{% include ent_sf.html	name="[2] Centered"	bit="2" %}
{% include ent_sf.html	name="[4] Center Fill"	bit="4" %}
{% include ent_sf.html	name="[8] Use big fonts (if available)"	bit="8" %}
{% include ent_sf.html	name="[16] No flash"	bit="16" %}
{% include ent_sf.html	name="[32] Word wrap"	bit="32" %}

### Inputs
{% include ent_io.html	name="ShowMenu"	desc="Shows the menu to the player."	type="void" %}
{% include ent_io.html	name="HideMenu"	desc="Hides the menu from the player."	type="void" %}

### Outputs
{% include ent_io.html	name="OnCase01"	desc="Fired when a player selects this option."	type="void" %}
{% include ent_io.html	name="OnCase02"	desc="Fired when a player selects this option."	type="void" %}
{% include ent_io.html	name="OnCase03"	desc="Fired when a player selects this option."	type="void" %}
{% include ent_io.html	name="OnCase04"	desc="Fired when a player selects this option."	type="void" %}
{% include ent_io.html	name="OnCase05"	desc="Fired when a player selects this option."	type="void" %}
{% include ent_io.html	name="OnCase06"	desc="Fired when a player selects this option."	type="void" %}
{% include ent_io.html	name="OnCase07"	desc="Fired when a player selects this option."	type="void" %}
{% include ent_io.html	name="OnCase08"	desc="Fired when a player selects this option."	type="void" %}
{% include ent_io.html	name="OnCase09"	desc="Fired when a player selects this option."	type="void" %}
{% include ent_io.html	name="OnCase10"	desc="Fired when a player selects this option."	type="void" %}
{% include ent_io.html	name="OutValue"	desc="Fired when a player selects any option, using the selected option as a parameter."	type="integer" %}
{% include ent_io.html	name="OnTimeout"	desc="Fired when a player doesn't select an option in time."	type="void" %}
