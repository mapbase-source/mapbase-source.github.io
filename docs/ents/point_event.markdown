---
layout: article_ent
title: point_event
permalink: /docs/ents/point_event/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

An entity that can listen to events fired from code and fire an output when it happens.

<br>

---

### KeyValues
{% include ent_kv.html	name="Key Name 01"	desc="A keyvalue name to search for in detected events. If an event contains this key, then this entity will fire its respective OutValue output with the value."	internal="KeyName01"	type="string" %}
{% include ent_kv.html	name="Key Name 02"	desc="A keyvalue name to search for in detected events. If an event contains this key, then this entity will fire its respective OutValue output with the value."	internal="KeyName02"	type="string" %}
{% include ent_kv.html	name="Key Name 03"	desc="A keyvalue name to search for in detected events. If an event contains this key, then this entity will fire its respective OutValue output with the value."	internal="KeyName03"	type="string" %}
{% include ent_kv.html	name="Key Name 04"	desc="A keyvalue name to search for in detected events. If an event contains this key, then this entity will fire its respective OutValue output with the value."	internal="KeyName04"	type="string" %}
{% include ent_kv.html	name="Key Name 05"	desc="A keyvalue name to search for in detected events. If an event contains this key, then this entity will fire its respective OutValue output with the value."	internal="KeyName05"	type="string" %}
{% include ent_kv.html	name="Key Name 06"	desc="A keyvalue name to search for in detected events. If an event contains this key, then this entity will fire its respective OutValue output with the value."	internal="KeyName06"	type="string" %}
{% include ent_kv.html	name="Key Name 07"	desc="A keyvalue name to search for in detected events. If an event contains this key, then this entity will fire its respective OutValue output with the value."	internal="KeyName07"	type="string" %}
{% include ent_kv.html	name="Key Name 08"	desc="A keyvalue name to search for in detected events. If an event contains this key, then this entity will fire its respective OutValue output with the value."	internal="KeyName08"	type="string" %}

### Inputs
{% include ent_io.html	name="SetAllEvents"	desc="Sets all events using the keyvalue's : format. Pass nothing to clear all events."	type="string" %}
{% include ent_io.html	name="AddEvent"	desc="Adds an event to this entity."	type="string" %}

### Outputs
{% include ent_io.html	name="OutEventName"	desc="Outputs the detected event's name in case this entity is listening for multiple events."	type="string" %}
{% include ent_io.html	name="OutValue01"	desc="Passes the value found in its respective keyname when an event is fired."	type="string" %}
{% include ent_io.html	name="OutValue02"	desc="Passes the value found in its respective keyname when an event is fired."	type="string" %}
{% include ent_io.html	name="OutValue03"	desc="Passes the value found in its respective keyname when an event is fired."	type="string" %}
{% include ent_io.html	name="OutValue04"	desc="Passes the value found in its respective keyname when an event is fired."	type="string" %}
{% include ent_io.html	name="OutValue05"	desc="Passes the value found in its respective keyname when an event is fired."	type="string" %}
{% include ent_io.html	name="OutValue06"	desc="Passes the value found in its respective keyname when an event is fired."	type="string" %}
{% include ent_io.html	name="OutValue07"	desc="Passes the value found in its respective keyname when an event is fired."	type="string" %}
{% include ent_io.html	name="OutValue08"	desc="Passes the value found in its respective keyname when an event is fired."	type="string" %}
