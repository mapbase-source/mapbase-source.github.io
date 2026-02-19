---
layout: article_ent
title: info_node_hint
permalink: /docs/ents/info_node_hint/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: 
---

A navigation node for ground moving NPCs that includes some context information for NPCs that are interested in it. The hint might indicate a window that could be looked out of, or an item of interest that could be commented on. Many hint nodes are NPC-specific, so it's helpful to use naming conventions like 'Crow: Fly to point' in the hint choices list. The angles of a hint node indicate what direction the NPC should face to perform the hint behavior.

It's important to understand the distinction between scripts, such as scripted_sequence and scripted_schedule, and info_hint entities. Scripts summon NPCs to specific cue points to play their parts, while hints provide context information to the AI that they use to perform their behaviors. Hints require code support in the NPC, while scripts are generic and may require only animations to play. Use a hint if the behavior is driven by the AI, use a script if the behavior is driven by the map.

<br>

---

### Outputs
{% include ent_io.html	name="OnScriptEvent01"	desc="Fires when a 'trigger' anim event occurs while playing the script. Use { event 1003 framenum 1 } in the QC."	type="void" %}
{% include ent_io.html	name="OnScriptEvent02"	desc="Fires when a 'trigger' anim event occurs while playing the script. Use { event 1003 framenum 2 } in the QC."	type="void" %}
{% include ent_io.html	name="OnScriptEvent03"	desc="Fires when a 'trigger' anim event occurs while playing the script. Use { event 1003 framenum 3 } in the QC."	type="void" %}
{% include ent_io.html	name="OnScriptEvent04"	desc="Fires when a 'trigger' anim event occurs while playing the script. Use { event 1003 framenum 4 } in the QC."	type="void" %}
{% include ent_io.html	name="OnScriptEvent05"	desc="Fires when a 'trigger' anim event occurs while playing the script. Use { event 1003 framenum 5 } in the QC."	type="void" %}
{% include ent_io.html	name="OnScriptEvent06"	desc="Fires when a 'trigger' anim event occurs while playing the script. Use { event 1003 framenum 6 } in the QC."	type="void" %}
{% include ent_io.html	name="OnScriptEvent07"	desc="Fires when a 'trigger' anim event occurs while playing the script. Use { event 1003 framenum 7 } in the QC."	type="void" %}
{% include ent_io.html	name="OnScriptEvent08"	desc="Fires when a 'trigger' anim event occurs while playing the script. Use { event 1003 framenum 8 } in the QC."	type="void" %}
