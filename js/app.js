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
//  Constructors for each class
//  Description of each class, along with strengths and weaknesses - numerical value, out of 100
//  Ability to name your Hero
//  Begin quest button
//  Will be a nearly full screen window on a black BG.  Semi transparent again.


  $('.character').click(function(){
    $('.character').removeClass('active');
    $(this).addClass('active');


    var warriorSelect = $('#warriorDiv').data(warrior);
    $('#rogueDiv').data(rogue);
    $('#dwarfDiv').data(dwarf);


    $('#btnSelect').click(function() {
    $('playerImage').append('warriorSelect');
    // $(transferSelection).append('mainChar');
    console.log(transferSelection);
    $('.charSelect').hide();
    $('.storyPage').show();
    console.log('Clicked');
  });

// This is where the character needs to be assigned to the canvas element

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
    // $('.battleScreen').hide();
    $('.battleScreen').show(function(){
      return(drawing());
    });
  });


  $('fight').click(function(){
    impAtk();
  });


// This atk function needs to be simplified.  creating key value pairs that subbed in.



// Combat ********************************************************************

// This is to generate the Attack event.  This code needs to be adapted for my project

var warriorAtk = imp.maxHealth=imp.maxHealth - warrior.attack;
  if (imp.maxHealth <= 0){
    alert('You killed the Imp, well done!');
    return;
    } else if (imp.maxHealth > 0){
        alert('WARRIOR ATTACK\nImp health is now: '+ imp.maxHealth);}

        var impAtk = warrior.maxHealth=warrior.maxHealth - imp.attack;
        if (warrior.maxHealth <= 0){
          alert('You died!  You are Useless!');
          clearInterval(enemyDead);
          return;
        } else if (warrior.maxHealth > 0){
          alert('IMP ATTACK\nWarrior health is now: ' + warrior.maxHealth);

   }
  });


});

