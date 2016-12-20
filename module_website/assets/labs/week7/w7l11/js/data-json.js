var xhr = new XMLHttpRequest();
xhr.open('GET', 'data/data.json', true);
xhr.send(null);

xhr.onload = function(){
	var ResponseObject = JSON.parse(xhr.responseText);
	var content = "";
	for(i=0;i<ResponseObject.events.length; i++){
		content += '<div class="event">';
		content += '<img src="' +ResponseObject.events[i].map +' " ';
		content += 'alt= "' + ResponseObject.events[i].location + '" />'
		content += '<p><b>' + ResponseObject.events[i].location + '</b><br>';
		content += ResponseObject.events[i].date + '</p></div>';
		console.log(content);


	}
			var section = document.getElementById('content');
section.innerHTML = content;
}

