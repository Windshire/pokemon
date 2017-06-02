/**
 * Given a move and the damage that it deals in this scenario,
 * this function will create a string formatting that information.
 * It will display the damage, the time it takes to incur, and the DPS.
 * 
 */
function formatMoveDamage(move, moveDamage) {
	var moveDamageString;
	moveDamageString = move.name + " Damage: " + moveDamage + ", ";
	moveDamageString += "Time: " + move.time + ", ";
	moveDamageString += "DPS: " + (moveDamage / move.time).toFixed(2) + "<br>";
	return moveDamageString;
}

/**
 * Creates a paragraph of initially undisplayed text.
 * The id of the paragraph is passed in as the "id" param.
 * The content of the paragraph is passed in as the "hiddenText" param.
 * Creates a button that will reveal this text when clicked.
 * Text that appears on button is passed in as the "buttonText" param.
 * 
 */
function formatHiddenText(id, buttonText, hiddenText) {
	var noDisplayCode = '';
	
	noDisplayCode += '<div id="';
	noDisplayCode += id;
	noDisplayCode += '" hidden>';
	noDisplayCode += hiddenText
	noDisplayCode += '</div>';
	
	
	noDisplayCode += '<button id ="';
	noDisplayCode += id;
	noDisplayCode += 'Button" type="button"';
	noDisplayCode += 'onclick=\'hideButtonAfterAction("';
	noDisplayCode += id+'Button';
	noDisplayCode += '","';
	noDisplayCode += id;
	noDisplayCode += '")\';>';
	noDisplayCode += buttonText;
	noDisplayCode += '</button>';
	
	
	
	return noDisplayCode;
}

/**
 * Hides a specified button after revealing a specified id.
 * 
 */
function hideButtonAfterAction(buttonId, id) {
	document.getElementById(buttonId).style.visibility = 'hidden';
	document.getElementById(id).style.display='block';
}

/**
 * Given an id, will hide that id if shown, or show if hidden.
 * 
 */
function showHide(id) {
    var x = document.getElementById(id);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

/**
 * Returns a string of HTML code to be placed into a <p> tag.
 * First, it runs all of the necessary computations, calling functions
 * in compute.js to figure out the DPS of each move, and overall DPS.
 * The string will show the overall DPS of this attacker against the
 * given defender, and will create a "Details" button, which (when 
 * clicked) will display the DPS of the two attacking moves separately.
 * Right now, it just has the attacker and defender be the same.
 * 
 */
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
	
	var hiddenText = "";
	hiddenText += "<b>OVERALL DPS: </b>"
	hiddenText += formatMoveDamage({name: "FULL CYCLE", time: attackCycleTime}, attackCycleDamage);
	hiddenText += "<b>QUICK MOVE: </b>";
	hiddenText += formatMoveDamage(atkQuickMove, attackQuickMoveDamage);
	hiddenText += "<b>CHARGE MOVE: </b>";
	hiddenText += formatMoveDamage(atkChargeMove, attackChargeMoveDamage);
	
	var resultFormat = "The attacking "+atk.species.name;
	resultFormat += " will deal an average of "+(attackCycleDamage/attackCycleTime).toFixed(2);
	resultFormat += " damage per second to the defending "+def.species.name+". ";
	resultFormat += formatHiddenText("damageDetail", "Detail", hiddenText);
	
	return resultFormat;
}
