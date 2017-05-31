function populateSpecies() {
	var speciesDropdown;
	
	speciesDropdown = "<select>";
	speciesDropdown += "<option>Choose Pokemon:</option>";
	speciesDropdown += "<option>Vaporeon</option>";
	speciesDropdown += "</select>";
	return speciesDropdown;
}

function getPokemon() {
	var mon = getVaporeonPokemonSettings();
	var quick = getWaterGunMoveSettings();
	var cinematic = getHydroPumpMoveSettings();
	
	var pokemon = {
		
		species: {
			name: mon.pokemon_settings.pokemon_id,
			type: mon.pokemon_settings.type,
			attack: mon.pokemon_settings.stats.base_attack,
			defense: mon.pokemon_settings.stats.base_defense,
			stamina: mon.pokemon_settings.stats.base_stamina
		},
		quickMove: {
			name: quick.move_settings.movement_id,
			power: quick.move_settings.power, 
			energy: quick.move_settings.energy_delta,
			type: quick.move_settings.pokemon_type,
			time: quick.move_settings.duration_ms/1000
		},
		cinematicMove: {
			name: cinematic.move_settings.movement_id,
			power: cinematic.move_settings.power, 
			energy: cinematic.move_settings.energy_delta,
			type: cinematic.move_settings.pokemon_type,
			time: cinematic.move_settings.duration_ms/1000
		},
		getAttackStat: function() {
			return this.species.attack;
		},
		getDefenseStat: function() {
			return this.species.defense;
		},
		computeStabBonus: function(move) {
			if (move.type == this.species.type) {
				return 1.25;
			}
			else {
				return 1;
			}
		},
		computeEffectiveBonus: function(move) {
			return 0.8; //TODO STUB
		}
	};
	
	return pokemon;
}

/*
var obj, dbParam, xmlhttp, myObj, x, txt = "";
obj = { "table":"customers", "limit":20 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        txt += "<select>"
        for (x in myObj) {
            txt += "<option>" + myObj[x].name;
        }
        txt += "</select>"
        document.getElementById("species").innerHTML = txt;
    }
};
*/


function getVaporeonPokemonSettings() {
	var item_templates = {
		template_id: "V0134_POKEMON_VAPOREON",
		pokemon_settings: {
			pokemon_id: "VAPOREON",
			model_scale: 1.05,
			type: "POKEMON_TYPE_WATER",
			camera: {
				disk_radius_m: 0.5198,
				cylinder_radius_m: 0.45,
				cylinder_height_m: 0.94499987,
				shoulder_mode_scale: 0.4
			},
			encounter: {
				base_capture_rate: 0.15,
				base_flee_rate: 0.06,
				collision_radius_m: 0.21,
				collision_height_m: 0.525,
				collision_head_radius_m: 0.2625,
				movement_type: "MOVEMENT_JUMP",
				movement_timer_s: 3,
				jump_time_s: 1,
				attack_timer_s: 8
			},
			stats: {
			  base_stamina: 260,
			  base_attack: 205,
			  base_defense: 177
			},
			quick_moves: "WATER_GUN_FAST",
			cinematic_moves: "WATER_PULSE",
			cinematic_moves: "HYDRO_PUMP",
			cinematic_moves: "AQUA_TAIL",
			animation_time: 1.8667,
			animation_time: 0.6667,
			animation_time: 1.9,
			animation_time: 1.7,
			animation_time: 0,
			animation_time: 2,
			animation_time: 2.1333,
			animation_time: 2.133333,
			evolution_pips: 1,
			pokedex_height_m: 1,
			pokedex_weight_kg: 29,
			parent_pokemon_id: "EEVEE",
			height_std_dev: 0.125,
			weight_std_dev: 3.625,
			family_id: "FAMILY_EEVEE",
			km_buddy_distance: 1.25,
			model_height: 0.89
		}
	  };
  return item_templates;
}

function getWaterGunMoveSettings() {
	var item_templates = {
		template_id: "V0230_MOVE_WATER_GUN_FAST",
		move_settings: {
			movement_id: "WATER_GUN_FAST",
			animation_id: 4,
			pokemon_type: "POKEMON_TYPE_WATER",
			power: 5,
			accuracy_chance: 1,
			stamina_loss_scalar: 0.01,
			trainer_level_min: 1,
			trainer_level_max: 100,
			vfx_name: "water_gun_fast",
			duration_ms: 500,
			damage_window_start_ms: 300,
			damage_window_end_ms: 500,
			energy_delta: 5
		}
	}
	return item_templates;
}

function getHydroPumpMoveSettings() {
	var item_templates = {
		template_id: "V0107_MOVE_HYDRO_PUMP",
		move_settings: {
			movement_id: "HYDRO_PUMP",
			animation_id: 5,
			pokemon_type: "POKEMON_TYPE_WATER",
			power: 130,
			accuracy_chance: 1,
			critical_chance: 0.05,
			stamina_loss_scalar: 0.11,
			trainer_level_min: 1,
			trainer_level_max: 100,
			vfx_name: "hydro_pump",
			duration_ms: 3300,
			damage_window_start_ms: 900,
			damage_window_end_ms: 3000,
			energy_delta: -100
		}
	}
	return item_templates;
}
