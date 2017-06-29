function printLog(str) {
	var node = document.createElement("LI");
	var textnode = document.createTextNode(str);
	node.appendChild(textnode);
	document.getElementById("debugList").appendChild(node);
}


/* IN-GAME DAMAGE CALCULATIONS */
//Move power: returns the initial power * the same type attack bonus
function computeMovePower(move, attacker) {
	var initialMovePower = move.power;
	var stabBonus = attacker.computeStabBonus(move);
	printLog(move.name+" Move Power: "+ initialMovePower + " * (stab:) " + stabBonus);
	return initialMovePower * stabBonus;
}

//Defender mod: returns the effective mod * atk/def ratio
function computeDefenderModifier(move, attacker, defender) {
	var effectiveBonus = defender.computeEffectiveBonus(move);
	var statCompare = attacker.getAttackStat() / defender.getDefenseStat();
	printLog("Stat Compare: ("+attacker.species.name+" atk:) " + attacker.getAttackStat()
		+ " / ("+defender.species.name+" def:) " + defender.getDefenseStat());
	printLog("Defender Modifier: (statRat:) " + statCompare + " * (effective:) " + effectiveBonus);
	var defendingPokemonModifier = statCompare * effectiveBonus;
	return defendingPokemonModifier;
}

//Move damage: damage formula is half of move power * defender mod, rounded down, plus one
function computeMoveDamage(move, attacker, defender) {
	var movePower = computeMovePower(move, attacker);
	var defenderModifier = computeDefenderModifier(move, attacker, defender);
	printLog(move.name+" Damage: floor(.5 * " + movePower + " * " + defenderModifier + ") + 1");
	return Math.floor(.5 * movePower * defenderModifier) + 1;
}

/* */
function computeQuicksToBar(quickMove,chargeMove) {
	var result = Math.abs(chargeMove.energy)/quickMove.energy;
	printLog(result + " quick moves until filled charge bar");
	return result;
}

function computeCycleDamage(quickMoveDamage,chargeMoveDamage,quicksToBar) {
	var result = quicksToBar*quickMoveDamage + chargeMoveDamage;
	return result;
}

function computeCycleTime(quickMove, chargeMove, quicksToBar) {
	var result = quicksToBar*quickMove.time + chargeMove.time;
	printLog("Total cycle time: " + result + " seconds.");
	return result;
}
