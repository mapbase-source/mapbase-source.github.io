---
layout: article_ent
title: logic_console
permalink: /docs/ents/logic_console/
breadcrumb: true
ent_icon: assets/entities/logic_console.png
type: PointClass
mb_version: 
game: 
---

Sends messages to the console. Not to be confused with point_clientcommand or point_servercommand.

<br>

---

### KeyValues
{% include ent_kv.html	name="Developer Level"	desc="What level developer messages should appear at."	internal="SetDevLvl"	type="integer" %}
{% include ent_kv.html	name="Message Color"	desc="The color of standard messages."	internal="SetMsgColor"	type="color255" %}
{% include ent_kv.html	name="Warning Color"	desc="The color of warning messages."	internal="SetWarningColor"	type="color255" %}
{% include ent_kv.html	name="Don't automatically append 
?"	desc="Prevents this logic_console from automatically appending a new line each time it prints."	internal="SetNewLineNotAuto"	type="choices" %}

### Inputs
{% include ent_io.html	name="SendMsg"	desc="Sends a message to the console."	type="string" %}
{% include ent_io.html	name="SendWarning"	desc="Sends a message to the console in red text."	type="string" %}
{% include ent_io.html	name="SendDevMsg"	desc="Sends a message to the console that can only be viewed in developer mode."	type="string" %}
{% include ent_io.html	name="SendDevWarning"	desc="Sends a red-colored message to the console that can only be viewed in developer mode."	type="string" %}
{% include ent_io.html	name="SetDevLvl"	desc="Sets the level developer messages should appear at."	type="integer" %}
{% include ent_io.html	name="SetMsgColor"	desc="Sets the color of standard messages."	type="color255" %}
{% include ent_io.html	name="SetWarningColor"	desc="Sets the color of warning messages."	type="color255" %}
{% include ent_io.html	name="SetNewLineNotAuto"	desc="Enables or disables this logic_console's ability to append 
 to each message."	type="bool" %}
{% include ent_io.html	name="NewLine"	desc="Manually sends 
."	type="void" %}
{% include ent_io.html	name="DevNewLine"	desc="Manually sends 
 in the specified developer level."	type="void" %}
{% include ent_io.html	name="ClearConsole"	desc="Clears the console of all output."	type="void" %}
