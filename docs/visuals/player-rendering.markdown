---
layout: article
title: Player Rendering
permalink: /docs/visuals/player-rendering/
breadcrumb: true
---

Starting with v8.0, Mapbase adds a few new features which allow the player's model to appear in first-person.

{% include tip.html	txt="In Half-Life 2, the player's model can be set through the <a href=\"/docs/hl2/protagonist-system/\">Protagonist System</a>." %}

### Showing the player externally

By default, the player is completely invisible to itself, even in mirrors or on cameras. You can allow the player to appear in these views through one of the following methods:

- Using the `SetPlayerDrawExternally` input on `logic_playerproxy`.
    - *(Use this method if you are making a single map)*
- Adding `player_default_draw_externally 1`  to `gameinfo.txt`.
    - *(Use this method if you are making an independent mod)*
- Setting `cl_playermodel_draw_externally_override` to `1` in-game.
    - *(Use this method for debugging or for giving the player a customizable option)*

### Showing the player's legs

You can draw legs beneath the player's camera through one of the following methods:

- Using the `SetPlayerDrawLegs` input on `logic_playerproxy`.
    - *(Use this method if you are making a single map)*
- Adding `player_default_legs 1`  to `gameinfo.txt`.
    - *(Use this method if you are making an independent mod)*
- Setting `cl_playermodel_legs_override` to `1` in-game.
    - *(Use this method for debugging or for giving the player a customizable option)*

The code automatically positions the model and hides bones based on data from the model's QC keyvalues. This covers most conventional human models already, but if you need to hide more bones or change the camera's position, see Mapbase's model sources; the keyvalues block for playermodel data cam be seen [here](https://github.com/mapbase-source/mapbase-model-src/blob/eae037edc262a0b36a1d40f7ad61b85a67d3bc7d/modelsrc/male_shared.qc#L275), with the associated bone list transcluded from [here](https://github.com/mapbase-source/mapbase-model-src/blob/eae037edc262a0b36a1d40f7ad61b85a67d3bc7d/modelsrc/mapbase_player_include_bonetransforms.qci).
