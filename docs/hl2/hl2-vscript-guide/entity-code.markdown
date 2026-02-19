---
layout: article
title: Basic entity coding tutorial
permalink: /docs/hl2/hl2-vscript-guide/entity-code/
breadcrumb: true
---

This tutorial focuses on creating a script which has practical advantages over the I/O system.

Similar to how entities have their own inputs, entities also have their own functions that could be "fired" in VScript.

For this tutorial, we'll create a simple script which sets the player's health to the health of a NPC. In the I/O system, it would be difficult to get the health of an entity. You may have to use `logic_keyfield` or `logic_datadesc_accessor` *(both of which are Mapbase entities)* to get the entity's health. In VScript, this is much easier.

---

### 1. Creating a script file

First, go to the `scripts/vscripts` directory of your mod. If that directory does not exist, create it.

Inside of the `scripts/vscripts` directory, create a `.txt` file and change its extension to `.nut`. You can name it anything you want, like `test_transfer_health`. It should not have any spaces.

Open the file using Notepad, Notepad++, or any other text editor.

---

### 2. Adding the code

First, add `function SetPlayerHealthToNPC()` at the top of the file. This defines a new set of code which can be triggered later. You can technically use any name for this function, but the name `SetPlayerHealthToNPC` will be used in this tutorial for clarity.

After you have added `SetPlayerHealthToNPC`, add a `{` on the line below it. Then, add a `}` below that one. These are used to group code within the function.

Your file should now look like this:

```squirrel
function SetPlayerHealthToNPC()
{
}
```

Now we will make the function actually find the NPC and get its health. In this case, we will refer to the NPC as "wyatt", with the code searching for an entity which has the targetname "wyatt".

In between the `{` and `}` lines, add a new line with the text "local wyatt =".

```squirrel
function SetPlayerHealthToNPC()
{
	local wyatt =
}
```

Then, on that same line, add the text "Entities.FindByName()".

```squirrel
function SetPlayerHealthToNPC()
{
	local wyatt = Entities.FindByName()
}
```

`local wyatt` creates a new variable named "wyatt" inside of `SetPlayerHealthToNPC`.

`Entities.FindByName()` is an internal function which finds an entity in the map by its name, similar to how an output finds an entity and fires an input on it. The `=` makes the `wyatt` variable use the NPC it finds.

This function takes parameters in between the parentheses, separated by commas. These parameters are similar to what you'd use in an output. To make `Entities.FindByName()` find "wyatt", it must use parameters in this order:

```squirrel
Entities.FindByName(null, "wyatt")
```

"wyatt" *must* be in the second parameter. The first parameter is used for finding multiple entities of the same name, so we use `null` to indicate that we're looking for the first entity named "wyatt" instead of, say, the second entity named "wyatt".

In the function itself, it would look like this:

```squirrel
function SetPlayerHealthToNPC()
{
	local wyatt = Entities.FindByName(null, "wyatt")
}
```

`wyatt` will now refer to a NPC named "wyatt", but if there is no NPC named "wyatt" in the level, the `wyatt` variable will simply be `null`, which means `wyatt` doesn't point to anything.

To make sure `wyatt` actually points to an entity, we use an `if` statement:

```squirrel
if (wyatt != null)
```

This `if` statement is considered true if `wyatt` is not `null`.

Similar to the function, an `if` statement could have its own code which only runs if the statement is true. They can be enclosed with `{` and `}`. In the function itself, it would look like this:

```squirrel
function SetPlayerHealthToNPC()
{
	local wyatt = Entities.FindByName(null, "wyatt")

	if (wyatt != null)
	{
	}
}
```

Now that we know `wyatt` is an entity which exists, we can get its health.

First, we'll add a new variable called "health":

```squirrel
local health
```

Then, we use a `=` followed by `wyatt.GetHealth()`:

```squirrel
local health = wyatt.GetHealth()
```

This gets the in-game health of the wyatt NPC, storing it in the `health` variable.

