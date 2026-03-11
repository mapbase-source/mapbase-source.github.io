---
layout: article
title: Getting Started as a Mapper
permalink: /setup/mapping/
breadcrumb: true
---

This is a guide for how to get started with Mapbase as a level designer.

---

## Installing Mapbase

{% include note.html	txt="If you are working directly with a mod that <i>already uses</i> Mapbase, then you generally do not need to follow this section. This is for installing Mapbase separately as an independent mapper." %}

"Installing" Mapbase is basically just like any other Source mod, except there's three folders instead of one. To install Mapbase, follow these instructions:

* Install Source SDK Base 2013 Singleplayer and set the branch to `upcoming` if you haven’t already.
* Extract `mapbase_episodic`, `mapbase_hl2`, and `mapbase_shared` from the .zip archive downloaded earlier to your “SteamApps/sourcemods” directory.
* Restart Steam.

You should now have "Mapbase - Episodic" and "Mapbase - HL2" in your Steam library. If not, make sure you're using the same drive Steam is installed on and ensure that you extracted the folders correctly. (e.g. `SteamApps/sourcemods/mapbase_shared`)

See [Mapbase Setup Troubleshooting](/setup/troubleshooting/) if you encounter issues installing Mapbase.

---

# Using Mapbase in Hammer

{% include warning.html	txt="If you are mapping for Source 2013 <strong>Singleplayer</strong>, then setting up Mapbase for Hammer has two extra steps compared to setting up Hammer for other mods!" %}

After installing Mapbase itself, you must have three things to use it with Hammer and other SDK tools:

