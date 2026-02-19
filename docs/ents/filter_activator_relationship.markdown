---
layout: article_ent
title: filter_activator_relationship
permalink: /docs/ents/filter_activator_relationship/
breadcrumb: true
ent_icon: assets/entities/filter_relationship.png
type: FilterClass
mb_version: 
game: 
---

A filter that filters by the activator's relationship with another entity. Please note that any entity incapable of supporting relationships is automatically passed if this filter is set to 'Neutral'.

<br>

---

### KeyValues
{% include ent_kv.html	name="Subject"	desc="The entity whose relationships we should test with. If empty, the entity using the filter will be used."	internal="target"	type="target_destination" %}
{% include ent_kv.html	name="Priority"	desc="The priority the subject should have with the target. If empty, priority will be disregarded."	internal="rank"	type="string" %}
{% include ent_kv.html	name="Disposition"	desc="What relationship the subject should have with the activator."	internal="disposition"	type="choices" %}
{% include ent_kv.html	name="Invert Subject"	desc="Should we use the activator's relationship to the subject instead?"	internal="inverttarget"	type="choices" %}
{% include ent_kv.html	name="Reciprocal"	desc="Should we only pass if both entities have the same relationship with each other? Makes 'Invert Subject' useless."	internal="Reciprocal"	type="choices" %}
