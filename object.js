//different ways of creating object
//1. object literals

// const student = {
//     name: "shashank",
//     birthYear: 1999,
//     occupation: "student",
//     gender: "male",
//     calculateAge: () => {
//         return 2022 - this.birthYear;
//     }

// }
// console.log(student instanceof Object);
// //console.log(student);
// console.log(student.name);
// console.log(student['name']);
// const firstName = 'name';
// console.log(student[firstName]);
// console.log(student.firstName);
// //using constructor

//special type of function
// function student(name, birthYear, occupation, gender) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.occupation = occupation;
//     this.gender = gender;

// // this is the bad way to give function
// this.getAge = ()=>{
//     return 2022 - this.birthYear;
// }
// }
// student.prototype.calcAge = function () {
//     return 2022 - this.birthYear;
// }
// const studentvikas = new student('vikas', 1998, 'student', 'male');
// const studentshashank = new student('shashank', 1997, 'student', 'male');
// console.log(studentvikas);
// console.log(studentvikas.__proto__ === student.prototype);
// console.log(studentshashank.name, 'age is', studentshashank.calcAge())

// console.log(student.prototype);


//--------------class------------------

//classer are just as object in javascript
//classer are nothing but syntact sugar in javascript
//different ways of initalizing the class
//classser are special type of function
//1 decleration and expression 

//class expression

// const Person = class {

// }
class Person {
    static hello = 'homo';
    constructor(fullName, birthYear, experiences) {
        this.fullName = fullName;
        this.birthYear = birthYear;
        this.experiences = experiences;
        this.gender = this.gender;
    }
    //all methord we write in the class get associated with the property of the person class.
    calcAge() {
        return 2022 - this.birthYear;
    }
    //getters and settters
    get latestExperiences() {
        return this.experiences[this.experiences.length - 1];
    }
    //stter is the property not a function
    set addExperience(experience) {
        this.experiences.push(experience);
    }
    set fullName(name) {
        if (name.includes(' ')) {
            this._fullName = name;
        } else {
            console.log('This is not the full name');
        }
    }
    get fullName() {
        return this._fullName;
    }
}
const naman = new Person('naman bjpayi', 1997, ['amazon', 'phonepe'], 'male');
// console.log(naman);
// console.log(naman.__proto__ === Person.prototype);
// console.log(naman.calcAge());
// const shrey = new Person('shrey', 1987);
// //Accessor in javascript
// //console.log(naman.latestExperiences);
// naman.addExperience = 'microsoft';
//console.log(naman.experiences);
console.log(naman.fullName);
naman.fullName = 'singh shashank';
console.log(naman.fullName);
console.log(Person.hello);

//static methord
/*
static  properties or methord are class 
static methord are used as the utility  
inheritance wont work on static
*/

class Vehicle {
    constructor(brand, model, price, wheel) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.wheel = wheel;
    }
}
// class Bike extends Vehicle {
//     constructor(brand, model, price, wheel, centerOfGravity,isRoadleagel) {
//         super(brand, model, price, wheel, centerOfGravity);
//         this.isRoadleagel = isRoadleagel;
//     }
// }
class Bike extends Vehicle {
    constructor(brand, model, price, wheels, centerOfGravity) {
        super(brand, model, price, wheels);
        this.centerOfGravity = centerOfGravity;
    }
}

class SportsBike extends Bike {
    constructor(brand, model, price, wheels, centerOfGravity, isRoadLegal) {
        super(brand, model, price, wheels, centerOfGravity);
        this.isRoadLegal = isRoadLegal;
    }
}

const bike = new SportsBike("BMW", "God Knows", "35,00,000", 2, "4'", true);
console.log(bike);

class Circle {
    radius = 0;
    #pie;
    constructor(radius) {
        this.radius = radius;
        this.#pie = Math.PI;
    }
    circumference() {
        return 2 * this.#pie * this.radius;
    }
    // get pie(){
    //     return this.#pie;
    // }
}
const circles = new Circle(3);
console.log(circles.radius);
console.log(circles.circumference());
console.log(circles.pie);


