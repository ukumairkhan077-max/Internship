const express = require("express");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Custom logging middleware
const logger = (req, res, next) => {
    console.log(
        `${req.method} ${req.url} - ${new Date().toISOString()}`
    );

    next();
};

// Use logger for every incoming request
app.use(logger);

// GET route
app.get("/users", (req, res) => {
    res.json({
        message: "Users fetched successfully"
    });
});

// POST route
app.post("/users", (req, res) => {
    console.log(req.body);

    res.status(201).json({
        message: "User created",
        user: req.body
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});