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
// console.log(myFirstCar.toString()); // "The vehicle is a Toyota Corolla from 2005."
// console.log(myFirstCar.honk());     // "Beep."

// console.log(myFirstCar.numWheels);  // 4


//              art Three
/*
Create a class for a Motorcycle. This class should inherit from Vehicle and each motorcycle instance should have a 
property called numWheels which has a value of 2. It should also have a revEngine method which returns “VROOM!!!”

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
myFirstMotorcycle.toString();
/ "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2
*/

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM";
    }
}
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
console.log(myFirstMotorcycle.toString());
console.log(myFirstMotorcycle.honk());
console.log(myFirstMotorcycle.revEngine());
console.log(myFirstMotorcycle.numWheels);