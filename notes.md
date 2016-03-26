//  Screen 6:  The play screen.  Probably get a game library to create this, depending on time.  There are 2 options:
//  Pokemon scrolling style or behind the hero camera style.  Screen will have health and experience bar.  Magic/Mana
//  bar if Ihave time to create those mechanics.

//  Game mechanics.  Hero will travel along and have random encounters with monsters.  This will lead to battles and
//  experience gain.  If the hero loses, game restart ensues.  Monsters will carry items that will automatically get
//  added to the heros inventory.  What I need to create:
//  Fight mechanic - turn based, using D&D dice rolling logic, including weapon and armour buffers
//  Monsters - Constructors that generate randomly, depending on characters level.  Their inventory will also be
//  goverened by their level (in terms of what they are carrying.)  Monster class and therefore inventory will be 
//  arrays where the items are inserted (if else statements) that will then append to the hero class.
//  Experience upgrade - Constructor product gets a percentage increase defined by its class.  ie, some attributes
//  will increase better than others, dependent on the selected class.
//  Inventory - Items get appended to the Hero class

//  Screen 7: Battle Screen.  Will be turn based where player clicks button, gets result, and then monster attacks
//  and result is displyed.  Health bar decreases accordingly

//  Screen 8: Monster defeat screen.  Semi-transparent window with main play screen in the BG.  Window lists how 
//  much experience was gained, as-well-as inventory items (if any) were gained.  Programming needed:
//  Accept button
//  If inventory is full - Mew window pops up asking which items player wishes to take and discard.

//  Screen 9:  Inventory - 5x5 grid of space available.  Pictures of item (weapon/armour/money) will show up in the 
//  space when it is full.  This screen will require the following:
//  Table - inventroy display
//  Accept and Discard button.  If items are selected and accept button is clicked, nothing happens and player is
//  returned to game screen.  If items are selected, and player clicks discard, confirmation screen pops up:
//      Discard and cancel buttons.  If discard is clicked, then items are removed from inventory.  If cancel is 
//      clicked then screen reverts back to inventroy screen, with current items selected.

//  Screen 10:  Random item pickup.  This will be if the player finds a chest on the journey.  This would be an 
//  array, triggered by a randomiser.  Chests will not appear in the same place.  The items that they contain will 
//  also be generated randomly (array).  There will be a very slim chance of getting the ultimate weapon/technique.
//  This will be decided in the character selection screen (but not explained.  It is specific to each class type).

//  Screen 11:  Store.  The store will be in a randomly, fixed position each game.  It will be a "medieval shop pic"
//  on a black BG.  There will be a popup window with owner explaining (the first time), how it works.  Accept/ok button
//  Next pop up will be the items for sale.  They will be general, and available to the entire game, no matter the 
//  class selected.  There will be a "sell" option too  Mechanics:
//  Once again a table with an array.
//  Once an item is selected, a confirmation window will pop up. Once yes is selected, item is appended to hero.
//  Money mechanic will adjust accordingly.
//  If sell is selected, then hero inventory will appear, and items selected.  A confirmation will appear once 
//  items have been selected.
//  Once transactions have been completed, "goodbye" window will appear from shop owner.  Accept and cancel buttons
//  will be in it.  Accept leads outside, while cancel brings up buy/sell options again.

//  Screen 12:  After achieving a certain experience level, a pop up window will appear saying the hero is ready
//  to progress.  Following map, hero will fight main boss.  Semi-transparent window on main game screen BG.  
//  There will be a slight darkening of entire screen to imply seriousness    

//  Screen 13:  Main boss fight.  Same mechanics as other fights, just longer.  Once boss is defeated, pop up screen
//  comes up congratulating ultimate master of everything and concluding story.

// Draw a 90&deg; arc