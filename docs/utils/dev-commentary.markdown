---
layout: article
title: Commentary System Changes
permalink: /docs/utils/dev-commentary/
breadcrumb: true
wide: true
---

<script src="../../../js/lightbox.js"></script>

Mapbase makes several unique changes to the Developer Commentary System, although most of them rely on manually editing commentary files (<code>maps/%mapname%_commentary.txt</code>) instead of using the Commentary Editor since the editor tool is not available in the SDK code.

---

### New node UI
Normally, when subtitles are disabled, developer commentary displays a unique HUD element showing the current speaker, a progress bar for the audio file, and which commentary node it is relative to others in the level. All of this information is hidden when subtitles are enabled.

In order to convey this information during commentary without sacrificing subtitles, Mapbase overhauls the UI to display both the commentary UI and subtitles at the same time. The commentary UI becomes as wide as the subtitles box and is re-positioned to where the subtitles box normally is, moving the subtitles box itself to be directly above it.

This behavior can be toggled using the <code>commentary_audio_element_below_cc</code> cvar.

<div class="feature_list" style="margin:0px auto;">
	<div class="feature_column feature_column_triple">
		{% include lightbox.html	src="assets/docs/utils/ui_commentarybar001a_before_nosubs.jpg" %}
		<span>Original commentary bar</span>
	</div>
	<div class="feature_column feature_column_triple">
		{% include lightbox.html	src="assets/docs/utils/ui_commentarybar001a_before_subs.jpg" %}
		<span>Original commentary subtitles</span>
	</div>
	<div class="feature_column feature_column_triple">
		{% include lightbox.html	src="assets/docs/utils/ui_commentarybar001a_after_subs.jpg" %}
		<span>Mapbase's new combination</span>
	</div>
</div>

In addition to this, Mapbase also restores an unused keyvalue (<code>printname</code>) and adds a new keyvalue (<code>footnote</code>) which display additional information on the HUD element.

<code>printname</code> is displayed alongside any specified speaker(s) with a ‘~’ to separate them. <code>footnote</code> is displayed as a set of automatically bulleted footnotes below the progress bar.

The <code>printname</code> combination behavior can be toggled using the <code>commentary_combine_speaker_and_printname</code> cvar.

{% include note.html	txt="Multiple footnote bullets requires newline characters (<code>\n</code>). This is currently only possible through localization tokens." %}

### New node types
Mapbase includes 3 new types of commentary nodes which behave differently when the player interacts with them. While the default commentary nodes play audio files, the new nodes can display text, display images, or play VCD files respectively. They serve as new mediums for providing commentary and allow different types of information to be conveyed to the player.

The type of node is set using a new <code>type</code> keyvalue, with 0 as the default audio node. Models are selected automatically, although they can still be overridden with the <code>model</code> keyvalue. The new models can be found in <code>models/extras</code>, just like the original commentary node model.

This includes the following new node types:

<div class="feature_list" style="margin:0px auto;">
	<div class="feature_column feature_column_triple">
		<h4>Text Node (type 1)</h4>
		<img class="ent_icon" style="width:100px;" src="{{ "/" | relative_url }}assets/docs/utils/node_info_text.png"/>
		<p>A Text Node displays a body of text. Text nodes can be used to replace voiced commentary, show text from outside sources, etc.</p>
		<!--<p align="center">
		{% include lightbox.html	src="assets/docs/utils/preview_text_info_001a.png"	style="width:75%;" %}
		</p>-->
		<p>Within a commentary file, Text Nodes can be defined like this:</p>
		<pre>	// Text Node
	"entity"
	{
		"classname" "point_commentary_node"
		"targetname" "test_node_2"
		"model" "models/extras/info_text.mdl"
		"origin" "-836 -160 64"
		"angles" "0 0 0"
		"precommands" ""
		"postcommands" ""
		"commentaryfile" "#DevCommentaryText_Explanation"
		"viewtarget" ""
		"viewposition" ""
		"prevent_movement" 0
		"type" "1"
		"panelscale" "1.0"
		"x" "-1"
		"y" "-1"
		"speakers" "Blixibon"
		"printname" "Text Commentary Nodes (moddb.com/mods/mapbase; Jul 16, 2021)"
		"footnote" "This is a commentary node which displays text."
	}</pre>
	</div>
	<div class="feature_column feature_column_triple">
		<h4>Image Node (type 2)</h4>
		<img style="width:50%;" class="ent_icon" style="width:100px;" src="{{ "/" | relative_url }}assets/docs/utils/node_info_image.png"/>
		<p>An Image Node displays an image. Image nodes can be used to show screenshots, concept art, etc.</p>
		<!--<p align="center">
		{% include lightbox.html	src="assets/docs/utils/preview_image_info_001a.png"	style="width:75%;" %}
		</p>-->
		<p>Within a commentary file, Image Nodes can be defined like this:</p>
		<pre>	// Image Node
	"entity"
	{
		"classname" "point_commentary_node"
		"targetname" "test_node_3"
		"model" "models/extras/info_image.mdl"
		//"origin" "-836 192 64"
		"origin" "-836 -96 64"
		"angles" "0 0 0"
		"precommands" ""
		"postcommands" ""
		"commentaryfile" "mapbase_commentary_test.vmt" // Relative to materials/vgui
		"viewtarget" ""
		"viewposition" ""
		"prevent_movement" 0
		"type" "2"
		"panelscale" "1.25"
		"x" "-1"
		"y" "-1"
		"speakers" "Mapbase"
		"printname" "Image Commentary Node"
		"footnote" "This is a commentary node which displays an image."
	}</pre>
	</div>
	<div class="feature_column feature_column_triple">
		<h4>Scene Node (type 3)</h4>
		<img class="ent_icon" style="width:100px;" src="{{ "/" | relative_url }}assets/docs/utils/node_info_scene.png"/>
		<p>A Scene Node plays a VCD (scene) file. Scene nodes can be used to split up commentary, play unused dialogue, etc.</p>
		<p>Within a commentary file, Scene Nodes can be defined like this:</p>
		<pre>	// Scene Node
	"entity"
	{
		"classname" "point_commentary_node"
		"targetname" "test_node_4"
		"model" "models/extras/info_scene.mdl"
		"origin" "-836 -32 64"
		"angles" "0 0 0"
		"precommands" ""
		"postcommands" ""
		"commentaryfile" "scenes/eli_lab/labtalk01"
		"viewtarget" ""
		"viewposition" ""
		"prevent_movement" 0
		"type" "3"
		"panelscale" "1.25"
		"x" "-1"
		"y" "-1"
		"speakers" "Mapbase"
		"printname" "Scene Commentary Node"
		"footnote" "This is a commentary node which plays a VCD file."
	}</pre>
	</div>
