"use strict";


var name;
var playerClass;
// Player Object being built
var PlayerObj;
var weaponChosen;

// /*
//   Test code to generate a human player and an orc player
//  */
var warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new WarAxe());
warrior.generateClass();  // This will be used for "Surprise me" option
console.log(warrior.toString());

// var orc = new Gauntlet.Combatants.Orc();
// orc.generateClass();
// // orc.setWeapon(new BroadSword());
// console.log(orc.toString());

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
        moveAlong = ($("#player-name").val() !== "");
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
      playerClass = event.target.textContent;
      console.log("You added the " + playerClass + " class.");
    });

    $(".weaponButton").click(function(event){
      weaponChosen = event.target.textContent;
      console.log("You added the " + weaponChosen + " weapon.");
    });

    // Surprise me button
    // name = "Surprise";


  $("#selectWeapon").click(function(event) {
    /* Act on the event */


    // Switch statement that will assign the class to the user
    switch(playerClass){
      case "Warrior":

        PlayerObj = new Gauntlet.GuildHall.Warrior(name);
        PlayerObj.setClass("Warrior");
        console.log(PlayerObj.health);
        break;
      case "Wizard":

        PlayerObj = new Gauntlet.GuildHall.Wizard(name);
        PlayerObj.setClass("Wizard");
        console.log(PlayerObj);
        break;
      case "Thief":

        PlayerObj = new Gauntlet.GuildHall.Thief(name);
        PlayerObj.setClass("Thief");
        console.log(PlayerObj);
        break;
      case "Valkyrie":

        PlayerObj = new Gauntlet.GuildHall.Valkyrie(name);
        PlayerObj.setClass("Valkyrie");
        console.log(PlayerObj);
        break;
      case "Sorcerer":

        PlayerObj = new Gauntlet.GuildHall.Sorcerer(name);
        PlayerObj.setClass("Sorcerer");
        console.log(PlayerObj);
        break;
      case "Ninja":
        
        PlayerObj = new Gauntlet.GuildHall.Ninja(name);
        PlayerObj.setClass("Ninja");
        console.log(PlayerObj);
        break;
      case "Berserker":
        
        PlayerObj = new Gauntlet.GuildHall.Berserker(name);
        PlayerObj.setClass("Berserker");
        console.log(PlayerObj);
        break;
      case "Conjurer":
        
        PlayerObj = new Gauntlet.GuildHall.Conjurer(name);
        PlayerObj.setClass("Conjurer");
        console.log(PlayerObj);
        break;
      case "Assassin":
        
        PlayerObj = new Gauntlet.GuildHall.Assassin(name);
        PlayerObj.setClass("Assassin");
        console.log(PlayerObj);
        break;
      case "Monk":
        
        PlayerObj = new Gauntlet.GuildHall.Monk(name);
        PlayerObj.setClass("Monk");
        console.log(PlayerObj);
        break;
      case "Shaman":
        
        PlayerObj = new Gauntlet.GuildHall.Shaman(name);
        PlayerObj.setClass("Shaman");
        console.log(PlayerObj);
        break;
      case "Surprise":
        console.log(" switch Surprise");
        break;
    }


    // var playerWarrior = new Gauntlet.Combatants.Human(name);
    // playerWarrior.generateClass();
    // console.log(playerWarrior.toString());
    // console.log(playerWarrior);
  });


  $("#battleButton").click(function(event) {


    // Switch statement that will assign the weapon to the user
    switch(weaponChosen){
      case "Dagger":
        console.log(" switch Dagger");
        break;
      case "Broad Sword":
        console.log(" switch Broad Sword");
        break;
      case "War Axe":
        console.log(" switch War Axe");
        break;
      case "Mace":
        console.log(" switch Mace");
        break;
      case "Spear":
        console.log(" switch Spear");
        break;
      case "Warhammer":
        console.log(" switch Warhammer");
        break;
      case "Club":
        console.log(" switch Club");
        break;
      case "LongSword":
        console.log(" switch LongSword");
        break;
    }

  });



  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});