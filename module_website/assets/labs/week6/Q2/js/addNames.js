//create functions for add(), clear_storage() and names object
//add function to use localStorage object.
function clear_storage(){
	localStorage.clear();
}

function name(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
	this.name = firstName+" " +lastName;
}




// var oKey;
// var counter = 0;
// function add(){
	

// 	oKey = 'oKey_' + counter;
// 	//var getBookName = document.form1.bookName.value;
// 	console.log(oKey);
// 	//var bookName = new Book(getBookName);
// var getFirstName = document.getElementById('fld1');
// var getLastName = document.getElementById('fld2');
// localStorage.setItem(oKey, JSON.stringify(new name(getFirstName.value,getLastName)));
// counter++;
// alert(getFirstName.value+ getLastName.value);
// window.location.reload();


	
// }

function add(){
//alert(localStorage.length);
var obj_key = 'obj_key_' + localStorage.length; //for uniqueness

//console.log(obj_key);

var getFirstName = document.getElementById('fld1');
var getLastName = document.getElementById('fld2');
var fullName = getFirstName + " " + getLastName;

localStorage.setItem(obj_key, JSON.stringify(new name(getFirstName.value, getLastName.value)));
//alert(localStorage.getItem("obj_key_0"));

window.location.reload(); //relaods form to clear input field
}

