function itemRemove(event){
//var element;


var target = event.target;
console.log(target);
var elListItem = target.parentNode;
console.log(elListItem);
var elList = elListItem.parentNode;
console.log(elList);
elList.removeChild(elListItem);
e.preventDefault();


//element = event.target || event.srcElement;

}

var elShoppingList = document.getElementById("shoppingList");

elShoppingList.addEventListener('click', function(event){
		//call remove Item here
		itemRemove(event);
	}, false);
