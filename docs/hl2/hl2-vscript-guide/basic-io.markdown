---
layout: article
title: Basic I/O tutorial
permalink: /docs/hl2/hl2-vscript-guide/basic-io/
breadcrumb: true
---

This tutorial focuses on firing an I/O input from within VScript. This is the same kind of input which would normally be triggered from an entity's output in Hammer or with the `ent_fire` console command.

Similar to how each entity can have its own outputs, each entity can have its own Entity Scripts, and these scripts can be influenced by other scripts (or by inputs).

For this tutorial, we'll create a simple script which fires the `SetHealth` input on the player with a parameter of `85`, which sets the player's health to 85. In the I/O system, this can be done directly from an output. In-game, this can be done with the `ent_fire` command. This tutorial will tell you how this can be done in VScript.

---

### 1. Creating a script file

First, go to the `scripts/vscripts` directory of your mod. If that directory does not exist, create it.

Inside of the `scripts/vscripts` directory, create a `.txt` file and change its extension to `.nut`. You can name it anything you want, like `test_script`. It should not have any spaces.

Open the file using Notepad, Notepad++, or any other text editor.

---

### 2. Adding the code

Inside of this script file, begin by adding `function SetPlayerHealthTo85()` to the top of the file. This defines a new set of code which can be triggered later. In this case, it will be used to fire `SetHealth`. You can technically use any name for this function, but the name `SetPlayerHealthTo85` will be used in this tutorial for clarity.

After you have added `SetPlayerHealthTo85`, add a `{` on the line below it. Then, add a `}` below that one. These are used to group code within the function.

Your file should now look like this:

```squirrel
function SetPlayerHealthTo85()
{
}
```

Now we will make the function actually fire `SetHealth` on the player.

In between the `{` and `}` lines, add a new line with the text "EntFire()".

```squirrel
function SetPlayerHealthTo85()
{
	EntFire()
}
```

`EntFire()` is a VScript function which fires an input into the map, similar to the `ent_fire` command in the in-game console.

Like inputs, this function takes parameters in between the brackets, separated by commas. These parameters are similar to what you'd use in an output. To make `EntFire()` cause the player (`!player`) to have their health changed (`SetHealth`) to 85, it must use parameters in this order:

```squirrel
EntFire("!player", "SetHealth", "85")
```

In the function itself, it would look like this:

```squirrel
function SetPlayerHealthTo85()
{
	EntFire("!player", "SetHealth", "85")
}
```

Whenever the `SetPlayerHealthTo85` function is triggered, it will fire the `SetHealth` input on the player with a parameter of `85`, which sets the player's health to 85.

Now that we've written our code, it's time to access it from the map.

---

### 3. Running the file

Like outputs, an entity can run a VScript file and store its code until the entity is removed.

Entities can run VScript files through a keyvalue (**Entity Scripts**) or an input (`RunScriptFile`). Both of these take the filename of the script(s) to run. The extension is optional and you do not need to insert `scripts/vscripts`. For example, if you named your file `test_script.nut` and the file is already in `scripts/vscripts`, then you will only need to use "test_script" as the keyvalue or parameter.

In Hammer, you can create an entity (e.g. a `logic_relay` or an `info_target`) and use either the "Entity Scripts" keyvalue or the `RunScriptFile` input on the entity to run your test file.

---

### 4. Calling `SetPlayerHealthTo85`

When the entity runs the script, it will have the `SetPlayerHealthTo85` function stored and waiting to be triggered, similar an output. We need to call that function from somewhere.

In the I/O system, this can be done by firing `RunScriptCode` on the entity running the script. This input should have a parameter of "SetPlayerHealthTo85()", which will tell the entity to call its `SetPlayerHealthTo85` function.

You can fire `RunScriptCode` with this parameter by using something in the map or by using the `ent_fire` console command in-game.

---

### 5. Testing

Compile your map and load it in-game. Test the `RunScriptCode` input with the `SetPlayerHealthTo85()` parameter. If you followed these steps correctly, the player's health will be set to 85.

If this does not work, check the steps above and make sure you followed them correctly.

---

### 6. Conclusion

You have now written a basic script file which interacts with the I/O system. This tutorial was intended to give a simple explanation of what VScript can do. The function we wrote may not be very useful on its own, but it's a starting point for more complicated logic.

For example, this is the script we used in the tutorial:

```squirrel
function SetPlayerHealthTo85()
{
	EntFire("!player", "SetHealth", "85")
}
```

Now look at this one:

```squirrel
function SetPlayerHealthToRandom()
{
	local health = RandomInt( 55, 85 )
	EntFire("!player", "SetHealth", health)
}
```

This slightly different function, `SetPlayerHealthToRandom`, sets the player's health to a random number in between `55` and `85`.

That is a peek at some of the more complicated logic you can use in VScript, where it actually becomes proper coding. There's even a way to set the player's health without using the I/O system at all.
