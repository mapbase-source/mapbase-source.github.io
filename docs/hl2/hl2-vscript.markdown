---
layout: article
title: HL2 VScript integration
permalink: /docs/hl2/hl2-vscript/
breadcrumb: true
---

This article serves as a reference for what HL2-related functions Mapbase adds to [VScript](/docs/vscript/). For a guide on how VScript can be used by a HL2 mapper in general, see [Using VScript as a HL2 mapper](/docs/hl2/hl2-vscript-guide/).

# Players, NPCs, and Weapons

Mapbase exposes player, NPC, and weapon classes/functions primarily used in Half-Life 2.

Players and NPCs share a single class called `CBaseCombatCharacter`, which is one of the classes extensively exposed to VScript by Mapbase. More documentation can be given with the `script_help` command, but it contains several functions for reading weapon-related data, including the amount of ammo a NPC or player currently has. Weapons themselves have also been exposed with most of the functions regularly used in the code.

In spite of the overlap, players and NPCs have been given their own exclusive functions as well. Not all of them are listed here, but here's a basic overview of what can now be done:

### Players (`CBasePlayer`)

* There are now functions for monitoring and controlling the player's "button mask", or which binds the player is holding down. This is used by `game_ui` to detect what the player is pressing and `player_speedmod` suppresses abilities by selectively preventing certain buttons from being added to the button mask. *(Both features can also be used through these new VScript functions)*
* There are now functions for detecting HEV suit properties, like the amount of armor, aux power, flashlight battery, etc. are available and whether certain suit features are being used.
* In HL2's HEV suit, support for custom suit devices has been added. (TODO: proper tutorial?)
* A `PlayerRunCommand` hook has been added for controlling the player's movement and button commands as an alternative to the `game_ui` entity.

### NPCs (`CAI_BaseNPC`)

* Functions and classes exist for enemy-related operations, including getting a handle for the current enemy, getting the enemy's last known position, etc. *(you can even get a struct for enemy memory information)*
* Functions exist for NPC squads and a `GetSquad()` function can return a `CAI_Squad` instance which exposes squad information. Squads can also be accessed through a new `Squads` (`CAI_SquadManager`) singleton.
* There are functions for reading, detecting, and controlling a NPC's schedules, conditions, and tasks. A `NPC_TranslateSchedule` hook exists for translating a NPC's current schedule.
* There are functions for reading, setting, and translating a NPC's activities. A `NPC_TranslateActivity` hook exists for translating a NPC's activity from one animation to another under certain conditions.
* A `CAI_Expresser` instance can be accessed with `GetExpresser()` and `CAI_BaseActor` is exposed with a few actor-related functions. These are mostly useful for NPC speech and choreography.

See [List of Script Functions](/docs/vscript/script-funcs/) for a full list of available functions.
