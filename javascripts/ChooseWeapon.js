"use strict";

  let Weapons = require("./weapons.js");

  function chooseWeapon(weaponChosen, PlayerObj) {

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
      case "WarHammer":
        console.log(" switch War Hammer");
        PlayerObj.setWeapon(new Weapons.WarHammer());
        console.log("object after WarHammer", PlayerObj);
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
    return PlayerObj;
  }

module.exports = {chooseWeapon};
