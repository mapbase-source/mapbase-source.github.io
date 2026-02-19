---
layout: article_ent
title: math_lightpattern
permalink: /docs/ents/math_lightpattern/
breadcrumb: true
ent_icon: assets/entities/math_lightpattern.png
type: PointClass
mb_version: 
game: 
---

A logic entity that attempts to replicate light patterns that can be used on named lights.

WARNING: This is currently out of sync with default light patterns. TODO: Fix that!

<br>

---

### KeyValues
{% include ent_kv.html	name="Appearance"	desc="Which preset pattern to use."	internal="style"	type="choices" %}
{% include ent_kv.html	name="Custom Appearance"	desc="A custom pattern to use. a = fully dark, z = fully bright. This should always contain lowercase letters for light patterns. Uppercase letters or other types of characters won't work with actual light patterns. (although they shouldn't break the whole entity either)"	internal="pattern"	type="string" %}
{% include ent_kv.html	name="Pattern Speed"	desc="The speed of the pattern."	internal="PatternSpeed"	type="float" %}

### Inputs
{% include ent_io.html	name="SetStyle"	desc="Sets the pattern from the style presets."	type="integer" %}
{% include ent_io.html	name="SetPattern"	desc="Sets the pattern directly."	type="string" %}
{% include ent_io.html	name="Toggle"	desc="Toggles this entity."	type="void" %}

### Outputs
{% include ent_io.html	name="OutValue"	desc="Outputs with a brightness equivalent to the current letter."	type="float" %}
{% include ent_io.html	name="OutLetter"	desc="Outputs with the current letter itself."	type="string" %}
{% include ent_io.html	name="OnLightOn"	desc="Fires when the current letter is equivalnt to 'on' (greater than a)."	type="void" %}
{% include ent_io.html	name="OnLightOff"	desc="Fires when the current letter is equivalent to 'off' (equal to a)."	type="void" %}