</div>

<div style="clear: left;"/>

<p align="center">The images below show Text and Image Nodes in-game. Click on an image to expand it.</p>
<p align="center">
{% include lightbox.html	src="assets/docs/utils/preview_text_info_001a.png"	style="width:25%;" %}
{% include lightbox.html	src="assets/docs/utils/preview_image_info_001a.png"	style="width:25%;" %}
</p>

<div style="clear: left;"/>

### New I/KV
<code>point_commentary_node</code> now has additional inputs and keyvalues, including the ones mentioned above. This includes the following:

#### KeyValues
{% include ent_kv.html	name="View Target Speed"	desc="The speed in which the camera will follow the view target."	internal="viewtarget_speed"	type="float" %}
{% include ent_kv.html	name="View Position Speed"	desc="The speed in which the camera will go to the view position."	internal="viewposition_speed"	type="float" %}
{% include ent_kv.html	name="View Position Speed"	desc="The speed in which the camera will return to the player once the commentary is over."	internal="return_speed"	type="float" %}
{% include ent_kv.html	name="Print Name"	desc="Title of the commentary, which displays in the new UI."	internal="printname"	type="string" %}
{% include ent_kv.html	name="Footnote(s)"	desc="Notes that appear at the bottom of the new UI. Bullets are separated by newlines, which require localization tokens."	internal="footnote"	type="string" %}
{% include ent_kv.html	name="Type"	desc="Type of commentary node. See above for specific values."	internal="type"	type="integer" %}
{% include ent_kv.html	name="Panel Scale"	desc="How much to scale the commentary UI's size when active. Only valid for text and image nodes."	internal="panelscale"	type="float" %}
{% include ent_kv.html	name="X"	desc="The node UI's X position as a 0-1 ratio from left-to-right with -1 for the center, similar to <code>game_text</code>. Only valid for text and image nodes."	internal="x"	type="float" %}
{% include ent_kv.html	name="Y"	desc="The node UI's Y position as a 0-1 ratio from top-to-bottom with -1 for the center, similar to <code>game_text</code>. Only valid for text and image nodes."	internal="y"	type="float" %}

#### Inputs
{% include ent_io.html	name="SetViewTarget"	desc="Sets the target the camera should follow when the node is active."	type="target_destination" %}
{% include ent_io.html	name="SetViewTargetSpeed"	desc="Sets the speed in which the node should follow the view target."	type="float" %}
{% include ent_io.html	name="SetViewPosition"	desc="Sets the target the camera should go to when the node is active."	type="target_destination" %}
{% include ent_io.html	name="SetViewPositionSpeed"	desc="Sets the speed in which the node should go to the view position."	type="float" %}
{% include ent_io.html	name="SetReturnSpeed"	desc="Sets the speed in which the node will return to the player once the commentary is over."	type="float" %}

### VScript access
VScript access to commentary nodes has been expanded on the server as well as the client, with both ends able to modify most variables (including what audio file plays/what content displays) and add on to the behavior of a node using a new <code>PreStartCommentary</code> hook. This hook can be used to make the commentary change based on a specific condition, like how much health the player has or whether or not the player did something earlier in the map.

For more information, see [CPointCommentaryNode in List of Script Functions]({% link docs/vscript/script-funcs.markdown %}#CPointCommentaryNode).
