"use strict";


var name;
var playerClass;
// Player Object being built
var EnemyObj;
var PlayerObj;
var weaponChosen;

// /*
//   Test code to generate a human player and an orc player
//  */
// var warrior = new Gauntlet.Combatants.Human();
// // warrior.setWeapon(new WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
// orc.setWeapon(new BroadSword());
console.log(orc.toString());

/*
  Test code to generate a spell
 */
// var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());


$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
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




  $("#selectClass").click(function(event) {
    /* Act on the event */
    name = $("#player-name").val();
    console.log("Hello you friggin' ", name);
    // playerWarrior = new Gauntlet.Combatants.Human(name);
    // playerWarrior.generateClass();
    // console.log(playerWarrior.toString());
    // console.log(playerWarrior);
  });

      // console logs the chosen class
    $(".classButton").click(function(event){
      console.log("playerClass", playerClass);
      playerClass = event.target.textContent;
      console.log("You added the " + playerClass + " class.");
    });

    $(".surpriseButton").click(function(event) {
      playerClass = event.target.textContent;
      console.log(event.target.textContent);
      console.log("Are you crazy? Yes. Yes you are.");
    });

    $(".weaponButton").click(function(event){
      weaponChosen = event.target.textContent;
      console.log("You added the " + weaponChosen + " weapon.");
    });

    // Surprise me button
    // name = "Surprise";


  $("#selectWeapon").click(function(event) {
    /* Act on the event */


    var player = createPlayer(playerClass);




  });


  $("#battleButton").click(function(event) {


    var weaponOfChoice = chooseWeapon(weaponChosen);


    // Enemy
    createEnemy();
    EnemyObj.weapon = "Flamethrower";
    console.log("ENEMY: " ,EnemyObj);

  });



  function createPlayer(playerClass) {

    

      

    // Switch statement that will assign the class to the user
    switch(playerClass){
      case "Warrior":

        PlayerObj = new Gauntlet.GuildHall.Warrior(name);
        PlayerObj.setClass("Warrior");
        
        break;
      case "Wizard":

        PlayerObj = new Gauntlet.GuildHall.Wizard(name);
        PlayerObj.setClass("Wizard");
        
        break;
      case "Thief":

        PlayerObj = new Gauntlet.GuildHall.Thief(name);
        PlayerObj.setClass("Thief");
        
        break;
      case "Valkyrie":

        PlayerObj = new Gauntlet.GuildHall.Valkyrie(name);
        PlayerObj.setClass("Valkyrie");
        break;
      case "Sorcerer":

        PlayerObj = new Gauntlet.GuildHall.Sorcerer(name);
        PlayerObj.setClass("Sorcerer");
        
        break;
      case "Ninja":
        
        PlayerObj = new Gauntlet.GuildHall.Ninja(name);
        PlayerObj.setClass("Ninja");
        
        break;
      case "Berserker":
        
        PlayerObj = new Gauntlet.GuildHall.Berserker(name);
        PlayerObj.setClass("Berserker");
        
        break;
      case "Conjurer":
        
        PlayerObj = new Gauntlet.GuildHall.Conjurer(name);
        PlayerObj.setClass("Conjurer");
        
        break;
      case "Assassin":
        
        PlayerObj = new Gauntlet.GuildHall.Assassin(name);
        PlayerObj.setClass("Assassin");
        
        break;
      case "Monk":
        
        PlayerObj = new Gauntlet.GuildHall.Monk(name);
        PlayerObj.setClass("Monk");
        
        break;
      case "Shaman":
        
        PlayerObj = new Gauntlet.GuildHall.Shaman(name);
        PlayerObj.setClass("Shaman");
        
        break;
      case "surprise me":

        PlayerObj = new Gauntlet.GuildHall.Random(name);
        PlayerObj.setClass("Random")
        console.log("switch surprise");
        break;

    }

    return PlayerObj;

  }


  function chooseWeapon() {

    // Switch statement that will assign the weapon to the user
    switch(weaponChosen){
      case "Dagger":
        console.log(" switch Dagger");
        PlayerObj.setWeapon(new Dagger());
        console.log("object after dagger", PlayerObj);
        break;
      case "Broad Sword":
        console.log(" switch Broad Sword");
        PlayerObj.setWeapon(new BroadSword());
        console.log("object after Broad Sword", PlayerObj);
        break;
      case "War Axe":
        console.log(" switch War Axe");
        PlayerObj.setWeapon(new WarAxe());
        console.log("object after WarAxe", PlayerObj);
        break;
      case "Mace":
        console.log(" switch Mace");
        PlayerObj.setWeapon(new Mace());
        console.log("object after Mace", PlayerObj);
        break;
      case "Spear":
        console.log(" switch Spear");
        PlayerObj.setWeapon(new Spear());
        console.log("object after Spear", PlayerObj);
        break;
      case "Warhammer":
        console.log(" switch Warhammer");
        PlayerObj.setWeapon(new Warhammer());
        console.log("object after Warhammer", PlayerObj);
        break;
      case "Club":
        console.log(" switch Club");
        PlayerObj.setWeapon(new Club());
        console.log("object after Club", PlayerObj);
        break;
      case "LongSword":
        console.log(" switch LongSword");
        PlayerObj.setWeapon(new LongSword());
        console.log("object after LongSword", PlayerObj);
        break;
    }
  }


  function createEnemy () {

    EnemyObj = new Gauntlet.GuildHall.Random(name);
    EnemyObj.setClass("Random");
  }
 







  // Test surprise function

  Gauntlet.GuildHall.Random = function() {


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


    var randomPlayer = createPlayer(randomClass);
    // Composes the corresponding player class into the player object
    // this.class = new Gauntlet.GuildHall[randomClass]();

    // Add the health bonus
    // this.health += this.class.healthBonus;
    // return this.class;
    return randomPlayer;

  };
  Gauntlet.GuildHall.Random.prototype = new Gauntlet.GuildHall.PlayerClass();




  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});