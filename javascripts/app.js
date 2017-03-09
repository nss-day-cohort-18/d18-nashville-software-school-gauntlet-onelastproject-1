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