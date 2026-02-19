---
layout: article_ent
title: vgui_text_display
permalink: /docs/ents/vgui_text_display/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

Displays a VGui text label oriented in the world. Can be considered Mapbase's equivalent of point_worldtext. The panel itself can be displayed with the 'r_vguitext_bg' cvar.

<br>

---

### KeyValues
{% include ent_kv.html	name="Entity Message"	desc="The text to appear on the panel. Has a maximum of 256 characters. If you need more space, use a localization token."	internal="message"	type="string" %}
{% include ent_kv.html	name="Text Alignment"	desc="The text's alignment in relation to the panel size. With 'South', the text will be centered between the origin and the sphere's left bound relative to the angles the text is facing."	internal="alignment"	type="choices" %}
{% include ent_kv.html	name="Font"	desc="Makes the text use a specific client scheme font. The font must not be additive or proportional. Commonly defined fonts include 'DefaultSmall' and 'Trebuchet18'/'Trebuchet24'. Also supports custom fonts defined through clientside VScript functions."	internal="font"	type="string" %}
{% include ent_kv.html	name="Panel Resolution"	desc="The number of pixels available to the text. The higher the resolution is, the smaller the text will be. (NOTE: Changing the resolution with inputs later will scale the screen itself)"	internal="resolution"	type="integer" %}
{% include ent_kv.html	name="Panel Size"	desc="The size of the text panel in the world. This is previewed with a sphere, but it actually extends 'north-west' relative to the direction it's facing. Due to the limited in-editor previewing abilities, it's recommended to use the 'SetPanelSize' input in-game with the 'ent_fire' command to fine-tune this value. Use 'r_vguitext_bg' to display the panel in-game."	internal="textsize"	type="float" %}
{% include ent_kv.html	name="Alpha (0 - 255)"	desc="The FX amount is used by the selected Render Mode."	internal="renderamt"	type="integer" %}
{% include ent_kv.html	name="Color"	desc="None"	internal="rendercolor"	type="color255" %}

### Flags
{% include ent_sf.html	name="[1] Start Disabled"	bit="1" %}

### Inputs
{% include ent_io.html	name="Enable"	desc="Start displaying the message text."	type="void" %}
{% include ent_io.html	name="Disable"	desc="Stop displaying the message text."	type="void" %}
{% include ent_io.html	name="Toggle"	desc="Toggle displaying the message text."	type="void" %}
{% include ent_io.html	name="SetMessage"	desc="Set the message text."	type="string" %}
{% include ent_io.html	name="SetTextAlignment"	desc="Set text alignment by enum name."	type="integer" %}
{% include ent_io.html	name="SetResolution"	desc="Set the resolution. Might affect screen size."	type="integer" %}
{% include ent_io.html	name="SetPanelSize"	desc="Set the text panel size."	type="float" %}
