---
layout: article
title: Post-Processing Changes
permalink: /docs/visuals/post-processing/
breadcrumb: true
---

<script src="../../../js/lightbox.js"></script>

Mapbase modifies some of the game's post-processing capabilities, mainly through additional features. Some of these involve [changes to the shaders](/docs/visuals/shaders/).

---

# L4D post-processing and DOF control

<div class="feature_list" style="margin:0px auto;">
	<div class="feature_column"	style="width:75%;">
		{% include lightbox.html	src="assets/docs/visuals/postprocessing01a.png"	styleEnlarged=";width:75%;" %}
	</div>
</div>

Mapbase adds support for `postprocess_controller` and `env_dof_controller`, which include special post-processing effects introduced in Left 4 Dead. Mapbase used Momentum's public repo as a guide for porting the involved code from the Alien Swarm SDK.

---

{% include todo.html	txt="Color correction changes (exclusion mask + ASW changes), new chromatic aberration effect" %}
