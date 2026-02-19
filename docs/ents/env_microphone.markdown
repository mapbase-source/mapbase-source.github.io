---
layout: article_ent
title: env_microphone
permalink: /docs/ents/env_microphone/
breadcrumb: true
ent_icon: assets/entities/env_microphone.png
type: PointClass
mb_version: -1
game: 
---

An entity that acts as a microphone. It works in one of two modes. If it has a 'Speaker' set, it picks up all sounds within the specified sound range, and rebroadcasts them through the Speaker entity. In this Speaker mode, it ignores the Hears X spawnflags and does not fire the SoundLevel output. If it has no Speaker set, it measures the sound level at a point, and outputs the sound level as a value between 0 and 1. In Measuring mode, it only hears sounds that match the Hear X spawnflags.

<br>

---

### KeyValues
{% include ent_kv.html	name="Local Destination Landmark"	desc="If specified, then sounds offset from the speaker by their initial offset from this landmark. Only applicable in Speaker mode."	internal="landmark"	type="target_destination" %}
{% include ent_kv.html	name="Pitch Scale"	desc="Scales the pitch of transmitted sounds. Only applicable in Speaker mode."	internal="PitchScale"	type="float" %}
{% include ent_kv.html	name="Volume Scale"	desc="Scales the volume of transmitted sounds. Only applicable in Speaker mode."	internal="VolumeScale"	type="float" %}
{% include ent_kv.html	name="Channel"	desc="Sets the channel which sounds should transmit as. Only applicable in Speaker mode."	internal="channel"	type="choices" %}

### Flags
{% include ent_sf.html	name="[128] Hears sentences (Combine dialogue, etc.)"	bit="128" %}

### Inputs
{% include ent_io.html	name="SetDSPPreset"	desc="Sets our DSP preset."	type="integer" %}
{% include ent_io.html	name="SetPitchScale"	desc="Sets the pitch scale."	type="float" %}
{% include ent_io.html	name="SetVolumeScale"	desc="Sets the volume scale."	type="float" %}
{% include ent_io.html	name="SetChannel"	desc="Sets the channel."	type="integer" %}
