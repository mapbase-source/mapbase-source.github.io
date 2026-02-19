---
layout: article_ent
title: prop_ragdoll
permalink: /docs/ents/prop_ragdoll/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

A prop that physically simulates and can be articulated with internal joints. The joint constraints are part of the physics model.

<br>

---

### Flags
{% include ent_sf.html	name="[131072] Fixed constraints (make statue)"	bit="131072" %}
{% include ent_sf.html	name="[262144] Allow +USE"	bit="262144" %}
{% include ent_sf.html	name="[524288] Prevent pickup (if +USE is enabled)"	bit="524288" %}

### Inputs
{% include ent_io.html	name="Wake"	desc="Wakes up this physics object, if it is sleeping."	type="void" %}
{% include ent_io.html	name="Sleep"	desc="Puts this physics object to sleep. It will wake if given the Wake input, or if force is applied to it. Note that physics objects go to sleep automatically after coming to rest for a while, so you don't really need to use this."	type="void" %}
{% include ent_io.html	name="AddToLRU"	desc="Adds the ragdoll to the cleanup list (ragdoll will fade out when it's the least recently used)"	type="void" %}
{% include ent_io.html	name="RemoveFromLRU"	desc="Removes the ragdoll from the cleanup list, allowing it to exist indefinitely"	type="void" %}

### Outputs
{% include ent_io.html	name="OnPlayerUse"	desc="Fires when the ragdoll is used, if +USE is enabled."	type="void" %}
