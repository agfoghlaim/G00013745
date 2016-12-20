var xhr = new XMLHttpRequest();
xhr.open('GET', 'data/data.html', true);
xhr.send(null); //we're not passing any paramaters eg search paramater
xhr.onload = function(){
	var el = document.getElementById('content');
	el.innerHTML = xhr.responseText;
}