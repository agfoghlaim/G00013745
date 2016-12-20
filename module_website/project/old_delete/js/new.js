//onload for cart page showul probable move to listen.js
window.onload = init;

function init(){
checkIt(); //get info from local storage and creates table
listen(); //adds event listener, check this
   
 }

// row counter for table
var rowCounter = 0;

function showTotal(){
total = JSON.parse(localStorage.getItem('total'));
if(total){
document.getElementById('display-total').textContent = "Cart Total: € " + total;
}else if(total === 0){
document.getElementById('display-total').textContent = "Cart Total: € " + 0;	
}	
}



//on button on cart page, 
//move to init when things are more stable
function checkIt(){
	var cart;
	var total;
	cart = JSON.parse(localStorage.getItem('cart'));
	//total = JSON.parse(localStorage.getItem('total'));

	console.log(cart);

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
	}else{
		//show 'cart is empty message'
			//document.getElementById('emptyCart').textContent = 'Your Cart is empty';
			//$("#emptyCart").text('Your Cart is empty').$(this).fadeIn('slow');
			// $( "#emptyCart:hidden" ).fadeIn( "slow" );
			// $('li:lt(3)').hide().fadeIn(1500);
			showTotal();
			$("#emptyCart").css("visibility", "visible").hide().fadeIn(1500);
			$("#emptyLink").css("visibility", "visible").hide().fadeIn(4000);
				 	
	}

}

 //want to only create the table if some item amount value in localStorage is >0
function checkAmts(){
	var cart = JSON.parse(localStorage.getItem('cart'));
	for(i in cart){
		if(cart[i].amt>0){
			return true;
		}
	}
}






















//misc functions//////////////////////////////////////
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



// function cart(){
// var div = document.getElementById('content');

// div.addEventListener('click', function(e){
//   removeItem(e);
//   alert("hi");
// }, false);

// function removeItem(e){
//   var target = e.target;
//   var theTable = div.firstElementChild;
//   var toGo;
//       if(target.nodeName === 'TD'){
//         toGo =target.parentNode.rowIndex;
//       }
    
//      else{
//       toGo = -1;
//      }
//    theTable.deleteRow(toGo);


// }
// };
