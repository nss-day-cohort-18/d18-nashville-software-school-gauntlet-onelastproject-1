"use strict";

let Classes = require("./classes.js");
Classes.Gauntlet = {};

  function createPlayer(playerClass, PlayerObj, name) {
    console.log("called createPlayer with this name: ", name);
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