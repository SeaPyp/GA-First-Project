
var warrior = {
  name : 'Barry',
  maxHealth : 200,
  attack : 15,
  dexterity : 10,
  experience : 0,
};

var dwarf = {
  name : 'Bondalin',
  maxHealth : 250,
  attack : 20,
  dexterity : 5,
  experience : 0
};

var rogue = {
  name : 'Silfer',
  maxHealth : 150,
  attack : 10,
  dexterity : 15,
  experience : 0, 
};


// Monsters
var imp = {
  name : 'Barnabus',
  maxHealth : 40,
  attack : 8,
  dexterity : 1,
  experience : 10,
};

var pitfiend = {
  name : 'Vox',
  maxHealth : 60,
  attack : 12,
  dexterity : 5,
  experience : 40,
};

var demon = {
  name : 'Balthazar',
  maxHealth : 80,
  attack : 18,
  dexterity : 9,
  experience : 65,
};

var bossMonster ={
  name : 'Beelzebub',
  maxHealth : 1000,
  attack : 20,
  dexterity : 10
};

// that has been created above) with the "mainChar" in my canvas.

// Arrays of monsters (level dependent)

var rand =[imp, pitfiend];
var rand1 = [imp1, pitfiend1, demon];


var rand = monsterArray[Math.floor(Math.random() * myArray.length)];
var rand1 = monsterArray[Math


// var Character = function() {
//   this.maxHealth = 200;
//   this.health = this.maxHealth;
//   this.strength = 10;
//   this.dexterity = 10;
//   this.wisdom = 10;
// };

// var Warrior = function(name) {
//   Character.call(this);
//   this.name = name;
//   this.maxHealth = 210;
//   this.health = this.maxHealth;
//   this.strength = 12;
//   this.dexterity = 12;
// };

// var warrior = new Warrior('George');

// var Dwarf = function(name) {
//   Character.call(this);
//   this.name = name;
//   this.maxHealth = 250;
//   this.health = this.maxHealth;
//   this.strength = 20;
// };

// var dwarf = new Dwarf('Bob');

// var Rogue = function(name) {
//   Character.call(this);
//   this.name = name;
//   this.strength = 9;
//   this.health = this.maxHealth;
//   this.dexterity = 20;
// };

// var rogue = new Rogue('Herbert');

// // Monster Creation *********************************************************

// var Imp = function(name) {
//   Character.call(this);
//   this.name = name;
//   this.maxHealth = 50;
//   this.health = this.maxHealth;
//   this.strength = 5;
//   this.dexterity = 2;
//   this.wisdom = 0;  
// };

// var imp = new Imp('Barnabus');