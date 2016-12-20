//onload for cart page
window.onload = init;

function init(){
checkIt(); //(see 'other functions' below), get info from local storage and create table
listen(); //adds event listener
   
 }

//define function to listen for changes to cart on cart.php
function listen(){
		var cart = []; //cart array to add localStorage objects
	

		// define function to remove one relevent item from cart onclick
		//delete relevent row if amt is 0
		//delete table if cart is empty
		function removeFromCart(e){

		var toGo; //variable to hold row to be removed from table
		var target = e.target;
		var table = div.firstElementChild;

				if(target.nodeName = 'TD'){
				
					toGo =target.parentNode.rowIndex; //target relevent row
					var iName = target.parentNode.firstElementChild.innerText;//get name of item to compare with items retrieved from localStorage
					cart = JSON.parse(localStorage.getItem('cart'));//access the cart
					var total = JSON.parse(localStorage.getItem('total'));//access the total object from localStorage
					console.log("fresh from cart total" + total);

								 //check if the relevent item has an amount greater than 0
								 //if so, decrease amt by 1, else if amt is 0 remove the row.
								 //update the local storage object
								 for(i in cart){
									 if( (cart[i].name == iName) && cart[i].amt > 0 ){
									 	cart[i].amt = cart[i].amt -1;
									 	cart[i].itemTotal = cart[i].itemTotal - cart[i].cost;
									 	total = total - cart[i].cost;
									 	updateStorage(); //call function (defined below) to update the localstorage
									 	var el = document.getElementById('table');
									 	el.parentNode.removeChild(table);
									 	checkIt();// call function (defined below) to determine if a new table should be created, and if so create it
									}else if(cart[i].amt == 0 ){

									}
					 			}
			 
				}

				function updateStorage(){
				localStorage.setItem('cart', JSON.stringify(cart));
				localStorage.setItem('total', JSON.stringify(total));
				}

		}//end of removeFromCart()

//add event listner to content div on cart.php page 
	var div = document.getElementById('content'); //table will be created inside this div#content
	div.addEventListener('click', function(e){
	removeFromCart(e);
	}, false);

}// end of listen function called in init onload function








var rowCounter = 0;// row counter for table
function checkIt(){
	var cart;
	var total;
	cart = JSON.parse(localStorage.getItem('cart'));
	


	//if there's something in the cart
	if(localStorage.length>0 && checkAmts() ){
		//call create table function
		createTable();
		showTotal();

		//add bootstrap class to table
		document.getElementById("table").className = "table";
			//add content to table
			for(i=0;i<cart.length;i++){
			makeStuff('tr', 'tr'+rowCounter, false, 'table');
			// make tds
			makeStuff('td', false, cart[i].name, 'tr'+rowCounter);
			makeStuff('td', false, cart[i].desc, 'tr'+rowCounter);
			makeStuff('td', false, cart[i].cost, 'tr'+rowCounter);
			makeStuff('td', false, cart[i].amt > 0 ? cart[i].amt : '0', 'tr'+rowCounter);
			makeStuff('td', false,  cart[i].itemTotal > 0 ? cart[i].itemTotal : '0', 'tr'+rowCounter);
			rowCounter ++;
		}
	}else{//show total and 'cart is empty message'
			showTotal();
			$("#emptyCart").css("visibility", "visible").hide().fadeIn(1500);
			$("#emptyLink").css("visibility", "visible").hide().fadeIn(3000);
				 	
	}

}


/*====================================================*/
/*=================Other Functions====================*/
/*====================================================*/

//want to only create the table if some item amount value in localStorage is >0 
function checkAmts(){
	var cart = JSON.parse(localStorage.getItem('cart'));
	for(i in cart){
		if(cart[i].amt>0){
			return true;
		}
	}
}

function makeStuff(name, id, content, appendTo){
  var el;
  if(name){
  el = document.createElement(name);
  }
  if(id){
    el.setAttribute('id', id);
  }
   if(content){
    el.appendChild(document.createTextNode(content));
  }
   if(appendTo){
     document.getElementById(appendTo).appendChild(el);
  }
  
};

	
function createTable(){
//console.log('creating table');
	makeStuff('table','table', false, 'content' );
	makeStuff('tr', 'trHead', false, 'table');
	makeStuff('th', false, 'Name', 'trHead');
	makeStuff('th', false, 'Description', 'trHead');
	makeStuff('th', false, 'Cost', 'trHead');
	makeStuff('th', false, 'Quantity', 'trHead');
	makeStuff('th', false, 'Total', 'trHead');

}

function showTotal(){
	total = JSON.parse(localStorage.getItem('total'));
	if(total){
		document.getElementById('display-total').textContent = "Cart Total: € " + total;
	}else if(total === 0){
		document.getElementById('display-total').textContent = "Cart Total: € " + 0;	
	}	
}
