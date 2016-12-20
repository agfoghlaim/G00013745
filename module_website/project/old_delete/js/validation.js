
$(function(){
	$isValid = false;

	$('#validation').validateCreditCard(function(result){
	result.valid ? $isValid=true : $isValid=false;
});

$('.confirm').on('click', function(){
	 if($isValid){ 

	//get order from local storage
	order = JSON.parse(localStorage.getItem('cart'));
			var output = "";
			var productName;
			//var product = 
			
			 for(i in order){
				if(order[i].amt > 0){
					 for(j=0;j<order[i].amt;j++){
			productName = order[i].name;
			
			$.post('pretend.php', {productName: productName},function(data){
			console.log(data);
			output += data+' ';//data is output in php file
			$('#the-data').html(output);
			localStorage.clear();
			});
			
			
		

			}}}
		
	


	 	


	

	
	 }else{
			alert("Did you enter the card details correctly?");
}
	});



});

