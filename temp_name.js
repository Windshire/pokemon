var pokemonSettings = [];
var moveSettings = [];

var selectedPokemon = { 	"atk": 	{
																		"mon": {},
																		"quick": {},
																		"charge": {},
																		"ivs": [15,15,15]
																	},
													"def": 	{
																		"mon": {},
																		"quick": {},
																		"charge": {},
																		"ivs": [15,15,15]
																	}
											};

function populateSpecies(role) {
	getSettings(pokemonSettings, "pokemon_settings");
	var speciesDropdown;
	speciesDropdown = "<select id=\"" + role + "Select\" onchange=\"setImgs()\">";
	speciesDropdown += "<option selected=\"selected\">Choose Pokemon:</option>";
	speciesDropdown += printOptions(pokemonSettings, "pokemon_id");
	speciesDropdown += "</select>";
	return speciesDropdown;
}

function populateMoves(role,speed,movesArray) {
	var movesDropdown;
	movesDropdown = "<select id=\"" + role + speed + "MoveSelect\""
	movesDropdown += " onchange=\"setMoves()\">";
	movesDropdown += "<option selected=\"selected\">Choose " + speed + " Move:</option>";
	movesDropdown += printOptions(movesArray, "null");
	movesDropdown += "</select>";
	return movesDropdown;
}

function printOptions(settingsArray, settingsProperty) {
	var optionsDropdown;
	for (var i = 0; i < settingsArray.length; ++i) {
		optionsDropdown += "<option>";
		if (settingsProperty == "null") {
			optionsDropdown += settingsArray[i];
		}
		else {
			optionsDropdown += settingsArray[i][settingsProperty];
		}
		optionsDropdown += "</option>";
	}
	return optionsDropdown;
}

function getSettings(settingsArray, settingsProperty) {
	if (settingsArray.length < 1) {
		for (var i=0; i < itemTemplates.length; ++i) {
			if (itemTemplates[i].hasOwnProperty(settingsProperty)) {
				settingsArray.push(itemTemplates[i][settingsProperty]);
			}
		}
	}
}

function setImgs() {
	setImg("atk");
	setImg("def");
}

function setImg(role) {
	var selOpt = document.getElementById(role + "Select");
	var pokemonImgId = selOpt.options[selOpt.selectedIndex].text;
	if (pokemonImgId != "Choose Pokemon:" && document.getElementById(role + "Img").alt != pokemonImgId) {
		var thisPokemonSettings = getThisPokemonSettings(pokemonImgId);
		selectedPokemon[role]["mon"] = thisPokemonSettings;
		var quickMoves = thisPokemonSettings.quick_moves;
		var chargeMoves = thisPokemonSettings.cinematic_moves;
		document.getElementById(role + "Img").src="img/"+pokemonImgId+".png";
		document.getElementById(role + "Img").alt=pokemonImgId;
		document.getElementById(role + "QuickMoves").innerHTML = populateMoves(role,"quick",quickMoves);
		document.getElementById(role + "ChargeMoves").innerHTML = populateMoves(role,"charge",chargeMoves);
	}
}

function getThisPokemonSettings(pokemonImgId) {
	for (var i=0; i < pokemonSettings.length; ++i) {
		if (pokemonSettings[i]["pokemon_id"] == pokemonImgId) {
			return pokemonSettings[i];
		}
	}
	return {};
}

function setMoves() {
	getSettings(moveSettings, "move_settings");
	setMove("atk","quick");
	setMove("atk","charge");
	setMove("def","quick");
	setMove("def","charge");
}

function setMove(role,speed) {
	var selOpt = document.getElementById(role + speed + "MoveSelect");
	var moveId = selOpt.options[selOpt.selectedIndex].text;
	var move = getThisMoveSettings(moveId);
	selectedPokemon[role][speed] = move;
}

function getThisMoveSettings(moveId) {
	for (var i=0; i < moveSettings.length; ++i) {
		if (moveSettings[i]["movement_id"] == moveId) {
			return moveSettings[i];
		}
	}
}

function getPokemon(role) {
	var mon = selectedPokemon[role]["mon"];
	var quick = selectedPokemon[role]["quick"];
	var cinematic = selectedPokemon[role]["charge"];
	var ivs = selectedPokemon[role]["ivs"];

	var pokemon = {

		species: {
			name: mon.pokemon_id,
			type1: mon.type,
			type2: mon.type_2,
			attack: mon.stats.base_attack,
			defense: mon.stats.base_defense,
			stamina: mon.stats.base_stamina
		},
		quickMove: {
			name: quick.movement_id,
			power: quick.power,
			energy: quick.energy_delta,
			type: quick.pokemon_type,
			time: quick.duration_ms/1000
		},
		cinematicMove: {
			name: cinematic.movement_id,
			power: cinematic.power,
			energy: cinematic.energy_delta,
			type: cinematic.pokemon_type,
			time: cinematic.duration_ms/1000
		},
		individualValues: {
			aiv: ivs[0],
			div: ivs[1],
			siv: ivs[2],
			level: 40
		},

		//attack stat: (base attack + attack iv) * cpm
		getAttackStat: function() {
			var baseAttack = this.species.attack;
			var attackIV = this.individualValues.aiv;
			var cpm = 1; //TODO
			return (baseAttack + attackIV) * cpm;
		},
		//defense stat: (base defense + defense iv) * cpm
		getDefenseStat: function() {
			var baseDefense = this.species.defense;
			var defenseIV = this.individualValues.div;
			var cpm = 1; //TODO
			return (baseDefense + defenseIV) * cpm;
		},
		//hp stat: (base stamina + stamina iv) * cpm
		getHPStat: function() {
			var baseStamina = this.species.stamina;
			var staminaIV = this.individualValues.siv;
			var cpm = 1; //TODO
			return (baseStamina + staminaIV) * cpm;
		},
		//if move matches one of its types, attack gets x1.2 STAB multiplier
		computeStabBonus: function(move) {
			var STAB_MULT = 1.2;
			if (move.type == this.species.type1 || move.type == this.species.type_2) {
				return STAB_MULT;
			}
			else {
				return 1;
			}
		},
		computeEffectiveBonus: function(move) {
			return 1; //TODO STUB
		}
	};

	return pokemon;
}
