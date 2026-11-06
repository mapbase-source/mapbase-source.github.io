---
layout: article
title: Source Code
permalink: /docs/code/
breadcrumb: true
---

<script src="../../js/docs.js"></script>

Mapbase makes a few notable changes to the Source 2013 codebase itself.

{% include note.html	txt="This article will need to be rewritten for the TF2 SDK, as it uses VS2022 by default and no longer supports VS2013." %}

# Support for newer versions of Visual Studio

Mapbase includes support for newer versions of Visual Studio. This support can be enabled by opening `vpc_scripts/newer_vs_toolsets.vpc` in a text editor, and then switching the `VS2022` conditional to `1`.
