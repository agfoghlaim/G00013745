var name = "Marie";
document.write("<h1>Create Page From javaScript</h1>");
document.write("<p>This is a paragraph written by</p>" + "<h1>" + name + "</h1>");
document.write("<button>Add</button>");

var button1 = document.getElementsByTagName("button");
function add(){
	alert("hiya!");
}
button1[0].addEventListener('click', function(){
	add();
}, false)

