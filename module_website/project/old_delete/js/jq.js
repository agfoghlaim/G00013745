

$(document).ready(function() {
console.log("jq is here");
// function makeCartGlow(){
// 	var inCart = JSON.parse(localStorage.getItem('cart'));
// 	if(inCart.length > 0){
// 	 	for(i in inCart){
// 	 		if(inCart[i].amt>0){
// 	 			$('.inCart').css({"box-shadow": "0px 0px 15px 5px rgba(255, 255, 190, .75)"});
// 	 		}
// 	 	}
// 	 }
// }	 
	//fancy saucpan on register page
   $("#fname").mouseenter(function(){
        $("#img-register").slideUp("slow");
    });


 // $("#fname").mouseenter(function(){
 //        $("#img-register").slideDown(1000, function(){
 //            //alert("The slideDown() method is finished!");
 //        });
 //    });
  
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




//snow
// var canvas = $('#theCanvas');
// var ctx = canvas.getContext('2d');
// var W = window.innerWidth;
// var H = window.innerHeight;
// canvas.width = W;
// canvas.height = H;
// var maxFlakes = 100;
// var flakes = [];
// for(i in maxFlakes){
//   flakes.push({
//     x:Math.random()*W,
//     y:Math.random()*H,
//     r:Math.random()*5+2,
//     d:Math.random() + 1
//   })
// }
// function drawFlakes(){
//   ctx.clearRect(0,0,W,H);
//   ctx.fillStyle = "white";
//   ctx.beginPath();
//   for(i in maxFlakes){
//     var f = flakes[i];
//     ctx.moveTo(f,x,f.y);
//     ctx.arc(f.x, f.r, f.r, Math.PI*2, true);
//   }
//   ctx.fill();
//   moveFlakes();
// }
// function moveFlakes(){
//   angle += 0.01;
//   for(i in maxFlakes){
//     var f = flakes[i];

//     f.y += Math.pow(f.d, 2) +1;
//     f.x += Math.sin(angle)*2;

//     if(f.y >H){
//       flakes[i] = {x:Math.randow()*W, 
//                     y: 0, 
//                     r:f.r, 
//                     d:f.d}
//     }
//   }
// }







	

});



 
 

