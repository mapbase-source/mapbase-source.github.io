
//------------------------------------------------------------------------
// Icon Button
//------------------------------------------------------------------------
const iconButton = document.getElementById('top_icon_button');
const iconImage = document.getElementById('top_icon_img');

iconButton.addEventListener('click', (event) => {
	var hinge = document.getElementById('top_icon_hinge');
	hinge.classList.toggle('clicked');
	
	var audio = document.getElementById("icon_spin_sound");
	audio.volume = 0.25;
	audio.play();
});

//iconButton.addEventListener('transitionend', (event) => {
//	if (iconImage.classList.contains('clicked'))
//		iconImage.classList.remove('clicked');
//});

//------------------------------------------------------------------------
// Random Image Sea
//------------------------------------------------------------------------
const sea = document.getElementById('sea');

const MAX_SEA_ICONS = 5;
const SEA_ICON_INTERVAL = 30; // Keep in sync with css anim

var num_sea_icons = 0;

const sea_icons = [
	'assets/entities/ai_goal_fear.png',
	'assets/entities/ai_monitor.png',
	//'assets/entities/clientcommand.png',
	'assets/entities/concussiveblast.png',
	'assets/entities/convar_mod.png',
	'assets/entities/env_instructor_hint.png',
	'assets/entities/filter_blood_control.png',
	'assets/entities/filter_damage_logic.png',
	'assets/entities/filter_damage_mod.png',
	'assets/entities/filter_damage_transfer.png',
	//'assets/entities/filter_generic.png',
	//'assets/entities/filter_generic2.png',
	'assets/entities/filter_involume.png',
	'assets/entities/filter_keyfield.png',
	'assets/entities/filter_model.png',
	'assets/entities/filter_redirect.png',
	'assets/entities/filter_relationship.png',
	'assets/entities/filter_script.png',
	'assets/entities/game_menu.png',
	'assets/entities/game_metadata.png',
	'assets/entities/game_timer.png',
	'assets/entities/game_ui.png',
	'assets/entities/hl2_gamerules.png',
	//'assets/entities/info_node_link.png',
	'assets/entities/logic_console.png',
	'assets/entities/logic_context_accessor.png',
	'assets/entities/logic_convar.png',
	'assets/entities/logic_datadesc_accessor.png',
	'assets/entities/logic_entity_position.png',
	'assets/entities/logic_externaldata.png',
	'assets/entities/logic_format.png',
	'assets/entities/logic_keyfield.png',
	'assets/entities/logic_playerinfo.png',
	//'assets/entities/logic_playerproxy.png',
	'assets/entities/logic_random_outputs.png',
	'assets/entities/logic_relay_queue.png',
	'assets/entities/logic_script_client.png',
	'assets/entities/logic_sequence.png',
	'assets/entities/logic_skill.png',
	'assets/entities/math_bits.png',
	'assets/entities/math_clamp.png',
	'assets/entities/math_counter_advanced.png',
	'assets/entities/math_generate.png',
	'assets/entities/math_lightpattern.png',
	'assets/entities/math_mod.png',
	'assets/entities/math_vector.png',
	'assets/entities/point_damageinfo.png',
	'assets/entities/point_entity_replace.png',
	'assets/entities/point_projectile.png',
	'assets/entities/scripted_sound.png',
	'assets/entities/servercommand.png',
	'assets/entities/toolsnpcclipandblock_los.png',
	'assets/entities/vscrept.png',
	'assets/entities/what2.png',
];

function CreateSeaIcon()
{
	var icon_class = 'sea_icon_l';
	if (Math.random() > 0.5)
		icon_class = 'sea_icon_r';
	
	const seaImage = document.createElement('img');
	seaImage.src = sea_icons[Math.floor(Math.random() * sea_icons.length)];
	seaImage.classList.add(icon_class);
	
	const ypos = (Math.random() * 80) + 10;
	seaImage.style.top = `${ypos}%`
	//seaImage.style.left = '-100px';

	seaImage.addEventListener('animationend', (event) => {
		seaImage.remove();
		num_sea_icons--;
	});
	
	sea.appendChild(seaImage);
	num_sea_icons++;
}

CreateSeaIcon();

setInterval(() => {
	if (num_sea_icons < MAX_SEA_ICONS)
		CreateSeaIcon();
}, (SEA_ICON_INTERVAL / MAX_SEA_ICONS) * 1000);
