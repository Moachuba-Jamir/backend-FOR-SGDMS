const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000; // You can change this to any port you prefer

// Routes
const msgRouter = require('./routes/eps1');

//default end point
app.get("/", (req, res) => {
  res.json({ message: "Server is working fine! Hello from the server!" });
});

// Middleware to parse JSON body
app.use(express.json());
app.use(cors());
app.use('/esp1', msgRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
