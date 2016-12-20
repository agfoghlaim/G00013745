
$(function(){
	$isValid = false;

	$('#validation').validateCreditCard(function(result){
	result.valid ? $isValid=true : $isValid=false;
	});

	$('.confirm').on('click', function(){
	$isValid ? $(window).attr("location", "confirmed.html") :
	alert("not valid cc");
	});

//jS translation below
// if(isValid){
// 	$(window).attr("location", "confirmed.html")
// }elseif{(!isValid){
// alert("not valid cc");
// }


});

 // $(function() {
 //        $('input').validateCreditCard(function(result) {
 //            $('.log').html('Card type: ' + (result.card_type == null ? '-' : result.card_type.name)
 //                     + '<br>Valid: ' + result.valid
 //                     + '<br>Length valid: ' + result.length_valid
 //                     + '<br>Luhn valid: ' + result.luhn_valid);
 //        });
 //    });