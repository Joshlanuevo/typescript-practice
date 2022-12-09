"use strict";
// Basic Types
let studentID = 2019 - 105292;
let studentName = 'Josh Ivan Lanuevo';
let isPassed = true;
let x = 'Hello World'; // 'any' could be anything
let ids = [1, 2, 3, 4, 5];
let arr = ["Ivan", 22, true];
// Tuple
let person = [22, 'Ivan', true];
// Tuple Array
let people;
people = [
    [1, 'One'],
    [2, 'Two'],
    [3, 'Three'],
];
// Union
let id;
id = 123;
// Enums
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
// console.log(CardinalDirections.North); 
var CardinalDirectionString;
(function (CardinalDirectionString) {
    CardinalDirectionString["North"] = "Top";
    CardinalDirectionString["East"] = "Right";
    CardinalDirectionString["South"] = "Bottom";
    CardinalDirectionString["West"] = "Left";
})(CardinalDirectionString || (CardinalDirectionString = {}));
const user = {
    id: 1,
    name: 'Ivan'
};
// console.log(user);
// Type Assertion
let cid = 1;
// let customerID = <number>cid;
let customerID = cid;
// console.log(customerID);
// Functions
const addNum = (x, y) => {
    return x + y;
};
const user1 = {
    id: 1,
    name: 'Ivan'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// console.log(add(12,10));
// console.log(sub(12, 10));
// Classes
class Person {
    // const person1 = new Person();
    // person1.name = 'Ivan';
    // console.log(person1); = Person { name: 'Ivan' }
    register() {
        return `${this.name} is now registered`;
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const Josh = new Person(11, 'Josh Ivan');
const Kobe = new Person(24, 'Kobe Bryant');
// console.log(Josh, Kobe);
// Subclasses
class Player extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const player = new Player(30, 'Steph Curry', 'Point Guard');
// console.log(player);
// console.log(player.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['One', 'Two', 'Three', 'Four']);
// strArray.push(5);
// strArray.push('Five');
