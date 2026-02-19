---
layout: article_ent
title: logic_substring
permalink: /docs/ents/logic_substring/
breadcrumb: true
ent_icon: assets/entities/logic_substring.png
type: PointClass
mb_version: 
game: 
---

Returns substring of a string parameter

In memory of Holly Liberatore (moofemp)

<br>

---

### KeyValues
{% include ent_kv.html	name="Substring start position"	desc="Position of the first character to be copied as a substring"	internal="startPos"	type="integer" %}
{% include ent_kv.html	name="Substring length"	desc="Number of characters to include in the substring (-1 = until end of string)"	internal="length"	type="integer" %}

### Flags
{% include ent_sf.html	name="[1] Start Disabled"	bit="1" %}

### Inputs
{% include ent_io.html	name="Disable"	desc="Disable entity functions."	type="void" %}
{% include ent_io.html	name="Enable"	desc="Enable entity functions."	type="void" %}
{% include ent_io.html	name="InValue"	desc="Input a string to substring and return through OutValue"	type="string" %}
{% include ent_io.html	name="SetLength"	desc="Set length of substring"	type="integer" %}
{% include ent_io.html	name="SetStartPos"	desc="Set start position of substring"	type="integer" %}

### Outputs
{% include ent_io.html	name="OutValue"	desc="Output substring from InValue"	type="string" %}
