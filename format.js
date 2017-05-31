function formatMoveDamage(move, moveDamage) {
	var moveDamageString;
	moveDamageString = move.name + " Damage: " + moveDamage + ", ";
	moveDamageString += "Time: " + move.time + ", ";
	moveDamageString += "DPS: " + (moveDamage / move.time).toFixed(2) + "<br>";
	return moveDamageString;
}

/**
 * 
 * Creates a paragraph of initially undisplayed text.
 * The id of the paragraph is passed in as the "id" param.
 * The content of the paragraph is passed in as the "hiddenText" param.
 * Creates a button that will reveal this text when clicked.
 * Text that appears on button is passed in as the "buttonText" param.
 * 
 */
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
	
	var pokemon = getPokemon();
	
	var atk = pokemon;
	var def = pokemon;
	
	var atkQuickMove = atk.quickMove;
	var atkChargeMove = atk.cinematicMove;
	
	var attackQuicksToBar = computeQuicksToBar(atkQuickMove, atkChargeMove);
	var attackCycleTime = computeCycleTime(atkQuickMove, atkChargeMove, attackQuicksToBar);
	var attackQuickMoveDamage = computeMoveDamage(atkQuickMove, atk, def);
	var attackChargeMoveDamage = computeMoveDamage(atkChargeMove, atk, def);
	var attackCycleDamage = computeCycleDamage(attackQuickMoveDamage,attackChargeMoveDamage,attackQuicksToBar);
	
	var hiddenText = "<b>QUICK MOVE: </b>" + formatMoveDamage(atkQuickMove, attackQuickMoveDamage);
	hiddenText += "<b>CHARGE MOVE: </b>" + formatMoveDamage(atkChargeMove, attackChargeMoveDamage);
	
	var resultFormat = "<b>OVERALL DPS: </b>" + formatMoveDamage({name: "Full Cycle", time: attackCycleTime}, attackCycleDamage);
	resultFormat += formatHiddenText("damageDetail", "Detail", hiddenText);
	
	return resultFormat;
}
