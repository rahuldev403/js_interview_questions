function getUserData(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((userData) => {
      console.log("User Data:", userData);
      return fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
    })
    .then((postsResponse) => postsResponse.json())
    .then((posts) => {
      console.log("User Posts:", posts);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

getUserData(1);
