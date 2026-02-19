---
layout: article_ent
title: item_dynamic_resupply
permalink: /docs/ents/item_dynamic_resupply/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: hl2
---

A dynamic item. When the player enters the PVS of this entity, it will determine the item most needed by the player, spawn one of those items, and remove itself. To determine which item the player most needs, it calculates which of the Desired Health/Armor/Ammo ratios the player is farthest from.

If the player is above all the desired levels, then no item will be spawned, unless this item_dynamic_resupply was created by an item_item_crate. In that case, a random piece of ammo used by a weapon, that the player has, will be spawned. If the 'Fallback to Health Vial' spawnflag is set, a health vial will be spawned instead of the ammo.

By default, the item_dynamic_resupply uses the values inside the Master resupply, instead of using it's own values. This makes it easy to tweak the desired loadout of many resupplies. The BecomeMaster input allows you to switch Masters dynamically as the level progresses.

<br>

---

### Flags
{% include ent_sf.html	name="[4] Spawn even if player meets all requirements"	bit="4" %}
