function Vehicle(model, maxSpeed) {
	this.model = model;
	this.maxSpeed = maxSpeed;
	this.condition = 'excellent';
}

Vehicle.prototype.changeCondition = function(newCondition) {
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
};

function Aircraft(model, maxSpeed, flightAltitude)	{
	Vehicle.apply(this, arguments);
	this.flightAltitude = flightAltitude;
}

Aircraft.prototype = Object.create(Vehicle.prototype)
Aircraft.prototype.getFlightAltitude = function() {
	return 'The flight altitude of ' + this.model +
		' is ' + this.flightAltitude + 'm';
};

function Airplane(model, maxSpeed, flightAltitude, type) {
	Aircraft.apply(this, arguments);
	this.type = type;
}

Airplane.prototype = Object.create(Aircraft.prototype);
Airplane.prototype.getDescription = function() {
	return this.model + ' is a ' + this.type +
	 ' airplane, max speed is ' + this.maxSpeed + 
	 'km/h, flight altitude is ' + this.flightAltitude + 
	 'm and condition is ' + this.condition;
};

var airbus = new Airplane('airbus a380', 1020, 13115, 'passanger');
console.log(airbus.model);
console.log(airbus.changeCondition('good'));
console.log(airbus.getFlightAltitude());
console.log(airbus.getDescription());