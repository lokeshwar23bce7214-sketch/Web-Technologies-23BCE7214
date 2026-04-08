const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON

// Sample data (in-memory)
let users = [
    { id: 1, name: "Lokesh" },
    { id: 2, name: "User2" }
];

// GET all users
app.get("/users", (req, res) => {
    res.json(users);
});

// GET single user (route param)
app.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    res.json(user || { message: "User not found" });
});

// POST (add user)
app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.json(newUser);
});

// PUT (update user)
app.put("/users/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.json({ message: "User not found" });
    }
});

// DELETE user
app.delete("/users/:id", (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.json({ message: "User deleted" });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});