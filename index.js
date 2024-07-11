
fetch("http://localhost:3000/messages")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Assuming server returns JSON
  })
  .then((data) => {
    console.log("Server response:", data);
    // Handle data as needed
  })
  .catch((error) => {
    console.error("Fetch error:", error);
    // Handle errors
  });
