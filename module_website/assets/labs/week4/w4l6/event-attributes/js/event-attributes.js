function checkUsername(){
	var x = document.getElementById("username").value;
	var y = document.getElementById("feedback");
      if(x.length < 4){
y.textContent = "warning user name must be more than 5 characters.";
      }
    
}