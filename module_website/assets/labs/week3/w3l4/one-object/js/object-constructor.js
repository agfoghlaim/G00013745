

var hotel = new Object();
	hotel.name = 'Quay';
	hotel.rooms = 40;
	hotel.booked = 25;
	hotel.checkAvailabity = function(){
		return this.rooms - this.booked;
	};

var hotelName = document.getElementById("hotelName");
hotelName.textContent = hotel.name;

var rooms = document.getElementById("rooms");
rooms.textContent = hotel.checkAvailabity();