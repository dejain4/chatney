const express = require("express");
const app = express();
const path = require("path");

// Serve static files from the "public" directory
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

// Serve the index.html file for all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
