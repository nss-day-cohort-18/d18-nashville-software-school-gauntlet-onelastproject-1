"use strict";

/*
  TODO: Modularize this code with IIFE or Browserify
 */

let Player = require("./player.js");
Player.Gauntlet.GuildHall = {};

let CreatePlayer = require("./CreatPlayer.js");
console.log("CreatePlayer at the top of classes: ", CreatePlayer);
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



  Player.Gauntlet.GuildHall.Random = function(name) {
    console.log("name at random: ", name);
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
    this.name = randomClass;
    this.playerName = name;

  };
  Player.Gauntlet.GuildHall.Random.prototype = new Player.Gauntlet.GuildHall.PlayerClass();


module.exports = {Player, CreatePlayer};