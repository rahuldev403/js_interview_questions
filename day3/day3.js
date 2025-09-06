//* 🟢 level 1 - Easy (Syntax, Hoisting, Coercion, Basics)
//? Hoisting + TDZ
// console.log(a, b);
// var a = 10;
// let b = 20;

//? Function hoisting + var
// console.log(foo);
// var foo = "hello";
// function foo() {
//   return "hi";
// }
// console.log(foo);

//? Function scope with var
// function foo() {
//   console.log(x);
//   var x = 5;
//   console.log(x);
// }
// foo();

//? Temporal Dead Zone
// let x = 10;
// {
//   console.log(x);
//   let x = 20;
// }

//? Coercion & Equality
// console.log([] == ![]);
// console.log(null == undefined);
// console.log(null === undefined);
// console.log(+"5" + 1);
// console.log("5" + 1);

//? typeof quirks
// console.log(typeof null);
// console.log(typeof NaN);

//? Array length manipulation
// const arr = [1, 2, 3];
// arr.length = 1;
// console.log(arr);

//* 🟡 Level 2 – Medium (Closures, this-binding, Prototype, Spread)

//? Closures
// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const fn1 = outer();
// fn1();
// fn1();

//? Closures inside loop
// let funcs = [];
// for (var i = 0; i < 3; i++) {
//   funcs.push(() => i);
// }
// console.log(funcs.map(fn => fn()));

//? this + setTimeout
// const person = {
//   name: "Ayush",
//   greet: function() {
//     console.log("Hi " + this.name);
//   }
// };
// setTimeout(person.greet, 100);

//? Arrow function this
// const obj = {
//   a: 10,
//   b: () => console.log(this.a)
// };
// obj.b();

//? call/apply
// const obj = { x: 42 };
// function printX() {
//   console.log(this.x);
// }
// printX.call(obj);

//? Prototype chain
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.sayHi = function () {
//   console.log("Hi " + this.name);
// };
// const p = new Person("Rahul");
// p.sayHi();

//? instanceof checks
// console.log([] instanceof Array);
// console.log([] instanceof Object);

//* [] → Array.prototype → Object.prototype → null

//? Classes + static methods
// class A {
//   static greet() {
//     console.log("Hi from A");
//   }
// }
// A.greet();
// const obj = new A();
// obj.greet();

//? Destructuring + default values
// const obj = { x: 1, y: 2 };
// const { x, z = 5 } = obj;
// console.log(x, z);

//* is the key exists in right side its ignores the default value on left

//? Spread creates shallow copy
// const a = { x: 1 };
// const b = { ...a };
// b.x = 10;
// console.log(a.x);

// //* the fix -
// const arr1 = [{ x: 1 }, { x: 2 }];
// const arr2 = structuredClone(arr1); // ✅ deep copy (modern way)

// arr2[0].x = 99;

// console.log(arr1[0].x); // 1 🎉 (not affected)
//* old way -
// const arr2 = JSON.parse(JSON.stringify(arr1));

//? Optional chaining + nullish
// const user = { profile: null };
// console.log(user.profile?.name || "Guest");

//* ?. (optional chaining) stops evaluating if the value is null or undefined , prevent errors like can not read property 'name' of null.

//* ?? (nullish coalescing) returns the right-hand value only if left-hand is null or undefined.

//* 🔴 Level 3 – Hard (Async, Event Loop, Weird Edge Cases)

//? for-loop + setTimeout problem
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }

//* let creates a new binding of i for each iteration → each callback remembers its own i.

//* Fix using IIFE
// for (var i = 0; i < 3; i++) {
//   (function(i) {
//     setTimeout(() => console.log(i), 100);
//   })(i);
// }

//? Event Loop ordering
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C"));
// console.log("D");

//? Async/await returning promise
// async function foo() {
//   return 42;
// }
// foo().then((value) => console.log(value));

//? Mutation after setTimeout scheduling
// let x = 0;
// setTimeout(() => console.log(x), 0);
// x = 5;

//? Array/Object coercion
// console.log({} + []); // if its on the start of the line its treated as a empty block ( means nothing - 0 )
// console.log([] + {});

//? for-in vs Object.keys
// const obj = { a: 1, b: 2 };
// for (let key in obj) {
//   console.log(key);
// }
// console.log(Object.keys(obj));

//? Floating point precision
// console.log(0.1 + 0.2 === 0.3);

//? Destructuring array with skip
// const [a, , b] = [1, 2, 3];
// console.log(a, b);

//? Edge case with NaN comparison
// console.log(+0 === -0);       // true
// console.log(Object.is(+0,-0)); // false

// //remember -
// console.log(NaN === NaN);
// console.log(Object.is(NaN, NaN));

//? Symbol key property
// const sym = Symbol("id");
// const obj = { [sym]: 123 };
// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertySymbols(obj));
// console.log(obj[sym])

//? Chained logical operators
// console.log(0 || "hello" && "world");

// console.log([] + []);        // "" ✅
// console.log([] + {});        // "[object Object]" ✅
// console.log({} + []); // 0 ✅ (it will give zero but only in browser console)
// console.log(true + true);    // 2 ✅
// console.log("5" - 2);        // 3 ✅
// console.log("5" + 2);        // "52" ✅
