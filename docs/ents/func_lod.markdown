---
layout: article_ent
title: func_lod
permalink: /docs/ents/func_lod/
breadcrumb: true
ent_icon: 
type: SolidClass
mb_version: -1
game: 
---

Brush-built model that fades out over a specified distance. Useful for creating world detail that doesn't need to be drawn far away, for performance reasons.

<br>

---

### KeyValues
{% include ent_kv.html	name="Maximum Disappear Distance"	desc="If specified, this would be distance at which these brushes should fade out completely. If 0, it will combine the regular disappear distance with the value stored in the 'lod_TransitionDist' convar, which is 800 by default."	internal="DisappearMaxDist"	type="integer" %}
