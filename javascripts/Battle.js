"use strict";

function printToDom(PlayerObj, EnemyObj) {
    var enemyInitialHealth = EnemyObj.initialHealth;
    var enemyCurrentHealth = EnemyObj.health;

    var playerInitialHealth = PlayerObj.initialHealth;
    var playerCurrentHealth = PlayerObj.health;

    var enemyPercentage = ((enemyCurrentHealth / enemyInitialHealth) * 100) + "%";
    var playerPercentage = ((playerCurrentHealth / playerInitialHealth) * 100) + "%";

    console.log("clicked printToDom");
    $("#player1").empty();
    $("#player2").empty();

    /////// Card Order ///////
    // Player name
    // HP
    // Class & Weapon (Left to Right)

    let player1Card =   `<p>Elder Sage ${PlayerObj.playerName}</p>
    <p>HP: ${PlayerObj.health}</p>
    <img class="player-image" src="img/player.png" alt="IMAGE 2">
    <div class="progress">
        <div id="player1-progress" class="progress-bar progress-edit" role="progressbar" aria-valuenow="40"
        aria-valuemin="0" aria-valuemax="100" style="width:${playerPercentage}">
            <span class="sr-only">70% Complete</span>
        </div>
    </div>
    <p><span>${PlayerObj.name}</span> <span class="span-float-right">${PlayerObj.weapon}</span></p>
    `;
    let enemyCard = `<p>Evil Adam</p>
    <p>HP: ${EnemyObj.health}</p>
    <img class="player-image" src="img/adam.png" alt="IMAGE 2">
    <div class="progress">
        <div id="player2-progress"  class="progress-bar progress-edit" role="progressbar" aria-valuenow="70"
        aria-valuemin="0" aria-valuemax="100" style="width:${enemyPercentage}">
            <span class="sr-only">70% Complete</span>
        </div>
    </div>
    <p><span>${EnemyObj.name}</span> <span class="span-float-right">${EnemyObj.weapon.name}</span></p>
    `;
    
    $("#player1").append(player1Card);
    $("#player2").append(enemyCard);
  }


function attack(defender, attacker){



    // var criticalHit = (Math.floor(Math.random() * 10) + 1).toFixed(0);
    // var myIntel = attacker.intelligence;
    // var intel = parseInt(attacker.intelligence);

    // console.log("Critical (1-10): ", criticalHit);
    // console.log("Intel: ", intel);
    // console.log("MyIntel: ", myIntel);

    // console.log("CRITICAL HIT: ", criticalHit);

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

function finalScreen(loser, winner){
    console.log("GAME OVER -- ", loser.name + " LOSES");
    console.log("ATTACKER: ", winner);
    console.log("DEFENDER: ", loser);



    var gameOverCard = `<p>${winner.playerName} won with a fatal strike from the ${winner.weapon}!</p>
                        <p>Poor ${loser.playerName} lost!</p>`;

        // Player wins
        $("#gameOverTarget").append(gameOverCard);
        $("#getCodeModal").modal('show');

    

}

module.exports={printToDom, attack, populateNewHealth};