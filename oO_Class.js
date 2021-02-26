class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "Beep";
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
//console.log(myFirstVehicle.honk()); // "Beep."

let myFirstVeh = new Vehicle("Honda", "Monster Truck", 1999);
//console.log(myFirstVeh.toString()); // "The vehicle is a Honda Monster Truck from 1999."


//              Part Two
/* Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property 
called numWheels which has a value of 4.

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4
*/

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }   
}
let myFirstCar = new Car("Toyota", "Corolla", 2005);
console.log(myFirstCar.toString()); // "The vehicle is a Toyota Corolla from 2005."
console.log(myFirstCar.honk());     // "Beep."

console.log(myFirstCar.numWheels);  // 4)