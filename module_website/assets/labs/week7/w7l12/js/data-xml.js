var xhr = new XMLHttpRequest();
xhr.open('GET', 'data/data.xml',true);
xhr.send(null);


xhr.onload = function(){
	var response = xhr.responseXML;
	var events = response.getElementsByTagName('event');

	var di1='map';
	var di2='location';
	var di3='date';

	//build up string with new content

	var newContent = '';
	for(i=0;i<events.length;i++){
	newContent +=  '<div> \
					 	<img src= ' + '"' + events[i].getElementsByTagName(di1)[0].firstChild.nodeValue + '"' + '/> \
					 		<p><b>' + events[i].getElementsByTagName(di2)[0].firstChild.nodeValue + '</b> \
					 		</p> \
					 </div>';	
	}

	//update pg with content
	document.getElementById('content').innerHTML = newContent;
}


// newContent += '<div class="event">';
// 		newContent += '<img src="' + events[i].getElementsByTagName(di1)[0].firstChild.nodeValue + '"';
// 		newContent +=  'alt="' + events[i].getElementsByTagName(di2)[0].firstChild.nodeValue + '"/>';
// 		newContent += '<p><b>' + events[i].getElementsByTagName(di2)[0].firstChild.nodeValue + '</b><br>';
// 		newContent += events[i].getElementsByTagName(di3)[0].firstChild.nodeValue + '</p>';
// 		newContent += '</div>';