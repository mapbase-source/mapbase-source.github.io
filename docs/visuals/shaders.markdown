---
layout: article
title: Shader Changes
permalink: /docs/visuals/shaders/
breadcrumb: true
---

<script src="../../../js/lightbox.js"></script>

Mapbase comes with custom versions for most of the Source engine's shaders. These changes are intended to be objective in nature, and ideally, they would maintain a near-identical appearance to the original games. Their main purpose is to fix issues and introduce optional features that mappers would benefit from, but would normally be unable to implement themselves.

{% include note.html	txt="Mapbase's shaders will mostly work out of the box, although <B>an extra step is needed to use them with custom materials on the SP branch.</B> Please see <a href=\"/docs/visuals/shaders/overrides/\">Mapbase Shader Setup</a> for more information." %}

---

# Projected textures

*Main article: [Projected Textures](/docs/visuals/projected-textures/)*

<div class="feature_list" style="margin:0px auto;">
	<div class="feature_column feature_column_triple">
		{% include lightbox.html	src="assets/docs/visuals/ProjectedTextureComparison02a.png" %}
	</div>
	<div class="feature_column feature_column_triple">
		{% include lightbox.html	src="assets/docs/visuals/ProjectedTextureComparison01a.png" %}
	</div>
</div>

Mapbase overhauls projected textures to function similarly to later Source games. To fix most of their issues, Mapbase uses shader code originating from the Alien Swarm SDK, snippets from the Valve Developer Community, and the original *G-String* code release. See the main article for more information.

# Radial fog

<div class="feature_list" style="margin:0px auto;">
	<div class="feature_column"	style="width:100%;">
		{% include lightbox.html	src="assets/docs/visuals/RadialFogComparison01b.jpg"	styleEnlarged=";width:90%;" %}
	</div>
</div>

Mapbase uses radial fog, a fog calculation method which draws fog as if it were surrounding the camera. Normally, Half-Life 2 uses "planar" fog, which is calculated as a flat square that always faces the camera. You could often see past it by rotating the camera and looking at the edge of your screen.

Radial fog was introduced in Left 4 Dead and has been used in all Valve games ever since. Mapbase used Half-Life 2: Downfall's repo as a guide for porting the involved shader code from the Alien Swarm SDK.

# Brush phong (phong on LightmappedGeneric)

<div class="feature_list" style="margin:0px auto;">
	<div class="feature_column feature_column_triple">
		{% include lightbox.html	src="assets/docs/visuals/ProjectedTextures02.jpg" %}
	</div>
</div>

"Brush phong" means phong reflections on brush shaders like `LightmappedGeneric`. It highlights regions of a surface when it's lit by a projected texture. This effect originated from *City 17: Episode One* and you could find more information on [their ModDB page](https://www.moddb.com/mods/city-17-episode-1).

# Parallax Corrected Cubemaps

<div class="feature_list" style="margin:0px auto;">
	<div class="feature_column">
		{% include lightbox.html	src="assets/docs/visuals/PCC01.jpg" %}
	</div>
</div>

Mapbase adds parallax corrected cubemaps, a technique implemented by Brian Charles and popularized by [this video](https://www.youtube.com/watch?v=ZH6s1hbwoQQ). It was implemented in Mapbase through [this VDC article](https://developer.valvesoftware.com/wiki/Parallax_Corrected_Cubemaps). In order to use parallax corrected cubemaps, you must create a `parallax_obb` brush entity filling in the entire room. The brush must be a box. You then go to the `env_cubemap`s you wish to be parallax corrected and add your new `parallax_obb` entity to the "Cubemap Bounds" keyvalue.

{% include note.html	txt="This requires a custom VBSP as well. Please see <a href=\"/docs/compile-tools/\">Compile Tools</a> for more information." %}

# Tree sway

Mapbase adds support for `$treeSway`, a special feature introduced in Left 4 Dead and used in all Valve games ever since. It allows trees to "sway" with the wind. Some existing tree models have been given additional skins which use `$treeSway`. Mapbase used Half-Life 2: Downfall's repo as a guide for porting the involved shader code from the Alien Swarm SDK.

# Miscellaneous

* [`$blendmodulatetexture`](https://developer.valvesoftware.com/wiki/$blendmodulatetexture) now appears under a flashlight, works with transforms, and shows up in Hammer. It also uses the Alien Swarm SDK's version of the shader code.
* [`$phongdisablehalflambert`](https://developer.valvesoftware.com/wiki/$phong) has been ported from Alien Swarm, allowing `$phong` to be used without `$halflambert` being forced enabled.
* `$basetexturetransform2` is now supported in DX9, allowing `$basetexture` and `$basetexture2` to be transformed independently. To avoid breaking compatibility, it only functions if you define  `$basetexturetransform2 "center .5 .5 scale 1 1 rotate 0 translate 0 0"` in your material first. It also doesn't work with `$seamless_scale` or the C17:EP1 brush phong.
