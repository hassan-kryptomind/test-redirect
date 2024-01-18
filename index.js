const express = require("express");
const app = express();
const port = 3000;

app.get("/redirect", (req, res) => {
  // Redirect to the desired URL
  res.redirect(302, "https://www.example.com");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
