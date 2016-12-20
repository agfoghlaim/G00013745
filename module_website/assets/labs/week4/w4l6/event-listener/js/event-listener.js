function checkUsername(){
 var username = document.getElementById("username");
   var y = username.value;
   
      if(y.length < 4){
 var feedback = document.getElementById("feedback");
 feedback.textContent = "warning must be greater than 5";

      }
 }





var el = document.getElementById("username");
el.addEventListener('blur', function(){
	checkUsername();
}, false);

el.addEventListener('focus', function(){
	removeWarning();
}, false);

function removeWarning(){
var feedback = document.getElementById("feedback");
 feedback.textContent = "";	
}
