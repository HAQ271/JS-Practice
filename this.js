// 1. Create a table of two columns, situation and value. Now add the rows for every situations and the value of this in that situation. Please cover the following situations
// At the Global
// Inside an Object Method
// Inside the Satandalone non-Arrow Function
// Inside an Arrow Function(standalone)
// Inside an Arrow Function(as object method)
// Inside an object created with the Constructor Function
// Please add examples for each of the scenarios.

// Answer

/*
================================================================================
THE "THIS" KEYWORD REFERENCE TABLE
================================================================================
| Situation                             | Value of `this`                      |
|---------------------------------------|--------------------------------------|
| At the Global                         | Global object (window / global)      |
| Inside an Object Method               | The owner object                     |
| Inside a Standalone non-Arrow Func    | `undefined` (Strict) / Global (Loose)|
| Inside an Arrow Function (Standalone) | Lexical scope (inherits from outer)  |
| Inside an Arrow Function (Obj Method) | Lexical scope (outer, NOT the object)|
| Inside a Constructor Function Object  | The newly created instance object    |
================================================================================
*/


// ==========================================
// 1. AT THE GLOBAL LEVEL
// ==========================================
// Explanation: In the global execution context (outside any function or object),
// `this` refers to the global environment object (`window` in browsers, 
// `global` or an empty module object in Node.js).

console.log("--- 1. Global Context ---");
console.log(this); // In Node.js module: {} or global depending on setup


// ==========================================
// 2. INSIDE AN OBJECT METHOD
// ==========================================
// Explanation: When a function is called as a method of an object using standard 
// function syntax, `this` points to the object that is invoking the method.

console.log("\n--- 2. Object Method ---");
const userObj = {
    name: "Alex",
    showName: function() {
        console.log(this.name); // `this` refers to `userObj`
        console.log(this);      // Refers to the entire `userObj`
    }
};
userObj.showName(); // Output: Alex


// ==========================================
// 3. INSIDE A STANDALONE NON-ARROW FUNCTION
// ==========================================
// Explanation: In a regular function declaration or expression called on its own, 
// `this` is `undefined` (in strict mode, which modern ES6+ JS uses by default) 
// or points to the global object in non-strict mode.

console.log("\n--- 3. Standalone non-Arrow Function ---");
function standaloneFunc() {
    'use strict';
    console.log(this); // Output: undefined
}
standaloneFunc();


// ==========================================
// 4. INSIDE AN ARROW FUNCTION (STANDALONE)
// ==========================================
// Explanation: Arrow functions do not have their own `this`. They capture 
// `this` from their surrounding (lexical) execution context at the time they are defined.

console.log("\n--- 4. Standalone Arrow Function ---");
const globalArrow = () => {
    console.log(this); // Inherits `this` from the outer global scope
};
globalArrow();


// ==========================================
// 5. INSIDE AN ARROW FUNCTION (AS OBJECT METHOD)
// ==========================================
// Explanation: This is a classic trap! Because arrow functions inherit `this` 
// lexically from their outer scope (not the object), writing a method with an 
// arrow function causes `this` to point to the global scope instead of the object.

console.log("\n--- 5. Arrow Function as Object Method ---");
const badObj = {
    name: "Bob",
    // Dangerous: Arrow function used as a method
    showName: () => {
        console.log(this.name); // Output: undefined (because `this` points to global scope)
    }
};
badObj.showName();


// ==========================================
// 6. INSIDE AN OBJECT CREATED WITH A CONSTRUCTOR FUNCTION
// ==========================================
// Explanation: When you use a constructor function with the `new` keyword, 
// JavaScript creates a brand new, empty object, binds `this` to point to that 
// new instance, and automatically returns it.

console.log("\n--- 6. Constructor Function Object ---");
function Person(name, age) {
    // `this` points to the newly created instance object
    this.name = name;
    this.age = age;
}

const person1 = new Person("Charlie", 30);
console.log(person1.name); // Output: Charlie
console.log(person1.age);  // Output: 30


// 2. What is the problem here? Fix it to log the correct name and explain the fix

const user1 = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

user1.greet();

// It have Problem in the Object Method That is in Arrow Function there this points to the
// global window object, to fix that we nee to make it in normal function format or 
// make it next more one level down to fix that properly

// Fix the Issue

const user2 = {
  name: "tapaScript",
  greet: function (){
    console.log(`Hello, ${this.name}!`);
  },
};

user2.greet();


// 3. Can you explain what is the problem here and fix the issue to log the correct name?

const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn();

// Problem is that obj.greet is method that should be call with bracket but here we are not calling it 
// in greetFn variable that why it return the standalone function which this points to the window Object
// if we use in strict mode then it gave the undefined

// Fix the Issue

const greetFn2 = () => obj.greet;  // First way
const greetFn3 = obj.greet.bind(obj);  // Second Way


// 4. What is the problem with the following code? Why isn't it logging the name correctly?

const user3 = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user3.greet();


// Answer : It is not Printing the name --> Because function inside inner function treats as
//          standalone function it checks our surround environment and it in lexically scope
//          under outer function that makes it standalone function and not point to the respective object

// Fix the Issue

const user4 = {
  name: "Alex",
  greet: function () {
    const inner = () => {
      console.log(`Hello, ${this.name}!`); 
    };
    inner();
  },
};

user4.greet();


// 5. Create a Sports constructor function that takes name and number of players as arguments
//    and assigns them using this keyword. Then, create two sports instances and log their details

function Sports(name, number){
    this.name = name
    this.number = number
}

const player1 = new Sports("Hafiz Abdul Qadir",22)
const player2 = new Sports("Ahmed",67)

console.log("Player 1 Detail")
console.log(`Name = ${player1.name}`)
console.log(`Player 1 Number = ${player1.number}`)

console.log("Player 2 Detail")
console.log(`Name = ${player2.name}`)
console.log(`Player 2 Number = ${player2.number}`)


// 6. Can you attach the car1's describe() method to car2 object? 
// Give all possible solutions that you can think of

const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

// Answer- Total 4 Ways

car1.describe.call(car2) // I think this way we can attach with car 1 describe method 
car1.describe.apply(car2)

const car2Describe = car1.describe.bind(car2)
car2Describe()

car2.describe = car1.describe
car2.describe()


// 7. What will be the output of the following code and why?

const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();

// Options are:

// A: "Charlie" and "Charlie"
// B: "Charlie" and undefined
// C: "Charlie" and "" (empty string)
// D: undefined and "Charlie"

// Answer : Output = B --> Charlie and undefined --> Beacuse simple function map this with the object
//            but arrow function does not map this on the object it maps on the outer scope which is window object

