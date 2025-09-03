//! What is a Promise in JavaScript? How does it work?

//? Answer: A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It can be in one of three states: pending, fulfilled, or rejected.

//! How a peomise is created in javaScript?

//? A Promise is created using the new Promise() constructor, which takes an executor function with resolve and reject parameters.

//! What is Promise chaining?

//? Answer: Promise chaining involves linking multiple .then() methods to handle asynchronous operations sequentially.

//! What is the difference between Promise.all() and Promise.race()?

//? Answer: Promise.all() waits for all promises to resolve or for one to reject, while Promise.race() resolves or rejects as soon as one of the promises resolves or rejects.

//! What is Promise.allSettled()?

//? Answer: Promise.allSettled() waits for all promises to settle (either resolve or reject) and returns an array of objects describing the outcome of each promise.

//! What is Promise.any()?

//? Answer: Promise.any() returns the first promise that resolves, ignoring rejected promises.

//! How do you convert a callback-based function to return a Promise?

//? Answer: You can wrap the callback-based function inside a new Promise, using resolve and reject to handle success and failure, respectively.

//! What is the purpose of async and await in JavaScript?

//? Answer: async is used to declare a function as asynchronous, and await is used inside an async function to pause execution until a Promise is resolved.

//! Can you use await outside of an async function?

//? Answer: No, await can only be used inside an async function.

//! How do you handle errors in async functions?

//? Answer: Errors in async functions are handled using try...catch blocks.

//! What happens if you return a value from an async function?

//? Answer: If a value is returned from an async function, it is automatically wrapped in a resolved Promise.

//! What is the event loop in JavaScript?

//? Answer: The event loop is a mechanism that handles asynchronous operations by placing them in a queue and executing them when the call stack is empty.

//!  What is the difference between setTimeout and setInterval?

//? Answer: setTimeout executes a function once after a specified delay, while setInterval executes a function repeatedly at specified intervals.

//! How do you handle multiple async operations concurrently?

//? Answer: You can use Promise.all() to handle multiple async operations concurrently.

//! What is the difference between Promise.all() and Promise.allSettled()?

//? Answer: Promise.all() rejects as soon as one promise rejects, while Promise.allSettled() waits for all promises to settle before returning.

//! How do you handle timeouts in async operations?

//? Answer: You can use Promise.race() with a timeout Promise to handle timeouts in async operations.

//! What is the purpose of finally() in Promises?

//? Answer: finally() is used to execute code after a Promise is settled, regardless of its outcome.

//! How do you handle async operations in loops?

//? Answer: You can use for...of with await to handle async operations in loops.

//! What is the difference between async/await and .then()/.catch()?

//? Answer: async/await provides a more synchronous-like syntax for handling asynchronous operations, while .then()/.catch() uses Promise chaining.
