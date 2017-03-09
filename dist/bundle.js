(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
"use strict";

  let Weapons = require("./weapons.js");

  function chooseWeapon(weaponChosen, PlayerObj) {

    console.log("Weapons: ", Weapons);

    // Switch statement that will assign the weapon to the user
    switch(weaponChosen){
      case "Dagger":
        console.log(" switch Dagger");
        PlayerObj.setWeapon(new Weapons.Dagger());
        console.log("object after dagger", PlayerObj);
        break;
      case "Broad Sword":
        console.log(" switch Broad Sword");
        PlayerObj.setWeapon(new Weapons.BroadSword());
        console.log("object after Broad Sword", PlayerObj);
        break;
      case "War Axe":
        console.log(" switch War Axe");
        PlayerObj.setWeapon(new Weapons.WarAxe());
        console.log("object after WarAxe", PlayerObj);
        break;
      case "Mace":
        console.log(" switch Mace");
        PlayerObj.setWeapon(new Weapons.Mace());
        console.log("object after Mace", PlayerObj);
        break;
      case "Spear":
        console.log(" switch Spear");
        PlayerObj.setWeapon(new Weapons.Spear());
        console.log("object after Spear", PlayerObj);
        break;
      case "Warhammer":
        console.log(" switch Warhammer");
        PlayerObj.setWeapon(new Weapons.Warhammer());
        console.log("object after Warhammer", PlayerObj);
        break;
      case "Club":
        console.log(" switch Club");
        PlayerObj.setWeapon(new Weapons.Club());
        console.log("object after Club", PlayerObj);
        break;
      case "LongSword":
        console.log(" switch LongSword");
        PlayerObj.setWeapon(new Weapons.LongSword());
        console.log("object after LongSword", PlayerObj);
        break;
    }
  }

module.exports = {chooseWeapon};

},{"./weapons.js":8}],3:[function(require,module,exports){
"use strict";

let Classes = require("./classes.js");
Classes.Gauntlet = {};

  function createPlayer(playerClass, PlayerObj) {

    console.log("Classes in Creat: ", Classes);

    // Switch statement that will assign the class to the user
    switch(playerClass){
      case "Warrior":

        PlayerObj = new Classes.Player.Gauntlet.GuildHall.Warrior(name);
        PlayerObj.setClass("Warrior");
        
        break;
      case "Wizard":

        PlayerObj = new Classes.Player.Gauntlet.GuildHall.Wizard(name);
        PlayerObj.setClass("Wizard");
        
        break;
      case "Thief":

        PlayerObj = new Classes.Player.Gauntlet.GuildHall.Thief(name);
        PlayerObj.setClass("Thief");
        
        break;
      case "Valkyrie":

        PlayerObj = new Classes.Player.Gauntlet.GuildHall.Valkyrie(name);
        PlayerObj.setClass("Valkyrie");
        break;
      case "Sorcerer":

        PlayerObj = new Classes.Player.Gauntlet.GuildHall.Sorcerer(name);
        PlayerObj.setClass("Sorcerer");
        
        break;
      case "Ninja":
        
        PlayerObj = new Classes.Player.Gauntlet.GuildHall.Ninja(name);
        PlayerObj.setClass("Ninja");
        
        break;
      case "Berserker":
        
        PlayerObj = new Classes.Player.Gauntlet.GuildHall.Berserker(name);
        PlayerObj.setClass("Berserker");
        
        break;
      case "Conjurer":
        
        PlayerObj = new Classes.Player.Gauntlet.GuildHall.Conjurer(name);
        PlayerObj.setClass("Conjurer");
        
        break;
      case "Assassin":
        
        PlayerObj = new Classes.Player.Gauntlet.GuildHall.Assassin(name);
        PlayerObj.setClass("Assassin");
        
        break;
      case "Monk":
        
        PlayerObj = new Classes.Player.Gauntlet.GuildHall.Monk(name);
        PlayerObj.setClass("Monk");
        
        break;
      case "Shaman":
        
        PlayerObj = new Classes.Player.Gauntlet.GuildHall.Shaman(name);
        PlayerObj.setClass("Shaman");
        
        break;
      case "surprise me":

        PlayerObj = new Classes.Player.Gauntlet.GuildHall.Random(name, PlayerObj);
        PlayerObj.setClass("Random");
        console.log("switch surprise");
        break;

    }

    return PlayerObj;

  }

  module.exports = {createPlayer};
},{"./classes.js":5}],4:[function(require,module,exports){
"use strict";


var name;
var playerClass;
var EnemyObj;
var PlayerObj;
var weaponChosen;

let Gauntlet = require("./classes.js");
let CreatePlayer = require("./CreatPlayer.js");
let Weapons = require("./ChooseWeapon.js");

console.log("CreatePlaterObj: ", CreatePlayer);

// Test code to generate a spell
// var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());

$(document).ready(function() {

    console.log("Gauntlet: ", Gauntlet);

    // Show the initial view that accepts player name
    $("#player-setup").show();

    // When user enters name
    $("#selectClass").click(function(event) {
        name = $("#player-name").val();
        console.log("Hello you friggin' ", name);
    });

    // When user clicks a (blue) class button (not the submit button)
    $(".classButton").click(function(event){
        console.log("playerClass", playerClass);
        playerClass = event.target.textContent;
        console.log("You added the " + playerClass + " class.");
    });
    // When user clicks surprise me class
    $(".surpriseButton").click(function(event) {
        playerClass = event.target.textContent;
        console.log(event.target.textContent);
        console.log("Are you crazy? Yes. Yes you are.");
    });
    // When user clicks a (blue) weapon button
    $(".weaponButton").click(function(event){
        weaponChosen = event.target.textContent;
        console.log("You added the " + weaponChosen + " weapon.");
    });
    // When user submits what class they want to play
    $("#selectWeapon").click(function(event) {
        console.log("Gauntlet: ", Gauntlet);
        PlayerObj = CreatePlayer.createPlayer(playerClass, PlayerObj);
    });

    // When user chooses weapon
    $("#battleButton").click(function(event) {
        console.log("Gauntlet: ", Gauntlet);
        var weaponOfChoice = Weapons.chooseWeapon(weaponChosen, PlayerObj);


        // Enemy
        // createEnemy();

        // EnemyObj.weapon = "Flamethrower";
        console.log("ENEMY: " ,EnemyObj);
        console.log("[BEFORE] Player 1 Health: ", PlayerObj.health);
        // console.log("[BEFORE] Enemy Health: ", EnemyObj.health);
    });

// Attack Button
    $("#attackButton").click(function(event) {        

        console.log("[BEFORE] Player 1 Damage: ", PlayerObj.strength);
        // console.log("[BEFORE] Enemy Damage: ", EnemyObj.strength);

        // attack(PlayerObj, EnemyObj);
        // populateNewHealth(PlayerObj, EnemyObj);

    });

    // Creates the random enemy
    function createEnemy () {
        console.log("{BEFORE} Player: ", PlayerObj);
        EnemyObj = new Gauntlet.GuildHall.Random(name, PlayerObj);
        console.log("{AFTER} Player: ", PlayerObj);
        EnemyObj.setClass("Random");
    }
 
    /*****************/
    /*** DOM STUFF ***/
    /*****************/

    // When any button with card__link class is clicked, move on to the next view.
    $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

        switch (nextCard) {
            case "card--class":
                moveAlong = ($("#player-name").val() !== "");
                break;
            case "card--weapon":
                moveAlong = ((playerClass) !== undefined);
                break;
            case "card--battleground":
                moveAlong = ((weaponChosen) !== undefined);
                break;
        }

        if (moveAlong) {
            $(".card").hide();
            $("." + nextCard).show();
        }
    });

    // When the back button clicked, move back a view
    $(".card__back").click(function(e) {
        var previousCard = $(this).attr("previous");
        $(".card").hide();
        $("." + previousCard).show();
    });

});
},{"./ChooseWeapon.js":2,"./CreatPlayer.js":3,"./classes.js":5}],5:[function(require,module,exports){
"use strict";

/*
  TODO: Modularize this code with IIFE or Browserify
 */

let Player = require("./player.js");
Player.Gauntlet.GuildHall = {};

let CreatePlayer = require("./CreatPlayer.js");
/*
  Base function for a player, or enemy, class (profession)
 */
Player.Gauntlet.GuildHall.PlayerClass = function() {
  this.name = 'beggar';
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  };
};

Player.Gauntlet.GuildHall.PlayerClass.prototype = new Player.Gauntlet.Combatants.Human();

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
Player.Gauntlet.GuildHall.Fighter = function() {
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = 10;
  this.intelligenceBonus = this.intelligenceBonus - 10;
};

Player.Gauntlet.GuildHall.Fighter.prototype = new Player.Gauntlet.GuildHall.PlayerClass();


        Player.Gauntlet.GuildHall.Warrior = function(name) {
          this.name = "Warrior";
          this.playerName = name;
          this.healthBonus = this.healthBonus + 25;
          this.strengthBonus = this.strengthBonus + 30;
        };
        Player.Gauntlet.GuildHall.Warrior.prototype = new Player.Gauntlet.GuildHall.Fighter();


        Player.Gauntlet.GuildHall.Valkyrie = function(name) {
          this.name = "Valkyrie";
          this.playerName = name;
          this.healthBonus = this.healthBonus + 20;
          this.strengthBonus = this.strengthBonus + 10;
        };
       Player.Gauntlet.GuildHall.Valkyrie.prototype = new Player.Gauntlet.GuildHall.Fighter();


        Player.Gauntlet.GuildHall.Berserker = function(name) {
          this.name = "Berserker";
          this.playerName = name;
          this.healthBonus = this.healthBonus + 35;
          this.strengthBonus = this.strengthBonus + 20;
        };
        Player.Gauntlet.GuildHall.Berserker.prototype = new Player.Gauntlet.GuildHall.Fighter();


        Player.Gauntlet.GuildHall.Monk = function(name) {
          this.name = "Monk";
          this.playerName = name;
          this.healthBonus = this.healthBonus + 10;
          this.strengthBonus = this.strengthBonus + 40;
        };
        Player.Gauntlet.GuildHall.Monk.prototype = new Player.Gauntlet.GuildHall.Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
Player.Gauntlet.GuildHall.Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Player.Gauntlet.GuildHall.Mage.prototype = new Player.Gauntlet.GuildHall.PlayerClass();


        Player.Gauntlet.GuildHall.Shaman = function(name) {
          this.name = "Shaman";
          this.playerName = name;
          this.healthBonus = this.healthBonus + 5;
          this.strengthBonus = this.strengthBonus - 10;
          this.intelligenceBonus = this.intelligenceBonus + 20;
        };
        Player.Gauntlet.GuildHall.Shaman.prototype = new Player.Gauntlet.GuildHall.Mage();


        Player.Gauntlet.GuildHall.Wizard = function(name) {
          this.name = "Wizard";
          this.playerName = name;
          this.healthBonus = this.healthBonus - 15;
          this.strengthBonus = this.strengthBonus - 25;
          this.intelligenceBonus = this.intelligenceBonus + 40;
        };
        Player.Gauntlet.GuildHall.Wizard.prototype = new Player.Gauntlet.GuildHall.Mage();


        Player.Gauntlet.GuildHall.Conjurer = function(name) {
          this.name = "Conjurer";
          this.playerName = name;
          this.strengthBonus = this.strengthBonus - 10;
          this.intelligenceBonus = this.intelligenceBonus + 10;
        };
        Player.Gauntlet.GuildHall.Conjurer.prototype = new Player.Gauntlet.GuildHall.Mage();


        Player.Gauntlet.GuildHall.Sorcerer = function(name) {
          this.name = "Sorcerer";
          this.playerName = name;
          this.healthBonus = this.healthBonus - 5;
          this.strengthBonus = this.strengthBonus - 20;
          this.intelligenceBonus = this.intelligenceBonus + 30;
        };
        Player.Gauntlet.GuildHall.Sorcerer.prototype = new Player.Gauntlet.GuildHall.Mage();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */

Player.Gauntlet.GuildHall.Stealth = function(){
    this.name = "Stealth";
    this.healthBonus = this.healthBonus + 20;
    this.strengthBonus = this.strengthBonus + 5;
    this.intelligenceBonus = this.intelligenceBonus + 10;
};
Player.Gauntlet.GuildHall.Stealth.prototype = new Player.Gauntlet.GuildHall.PlayerClass();


        Player.Gauntlet.GuildHall.Thief = function(name){
          this.name = "Thief";
          this.playerName = name;
          this.healthBonus = this.healthBonus - 5;
          this.intelligenceBonus = this.intelligenceBonus + 15;
        };
        Player.Gauntlet.GuildHall.Thief.prototype = new Player.Gauntlet.GuildHall.Stealth();


        Player.Gauntlet.GuildHall.Ninja = function(name){
          this.name = "Ninja";
          this.playerName = name;
          this.healthBonus = this.healthBonus + 5;
          this.strengthBonus = this.strengthBonus + 5;
        };
        Player.Gauntlet.GuildHall.Ninja.prototype = new Player.Gauntlet.GuildHall.Stealth();


        Player.Gauntlet.GuildHall.Assassin = function(name){
          this.name = "Assassin";
          this.playerName = name;
          this.healthBonus = this.healthBonus - 5;
          this.strengthBonus = this.strengthBonus + 10;
          this.intelligenceBonus = this.intelligenceBonus + 5;
        };
        Player.Gauntlet.GuildHall.Assassin.prototype = new Player.Gauntlet.GuildHall.Stealth();



////////////////// Other Methods //////////////////////////



  Player.Gauntlet.GuildHall.Random = function(playerObj) {


    var randomSkin;

    this.species = "Human";
    this.intelligence = this.intelligence + 20;

    this.skinColors.push("brown", "red", "white", "disease");
    randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
    this.skinColor = this.skinColors[randomSkin];

    var randomClasses= ["Warrior", "Valkyrie", "Berserker", "Monk", "Wizard", "Sorcerer", "Conjurer", "Shaman", "Thief", "Ninja", "Assassin" ];
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (randomClasses.length - 1));
    // Get the string at the index
    var randomClass = randomClasses[random];
    var randomPlayer = CreatePlayer.createPlayer(randomClass, playerObj);
    return randomPlayer;

  };
  Player.Gauntlet.GuildHall.Random.prototype = new Player.Gauntlet.GuildHall.PlayerClass();


