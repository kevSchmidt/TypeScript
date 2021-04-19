"use strict";
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
var anyVar;
// array
var arrString = ["a", "b", "c"];
var arrNumber = [1, 2, 3];
var arrBool = [true, false];
// union
var arrMix = [1, "a", true];
// assign a string to the first index and a number to the second one
var arrTup = ["a string", 5];
var person = {
    name: "Tom",
    age: 28
};
var year;
// function type
var calcSum;
calcSum = function (first, second) {
    return first + second;
};
// void
var sayHello = function () {
    console.log("Bonjour");
};
var Charlotte = {
    name: "Charlotte",
    age: 32
};
// with class
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Bonjour, je suis " + this.name + " et j'ai " + this.age + " ans.";
    };
    return Person;
}());
var paul = new Person("Paul", 35);
console.log(paul.greet());
// ======== DOM Manipulation & Type Casting ===
var inputForm = document.querySelector("form"); // "!" specify that element exist
var inputName = document.querySelector("#name"); // type casting
var inputAge = document.querySelector("#age");
var greeting = document.querySelector(".greeting");
inputForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
    inputForm.reset();
});
// ======== Generics ===
// with function
function doSomething(arg) {
    // do something
    return arg;
}
doSomething("5");
doSomething(true);
var aNiceBook = {
    id: 1,
    title: "Zadig",
    data: "more data here"
};
var aGreatBook = {
    id: 1,
    title: "Lord of the ring",
    data: ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"]
};
// ======== Enums ===
var ManufactureMake;
(function (ManufactureMake) {
    ManufactureMake[ManufactureMake["TESLA"] = 0] = "TESLA";
    ManufactureMake[ManufactureMake["AUDI"] = 1] = "AUDI";
    ManufactureMake[ManufactureMake["MERCEDES"] = 2] = "MERCEDES";
    ManufactureMake[ManufactureMake["FERRARI"] = 3] = "FERRARI";
    ManufactureMake[ManufactureMake["VOLVO"] = 4] = "VOLVO";
})(ManufactureMake || (ManufactureMake = {}));
var myCar = {
    year: 2021,
    make: ManufactureMake.FERRARI
};
console.log(myCar.make);
