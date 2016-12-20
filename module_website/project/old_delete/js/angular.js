var app = angular.module('app', []);

app.controller('ctrl', function($scope){

// window.onload = init;

//   function init(){
 
// $scope.getStorage(item);

   
//   };

     angular.element(document).ready(function () {

        //$scope.getStorage(item);
    });

//$scope.total;
//console.log($scope.total);
$scope.products = [
	{id: 1,
	name: 'Classic Stainless Steel Saucepan',
	cost: 199,
	desc: 'Classic design, 2lt, stainless steel interior will not react with foods',
	instructions: 'Dishwasher friendly',
	imgUrl: 'img/product1.jpg',
	amt:0,
	itemTotal: 0
},
	{id: 2,
	name: '2lt Covered Saucepan',
	cost: 89,
	desc: 'Straining Lid and Pour Spout on Rim for Easy Draining, Dishwasher safe',
	instructions: 'Dishwasher safe',
	imgUrl: 'img/product2.jpg',
	amt: 0,
	itemTotal: 0

},
	{id: 3,
	name: 'Saucepan3',
	cost: 35,
	desc: 'Classic design, 2lt, Aluminum Encapsulated Base for Optimal Heating',
	instructions: 'Dishwasher safe',
	imgUrl: 'img/product3.jpg',
	amt: 0,
	itemTotal: 0

},
	{id: 4,
	name: 'Saucepan 4',
	cost: 29,
	desc: 'Classic design, 2lt, Dishwasher Safe for Effortless Cleaning',
	instructions: 'Dishwasher safe',
	imgUrl: 'img/product4.jpg',
	amt: 0,
	itemTotal: 0

},
	{id: 5,
	name: 'Black with lid',
	cost: 68,
	desc: 'Offers stick resistance and easy maintenance, plus won’t react with food ',
	instructions: 'Dishwasher safe',
	imgUrl: 'img/product5.jpg',
	amt: 0,
	itemTotal: 0

},
	{id: 6,
	name: 'Quality Saucepan',
	cost: 24,
	desc: 'Contoured stainless-steel handles permanently secured with stainless-steel rivets',
	instructions: 'Dishwasher safe',
	imgUrl: 'img/product6.jpg',
	amt: 0,
	itemTotal: 0

},
	{id: 7,
	name: 'Copper and Steel',
	cost: 100,
	desc: 'Unique straining lids and classically styled phenolic handles are oven safe',
	instructions: 'Dishwasher safe',
	imgUrl: 'img/product7.jpg',
	amt: 0,
	itemTotal: 0

},
	{id: 8,
	name: 'Green',
	cost: 49,
	desc: 'Classic design, 2lt, stainless steel interior will not react with foods',
	instructions: 'Dishwasher safe',
	imgUrl: 'img/product8.jpg',
	amt: 0,
	itemTotal: 0

},
	{id: 9,
	name: 'Other Blue saucepan',
	cost: 59,
	desc: 'Classic design, 2lt, stainless steel interior will not react with foods',
	instructions: 'Dishwasher safe',
	imgUrl: 'img/product9.jpg',
	amt: 0,
	itemTotal: 0

},
	{id: 10,
	name: 'Nice Red Saucepan',
	cost: 99,
	desc: 'Classic design, 2lt, stainless steel interior will not react with foods',
	instructions: 'Dishwasher safe',
	imgUrl: 'img/product10.jpg',
	amt: 0,
	itemTotal: 0

},
	{id: 11,
	name: 'Firey red Saucepan',
	cost: 89,
	desc: '3 layers of nonstick coating provide durability and easy release performance',
	instructions: 'Dishwasher safe',
	imgUrl: 'img/product11.jpg',
	amt: 0,
	itemTotal: 0

},
	{id: 12,
	name: 'Nice Brown Sauce',
	cost: 39,
	desc: 'Taller than the others, not react with foods',
	instructions: 'Dishwasher safe',
	imgUrl: 'img/product12.jpg',
	amt: 0,
	itemTotal: 0

}

];
///////////////////////////////////////////////
$scope.total =0;
total = $scope.total;
	
$scope.cart = [];

//function for shop page
$scope.addToCart = function(item){ 
makeCartGlow("#FFD34E");	
		for(i in $scope.cart){
			if($scope.cart[i].id === item.id){
				
				$scope.cart[i].amt += 1;
				$scope.cart[i].itemTotal += item.cost;
				$scope.total += item.cost;
				updateStorage();
				return;
			}
		}
				
				item.amt +=1;
				item.itemTotal += item.cost;
				$scope.total += item.cost;	
				$scope.cart.push(item);

updateStorage();

}
/////////////////////

$scope.removeItem = function(item){
	
	for(i in $scope.cart){
			if(($scope.cart[i].name == item.name) && $scope.cart[i].amt >0){
				$scope.cart[i].amt = $scope.cart[i].amt -1;
				$scope.cart[i].itemTotal = $scope.cart[i].itemTotal - $scope.cart[i].cost;
				$scope.total -= $scope.cart[i].cost;
				makeCartGlow("#BD4932");//make cart glow red
				updateStorage();
				
				}else if($scope.cart[i].amt == 0){

					$scope.cart.splice($scope.cart.indexOf(item),1);
					updateStorage();
			}

	}
	console.log($scope.cart);
updateStorage();
}



// $scope.getStorage = function(item){
// 	console.log("setting");
// 	var cart = JSON.parse(localStorage.getItem('cart'));

	
  	 
	
// 		if(localStorage.length>0 && checkAmts() ){
// 				for(i in cart.length){
// 					if(cart[i].name == item.name) {
		
// 			 $scope.products[item].amt = cart[i].amt;
// 			 console.log("one" + $scope.products[item].amt );
// 			 console.log("two" + cart[i].amt)
			
// 		}}}
	//$scope.cart[i].amt = $scope.products[i].amt;	
	//}
	//$scope.cart.amt = $scope.products.amt;
	//console.log($scope.cart[0].amt);
	//console.log($scope.products[0].amt);
	//$scope.total = JSON.parse(localStorage.getItem('total'));
	//console.log("total is " + $scope.total);
//}

updateStorage = function(item){//needed on more pages
	localStorage.setItem('cart', JSON.stringify($scope.cart));
	localStorage.setItem('total', JSON.stringify($scope.total));
	console.log("from stroage " + $scope.total);
	
}

function makeCartGlow(redOrYellow){
//var inCart = JSON.parse(localStorage.getItem('cart'));


var $el = $('.inCart'),
    
    originalColor = $el.css("color");

$el.css({"color": redOrYellow});
setTimeout(function(){
  $el.css("color", originalColor);
}, 500);


 // if(inCart.length > 0){
 //  	for(i in inCart){
 //  		if(inCart[i].amt>0){
	 			// $('.inCart').css({"box-shadow": "0px 0px 15px 5px rgba(255, 255, 190, .75)", "color": "#FFD34E"}).delay(
	 			// 	1000).$(this).css({"box-shadow": "0px 0px 15px 5px", "color": "#FFD34E"});
	 		//}
	 		// else {
	 		// 	$('.inCart').css({"box-shadow": "0px 0px 15px 5px", "color": "black"});
	 // 		}
	 // 	}
	 // }
}	 

function checkAmts(){
	var cart = JSON.parse(localStorage.getItem('cart'));
	for(i in cart){
		if(cart[i].amt>0){
			return true;
		}
	}
}

// $scope.getItem = function(item){//not used?
// 	$scope.what = JSON.parse(localStorage.getItem('str'));
// 	console.log($scope.what + $scope.what.name + $scope.what.cost);
// }





});