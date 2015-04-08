/*hamburger menu interaction*/

document.querySelector( "#hamburger-menu")
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
    $('.sidebar').css({'width': '200px'});
  });


/*scroll event below*/

$(document).ready(function (){
    $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
   // now on the basis of scrollTop value show your div
     if(scrollTop > 220){
     	$('.skillDiv').fadeIn('slow');
     }
      if(scrollTop > 340){
      	$('.firstFade').fadeIn('slow');
     }
      if(scrollTop > 380){
      	$('.secondFade').fadeIn('slow');
     }
      if(scrollTop > 420){
      	$('.thirdFade').fadeIn('slow');
     }
      if(scrollTop > 450){
      	$('.fourthFade').fadeIn('slow');
     }
    })
});



