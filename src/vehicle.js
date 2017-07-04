class Vehicle {
    constructor(Vehicle) {
        this.name = Vehicle;
        //this.brand = brand;
        //this.speed = 0;
    }
countTyres() {
        console.log("This is a " + this.name);
    }
}

var vehicleType = new Vehicle("bicycle");
vehicleType.countTyres();

var numberOfTyres =  Symbol();
class Tyres extends Vehicle{
    constructor(brand) {
        super(brand);
        this[numberOfTyres] = 0;
    }

    get tyreCount() {
        return this[numberOfTyres];
    }

    set tyreCount(value) {
        if (value < 0) {
            console.log("This is not a vehicle");
            return false;
        }
        else if (value == 2) {
            console.log("This is a bicycle");
        }
        else if (value == 4) {
            console.log("This is a car");
        }
        else if (value == 8) {
            console.log("This is a truck");
        }
        else if (value != 2 || 4 || 8) {
            console.log("This is not in our scope");
        }

        this[numberOfTyres] = value;
    }

    countTyres() {
        super.countTyres();
        console.log("This vehicle has " + this[numberOfTyres] + " tyres!");
    }
}

module.exports = {
    tyreCount: tyreCount
}

var bicycle = new Tyres("bicycle");
var car = new Tyres("car");
var truck = new Tyres("truck");
var none = new Tyres("Not a vehicle");

bicycle.tyreCount = 2;
bicycle.countTyres();

car.tyreCount = 4;
car.countTyres();

truck.tyreCount = 8;
truck.countTyres();

none.tyreCount = 0;
none.countTyres();
