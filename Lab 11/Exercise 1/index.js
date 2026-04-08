const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Request received:", req.url);

    // Set header
    res.setHeader("Content-Type", "text/plain");

    // Routing logic
    if (req.url === "/") {
        res.write("Home Page");
    } else if (req.url === "/about") {
        res.write("About Page");
    } else {
        res.write("404 Not Found");
    }

    res.end(); // End response
});

// Start server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});