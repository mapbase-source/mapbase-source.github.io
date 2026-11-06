---
layout: article
title: Mapbase Shader Setup
permalink: /docs/visuals/shaders/overrides/
breadcrumb: true
---

This article explains how to implement Mapbase's custom shaders.

{% include note.html	txt="If you are using the MP branch after the TF2 SDK, then Mapbase's shaders will be used universally, making this guide unnecessary. However, if you are still using the singleplayer branch, then you will still need to take these steps." %}

# Caveat of shader overrides in Source

The Source SDK comes with the original shader source code and files which could be compiled by anyone, but Source 2013 Singleplayer doesn't actually allow modders to change existing shaders for security reasons.

As a result, Mapbase's custom shaders need to be mounted as separate shaders, and the VMT files need to be changed to use them. For example, Mapbase's version of `LightmappedGeneric` is called `SDK_LightmappedGeneric`. This `SDK_` prefix is applied to every custom shader.

Mapbase has converted versions of every VMT in HL2, EP1, EP2, and Lost Coast out of the box, but you will need to apply this to any custom materials in your mod. A tool called the [Mapbase Multi-Tool](/setup/multi-tool/) can automatically convert every VMT in a directory to use the new shaders.

Note that the original shaders are still usable, and you aren't necessarily required to use Mapbase's custom ones. However, Mapbase's shader changes won't function, and a mixture of stock and Mapbase shaders may occasionally clash depending on the context (e.g. radial fog would be inconsistent).

The only real outright requirement related to new shaders is that rope materials *must* use the `SDK_Cable` shader due to some other code changes that make the original `Cable` unusable.

### Custom Shader List

Here's a list of vanilla Source shaders which Mapbase has custom `SDK_` counterparts for:

* LightmappedGeneric
* VertexLitGeneric
* UnlitGeneric
* WorldVertexTransition
* Water
* Sprite
* Refract
* LightmappedReflective
* WorldTwoTextureBlend
* EyeRefract
* Eyes
* EyeGlint
* Teeth
* Cable
* DepthWrite
* DecalModulate
* UnlitTwoTexture
* MonitorScreen
* ShatteredGlass
