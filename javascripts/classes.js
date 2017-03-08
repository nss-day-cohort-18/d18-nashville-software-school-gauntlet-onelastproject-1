"use strict";

/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.GuildHall = {};

/*
  Base function for a player, or enemy, class (profession)
 */
Gauntlet.GuildHall.PlayerClass = function() {
  this.name = 'beggar';
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  };
};

Gauntlet.GuildHall.PlayerClass.prototype = new Gauntlet.Combatants.Human();

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
Gauntlet.GuildHall.Fighter = function() {
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = 10;
  this.intelligenceBonus = this.intelligenceBonus - 10;
};

Gauntlet.GuildHall.Fighter.prototype = new Gauntlet.GuildHall.PlayerClass();


        Gauntlet.GuildHall.Warrior = function(name) {
          this.name = "Warrior";
          this.playerName = name;
          this.healthBonus = this.healthBonus + 25;
          this.strengthBonus = this.strengthBonus + 30;
        };
        Gauntlet.GuildHall.Warrior.prototype = new Gauntlet.GuildHall.Fighter();


        Gauntlet.GuildHall.Valkyrie = function(name) {
          this.name = "Valkyrie";
          this.playerName = name;
          this.healthBonus = this.healthBonus + 20;
          this.strengthBonus = this.strengthBonus + 10;
        };
        Gauntlet.GuildHall.Valkyrie.prototype = new Gauntlet.GuildHall.Fighter();


        Gauntlet.GuildHall.Berserker = function(name) {
          this.name = "Berserker";
          this.playerName = name;
          this.healthBonus = this.healthBonus + 35;
          this.strengthBonus = this.strengthBonus + 20;
        };
        Gauntlet.GuildHall.Berserker.prototype = new Gauntlet.GuildHall.Fighter();


        Gauntlet.GuildHall.Monk = function(name) {
          this.name = "Monk";
          this.playerName = name;
          this.healthBonus = this.healthBonus + 10;
          this.strengthBonus = this.strengthBonus + 40;
        };
        Gauntlet.GuildHall.Monk.prototype = new Gauntlet.GuildHall.Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
Gauntlet.GuildHall.Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Gauntlet.GuildHall.Mage.prototype = new Gauntlet.GuildHall.PlayerClass();


        Gauntlet.GuildHall.Shaman = function(name) {
          this.name = "Shaman";
          this.playerName = name;
          this.healthBonus = this.healthBonus + 5;
          this.strengthBonus = this.strengthBonus - 10;
          this.intelligenceBonus = this.intelligenceBonus + 20;
        };
        Gauntlet.GuildHall.Shaman.prototype = new Gauntlet.GuildHall.Mage();


        Gauntlet.GuildHall.Wizard = function(name) {
          this.name = "Wizard";
          this.playerName = name;
          this.healthBonus = this.healthBonus - 15;
          this.strengthBonus = this.strengthBonus - 25;
          this.intelligenceBonus = this.intelligenceBonus + 40;
        };
        Gauntlet.GuildHall.Wizard.prototype = new Gauntlet.GuildHall.Mage();


        Gauntlet.GuildHall.Conjurer = function(name) {
          this.name = "Conjurer";
          this.playerName = name;
          this.strengthBonus = this.strengthBonus - 10;
          this.intelligenceBonus = this.intelligenceBonus + 10;
        };
        Gauntlet.GuildHall.Conjurer.prototype = new Gauntlet.GuildHall.Mage();


        Gauntlet.GuildHall.Sorcerer = function(name) {
          this.name = "Sorcerer";
          this.playerName = name;
          this.healthBonus = this.healthBonus - 5;
          this.strengthBonus = this.strengthBonus - 20;
          this.intelligenceBonus = this.intelligenceBonus + 30;
        };
        Gauntlet.GuildHall.Sorcerer.prototype = new Gauntlet.GuildHall.Mage();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */

Gauntlet.GuildHall.Stealth = function(){
    this.name = "Stealth";
    this.healthBonus = this.healthBonus + 20;
    this.strengthBonus = this.strengthBonus + 5;
    this.intelligenceBonus = this.intelligenceBonus + 10;
};
Gauntlet.GuildHall.Stealth.prototype = new Gauntlet.GuildHall.PlayerClass();


        Gauntlet.GuildHall.Thief = function(name){
          this.name = "Thief";
          this.playerName = name;
          this.healthBonus = this.healthBonus - 5;
          this.intelligenceBonus = this.intelligenceBonus + 15;
        };
        Gauntlet.GuildHall.Thief.prototype = new Gauntlet.GuildHall.Stealth();


        Gauntlet.GuildHall.Ninja = function(name){
          this.name = "Ninja";
          this.playerName = name;
          this.healthBonus = this.healthBonus + 5;
          this.strengthBonus = this.strengthBonus + 5;
        };
        Gauntlet.GuildHall.Ninja.prototype = new Gauntlet.GuildHall.Stealth();


        Gauntlet.GuildHall.Assassin = function(name){
          this.name = "Assassin";
          this.playerName = name;
          this.healthBonus = this.healthBonus - 5;
          this.strengthBonus = this.strengthBonus + 10;
          this.intelligenceBonus = this.intelligenceBonus + 5;
        };
        Gauntlet.GuildHall.Assassin.prototype = new Gauntlet.GuildHall.Stealth();

