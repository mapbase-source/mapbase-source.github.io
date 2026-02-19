---
layout: article_ent
title: math_vector
permalink: /docs/ents/math_vector/
breadcrumb: true
ent_icon: assets/entities/math_vector.png
type: PointClass
mb_version: 
game: 
---

A math_counter variant that specializes in vector operations.

<br>

---

### KeyValues
{% include ent_kv.html	name="Initial Value"	desc="The vector this entity should start with."	internal="startvalue"	type="vector" %}

### Flags
{% include ent_sf.html	name="[1] Disable X"	bit="1" %}
{% include ent_sf.html	name="[2] Disable Y"	bit="2" %}
{% include ent_sf.html	name="[4] Disable Z"	bit="4" %}

### Inputs
{% include ent_io.html	name="Add"	desc="Adds a vector to this entity's current value and fires the OutValue output with the result."	type="vector" %}
{% include ent_io.html	name="Divide"	desc="Divides a vector from this entity's current value and fire the OutValue output with the result."	type="vector" %}
{% include ent_io.html	name="Multiply"	desc="Multiplies a vector from this entity's current value and fires the OutValue output with the result."	type="vector" %}
{% include ent_io.html	name="SetValue"	desc="Sets this entity's current vector to a new value and fires the OutValue output with the result."	type="vector" %}
{% include ent_io.html	name="SetValueNoFire"	desc="Sets this entity's current vector to a new value without firing any outputs."	type="vector" %}
{% include ent_io.html	name="Subtract"	desc="Subtracts a vector from this entity's current value and fires the OutValue output with the result."	type="vector" %}
{% include ent_io.html	name="GetValue"	desc="Causes this entity to fire its OnGetValue output with its current vector. Used for polling the counter when you don't want constant updates from the OutValue output."	type="void" %}
{% include ent_io.html	name="PointAtLocation"	desc="Creates an angle pointing from the entity's current vector to the specified point and fires the OutValue output with the result."	type="vector" %}
{% include ent_io.html	name="PointAtEntity"	desc="Creates an angle pointing from the entity's current vector to the specified entity and fires the OutValue output with the result."	type="target_destination" %}
{% include ent_io.html	name="Normalize"	desc="Normalizes this entity's vector and fires the OutValue output with the result."	type="void" %}
{% include ent_io.html	name="NormalizeAngles"	desc="Normalizes this entity's vector as angles and fires the OutValue output with the result."	type="void" %}
{% include ent_io.html	name="VectorAngles"	desc="Converts this entity's vector to an angle, assuming the current vector is a direction vector. Fires the OutValue output with the result."	type="void" %}
{% include ent_io.html	name="AngleVectorForward"	desc="Converts this entity's vector angles to a vector in the forward direction. Fires the OutValue output with the result."	type="void" %}
{% include ent_io.html	name="AngleVectorRight"	desc="Converts this entity's vector angles to a vector in the right direction. Fires the OutValue output with the result."	type="void" %}
{% include ent_io.html	name="AngleVectorUp"	desc="Converts this entity's vector angles to a vector in the up direction. Fires the OutValue output with the result."	type="void" %}
{% include ent_io.html	name="SetX"	desc="Sets this entity's X coordinate."	type="float" %}
{% include ent_io.html	name="SetY"	desc="Sets this entity's Y coordinate."	type="float" %}
{% include ent_io.html	name="SetZ"	desc="Sets this entity's Z coordinate."	type="float" %}
{% include ent_io.html	name="GetX"	desc="Gets this entity's X coordinate."	type="void" %}
{% include ent_io.html	name="GetY"	desc="Gets this entity's Y coordinate."	type="void" %}
{% include ent_io.html	name="GetZ"	desc="Gets this entity's Z coordinate."	type="void" %}
{% include ent_io.html	name="AddX"	desc="Adds to this entity's X coordinate."	type="float" %}
{% include ent_io.html	name="AddY"	desc="Adds to this entity's Y coordinate."	type="float" %}
{% include ent_io.html	name="AddZ"	desc="Adds to this entity's Z coordinate."	type="float" %}
{% include ent_io.html	name="SubtractX"	desc="Subtracts from this entity's X coordinate."	type="float" %}
{% include ent_io.html	name="SubtractY"	desc="Subtracts from this entity's Y coordinate."	type="float" %}
{% include ent_io.html	name="SubtractZ"	desc="Subtracts from this entity's Z coordinate."	type="float" %}

### Outputs
{% include ent_io.html	name="OutValue"	desc="Fired when the value changes."	type="vector" %}
{% include ent_io.html	name="OutX"	desc="Fired when the value changes, passing the resulting X coordinate."	type="float" %}
{% include ent_io.html	name="OutY"	desc="Fired when the value changes, passing the resulting Y coordinate."	type="float" %}
{% include ent_io.html	name="OutZ"	desc="Fired when the value changes, passing the resulting Z coordinate."	type="float" %}
{% include ent_io.html	name="OnGetValue"	desc="Fired in response to the GetValue input. Used for polling this entity's current value when you don't want constant updates from the OutValue output."	type="vector" %}
{% include ent_io.html	name="OnGetX"	desc="Fired in response to the GetX input."	type="float" %}
{% include ent_io.html	name="OnGetY"	desc="Fired in response to the GetY input."	type="float" %}
{% include ent_io.html	name="OnGetZ"	desc="Fired in response to the GetZ input."	type="float" %}
