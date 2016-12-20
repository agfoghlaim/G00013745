var app = angular.module('app', []);

app.controller('ctrl' ,function($scope){
	$scope.weeks = [{week:'1',
					lab:'01',
					title: 'HTML, CSS and javaScript',
					desc: 'A refresher exercise',
					pdf: 'assets/labs/week1/w1l1.pdf',
					zip: 'assets/labs/week1/w1l1.zip'},
				{

					week:'2',
					lab: '02',
					title: 'Functions Lab',
					desc: 'Functions Lab', 
					pdf: 'assets/labs/week2/w2l2.pdf',
					zip: 'assets/labs/week2/w2l2.zip'
				},
				{
					week:'2',
					lab: '03',
					title: 'First Objects Lab', 
					desc: 'First Objects Lab', 
					pdf: 'assets/labs/week2/w2l3.pdf',
					zip: 'assets/labs/week2/w2l3.zip'
				},{	week:'3',
					lab: '04',
					title: 'Second Objects Lab', 
					desc: 'Second Objects Lab - Object Constructor with Multiple Objects', 
					pdf: 'assets/labs/week3/w3l4.pdf',
					zip: 'assets/labs/week3/w3l4.zip'
				},{week:'4',
					lab: '05',
					title: 'Javascript Error Handling Lab', 
					desc: 'Handling Errors', 
					pdf: 'assets/labs/week4/w4l5.pdf',
					zip: 'assets/labs/week4/w4l5.zip'
				},{week:'4',
					lab: '06',
					title: 'Javascript Events Lab 1', 
					desc: '3 exercises - create an Event Handler, create a DOM Event Handler and create an Event Listener', 
					pdf: 'assets/labs/week4/w4l6.pdf',
					zip: 'assets/labs/week4/w4l6.zip'
				},{week:'4',
					lab: '07',
					title: 'Javascript Events Lab 2', 
					desc: '2 exercises on Event Capturing and Event Bubbling', 
					pdf: 'assets/labs/week4/w4l7.pdf',
					zip: 'assets/labs/week4/w4l7.zip'
				},{week:'5',
					lab: '08',
					title: 'Javascript Events Lab 3 & 4', 
					desc: 'First lab is about the Event Object and second lab consists of an exercise in Event Delegation', 
					pdf: 'assets/labs/week5/w5l8.pdf',
					zip: 'assets/labs/week5/w5l8.zip'
				},{week:'5',
					lab:'09',
					title: 'Session and Local Storage', 
					desc: 'Storing and accessing instances of objects in localStorage and sessionStorage', 
					pdf: 'assets/labs/week5/w5l8.pdf',
					zip: 'assets/labs/week5/w5l8.zip'
				 },{week:'7',
					lab: '10',
					title: 'AJAX - html', 
					desc: 'Loading html data to a Web Page using AJAX', 
					pdf: 'assets/labs/week7/w7l10.pdf',
					zip: 'assets/labs/week7/w7l10.zip'
				 },{week:'7',
					lab: '11',
					title: 'AJAX - json', 
					desc: 'Loading json data to a Web Page using AJAX', 
					pdf: 'assets/labs/week7/w7l11.pdf',
					zip: 'assets/labs/week7/w7l11.zip'
				 },{week:'7',
					lab: '12',
					title: 'AJAX - xml', 
					desc: 'Loading xml data to a Web Page using AJAX', 
					pdf: 'assets/labs/week7/w7l12.pdf',
					zip: 'assets/labs/week7/w7l12.zip'
				 },{week: '7',
					lab: '13',
					title: 'JSONP', 
					desc: 'Loading JSON with padding data', 
					pdf: 'assets/labs/week7/w7l13.pdf',
					zip: 'assets/labs/week7/w7l13.zip'
				 },{week:'8',
					lab: '14',
					title: 'jQUERY Lab 1', 
					desc: 'jQUERY Chaining', 
					pdf: 'assets/labs/week8/w8l14.pdf',
					zip: 'assets/labs/week8/w8l14.zip'
				 },{week:'8',
					lab: '15',
					title: 'jQUERY Lab 2', 
					desc: 'jQUERY Looping', 
					pdf: 'assets/labs/week8/w8l15.pdf',
					zip: 'assets/labs/week8/w8l15.zip'
				 },{week:'8',
					lab: '16',
					title: 'jQUERY Lab 3', 
					desc: 'jQUERY document.ready() Function', 
					pdf: 'assets/labs/week8/w8l16.pdf',
					zip: 'assets/labs/week8/w8l16.zip'
				 },{week:'8',
					lab: '17',
					title: 'jQUERY Lab 4', 
					desc: 'jQuery plugin for credit card validation', 
					pdf: 'assets/labs/week8/w8l17.pdf',
					zip: 'assets/labs/week8/w8l17.zip'
				 },{week:'8',
					lab: '18',
					title: 'jQUERY Lab 5', 
					desc: 'Making AJAX requests for xml data using jQuery', 
					pdf: 'assets/labs/week8/w8l18.pdf',
					zip: 'assets/labs/week8/w8l18.zip'
				 },{week:'8',
					lab: '19',
					title: 'jQUERY Lab 6', 
					desc: 'Making AJAX requests for JSON data using jQuery', 
					pdf: 'assets/labs/week8/w8l19.pdf',
					zip: 'assets/labs/week8/w8l19.zip'
				 },{week:'10',
					lab: '20',
					title: 'First PHP Lab', 
					desc: 'Creating a database and displaying contents on a Web Page', 
					pdf: 'assets/labs/week10/w10l20.pdf',
					zip: 'assets/labs/week10/w10l20.zip'
				 },{week:'10',
					lab: '21',
					title: 'Second PHP Lab', 
					desc: 'PHP Form Validation', 
					pdf: 'assets/labs/week10/w10l21.pdf',
					zip: 'assets/labs/week10/w10l21.zip'
				 },{week:'11',
					lab: '22',
					title: 'Third PHP Lab', 
					desc: 'Connecting to DB and registering users', 
					pdf: 'assets/labs/week11/w11l22.pdf',
					zip: 'assets/labs/week11/w11l22.zip'
				 },{week:'12',
					lab: '23',
					title: 'Fourth PHP Lab', 
					desc: 'User Login', 
					pdf: 'assets/labs/week12/w12l23.pdf',
					zip: 'assets/labs/week12/w12l23.zip'
				 },{week:'12',
					lab: '24',
					title: 'Fifth PHP Lab', 
					desc: 'Sessions and Cookies', 
					pdf: 'assets/labs/week12/w12l24.pdf',
					zip: 'assets/labs/week12/w12l24.zip'
				 },{week:'13/14',
					lab: 'project',
					title: 'Dynamic Website', 
					desc: 'Create a dynamic site with html, css, js, php, mysql db', 
					pdf: 'assets/labs/project/project.pdf',
					zip: 'assets/labs/project/project.zip'
				 }
					];

});

