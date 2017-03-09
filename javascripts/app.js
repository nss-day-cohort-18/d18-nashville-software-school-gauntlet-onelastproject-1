"use strict";


var name;
var playerClass;
var EnemyObj = {};
var PlayerObj;
var weaponChosen;

let Gauntlet = require("./classes.js");
let CreatePlayer = require("./CreatPlayer.js");
let Weapons = require("./ChooseWeapon.js");
let Battle = require("./Battle.js");


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
        // HEAD
        // var weaponOfChoice = Weapons.chooseWeapon(weaponChosen, PlayerObj);
        // END HEAD
        console.log("Gauntlet: ", Gauntlet);
        PlayerObj = Weapons.chooseWeapon(weaponChosen, PlayerObj);
        Battle.printToDom(PlayerObj);



        // Enemy
        var myEnemy = createEnemy();


        console.log("FINAL ENEMY: ", myEnemy);

    });

// Attack Button
    $("#attackButton").click(function(event) {        

        console.log("[BEFORE] Player 1 Damage: ", PlayerObj.strength);


    });

    // Creates the random enemy
    function createEnemy () {

        EnemyObj = {
            name: "Enemy",
            healthBonus: (Math.floor(Math.random() * 49) + 1.5).toFixed(0),
            strengthBonus: (Math.floor(Math.random() * 50) + 1.8).toFixed(0),
            intelligenceBonus: (Math.floor(Math.random() * 51) + 1.1).toFixed(0),
        };
        
        var Flamethrower = {
            name: "Flamethrower",
            hands: 2,
            damage: (Math.floor(Math.random() * 50) + 1)
        };
        EnemyObj.Weapon = Flamethrower;
        return EnemyObj;
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