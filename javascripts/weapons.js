"use strict";

var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  };
};

var Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Dagger.prototype = new Weapon();

var BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
BroadSword.prototype = new Weapon();

var WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
WarAxe.prototype = new Weapon();

var Mace = function() {
  this.name = "mace";
  this.damage = 12;
  this.hands = 2;
};
Mace.prototype = new Weapon();

var Spear = function() {
  this.name = "spear";
  this.damage = 10;
  this.hands = 2;
};
Spear.prototype = new Weapon();

var WarHammer = function() {
  this.name = "war hammer";
  this.damage = 20;
  this.hands = 2;
};
WarHammer.prototype = new Weapon();

var Club = function() {
  this.name = "club";
  this.damage = 4;
  this.hands = 1;
};
Club.prototype = new Weapon();

var LongSword = function() {
  this.name = "long sword";
  this.damage = 14;
  this.hands = 1;
};
LongSword.prototype = new Weapon();

module.exports = {LongSword, Club, WarHammer, Spear, Mace, WarAxe, BroadSword, Dagger, Weapon};