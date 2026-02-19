---
layout: article_ent
title: item_item_crate
permalink: /docs/ents/item_item_crate/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: hl2
---

Item Crate

<br>

---

### KeyValues
{% include ent_kv.html	name="Model"	desc="The model of this item_item_crate. Only works when this crate's appearance is set to use a custom model."	internal="model"	type="studio" %}

### Inputs
{% include ent_io.html	name="SetContents"	desc="Sets the crate's contents. (e.g. its specified item)"	type="string" %}
{% include ent_io.html	name="SetItemCount"	desc="Sets the item count."	type="string" %}
{% include ent_io.html	name="MergeContentsWithPlayer"	desc="Gives whatever the crate contains to a player without doing anything to the crate itself. NOTE: This does not actually change the crate's contents on its own, if you want the crate to be empty after merging with a player, you must use SetItemCount or SetContents as well. (this input is also currently unsupported with template crates)"	type="target_destination" %}

### Outputs
{% include ent_io.html	name="OnItem"	desc="Fires for each item spawned by this crate."	type="ehandle" %}
