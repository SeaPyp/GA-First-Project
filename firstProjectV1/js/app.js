$(document).ready(function(){ 
  $('#startText').click(function() {
    $('.homePage').hide();

    $('.storyCharPage').show();
  });

    $('#storyContinue').click(function() {
     $('.storyCharPage').hide();
    $('.tutPage').show();
    $('#begin').show();
   });  

   $('#begin').click(function(){
   	$('.tutPage').hide();
   	$('#begin').hide();
   	$('.battleScreen').show();
   });



	$('playerImage').data(warrior);

 }); // Doc.ready closer
	var warrior = {
	  name : 'Barry',
	  maxHealth : 200,
	  attack : 15,
	  dexterity : 10,
	  experience : 0,
	};

	var imp = {
	  name : 'Barnabus',
	  maxHealth : 40,
	  attack : 8,
	  dexterity : 1,
	  experience : 10,
	};
$(document).ready(function(){ 
	$('.playerImage').click(function(){
		$(warriorAtk());

}); //2nd Doc.ready closer

	var warriorAtk = function(){
	 imp.maxHealth=imp.maxHealth - warrior.attack;
	      if (imp.maxHealth <= 0){
	        alert('You killed the Imp, well done!');
	        return;
	        }else if (imp.maxHealth > 0){
	        	alert('WARRIOR ATTACK\nImp health is now: '+ imp.maxHealth);}
	        impAtk();
		};
		var impAtk = function(){
			warrior.maxHealth=warrior.maxHealth - imp.attack;
		      if (warrior.maxHealth <= 0){
		        alert('You died!  You are Useless!');
		        return;
		        }else if (warrior.maxHealth > 0){
		     		alert('IMP ATTACK\nWarrior health is now: ' + warrior.maxHealth);
		       }
		       warriorAtk();

		};
	});