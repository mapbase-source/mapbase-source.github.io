---
layout: article_ent
title: prop_interactable
permalink: /docs/ents/prop_interactable/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

A prop designed to be interacted with like a button. It has all of the properties of prop_dynamic without having to use an accompanying func_door or func_button.

<br>

---

### KeyValues
{% include ent_kv.html	name="Start locked"	desc="If set, this prop_interactable will start locked, making it uninteractable."	internal="Locked"	type="choices" %}
{% include ent_kv.html	name="Cooldown"	desc="The amount of time after this prop_interactable is used before it can be interacted with again. This is always based on when the prop_interactable was pressed, disregarding any active In Sequence, but an optional Out Sequence will play after the cooldown is over. It is also used when the prop_interactable is locked. Set to -1 to have an infinite cooldown when pressed while unlocked."	internal="SetCooldown"	type="float" %}
{% include ent_kv.html	name="Pressed Sound"	desc="The sound to play when the button is successfully pressed."	internal="PressedSound"	type="sound" %}
{% include ent_kv.html	name="Locked Sound"	desc="The sound to play when the button is interacted with while locked."	internal="LockedSound"	type="sound" %}
{% include ent_kv.html	name="In Sequence"	desc="Optional sequence to play when the button is pressed, representing a button going 'in'."	internal="InSequence"	type="string" %}
{% include ent_kv.html	name="Out Sequence"	desc="Optional sequence to play after the button was interacted with and the cooldown is finished, representing a button coming back 'out' after an 'in' animation."	internal="OutSequence"	type="string" %}
{% include ent_kv.html	name="Locked Sequence"	desc="Optional sequence to play when the prop_interactable is interacted with while locked."	internal="LockedSequence"	type="string" %}
{% include ent_kv.html	name="+USE Mins"	desc="Optional box for only permitting +USE interactions within. The prop_interactable should not change its angles while this is used."	internal="use_mins"	type="vector" %}
{% include ent_kv.html	name="+USE Maxs"	desc="Optional box for only permitting +USE interactions within. The prop_interactable should not change its angles while this is used."	internal="use_maxs"	type="vector" %}

### Flags
{% include ent_sf.html	name="[512] +USE interactable"	bit="512" %}
{% include ent_sf.html	name="[1024] Touch interactable"	bit="1024" %}
{% include ent_sf.html	name="[2048] Disable interaction commands when locked"	bit="2048" %}
{% include ent_sf.html	name="[4096] Radius use"	bit="4096" %}

### Inputs
{% include ent_io.html	name="Lock"	desc="Locks this prop_interactable, making it uninteractable."	type="void" %}
{% include ent_io.html	name="Unlock"	desc="Unlocks this prop_interactable, making it interactable."	type="void" %}
{% include ent_io.html	name="Press"	desc="Presses this prop_interactable as if someone interacted with it."	type="void" %}
{% include ent_io.html	name="EnableUseInteraction"	desc="Enables use interaction if it was disabled before."	type="void" %}
{% include ent_io.html	name="DisableUseInteraction"	desc="Disables use interaction if it was enabled before."	type="void" %}
{% include ent_io.html	name="EnableTouchInteraction"	desc="Enables touch interaction if it was disabled before."	type="void" %}
{% include ent_io.html	name="DisableTouchInteraction"	desc="Disables touch interaction if it was enabled before."	type="void" %}
{% include ent_io.html	name="StartIgnoringCommandsWhenLocked"	desc="Starts ignoring commands when this prop_interactable is locked."	type="void" %}
{% include ent_io.html	name="StopIgnoringCommandsWhenLocked"	desc="Stops ignoring commands when this prop_interactable is locked."	type="void" %}
{% include ent_io.html	name="EnableRadiusInteract"	desc="Enables radius use."	type="void" %}
{% include ent_io.html	name="DisableRadiusInteract"	desc="Disables radius use."	type="void" %}

### Outputs
{% include ent_io.html	name="OnPressed"	desc="Fired whenever the prop is interacted with."	type="void" %}
{% include ent_io.html	name="OnLockedUse"	desc="Fired whenever the button is interacted with while locked."	type="void" %}
{% include ent_io.html	name="OnIn"	desc="Fired whenever the prop completes its 'In' animation."	type="void" %}
{% include ent_io.html	name="OnOut"	desc="Fired whenever the prop completes its 'Out' animation."	type="void" %}
