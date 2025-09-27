const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "frontend"))); // points to your frontend folder

// API route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Catch all route to serve index.html for frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/index.html"));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
