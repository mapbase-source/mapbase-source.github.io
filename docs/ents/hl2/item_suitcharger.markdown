---
layout: article_ent
title: item_suitcharger
permalink: /docs/ents/item_suitcharger/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: hl2
---

Battery recharger

<br>

---

### KeyValues
{% include ent_kv.html	name="Model"	desc="None"	internal="model"	type="studio" %}
{% include ent_kv.html	name="Juice"	desc="Overrides the amount of suit power this charger contains. Use 0 for the maximum juice. (which is normally 75) Use -1 if you want the charger to start empty."	internal="Charge"	type="integer" %}
{% include ent_kv.html	name="Max Juice"	desc="Overrides the maximum suit power this charger contains. Use 0 for the default charge, which varies based on this entity's spawnflags. (Normal = 75, Citadel = 500, Kleiner = 25)"	internal="MaxCharge"	type="integer" %}
{% include ent_kv.html	name="Increment Armor"	desc="How much charge should be given each 'increment', or each tenth-of-a-second interval in which the player is given suit armor while using this charger. Juice is also decreased accordingly. Use 0 for the default increment. (Normal = 1, Citadel = 10)"	internal="SetIncrementValue"	type="integer" %}

### Inputs
{% include ent_io.html	name="SetCharge"	desc="Sets the *maximum* charge, refilling the charger in the process."	type="integer" %}
{% include ent_io.html	name="SetChargeNoMax"	desc="Sets the charger's current juice without doing anything with the maximum."	type="float" %}
{% include ent_io.html	name="SetIncrementValue"	desc="Sets the charger's increment value."	type="integer" %}
