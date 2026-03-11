---
layout: article
title: VScript
permalink: /docs/vscript/
breadcrumb: true
---

**VScript** is a high-level scripting layer available in Mapbase.

VScript was originally created by Valve for Left 4 Dead, and more information regarding VScript itself can be found [on the Valve Developer Community](https://developer.valvesoftware.com/wiki/VScript). Mapbase's implementation of VScript was recreated using headers and game code available in the Alien Swarm SDK.

For using VScript within a Half-Life 2 context, see [HL2 VScript integration](/docs/hl2/hl2-vscript/). For using VScript within a Team Fortress 2 context, see [the game's existing VScript documentation on the VDC](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting).

<div class="feature_list" style="margin:0px auto;">

	{% include docs_feature_button.html	url="script-funcs"		text="List of Script Functions"		desc="Full list of script functions."				icon="assets/entities/math_counter_advanced.png"		bg="../assets/website_bg.jpg" %}
	{% include docs_feature_button.html	url="script-consts"		text="List of Script Constants"		desc="Full list of script constants."				icon="assets/entities/math_counter_advanced.png"		bg="../assets/website_bg.jpg" %}
	{% include docs_feature_button.html	url="conflicts"		text="Conflicts with Valve's VScript"		desc="Potential conflicts involving scripts made using official VScript."			icon="assets/docs/feature_dc_icon.png"					bg="../assets/docs/feature_dc_bg.gif" %}
	<!--{% include docs_feature_button.html	url="conflicts"		text="VScript in VBSP"		desc=""			icon="assets/docs/feature_dc_icon.png"					bg="../assets/docs/feature_dc_bg.gif" %}-->
	<div style="clear: left;"></div>
	
</div>

---

<!--In addition to the original VScript inputs, Mapbase introduces a new `RunScriptCodeQuotable` input. This operates the same way as `RunScriptCode`, but double apostrophes ('') are converted to quotation marks ("), allowing code with strings to be run from Hammer and in-game `ent_fire`.

{% include note.html	txt="<code>RunScriptCodeQuotable</code> is no longer needed in the TF2 SDK, which automatically converts backticks (<code>`</code>) into quotes with the default <code>RunScriptCode</code>." %}-->