In the function itself, it would look like this:

```squirrel
function SetPlayerHealthToNPC()
{
	local wyatt = Entities.FindByName(null, "wyatt")

	if (wyatt != null)
	{
		local health = wyatt.GetHealth()
	}
}
```

Now it's time to set the player's health to this value. This is done in a similar fashion to getting wyatt's health.

In entity scripts, there's always a variable called `player` which refers to the player. It can only be used in singleplayer games.

To set the player's health to our new `health` variable, we just use `player` followed by `.SetHealth(health)`:

```squirrel
player.SetHealth(health)
```

In the function itself:

```squirrel
function SetPlayerHealthToNPC()
{
	local wyatt = Entities.FindByName(null, "wyatt")

	if (wyatt != null)
	{
		local health = wyatt.GetHealth()
		player.SetHealth(health)
	}
}
```

Our code is now complete. `SetPlayerHealthToNPC` searches for an entity named "wyatt" and, if it exists, it sets the player's health to wyatt's health.

Now that we've written our code, it's time to access it from the map.

---

### 3. Running the file

Like outputs, an entity can run a VScript file and store its code until the entity is removed.

Entities can run VScript files through a keyvalue (**Entity Scripts**) or an input (`RunScriptFile`). Both of these take the filename of the script(s) to run. The extension is optional and you do not need to insert `scripts/vscripts`. For example, if you named your file `test_transfer_health.nut` and the file is already in `scripts/vscripts`, then you will only need to use "test_script" as the keyvalue or parameter.

In Hammer, you can create an entity (e.g. a `logic_relay` or an `info_target`) and use either the "Entity scripts" keyvalue or the `RunScriptFile` input on the entity to run your test file. You can also run it on the "wyatt" NPC itself.

---

### 4. Calling `SetPlayerHealthToNPC`

When the entity runs the script, it will have the `SetPlayerHealthToNPC` function stored and waiting to be fired, similar an output. We need to call that function from somewhere, which would then set the player's health to that of the "wyatt" NPC.

In the I/O system, this can be done by firing `RunScriptCode` on the entity running the script. This input should have a parameter of "SetPlayerHealthToNPC()", which will tell the entity to call its `SetPlayerHealthToNPC` function.

You can fire `RunScriptCode` with this parameter by using something in the map or by using the `ent_fire` console command in-game.

---

### 5. Testing

Compile your map and load it in-game. Test the `RunScriptCode` input with the `SetPlayerHealthToNPC()` parameter. If you followed these steps correctly and there is a NPC in the map named "wyatt", the player's health will be set to the health of that NPC.

If this does not work, check the steps above and make sure you followed them correctly.

---

### 6. Conclusion

You have now written a basic script file which uses the functions on a class. This tutorial was meant to give a peek into some of VScript's advantages over the I/O system. The function we wrote can be useful in its own right, but it's also a starting point for more complicated logic.

For example, this is the script we used in the tutorial:

```squirrel
function SetPlayerHealthToNPC()
{
	local wyatt = Entities.FindByName(null, "wyatt")

	if (wyatt != null)
	{
		local health = wyatt.GetHealth()
		player.SetHealth(health)
	}
}
```

Now look at this one:

```squirrel
function SetPlayerHealthToAllOfNPC()
{
	local health = 0

	local wyatt = null
	while ( (wyatt = Entities.FindByName(wyatt,"wyatt")) != null )
	{
		health += wyatt.GetHealth()
	}

	player.SetHealth(health)
}
```

This slightly different function, `SetPlayerHealthToAllOfNPC`, sets the player's health to the health of all NPCs named "wyatt" added together. If there's a headcrab named "wyatt" with `10` health and also a zombie named "wyatt" with `50` health, the player's health will be set to `60`.

That is a peek at some of the more complicated programming you can do with VScript. `GetHealth()` and `SetHealth()` are also just two functions out of many that can be used to have finer control than what I/O and logic entities are capable of.
