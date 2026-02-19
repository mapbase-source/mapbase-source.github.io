---
layout: article_ent
title: logic_convar
permalink: /docs/ents/logic_convar/
breadcrumb: true
ent_icon: assets/entities/logic_convar.png
type: PointClass
mb_version: 
game: 
---

A powerful entity that can read the specified ConVar's value. It functions similarly to a logic_branch, except you could also output the value directly. Due to theoretical abuse, players have the option to disable logic_ConVar usage on a map. Use the 'OnDenied' output to prevent any issues from players who have disabled logic_ConVar.

<br>

---

### KeyValues
{% include ent_kv.html	name="ConVar"	desc="The ConVar to read. Can be serverside or clientside(?)"	internal="SetConVar"	type="string" %}
{% include ent_kv.html	name="Compare value"	desc="The value to compare with the ConVar's value during comparisons. This keyvalue supports matchers (<, >, !=, etc.)."	internal="SetTestValue"	type="string" %}

### Inputs
{% include ent_io.html	name="SetConVar"	desc="Sets the ConVar whose variable will be retrieved."	type="string" %}
{% include ent_io.html	name="SetTestValue"	desc="Sets the value that will be compared with the ConVar variable during comparisons."	type="string" %}
{% include ent_io.html	name="GetValue"	desc="Retrieves the ConVar's value, firing OutValue with its value."	type="void" %}
{% include ent_io.html	name="Test"	desc="Compares the ConVar's value with the compare value."	type="void" %}

### Outputs
{% include ent_io.html	name="OnTrue"	desc="Fired when a comparison is true."	type="void" %}
{% include ent_io.html	name="OnFalse"	desc="Fired when a comparison is false."	type="void" %}
{% include ent_io.html	name="OutValue"	desc="Fired with the GetValue input. Passes the ConVar's current value."	type="string" %}
{% include ent_io.html	name="OnDenied"	desc="Fires when the ConVar is requested and logic_convar is not allowed by the server."	type="void" %}
