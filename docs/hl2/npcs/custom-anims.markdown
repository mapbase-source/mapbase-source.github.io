---
layout: article
title: Custom Animations
permalink: /docs/hl2/npcs/custom-anims/
breadcrumb: true
---

Mapbase makes several changes to the animation sets used by HL2 NPCs. These changes mainly apply to human NPCs, including <code>npc_citizen</code>, <code>npc_combine_s</code>, <code>npc_metropolice</code>, and other NPCs that share their animations (e.g. <code>npc_alyx</code>).

* Table of Contents
{:toc}

# Weapons

### Fix missing weapon animations

In default HL2, some NPCs cannot use certain weapons because they are missing the animations needed to support them. For example, <code>npc_combine_s</code> is not capable of using <code>weapon_pistol</code> in default HL2 without T-posing. Mapbase approaches this issue in two ways:

1. By directly adding full animation sets for several weapons. For example, <code>npc_combine_s</code> now has a full animation set for <code>weapon_pistol</code>.
2. By using a new "backup activity" system which allows NPCs to fall back to the nearest approximate weapon animation instead of T-posing. For example, a NPC with a <code>weapon_rpg</code> that has no RPG animations will fall back to <code>weapon_smg1</code> animations.

### Custom weapon animations

Mapbase adds completely custom animations for the following weapons:

1. <code>weapon_crossbow</code>
2. <code>weapon_357</code>
3. <code>weapon_annabelle</code>

Every NPC has custom aiming, firing, and/or reloading animations for the above weapons. They otherwise fall back to the aforementioned backup activity system.

### Unused weapon activities

Mapbase optionally comes with a bunch of unused weapon activity sets intended for use by mods. Many of these weapons exist or are mentioned in the SDK, but are not integrated into mods by default. This includes the following:

* <code>AR1</code>
* <code>AR3</code>
* <code>SMG2</code>
* <code>SMG3</code>
* <code>HMG1</code>
* <code>SNIPER_RIFLE</code>
* <code>DUAL_PISTOLS</code>

In order to use these animation sets, they must be enabled in the code. Go to <code>ai_activity.h</code> and set <code>EXPANDED_HL2_UNUSED_WEAPON_ACTIVITIES</code> to 1 if you want to use them. 

Regardless of whether these are enabled in code, Mapbase comes with custom animations for some of these weapon sets. For example, Combine soldiers have an animation set for the AR1 which uses a hand position more closely resembling that of a "traditional" assault rifle as opposed to the AR2.

# Cover nodes

### Low cover fixes

Mapbase fixes hint nodes set to the Crouch Cover Low type so that NPCs can use them outside of standoffs.

### Medium cover support

Mapbase adds proper support for medium cover nodes, as well as support for medium cover in standoffs.

In default HL2, medium cover is an unfinished feature that mainly manifests with the Crouch Medium Cover hint node. By default, this hint can only be used by Combine soldiers, although they have no unique medium cover animation.

Mapbase converges the concept of medium cover with another problem: While soldiers and citizens in low cover use crouching animations, metrocops in low cover use unique, half-crouching animations when aiming/shooting. This causes inconsistencies in standoffs, as standoff behavior assumes low attack animations allow NPCs to see over cover while the regular low cover animation is "safely in cover".

Mapbase adds dedicated medium cover attack activities that are analogous to the low cover activities. Using the backup activity system, most NPCs will default to low cover animations when selecting a medium cover activity, but the metrocops have been given dedicated crouching animations to replace their half-crouched animations, while the latter have been remapped to use medium activity names.

These are used in two ways:

* In standoffs, NPCs use either low cover, medium cover, or standing animations when shooting, depending on which one gives them LOS. Metrocops are mostly unaffected, but citizens and soldiers will now properly stand up to shoot when peeking out of cover that they normally would not be able to peek from with regular low cover animations.
* While using medium crouch nodes, NPCs will either use medium cover animations or fall back to low cover animations.

# Remapped activities
Many existing animations have had their <abbr title="Standardized names used for animations (e.g. &quot;ACT_IDLE&quot;)">Activity</abbr> changed in order to be more consistent across different NPCs and work as would be expected from the base activity definitions.

For example, in stock Half-Life 2, if you place a <code>npc_citizen</code> with no weapon, it will use a generic unarmed idle animation called <code>ACT_IDLE</code>. When the citizen is holding a weapon, it will use a weapon-specific animation with its own suffix, such as <code>ACT_IDLE_SMG1</code>. This process is known as activity translation, and all NPCs with weapons do it automatically.

However, even though all NPCs translate activities, not all NPCs have activities which match up with what the game expects. For example, <code>npc_combine_s</code>'s base <code>ACT_IDLE</code> actually holds a weapon. Its unarmed idle animation uses a separate <code>ACT_IDLE_UNARMED</code>, which does not exist in any other NPC and can only be translated by custom code. This is why spawning a Combine soldier with no weapon causes them to still look like they're holding one in most games.

Mapbase changes the activities on these animations to be more consistent with the base implementation, and thus work as expected with their weapon state. For example, by changing the soldiers' unarmed activity to <code>ACT_IDLE</code>, Combine soldiers will now look and act unarmed when they have no weapon. This does not affect them when they hold weapons because the weapons already translate it to their respective animations.

The following animations have had their activities changed to something else:

