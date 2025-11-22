const express = require("express");
const app = express();

app.use(express.json());

let users = [];

app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("User added successfully");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


// HOW TO RUN THIS APPLICATION:
// Step 1: Open terminal inside this folder
// Step 2: Run → node app.js
// Step 3: Open browser → http://localhost:3000/users (GET request)

// HOW TO TEST CREATE REQUEST (POSTMAN OR TERMINAL):
// Example Terminal Command to add a User:
// curl -X POST -H "Content-Type: application/json" -d '{"name":"Nikhil","age":21}' http://localhost:3000/users
