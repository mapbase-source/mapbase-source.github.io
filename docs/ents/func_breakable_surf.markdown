---
layout: article_ent
title: func_breakable_surf
permalink: /docs/ents/func_breakable_surf/
breadcrumb: true
ent_icon: 
type: SolidClass
mb_version: -1
game: 
---

A breakable surface, for partially breakable glass / tile / etc.  All faces but the desired visible one must be marked as NODRAW and thatface must be 4 sided.  The material applied to the visible face must be set up to be breakable.

<br>

---

### Flags
{% include ent_sf.html	name="[4] Play break sound"	bit="4" %}
