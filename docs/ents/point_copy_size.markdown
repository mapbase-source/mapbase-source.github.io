---
layout: article_ent
title: point_copy_size
permalink: /docs/ents/point_copy_size/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: 
game: 
---

Copies the size of one entity to another.

<br>

---

### KeyValues
{% include ent_kv.html	name="Size source"	desc="The entity whose size would be measured and copied from."	internal="Source"	type="target_destination" %}
{% include ent_kv.html	name="Resize target"	desc="The entity that will receive the copied size."	internal="Target"	type="target_destination" %}
{% include ent_kv.html	name="Scale"	desc="Multiplies the source's size by this number. Useful for bullseyes."	internal="SetScale"	type="float" %}

### Inputs
{% include ent_io.html	name="SetSource"	desc="Sets the size source."	type="target_destination" %}
{% include ent_io.html	name="CopySize"	desc="Copies the source's size to the target."	type="void" %}
{% include ent_io.html	name="CopySizeToEntity"	desc="Copies the source's size to the specified entity."	type="target_destination" %}
{% include ent_io.html	name="CopySizeFromEntity"	desc="Copies the specified entity's size to the target."	type="target_destination" %}

### Outputs
{% include ent_io.html	name="OnCopy"	desc="Fires each time the size is successfully copied with the target as the activator."	type="void" %}
