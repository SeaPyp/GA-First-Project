console.log('Hey');

//  Screen 1: home page with the title on it.  Needs to have a some sort of picture, and a "click to start" button.

//  Screen 2: screen will be an introduction to the story, and how we ended up needing a noble hero.
//  It will be a window on a black BG.  The window will be slightly transparent.
//  Page will have a skip button and next button (if story needs to progress to another page)

//  Screen 3: Class selection screen.  Select your class from 3 - Warrior, Dwarf and Mage.  Need to create the
//  following here:
//  Constructors for each class
//  Description of each class, along with strengths and weaknesses - numerical value, out of 100
//  Ability to name your Hero
//  Begin quest button
//  Will be a nearly full screen window on a black BG.  Semi transparent again.

//**************************
//     Screen Transitions
// ***************************

$(document).ready(function(){
  $('#startText').click(function() {
    $('.homePage').hide();
    $('.charSelect').show();
  });

  $('#btnSelect').click(function() {
    // $('playerImage').append('warriorSelect');
    // $(transferSelection).append('mainChar');
    // console.log(transferSelection);
    $('.charSelect').hide();
    $('.storyPage').show();
    console.log('Clicked');
  });

  $('#storyContinue').click(function() {
    $('.textContainer').hide();
    $('#storyContinue').hide();
    $('#tutText').show();
    $('.tutPage').show();
    $('#begin').show();
  });


  $('#begin').click(function() {
    $('.tutPage').hide();
    $('#begin').hide();
    $('#tutText').hide();
    $('.storyPage').hide();
    // $('.battleScreen').hide();
    $('.battleScreen').show();
  });


// Function for highlighting only one div
  $('.character').click(function(){
    $('.character').removeClass('active');
    $(this).addClass('active');

  });




  var warriorSelect = $('#warriorDiv').data(warrior);
  $('#rogueDiv').data(rogue);
  $('#dwarfDiv').data(dwarf);



    // $(this).attr('id');
    // console.log($(this).attr('id'));

// Movement********************************************************

 // This is the movement commands for JCanvas
  // $('body').on('keypress', function(event){
  //   switch(event.which){
  //     case 119 :
  //       console.log('W');
  //       break;
  //     case 97 :
  //       console.log('A');
  //       moveLeft();
  //       break;
  //     case 115 :
  //       console.log('S');
  //       break;
  //     case 100 :
  //       console.log('D');
  //       moveRight();
  //       break;
  //     default :
  //       break;
  //   }

  // });
  // var moveLeft = function(){
  //   $('canvas').setLayer('mainChar', {
  //     rotate:-45
  //   }).drawLayers();
  // };

  // var moveRight = function(){
  //   $('canvas').setLayer('mainChar', {
  //     rotate:45
  //   }).drawLayers();
  // };



// This is where the character needs to be assigned to the canvas element

//  Screen 4: Another story screen.  Where and what the Hero needs to accomplish to finish level.
//  Skip button and begin button
//  Window on black BG, semi transparent

//  Screen 5: Tutorial Screen.  Will be a semi-trasprent window on the main play screen.  The tut will be a brief
//  explanation of what the keys are, and how to move and attack.  It will be a diagram



  // var drawing = function(){
  //   $('canvas').drawPolygon({
  //     layer: true,
  //     name: 'mainChar',
  //     strokeStyle: 'white',
  //     strokeWidth: 4,
  //     fillStyle: 'white',
  //     x: 550, y: 570,
  //     radius: 100,
  //     sides: 3
  //   });
  // };

  // $('fight').click(function(){
  //   impAtk();
  // });


// This atk function needs to be simplified.  creating key value pairs that subbed in.



// Combat ********************************************************************

//Puts a random Monster infront of you, depending on level

// Random Monster generation function (level dependent)
//   var monsterGenerator = function(){
//     if (playerLevel >= 1);
//     then

// }

// var rand = monsterArray[Math.floor(Math.random() * myArray.length)];
// var rand1 = monsterArray[Math.floor(Math.random() * myArray.length)];


// This is the function if I want a random monster generated, but not the same one twice.
// Array.prototype.generateMonster = function(last) {
//    if (this.length === 0) {
//       return;
//    } else if (this.length == 1) {
//       return this[0];
//    } else {
//       var num = 0;
//       do {
//          num = Math.floor(Math.random() * this.length);
//       } while (this[num] == last);
//       return this[num];
//    }
// };

// To call the function that I created above.
// var generateMonster = monsterArray.randomDiffElement(lastRandomElement);


//
//   (function loop() {
//       var rand = Math.round(Math.random(500));
//       enemyDead = setTimeout(function() {
//               generateEnemy();
//               // loop();
//       }, rand);
//   }());
// });

  $('canvas').on('click', function(){
  var warriorAtk = imp.maxHealth=imp.maxHealth - warrior.attack;
      if (imp.maxHealth <= 0){
        alert('You killed the Imp, well done!');
        return;
        }else if (imp.maxHealth > 0){
        alert('WARRIOR ATTACK\nImp health is now: '+ imp.maxHealth);}
    var impAtk = warrior.maxHealth=warrior.maxHealth - imp.attack;
          if (warrior.maxHealth <= 0){
            alert('You died!  You are Useless!');
            clearInterval(enemyDead);
            return;
          }else if (warrior.maxHealth > 0){
          alert('IMP ATTACK\nWarrior health is now: ' + warrior.maxHealth);
          }
  });
}); // Closes Doc.ready


