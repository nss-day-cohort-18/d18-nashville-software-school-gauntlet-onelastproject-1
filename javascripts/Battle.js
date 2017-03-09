"use strict";


function attack(myPlayerObj, myEnemyObj){

	// myPlayerObj.health = myPlayerObj.health - myEnemyObj.strength;
	// myEnemyObj.health = myEnemyObj.health - myPlayerObj.strength;
	console.log("[MID] PlayerOBj Damage: ", myPlayerObj.strength - myPlayerObj.strengthBonus);
	console.log("[MID] EnemyObj Damage: ", myEnemyObj.strength - myEnemyObj.strengthBonus);

}

function populateNewHealth(myPlayerObj, myEnemyObj){
	console.log("[AFTER ATTACK] MyPlayer Health: ", myPlayerObj.health);
	console.log("[AFTER ATTACK] Enemy Health: ", myEnemyObj.health);
}