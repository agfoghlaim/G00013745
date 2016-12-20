var el = document.getElementById("username");
el.onblur = checkUsername;

function checkUsername(){
 
   var y = el.value;
   var feedback = document.getElementById("feedback");
      if(y.length < 4){
  feedback.textContent = "warning must be greater than 5";
      }
 }