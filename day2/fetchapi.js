function getUserData(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("User Data:", data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

getUserData(1);
