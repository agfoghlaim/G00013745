// var liEl = document.getElementsByClassName("hot");
// for (var i = 0; i < liEl.length; i++){
// 	liEl[i].classList.add("favorite");
// 	if(liEl[i].firstChild.nodeName.toLowerCase() == "em"){
// 		liEl[i].firstChild.classList.add("seasonal");
// 	}
// }

$(function(){
 
 
 	$('li.hot').addClass('favorite');
 	$('em').addClass('seasonal');



});

