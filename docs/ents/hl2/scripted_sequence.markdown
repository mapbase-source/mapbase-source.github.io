---
layout: article_ent
title: scripted_sequence
permalink: /docs/ents/scripted_sequence/
breadcrumb: true
ent_icon: 
type: PointClass
mb_version: -1
game: hl2
---

Grabs an NPC and makes them play a specified set of animations. The NPC can be told to move to the scripted sequence position or can be told to play the script wherever they currently are. Multiple scripted sequences of the same name will frame-synchronize in the action animation once all the actors have moved to position. This allows tight interaction between actors (one actor grabbing another, hitting them, etc.) The flow is as follows:

1) Move to position using the specified movement animation. If 'Move to Position' is set to NONE, skip to step 2.
2) If forced to wait for another actor to move to position, play the pre-action idle animation, otherwise skip to step 3. If there is no pre-action idle specified, ACT_IDLE is used.
3) Fire the OnBeginSequence output.
4) Play the action animation. If no action animation is specified, skip to step 5.
5) Play the post-action idle animation. If none is specified, skip to step 6. If the 'Loop in Post Idle' spawnflag is set, keep playing the post-action idle until the script is cancelled. If no post-action idle animation is specified, ACT_IDLE is used.
6) Fire the OnEndSequence output.
7) If a next script to play is specified, hand the NPC to the next script and repeat this process for that script.

The MoveToPosition input runs steps 1 and 2, then waits while playing the pre-action idle animation until the BeginSequence input is received.

If the sequence has motion extraction in it, set the 'Don't Teleport NPC On End' spawnflag.

<br>

---

### Flags
{% include ent_sf.html	name="[1024] Search Cyclically"	bit="1024" %}
{% include ent_sf.html	name="[2048] Don't Complain"	bit="2048" %}