### combine_soldier_anims.mdl (npc_combine_s)

{% include note.html	txt="Mentions of &quot;AR1&quot; refer to a new set of intentionally unused weapon animations representing different hand positions. See the above section on unused weapon activities for more details." %}

<table>
	<thead>
		<tr style="text-align: center;">
			<th>Sequence</th>
			<th>Original Activity</th>
			<th>New Activity</th>
			<th>Reason</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>Idle1</code></td>
			<td><code>ACT_IDLE</code></td>
			<td><code>ACT_IDLE_AR1</code></td>
			<td>This animation involves holding an assault rifle. "AR1" is the closest approximation given the hand position.</td>
		</tr>
		<tr>
			<td><code>Walk_all</code></td>
			<td><code>ACT_WALK</code></td>
			<td><code>ACT_WALK_AR1</code></td>
			<td>This animation involves holding an assault rifle. "AR1" is the closest approximation given the hand position.</td>
		</tr>
		<tr>
			<td><code>RunALL</code></td>
			<td><code>ACT_RUN</code></td>
			<td><code>ACT_RUN_AR1</code></td>
			<td>This animation involves holding an assault rifle. "AR1" is the closest approximation given the hand position.</td>
		</tr>
		<tr>
			<td><code>Idle_Unarmed</code></td>
			<td><code>ACT_IDLE_UNARMED</code></td>
			<td><code>ACT_IDLE</code></td>
			<td>This is a "true" unarmed idle animation. In order to retain support for code which calls <code>ACT_IDLE_UNARMED</code>, the <code>ACT_IDLE</code> variant is a separate hidden sequence rather than a direct replacement.</td>
		</tr>
		<tr>
			<td><code>WalkUnarmed_all</code></td>
			<td><code>ACT_WALK_UNARMED</code></td>
			<td><code>ACT_WALK</code></td>
			<td>This is a "true" unarmed walking animation. In order to retain support for code which calls <code>ACT_WALK_UNARMED</code>, the <code>ACT_WALK</code> variant is a separate hidden sequence rather than a direct replacement.</td>
		</tr>
		<tr>
			<td><code>CombatIdle1</code></td>
			<td><code>ACT_IDLE_ANGRY</code></td>
			<td><code>ACT_IDLE_ANGRY_AR2</code></td>
			<td>This animation was created with the AR2 in mind.</td>
		</tr>
	</tbody>
</table>

### police_animations.mdl (npc_metropolice)

<table>
	<thead>
		<tr style="text-align: center;">
			<th>Sequence</th>
			<th>Original Activity</th>
			<th>New Activity</th>
			<th>Reason</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>batonidle1</code></td>
			<td><code>ACT_IDLE</code></td>
			<td><code>ACT_IDLE_MELEE</code></td>
			<td><code>ACT_IDLE</code> is normally used for unarmed animations and then translated to weapon counterparts.</td>
		</tr>
		<tr>
			<td><code>walk_all</code></td>
			<td><code>ACT_WALK</code></td>
			<td><code>ACT_WALK_MELEE</code></td>
			<td><code>ACT_WALK</code> is normally used for unarmed animations and then translated to weapon counterparts.</td>
		</tr>
		<tr>
			<td><code>run_all</code></td>
			<td><code>ACT_RUN</code></td>
			<td><code>ACT_RUN_MELEE</code></td>
			<td><code>ACT_RUN</code> is normally used for unarmed animations and then translated to weapon counterparts.</td>
		</tr>
		<tr>
			<td><code>lowcover_shoot_pistol</code></td>
			<td><code>ACT_RANGE_ATTACK_PISTOL_LOW</code></td>
			<td><code>ACT_RANGE_ATTACK_PISTOL_MED</code></td>
			<td>Part of the support added for "medium" cover. To be more consistent with other NPCs, there is a custom crouch animation which takes the place of this one.</td>
		</tr>
		<tr>
			<td><code>lowcover_aim_pistol</code></td>
			<td><code>ACT_RANGE_AIM_PISTOL_LOW</code></td>
			<td><code>ACT_RANGE_AIM_PISTOL_MED</code></td>
			<td>Part of the support added for "medium" cover. To be more consistent with other NPCs, there is a custom crouch animation which takes the place of this one.</td>
		</tr>
		<tr>
			<td><code>lowcover_shoot_smg1</code></td>
			<td><code>ACT_RANGE_ATTACK_SMG1_LOW</code></td>
			<td><code>ACT_RANGE_ATTACK_SMG1_MED</code></td>
			<td>Part of the support added for "medium" cover. To be more consistent with other NPCs, there is a custom crouch animation which takes the place of this one.</td>
		</tr>
		<tr>
			<td><code>lowcover_aim_smg1</code></td>
			<td><code>ACT_RANGE_AIM_SMG1_LOW</code></td>
			<td><code>ACT_RANGE_AIM_SMG1_MED</code></td>
			<td>Part of the support added for "medium" cover. To be more consistent with other NPCs, there is a custom crouch animation which takes the place of this one.</td>
		</tr>
	</tbody>
</table>

# Supplementary features

Mapbase adds several optional, sometimes specialized features.

### Dynamic interactions

Mapbase ports Alyx's dynamic interactions with zombies to all human NPCs except <code>npc_combine_s</code>. They can be controlled using a new "Dynamic interactions enabled" keyvalue on NPCs.
