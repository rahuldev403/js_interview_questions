const userPromise = fetch("https://jsonplaceholder.typicode.com/users/1").then(
  (res) => res.json()
);
const postsPromise = fetch(
  "https://jsonplaceholder.typicode.com/posts?userId=1"
).then((res) => res.json());

Promise.all([userPromise, postsPromise])
  .then(([user, posts]) => {
    console.log("User:", user);
    console.log("Posts:", posts);
  })
  .catch((error) => {
    console.error("Error with one of the promises:", error);
  });

const promise1 = fetch("https://jsonplaceholder.typicode.com/users/1").then(
  (res) => res.json()
);
const promise2 = fetch("https://jsonplaceholder.typicode.com/invalid").then(
  (res) => res.json()
);

Promise.allSettled([promise1, promise2]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index + 1} resolved with:`, result.value);
    } else {
      console.error(`Promise ${index + 1} rejected with:`, result.reason);
    }
  });
});
