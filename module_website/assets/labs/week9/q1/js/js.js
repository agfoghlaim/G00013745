
//function to help creating table
function makeStuff(name, id, content, appendTo){
  var el;
  if(name){
  el = document.createElement(name);
  }
  if(id){
    el.setAttribute('id', id);
  }
   if(content){
    el.appendChild(document.createTextNode(content));
  }
   if(appendTo){
     document.getElementById(appendTo).appendChild(el);
  }
  
}

//request
var xhr = new XMLHttpRequest();
xhr.open('GET', 'data/league_table.json', true);
xhr.send();

//deal with response
xhr.onload = function(){

	var response = JSON.parse(xhr.responseText);
	//console.log(response.standing[0].Team );
	
	//console.log(response.standing[0].Team);
	var rowCounter = 0;
	//make table heading
	makeStuff('table','table', false, 'content' );
	makeStuff('tr', 'trHead', false, 'table');
	makeStuff('th', false, 'Pos', 'trHead');
	makeStuff('th', false, 'Team', 'trHead');
	makeStuff('th', false, 'P', 'trHead');
	makeStuff('th', false, 'Pts', 'trHead');
	makeStuff('th', false, 'F', 'trHead');
	makeStuff('th', false, 'A', 'trHead');
	makeStuff('th', false, 'GD', 'trHead');
	makeStuff('th', false, 'W', 'trHead');
	makeStuff('th', false, 'D', 'trHead');
	makeStuff('th', false, 'L', 'trHead');

	//make table
	for(i=0;i<response.standing.length;i++){//20 times
		//make a row and append to table
	makeStuff('tr', 'tr'+rowCounter, false, 'table');
	// make tds
	makeStuff('td', false, response.standing[i].Pos, 'tr'+rowCounter);
	makeStuff('td', false, response.standing[i].Team, 'tr'+rowCounter);
	makeStuff('td', false, response.standing[i].P, 'tr'+rowCounter);
	makeStuff('td', false, response.standing[i].Pts, 'tr'+rowCounter);
	makeStuff('td', false, response.standing[i].F, 'tr'+rowCounter);
	makeStuff('td', false, response.standing[i].A, 'tr'+rowCounter);
	makeStuff('td', false, response.standing[i].GD, 'tr'+rowCounter);
	makeStuff('td', false, response.standing[i].W, 'tr'+rowCounter);
	makeStuff('td', false, response.standing[i].D, 'tr'+rowCounter);
	makeStuff('td', false, response.standing[i].L, 'tr'+rowCounter);
	rowCounter ++;
	

	}
}









