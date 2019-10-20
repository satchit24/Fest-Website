/**	
	* Template Name: Eventoz
	* Version: 1.0	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS
	
	1. FIXED MENU
	2. EVENT TIME COUNTER
	3. MENU SMOOTH SCROLLING
	4. VIDEO POPUP
	5. SPEAKERS SLIDEER ( SLICK SLIDER )
	6. BOOTSTRAP ACCORDION 
	7. MOBILE MENU CLOSE  
	
	
**/



(function( $ ){


   $('.mu-video-play-btn').on('click', function(event) {
	   
        event.preventDefault();
        
        $('.mu-video-iframe-area').addClass('mu-video-iframe-display');
       
    });
   
    // when click the close btn

    // disappear iframe window
    
    $('.mu-video-close-btn').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.mu-video-iframe-area').removeClass('mu-video-iframe-display');
		
    });

    // stop iframe if it is play while close the iframe window

    $('.mu-video-close-btn').click(function(){

        $('.mu-video-iframe').attr('src', $('.mu-video-iframe').attr('src'));

    });

    // when click overlay area

     $('.mu-video-iframe-area').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.mu-video-iframe-area').removeClass('mu-video-iframe-display');
		
    });

	$('.mu-video-iframe-area, .mu-video-iframe').on('click', function(e){
	    e.stopPropagation();
	});


	
	
})( jQuery );



  
	

