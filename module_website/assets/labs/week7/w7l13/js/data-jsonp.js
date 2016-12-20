 //<script src="http://htmlandcssbook.com/js/jsonp.js?callback=showEvents"></script>




function showEvents(data){
	var newContent = '';


//build string with teh new content(could use dom manipulation see ajax lab 3)

for(i=0;i<data.events.length; i++){
	newContent += '<div class="event">';
	newContent +='<img src="' + data.events[i].map + '" ';
	newContent += 'alt="' + data.events[i].location + '" />';
	newContent += '<p><b>' + data.events[i].location + '</b><br>';
	newContent += data.events[i].date + '</p>';
	newContent += '</div>';
}

//update the page with new content
document.getElementById('content').innerHTML = newContent;

}

// function showEvents(data){
// 	var newContent = '';
// 	for(i=0;i<data.events.length;i++){
// 		newContent += '<div class="event">';
// 		newContent += '<img src="' + data.events[i].map + '"' + '/>';
// 	}
// document.getElementById('content').innerHTML = newContent;
// }