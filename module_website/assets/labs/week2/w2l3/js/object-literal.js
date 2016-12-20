var hotel= {
	name: 'Quay',
	rooms: 40,
	booked: 25,
	checkAvailabity : function(){
		return this.rooms - this.booked;
	}
}

var hotelName = document.getElementById("hotelName");
hotelName.textContent = hotel.name;

var rooms = document.getElementById("rooms");
rooms.textContent = hotel.checkAvailabity();