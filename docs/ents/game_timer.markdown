---
layout: article_ent
title: game_timer
permalink: /docs/ents/game_timer/
breadcrumb: true
ent_icon: assets/entities/game_timer.png
type: PointClass
mb_version: v8.0
game: 
---

An entity that adds a generic timer to the player's HUD. Not to be confused with logic_timer.

<br>

---

### KeyValues
{% include ent_kv.html	name="Timer length (in seconds)"	desc="Initial timer length."	internal="timer_length"	type="float" %}
{% include ent_kv.html	name="Max timer length (in seconds)"	desc="Maximum timer length (0 = no max). This value is used to ensure the timer never goes above this value when SetTime and AddTime are used."	internal="max_length"	type="float" %}
{% include ent_kv.html	name="Warn time (-1 default)"	desc="The time in seconds at which the timer will turn red to indicate it is almost finished. -1 uses default behavior, turning red when the timer is 75% complete."	internal="warn_time"	type="float" %}
{% include ent_kv.html	name="Timer caption"	desc="An optional line of text which can accompany the timer."	internal="timer_caption"	type="string" %}
{% include ent_kv.html	name="Start paused"	desc="Should the timer start paused? (will need to send a Resume input to start the timer if this is set)."	internal="start_paused"	type="choices" %}
{% include ent_kv.html	name="Show Time Remaining"	desc="Should we show how much time is remaining.  If no, this will display how much time has passed."	internal="show_time_remaining"	type="choices" %}
{% include ent_kv.html	name="Show timer in the HUD"	desc="Whether or not the timer actually appears on the player's HUD when enabled. Note: Outside of TF2, you can only show one timer in the HUD at a time."	internal="show_in_hud"	type="choices" %}
{% include ent_kv.html	name="X (0 - 1.0 = left to right) (-1 default)"	desc="Horizontal position on the player's screens to draw the timer. The value should be between 0 and 1, where 0 is the far left of the screen and 1 is the far right. -1 puts it in the game's default position. Note that a non-default value will stop the game from automatically moving or hiding the timer when it gets in the way of other HUD elements."	internal="x"	type="float" %}
{% include ent_kv.html	name="Y (0 - 1.0 = top to bottom) (-1 default)"	desc="Vertical position on the player's screens to draw the timer. The value should be between 0 and 1, where 0 is the top of the screen and 1 is the bottom. -1 puts it in the game's default position. Note that a non-default value will stop the game from automatically moving or hiding the timer when it gets in the way of other HUD elements."	internal="y"	type="float" %}
{% include ent_kv.html	name="Progress bar max segments (-1 default)"	desc="Overrides the progress bar's maximum segments. -1 uses the default based on the timer's length."	internal="progress_bar_max"	type="integer" %}
{% include ent_kv.html	name="Progress bar override (-1 default)"	desc="Overrides the progress bar's progress. -1 uses the default based on remaining time. Use this with the max segments value to make the progress bar represent a controlled variable (e.g. number of players at a checkpoint)."	internal="progress_bar_override"	type="integer" %}
{% include ent_kv.html	name="Player Filter"	desc="Filter to use to determine who should see this timer. By default, all players will view the timer unless a team number is specified. See filter_activator_name for more explanation."	internal="PlayerFilter"	type="filterclass" %}
{% include ent_kv.html	name="Team"	desc="The team this timer should apply to unless a filter is specified. In TF2, timers are colored based on this value. Specifying a filter allows a team-colored timer to be shown to players not on that team. The Local Player option will appear to each player as their own team color."	internal="TeamNum"	type="choices" %}

### Inputs
{% include ent_io.html	name="Pause"	desc="Pause the timer."	type="void" %}
{% include ent_io.html	name="Resume"	desc="Resume the timer."	type="void" %}
{% include ent_io.html	name="SetTime"	desc="Set the timer to this value (in seconds)."	type="float" %}
{% include ent_io.html	name="AddTime"	desc="Add time to the timer (in seconds). Added time cannot excede the max timer length."	type="float" %}
{% include ent_io.html	name="RemoveTime"	desc="Remove time from the timer (in seconds)."	type="float" %}
{% include ent_io.html	name="Restart"	desc="Restart the timer."	type="void" %}
{% include ent_io.html	name="SetMaxTime"	desc="Set the max timer length to this value (in seconds). The timer's time will never excede this value."	type="integer" %}
{% include ent_io.html	name="SetTimerCaption"	desc="Set the timer caption."	type="string" %}
{% include ent_io.html	name="SetProgressBarMaxSegments"	desc="Set the progress bar's max segments."	type="integer" %}
{% include ent_io.html	name="SetProgressBarOverride"	desc="Set the progress bar's progress override."	type="integer" %}
{% include ent_io.html	name="SetX"	desc="Set the X position override."	type="float" %}
{% include ent_io.html	name="SetY"	desc="Set the Y position override."	type="float" %}
{% include ent_io.html	name="GetTimeRemaining"	desc="Fire OnGetTimeRemaining with the remaining time."	type="void" %}
{% include ent_io.html	name="SetPlayerFilter"	desc="Set the player filter."	type="target_destination" %}
{% include ent_io.html	name="SetTeam"	desc="Changes the entity's team."	type="integer" %}

### Outputs
{% include ent_io.html	name="OnFinished"	desc="Sent when the timer is finished."	type="void" %}
{% include ent_io.html	name="OnPaused"	desc="Sent when the timer is paused."	type="void" %}
{% include ent_io.html	name="OnResumed"	desc="Sent when the timer is resumed."	type="void" %}
{% include ent_io.html	name="OnWarned"	desc="Sent when timer passes its warn time."	type="void" %}
{% include ent_io.html	name="OnTick"	desc="Sent for each second the timer ticks, with the remaining time as the parameter."	type="integer" %}
{% include ent_io.html	name="OnGetTimeRemaining"	desc="Sent when GetTimeRemaining input is used, with the remaining time as the parameter."	type="float" %}
