// add javascript code here for web storage lab exercise

function book(name){
	this.name = name;

}

function add(){
	var obj_key = 'obj_key_' + sessionStorage.length; //for uniqueness

console.log(obj_key);



sessionStorage.setItem(obj_key, JSON.stringify(new book(document.book_form.bookName.value)));
console.log(document.book_form.bookName.value);

window.location.reload(); //relaods form to clear input field
}



function clear_storage(){
	sessionStorage.clear();
 }


function fromStorage(){
for(i=0;i<sessionStorage.length;i++){
	var x = JSON.parse(sessionStorage.getItem("obj_key_" + i));
	alert(x.name);
 	}
 }