app.directive('weekThree', function(){
	return{
		templateUrl: 'templates/week3.html'
	}
});

app.directive('weekOne', function(){
	return{
		templateUrl: 'templates/week1.html'
	}
});

app.directive('weekTwo', function(){
	return{
		templateUrl: 'templates/week2.html'
	}
});

app.directive('weekFour', function(){
	return{
		templateUrl: 'templates/week4.html'
	}
});

app.directive('weekFive', function(){
	return{
		templateUrl: 'templates/week5.html'
	}
});

app.directive('weekSix', function(){
	return{
		templateUrl: 'templates/week6.html'
	}
});

app.directive('weekSeven', function(){
	return{
		templateUrl: 'templates/week7.html'
	}
});

app.directive('weekEight', function(){
	return{
		templateUrl: 'templates/week8.html'
	}
});

app.directive('weekNine', function(){
	return{
		templateUrl: 'templates/week9.html'
	}
});

app.directive('weekTen', function(){
	return{
		templateUrl: 'templates/week10.html'
	}
});

app.directive('weekEleven', function(){
	return{
		templateUrl: 'templates/week11.html'
	}
});

app.directive('weekTwelve', function(){
	return{
		templateUrl: 'templates/week12.html'
	}
});

app.directive('websiteProject', function(){
	return{
		templateUrl: 'templates/project.html'
	}
});


