---
layout: page
title: About
permalink: /about/
big-text: true
---

**Mapbase** is an open-source enhancement for Source 2013 that targets mappers and modders. Its primary goal is to add new capabilities and quality-of-life features through changes to the Source 2013 codebase.

Mapbase functions as a base to build maps and mods off of, hence the name. Mappers create their own maps within it or a mod that uses it, while mods themselves draw from Mapbase's code and assets directly.

---
<br>

Mapbase was originally created to make useful code changes more accessible to level designers, and most of its changes are intended to be unintrusive. Typically, the average player wouldn't be able to tell if a mod is using Mapbase, but someone working on it would be able to tell right away.

Here's a brief overview of the kinds of changes Mapbase makes:

<div class="feature_list" style="margin:0px auto;">
	<div class="feature_column">
		<div class="feature_box" onmouseover="ShowBackground(this)" onmouseleave="HideBackground(this)">
			<span class="feature_background_color"></span>
			<span class="feature_background" style="background-image: url('../assets/docs/feature_entities_bg.gif')"></span>
			<div style="width:20%;">
				<img class="feature_icon" src="{{ "/" | relative_url }}assets/entities/math_counter_advanced.png"/>
			</div>
			<div class="feature_text">
				<p><a href="{{ "/" | relative_url }}docs/ents">50+ new entities</a> that provide deeper control over logic and game events</p>
			</div>
		</div>
	</div>
	
	<div class="feature_column">
		<div class="feature_box" onmouseover="ShowBackground(this)" onmouseleave="HideBackground(this)">
			<span class="feature_background_color"></span>
			<span class="feature_background" style="background-image: url('../assets/docs/feature_io_bg.gif')"></span>
			<div style="width:20%;">
				<img class="feature_icon" src="{{ "/" | relative_url }}assets/entities/iokv01.png"/>
			</div>
			<div class="feature_text">
				<p><a href="{{ "/" | relative_url }}docs/iokv">Hundreds of new inputs, outputs, and keyvalues</a> on existing entities</p>
			</div>
		</div>
	</div>
	
	<div class="feature_column">
		<div class="feature_box" onmouseover="ShowBackground(this)" onmouseleave="HideBackground(this)">
			<span class="feature_background_color"></span>
			<span class="feature_background" style="background-image: url('../assets/docs/feature_vscript_bg.gif')"></span>
			<div style="width:20%;">
				<img class="feature_icon" src="{{ "/" | relative_url }}assets/entities/logic_script.png"/>
			</div>
			<div class="feature_text">
				<p><a href="{{ "/" | relative_url }}docs/vscript">A custom implementation of VScript</a>, a scripting layer that interfaces with the game</p>
			</div>
		</div>
	</div>
	
	<div class="feature_column">
		<div class="feature_box" onmouseover="ShowBackground(this)" onmouseleave="HideBackground(this)">
			<span class="feature_background_color"></span>
			<span class="feature_background" style="background-image: url('../assets/docs/feature_shaders_bg.gif')"></span>
			<div style="width:20%;">
				<img class="feature_icon" src="{{ "/" | relative_url }}assets/entities/math_counter_advanced.png"/>
			</div>
			<div class="feature_text">
				<p><a href="{{ "/" | relative_url }}docs/visuals/shaders">Modified shaders</a> that focus on fixes and optional capabilities</p>
			</div>
		</div>
	</div>
	
	<div class="feature_column">
		<div class="feature_box" onmouseover="ShowBackground(this)" onmouseleave="HideBackground(this)">
			<span class="feature_background_color"></span>
			<span class="feature_background" style="background-image: url('../assets/website_bg.jpg')"></span>
			<div style="width:20%;">
				<img class="feature_icon" src="{{ "/" | relative_url }}assets/entities/math_counter_advanced.png"/>
			</div>
			<div class="feature_text">
				<p><a href="{{ "/" | relative_url }}docs/game-scripts/map-specific-files">Map-specific scripts</a> that allow individual maps to make larger changes</p>
			</div>
		</div>
	</div>
	
	<div class="feature_column">
		<div class="feature_box" onmouseover="ShowBackground(this)" onmouseleave="HideBackground(this)">
			<span class="feature_background_color"></span>
			<span class="feature_background" style="background-image: url('../assets/docs/feature_gameplay_bg.gif')"></span>
			<div style="width:20%;">
				<img class="feature_icon" src="{{ "/" | relative_url }}assets/entities/math_counter_advanced.png"/>
			</div>
			<div class="feature_text">
				<p>Optional extensions for existing gameplay features</p>
			</div>
		</div>
	</div>
</div>

---
<br>

Mapbase primarily supports {% include hl2.html %} **Half-Life 2** and {% include tf2.html %} **Team Fortress 2**, but since Mapbase is built with code changes, you <u><strong>must</strong></u> use Mapbase within a sourcemod, not through the games themselves.

For more information on how to start using Mapbase, see [Getting Started](/getting-started).

<script src="../js/docs.js"></script>
