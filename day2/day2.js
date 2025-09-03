//* when promise gets resolved the value it returns is handeled by ".then()"
//* similarly when promise rejected we use ".catch()" to handel errors

//*---->Execution stack and event que
//? Execution stack - for sync functions
//? Even queue - for async functions

//! the concept of event-loop (we will study about it when node js is gonna introduced)

//*---->promises have a lower priority than setTimeout. The promise’s .then() callback is placed in the microtask queue and gets executed before any tasks in the event queue (like setTimeout)

//! 👉 What will be the output order?
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0); //--->macrotask

// Promise.resolve().then(() => {
//   console.log("C");
// }); //--->microtask

// console.log("D");

//! What will be the output of this code and why?
// console.log("Start");

// async function testAsync() { //--->returns a promise immediately
//   console.log("Inside Async Function");
//   return "Returned Value";
// }

// testAsync().then(result => console.log(result));

// console.log("End");

//*---> async , await always return a promise

//! What will be the output of this code and why?
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C");
// });

// console.log("D");

// setTimeout(() => {
//   console.log("E");
// }, 0);

//! What will be the output of this code and why?
// console.log("Start");

// async function foo() {
//   console.log("Inside foo");
//   await Promise.resolve();
//   console.log("After await");
// }

// foo();

// console.log("End");

//! What will be the output of this code and why?
// let x = 10;

// function foo() {
//   let x = 20;
//   console.log(x);
// }

// foo();

// console.log(x);

//! What will be the output of this code and why?
// let count = 0;

// function increment() {
//   count++;
//   return count;
// }

// const result1 = increment();
// const result2 = increment();

// console.log(result1);
// console.log(result2);

//! What will be the output of this code and why?
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "First");
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Second");
// });

// Promise.all([promise1, promise2])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//*--->Promise.all() takes an array of promises and waits for all of them to resolve (or for one of them to reject).

//! What will be the output of this code and why?
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "First");
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "Second");
// });

// Promise.all([promise1, promise2])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//*--->Promise.race() takes an array of promises and resolves as soon as one of the promises resolves or rejects.

//! What will be the output of this code and why?
// console.log("Start");

// async function foo() {
//   console.log("Inside foo");
//   return new Error("Something went wrong");
// }

// foo()
//   .then((result) => console.log(result))
//   .catch((error) => console.log("Caught:", error));

// console.log("End");

//! What will be the output of this code and why?
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "First");
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Second");
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "Third");
// });

// Promise.all([promise1, promise2, promise3])
//   .then((results) => console.log(results))
//   .catch((error) => console.log(error));

//! What will be the output of this code and why?
// let count = 0;

// function increment() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       count++;
//       resolve(count);
//     }, 1000);
//   });
// }

// increment()
//   .then((result) => {
//     console.log(result);
//     return increment();
//   })
//   .then((result) => {
//     console.log(result);
//     return increment();
//   })
//   .then((result) => {
//     console.log(result);
//   });

//! What will be the output of this code and why?
// async function asyncFunction() {
//   return "Hello";
// }

// asyncFunction().then((result) => console.log(result));

// async function anotherAsyncFunction() {
//   throw "Oops!";
// }

// anotherAsyncFunction()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//! What will be the output of this code and why?
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "Resolved promise1");
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 2000, "Rejected promise2");
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1500, "Resolved promise3");
// });

// Promise.allSettled([promise1, promise2, promise3]).then((results) =>
//   console.log(results)
// );

//! What will be the output of this code and why?
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Resolved"), 2000);
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//     throw new Error("Something went wrong");
//     // return "something went wrong"
//   })
//   .catch((error) => {
//     console.log("Caught:", error.message);
//   })
//   .finally(() => {
//     console.log("Finally block executed");
//   });

//*--->finally() - It is guaranteed to run whether the promise was fulfilled or rejected.

//! What will be the output of this code and why?
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Error!"), 1000);
// });

// promise
//   .then((result) => {
//     console.log("Success:", result);
//     return "Recovered";
//   })
//   .catch((error) => {
//     console.log("Caught:", error);
//     return "Not Recovered";
//   })
//   .then((result) => console.log("Final Result:", result));

//* When you call fetch(url), it initiates an HTTP request to the specified URL.

//* It returns a Promise, which resolves to a Response object once the request completes. This Response object contains information about the HTTP response, such as the status code, headers, and the actual data (body).

//* You can access the response body in different formats (like json(), text(), or blob()) depending on the content type returned by the server.

//* fetch only rejects a promise on network errors or if something goes wrong in the request itself (e.g., no internet connection, DNS error). It does not reject on HTTP errors like 404 or 500. Instead, it resolves with a Response object, and you need to manually check the response.ok property to detect if the request failed (e.g., if the status code is not 200).

//! You need to fetch user data from an API, process it, and log the returned data object. Here's the API URL: https://jsonplaceholder.typicode.com/users/1.

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     const data = res.json();
//     return data;
//   })
//   .then((data) => {
//     const response = data;
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! You have the following code using .then() and .catch(). Refactor the code to use async/await instead of .then() and .catch().

// function hello(){
//   return fetch("https://jsonplaceholder.typicode.com/users/1")
// }
// async function hello2(){
//   try{
//     let response = await hello()
//     let data = await response.json()
//     console.log(data)
//   }catch(error){
//    console.log(error)
//   }
// }
// hello2()

//* When you call axios.get(url), it internally uses either the XMLHttpRequest or fetch (depending on the environment) to send an HTTP request.

//* It automatically handles JSON parsing for you. When the response is returned, axios automatically parses the response data as JSON if the Content-Type header is application/json.

//* It returns a Promise with a response object, which contains data (the actual response data), status, headers, and config (config object).

//* Axios also allows request and response interceptors, allowing you to modify the request or handle errors globally before the request is sent or after the response is received.

//* Axios automatically rejects the promise for HTTP status codes outside the 2xx range (e.g., 404 or 500), so you don’t have to manually check the status code like fetch.

//* It rejects the promise for network errors and any other unexpected failures (e.g., timeout)

//! You need to replace the fetch call in the previous solution with axios. Use axios to make the API request.
