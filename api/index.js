const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const indexFile = path.resolve(__dirname, "..", "public", "index.html");

app.get("/", (req, res) => {
  res.sendFile(indexFile);
});

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server ready on http://localhost:${port}`);
  });
}

module.exports = app;
