---
layout: article_ent
title: prop_flare
permalink: /docs/ents/prop_flare/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: hl2
---

Flare Prop

<br>

---

### KeyValues
{% include ent_kv.html	name="Model"	desc="Any model entered here can use flares."	internal="model"	type="studio" %}
{% include ent_kv.html	name="Flare lifetime"	desc="The amount of time the flare should be ignited."	internal="FlareLifetime"	type="float" %}

### Inputs
{% include ent_io.html	name="StartFlare"	desc="Ignites the flare."	type="void" %}
{% include ent_io.html	name="StopFlare"	desc="Extinguishes the flare."	type="void" %}
{% include ent_io.html	name="AddFlareLifetime"	desc="Adds to the flare's lifetime. Negative numbers subtract."	type="float" %}
{% include ent_io.html	name="RemoveFlare"	desc="Kills/removes the flare. Doesn't restore flare."	type="void" %}
{% include ent_io.html	name="RestoreFlare"	desc="Restores the flare after it is burned out."	type="void" %}

### Outputs
{% include ent_io.html	name="OnRestored"	desc="Fired when player instigates +USE."	type="void" %}
