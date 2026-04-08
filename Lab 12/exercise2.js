// Lab 12 - Exercise 2: Middleware in Express

const express = require("express");
const app = express();

// ✅ Global Middleware (applies to all routes)
app.use((req, res, next) => {
    const time = new Date().toLocaleTimeString();
    console.log(`[GLOBAL] ${req.method} ${req.url} at ${time}`);
    next(); // move to next middleware/route
});

// ✅ Route-level Middleware
const checkUser = (req, res, next) => {
    console.log("[ROUTE] Checking user...");
    next();
};

// Another middleware (chaining)
const secondMiddleware = (req, res, next) => {
    console.log("[ROUTE] Second middleware executed");
    next();
};

// Route using middleware chain
app.get("/home", checkUser, secondMiddleware, (req, res) => {
    res.send("Welcome to Home Page");
});

// Another route (only global middleware applies)
app.get("/about", (req, res) => {
    res.send("About Page");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});