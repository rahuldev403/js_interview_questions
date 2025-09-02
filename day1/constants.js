//? JavaScript (like most languages) uses IEEE 754 double-precision floating-point for numbers.

//? Some decimal fractions (like 0.1 or 0.2) cannot be represented exactly in binary.

//? Internally:

//* 0.1 ≈ 0.10000000000000000555...

//* 0.2 ≈ 0.20000000000000001110...

// Compare:

// 0.3000000000000000444... === 0.3 → false

//! console.log((0.1 + 0.2).toFixed(2) === "0.30"); // true

//! "5" + 2     // "52" (string concatenation)
//! "5" - 2     // 3   (string → number)

//* 🔹 Falsy values in JavaScript

//* Only 8 values are falsy. Everything else is truthy.

//? false

//? 0

//? -0

//? 0n (BigInt zero)

//? "" (empty string)

//? null

//? undefined

//? NaN

//* 🔹 Truthy values

//* Everything not in the falsy list is truthy.
//* Examples:

//? "hello"

//? " " (string with a space)

//? [] (empty array)

//? {} (empty object)

//? function() {} (functions are objects)

//? Infinity, -Infinity

//? Any non-zero number (positive or negative)

//? Any non-empty string