---
layout: article
title: Autocubemap
permalink: /docs/utils/autocubemap/
breadcrumb: true
---

**Autocubemap** is a utility in Mapbase which automatically builds LDR and HDR cubemaps for one or multiple levels. It can be invoked via console commands or through a unique launch parameter.

Normally, building cubemaps requires you to enter multiple console commands in phases. Autocubemap runs these commands automatically as these phases occur, effectively combining them into one continuous process. Once Autocubemap is initiated, you will not need to run any further commands.

{% include tip.html	txt="Before building cubemaps, Autocubemap runs <code>cfg/buildcubemaps_prep.cfg</code> if it exists. This can be used to invoke additional commands before building cubemaps." %}

### Building cubemaps for one level
You can invoke Autocubemap for the currently loaded level by typing <code>autocubemap_start</code> into the console.

Alternatively, you can invoke Autocubemap immediately after the game loads by using <code>-autocubemap</code> as an additional game launch parameter. You can use this in the compile window in Hammer to automatically build cubemaps after compiling a map.

### Building cubemaps for multiple levels
Autocubemap can also extend its process between multiple levels, automatically hopping from one level to the next without further input. This is useful for when you need to build cubemaps on several levels all at once.

In order to feed Autocubemap multiple levels, you need an external KeyValues file which contains a list of levels. For example, let's say the following text is from <code>scripts/autocubemap_my_levels.txt</code>:

```
"autocubemap.txt"
{
	"my_level_01"	"1"
	"my_level_02"	"1"
	"my_level_03"	"1"
}
```

Autocubemap will go through each of the levels specified in the keyvalue names. The <code>"1"</code> value is not currently used.

To give this list to Autocubemap, use the <code>autocubemap_init [file]</code> command, with <code>[file]</code> being the file containing the list of levels you want to build cubemaps on. In the case of the file above, you would run <code>autocubemap_init "scripts/autocubemap_my_levels.txt"</code>.

After running this command, you can run <code>autocubemap_print</code> to confirm that the level list was read properly. For the file above, this command would print the following into the console:

```
=== CUBEMAPPER MAP LIST ===
my_level_01
my_level_02
my_level_03
========================
```

Once a map list is loaded, running <code>autocubemap_start</code> will build cubemaps on each of the levels specified instead of just the currently loaded map.

### Console commands
Here's a full list of console commands related to Autocubemap:

<table>
	<thead>
		<tr style="text-align: center;">
			<th>Name</th>
			<th>Params/Default</th>
			<th>Type</th>
			<th>Summary</th>
		</tr>
	</thead>
	<tbody>
		{% include cvar.html	name="autocubemap_start"	def=""	type=""		desc="Begins Autocubemap. If a map list has been loaded, then Autocubemap will load the first listed map and build cubemaps on it. If no map list has been loaded, Autocubemap will build cubemaps on the currently loaded level." %}
		{% include cvar.html	name="autocubemap_init"	def=""	type="string"		desc="Loads the specified map list into Autocubemap." %}
		{% include cvar.html	name="autocubemap_print"	def=""	type=""		desc="Prints the contents of any currently loaded map list to the console." %}
		{% include cvar.html	name="autocubemap_clear"	def=""	type=""		desc="Clears any currently loaded map list." %}
		{% include cvar.html	name="autocubemap_hdr_do_both"	def="1"	type="bool"		desc="Specifies whether to build both HDR and LDR cubemaps." %}
		{% include cvar.html	name="autocubemap_hdr_value"	def="2"	type="integer"		desc="What HDR level to use when building HDR cubemaps." %}
	</tbody>
</table>
