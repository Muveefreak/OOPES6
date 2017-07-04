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
class twoTyres extends Vehicle{
    constructor(brand) {
        super(brand);
        this[numberOfTyres] = 0;
    }

    get tyreCount() {
        return this[numberOfTyres];
    }

    set tyreCount(value) {
        if (value < 0) {
            console.log("We do not support nether or interstellar insects");
        }

        this[numberOfTyres] = value;
    }

    countTyres() {
        super.countTyres();
        console.log("This vehicle has " + this[numberOfTyres] + " tyres!");
    }
}

var bicycle = new twoTyres("bicycle");
bicycle.tyreCount = 2;
bicycle.countTyres();
