---
layout: article_ent
title: phys_ragdollmagnet
permalink: /docs/ents/phys_ragdollmagnet/
breadcrumb: true
ent_icon: assets/entities/info_target.png
type: PointClass
mb_version: -1
game: 
---

An entity that acts like a magnet for ragdolls. Useful for crafting exaggerated ragdoll behavior (i.e. guys falling over rails on death). If the Bar Magnet spawnflag is set, the magnet works like it was a cylindrical magnet i.e. it attracts ragdolls to the nearest point on a line.

<br>

---

### KeyValues
{% include ent_kv.html	name="Bone Target"	desc="Targets a specific bone to apply the force to. (e.g. ValveBiped.Bip01_R_Foot)"	internal="BoneTarget"	type="string" %}

### Outputs
{% include ent_io.html	name="OnUsed"	desc="Fires when this magnet is used by a ragdoll. Passes the ragdoll's original force + the force this magnet has applied."	type="vector" %}
