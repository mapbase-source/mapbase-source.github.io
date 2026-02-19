---
layout: article_ent
title: logic_sequence
permalink: /docs/ents/logic_sequence/
breadcrumb: true
ent_icon: assets/entities/logic_sequence.png
type: PointClass
mb_version: 
game: 
---

Coordinates a sequence out of up to 16 preset values. If the input value matches the sequence's current case value, an output is fired and (by default) the sequence increments to the next case.

This is intended for things like passwords in keypads, which usually demand a specific combination of numbers.

<br>

---

### KeyValues
{% include ent_kv.html	name="Initial Case"	desc="Which case to start on, meaning inputs will initially compare with this case. Uses the case's index. (e.g. 4 for Case 04)"	internal="InitialCase"	type="integer" %}
{% include ent_kv.html	name="Start Disabled"	desc="If this entity is disabled, it will not accept any case tests. It will still accept other inputs, like SetSequenceIndex."	internal="StartDisabled"	type="choices" %}
{% include ent_kv.html	name="Case 01"	desc="If the sequence's current case is 01, fires OnCasePass or OnCaseFail based on whether this value matches the InValue parameter. This keyvalue supports matchers (<, >, !=, etc.)."	internal="Case01"	type="string" %}
{% include ent_kv.html	name="Case 02"	desc="If the sequence's current case is 02, fires OnCasePass or OnCaseFail based on whether this value matches the InValue parameter. This keyvalue supports matchers (<, >, !=, etc.)."	internal="Case02"	type="string" %}
{% include ent_kv.html	name="Case 03"	desc="If the sequence's current case is 03, fires OnCasePass or OnCaseFail based on whether this value matches the InValue parameter. This keyvalue supports matchers (<, >, !=, etc.)."	internal="Case03"	type="string" %}
{% include ent_kv.html	name="Case 04"	desc="If the sequence's current case is 04, fires OnCasePass or OnCaseFail based on whether this value matches the InValue parameter. This keyvalue supports matchers (<, >, !=, etc.)."	internal="Case04"	type="string" %}
{% include ent_kv.html	name="Case 05"	desc="If the sequence's current case is 05, fires OnCasePass or OnCaseFail based on whether this value matches the InValue parameter. This keyvalue supports matchers (<, >, !=, etc.)."	internal="Case05"	type="string" %}
{% include ent_kv.html	name="Case 06"	desc="If the sequence's current case is 06, fires OnCasePass or OnCaseFail based on whether this value matches the InValue parameter. This keyvalue supports matchers (<, >, !=, etc.)."	internal="Case06"	type="string" %}
{% include ent_kv.html	name="Case 07"	desc="If the sequence's current case is 07, fires OnCasePass or OnCaseFail based on whether this value matches the InValue parameter. This keyvalue supports matchers (<, >, !=, etc.)."	internal="Case07"	type="string" %}
{% include ent_kv.html	name="Case 08"	desc="If the sequence's current case is 08, fires OnCasePass or OnCaseFail based on whether this value matches the InValue parameter. This keyvalue supports matchers (<, >, !=, etc.)."	internal="Case08"	type="string" %}
{% include ent_kv.html	name="Case 09"	desc="If the sequence's current case is 09, fires OnCasePass or OnCaseFail based on whether this value matches the InValue parameter. This keyvalue supports matchers (<, >, !=, etc.)."	internal="Case09"	type="string" %}
{% include ent_kv.html	name="Case 10"	desc="If the sequence's current case is 10, fires OnCasePass or OnCaseFail based on whether this value matches the InValue parameter. This keyvalue supports matchers (<, >, !=, etc.)."	internal="Case10"	type="string" %}
{% include ent_kv.html	name="Case 11"	desc="If the sequence's current case is 11, fires OnCasePass or OnCaseFail based on whether this value matches the InValue parameter. This keyvalue supports matchers (<, >, !=, etc.)."	internal="Case11"	type="string" %}
{% include ent_kv.html	name="Case 12"	desc="If the sequence's current case is 12, fires OnCasePass or OnCaseFail based on whether this value matches the InValue parameter. This keyvalue supports matchers (<, >, !=, etc.)."	internal="Case12"	type="string" %}
{% include ent_kv.html	name="Case 13"	desc="If the sequence's current case is 13, fires OnCasePass or OnCaseFail based on whether this value matches the InValue parameter. This keyvalue supports matchers (<, >, !=, etc.)."	internal="Case13"	type="string" %}
{% include ent_kv.html	name="Case 14"	desc="If the sequence's current case is 14, fires OnCasePass or OnCaseFail based on whether this value matches the InValue parameter. This keyvalue supports matchers (<, >, !=, etc.)."	internal="Case14"	type="string" %}
{% include ent_kv.html	name="Case 15"	desc="If the sequence's current case is 15, fires OnCasePass or OnCaseFail based on whether this value matches the InValue parameter. This keyvalue supports matchers (<, >, !=, etc.)."	internal="Case15"	type="string" %}
{% include ent_kv.html	name="Case 16"	desc="If the sequence's current case is 16, fires OnCasePass or OnCaseFail based on whether this value matches the InValue parameter. This keyvalue supports matchers (<, >, !=, etc.)."	internal="Case16"	type="string" %}
{% include ent_kv.html	name="Suppress auto increment"	desc="Prevents automatically incrementing the sequence each time a case passes."	internal="DontIncrementOnPass"	type="choices" %}

### Inputs
{% include ent_io.html	name="Enable"	desc="Enables this entity."	type="void" %}
{% include ent_io.html	name="Disable"	desc="Disables this entity."	type="void" %}
{% include ent_io.html	name="Toggle"	desc="Toggles whether this entity is disabled."	type="void" %}
{% include ent_io.html	name="InValue"	desc="Tests the input value against the current case."	type="string" %}
{% include ent_io.html	name="SetCurrentCase"	desc="Sets the sequence's current case. This will fire OutCurCase."	type="integer" %}
{% include ent_io.html	name="SetCurrentCaseNoFire"	desc="Sets the sequence's current case without firing OutCurCase."	type="integer" %}
{% include ent_io.html	name="IncrementSequence"	desc="Increments the current case by the specified number. (1 if blank)"	type="integer" %}
{% include ent_io.html	name="ResetSequence"	desc="Resets the sequence to Case 01."	type="void" %}

### Outputs
{% include ent_io.html	name="OutCurCase"	desc="Fires each time the sequence's current case value changes, e.g. when it's incremented by a passing case."	type="integer" %}
{% include ent_io.html	name="OnCasePass"	desc="Fires when a case is matched, passing the input value."	type="string" %}
{% include ent_io.html	name="OnCaseFail"	desc="Fires when a case fails, passing the input value."	type="string" %}
{% include ent_io.html	name="OnSequenceComplete"	desc="Fires when the last case is matched and sequence is complete."	type="string" %}
