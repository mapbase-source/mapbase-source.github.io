---
layout: article_ent
title: mapbase_manifest
permalink: /docs/ents/mapbase_manifest/
breadcrumb: true
ent_icon: assets/entities/mapbase_manifest.png
type: PointClass
mb_version: 
game: 
---

Mounts additional manifest files

<br>

---

### KeyValues
{% include ent_kv.html	name="Manifest File"	desc="The manifest file to load. Keep in mind ''maps/%mapname%_manifest.txt'' is always loaded automatically without this entity."	internal="target"	type="string" %}

### Flags
{% include ent_sf.html	name="[1] Start Activated"	bit="1" %}

### Inputs
{% include ent_io.html	name="Activate"	desc="Loads the manifest file if it hasn't been loaded already."	type="void" %}
