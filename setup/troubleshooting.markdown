---
layout: article
title: Mapbase Setup Troubleshooting
permalink: /setup/troubleshooting/
breadcrumb: true
---

This article tries to cover common issues encountered by users trying to set up Mapbase. If you cannot find the solution to your problem here, you may be able to find help on [Mapbase's Discord server](https://discord.gg/nd8tXNg).

* Table of Contents
{:toc}

---

<br>

# Installing Mapbase

<br>

---

<br>

#### Mapbase crashes every time I try to start it!

Make sure Source SDK Base 2013 Singleplayer is running on the `upcoming` branch.

<br>

---

<br>

#### None of the Mapbase mods are appearing on Steam!

Make sure you are placing the Mapbase mod folders inside of the `sourcemods` folder and the `sourcemods` folder is in the right place. For example, `Steam/SteamApps/sourcemods/mapbase_episodic` is a valid directory.

Otherwise, this often has to do with whether you use multiple drives for storing Steam games; you may need your `sourcemods` folder to be located in the same directory as Source SDK Base 2013 Singleplayer.

<br>

---

<br>

# Using Mapbase in Hammer

<br>

---

#### My grid has disappeared and my brushes, models, etc. are missing! (or in wireframe)

<p align="left">
<img src="{{ "/" | relative_url }}assets/setup/troubleshooting-noshaders.png" width="640"/>
</p>

This happens when Hammer is launched without a valid `-game` parameter while using a Mapbase config. Make sure you are using a shortcut to launch Hammer and make sure the shortcut was set up correctly. Please return to the setup page for more information on setting up a shortcut.

<br>

---

<br>

#### Hammer crashes every time I try to place a Mapbase entity!

This usually happens when multiple linked FGDs are manually included in the Mapbase config. `halflife2.fgd` includes `base.fgd` automatically, so you should normally only be using `halflife2.fgd` in your Mapbase config.

Some mods (e.g. Map Labs) may also have their own FGD which includes both `halflife2.fgd` and `base.fgd`, or is just a renamed modification of `halflife2.fgd`.

<p align="left">
<img src="{{ "/" | relative_url }}assets/setup/troubleshooting-multifgds.png" width="768"/>
</p>

<br>

---

<br>

#### Maps are stuck in fullbright!

Issues like this can happen for many reasons, but if you're setting up Mapbase and you encounter this issue after compiling a map, this is usually because you didn't use compatible compilers.

In order to compile Mapbase maps, you must use either Mapbase's custom compilers or Slartibarty's Slammin' Source mapping tools. See [this article](/docs/compilers/) for more information on which compilers to use.

<br>

---

<br>

#### Maps refuse to compile!

<p align="left">
<img src="{{ "/" | relative_url }}assets/setup/troubleshooting-badcompilers.png" width="800"/>
</p>

Issues like this can happen for many reasons, but if you're setting up Mapbase and you encounter this issue the first time you try to compile a map, it's usually because you put the map compilers in the wrong place.

In order to work properly, custom map compilers must be in the same `bin` folder (or, for the TF2 SDK, `bin/x64`) as Hammer because they depend on the adjacent `.dll` files. It's recommended that you back up the original compilers before overwriting them. Make sure your custom game config uses the correct directories as well.
