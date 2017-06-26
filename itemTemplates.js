var itemTemplates = [
	{
	  "template_id": "V0214_MOVE_VINE_WHIP_FAST",
	  "move_settings": {
	    "movement_id": "VINE_WHIP_FAST",
	    "animation_id": 4,
	    "pokemon_type": "POKEMON_TYPE_GRASS",
	    "power": 7,
	    "accuracy_chance": 1,
	    "stamina_loss_scalar": 0.01,
	    "trainer_level_min": 1,
	    "trainer_level_max": 100,
	    "vfx_name": "vine_whip_fast",
	    "duration_ms": 600,
	    "damage_window_start_ms": 350,
	    "damage_window_end_ms": 600,
	    "energy_delta": 6
	  }
	},

	{
	  "template_id": "V0221_MOVE_TACKLE_FAST",
	  "move_settings": {
	    "movement_id": "TACKLE_FAST",
	    "animation_id": 4,
	    "pokemon_type": "POKEMON_TYPE_NORMAL",
	    "power": 5,
	    "accuracy_chance": 1,
	    "stamina_loss_scalar": 0.01,
	    "trainer_level_min": 1,
	    "trainer_level_max": 100,
	    "vfx_name": "tackle_fast",
	    "duration_ms": 500,
	    "damage_window_start_ms": 300,
	    "damage_window_end_ms": 500,
	    "energy_delta": 5
	  }
	},

	{
	  "template_id": "V0090_MOVE_SLUDGE_BOMB",
	  "move_settings": {
	    "movement_id": "SLUDGE_BOMB",
	    "animation_id": 5,
	    "pokemon_type": "POKEMON_TYPE_POISON",
	    "power": 80,
	    "accuracy_chance": 1,
	    "critical_chance": 0.05,
	    "stamina_loss_scalar": 0.09,
	    "trainer_level_min": 1,
	    "trainer_level_max": 100,
	    "vfx_name": "sludge_bomb",
	    "duration_ms": 2300,
	    "damage_window_start_ms": 1100,
	    "damage_window_end_ms": 2100,
	    "energy_delta": "-50"
	  }
	},

	{
	  "template_id": "V0059_MOVE_SEED_BOMB",
	  "move_settings": {
	    "movement_id": "SEED_BOMB",
	    "animation_id": 5,
	    "pokemon_type": "POKEMON_TYPE_GRASS",
	    "power": 55,
	    "accuracy_chance": 1,
	    "critical_chance": 0.05,
	    "stamina_loss_scalar": 0.08,
	    "trainer_level_min": 1,
	    "trainer_level_max": 100,
	    "vfx_name": "seed_bomb",
	    "duration_ms": 2100,
	    "damage_window_start_ms": 1200,
	    "damage_window_end_ms": 1900,
	    "energy_delta": "-33"
	  }
	},

	{
		"template_id": "V0118_MOVE_POWER_WHIP",
		"move_settings": {
			"movement_id": "POWER_WHIP",
			"animation_id": 5,
			"pokemon_type": "POKEMON_TYPE_GRASS",
			"power": 90,
			"accuracy_chance": 1,
			"stamina_loss_scalar": 0.12,
			"trainer_level_min": 1,
			"trainer_level_max": 100,
			"vfx_name": "power_whip",
			"duration_ms": 2600,
			"damage_window_start_ms": 1250,
			"damage_window_end_ms": 2350,
			"energy_delta": "-50"
		}
	},

	{
	  "template_id": "V0001_POKEMON_BULBASAUR",
	  "pokemon_settings": {
	    "pokemon_id": "BULBASAUR",
	    "model_scale": 1.09,
	    "type": "POKEMON_TYPE_GRASS",
	    "type_2": "POKEMON_TYPE_POISON",
	    "camera": {
	      "disk_radius_m": 0.5723,
	      "cylinder_radius_m": 0.5,
	      "cylinder_height_m": 0.763,
	      "shoulder_mode_scale": 0.5
	    },
	    "encounter": {
	      "base_capture_rate": 0.2,
	      "base_flee_rate": 0.1,
	      "collision_radius_m": 0.3815,
	      "collision_height_m": 0.654,
	      "collision_head_radius_m": 0.2725,
	      "movement_type": "MOVEMENT_JUMP",
	      "movement_timer_s": 10,
	      "jump_time_s": 1.15,
	      "attack_timer_s": 29
	    },
	    "stats": {
	      "base_stamina": 90,
	      "base_attack": 118,
	      "base_defense": 118
	    },
	    "quick_moves": ["VINE_WHIP_FAST","TACKLE_FAST"],
	    "cinematic_moves": ["SLUDGE_BOMB","SEED_BOMB","POWER_WHIP"],
	    "animation_time": [1.6667,0.6667,1.6667,1.8333,0,2.1667,1.4,1.4666671],
	    "evolution_ids": "IVYSAUR",
	    "evolution_pips": 1,
	    "pokedex_height_m": 0.7,
	    "pokedex_weight_kg": 6.9,
	    "height_std_dev": 0.0875,
	    "weight_std_dev": 0.8625,
	    "family_id": "FAMILY_BULBASAUR",
	    "candy_to_evolve": 25,
	    "km_buddy_distance": 0.75,
	    "model_height": 0.7,
	    "evolution_branch": {
	      "evolution": "IVYSAUR"
	    }
	  }
	},

	{
		"template_id": "V0209_MOVE_EMBER_FAST",
		"move_settings": {
			"movement_id": "EMBER_FAST",
			"animation_id": 4,
			"pokemon_type": "POKEMON_TYPE_FIRE",
			"power": 10,
			"accuracy_chance": 1,
			"stamina_loss_scalar": 0.01,
			"trainer_level_min": 1,
			"trainer_level_max": 100,
			"vfx_name": "ember_fast",
			"duration_ms": 1000,
			"damage_window_start_ms": 600,
			"damage_window_end_ms": 800,
			"energy_delta": 10
		}
	},

	{
	  "template_id": "V0220_MOVE_SCRATCH_FAST",
	  "move_settings": {
	    "movement_id": "SCRATCH_FAST",
	    "animation_id": 4,
	    "pokemon_type": "POKEMON_TYPE_NORMAL",
	    "power": 6,
	    "accuracy_chance": 1,
	    "stamina_loss_scalar": 0.01,
	    "trainer_level_min": 1,
	    "trainer_level_max": 100,
	    "vfx_name": "scratch_fast",
	    "duration_ms": 500,
	    "damage_window_start_ms": 300,
	    "damage_window_end_ms": 500,
	    "energy_delta": 4
	  }
	},

	{
	  "template_id": "V0101_MOVE_FLAME_CHARGE",
	  "move_settings": {
	    "movement_id": "FLAME_CHARGE",
	    "animation_id": 5,
	    "pokemon_type": "POKEMON_TYPE_FIRE",
	    "power": 70,
	    "accuracy_chance": 1,
	    "critical_chance": 0.05,
	    "stamina_loss_scalar": 0.05,
	    "trainer_level_min": 1,
	    "trainer_level_max": 100,
	    "vfx_name": "flame_charge",
	    "duration_ms": 3800,
	    "damage_window_start_ms": 2900,
	    "damage_window_end_ms": 3450,
	    "energy_delta": "-33"
	  }
	},

	{
		"template_id": "V0102_MOVE_FLAME_BURST",
		"move_settings": {
			"movement_id": "FLAME_BURST",
			"animation_id": 5,
			"pokemon_type": "POKEMON_TYPE_FIRE",
			"power": 70,
			"accuracy_chance": 1,
			"critical_chance": 0.05,
			"stamina_loss_scalar": 0.07,
			"trainer_level_min": 1,
			"trainer_level_max": 100,
			"vfx_name": "flame_burst",
			"duration_ms": 2600,
			"damage_window_start_ms": 1000,
			"damage_window_end_ms": 2100,
			"energy_delta": "-50"
		}
	},

	{
		"template_id": "V0024_MOVE_FLAMETHROWER",
		"move_settings": {
			"movement_id": "FLAMETHROWER",
			"animation_id": 5,
			"pokemon_type": "POKEMON_TYPE_FIRE",
			"power": 70,
			"accuracy_chance": 1,
			"critical_chance": 0.05,
			"stamina_loss_scalar": 0.09,
			"trainer_level_min": 1,
			"trainer_level_max": 100,
			"vfx_name": "flamethrower",
			"duration_ms": 2200,
			"damage_window_start_ms": 1500,
			"damage_window_end_ms": 1700,
			"energy_delta": "-50"
		}
	},

	{
		"template_id": "V0004_POKEMON_CHARMANDER",
	  "pokemon_settings": {
	    "pokemon_id": "CHARMANDER",
	    "model_scale": 1.25,
	    "type": "POKEMON_TYPE_FIRE",
	    "camera": {
	      "disk_radius_m": 0.4688,
	      "cylinder_radius_m": 0.3125,
	      "cylinder_height_m": 0.75,
	      "shoulder_mode_scale": 0.5
	    },
	    "encounter": {
	      "base_capture_rate": 0.2,
	      "base_flee_rate": 0.1,
	      "collision_radius_m": 0.15625,
	      "collision_height_m": 0.46875,
	      "collision_head_radius_m": 0.15625,
	      "movement_type": "MOVEMENT_JUMP",
	      "movement_timer_s": 29,
	      "jump_time_s": 1.25,
	      "attack_timer_s": 10
	    },
	    "stats": {
	      "base_stamina": 78,
	      "base_attack": 116,
	      "base_defense": 96
	    },
	    "quick_moves": ["EMBER_FAST","SCRATCH_FAST"],
	    "cinematic_moves": ["FLAME_CHARGE","FLAME_BURST","FLAMETHROWER"],
	    "animation_time": [2.1333,0.6667,1.6667,1.8333,0,2.1333,1.1667,1.333333],
	    "evolution_ids": "CHARMELEON",
	    "evolution_pips": 1,
	    "pokedex_height_m": 0.6,
	    "pokedex_weight_kg": 8.5,
	    "height_std_dev": 0.075,
	    "weight_std_dev": 1.0625,
	    "family_id": "FAMILY_CHARMANDER",
	    "candy_to_evolve": 25,
	    "km_buddy_distance": 0.75,
	    "model_height": 0.6,
	    "evolution_branch": {
	      "evolution": "CHARMELEON"
	    }
		}
	},

	{
		"template_id": "V0237_MOVE_BUBBLE_FAST",
		"move_settings": {
			"movement_id": "BUBBLE_FAST",
			"animation_id": 4,
			"pokemon_type": "POKEMON_TYPE_WATER",
			"power": 12,
			"accuracy_chance": 1,
			"stamina_loss_scalar": 0.01,
			"trainer_level_min": 1,
			"trainer_level_max": 100,
			"vfx_name": "bubble_fast",
			"duration_ms": 1200,
			"damage_window_start_ms": 750,
			"damage_window_end_ms": 1000,
			"energy_delta": 14
		}
	},

	{
		"template_id": "V0057_MOVE_AQUA_JET",
		"move_settings": {
			"movement_id": "AQUA_JET",
			"animation_id": 5,
			"pokemon_type": "POKEMON_TYPE_WATER",
			"power": 45,
			"accuracy_chance": 1,
			"critical_chance": 0.05,
			"stamina_loss_scalar": 0.04,
			"trainer_level_min": 1,
			"trainer_level_max": 100,
			"vfx_name": "aqua_jet",
			"duration_ms": 2600,
			"damage_window_start_ms": 1700,
			"damage_window_end_ms": 2100,
			"energy_delta": "-33"
		}
	},

	{
	  "template_id": "V0058_MOVE_AQUA_TAIL",
	  "move_settings": {
	    "movement_id": "AQUA_TAIL",
	    "animation_id": 5,
	    "pokemon_type": "POKEMON_TYPE_WATER",
	    "power": 50,
	    "accuracy_chance": 1,
	    "critical_chance": 0.05,
	    "stamina_loss_scalar": 0.09,
	    "trainer_level_min": 1,
	    "trainer_level_max": 100,
	    "vfx_name": "aqua_tail",
	    "duration_ms": 1900,
	    "damage_window_start_ms": 1200,
	    "damage_window_end_ms": 1650,
	    "energy_delta": "-33"
	  }
	},

	{
	  "template_id": "V0105_MOVE_WATER_PULSE",
	  "move_settings": {
	    "movement_id": "WATER_PULSE",
	    "animation_id": 5,
	    "pokemon_type": "POKEMON_TYPE_WATER",
	    "power": 70,
	    "accuracy_chance": 1,
	    "critical_chance": 0.05,
	    "stamina_loss_scalar": 0.06,
	    "trainer_level_min": 1,
	    "trainer_level_max": 100,
	    "vfx_name": "water_pulse",
	    "duration_ms": 3200,
	    "damage_window_start_ms": 2200,
	    "damage_window_end_ms": 2900,
	    "energy_delta": "-50"
	  }
	},

	{
	  "template_id": "V0007_POKEMON_SQUIRTLE",
	  "pokemon_settings": {
	    "pokemon_id": "SQUIRTLE",
	    "model_scale": 1.53,
	    "type": "POKEMON_TYPE_WATER",
	    "camera": {
	      "disk_radius_m": 0.5738,
	      "cylinder_radius_m": 0.3825,
	      "cylinder_height_m": 0.64259988,
	      "shoulder_mode_scale": 0.1
	    },
	    "encounter": {
	      "base_capture_rate": 0.2,
	      "base_flee_rate": 0.1,
	      "collision_radius_m": 0.2295,
	      "collision_height_m": 0.3825,
	      "collision_head_radius_m": 0.19125,
	      "movement_type": "MOVEMENT_JUMP",
	      "movement_timer_s": 10,
	      "jump_time_s": 1,
	      "attack_timer_s": 29
	    },
	    "stats": {
	      "base_stamina": 88,
	      "base_attack": 94,
	      "base_defense": 122
	    },
	    "quick_moves": ["BUBBLE_FAST","TACKLE_FAST"],
	    "cinematic_moves": ["AQUA_JET","AQUA_TAIL","WATER_PULSE"],
	    "animation_time": [1.7333,0.6667,1.6667,1.5,0,2.1667,1,1.333333],
	    "evolution_ids": "WARTORTLE",
	    "evolution_pips": 1,
	    "pokedex_height_m": 0.5,
	    "pokedex_weight_kg": 9,
	    "height_std_dev": 0.0625,
	    "weight_std_dev": 1.125,
	    "family_id": "FAMILY_SQUIRTLE",
	    "candy_to_evolve": 25,
	    "km_buddy_distance": 0.75,
	    "model_height": 0.43,
	    "evolution_branch": {
	      "evolution": "WARTORTLE"
	    }
		}
  }

];
