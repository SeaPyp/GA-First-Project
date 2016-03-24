console.log('Hey');

//  Screen 1: home page with the title on it.  Needs to have a some sort of picture, and a "click to start" button.

//  Screen 2: screen will be an introduction to the story, and how we ended up needing a noble hero.  
//  It will be a window on a black BG.  The window will be slightly transparent.
//  Page will have a skip button and next button (if story needs to progress to another page)
$(document).ready(function(){	
  $('#startText').click(function() {
  	$('.homePage').hide();
  	$('.charSelect').show();
  });


//  Screen 3: Class selection screen.  Select your class from 3 - Warrior, Dwarf and Mage.  Need to create the 
//  following here:
//	Constructors for each class
//  Description of each class, along with strengths and weaknesses - numerical value, out of 100
//	Ability to name your Hero
//	Begin quest button
//	Will be a nearly full screen window on a black BG.  Semi transparent again.


  $('.character').click(function(){
    $('.character').removeClass('active');
    $(this).addClass('active');
  });

 

  $('#btnSelect').click(function() {
    $('.charSelect').hide();
    $('.storyPage').show();
    console.log('Clicked');
  });  

// Movement********************************************************

  $('body').on('keypress', function(event){
    switch(event.which){
      case 119 : 
        console.log('W');
        break;
      case 97 :
        console.log('A');
        moveLeft();
        break;
      case 115 :
        console.log('S');
        break;
      case 100 : 
        console.log('D');
        break;
      default :
        break;
    } 

  });
var moveLeft = function(){
  $('canvas').setLayer('mainChar', {
    rotate:45
  }).drawLayers();

};






// Combat ********************************************************************
//  Need to compare the two generated arrays.  Once an attack is made, the atk value is
//  removed from the health of the opposing player.  To begin it will just be 
//  (Health - atk value).  Once it's done, I can complicate it to include dex and wis

function generateEnemy() {}

(function loop() {
    var rand = Math.round(Math.random() * (7000 - 500)) + 500;
    setTimeout(function() {
            //alert('A');
            generateEnemy();
            loop();  
    }, rand);
}());


var warrior1 = function(){
  health : 100;
  attack : 20;
  };

var imp1 = function(){
  health : 40;
  attack : 5;
  };

var imp1atk = function(){
  (warrior.health - imp.attack)
    return(warrior.health);
}

var impDead = function(){
  if (imp.health === 0);
    console.log('You WIN!');
  };

var warriorDead = function(){
  if (warrior.health === 0);
    console.log('You are DEAD!');
  };

var battle = function(){
  if 
}










//  Screen 4: Another story screen.  Where and what the Hero needs to accomplish to finish level.  
//  Skip button and begin button
//  Window on black BG, semi transparent


  $('#storyContinue').click(function() {
    $('.textContainer').hide();
    $('#storyContinue').hide();
    $('#tutText').show();
    $('.tutPage').show();
    $('#begin').show();
  });

//  Screen 5: Tutorial Screen.  Will be a semi-trasprent window on the main play screen.  The tut will be a brief
//  explanation of what the keys are, and how to move and attack.  It will be a diagram

  $('#begin').click(function() {
    $('.tutPage').hide();
    $('#begin').hide();
    $('#tutText').hide();
    $('.storyPage').hide();
    $('.canvasContainer').show(function(){
      return(drawing());
    });
  });


  var drawing = function(){
    $('canvas').drawPolygon({
      layer: true,
      name: 'mainChar',
      strokeStyle: 'white',
      strokeWidth: 4,
      fillStyle: 'white',
      x: 550, y: 570,
      radius: 100,
      sides: 3
    });
   }; 

//  Screen 6:  The play screen.  Probably get a game library to create this, depending on time.  There are 2 options:
//	Pokemon scrolling style or behind the hero camera style.  Screen will have health and experience bar.  Magic/Mana
//	bar if Ihave time to create those mechanics.

//	Game mechanics.  Hero will travel along and have random encounters with monsters.  This will lead to battles and
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

});  // Closes Doc.ready