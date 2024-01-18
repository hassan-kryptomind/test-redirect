const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/redirect", (req, res) => {
  // Redirect to the desired URL
  res.redirect(302, "https://www.example.com");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
