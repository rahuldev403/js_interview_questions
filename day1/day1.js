//* A. Variables & Hoisting

//? Hoisting is javascript's behaviour of moving declartions (not initializations) to the top of the scope (global or function) during the creation phase of the execution context

//? Before any code runs, JS scans the file and sets aside memory for functions and variables.

//? Functions (declarations): fully hoisted (can be called before defined).

//? Variables (var): hoisted but initialized as undefined.

//? Variables (let/const): hoisted but left uninitialized (TDZ).

//*--->

//! What will the following log?
// console.log(a);
// var a = 10;
// console.log(b);
// let b = 20;

//! Why does typeof 'null' return "object"?
//? the 32 bit explanation - 000(object)

//! What will this output and why?
// console.log(x);
// var x = x || 10;
// console.log(x);

//! Difference between:
// console.log(1 == '1');
// console.log(1 === '1');

//! 👉 What do you think the outputs will be?
// console.log(1 == '1');
// console.log(1 === '1');

//* A closure is when a function "remembers" and accesses variables from its lexical scope even when it’s executed outside that scope. Closures are used for data privacy, callbacks, currying, and async code.
//! 👉 What do you think this will print?
// function outer() {
// let a = 5; //---> also in var
// function inner() {
// console.log(a);
// }
// inner()
// a = 10;
// return inner;
// }
// outer()();

//!👉 What do you think the output will be here?
// function counter() {
//   let count = 0;
//   return function () {
//     return ++count;
//   };
// }

// const c1 = counter();
// console.log(c1());
// console.log(c1());

// const c2 = counter();
// console.log(c2());

//!👉 What do you think will happen here?
// sayHello();
// function sayHello() {
//   console.log('Hello');
// }
// //console.log(sayHi)
// sayHi(); //---> sayHi declared with var (hint)
// var sayHi = function () {
//   console.log('Hi');
// };

//* 'this' is a special keyword that refers to the execution context (the object that "owns" the function call).

//* Its value is not decided at definition time, but at runtime (call time), depending on how the function is called.

//* the value of this keyword inside a HTML element is the object of the element. ( thanks me later 😉)

//* (function(exports, require, module, __filename, __dirname) {
//*     // Your module code
//* })();

//!👉 What do you think will be logged here?
//*---> global object in node and window object in browser its depends on strict mode ('use strict')
// function foo1() {
//   console.log(this);
// }
// foo1();

// const foo2 = () => {
//   console.log(this);
// };
// foo2();

//!👉 What do you think the output will be?
// const obj = {
//   name: "Ayush",
//   regularFn: function () {
//     console.log("regularFn:", this.name);
//   },
//   arrowFn: () => {
//     console.log("arrowFn:", this.name); //---> enclosing lexical context
//   },
// };

// obj.regularFn();
// obj.arrowFn();

//!👉 What do you think will be logged?
// const obj = {
//   name: "Riyanshi",
//   regularFn: function () {
//     //const self = obj;
//     setTimeout(function () {
//       console.log("regularFn:", self.name);
//     }, 100);
//   },
//   arrowFn: function () {
//     setTimeout(() => {
//       console.log("arrowFn:", this.name);
//     }, 100);
//   },
// };

// obj.regularFn();
// obj.arrowFn();

//*---> (Bonus)
// function greet(greeting) {
//   console.log(greeting, this.name);
// }

// const person = { name: "Rahul" };

// greet.call(person, "Hello"); // Hello Rahul
// greet.apply(person, ["Hi"]); // Hi Rahul

// const boundFn = greet.bind(person);
// boundFn("Hey"); // Hey Rahul

//! What will be the output here?
// function Person(name) {
//   this.name = name;
// }

// const person1 = new Person("Rahul"); //---> prototype to parent object
// const person2 = Person("Swain");

// console.log(person1.name);
// console.log(person2);

//! let’s tackle next question ->
// function foo() {
//   return this.a;
// }

// const obj1 = { a: 1, foo };
// const obj2 = { a: 2 };

// console.log(obj1.foo());       // ?
// console.log(foo.call(obj2));   // ?
// console.log(foo());            // ?

//!👉 What do you think will be logged?
// const arr = [10, 20, 30];

// arr[100] = 200;

// console.log(arr.length);
// console.log(arr[50]);

//!👉 What do you think will be logged?
// console.log(typeof null);
// console.log(typeof NaN);
// console.log(NaN === NaN); //--->(NaN as "an invalid number value")

//!👉 What do you think will be logged here?
// console.log(1 + "2" + "3");
// console.log("1" - "2" + "3");
// console.log("1" + true);
// console.log("1" - true);

//!👉 What do you think these will print?
//* [].toString() = "" ;
//* {}.toString() = "[object,object]"

// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// console.log({} + {});

//! What do you think this prints, and why?
//* floating-point precision error
// console.log(0.1 + 0.2 === 0.3);

//! 👉 What do you think the outputs will be?
// console.log(typeof NaN);     // ?
// console.log(NaN === NaN);    // ?
// console.log(Object.is(NaN, NaN)); // ?

//* Object.is like .equals in java (more precise equality check)

//!👉 What do you think the outputs will be?
// console.log([] == ![]);
// console.log([] == []);
// console.log([1,2] == "1,2");

//* Arrays are objects.
//* In JS, == and === check reference equality for objects.

//! What will the following code print and why?
// console.log([] == 0);
// console.log([] == false);
// console.log([1] == true);

//* "" can coerced to a number -> 0
//* Arrays become strings ([].toString() → "", [1] → "1", [1,2] → "1,2").
//* In loose equality, both sides are coerced until they’re the same type.

//! topic to deep cover ->
//? Hoisting (functions vs function expressions vs var/let/const).

//? Closures (especially with setTimeout loops).

//? this keyword (object methods, arrow functions, constructors).

//? new keyword & constructor functions.

//? Type coercion (==) rules (objects, arrays, truthy/falsy conversions).

//? Truthy & falsy values in JS.

//? Floating point precision (0.1 + 0.2 issues).
