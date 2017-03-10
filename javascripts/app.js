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
        PlayerObj = CreatePlayer.createPlayer(playerClass, PlayerObj, name);
    });

    // When user chooses weapon
    $("#battleButton").click(function(event) {
        // style="width:0%"
        // Create Enemy
        PlayerObj = Weapons.chooseWeapon(weaponChosen, PlayerObj);
        EnemyObj = createEnemy();
        Battle.printToDom(PlayerObj, EnemyObj);
        $("#player2-progress").css("width", '100%');
        $("#player1-progress").css("width", '100%');        
        console.log("FINAL ENEMY: ", EnemyObj);
    });

// Attack Button
    $("#attackButton").click(function(event) {        

        console.log("----------- Enemy Health: ", EnemyObj.health);
        console.log("----------- Player Health: ", PlayerObj.health);
        console.log("----------- Enemy Strength: ", EnemyObj.strength);
        console.log("----------- Player Strength: ", PlayerObj.strength);
        if(Battle.attack(PlayerObj, EnemyObj)){
            console.log("1st True"); 
            Battle.printToDom(PlayerObj, EnemyObj);
        }
        if(Battle.attack(EnemyObj, PlayerObj)){
            console.log("2nd True");
            Battle.printToDom(PlayerObj, EnemyObj);
        }else{
            Battle.printToDom(PlayerObj, EnemyObj);
            console.log("GAME 2 ELSE");
        }
    });

    // Creates the random enemy
    function createEnemy () {
        let tempHealth = (Math.floor(Math.random() * 175) + 100).toFixed(0);
        EnemyObj = {
            name: "Enemy",
            playerName: "Adam",
            health: tempHealth,
            initialHealth: tempHealth,
            strength: (Math.floor(Math.random() * 50) + 1.8).toFixed(0),
            intelligence: (Math.floor(Math.random() * 5) + 1).toFixed(0),
        };
        var FingersOfFury = {
            name: "Fingers of Fury",
            hands: 2,
            damage: (Math.floor(Math.random() * 50) + 1)
        };
        EnemyObj.weapon = FingersOfFury;
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