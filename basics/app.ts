/* ***
************************************************************
************************ TYPESCRIPT ************************ 
************************************************************

commands:
    tsc --init ==> generate tsconfig.json
    tsc <name.ts> <name.js> ==> compile ts file
    tsc -w ==> compile with watch

***   */

// ======== Types in TypeScript ====

// any
let anyVar: any 

// array
let arrString: string[] = ["a", "b", "c"] 
let arrNumber: number[] = [1, 2, 3]
let arrBool: boolean[] = [true, false]

// union
let arrMix: (string | number | boolean)[] = [1, "a", true]

// assign a string to the first index and a number to the second one
let arrTup: [string, number] = ["a string", 5]
let person = {
    name: "Tom",
    age: 28
}

// custom type
type stringOrNum = string | number;
let year: stringOrNum;

// function type
let calcSum: (a: number, b: number, third?: number) => number; 
calcSum = (first: number, second: number) => {
    return first + second;
}

// void
const sayHello = () => {
    console.log("Bonjour")
}

// ======== Interfaces ====

// with object
interface PersonInterface {
    name: string;
    age:number;
}

let Charlotte: PersonInterface = {
    name: "Charlotte",
    age: 32
}

// with class
class Person implements PersonInterface {
    constructor(public name: string, public age: number) {}

    greet() {
        return `Bonjour, je suis ${this.name} et j'ai ${this.age} ans.`
    }
}

let paul = new Person("Paul", 35);
console.log(paul.greet());

// ======== DOM Manipulation & Type Casting ===

const inputForm = document.querySelector("form")!; // "!" specify that element exist
const inputName = document.querySelector("#name") as HTMLInputElement; // type casting
const inputAge = document.querySelector("#age") as HTMLInputElement;
const greeting = document.querySelector(".greeting") as HTMLDivElement;

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
    inputForm.reset();
})

// ======== Generics ===

// with function
function doSomething<T>(arg: T): T {
    // do something
    return arg
}

doSomething<string>("5")
doSomething<boolean>(true)

// with interface
interface book<T> {
    id: number,
    title: string,
    data: T
}

const aNiceBook: book<String> = {
    id: 1,
    title: "Zadig",
    data: "more data here"
}
const aGreatBook: book<string[]> = {
    id: 1,
    title: "Lord of the ring",
    data: ["The Fellowship of the Ring", "The Two Towers","The Return of the King"]
}

// ======== Enums ===

enum ManufactureMake { TESLA, AUDI, MERCEDES, FERRARI, VOLVO }

const myCar = {
    year: 2021,
    make: ManufactureMake.FERRARI
}

console.log(myCar.make);