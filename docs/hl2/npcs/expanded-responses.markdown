---
layout: article
title: Expanded Responses
permalink: /docs/hl2/npcs/expanded-responses/
breadcrumb: true
related_pages:
  - '/docs/hl2/custom-characters/'
---

The Response System is an existing Source engine feature that handles dynamic NPC dialogue. Mapbase expands HL2's Response System usage and capabilities in several ways.

{% include note.html	txt="This article is specifically for the context of Half-Life 2. For more general response system changes, see <a href=\"/docs/game-scripts/response-system/\">Response System Changes</a>." %}

* Table of Contents
{:toc}

# NPCs Converted

A few NPCs that previously used hardcoded soundscripts or sentences now use the Response System:

* `npc_combine_s` — Now plays sentences through `talker/npc_combine_s.txt`
* `npc_metropolice` — Now plays sentences through `talker/npc_metropolice.txt`
* `npc_sniper` — Now plays soundscripts through `talker/npc_sniper.txt`

Optionally, <code>npc_zombie_custom</code> can be used to play responses on zombies.

# Ally Response Concepts

Mapbase broadens the response concepts available to player ally NPCs (e.g. `npc_citizen`). This is mainly useful for when you are creating a custom character.

The following concepts originated from Alyx, but are now available on all companion NPCs:

* `TLK_MANY_ENEMIES` — Spoken when fighting at least 5 enemies at once.
* `TLK_MOBBED` — Spoken when at least 2 enemies are getting too close.
* `TLK_ENEMY_BURNING` — Spoken when the NPC's enemy is ignited.
* `TLK_DANGER_ZOMBINE_GRENADE` — Spoken when a zombine pulls out a grenade.
* `TLK_SPOTTED_INCOMING_HEADCRAB` — Spoken when an enemy headcrab is seen for the first time while it's already mid-jump.
* `TLK_SPOTTED_HEADCRAB_LEAVING_ZOMBIE` — Spoken when a headcrab is seen leaving a zombie that just died.
* `TLK_SPOTTED_ZOMBIE_WAKEUP` — Spoken when a zombie is seen emerging from a slump actbusy.

The following concepts are completely new:

* `TLK_TAKING_FIRE` — Spoken when someone fires at me, regardless of whether I was hit. (requires `ai_shot_notify_targets` to be enabled)
* `TLK_NEW_ENEMY` — Spoken when a new enemy appears. Unlike `TLK_STARTCOMBAT`, this can be spoken during combat and has no delay between combat engagements. This is intended to be used when a new enemy enters an already-active arena.
* `TLK_COMBAT_IDLE` — Randomly spoken when in combat, but not currently attacking (e.g. in cover or reloading). Similar to `TLK_ATTACKING`, but for when in an intermittent combat state.
* `TLK_LOSTENEMY` — Spoken when the NPC loses its enemy.
* `TLK_REFINDENEMY` — Spoken when the NPC reacquires a lost enemy.
