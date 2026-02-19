---
layout: article_ent
title: logic_script_client
permalink: /docs/ents/logic_script_client/
breadcrumb: true
ent_icon: assets/entities/logic_script_client.png
type: PointClass
mb_version: 
game: 
---

An entity capable of running client-side scripts

<br>

---

### KeyValues
{% include ent_kv.html	name="Client Think"	desc="Allows client-side VScript to run a think function in the form of a 'ClientThink' hook. (NOTE: The 'Script think function' keyvalue is not related to this!)"	internal="ClientThink"	type="choices" %}
{% include ent_kv.html	name="Run on Server"	desc="Runs the entity scripts on the server as well as the client. Use IsServer() or IsClient() to determine which side is running from within the scripts."	internal="RunOnServer"	type="choices" %}

### Inputs
{% include ent_io.html	name="CallScriptFunctionClient"	desc="Call a named function on the entity's client-side script scope."	type="string" %}
