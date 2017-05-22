function printLog(str) {
	var node = document.createElement("LI");       // Create a <li> node
	var textnode = document.createTextNode(str);
	node.appendChild(textnode);					   // Put text in the li
	//document.getElementById("list").appendChild(node); // li into list
}
	
function computeMovePower(move, attacker) {
	var initialMovePower = move.power;
	var stabBonus = attacker.computeStabBonus(move);
	printLog("Move Power: "+ initialMovePower + " * " + stabBonus);
	return initialMovePower * stabBonus;
}

function computeDefenderModifier(move, attacker, defender) {
	var effectiveBonus = defender.computeEffectiveBonus(move);
	var statCompare = attacker.getAttackStat() / defender.getDefenseStat();
	printLog("Stat Compare: " + attacker.getAttackStat() + " / " + defender.getDefenseStat());
	printLog("Defender Modifier: " + statCompare + " * " + effectiveBonus);
	var defendingPokemonModifier = statCompare * effectiveBonus;
	return defendingPokemonModifier;
}
function computeMoveDamage(move, attacker, defender) {
	var movePower = computeMovePower(move, attacker);
	var defenderModifier = computeDefenderModifier(move, attacker, defender);
	printLog("Damage: floor(.5 * " + movePower + " * " + defenderModifier + ") + 1");
	return Math.floor(.5 * movePower * defenderModifier) + 1;
}

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
