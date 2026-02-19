---
layout: article
title: Using VScript as a HL2 mapper
permalink: /docs/hl2/hl2-vscript-guide/
breadcrumb: true
---

This article is intended for Half-Life 2 mappers who have no experience with VScript to learn what it is and how it can be used in maps. For direct documentation of Half-Life 2 changes in VScript, see [HL2 VScript integration](/docs/hl2/hl2-vscript/).

VScript fulfills a role somewhat similar to logic entities and the I/O system in the fact that you can use it to script your level. However, VScript provides a more direct bridge to the game code and, for some users, may be easier to engineer complex logic with.

VScript uses a scripting language called Squirrel. There are many tutorials available for how to use it, but basic tutorials are provided here as well. These tutorials assume you do not have any previous programming experience. If it helps make it less intimidating, remember that VScript is only as complex as you want it to be.

## Using VScript to simplify map logic

Although VScript can make things more complex, it also works really well for making things *less* complex.

Traditional logic entities and I/O can sometimes get unwieldy if there's a lot of logic involved at once. VScript can be used to simplify most types of operations, as functions like storing numbers, adding/subtracting numbers, finding entities, etc. can be done using just one line of text. This can make complex logic easier to keep up with, and it can also be used to reduce the level's entity count if needed.

If you want to learn how to use VScript, it may help to start by doing it *alongside* the I/O system. [Click here to go to a tutorial on how you can use VScript to interact with the I/O system.](/docs/hl2/vscript-guide/basic-io/)

## Using VScript to do what's not possible with I/O

Typically, VScript is more technically capable than I/O, even with Mapbase's enhancements. Most of these capabilties are related to its nature as a scripting layer, as well as the fact the game usually exposes more functions to it than I/O alone. This side may be a bit more complex if you aren't already a programmer, but if you think you can benefit from what VScript is capable of, then it may be worth the trouble to take a look.

[Click here to go to a tutorial which makes it simple and easy to understand.](/docs/hl2/vscript-guide/entity-code/)

## Using VScript to modify game behavior

In some of Valve's games, VScript had unique abilities to modify game-specific behavior. This often replaced dedicated logic entities (e.g. `tf_gamerules`) or even the regular keyvalue-based `scripts` files.

For example, in Left 4 Dead 2, you can use VScript to influence or detect the behavior of the AI director which controls zombie spawning. This is often used to choreograph campaign finales.

Half-Life 2 doesn't have any of those kinds of complex built-in game systems, but Mapbase still adds hooks to modify certain HL2-related elements. For example, Mapbase adds `NPC_TranslateActivity` and `NPC_TranslateSchedule` hooks for modifying NPC behavior. `NPC_TranslateActivity` allows VScript to modify the animations a NPC plays during its AI without requiring `scripted_sequence`.
