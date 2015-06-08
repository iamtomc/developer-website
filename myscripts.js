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

/* mouse scroll fading in */

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.container').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});

