// Basic Types
let studentID: number = 2019-105292;
let studentName: string = 'Josh Ivan Lanuevo';
let isPassed: boolean = true;
let x: any = 'Hello World'; // 'any' could be anything

let ids: number[] = [1,2,3,4,5];
let arr: any[] = ["Ivan", 22, true];


// Tuple
let person: [number, string, boolean] = [22, 'Ivan', true];


// Tuple Array
let people: [number, string][];

people = [
    [1, 'One'],
    [2, 'Two'],
    [3, 'Three'],
];


// Union
let id: string | number
id = 123; 


// Enums
enum CardinalDirections {
    North = 1,
    East,
    South,
    West
}

// console.log(CardinalDirections.North); 

enum CardinalDirectionString {
    North = 'Top',
    East = 'Right',
    South = 'Bottom',
    West = 'Left'
}

// console.log(CardinalDirectionString.North);


// Objects
type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: 'Ivan'
}

// console.log(user);


// Type Assertion
let cid: any = 1;
// let customerID = <number>cid;
let customerID = cid as number;
// console.log(customerID);


// Functions
const addNum = (x: number, y: number): number => {
    return x + y;
}

// console.log(addNum(20,35));


// Interfaces
interface UserIntreface {
    readonly id: number
    name: string
}

const user1: UserIntreface = {
    id: 1,
    name: 'Ivan'
}

// console.log(user1);

interface MathFunction {
    (x: number, y: number): number
}

const add: MathFunction = (x: number, y: number): number => x + y;
const sub: MathFunction = (x: number, y: number): number => x - y;

// console.log(add(12,10));
// console.log(sub(12, 10));


// Classes
class Person {
    id: number;
    name: string;

    // const person1 = new Person();
    // person1.name = 'Ivan';

    // console.log(person1); = Person { name: 'Ivan' }

    register(){
        return `${this.name} is now registered`
    }

    constructor (id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const Josh = new Person(11, 'Josh Ivan');
const Kobe = new Person(24, 'Kobe Bryant');

// console.log(Josh, Kobe);

// Subclasses
class Player extends Person {
    position: string;

    constructor(id: number, name: string, position: string ) {
        super(id, name);
        this.position = position;
    }
}

const player = new Player(30, 'Steph Curry', 'Point Guard');

// console.log(player);
// console.log(player.register());


// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['One', 'Two', 'Three', 'Four']);

// strArray.push(5);
// strArray.push('Five');