1. A custom game configuration which gets the assets and directories of the mod of your choice.
2. A shortcut to `hammer.exe` that has the `-game` launch parameter followed by the absolute path to your mod (e.g. `hammer.exe -game "C:\Program Files (x86)\Steam\SteamApps\sourcemods\mapbase_episodic"`). The [Mapbase Multi-Tool](/setup/multi-tool/) can create these shortcuts automatically. Note that this step is not necessary if you are using Hammer++.
3. Map compilation tools that support custom shaders. Slartibarty's Slammin' Source or [Mapbase's custom compilers](https://www.moddb.com/mods/mapbase/downloads/mapbase-compile-tools) can be used. These tools should be placed in the same `bin` directory as `hammer.exe`. See [this article](/docs/compilers/) for more information on Mapbase's compilers.

---

### Custom game config

You must create your own custom game configuration for the mod you are mapping for.

The custom game config tells Hammer what game/mod you're mapping for. For example, this is what a custom game config for `mapbase_episodic` looks like:

<img src="{{ "/" | relative_url }}assets/setup/custom-game-config.png" />

If you are only setting up for Mapbase itself and not a mod using Mapbase, the custom game config would point to `mapbase_episodic` or `mapbase_hl2`. If you are setting up for a separate mod using Mapbase, the custom game config would point to that mod's name instead.

Mapbase's default FGDs are located in `mapbase_shared/shared_misc/bin`. You should only have to include `halflife2.fgd` or `tf.fgd`, depending on which game you are mapping for. **Do NOT** include `base.fgd`. Some derivative mods may also have their own FGD which should be used instead (e.g. Map Labs uses `maplab.fgd`).

#### Raw configs

Instead of creating a game config in Hammer, you could also modify `bin/GameConfig.txt` directly and insert configs into it.

Here are some sample configs for Mapbase's core mods:

```
        "Mapbase - Episodic"
        {
            "GameDir"        "C:\Program Files (x86)\Steam\SteamApps\sourcemods\mapbase_episodic"
            "Hammer"
            {
                "GameData0"        "C:\Program Files (x86)\Steam\SteamApps\sourcemods\mapbase_shared\shared_misc\bin\halflife2.fgd"
                "DefaultTextureScale"        "0.250000"
                "DefaultLightmapScale"        "16"
                "GameExe"        "C:\Program Files (x86)\Steam\SteamApps\common\Half-Life 2\hl2.exe"
                "DefaultSolidEntity"        "func_detail"
                "DefaultPointEntity"        "info_player_start"
                "BSP"        "C:\Program Files (x86)\Steam\SteamApps\common\Half-Life 2\bin\vbsp.exe"
                "Vis"        "C:\Program Files (x86)\Steam\SteamApps\common\Half-Life 2\bin\vvis.exe"
                "Light"        "C:\Program Files (x86)\Steam\SteamApps\common\Half-Life 2\bin\vrad.exe"
                "GameExeDir"        "C:\Program Files (x86)\Steam\SteamApps\common\Half-Life 2"
                "MapDir"        "C:\Program Files (x86)\Steam\SteamApps\common\Half-Life 2\sourcesdk_content\ep2\mapsrc"
                "BSPDir"        "C:\Program Files (x86)\Steam\SteamApps\sourcemods\mapbase_episodic\maps"
                "CordonTexture"        "tools\toolsskybox"
                "MaterialExcludeCount"        "0"
            }
        }

        "Mapbase - HL2"
        {
            "GameDir"        "C:\Program Files (x86)\Steam\SteamApps\sourcemods\mapbase_hl2"
            "Hammer"
            {
                "GameData0"        "C:\Program Files (x86)\Steam\SteamApps\sourcemods\mapbase_shared\shared_misc\bin\halflife2.fgd"
                "DefaultTextureScale"        "0.250000"
                "DefaultLightmapScale"        "16"
                "GameExe"        "C:\Program Files (x86)\Steam\SteamApps\common\Half-Life 2\hl2.exe"
                "DefaultSolidEntity"        "func_detail"
                "DefaultPointEntity"        "info_player_start"
                "BSP"        "C:\Program Files (x86)\Steam\SteamApps\common\Half-Life 2\bin\vbsp.exe"
                "Vis"        "C:\Program Files (x86)\Steam\SteamApps\common\Half-Life 2\bin\vvis.exe"
                "Light"        "C:\Program Files (x86)\Steam\SteamApps\common\Half-Life 2\bin\vrad.exe"
                "GameExeDir"        "C:\Program Files (x86)\Steam\SteamApps\common\Half-Life 2"
                "MapDir"        "C:\Program Files (x86)\Steam\SteamApps\common\Half-Life 2\sourcesdk_content\hl2\mapsrc"
                "BSPDir"        "C:\Program Files (x86)\Steam\SteamApps\sourcemods\mapbase_hl2\maps"
                "CordonTexture"        "tools\toolsskybox"
                "MaterialExcludeCount"        "0"
            }
        }
```

### The shortcut

{% include note.html	txt="This step is not necessary if you are using Hammer++." %}

Once you’ve set up your new configuration, you must launch Hammer using the `-game` parameter pointing to the mod of your choice. This is usually done through a shortcut to `hammer.exe` that has the `-game` launch parameter followed by the absolute path to your mod (e.g. `hammer.exe -game "C:\Program Files (x86)\Steam\SteamApps\sourcemods\mapbase_episodic"`). The [Mapbase Multi-Tool](Mapbase-Multi-Tool) can create these shortcuts automatically and makes this step painless.

If you are only setting up for Mapbase itself and not a mod using Mapbase, the shortcut would point to `mapbase_episodic` or `mapbase_hl2`. If you are setting up for a separate mod using Mapbase, the shortcut would point to that mod's name instead.

This is what the Shortcut Creator in the Mapbase Multi-Tool and a shortcut created by the tool look like:

<img src="{{ "/" | relative_url }}assets/setup/multitool-shortcuts-example.png"/>

* "Bin Directory" should be the same directory Hammer is located in.
* "Mod Directory" should be the mod the shortcut(s) should point to, like `mapbase_episodic`. Derivative mods should have their own folder name here.

This should be done for every Mapbase mod you plan on using Hammer with. Other SDK tools--like Faceposer or HLMV--must also be launched using a `-game` shortcut.

After setting up a shortcut for the mod of your choice, you must launch Hammer using that shortcut when you want to use Hammer for that mod.

### Compile tools

Mapbase also requires users to use map compilation tools which support custom shaders. VBSP++, Slartibarty's Slammin' Source, and [Mapbase's custom compilers](https://www.moddb.com/mods/mapbase/downloads/mapbase-compile-tools) all support custom shaders, so you must install one or use a mix of them in order to compile maps for Mapbase.

---

## Conclusion

Once you've set up the Mapbase mods in `sourcemods`, you should be prepared to launch Mapbase or mods utilizing Mapbase.

Once you've set up the custom game config, the Hammer shortcut, and the custom compile tools, you should be prepared to create maps in Mapbase.

If you encounter any issues setting up Mapbase as a mod or issues setting up Mapbase in Hammer, see [Mapbase Setup Troubleshooting](/setup/troubleshooting/) for common problems and solutions.
