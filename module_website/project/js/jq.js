

$(document).ready(function() {

	//fancy saucpan on register page
   $("#fname").mouseenter(function(){
        $("#img-register").slideUp("slow");
    });



  
  //clear localstorage on logout
   	$( '#logout-btn' ).on('click', function(){
      localStorage.clear('cart');
      
    });
  
 

 //for smooth scrolling on shop page  
 $('#smooth div a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });











	

});



 
 

