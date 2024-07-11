const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000; // You can change this to any port you prefer



// Middleware to parse JSON body
app.use(express.json());
app.use(cors());
// GET endpoint to receive messages
app.get("/messages", (req, res) => {
  // Handle GET request to /messages
  res.json({ message: "Received GET request" });
});

// POST endpoint to send messages
app.post("/messages", (req, res) => {
  // Handle POST request to /messages
  const { message } = req.body;
  console.log("Received message:", message);
  res.json({ status: "Message received", message });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
