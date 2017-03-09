"use strict";

function printToDom(PlayerObj, EnemyObj) {
    console.log("EnemyObject: ", EnemyObj);

    console.log("clicked printToDom");
    $("#player1").empty();
    $("#player2").empty();
    let player1Card =   `<p>Player Name: ${PlayerObj.playerName}</p>
    <p>Fighter Class: ${PlayerObj.name}</p>
    <p>Weapon: ${PlayerObj.weapon}</p>
    <p>Health: ${PlayerObj.health}</p>
    `;
    let enemyCard = `<p>Player Name: ???</p>
    <p>Fighter Class: ${EnemyObj.name}</p>
    <p>Weapon: ${EnemyObj.weapon}</p>
    <p>Health: ${EnemyObj.health}</p>
    `;
                          
    $("#player1").append(player1Card);
    $("#player2").append(enemyCard);
  }


function attack(defender, attacker){

    defender.health = defender.health - attacker.strength;
    if(defender.health <= 0){
        defender.health = 0;
        finalScreen(defender, attacker);
        return false;
    }else{
        return true;
    }
    console.log("Defender Health: ", defender.health);

}

function populateNewHealth(myPlayerObj, myEnemyObj){
	console.log("[AFTER ATTACK] MyPlayer Health: ", myPlayerObj.health);
	console.log("[AFTER ATTACK] Enemy Health: ", myEnemyObj.health);
}

function finalScreen(defender, attacker){
    console.log("GAME OVER -- ", defender.name + " LOSES");
    console.log("ATTACKER: ", attacker);
    console.log("DEFENDER: ", defender);
}

module.exports={printToDom, attack, populateNewHealth};