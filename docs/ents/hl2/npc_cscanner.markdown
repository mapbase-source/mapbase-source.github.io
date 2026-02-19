---
layout: article_ent
title: npc_cscanner
permalink: /docs/ents/npc_cscanner/
breadcrumb: true
ent_icon: 
type: NPCClass
mb_version: -1
game: hl2
---

City Scanner

<br>

---

### KeyValues
{% include ent_kv.html	name="Custom Flight Speed"	desc="Overrides the scanner's default speed. 0 = use default"	internal="CustomFlightSpeed"	type="float" %}
{% include ent_kv.html	name="Never take photos"	desc="Prevents this scanner from ever taking photos. It may still chase and inspect, but it will never actually take any pictures or flashes."	internal="DisablePhotos"	type="choices" %}

### Inputs
{% include ent_io.html	name="SetFlightSpeed"	desc="Sets the flight speed of the scanner"	type="integer" %}
{% include ent_io.html	name="DisablePhotos"	desc="Disables this scanner's ability to take photos."	type="void" %}
{% include ent_io.html	name="EnablePhotos"	desc="Enables this scanner's ability to take photos if it was previously disabled."	type="void" %}
