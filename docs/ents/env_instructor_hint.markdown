---
layout: article_ent
title: env_instructor_hint
permalink: /docs/ents/env_instructor_hint/
breadcrumb: true
ent_icon: assets/entities/env_instructor_hint.png
type: PointClass
mb_version: 
game: 
---

An entity that allows for creation and control of instructor lessons by map logic

<br>

---

### KeyValues
{% include ent_kv.html	name="Replace Key"	desc="Hints with the same Replace Key will replace each other when displayed at the same time. Use different values for each hint if you would like to have multiple hints displaying at once."	internal="hint_replace_key"	type="string" %}
{% include ent_kv.html	name="Target Entity"	desc="The entity to show this hint on top of. The entity used must exist on the client, info_target_instructor_hint can be parented to server only entities for this purpose."	internal="hint_target"	type="target_destination" %}
{% include ent_kv.html	name="Positioning"	desc="Either show at the position of the Target Entity. Or show the hint directly on the hud at a fixed position."	internal="hint_static"	type="choices" %}
{% include ent_kv.html	name="Allow invisible target"	desc="Do we allow the hint to follow entites with nodraw set?"	internal="hint_allow_nodraw_target"	type="choices" %}
{% include ent_kv.html	name="Caption"	desc="The text of your hint."	internal="hint_caption"	type="string" %}
{% include ent_kv.html	name="Activator Caption"	desc="The text of your hint shown to only the activating player."	internal="hint_activator_caption"	type="string" %}
{% include ent_kv.html	name="Caption Color"	desc="The color of the caption text"	internal="hint_color"	type="color255" %}
{% include ent_kv.html	name="Force caption"	desc="Do we show the caption text even if the hint is occluded by a wall?"	internal="hint_forcecaption"	type="choices" %}
{% include ent_kv.html	name="Onscreen Icon"	desc="The icon to use when the hint is within the player's view."	internal="hint_icon_onscreen"	type="choices" %}
{% include ent_kv.html	name="Offscreen Icon"	desc="The icon to use when the hint is outside the player's view."	internal="hint_icon_offscreen"	type="choices" %}
{% include ent_kv.html	name="Show offscreen"	desc="When the hint is offscreen, do we show an icon and arrow?"	internal="hint_nooffscreen"	type="choices" %}
{% include ent_kv.html	name="Bound Command"	desc="If using 'show key bindings' for the onscreen icon, this field should be the command we want to show bindings for"	internal="hint_binding"	type="string" %}
{% include ent_kv.html	name="Icon Height Offset"	desc="A height offset from the target entity's origin to display the hint"	internal="hint_icon_offset"	type="float" %}
{% include ent_kv.html	name="Size Pulsing"	desc="The icon size can pulsate"	internal="hint_pulseoption"	type="choices" %}
{% include ent_kv.html	name="Alpha Pulsing"	desc="The icon alpha can pulsate"	internal="hint_alphaoption"	type="choices" %}
{% include ent_kv.html	name="Shaking"	desc="The icon can shake"	internal="hint_shakeoption"	type="choices" %}
{% include ent_kv.html	name="Only Local Player"	desc="The hint will only be shown to the local player."	internal="hint_local_player_only"	type="choices" %}
{% include ent_kv.html	name="Timeout"	desc="The automatic timeout for the hint. 0 will persist until stopped with EndHint."	internal="hint_timeout"	type="integer" %}
{% include ent_kv.html	name="Display Range"	desc="The visible range of the hint."	internal="hint_range"	type="float" %}
{% include ent_kv.html	name="Sound"	desc="The sound to play when the hint is first displayed."	internal="hint_start_sound"	type="sound" %}
{% include ent_kv.html	name="Icon Target Position"	desc="Controls where the hint should appear on the icon target."	internal="hint_target_pos"	type="choices" %}

### Inputs
{% include ent_io.html	name="ShowHint"	desc="Start showing the hint. If an entity name is passed as a parameter, the hint is shown only to that entity."	type="string" %}
{% include ent_io.html	name="EndHint"	desc="Stop showing the hint if it hasn't already timed out."	type="void" %}
{% include ent_io.html	name="SetCaption"	desc="Sets the hint's caption. Does not update hints in progress."	type="string" %}
