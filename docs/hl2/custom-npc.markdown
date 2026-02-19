---
layout: article
title: Making a custom NPC
permalink: /docs/hl2/custom-npc/
breadcrumb: true
---

Mapbase does not currently provide a comprehensive custom NPC aside from `npc_zombie_custom` and `generic_actor_custom`, but it does make it easy to extend any existing NPC in such a way that it behaves and acts like a new one.

This guide covers a few different types with increasing complexity:

1. Custom companion character based on `npc_citizen`, `npc_alyx`, or another ally (replacing voice lines, etc.)
2. Custom soldier type based on `npc_combine_s` (faking new abilities, etc.)
3. Other notes on adding custom behavior

* Table of Contents
{:toc}

# Custom companion character

Giving `npc_citizen` or one of the other ally NPCs a custom model is already (mostly) possible in vanilla HL2, although replacing their voice lines cleanly would normally require changes to mod files.

Mapbase makes three different changes which make it easier to create a custom companion character without extensive base changes:

* A NPC can be made to use a different class's responses by putting `classname:<name>` in the "Response Context" keyvalue.
* Custom responses can be mounted by maps via a new `maps/<map name>_talker.txt` file.
* Abilities previously specific to Alyx (e.g. dynamic interactions, weapon proficiency, unique responses, etc.) are now optionally available on citizens and other human companions.

As an example of this, we'll create a `npc_citizen` with a custom classname context called `npc_wyatt`. `npc_wyatt` is not a real NPC, but it is the example we will use for its custom responses. Other new abilities can be enabled discretionarily by keyvalues.

1. Create a `npc_citizen`.
2. Set its model to the desired model name. You may need to use a separate entity with a model browser to find the model you want, and then copy its path over to the `npc_citizen`.
3. Set its citizen type to 'Unique', and turn off the Random Head spawnflag.
4. **In the "Response Context" keyvalue, add `classname:npc_wyatt`.**

Now, the citizen will no longer speak default citizen lines. Instead, it will use responses that correspond to `npc_wyatt`. Since `npc_wyatt` is not an NPC in default HL2, you are able to define those responses yourself.

To define responses, you would use the [Response System](https://developer.valvesoftware.com/wiki/Response_System), and in the scope of one map, you use a map-specific talker file.

Proper documentation on the Response System can be found on the VDC, but this guide will give you a place to start by copying the default citizen responses.

Assuming you do not already have a `<map name>_talker.txt`, you can just copy the citizen talker file directly. Talker files are located in the `scripts` folder, which in most copies of HL2 is a loose file. Go to `hl2/scripts/talker` and copy `npc_citizen.txt` into your local mod's `maps` folder. Then, rename it to `<map name>_talker.txt`, with `<map name>` being the name of your map.

If you open up this file, you will see a bunch of scripting used to decide what citizens should say in different cases. You now have the ability to define these for your character.

Take the following steps to set up this file for the new companion:

1. At the bottom, remove the lines beginning with `#include`. These are other files containing scripted responses; the only one relevant for general AI is `npc_citizen_commandermode`, the contents of which you may want to copy if you want your companion to have unique squad command lines.
2. Replace all instances of "Citizen" with "Wyatt" in the entire file. This could be done with a simple find/replace in Notepad.
3. Go through each response and remove the lines beginning with `scene` or `speak`.
4. Add your custom lines to their respective responses. Soundscripts can be played with `speak "<soundscript name>"`. Note that death sounds may need to have `noscene` at the end to work.

# Custom soldier type



# Other options


