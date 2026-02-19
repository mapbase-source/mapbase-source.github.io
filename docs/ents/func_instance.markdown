---
layout: article_ent
title: func_instance
permalink: /docs/ents/func_instance/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

An entity for placing an instance of a map file.  You may translate and rotate this entity. You can use the replace keys to do parameter changes on the instance contents.  In a $ at the beginning of a variable name.  Then just use the $variable name inside of the instance contents on any value portion of a key/value pair.

<br>

---

### KeyValues
{% include ent_kv.html	name="Remap Vector Lines"	desc="Remaps vecline keyvalues to the instance's origin. vecline is a type of vector which displays a line back to the entity's origin. This is often used on entities like phys_hinge for displaying an axis."	internal="remap_vecline"	type="choices" %}
