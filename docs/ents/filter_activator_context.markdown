---
layout: article_ent
title: filter_activator_context
permalink: /docs/ents/filter_activator_context/
breadcrumb: true
ent_icon: assets/entities/filter_context.png
type: FilterClass
mb_version: 
game: 
---

A filter that filters by the response contexts of the activator.

<br>

---

### KeyValues
{% include ent_kv.html	name="Filter Context"	desc="The context(s) to filter by. Syntax is 'key:value,key:value'. Values in this field can use wilcards. For example, if this filter contains 'lastname:*', it will pass any entity with the context 'lastname', regardless of its value. Wildcards do not apply to context names and you cannot define the same context multiple times, but inputs like AddContext or RemoveContext can be used to add to the filter context."	internal="ResponseContext"	type="string" %}
{% include ent_kv.html	name="Pass if entity has any of these contexts"	desc="Should this filter only pass if the entity contains all of these contexts or can it pass if the entity has at least one of them?"	internal="any"	type="choices" %}

### Inputs
{% include ent_io.html	name="AddContext"	desc="Adds a context to this fitler's list of response contexts. The format should be 'key:value'."	type="string" %}
{% include ent_io.html	name="RemoveContext"	desc="Remove a context from this filter's list of response contexts. The name should match the 'key' of a previously added context."	type="string" %}
{% include ent_io.html	name="ClearContext"	desc="Removes all contexts in this filter's list of response contexts."	type="void" %}
