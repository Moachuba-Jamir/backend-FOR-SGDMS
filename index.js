
fetch("http://localhost:3000/esp1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Assuming server returns JSON
  })
  .then(({message}) => {
    console.log("Server response:", message);
    // Handle data as needed
  })
  .catch((error) => {
    console.error("Fetch error:", error);
    // Handle errors
  });
