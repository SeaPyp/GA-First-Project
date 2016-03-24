var Character = function() {
  this.maxHealth = 200;
  this.health = this.maxHealth;
  this.strength = 10;
  this.dexterity = 10;
  this.wisdom = 10;
};

var Warrior = function(name) {
  Character.call(this);
  this.name = name;
  this.maxHealth = 210;
  this.health = this.maxHealth;
  this.strength = 12;
  this.dexterity = 12;
};

Warrior.prototype = Object.create(Character.prototype);
Warrior.prototype.constructor = Warrior;

var warrior = new Warrior('George');

var Dwarf = function(name) {
  Character.call(this);
  this.name = name;
  this.maxHealth = 250;
  this.health = this.maxHealth;
  this.strength = 20;
};

Dwarf.prototype = Object.create(Character.prototype);
Dwarf.prototype.constructor = Dwarf;

var dwarf = new Dwarf('Bob');

var Rogue = function(name) {
  Character.call(this);
  this.name = name;
  this.strength = 9;
  this.health = this.maxHealth;
  this.dexterity = 20;
};

Rogue.prototype = Object.create(Character.prototype);
Rogue.prototype.constructor = Rogue;

var rogue = new Rogue('Herbert');

// Monster Creation *********************************************************

var Imp = function(name) {
  Character.call(this);
  this.name = name;
  this.maxHealth = 50;
  this.health = this.maxHealth;
  this.strength = 5;
  this.dexterity = 2;
  this.wisdom = 0;  
};

Imp.prototype = Object.create(Character.prototype);
Imp.prototype.constructor = Imp;

var imp = new Imp('Barnabus');