// Inventory ********************************************************************
//  The variable for when an item is received
//  var newItemWeapon
//  var inventory = function({
//    $('#keep').click(function(){
//    inventory.push(newItemWeapon)};
//    $('#discard').click(function(){
//     discardInventory.push(newItemWeapon);
//   });
// }
//

$('#begin').click(function() {
    $('.tutPage').hide();


// This also needs to be simplified, so that the levels can be added ontop of one another
  // var warriorExpUp = function(){
  //   if(warrior.experience >= 200){
  //     warrior.maxHealth=220;
  //     warrior.attack=25;
  //     warrior.dexterity=11;
  //     warrior.experience=200; // this needs to equal the value attained
  //   }
  // };

  // var rogueExpUp = function(){
  //   if(rogue.experience >= 200){
  //     rogue.maxHealth=170;
  //     rogue.attack=15;
  //     rogue.dexterity=16;
  //     rogue.experience=200;
  //   }
  // };

  // var dwarfExpUp = function(){
  //   if(dwarf.experience >= 200){
  //     dwarf.maxHealth=280;
  //     dwarf.attack=31;
  //     dwarf.dexterity=12;
  //     dwarf.experience=200;
  //   }
  // };

  // var monsterArray = [imp, pitfiend, demon];

// Adding in Dexterity as a modifier for missing and critHit

  // var dexterityFactor = function(){
  //   if(player.dexterity > monster.dexterity);
  //     critHit*3;
  //   }else if{
  //     (player.dexterity <= monster.dexterity);
  //     missChance*3;
  //   });

//  Screen 6:  The play screen.  Probably get a game library to create this, depending on time.  There are 2 options:
//  Pokemon scrolling style or behind the hero camera style.  Screen will have health and experience bar.  Magic/Mana
//  bar if Ihave time to create those mechanics.

//  Game mechanics.  Hero will travel along and have random encounters with monsters.  This will lead to battles and
//	experience gain.  If the hero loses, game restart ensues.  Monsters will carry items that will automatically get
//  added to the heros inventory.  What I need to create:
//	Fight mechanic - turn based, using D&D dice rolling logic, including weapon and armour buffers
//  Monsters - Constructors that generate randomly, depending on characters level.  Their inventory will also be
//	goverened by their level (in terms of what they are carrying.)  Monster class and therefore inventory will be
//  arrays where the items are inserted (if else statements) that will then append to the hero class.
//	Experience upgrade - Constructor product gets a percentage increase defined by its class.  ie, some attributes
//  will increase better than others, dependent on the selected class.
//	Inventory - Items get appended to the Hero class

//	Screen 7: Battle Screen.  Will be turn based where player clicks button, gets result, and then monster attacks
//  and result is displyed.  Health bar decreases accordingly

//	Screen 8: Monster defeat screen.  Semi-transparent window with main play screen in the BG.  Window lists how
//  much experience was gained, as-well-as inventory items (if any) were gained.  Programming needed:
//	Accept button
//	If inventory is full - Mew window pops up asking which items player wishes to take and discard.

//  Screen 9:  Inventory - 5x5 grid of space available.  Pictures of item (weapon/armour/money) will show up in the
//  space when it is full.  This screen will require the following:
//	Table - inventroy display
//	Accept and Discard button.  If items are selected and accept button is clicked, nothing happens and player is
//	returned to game screen.  If items are selected, and player clicks discard, confirmation screen pops up:
//		Discard and cancel buttons.  If discard is clicked, then items are removed from inventory.  If cancel is
//		clicked then screen reverts back to inventroy screen, with current items selected.

//  Screen 10:  Random item pickup.  This will be if the player finds a chest on the journey.  This would be an
//	array, triggered by a randomiser.  Chests will not appear in the same place.  The items that they contain will
//	also be generated randomly (array).  There will be a very slim chance of getting the ultimate weapon/technique.
//  This will be decided in the character selection screen (but not explained.  It is specific to each class type).

//	Screen 11:  Store.  The store will be in a randomly, fixed position each game.  It will be a "medieval shop pic"
//  on a black BG.  There will be a popup window with owner explaining (the first time), how it works.  Accept/ok button
//  Next pop up will be the items for sale.  They will be general, and available to the entire game, no matter the
//  class selected.  There will be a "sell" option too  Mechanics:
//	Once again a table with an array.
//	Once an item is selected, a confirmation window will pop up. Once yes is selected, item is appended to hero.
//	Money mechanic will adjust accordingly.
//	If sell is selected, then hero inventory will appear, and items selected.  A confirmation will appear once
//	items have been selected.
//	Once transactions have been completed, "goodbye" window will appear from shop owner.  Accept and cancel buttons
//  will be in it.  Accept leads outside, while cancel brings up buy/sell options again.

//  Screen 12:  After achieving a certain experience level, a pop up window will appear saying the hero is ready
//  to progress.  Following map, hero will fight main boss.  Semi-transparent window on main game screen BG.
//	There will be a slight darkening of entire screen to imply seriousness

//	Screen 13:  Main boss fight.  Same mechanics as other fights, just longer.  Once boss is defeated, pop up screen
//	comes up congratulating ultimate master of everything and concluding story.

// Draw a 90&deg; arc

