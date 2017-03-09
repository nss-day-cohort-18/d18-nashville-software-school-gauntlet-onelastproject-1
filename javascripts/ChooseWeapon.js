"use strict";

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