module.exports = {Player, CreatePlayer};
},{"./CreatPlayer.js":3,"./player.js":6}],6:[function(require,module,exports){
"use strict";

/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.Combatants = {};

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
Gauntlet.Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;

  // name 

  // Link the name entered in
  this.playerName = $("#player-name").val() || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;

  this.toString = function() {
    var output = [this.playerName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      (this.class.magical) ? "Able to cast " : " Wielding a ",
      // toString() goes here at the end
      this.weapon,
      "!"
    ].join("");
    return output;
  };
};

Gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
};


Gauntlet.Combatants.Player.prototype.setClass = function(className){

    this.class = className;
    // console.log("Health before",  this.health);
    // this.health += this.class.healthBonus;
    // console.log("Health after",  this.health);

    // return this.class;
};



// Attach to surprise me button 
Gauntlet.Combatants.Player.prototype.generateClass = function() {

  
};

/*
  Define the base properties for a human in a 
  constructor function.
 */
Gauntlet.Combatants.Human = function() {
  var randomSkin;

  this.species = "Human";
  this.intelligence = this.intelligence + 20;

  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
};
Gauntlet.Combatants.Human.prototype = new Gauntlet.Combatants.Player();


/*
  Define the base properties for a monster in a 
  constructor function.
 */
Gauntlet.Combatants.Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};

