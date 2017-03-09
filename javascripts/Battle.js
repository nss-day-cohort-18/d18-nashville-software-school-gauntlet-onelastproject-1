"use strict";

function printToDom(PlayerObj) {
    console.log("clicked printToDom");
    $("#player1").empty();
    let player1Card =   `<p>Player Name: ${PlayerObj.playerName}</p>
    <p>Fighter Class: ${PlayerObj.name}</p>
    <p>Weapon: ${PlayerObj.weapon}</p>
    <p>Health: ${PlayerObj.health}</p>
    `;
    // let enemyCard = `<p>Player Name: ???</p>
    // <p>Fighter Class: ${EnemyObj.name}</p>
    // <p>Weapon: ${EnemyObj.weapon}</p>
    // <p>Health: ${EnemyObj.health}</p>
    // `
                          
    $("#player1").append(player1Card);
    // $("#player2").append(enemyCard);
  }


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

module.exports={printToDom, attack, populateNewHealth};