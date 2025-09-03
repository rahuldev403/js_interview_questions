// Fetching an API and Viewing Returned Data

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json()) ///---> this is also an promise 
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Removing .then() and .catch(), Using async and await
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();

//Replacing fetch with axios
// First, install axios if not already installed:
// npm install axios

const axios = require("axios");

async function fetchData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    console.log("Fetched Data:", response.data); // Axios returns data directly in `response.data`
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();
