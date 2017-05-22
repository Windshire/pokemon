function formatMoveDamage(move, moveDamage) {
	var moveDamageString;
	moveDamageString = move.name + " Damage: " + moveDamage + ", ";
	moveDamageString += "Time: " + move.time + ", ";
	moveDamageString += "DPS: " + (moveDamage / move.time).toFixed(2) + "<br>";
	return moveDamageString;
}

function formatHiddenText(id, buttonText, hiddenText) {
	var noDisplayCode = '<button type="button"';
	noDisplayCode += 'onclick=\'document.getElementById("';
	noDisplayCode += id;
	noDisplayCode += '").style.display="block"\'>';
	noDisplayCode += buttonText;
	noDisplayCode += '</button>';
	
	noDisplayCode += '<p id="';
	noDisplayCode += id;
	noDisplayCode += '" style="display:none">';
	noDisplayCode += hiddenText
	noDisplayCode += '</p>';
	
	return noDisplayCode;
}

function formatResult() {
	
	var atkQuickMove = {
		name: "Water Gun",
		power: 5, 
		energy: 5,
		type: "WATER",
		time: 0.5
	};
	
	var atkChargeMove = {
		name: "Hydro Pump",
		power: 130, 
		energy: -100,
		type: "WATER",
		time: 3.3
	};
	
	var pokemon = {
		species: {
			name: "Vaporeon",
			type: "WATER",
			attack: 205,
			defense: 177,
			stamina: 260
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
			return 1; //TODO STUB
		}
	};
	
	var atk = pokemon;
	var def = pokemon;
	
	var attackQuicksToBar = computeQuicksToBar(atkQuickMove, atkChargeMove);
	var attackCycleTime = computeCycleTime(atkQuickMove, atkChargeMove, attackQuicksToBar);
	var attackQuickMoveDamage = computeMoveDamage(atkQuickMove, atk, def);
	var attackChargeMoveDamage = computeMoveDamage(atkChargeMove, atk, def);
	var attackCycleDamage = computeCycleDamage(attackQuickMoveDamage,attackChargeMoveDamage,attackQuicksToBar);
	
	var hiddenText = "<b>QUICK MOVE: </b>" + formatMoveDamage(atkQuickMove, attackQuickMoveDamage);
	hiddenText += "<b>CHARGE MOVE: </b>" + formatMoveDamage(atkChargeMove, attackChargeMoveDamage);
	
	var resultFormat = "<b>OVERALL DPS: </b>" + formatMoveDamage({name: "Full Cycle", time: attackCycleTime}, attackCycleDamage);
	resultFormat += formatHiddenText("damageDetail", "Detail", hiddenText);
	
	//
	//resultFormat += //resultFormat += 
	return resultFormat;
}
