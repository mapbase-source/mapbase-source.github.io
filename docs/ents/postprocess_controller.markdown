---
layout: article_ent
title: postprocess_controller
permalink: /docs/ents/postprocess_controller/
breadcrumb: true
ent_icon: assets/entities/postprocess_controller.png
type: PointClass
mb_version: 
game: 
---

An entity that controls the postprocess settings in the map.

<br>

---

### KeyValues
{% include ent_kv.html	name="Fade time"	desc="None"	internal="fadetime"	type="float" %}
{% include ent_kv.html	name="Local contrast strength [-1..x]"	desc="None"	internal="localcontraststrength"	type="float" %}
{% include ent_kv.html	name="Local contrast edge strength [0..1]"	desc="None"	internal="localcontrastedgestrength"	type="float" %}
{% include ent_kv.html	name="Vignette start distance [0..1]"	desc="None"	internal="vignettestart"	type="float" %}
{% include ent_kv.html	name="Vignette end distance [0..x]"	desc="None"	internal="vignetteend"	type="float" %}
{% include ent_kv.html	name="Vignette blur strength [0..1]"	desc="None"	internal="vignetteblurstrength"	type="float" %}
{% include ent_kv.html	name="Fade to black strength [0..1]"	desc="None"	internal="fadetoblackstrength"	type="float" %}
{% include ent_kv.html	name="Depth-blur focal plane distance [0..1]"	desc="None"	internal="depthblurfocaldistance"	type="float" %}
{% include ent_kv.html	name="Depth-blur effect strength [0..x]"	desc="None"	internal="depthblurstrength"	type="float" %}
{% include ent_kv.html	name="Full-screen blur strength [0..1]"	desc="None"	internal="screenblurstrength"	type="float" %}
{% include ent_kv.html	name="Film grain strength [0..x]"	desc="None"	internal="filmgrainstrength"	type="float" %}

### Flags
{% include ent_sf.html	name="[1] Master (Has priority if multiple postprocess_controllers exist)"	bit="1" %}

### Inputs
{% include ent_io.html	name="SetFadeTime"	desc="Set the fade time between post process settings."	type="float" %}
{% include ent_io.html	name="SetLocalContrastStrength"	desc="Set the local contrast strength."	type="float" %}
{% include ent_io.html	name="SetLocalContrastEdgeStrength"	desc="Set the local contrast strength at the edge of the screen (controlled by vignette)."	type="float" %}
{% include ent_io.html	name="SetVignetteStart"	desc="Set the vignette start distance (from screen center)."	type="float" %}
{% include ent_io.html	name="SetVignetteEnd"	desc="Set the vignette end distance."	type="float" %}
{% include ent_io.html	name="SetVignetteBlurStrength"	desc="Set the strength of the desaturated blur on the vignette."	type="float" %}
{% include ent_io.html	name="SetFadeToBlackStrength"	desc="Set the fadeout strength."	type="float" %}
{% include ent_io.html	name="SetDepthBlurFocalDistance"	desc="Set the focal distance of the depth blur effect (in the range [0,1])."	type="float" %}
{% include ent_io.html	name="SetDepthBlurStrength"	desc="Set the depth blur effect strength."	type="float" %}
{% include ent_io.html	name="SetScreenBlurStrength"	desc="Set the screen blur effect strength."	type="float" %}
{% include ent_io.html	name="SetFilmGrainStrength"	desc="Set the film grain effect strength."	type="float" %}
