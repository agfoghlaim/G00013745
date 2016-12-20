//add an click event listener to the table of nameList.html
// var tableEl = document.get ElemetById("t1");
// tableE1.addEventListener('click', removeItem, true);
//event listener to invoke this function:


// function removeItem(){
// 	// Add code here to remove rows clicked on. 
// 	if(event.target.nodeName.toLowerCase() == 'td'){
// 		var tdEl = event.target.parentNode //get the row
// 		var tableEl = tdEl.parentNode; // get the table
// 		tableEl.removeChild(tdEl);
// 		//following part of line not part of assessment
// 		localStorage.removeItem(tdEl.firstChild.innerHTML); //remove the data from local storage
// 	}else if(event.target.nodeName.toLowerCase() == 'b'){
// 		var bEl = event.target.parentNode; //get the row
// 		var tdEl = bEl.parentNode;//get the table
// 		tableEl.removeChild(tdEl);// remove the row
// 		//following part of line not part of assessment
// 		localStorage.removeItem(tdEl.firstChild.innerHTML);//remove the data from loal storage
// 	}
// 	//don't forget to stop propagation
// 	//rememeber event object
// 	event.stopPropogarion();
/// }

// var div = document.getElementById('nameList');
// div.addEventListener('click', function(e){
//   removeItem(e);
// }, true);

// function removeItem(e){
	

//   if (e.target.nodeName === "TD"){
//     var target = e.target;
//   var row =  target.parentNode;
//   var up = row.parentNode;
//   var tBody = row.parentNode;
//     //console.log(row);
//    div.removeChild(row);
//     //alert(e.target.nodeName);
//  }
// }

var div = document.getElementById('nameList');
div.addEventListener('click', function(e){
  removeItem(e);
}, false);

function removeItem(e){
  var target = e.target;
  var theTable = div.firstElementChild;
  var toGo;
      if(target.nodeName === 'TD'){
        toGo =target.parentNode.rowIndex;
      }
      else if(target.nodeName === 'B'){
        var bold = target.parentNode;
       toGo = bold.parentNode.rowIndex;
      }else{
      toGo = -1;
     }
   theTable.deleteRow(toGo);
}


