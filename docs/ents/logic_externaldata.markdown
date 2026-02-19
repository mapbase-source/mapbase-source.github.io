---
layout: article_ent
title: logic_externaldata
permalink: /docs/ents/logic_externaldata/
breadcrumb: true
ent_icon: assets/entities/logic_externaldata.png
type: PointClass
mb_version: 
game: 
---

Saves and reads keyvalue data from %mapname%_externaldata.txt. Useful for when you want to read and write data across multiple playthroughs.

<br>

---

### KeyValues
{% include ent_kv.html	name="Block"	desc="The key whose subkeys should be read from/written to. Using '!self' just uses this entity's name as the block name."	internal="Target"	type="string" %}
{% include ent_kv.html	name="Save after each change"	desc="Saves each change without having to use the 'Save' input."	internal="SaveEachChange"	type="choices" %}
{% include ent_kv.html	name="Reload file before each action"	desc="Reloads the file before each change this entity makes. This is mostly useful when there is a possibility that the file could change by other means which could be overwritten, like another logic_externaldata somewhere."	internal="ReloadBeforeEachAction"	type="choices" %}
{% include ent_kv.html	name="Map Name"	desc="logic_externaldata normally uses ''<current map's name>_externaldata.txt'', but you could override the map name here to create/access external data intended for other maps. You could also just use this to write to additional external data files whether they're intended for another map or not."	internal="Mapname"	type="string" %}

### Inputs
{% include ent_io.html	name="WriteKeyValue"	desc="Writes the specified keyvalue. If the keyvalue already exists, it will be overwritten. If not, it will be created. Format is '<key> <value>', like AddOutput. (Spaces after the first will still be incorporated into the value)"	type="string" %}
{% include ent_io.html	name="RemoveKeyValue"	desc="Removes the specified key."	type="string" %}
{% include ent_io.html	name="ReadKey"	desc="Reads the specified key, firing OutValue with its value."	type="string" %}
{% include ent_io.html	name="SetBlock"	desc="Sets the block of keyvalues the logic_externaldata reads from. Using !activator or !caller uses their respective entity names."	type="string" %}
{% include ent_io.html	name="Save"	desc="Saves to %mapname%_externaldata.txt."	type="void" %}
{% include ent_io.html	name="Reload"	desc="Reloads %mapname%_externaldata.txt."	type="void" %}

### Outputs
{% include ent_io.html	name="OutValue"	desc="Fires each time a key is read from. Passes the value."	type="string" %}
