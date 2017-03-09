"use strict";


  function createPlayer(playerClass) {

    
  	var playerObj = {};
      

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