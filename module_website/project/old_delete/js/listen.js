function listen(){//called in init onload function
	var cart = []; //to get from local storage
	//var total;
	
	//add event listner to content div on cart page 
	var div = document.getElementById('content');
	div.addEventListener('click', function(e){
	removeFromCart(e);
	}, false);

		//function to remove one relevent item from cart onclick
		//delete relevent row if amt is 0
		//delete table if cart is empty
		function removeFromCart(e){

		var toGo;
		var target = e.target;
		var table = div.firstElementChild;

		if(target.nodeName = 'TD'){
			//console.log(target.innerText);
			 toGo =target.parentNode.rowIndex; //target relevent row
			 var iName = target.parentNode.firstElementChild.innerText;//name of item
			// console.log(iName);

			 //table.deleteRow(toGo); //turn back on later


			 cart = JSON.parse(localStorage.getItem('cart'));//access the cart
			 var total = JSON.parse(localStorage.getItem('total'));//access the cart
			 console.log("fresh from cart total" + total);
			 //check if the relevent item has an amount greater than 0
			 //if so, decrease amt by 1, else if amt is 0 remove the row.
			 //update the local storage object
			 for(i in cart){
				 if( (cart[i].name == iName) && cart[i].amt > 0 ){
				 	cart[i].amt = cart[i].amt -1;
				 	console.log("tot1" + total);
				 	cart[i].itemTotal = cart[i].itemTotal - cart[i].cost;
				 	console.log("tot2" + total);
				 	total = total - cart[i].cost;
				 	console.log("tot3" + total);
				 	console.log("cost of item " + cart[i].cost);
				 	
				 	updateStorage();
				 	var el = document.getElementById('table');
				 	//console.log(el.parentNode);
				 	el.parentNode.removeChild(table);
				 	//table.deleteRow(table); 
				 
				 	
				 	
				 

				 	checkIt(); 
				 }else if(cart[i].amt == 0 ){
				 	
				 	//total = 0;
				 	
				 }
			 }
		 
		}

function updateStorage(){//needed on more pages
	localStorage.setItem('cart', JSON.stringify(cart));
	localStorage.setItem('total', JSON.stringify(total));
	//console.log("from stroage what " + total);
	//console.log("from stroage " + cart);
}

// updateStorage = function(){
// 	localStorage.setItem('cart', JSON.stringify($scope.cart));
// 	localStorage.setItem('total', JSON.stringify($scope.total));
// 	console.log("from stroage " + $scope.total);

//if()
// var elListItem = target.parentNode;
// console.log(elListItem);
// var elList = elListItem.parentNode;
// console.log(elList);
// elList.removeChild(elListItem);
// e.preventDefault();


//element = event.target || event.srcElement;


 }

}// end of listen function called in init onload function





// var elShoppingList = document.getElementById("shoppingList");

// elShoppingList.addEventListener('click', function(event){
// 		//call remove Item here
// 		itemRemove(event);
// 	}, false);


// function itemRemove(event){
// //var element;


// var target = event.target;
// console.log(target);
// var elListItem = target.parentNode;
// console.log(elListItem);
// var elList = elListItem.parentNode;
// console.log(elList);
// elList.removeChild(elListItem);
// e.preventDefault();


// //element = event.target || event.srcElement;

// }

// var elShoppingList = document.getElementById("shoppingList");

// elShoppingList.addEventListener('click', function(event){
// 		//call remove Item here
// 		itemRemove(event);
// 	}, false);
