//add a load event listener to the body of nameList.html


//event listener to invoke this function:
function populate_page() {
//Add code here to complete exercise to create the table and add it to div element on the page
//document.write("<h1>test</h1>");

var toWrite = "<table border='1px solid black' id='t1'><tr><td>First Name</td><td>Surname</td><tr>";
var div = document.getElementById('nameList');
//var table = document.createElement('table');
var theTableContent="";

var table = document.getElementById('t1');
var alsoWrite = "";
//var key;

for(var i=0;i<localStorage.length;i++){
	var x = JSON.parse(localStorage.getItem("obj_key_" + i));
	//key = "obj_key_" + i;
if(i=== 0){
	alsoWrite += "<tr><td><b>" + x.firstName + "</b></td><td><b>" + x.lastName + "</b></td></tr>";
}else{
	var x = JSON.parse(localStorage.getItem("obj_key_" + i));
	alsoWrite += "<tr><td>" + x.firstName + "</td><td>" + x.lastName + "</td></tr>";
}
 	}
 
theTableContent = toWrite + alsoWrite;

div.innerHTML = theTableContent;


	
 	



	//added the following to create a reference to js/clickEvent.js within <head> tag.
	var clickEventRef=document.createElement('script');
	clickEventRef.setAttribute("type","text/javascript");
	clickEventRef.setAttribute("src","js/clickEvent.js");
	document.getElementsByTagName("head")[0].appendChild(clickEventRef);
}

var nameList = document.getElementById('namesListBody');
// nameList.addEventListener('load',function(){
// 	populate_page();
// },false);

nameList.addEventListener('load',populate_page(),false);