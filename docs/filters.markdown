---
layout: article
title: Filters
permalink: /docs/filters/
breadcrumb: true
---

<div class="feature_list" style="margin:0px auto;">
	<a href="/docs/ents/filter_activator_keyfield/"><img src="/assets/entities/filter_keyfield.png" width="96"/></a>
	<a href="/docs/ents/filter_activator_model/"><img src="/assets/entities/filter_model.png" width="96"/></a>
	<a href="/docs/ents/filter_activator_involume/"><img src="/assets/entities/filter_involume.png" width="96"/></a>
	<a href="/docs/ents/filter_activator_relationship/"><img src="/assets/entities/filter_relationship.png" width="96"/></a>
</div>
<br>

A filter tests a certain condition or set of conditions to filter through entities, like a `trigger_once` using a `filter_activator_name` that only allows an entity with the name "cow" to pass it. [Click here for more information on filters in Source.](https://developer.valvesoftware.com/wiki/Category:Filters)

In Mapbase, all filters have been given the following new I/O/KV:

### Inputs
{% include ent_io.html	name="TestEntity"	desc="Tests the filter against the specified entity and fires OnPass or OnFail based on the result. <I>(TestActivator only uses the activator)</I>"	type="ehandle" %}

### KeyValues
{% include ent_kv.html	name="Pass caller when tested"	desc="When tested with <code>TestActivator</code> or <code>TestEntity</code>, this causes the <code>OnPass</code> and <code>OnFail</code> outputs to use the entity that called the test as the caller instead of the filter itself."	internal="PassCallerWhenTested"	type="boolean" %}

---
<br>

### New filters

Mapbase adds a few new filters so mappers could test more conditions:

<table id="entlist">
	<thead>
		<tr style="text-align: center;">
			<th style="cursor: pointer;" onclick="SortTableClassname()">Classname</th>
			<th>Summary</th>
		</tr>
	</thead>
	<tbody id="entlist_body">
	{% include ent_list_row.html	name="filter_activator_model"	summary="Filters an entity by its model's name. This entity already exists in all games starting with Left 4 Dead, but Mapbase adds the option to filter by skin and supports matchers." %}
	{% include ent_list_row.html	name="filter_activator_context"	summary="Filters an entity by its response contexts. This entity already exists in all games starting with Left 4 Dead, but Mapbase allows for multiple contexts to be used at once and supports matchers." %}
	{% include ent_list_row.html	name="filter_activator_squad"	summary="Filters an NPC by its squad name, with the option to deny silent members. (enemy finders, vital allies in player_squad, etc.)"	game="hl2" %}
	{% include ent_list_row.html	name="filter_activator_hintgroup"	summary="Filters an NPC by its hint group, with the option to filter Hint Limit Nav."	game="hl2" %}
	{% include ent_list_row.html	name="filter_activator_keyfield"	summary="Filters an entity by its keyvalues, serving as an extension of logic_keyfield." %}
	{% include ent_list_row.html	name="filter_activator_relationship"	summary="Filters an entity by its relationship to a target, or vice versa."	game="hl2" %}
	{% include ent_list_row.html	name="filter_activator_classify"	summary="Filters an entity by its <code>Classify()</code> class. (e.g. <code>CLASS_PLAYER_ALLY</code>)"	game="hl2" %}
	{% include ent_list_row.html	name="filter_activator_criteria"	summary="Filters an entity by response criteria normally used in the response system." %}
	{% include ent_list_row.html	name="filter_activator_involume"	summary="Filters an entity by whether it's inside of a target entity's volume. (e.g. a trigger)" %}
	{% include ent_list_row.html	name="filter_activator_surfacedata"	summary="Filters an entity by its surface data. (e.g. whether it's made of wood)" %}
	</tbody>

</table>

<script src="../../../js/ents.js"></script>

### Redirect filters

<a href="/docs/ents/filter_script/"><img src="/assets/entities/filter_redirect.png" width="96"/></a>

**Redirect filters** are a new "class" of filters that take a separate entity from the activator and pass it to another filter. For example, a `trigger_once` using a `filter_redirect_weapon` gets the activator's weapon and passes it to a `filter_activator_class`, which checks if it's a `weapon_pistol`.

<table id="entlist2">
	<thead>
		<tr style="text-align: center;">
			<th style="cursor: pointer;" onclick="SortTableClassname()">Classname</th>
			<th>Summary</th>
		</tr>
	</thead>
	<tbody id="entlist_body">
	{% include ent_list_row.html	name="filter_redirect_weapon"	summary="Redirects the activator's weapon. When used as a damage filter, this gets the weapon used in the damage." %}
	{% include ent_list_row.html	name="filter_redirect_owner"	summary="Redirects the activator's owner entity." %}
	{% include ent_list_row.html	name="filter_redirect_inflictor"	summary="As a damage filter, this redirects the inflictor of the damage, e.g. the grenade in an explosion. (filters normally use the attacker)" %}
	</tbody>

</table>

---

### Damage manipulators

<p align="left">
	<a href="/docs/ents/filter_damage_transfer/"><img src="/assets/entities/filter_damage_transfer.png" width="96"/></a>
	<a href="/docs/ents/filter_damage_mod/"><img src="/assets/entities/filter_damage_mod.png" width="96"/></a>
	<a href="/docs/ents/filter_blood_control/"><img src="/assets/entities/filter_blood_control.png" width="96"/></a>
</p>

**Damage manipulators** are a family of filters designed to be used as damage filters, directly manipulating or operating with damage in some way. They don't actually filter anything themselves, but they can use a "secondary filter" to act as an actual damage filter or to control their behavior.

4 of these entities exist in Mapbase:

<table id="entlist3">
	<thead>
		<tr style="text-align: center;">
			<th style="cursor: pointer;" onclick="SortTableClassname()">Classname</th>
			<th>Summary</th>
		</tr>
	</thead>
	<tbody id="entlist_body">
	{% include ent_list_row.html	name="filter_damage_transfer"	summary="Redirects the activator's weapon. When used as a damage filter, this gets the weapon used in the damage." %}
	{% include ent_list_row.html	name="filter_damage_mod"	summary="Modifies damage taken by entities using this filter." %}
	{% include ent_list_row.html	name="filter_damage_logic"	summary="Fires outputs with damage parameters whenever an entity using this filter takes damage." %}
	{% include ent_list_row.html	name="filter_blood_control"	summary="Controls whether blood can be emitted when an entity using this filter takes damage. <I>(does not affect actual damage on its own)</I>" %}
	</tbody>

</table>

---

### filter_script

<p align="left">
	<a href="/docs/ents/filter_script/"><img src="/assets/entities/filter_script.png" width="96"/></a>
</p>

[**`filter_script`**](/docs/ents/filter_script/) is a special filter which allows filter functions to be controlled by VScript. See [VScript](/docs/vscript/) for more information on VScript in Mapbase.

