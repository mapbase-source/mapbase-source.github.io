---
layout: article
title: Weapon Script Changes
permalink: /docs/game-scripts/weapon-scripts/
breadcrumb: true
---

Mapbase adds a few new keyvalues specifically for weapon scripts defined in the `scripts` folder.

---

{% include ent_kv.html	name="viewmodel_fov"	desc="Overrides the viewmodel FOV. Otherwise defers to the <code>viewmodel_fov</code> cvar, which defaults to 54."	type="float" %}
{% include ent_kv.html	name="bob_scale"	desc="Scales how much the viewmodel moves when the player walks."	type="float" %}
{% include ent_kv.html	name="sway_scale"	desc="Scales how much the viewmodel sways when the player looks around."	type="float" %}
{% include ent_kv.html	name="sway_speed_scale"	desc="Scales how quickly the viewmodel sways when the player looks around."	type="float" %}
{% include ent_kv.html	name="droppedmodel"	desc="If specified, the weapon will use the specified model when on the floor instead of its worldmodel. Inspired by a similar keyvalue from Counter-Strike: Source."	type="string" %}

#### Half-Life 2
The following keyvalues are primarily relevant/usable in Half-Life 2 mods.

{% include ent_kv.html	name="AllowFlipping"	desc="Indicates whether this viewmodel can be flipped when the <code>cl_righthand</code> cvar differs from the <code>BuiltRightHanded</code> value. This is based on reactivated functionality from Counter-Strike: Source."	type="bool" %}
{% include ent_kv.html	name="BuiltRightHanded"	desc="Indicates whether this viewmodel was built to be used right-handed when <code>AllowFlipping</code> is enabled. Defaults to 1, but if set to 0, then the viewmodel's flip state will be inverted. (i.e. flips when <code>cl_righthand</code> is enabled, rather than disabled)"	type="bool" %}
{% include ent_kv.html	name="uses_hands"	desc="Indicates whether this weapon is intended to support c_arms. Disabled by default."	type="bool" %}
{% include tip.html	txt="<code>uses_hands</code> can also be set through the <a href=\"/docs/hl2/protagonist-system/\">Protagonist System</a>." %}
<!-- Outdated workaround that needs to be stripped out of code. Look into $definebone fixup params for a cleaner solution
{% include ent_kv.html	name="hand_rig"	desc="When c_arms are enabled, specifies which hand rig this is intended to use."	type="string" %}-->
{% include ent_kv.html	name="usage_restriction"	desc="Restricts this weapon from use by NPCs or players by specifying either <code>player_only</code> or <code>npc_only</code>."	type="string" %}
