---
layout: article_ent
title: func_fish_pool
permalink: /docs/ents/func_fish_pool/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

Creates a school of interactive fish that swim near this entity.

<br>

---

### KeyValues
{% include ent_kv.html	name="Skin"	desc="Some models have multiple versions of their textures, called skins. Set this to a number other than 0 to make each fish use that skin instead of the default."	internal="skin"	type="integer" %}
{% include ent_kv.html	name="Loud Panic Range"	desc="How far away an event has to be to make the fish in this pool panic."	internal="LoudPanicRange"	type="float" %}
{% include ent_kv.html	name="Quiet Panic Range"	desc="How far away a quiet event (a footstep) has to be to make the fish in this pool panic."	internal="QuietPanicRange"	type="float" %}

### Inputs
{% include ent_io.html	name="SpawnFish"	desc="Spawns an additonal fish. This ignores the fish count keyvalue."	type="void" %}
{% include ent_io.html	name="PanicLoudFromPoint"	desc="Causes a loud panic event at the specified location vector."	type="vector" %}
{% include ent_io.html	name="PanicQuietFromPoint"	desc="Causes a quiet panic event at the specified location vector."	type="vector" %}
{% include ent_io.html	name="Skin"	desc="Changes the fish skin to the specified number."	type="integer" %}

### Outputs
{% include ent_io.html	name="OnSpawnFish"	desc="Fires when a fish is spawned, passing the fish as the activator."	type="ehandle" %}
