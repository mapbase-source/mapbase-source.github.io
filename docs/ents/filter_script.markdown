---
layout: article_ent
title: filter_script
permalink: /docs/ents/filter_script/
breadcrumb: true
ent_icon: assets/entities/filter_script.png
type: FilterClass
mb_version: 
game: 
---

A filter which utilizes hooks in its entity scripts.

<br>

---

Here's a list of the hooks `filter_script` can use:

<table id="entlist3">
	<thead>
		<tr style="text-align: center;">
			<th style="cursor: pointer;" onclick="SortTableClassname()">Signature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody id="entlist_body">
	{% include ent_list_row.html	name="<I>bool</I> PassesFilter(handle <I>caller</I>, handle <I>entity</I>)"	summary="Check if the given caller and entity pass the filter." %}
	{% include ent_list_row.html	name="<I>bool</I> PassesDamageFilter(handle <I>caller</I>, handle <I>info</I>)"	summary="Check if the given caller and damage info pass the damage filter." %}
	{% include ent_list_row.html	name="<I>bool</I> PassesFinalDamageFilter(handle <I>caller</I>, handle <I>info</I>)"	summary="Used by <code>filter_damage_redirect</code> to distinguish between standalone filter calls and actually damaging an entity. Returns true if there's no unique behavior." %}
	{% include ent_list_row.html	name="<I>bool</I> BloodAllowed(handle <I>caller</I>, handle <I>info</I>)"	summary="Check if the given caller and damage info allow for the production of blood." %}
	{% include ent_list_row.html	name="<I>bool</I> DamageMod(handle <I>caller</I>, handle <I>info</I>)"	summary="Mods the damage info with the given caller." %}
	</tbody>
</table>