Gauntlet.Combatants.Monster.prototype = new Gauntlet.Combatants.Player();

module.exports = {Gauntlet};
},{}],7:[function(require,module,exports){
"use strict";

/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.SpellBook = {};


/*
  Base spell function that defines name, damage, damage type
 */
Gauntlet.SpellBook.Spell = function() {
  this.name = "";
  this.damage = 0;

  this.damageTypes = ["lightning", "fire", "water", "earth", "mysticism"];
  this.type = "";

  this.toString = function() {
    return this.name + " of " + this.type + " for " + this.damage + " damage!";
  };
};

/*
  An elemental sphere that can be cast by a magical class
 */
Gauntlet.SpellBook.Sphere = function() {
  this.name = "sphere";
  this.damage = Math.floor(Math.random() * 10 + 10);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
Gauntlet.SpellBook.Sphere.prototype = new Gauntlet.SpellBook.Spell();

},{}],8:[function(require,module,exports){
"use strict";

var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  };
};

var Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Dagger.prototype = new Weapon();

var BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
BroadSword.prototype = new Weapon();

var WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
WarAxe.prototype = new Weapon();

var Mace = function() {
  this.name = "mace";
  this.damage = 12;
  this.hands = 2;
};
Mace.prototype = new Weapon();

var Spear = function() {
  this.name = "spear";
  this.damage = 10;
  this.hands = 2;
};
Spear.prototype = new Weapon();

var WarHammer = function() {
  this.name = "war hammer";
  this.damage = 20;
  this.hands = 2;
};
WarHammer.prototype = new Weapon();

var Club = function() {
  this.name = "club";
  this.damage = 4;
  this.hands = 1;
};
Club.prototype = new Weapon();

var LongSword = function() {
  this.name = "long sword";
  this.damage = 14;
  this.hands = 1;
};
LongSword.prototype = new Weapon();

module.exports = {LongSword, Club, WarHammer, Spear, Mace, WarAxe, BroadSword, Dagger, Weapon};
},{}]},{},[1,2,3,4,5,6,7,8]);
