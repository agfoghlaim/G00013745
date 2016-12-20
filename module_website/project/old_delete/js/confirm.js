// $(document).ready(function(){
// 	if( checkAmts() ){
// 			$order = JSON.parse(localStorage.getItem('cart'));
// 			//console.log($order);
// 			//$('#order-data').text($theOrder[0].name);
// 			//$theOrder = JSON.stringify($order);
// 			// $.post('confirmed.php', {'theOrder': $theOrder}, function(data){
// 			// 	console.log($theOrder);

// 			// })
// 			$.post('confirmed.php', {'product': $productName }, function(data){
// 				$('#order-data').text("order for " + $productName + " confirmed");
// 			console.log($productName);
// 			});



// 			//var $output = "Your order for ";
// 			var $productStr;
// 			var $productName;
// 			var $productCost;
// 			//var text="";
// 			 for(i in $order){
// 				if($order[i].amt > 0){
// 					 for(j=0;j<$order[i].amt;j++){
// 			$productName = $order[i].name;
// 			//text = "order for " + $productName + " confirmed";
// 			$productCost = $order[i].itemCost;
// 			//$productStr = 'product' + i;
// 			console.log('product' +  $productName );
// 			$.post('confirmed.php', {'product': $productName }, function(data){
				

// 			//console.log($productStr);
// 			});
// 			// $.post('confirmed.php', {'product': $productCost }, function(data){
// 			// 	//$('#order-data').text("order for " + $productName + " confirmed");

// 			// })

// 			}}}

// 				$('#order-data').text("order for " + $productName + " confirmed");
// }

//  //want to only create the table if the item amount value in localStorage is >0
// function checkAmts(){
// 	var cart = JSON.parse(localStorage.getItem('cart'));
// 	for(i in cart){
// 		if(cart[i].amt>0){
// 			return true;
// 		}else{
// 			return false;
// 		}
// 	}
// }


// 	});
