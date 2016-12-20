console.log('And we\'re off');
try{
someVar; // variable is not declared. Will cause an exception

}catch(e){
	var x = document.getElementById("error_details");
	x.textContent = "ReferenceError: someVar is not defined " + e.description;
}finally{
	alert("finally block");
}
