---
layout: article
title: Putting a mod on Mapbase
permalink: /setup/mods/
breadcrumb: true
---

This is a general-purpose page for both the process of making existing sourcemods begin running on Mapbase as well as the process of creating a new sourcemod using Mapbase from the start.

---

## File structure

There are two main usage schemes for running on and distributing Mapbase:

* **Drawing from external folders** - Having Mapbase's mod folders adjacent to your own.
* **Completely built-in** - Merging Mapbase's assets directly inside of your mod. This is required for mods going on Steam.

### Drawing from external folders

#### Mod Templates

Mapbase's ModDB page contains two lightweight mod templates for creating mods based off of HL2 or EP1/EP2. They are set up to use the basic dependency scheme (draw from adjacent Mapbase folders) and do not contain many files. You can use them to start your mod or see how `gameinfo.txt`'s Mapbase dependency works.

### Completely built-in

This is the more difficult and less common approach, but it allows your mod to run fully independently of Mapbase and eliminates any possibility for confusion or error involving the additional `mapbase_` folders.

This is usually done by copying *(not extracting)* Mapbase's VPKs. Here are some instructions for copying and organizing Mapbase's VPKs in this way for your mod:

1. First, you will need a place to put the VPKs. You can create a `mapbase` folder in your mod's root folder for this. (e.g. `sourcemods/mod_name/mapbase`).
2. Inside of your new folder, you will need additional subfolders to separate Mapbase's content VPKs, reflecting the `mapbase_shared`, `mapbase_hl2`, `mapbase_episodic` scheme. This is often done by naming the folders after Mapbase's folders, but without the `mapbase_` part (e.g. `shared`, `hl2`, and `episodic`)
3. Now copy Mapbase's VPKs to your new subfolders. These VPKs are found in the release build. (e.g. go to `mapbase_episodic/content` and copy its contents to `mod_name/mapbase/episodic`, etc.) *(Note: `mapbase_shared/shared_misc/bin` can be merged with your own mod's root `bin` folder)*
4. If your mod is **not** using its own code, copy Mapbase's DLLs in the mod of your choice (`mapbase_episodic`, etc.) to your own mod's `bin` folder. (`discord_rpc.dll` and `game_shader_dx9.dll` count too)
5. In `gameinfo.txt`, add the following commands to where you would normally mount Mapbase externally (see the mod templates for reference):
```
            game+mod            |gameinfo_path|mapbase/episodic/*
            game+mod            |gameinfo_path|mapbase/hl2/*
            game+mod            |gameinfo_path|mapbase/shared/shared_content_v7_0.vpk
```

To top all of this, copy `MAPBASE_EXTERNAL_CONTENT.txt` from Mapbase's release build into the root `mapbase` folder, or put it in some other prominent location.

Your mod should now be able to run independently of Mapbase's original sourcemod folders. You may need to update these copied files yourself whenever Mapbase is updated.

# Assets

## Materials (.vmt files)

{% include note.html	txt="This step is not needed if you are using the TF2 SDK, which supports overriding shaders directly." %}

Mapbase runs with modified versions of Source 2013's shaders. These modified versions are supposed to fully replace the original shaders, but because of in-engine caveats and Mapbase's choice of implementation, each `.vmt` file must manually point to the new shaders. HL2/EP1/EP2's materials are converted already, but **all of a mod's custom materials should be changed to use the new shaders**. Not converting them could make them look weird alongside the converted HL2 materials, and they won't use any of the shader benefits.

**Don't worry about converting them manually!** The [Mapbase Multi-Tool](/setup/multi-tool/) has a batch VMT conversion tool. You can use it to convert entire `materials` directories.

## Coding

If you are using an existing mod with existing custom code, it *must* be a Git repo that is forked from the original Source SDK 2013 repository run by Valve in order to merge Mapbase's code automatically. Code based off of .ZIP downloads or other methods unrelated to Git cannot take advantage of Git to merge Mapbase's code. If you do not know how to use Git, or you are not aware of what Git is, I highly recommend reading up on it if you are a programmer.

If your repo is not eligible for automatically merging Mapbase's code, you will need to either manually bring Mapbase's code to your repo or bring all of your code to Mapbase's repo. I highly recommend moving your own code to a Git-based fork of Source 2013 so you could not only do the automatic Mapbase merge, but also take advantage of Git's other features.

---

If you are creating a new mod that is going to use custom code, I highly recommend cloning this repo with Git rather than downloading it as a .ZIP. This will allow you to update your code when Mapbase updates and allows you to take advantage of Git's other benefits. If you do not know how to use Git, or you are not aware of what Git is, I highly recommend reading up on it before starting.

When the repo is cloned or downloaded, you will be able to work as normal as if it were a regular copy of Source SDK 2013. DLLs placed in your mod's `bin` folder will override stock Mapbase DLLs if it draws from the regular Mapbase folders.

{% include note.html	txt="If you are using Mapbase's Discord RPC integration (which is now disabled by default), then you need to have a copy of `discord_rpc.dll` in the same folder as `client.dll` at all times. This is a limitation with the way it is implemented and cannot be fixed easily." %}

---

When Mapbase updates, you can use Git to pull from this repo's `master` branch.

## More Help

If you require more assistance in setting up your mod to use Mapbase, or want more details regarding some of the options available to you, join Mapbase's Discord server and/or contact Blixibon on Discord, ModDB, or Steam.
