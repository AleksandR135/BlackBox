const Vehicle = {
	init(model, maxSpeed) {
		this.model = model;
		this.maxSpeed = maxSpeed;
		this.condition = 'excellent';
	},

	changeCondition(newCondition) {
		switch(newCondition) {
			case 'excellent':
			case 'good':
			case 'satisfactory':
			case 'bad':
			case 'broken':
				this.condition = newCondition;
				break;
			default:
				console.log('choose suit condition:' +
				' excellent | good | satisfactory | ' + 
				'bad | broken');
		}
	}
};

const Aircraft = Object.create(Vehicle);
Aircraft.init = function(model, maxSpeed, flightAltitude) {
	Vehicle.init.apply(this, arguments);
	this.flightAltitude = flightAltitude;
};
Aircraft.getFlightAltitude = function() {
	return 'The flight altitude of ' + this.model +
		' is ' + this.flightAltitude + 'm';
};



const Airplane = Object.create(Aircraft);
Airplane.init = function(model, maxSpeed, flightAltitude, type) {
	Aircraft.init.apply(this, arguments);
	this.type = type;
};
Airplane.getDescription = function() {
	return this.model + ' is a ' + this.type +
	 ' airplane, max speed is ' + this.maxSpeed + 
	 'km/h, flight altitude is ' + this.flightAltitude + 
	 'm and condition is ' + this.condition;
};

const airbus = Object.create(Airplane);
airbus.init('airbus a380', 1020, 13115, 'passanger');
console.log(airbus.model);
console.log(airbus.changeCondition('good'));
console.log(airbus.getFlightAltitude());
console.log(airbus.getDescription());