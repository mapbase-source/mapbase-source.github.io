---
layout: article_ent
title: prop_physics_override
permalink: /docs/ents/prop_physics_override/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

A prop that physically simulates as a single rigid body. It can be constrained to other physics objects using hinges or other constraints. It can also be configured to break when it takes enough damage. Props not meant to be used with prop_physics (dynamic or static props) can be used with this and it can also override health or interactions.

<br>

---

### KeyValues
{% include ent_kv.html	name="Interaction Override"	desc="Overrides this prop's default interactions. If you want to combine them, enter each number with a space or comma in between. (e.g. '1 5 7')"	internal="InitialInteractions"	type="choices" %}
{% include ent_kv.html	name="Preferred Player-carry Angles"	desc="The angle which the object should orient to when the player picks it up with the physgun or +USE. Overrides the prop's own QC carry angles if it has any. '0' doesn't override the carry angles."	internal="preferredcarryangles"	type="angle" %}
