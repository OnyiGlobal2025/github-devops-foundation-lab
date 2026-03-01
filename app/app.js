const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express CI app" });
});

app.get("/healthz", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/readyz", (req, res) => {
  res.status(200).json({ status: "ready" });
});

module.exports = app;