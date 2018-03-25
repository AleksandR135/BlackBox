class Vehicle {
	constructor(model, maxSpeed) {
		this._model = model;
		this._maxSpeed = maxSpeed;
		this._condition = 'excellent';
	}

	get model() {
		return this._model;
	}

	get maxSpeed() {
		return this._maxSpeed;
	}

	get condition() {
		return this._condition;
	}

	changeCondition(newCondition) {
		switch(newCondition) {
			case 'excellent':
			case 'good':
			case 'satisfactory':
			case 'bad':
			case 'broken':
				this._condition = newCondition;
				break;
			default:
				console.log('choose suit condition:' +
				' excellent | good | satisfactory | ' + 
				'bad | broken');
		}
	}
}
class Aircraft extends Vehicle {
	constructor(model, maxSpeed, flightAltitude) {
		super(model, maxSpeed);
		this._flightAltitude = flightAltitude;
	}

	get flightAltitude() {
		return `The flight altitude of ${this._model} ` +
		`is ${this._flightAltitude}m`;
	}
}

class Airplane extends Aircraft {
	constructor(model, maxSpeed, flightAltitude, type) {
		super(model, maxSpeed, flightAltitude)
		this._type = type;
	}
	get description() {
		return `${this._model} is a ${this._type} airplane, max speed is ` + 
		`${this._maxSpeed}km/h, flight altitude ` + 
		`is ${this._flightAltitude}m and condition is ${this._condition}`;
	}
}

const airbus = new Airplane('airbus a380', 1020, 13115, 'passanger');
console.log(airbus.model);
console.log(airbus.changeCondition('good'));
console.log(airbus.flightAltitude);
console.log(airbus.description);