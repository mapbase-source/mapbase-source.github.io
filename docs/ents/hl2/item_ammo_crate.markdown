---
layout: article_ent
title: item_ammo_crate
permalink: /docs/ents/item_ammo_crate/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: hl2
---

Ammo Crate

<br>

---

### KeyValues
{% include ent_kv.html	name="Skin"	desc="The ''Empty'' ammo crate can use multiple skins based on other crates. Changing the skin might be reflected in the viewport, but it will only apply to the empty ammo crate."	internal="skin"	type="integer" %}

### Inputs
{% include ent_io.html	name="Skin"	desc="Changes the model skin to the specified number."	type="integer" %}

### Outputs
{% include ent_io.html	name="OnAmmoTaken"	desc="Fires the instant ammo is taken from this crate."	type="void" %}
