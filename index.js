const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/redirect", (req, res) => {
  // Check if the user agent is Skype
  const userAgent = req.headers["user-agent"];
  if (userAgent.includes("Skype")) {
    // If it's Skype, send a minimal response or handle differently
    res.send("Redirecting...");
  } else {
    // Otherwise, proceed with the redirect
    res.redirect(302, "https://www.example.com");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
