---
layout: article_ent
title: logic_format
permalink: /docs/ents/logic_format/
breadcrumb: true
ent_icon: assets/entities/logic_format.png
type: PointClass
mb_version: 
game: 
---

Formats a line of text akin to C# String.Format.
As curly brackets cannot be used in the help window, please see Mapbase documentation for clear instructions.

<br>

---

### KeyValues
{% include ent_kv.html	name="Input Value"	desc="The input value. Should contain {0}, {1}, etc, which will be replaced by the parameters and then output as OutFormattedValue."	internal="SetInputValue"	type="string" %}
{% include ent_kv.html	name="Parameter 0"	desc="Will replace all instances of {0} in the input value."	internal="SetParameter0"	type="string" %}
{% include ent_kv.html	name="Parameter 1"	desc="Will replace all instances of {1} in the input value."	internal="SetParameter1"	type="string" %}
{% include ent_kv.html	name="Parameter 2"	desc="Will replace all instances of {2} in the input value."	internal="SetParameter2"	type="string" %}
{% include ent_kv.html	name="Parameter 3"	desc="Will replace all instances of {3} in the input value."	internal="SetParameter3"	type="string" %}
{% include ent_kv.html	name="Parameter 4"	desc="Will replace all instances of {4} in the input value."	internal="SetParameter4"	type="string" %}
{% include ent_kv.html	name="Parameter 5"	desc="Will replace all instances of {5} in the input value."	internal="SetParameter5"	type="string" %}
{% include ent_kv.html	name="Parameter 6"	desc="Will replace all instances of {6} in the input value."	internal="SetParameter6"	type="string" %}
{% include ent_kv.html	name="Parameter 7"	desc="Will replace all instances of {7} in the input value."	internal="SetParameter7"	type="string" %}
{% include ent_kv.html	name="Backup Parameter"	desc="If an invalid parameter is used (e.g. null parameter or asks for a parameter beyond {7}), then this will be used instead. Otherwise just uses '<null>'."	internal="SetBackupParameter"	type="string" %}

### Inputs
{% include ent_io.html	name="GetFormattedValue"	desc="Fires OutFormattedValue, which passes the formatted input value."	type="void" %}
{% include ent_io.html	name="SetInputValue"	desc="Sets the input value. Should contain {0}, {1}, etc. enclosed by curly brackets, which will be replaced by the parameters and then output as OutFormattedValue."	type="string" %}
{% include ent_io.html	name="SetParameter0"	desc="Sets the text that will replace all instances of {0}."	type="string" %}
{% include ent_io.html	name="SetParameter1"	desc="Sets the text that will replace all instances of {1}."	type="string" %}
{% include ent_io.html	name="SetParameter2"	desc="Sets the text that will replace all instances of {2}."	type="string" %}
{% include ent_io.html	name="SetParameter3"	desc="Sets the text that will replace all instances of {3}."	type="string" %}
{% include ent_io.html	name="SetParameter4"	desc="Sets the text that will replace all instances of {4}."	type="string" %}
{% include ent_io.html	name="SetParameter5"	desc="Sets the text that will replace all instances of {5}."	type="string" %}
{% include ent_io.html	name="SetParameter6"	desc="Sets the text that will replace all instances of {6}."	type="string" %}
{% include ent_io.html	name="SetParameter7"	desc="Sets the text that will replace all instances of {7}."	type="string" %}
{% include ent_io.html	name="SetBackupParameter"	desc="Sets the text that will replace all invalid parameters."	type="string" %}

### Outputs
{% include ent_io.html	name="OutFormattedValue"	desc="Fired when the formatted value is requested. Outputs the formatted value."	type="string" %}
